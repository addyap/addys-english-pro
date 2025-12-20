import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RefreshCw, Flame, Trash2, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { listeningExercises } from "@/data/listeningExercises";

// Build slugs from canonical data source
const slugs = listeningExercises.map((e) => e.slug);

interface StatusItem {
  slug: string;
  exists: boolean;
  publicUrl: string;
}

interface ActionResult {
  success: boolean;
  message: string;
}

interface WarmSummary {
  generated: number;
  cached: number;
  failed: number;
}

interface PurgeSummary {
  deleted: number;
  failed: number;
}

type CurrentAction = "status" | "warm" | "purge" | null;

export default function ListeningAudioCacheAdmin() {
  const [adminSecret, setAdminSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [statusItems, setStatusItems] = useState<StatusItem[]>([]);
  const [actionResults, setActionResults] = useState<Record<string, ActionResult>>({});
  const [currentAction, setCurrentAction] = useState<CurrentAction>(null);
  const [warmSummary, setWarmSummary] = useState<WarmSummary | null>(null);
  const [purgeSummary, setPurgeSummary] = useState<PurgeSummary | null>(null);

  const callAdmin = useCallback(
    async (action: "status" | "warm" | "purge"): Promise<any> => {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      if (!supabaseUrl) {
        setErrorMsg("Supabase URL not configured");
        return null;
      }

      if (!adminSecret.trim()) {
        setErrorMsg("Please enter the admin secret");
        return null;
      }

      setErrorMsg("");
      setLoading(true);
      setCurrentAction(action);

      try {
        const response = await fetch(`${supabaseUrl}/functions/v1/listening-audio-admin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-admin-secret": adminSecret,
          },
          body: JSON.stringify({ action, slugs }),
        });

        const data = await response.json();
        setLoading(false);
        setCurrentAction(null);

        if (!response.ok) {
          setErrorMsg(data.error || `Request failed: ${response.status}`);
          return null;
        }
        return data;
      } catch (err) {
        setLoading(false);
        setCurrentAction(null);
        const message = err instanceof Error ? err.message : String(err);
        setErrorMsg(`Error: ${message}`);
        return null;
      }
    },
    [adminSecret]
  );

  const handleRefreshStatus = useCallback(async () => {
    const data = await callAdmin("status");
    if (data?.items) {
      setStatusItems(data.items);
    }
  }, [callAdmin]);

  const handleWarmCache = useCallback(async () => {
    setWarmSummary(null);
    setPurgeSummary(null);
    const data = await callAdmin("warm");
    if (data) {
      const newResults: Record<string, ActionResult> = {};

      if (data.warmed) {
        for (const slug of data.warmed) {
          newResults[slug] = { success: true, message: "Generated" };
        }
      }
      if (data.skipped) {
        for (const slug of data.skipped) {
          newResults[slug] = { success: true, message: "Already cached" };
        }
      }
      if (data.failed) {
        for (const item of data.failed) {
          newResults[item.slug] = { success: false, message: item.error };
        }
      }

      setActionResults((prev) => ({ ...prev, ...newResults }));
      setWarmSummary({
        generated: data.warmed?.length || 0,
        cached: data.skipped?.length || 0,
        failed: data.failed?.length || 0,
      });

      // Refresh status after warm
      const statusData = await callAdmin("status");
      if (statusData?.items) {
        setStatusItems(statusData.items);
      }
    }
  }, [callAdmin]);

  const handlePurgeCache = useCallback(async () => {
    const confirmed = window.confirm("Are you sure you want to purge all cached audio files?");
    if (!confirmed) return;

    setWarmSummary(null);
    setPurgeSummary(null);
    const data = await callAdmin("purge");
    if (data) {
      const newResults: Record<string, ActionResult> = {};

      if (data.deleted) {
        for (const slug of data.deleted) {
          newResults[slug] = { success: true, message: "Deleted" };
        }
      }
      if (data.failed) {
        for (const item of data.failed) {
          newResults[item.slug] = { success: false, message: item.error };
        }
      }

      setActionResults((prev) => ({ ...prev, ...newResults }));
      setPurgeSummary({
        deleted: data.deleted?.length || 0,
        failed: data.failed?.length || 0,
      });

      // Refresh status after purge
      const statusData = await callAdmin("status");
      if (statusData?.items) {
        setStatusItems(statusData.items);
      }
    }
  }, [callAdmin]);

  // Auto-refresh on mount if secret is present
  useEffect(() => {
    if (adminSecret.trim()) {
      handleRefreshStatus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStatusForSlug = (slug: string): StatusItem | null => {
    return statusItems.find((item) => item.slug === slug) || null;
  };

  return (
    <>
      <SEOHead
        title="Listening Audio Cache | Admin"
        description="Admin tools for listening audio cache"
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
          <p className="mt-2 text-sm text-muted-foreground">
            Set <code className="font-mono bg-muted px-1 rounded">LISTENING_ADMIN_SECRET</code> in your backend secrets.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
            {errorMsg}
          </div>
        )}

        {loading && currentAction && (
          <div className="mb-4 p-3 bg-primary/10 text-primary rounded-md text-sm flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Running: {currentAction}...</span>
          </div>
        )}

        {warmSummary && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md text-sm">
            Warm complete: Generated {warmSummary.generated}, already cached {warmSummary.cached}, failed {warmSummary.failed}
          </div>
        )}

        {purgeSummary && (
          <div className="mb-4 p-3 bg-orange-100 text-orange-800 rounded-md text-sm">
            Purge complete: Deleted {purgeSummary.deleted}, failed {purgeSummary.failed}
          </div>
        )}

        <div className="flex flex-wrap gap-3 mb-6">
          <Button onClick={handleRefreshStatus} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            <span className="ml-2">Refresh status</span>
          </Button>
          <Button onClick={handleWarmCache} disabled={loading} variant="secondary">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Flame className="h-4 w-4" />}
            <span className="ml-2">Warm cache</span>
          </Button>
          <Button onClick={handlePurgeCache} disabled={loading} variant="destructive">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
            <span className="ml-2">Purge cache</span>
          </Button>
        </div>

        <div className="space-y-4">
          {slugs.map((slug) => {
            const status = getStatusForSlug(slug);
            const result = actionResults[slug];

            return (
              <Card key={slug}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="capitalize">{slug.replace(/-/g, " ")}</span>
                    {status && (
                      status.exists ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Cached
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                          <XCircle className="mr-1 h-3 w-3" />
                          Not cached
                        </span>
                      )
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="mb-2">{slug}.mp3</p>
                  {status?.exists && status.publicUrl && (
                    <a
                      href={status.publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Public URL
                    </a>
                  )}
                  {result && (
                    <div className={`mt-2 text-xs ${result.success ? "text-green-600" : "text-destructive"}`}>
                      {result.success ? (
                        <CheckCircle className="inline mr-1 h-3 w-3" />
                      ) : (
                        <XCircle className="inline mr-1 h-3 w-3" />
                      )}
                      Last action: {result.message}
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
