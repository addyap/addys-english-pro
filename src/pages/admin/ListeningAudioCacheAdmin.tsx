import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RefreshCw, Flame, Trash2, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";

const SLUGS = ["customer-service-call", "journalist-interview", "museum-reception"];

interface StatusItem {
  slug: string;
  exists: boolean;
  publicUrl: string;
}

interface ActionResult {
  slug: string;
  action: string;
  success: boolean;
  message: string;
}

export default function ListeningAudioCacheAdmin() {
  const [adminSecret, setAdminSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusItems, setStatusItems] = useState<StatusItem[]>([]);
  const [actionResults, setActionResults] = useState<Record<string, ActionResult>>({});

  const callAdminEndpoint = async (action: string) => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    if (!supabaseUrl) {
      toast.error("Supabase URL not configured");
      return null;
    }

    if (!adminSecret.trim()) {
      toast.error("Please enter the admin secret");
      return null;
    }

    const response = await fetch(supabaseUrl + "/functions/v1/listening-audio-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": adminSecret,
      },
      body: JSON.stringify({ action }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Request failed: " + response.status);
    }

    return data;
  };

  const handleRefreshStatus = async () => {
    setLoading(true);
    try {
      const data = await callAdminEndpoint("status");
      if (data && data.items) {
        setStatusItems(data.items);
        toast.success("Status refreshed");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      toast.error("Failed: " + message);
    }
    setLoading(false);
  };

  const handleWarmCache = async () => {
    setLoading(true);
    try {
      const data = await callAdminEndpoint("warm");
      if (data) {
        const newResults: Record<string, ActionResult> = {};

        if (data.warmed) {
          for (const slug of data.warmed) {
            newResults[slug] = { slug, action: "warm", success: true, message: "Generated" };
          }
        }
        if (data.skipped) {
          for (const slug of data.skipped) {
            newResults[slug] = { slug, action: "warm", success: true, message: "Already cached" };
          }
        }
        if (data.failed) {
          for (const item of data.failed) {
            newResults[item.slug] = { slug: item.slug, action: "warm", success: false, message: item.error };
          }
        }

        setActionResults(prev => ({ ...prev, ...newResults }));
        toast.success("Warm complete: " + (data.warmed?.length || 0) + " generated, " + (data.skipped?.length || 0) + " skipped");

        // Refresh status
        const statusData = await callAdminEndpoint("status");
        if (statusData && statusData.items) {
          setStatusItems(statusData.items);
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      toast.error("Failed: " + message);
    }
    setLoading(false);
  };

  const handlePurgeCache = async () => {
    const confirmed = window.confirm("Are you sure you want to purge all cached audio files? This cannot be undone.");
    if (!confirmed) return;

    setLoading(true);
    try {
      const data = await callAdminEndpoint("purge");
      if (data) {
        const newResults: Record<string, ActionResult> = {};

        if (data.deleted) {
          for (const slug of data.deleted) {
            newResults[slug] = { slug, action: "purge", success: true, message: "Deleted" };
          }
        }
        if (data.failed) {
          for (const item of data.failed) {
            newResults[item.slug] = { slug: item.slug, action: "purge", success: false, message: item.error };
          }
        }

        setActionResults(prev => ({ ...prev, ...newResults }));
        toast.success("Purge complete: " + (data.deleted?.length || 0) + " deleted");

        // Refresh status
        const statusData = await callAdminEndpoint("status");
        if (statusData && statusData.items) {
          setStatusItems(statusData.items);
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      toast.error("Failed: " + message);
    }
    setLoading(false);
  };

  return (
    <>
      <SEOHead
        title="Listening Audio Cache | Admin"
        description="Admin tools for managing listening exercise audio cache"
        noIndex
      />

      <div className="container mx-auto py-8 px-4 max-w-3xl">
        <h1 className="text-2xl font-bold mb-6">Listening Audio Cache</h1>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Admin Secret</label>
          <Input
            type="password"
            value={adminSecret}
            onChange={(e) => setAdminSecret(e.target.value)}
            placeholder="Enter admin secret"
            className="max-w-sm"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <Button onClick={handleRefreshStatus} disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
            Refresh status
          </Button>
          <Button onClick={handleWarmCache} disabled={loading} variant="secondary">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Flame className="mr-2 h-4 w-4" />}
            Warm cache
          </Button>
          <Button onClick={handlePurgeCache} disabled={loading} variant="destructive">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
            Purge cache
          </Button>
        </div>

        <div className="space-y-4">
          {SLUGS.map((slug) => {
            const statusItem = statusItems.find((s) => s.slug === slug);
            const result = actionResults[slug];

            return (
              <Card key={slug}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="capitalize">{slug.replace(/-/g, " ")}</span>
                    {statusItem && (
                      statusItem.exists ? (
                        <Badge className="bg-green-600">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Cached
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <XCircle className="mr-1 h-3 w-3" />
                          Not cached
                        </Badge>
                      )
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="mb-2">{slug}.mp3</p>
                  {statusItem && statusItem.exists && (
                    <a
                      href={statusItem.publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Public URL
                    </a>
                  )}
                  {result && (
                    <div className={"mt-2 text-xs " + (result.success ? "text-green-600" : "text-destructive")}>
                      Last action ({result.action}): {result.message}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
