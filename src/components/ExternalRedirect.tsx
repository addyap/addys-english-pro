import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

interface Props {
  to: string;
}

/**
 * Holding page that immediately redirects to an external URL
 * (typically anglaisadistance.fr). Crawlers see a noindex page so the
 * intermediate stub never gets indexed.
 */
const ExternalRedirect = ({ to }: Props) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <>
      <SEOHead
        title="Redirection"
        description="Cette ressource a été déplacée sur anglaisadistance.fr."
        noIndex
        noFollow
      />
      <div style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "1rem", color: "hsl(var(--muted-foreground))" }}>
          Redirection vers <strong>anglaisadistance.fr</strong>…
        </p>
        <p style={{ marginTop: "0.75rem", fontSize: "0.875rem" }}>
          Si rien ne se passe,{" "}
          <a href={to} style={{ color: "hsl(var(--primary))", textDecoration: "underline" }}>
            cliquez ici
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default ExternalRedirect;
