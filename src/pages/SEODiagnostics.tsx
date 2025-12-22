import React from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

/**
 * SEO Diagnostics Page
 * Dev-only route to verify prerendering and SEO elements
 * Access at /admin/seo-diagnostics
 */
const SEODiagnostics = () => {
  const location = useLocation();
  
  // Get document info (only available client-side)
  const [diagnostics, setDiagnostics] = React.useState<{
    title: string;
    canonical: string | null;
    h1Text: string | null;
    h1Count: number;
    metaDescription: string | null;
    internalLinks: number;
    wordCount: number;
    isPrerendered: boolean;
    robotsMeta: string | null;
  } | null>(null);

  React.useEffect(() => {
    // Check if we're running in browser
    if (typeof document !== 'undefined') {
      const h1Elements = document.querySelectorAll('h1');
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      const metaDesc = document.querySelector('meta[name="description"]');
      const robotsMeta = document.querySelector('meta[name="robots"]');
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="https://www.antonyaddy.com"]');
      
      // Count words in body text (excluding scripts and styles)
      const bodyText = document.body.innerText || '';
      const wordCount = bodyText.split(/\s+/).filter(w => w.length > 0).length;

      // Check if page was prerendered by looking for SSR markers
      const rootEl = document.getElementById('root');
      const isPrerendered = rootEl ? rootEl.innerHTML.trim().length > 100 : false;

      setDiagnostics({
        title: document.title,
        canonical: canonicalEl?.getAttribute('href') || null,
        h1Text: h1Elements[0]?.textContent || null,
        h1Count: h1Elements.length,
        metaDescription: metaDesc?.getAttribute('content') || null,
        internalLinks: internalLinks.length,
        wordCount,
        isPrerendered,
        robotsMeta: robotsMeta?.getAttribute('content') || null,
      });
    }
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="SEO Diagnostics - Admin"
        description="Internal SEO diagnostics page for verifying prerendering and meta tags"
        noIndex={true}
      />
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-8">SEO Diagnostics</h1>
          
          <div className="bg-card rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Current Page Analysis</h2>
            <p className="text-muted-foreground mb-4">
              Current Route: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
            </p>
            
            {diagnostics ? (
              <div className="space-y-4">
                <DiagnosticRow 
                  label="Page Title" 
                  value={diagnostics.title}
                  status={diagnostics.title.length > 10 ? 'pass' : 'fail'}
                />
                <DiagnosticRow 
                  label="Canonical URL" 
                  value={diagnostics.canonical || 'Not set'}
                  status={diagnostics.canonical ? 'pass' : 'fail'}
                />
                <DiagnosticRow 
                  label="H1 Tag" 
                  value={diagnostics.h1Text || 'Missing'}
                  status={diagnostics.h1Text ? 'pass' : 'fail'}
                />
                <DiagnosticRow 
                  label="H1 Count" 
                  value={String(diagnostics.h1Count)}
                  status={diagnostics.h1Count === 1 ? 'pass' : 'warn'}
                  note={diagnostics.h1Count > 1 ? 'Should have exactly 1 H1' : undefined}
                />
                <DiagnosticRow 
                  label="Meta Description" 
                  value={diagnostics.metaDescription || 'Missing'}
                  status={diagnostics.metaDescription && diagnostics.metaDescription.length >= 50 ? 'pass' : 'fail'}
                  note={diagnostics.metaDescription ? `${diagnostics.metaDescription.length} chars` : undefined}
                />
                <DiagnosticRow 
                  label="Internal Links" 
                  value={String(diagnostics.internalLinks)}
                  status={diagnostics.internalLinks >= 3 ? 'pass' : 'warn'}
                />
                <DiagnosticRow 
                  label="Word Count" 
                  value={String(diagnostics.wordCount)}
                  status={diagnostics.wordCount >= 250 ? 'pass' : 'warn'}
                />
                <DiagnosticRow 
                  label="Robots Meta" 
                  value={diagnostics.robotsMeta || 'Not set (defaults to index,follow)'}
                  status={!diagnostics.robotsMeta || diagnostics.robotsMeta.includes('index') ? 'pass' : 'warn'}
                />
                <DiagnosticRow 
                  label="Pre-rendered" 
                  value={diagnostics.isPrerendered ? 'Yes' : 'No (client-side only)'}
                  status={diagnostics.isPrerendered ? 'pass' : 'info'}
                  note="In production, pages should be pre-rendered for SEO"
                />
              </div>
            ) : (
              <p className="text-muted-foreground">Loading diagnostics...</p>
            )}
          </div>

          <div className="bg-card rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">How to Verify Prerendering</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Build the production site: <code className="bg-muted px-2 py-1 rounded">npm run build</code></li>
              <li>Check the generated HTML files in <code className="bg-muted px-2 py-1 rounded">dist/</code> folder</li>
              <li>Open <code className="bg-muted px-2 py-1 rounded">dist/index.html</code> in a text editor</li>
              <li>Verify it contains actual content, not just <code className="bg-muted px-2 py-1 rounded">&lt;div id="root"&gt;&lt;/div&gt;</code></li>
              <li>Look for H1, paragraph text, and internal links in the HTML source</li>
              <li>Confirm canonical link is present in the head</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

const DiagnosticRow = ({ 
  label, 
  value, 
  status, 
  note 
}: { 
  label: string; 
  value: string; 
  status: 'pass' | 'fail' | 'warn' | 'info';
  note?: string;
}) => {
  const statusColors = {
    pass: 'bg-green-100 text-green-800 border-green-200',
    fail: 'bg-red-100 text-red-800 border-red-200',
    warn: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  const statusIcons = {
    pass: '✓',
    fail: '✗',
    warn: '⚠',
    info: 'ℹ',
  };

  return (
    <div className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
      <div className="flex-1">
        <span className="font-medium">{label}</span>
        <p className="text-sm text-muted-foreground truncate max-w-md">{value}</p>
        {note && <p className="text-xs text-muted-foreground mt-1">{note}</p>}
      </div>
      <span className={`px-2 py-1 rounded text-sm font-medium ${statusColors[status]}`}>
        {statusIcons[status]}
      </span>
    </div>
  );
};

export default SEODiagnostics;
