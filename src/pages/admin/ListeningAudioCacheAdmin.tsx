import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ExternalLink,
  Flame,
  Loader2,
  RefreshCw,
  Trash2,
  XCircle,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { listeningExercises } from "@/data/listeningExercises";

type CurrentAction = "status" | "warm" | "purge" | null;
type AdminAction = Exclude<CurrentAction, null>;

interface StatusItem {
  slug: string;
  exists: boolean;
  publicUrl: string;
}

interface ActionResult {
  success: boolean;
  message: string;
}

interface StatusResponse {
  items: StatusItem[];
}

interface WarmResponse {
  warmed: string[];
  skipped: string[];
  failed: Array<{ slug: string; error: string }>;
}

interface PurgeResponse {
  deleted: string[];
  failed: Array<{ slug: string; error: string }>;
}

type AdminResponse = StatusResponse | WarmResponse | PurgeResponse;

// Canonical slugs source (no hardcoded arrays)
const slugs = listeningExercises.map((e) => e.slug);

export default function ListeningAudioCacheAdmin() {
  const [adminSecret, setAdminSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentAction, setCurrentAction] = useState<CurrentAction>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [statusItems, setStatusItems] = useState<StatusItem[]>([]);
  const [actionResults, setActionResults] = useState<Record<string, ActionResult>>({});

  const [warmSummary, setWarmSummary] = useState<{ generated: number; cached: number; failed: number } | null>(null);
  const [purgeSummary, setPurgeSummary] = useState<{ deleted: number; failed: number } | null>(null);

  const statusBySlug = useMemo(() => {
    return new Map(statusItems.map((item) => [item.slug, item] as const));
  }, [statusItems]);

  const titleBySlug = useMemo(() => {
    return new Map(listeningExercises.map((e) => [e.slug, e.title] as const));
  }, []);

  const hasAutoRefreshedRef = useRef(false);

  const callAdmin = useCallback(
    async (action: AdminAction): Promise<AdminResponse | null> => {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
      const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

      if (!supabaseUrl) {
        setErrorMsg("Backend URL not configured (VITE_SUPABASE_URL)");
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
            ...(publishableKey ? { apikey: publishableKey, Authorization: `Bearer ${publishableKey}` } : {}),
            "x-admin-secret": adminSecret,
          },
          body: JSON.stringify({ action, slugs }),
        });

        const data = (await response.json()) as unknown;

        if (!response.ok) {
          const maybeError =
            typeof data === "object" &&
            data !== null &&
            "error" in data &&
            typeof (data as Record<string, unknown>).error === "string"
              ? String((data as Record<string, unknown>).error)
              : undefined;
          setErrorMsg(maybeError || `Request failed: ${response.status}`);
          return null;
        }

        return data as AdminResponse;
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setErrorMsg(`Error: ${message}`);
        return null;
      } finally {
        setLoading(false);
        setCurrentAction(null);
      }
    },
    [adminSecret]
  );

  const handleRefreshStatus = useCallback(async () => {
    setWarmSummary(null);
    setPurgeSummary(null);

    const data = await callAdmin("status");
    if (data && "items" in data) {
      setStatusItems(data.items);
      setActionResults((prev) => {
        const next = { ...prev };
        for (const item of data.items) {
          next[item.slug] = { success: true, message: "Status checked" };
        }
        return next;
      });
    }
  }, [callAdmin]);

  const handleWarmCache = useCallback(async () => {
    setWarmSummary(null);
    setPurgeSummary(null);

    const data = await callAdmin("warm");
    if (!data || !("warmed" in data)) return;

    const nextResults: Record<string, ActionResult> = {};

    for (const slug of data.warmed ?? []) {
      nextResults[slug] = { success: true, message: "Generated" };
    }
    for (const slug of data.skipped ?? []) {
      nextResults[slug] = { success: true, message: "Already cached" };
    }
    for (const item of data.failed ?? []) {
      nextResults[item.slug] = { success: false, message: item.error };
    }

    setActionResults((prev) => ({ ...prev, ...nextResults }));

    setWarmSummary({
      generated: data.warmed?.length ?? 0,
      cached: data.skipped?.length ?? 0,
      failed: data.failed?.length ?? 0,
    });

    // Optimistically mark warmed + skipped as cached.
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
    setStatusItems((prev) => {
      const map = new Map(prev.map((i) => [i.slug, i] as const));
      const toMark = [...(data.warmed ?? []), ...(data.skipped ?? [])];
      for (const slug of toMark) {
        const publicUrl = supabaseUrl
          ? `${supabaseUrl}/storage/v1/object/public/listening-audio/${slug}.mp3`
          : map.get(slug)?.publicUrl || "";
        map.set(slug, { slug, exists: true, publicUrl });
      }
      return slugs.map((s) => map.get(s) ?? { slug: s, exists: false, publicUrl: "" });
    });
  }, [callAdmin]);

  const handlePurgeCache = useCallback(async () => {
    const confirmed = window.confirm("Are you sure you want to purge all cached audio files?");
    if (!confirmed) return;

    setWarmSummary(null);
    setPurgeSummary(null);

    const data = await callAdmin("purge");
    if (!data || !("deleted" in data)) return;

    const nextResults: Record<string, ActionResult> = {};

    for (const slug of data.deleted ?? []) {
      nextResults[slug] = { success: true, message: "Deleted" };
    }
    for (const item of data.failed ?? []) {
      nextResults[item.slug] = { success: false, message: item.error };
    }

    setActionResults((prev) => ({ ...prev, ...nextResults }));

    setPurgeSummary({
      deleted: data.deleted?.length ?? 0,
      failed: data.failed?.length ?? 0,
    });

    // Optimistically mark deleted as not cached.
    setStatusItems((prev) => {
      const map = new Map(prev.map((i) => [i.slug, i] as const));
      for (const slug of data.deleted ?? []) {
        map.set(slug, { slug, exists: false, publicUrl: "" });
      }
      return slugs.map((s) => map.get(s) ?? { slug: s, exists: false, publicUrl: "" });
    });
  }, [callAdmin]);

  // Auto-refresh once on first load if secret is already present (e.g. autofill).
  useEffect(() => {
    if (hasAutoRefreshedRef.current) return;
    if (!adminSecret.trim()) return;
    hasAutoRefreshedRef.current = true;
    handleRefreshStatus();
  }, [adminSecret, handleRefreshStatus]);

  return (
    <>
      <SEOHead title="Listening Audio Cache | Admin" description="Admin tools for listening audio cache" noIndex />

      <main className="container mx-auto max-w-4xl py-8 px-4">
        <header className="mb-6">
          <h1 className="text-2xl font-heading font-bold">Listening Audio Cache</h1>
        </header>

        <section className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Admin Secret</label>
                <Input
                  type="password"
                  value={adminSecret}
                  onChange={(e) => setAdminSecret(e.target.value)}
                  placeholder="Paste admin secret"
                  autoComplete="off"
                />
                <p className="text-sm text-muted-foreground">
                  Backend secret required: <code className="font-mono">LISTENING_ADMIN_SECRET</code>
                </p>
              </div>

              {errorMsg ? <div className="text-sm text-destructive">{errorMsg}</div> : null}

              {loading && currentAction ? (
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Running: {currentAction}…</span>
                </div>
              ) : null}

              {warmSummary ? (
                <div className="text-sm text-muted-foreground">
                  Warm summary: Generated {warmSummary.generated}, already cached {warmSummary.cached}, failed {warmSummary.failed}
                </div>
              ) : null}

              {purgeSummary ? (
                <div className="text-sm text-muted-foreground">
                  Purge summary: Deleted {purgeSummary.deleted}, failed {purgeSummary.failed}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-3">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Slugs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {slugs.map((slug) => {
                const status = statusBySlug.get(slug);
                const cached = Boolean(status?.exists);
                const result = actionResults[slug];
                const title = titleBySlug.get(slug) ?? slug;

                return (
                  <article key={slug} className="rounded-lg border border-border p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-medium text-foreground truncate">{title}</div>
                        <div className="text-xs text-muted-foreground font-mono truncate">{slug}</div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {cached ? (
                          <Badge variant="secondary" className="gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Cached
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="gap-1">
                            <XCircle className="h-3 w-3" />
                            Not cached
                          </Badge>
                        )}

                        {result ? (
                          <Badge variant={result.success ? "secondary" : "destructive"} className="gap-1">
                            {result.success ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                            {result.success ? "OK" : "Fail"}
                          </Badge>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                      {cached && status?.publicUrl ? (
                        <a
                          href={status.publicUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Public URL
                        </a>
                      ) : null}

                      {result ? <span className="text-xs text-muted-foreground">Last action: {result.message}</span> : null}
                    </div>
                  </article>
                );
              })}
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
