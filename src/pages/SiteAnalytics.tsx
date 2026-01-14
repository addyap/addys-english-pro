import React, { useState, useEffect } from 'react';
import { 
  BarChart3, TrendingUp, Users, Eye, Globe, 
  ExternalLink, BookOpen, GraduationCap, RefreshCw,
  Lock, Calendar
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

interface AnalyticsData {
  totalViews: number;
  uniqueSessions: number;
  dailyViews: { date: string; views: number }[];
  topPages: { path: string; views: number }[];
  topReferrers: { referrer: string; views: number }[];
  topCountries: { country: string; views: number }[];
  exerciseViews: number;
  blogViews: number;
  period: string;
}

const SiteAnalytics = () => {
  const [adminSecret, setAdminSecret] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [days, setDays] = useState(30);

  const fetchAnalytics = async () => {
    if (!adminSecret) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('site-analytics', {
        headers: {
          'x-admin-secret': adminSecret,
        },
        body: { days },
      });

      if (fnError) throw fnError;
      if (data.error) throw new Error(data.error);

      setAnalytics(data);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message || 'Erreur lors du chargement des données');
      if (err.message?.includes('Unauthorized')) {
        setIsAuthenticated(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
  };

  const formatPath = (path: string) => {
    if (path === '/') return 'Accueil';
    return path.replace(/^\//, '').replace(/-/g, ' ').slice(0, 40);
  };

  if (!isAuthenticated) {
    return (
      <>
        <SEOHead
          title="Analytics Admin | Antony Addy"
          description="Tableau de bord analytique du site"
          noIndex={true}
        />
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Accès Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="password"
                placeholder="Clé admin..."
                value={adminSecret}
                onChange={(e) => setAdminSecret(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && fetchAnalytics()}
              />
              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}
              <Button 
                onClick={fetchAnalytics} 
                className="w-full"
                disabled={isLoading || !adminSecret}
              >
                {isLoading ? 'Chargement...' : 'Accéder'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Analytics Admin | Antony Addy"
        description="Tableau de bord analytique du site"
        noIndex={true}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BarChart3 className="h-8 w-8" />
                <div>
                  <h1 className="text-2xl font-bold">Analytics du Site</h1>
                  <p className="text-primary-foreground/80 text-sm">
                    {analytics?.period || `${days} derniers jours`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="bg-white/10 border-white/20 text-white rounded-lg px-3 py-2 text-sm"
                >
                  <option value={7}>7 jours</option>
                  <option value={30}>30 jours</option>
                  <option value={90}>90 jours</option>
                </select>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={fetchAnalytics}
                  disabled={isLoading}
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-6 -mt-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Eye className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{analytics?.totalViews.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Pages vues</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{analytics?.uniqueSessions.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Sessions uniques</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <GraduationCap className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{analytics?.exerciseViews.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Vues exercices</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{analytics?.blogViews.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Vues blog</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Charts */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Trafic quotidien
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analytics?.dailyViews || []}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="date" 
                        tickFormatter={formatDate}
                        className="text-xs"
                      />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        labelFormatter={formatDate}
                        formatter={(value: number) => [value, 'Vues']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="views" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tables */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Top Pages */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pages populaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-80 overflow-y-auto">
                    {analytics?.topPages.map((page, i) => (
                      <div key={page.path} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xs text-muted-foreground w-5">{i + 1}</span>
                          <span className="text-sm truncate" title={page.path}>
                            {formatPath(page.path)}
                          </span>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          {page.views}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Referrers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ExternalLink className="h-4 w-4" />
                    Sources de trafic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-80 overflow-y-auto">
                    {analytics?.topReferrers.length === 0 ? (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        Pas de données
                      </p>
                    ) : (
                      analytics?.topReferrers.map((ref, i) => (
                        <div key={ref.referrer} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-xs text-muted-foreground w-5">{i + 1}</span>
                            <span className="text-sm truncate">{ref.referrer}</span>
                          </div>
                          <Badge variant="secondary" className="shrink-0">
                            {ref.views}
                          </Badge>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Top Countries */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Globe className="h-4 w-4" />
                    Pays
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-80 overflow-y-auto">
                    {analytics?.topCountries.length === 0 ? (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        Pas de données géographiques
                      </p>
                    ) : (
                      analytics?.topCountries.map((country, i) => (
                        <div key={country.country} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-xs text-muted-foreground w-5">{i + 1}</span>
                            <span className="text-sm">{country.country}</span>
                          </div>
                          <Badge variant="secondary" className="shrink-0">
                            {country.views}
                          </Badge>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SiteAnalytics;
