import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-admin-secret",
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify admin secret
    const adminSecret = req.headers.get("x-admin-secret");
    const expectedSecret = Deno.env.get("LISTENING_ADMIN_SECRET");
    
    if (!adminSecret || adminSecret !== expectedSecret) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const url = new URL(req.url);
    const days = parseInt(url.searchParams.get("days") || "30");
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Fetch page views
    const { data: pageViews, error: pvError } = await supabase
      .from("page_views")
      .select("*")
      .gte("created_at", startDate.toISOString())
      .order("created_at", { ascending: false });

    if (pvError) throw pvError;

    // Process analytics data
    const totalViews = pageViews?.length || 0;
    const uniqueSessions = new Set(pageViews?.map(pv => pv.session_id).filter(Boolean)).size;

    // Views by day
    const viewsByDay: Record<string, number> = {};
    pageViews?.forEach(pv => {
      const day = pv.created_at.split("T")[0];
      viewsByDay[day] = (viewsByDay[day] || 0) + 1;
    });

    // Convert to sorted array
    const dailyViews = Object.entries(viewsByDay)
      .map(([date, views]) => ({ date, views }))
      .sort((a, b) => a.date.localeCompare(b.date));

    // Top pages
    const pageCount: Record<string, number> = {};
    pageViews?.forEach(pv => {
      const path = pv.path || "/";
      pageCount[path] = (pageCount[path] || 0) + 1;
    });

    const topPages = Object.entries(pageCount)
      .map(([path, views]) => ({ path, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 15);

    // Top referrers
    const referrerCount: Record<string, number> = {};
    pageViews?.forEach(pv => {
      if (pv.referrer) {
        try {
          const refUrl = new URL(pv.referrer);
          const refHost = refUrl.hostname;
          referrerCount[refHost] = (referrerCount[refHost] || 0) + 1;
        } catch {
          referrerCount[pv.referrer] = (referrerCount[pv.referrer] || 0) + 1;
        }
      }
    });

    const topReferrers = Object.entries(referrerCount)
      .map(([referrer, views]) => ({ referrer, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Countries (if available)
    const countryCount: Record<string, number> = {};
    pageViews?.forEach(pv => {
      if (pv.country) {
        countryCount[pv.country] = (countryCount[pv.country] || 0) + 1;
      }
    });

    const topCountries = Object.entries(countryCount)
      .map(([country, views]) => ({ country, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Exercise page views breakdown
    const exerciseViews = pageViews?.filter(pv => 
      pv.path?.includes('/exercice') || 
      pv.path?.includes('/cloe') || 
      pv.path?.includes('/listening') ||
      pv.path?.includes('/reading')
    ).length || 0;

    const blogViews = pageViews?.filter(pv => 
      pv.path?.includes('/blog')
    ).length || 0;

    return new Response(
      JSON.stringify({
        totalViews,
        uniqueSessions,
        dailyViews,
        topPages,
        topReferrers,
        topCountries,
        exerciseViews,
        blogViews,
        period: `${days} days`,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Analytics error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
