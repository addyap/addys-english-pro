import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw, Trash2, Play, CheckCircle, XCircle, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { testListeningAudioPipeline, PipelineTestResult, VALID_SLUGS } from "@/lib/listeningAudioTest";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";

// Use slugs from the edge function
const SLUGS = VALID_SLUGS;

type Slug = typeof SLUGS[number];

interface CacheStatus {
  slug: Slug;
  exists: boolean;
  size?: number;
  loading: boolean;
}

export default function AudioAdminTools() {
  const [cacheStatuses, setCacheStatuses] = useState<CacheStatus[]>(
    SLUGS.map(slug => ({ slug, exists: false, loading: false }))
  );
  const [testResults, setTestResults] = useState<Record<string, PipelineTestResult>>({});
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isTesting, setIsTesting] = useState<string | null>(null);

  const refreshCacheStatus = async () => {
    setIsRefreshing(true);
    const newStatuses: CacheStatus[] = [];

    for (const slug of SLUGS) {
      try {
        const { data, error } = await supabase.storage
          .from("listening-audio")
          .list("audio", { search: `${slug}.mp3` });

        const file = data?.find(f => f.name === `${slug}.mp3`);
        newStatuses.push({
          slug,
          exists: !!file && !error,
          size: file?.metadata?.size,
          loading: false,
        });
      } catch {
        newStatuses.push({ slug, exists: false, loading: false });
      }
    }

    setCacheStatuses(newStatuses);
    setIsRefreshing(false);
    toast.success("Cache status refreshed");
  };

  const purgeAudio = async (slug: Slug) => {
    setCacheStatuses(prev =>
      prev.map(s => (s.slug === slug ? { ...s, loading: true } : s))
    );

    try {
      const { error } = await supabase.storage
        .from("listening-audio")
        .remove([`audio/${slug}.mp3`]);

      if (error) throw error;

      setCacheStatuses(prev =>
        prev.map(s => (s.slug === slug ? { ...s, exists: false, loading: false } : s))
      );
      toast.success(`Purged audio cache for ${slug}`);
    } catch (error) {
      setCacheStatuses(prev =>
        prev.map(s => (s.slug === slug ? { ...s, loading: false } : s))
      );
      toast.error(`Failed to purge: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  const regenerateAudio = async (slug: Slug) => {
    setCacheStatuses(prev =>
      prev.map(s => (s.slug === slug ? { ...s, loading: true } : s))
    );

    try {
      // First purge
      await supabase.storage.from("listening-audio").remove([`audio/${slug}.mp3`]);

      // Then regenerate by calling the edge function
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(
        `${supabaseUrl}/functions/v1/listening-audio?slug=${encodeURIComponent(slug)}`
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed: ${response.status}`);
      }

      setCacheStatuses(prev =>
        prev.map(s => (s.slug === slug ? { ...s, exists: true, loading: false } : s))
      );
      toast.success(`Regenerated audio for ${slug}`);
    } catch (error) {
      setCacheStatuses(prev =>
        prev.map(s => (s.slug === slug ? { ...s, loading: false } : s))
      );
      toast.error(`Failed to regenerate: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  const runPipelineTest = async (slug: Slug) => {
    setIsTesting(slug);
    try {
      const result = await testListeningAudioPipeline(slug);
      setTestResults(prev => ({ ...prev, [slug]: result }));
      
      if (result.success) {
        toast.success(`Pipeline test passed for ${slug}`);
      } else {
        toast.error(`Pipeline test failed for ${slug}`);
      }
    } catch (error) {
      toast.error(`Test error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
    setIsTesting(null);
  };

  const purgeAll = async () => {
    for (const slug of SLUGS) {
      await purgeAudio(slug);
    }
  };

  return (
    <>
      <SEOHead
        title="Audio Cache Admin | Anthony's English Course"
        description="Admin tools for managing listening exercise audio cache"
        noIndex
      />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Audio Cache Admin Tools</h1>
          <p className="text-muted-foreground">
            Manage cached audio files for listening exercises. Test the pipeline and purge/regenerate as needed.
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <Button onClick={refreshCacheStatus} disabled={isRefreshing}>
            {isRefreshing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
            Refresh Status
          </Button>
          <Button variant="destructive" onClick={purgeAll}>
            <Trash2 className="mr-2 h-4 w-4" />
            Purge All
          </Button>
        </div>

        <div className="grid gap-4">
          {SLUGS.map(slug => {
            const status = cacheStatuses.find(s => s.slug === slug);
            const testResult = testResults[slug];

            return (
              <Card key={slug}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg capitalize">
                      {slug.replace(/-/g, " ")}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      {status?.exists ? (
                        <Badge variant="default" className="bg-green-600">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Cached
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <XCircle className="mr-1 h-3 w-3" />
                          Not Cached
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription>
                    audio/{slug}.mp3
                    {status?.size && ` • ${Math.round(status.size / 1024)} KB`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => runPipelineTest(slug)}
                      disabled={isTesting === slug || status?.loading}
                    >
                      {isTesting === slug ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Play className="mr-2 h-4 w-4" />
                      )}
                      Test Pipeline
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => regenerateAudio(slug)}
                      disabled={status?.loading}
                    >
                      {status?.loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <RefreshCw className="mr-2 h-4 w-4" />
                      )}
                      Regenerate
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => purgeAudio(slug)}
                      disabled={status?.loading || !status?.exists}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Purge
                    </Button>
                  </div>

                  {testResult && (
                    <div className="bg-muted rounded-md p-3 text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        {testResult.success ? (
                          <Badge className="bg-green-600">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Test Passed
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <XCircle className="mr-1 h-3 w-3" />
                            Test Failed
                          </Badge>
                        )}
                        <span className="text-muted-foreground">
                          Cache: {testResult.cacheWorking ? "Working" : "Not Working"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          1st call: {testResult.firstCall.durationMs}ms
                          {testResult.firstCall.cached && " (cached)"}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          2nd call: {testResult.secondCall.durationMs}ms
                          {testResult.secondCall.cached && " (cached)"}
                        </div>
                      </div>
                      {(testResult.firstCall.error || testResult.secondCall.error) && (
                        <div className="mt-2 text-destructive">
                          Error: {testResult.firstCall.error || testResult.secondCall.error}
                        </div>
                      )}
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
