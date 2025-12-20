import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RefreshCw, Flame, Trash2, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";

var SLUGS = ["customer-service-call", "journalist-interview", "museum-reception"];

function ListeningAudioCacheAdmin() {
  var secretState = useState("");
  var adminSecret = secretState[0];
  var setAdminSecret = secretState[1];

  var loadingState = useState(false);
  var loading = loadingState[0];
  var setLoading = loadingState[1];

  var errorState = useState("");
  var errorMsg = errorState[0];
  var setErrorMsg = errorState[1];

  var statusState = useState([]);
  var statusItems = statusState[0];
  var setStatusItems = statusState[1];

  var resultsState = useState({});
  var actionResults = resultsState[0];
  var setActionResults = resultsState[1];

  function callAdmin(action) {
    var supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    if (!supabaseUrl) {
      setErrorMsg("Supabase URL not configured");
      return Promise.resolve(null);
    }

    if (!adminSecret.trim()) {
      setErrorMsg("Please enter the admin secret");
      return Promise.resolve(null);
    }

    setErrorMsg("");
    setLoading(true);

    return fetch(supabaseUrl + "/functions/v1/listening-audio-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": adminSecret
      },
      body: JSON.stringify({ action: action })
    })
      .then(function(response) {
        return response.json().then(function(data) {
          setLoading(false);
          if (!response.ok) {
            setErrorMsg(data.error || "Request failed: " + response.status);
            return null;
          }
          return data;
        });
      })
      .catch(function(err) {
        setLoading(false);
        var message = err instanceof Error ? err.message : String(err);
        setErrorMsg("Error: " + message);
        return null;
      });
  }

  function handleRefreshStatus() {
    callAdmin("status").then(function(data) {
      if (data && data.items) {
        setStatusItems(data.items);
      }
    });
  }

  function handleWarmCache() {
    callAdmin("warm").then(function(data) {
      if (data) {
        var newResults = {};

        if (data.warmed) {
          for (var i = 0; i < data.warmed.length; i++) {
            var slug = data.warmed[i];
            newResults[slug] = { success: true, message: "Generated" };
          }
        }
        if (data.skipped) {
          for (var j = 0; j < data.skipped.length; j++) {
            var slug2 = data.skipped[j];
            newResults[slug2] = { success: true, message: "Already cached" };
          }
        }
        if (data.failed) {
          for (var k = 0; k < data.failed.length; k++) {
            var item = data.failed[k];
            newResults[item.slug] = { success: false, message: item.error };
          }
        }

        setActionResults(Object.assign({}, actionResults, newResults));

        callAdmin("status").then(function(statusData) {
          if (statusData && statusData.items) {
            setStatusItems(statusData.items);
          }
        });
      }
    });
  }

  function handlePurgeCache() {
    var confirmed = window.confirm("Are you sure you want to purge all cached audio files?");
    if (!confirmed) return;

    callAdmin("purge").then(function(data) {
      if (data) {
        var newResults = {};

        if (data.deleted) {
          for (var i = 0; i < data.deleted.length; i++) {
            var slug = data.deleted[i];
            newResults[slug] = { success: true, message: "Deleted" };
          }
        }
        if (data.failed) {
          for (var j = 0; j < data.failed.length; j++) {
            var item = data.failed[j];
            newResults[item.slug] = { success: false, message: item.error };
          }
        }

        setActionResults(Object.assign({}, actionResults, newResults));

        callAdmin("status").then(function(statusData) {
          if (statusData && statusData.items) {
            setStatusItems(statusData.items);
          }
        });
      }
    });
  }

  function getStatusForSlug(slug) {
    for (var i = 0; i < statusItems.length; i++) {
      if (statusItems[i].slug === slug) {
        return statusItems[i];
      }
    }
    return null;
  }

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
            onChange={function(e) { setAdminSecret(e.target.value); }}
            placeholder="Enter admin secret"
            className="max-w-sm"
          />
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
            {errorMsg}
          </div>
        )}

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
          {SLUGS.map(function(slug) {
            var status = getStatusForSlug(slug);
            var result = actionResults[slug];

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
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <XCircle className="mr-1 h-3 w-3" />
                          Not cached
                        </span>
                      )
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="mb-2">{slug}.mp3</p>
                  {status && status.exists && (
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
                    <div className={"mt-2 text-xs " + (result.success ? "text-green-600" : "text-destructive")}>
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

export default ListeningAudioCacheAdmin;
