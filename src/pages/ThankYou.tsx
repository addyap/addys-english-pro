import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, MessageSquare, Sparkles, ArrowLeft, ArrowUpRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { trackEvent } from "@/lib/analytics";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { Reveal } from "@/components/motion/Reveal";

// An optional next step that matches the enquiry: English learners get the
// practice tools, website and AI enquiries get their own portfolio pages.
// Nothing here is needed for the request to go through.
const NEXT_STEPS: Record<string, { label: string; href: string; external: boolean; event: string }> = {
  anglais: { label: "En attendant, entraînez-vous avec mes outils", href: "/ressources-en-ligne", external: false, event: "thankyou_resources_click" },
  sites: { label: "En attendant, voir mes réalisations", href: "/sites-web", external: true, event: "thankyou_sites_click" },
  ia: { label: "En attendant, découvrir mes ateliers IA", href: "/ia", external: true, event: "thankyou_ia_click" },
};

const ThankYou: React.FC = () => {
  const whatsappLink = useWhatsAppLink();
  const [searchParams] = useSearchParams();
  // Read after hydration: the prerendered page has no query string.
  const [subjectKey, setSubjectKey] = React.useState<string | null>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  useEffect(() => {
    setSubjectKey(searchParams.get("sujet"));
  }, [searchParams]);
  const next = subjectKey ? NEXT_STEPS[subjectKey] : undefined;

  return (
    <>
      <SEOHead
        title="Message envoyé ✅ | Antony Addy"
        description="Merci pour votre message. Antony Addy vous répondra dans les plus brefs délais."
        canonicalUrl="https://www.antonyaddy.com/thank-you"
        noindex
      />

      <div className="min-h-screen bg-muted py-16 px-4">
        <Reveal as="div" variant="scale" className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="w-9 h-9 text-green-600" aria-hidden="true" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Message envoyé ✅
          </h1>

          <p className="text-lg text-muted-foreground mb-2">
            Merci de votre message. Il est bien arrivé : vous n'avez rien d'autre à faire.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Je vous réponds sous 24 h ouvrées pour faire le point sur votre besoin, puis je vous envoie une proposition.
          </p>

          {next && (
            <div className="flex justify-center">
              {next.external ? (
                <a
                  href={next.href}
                  onClick={() => trackEvent(next.event, { page: 'ThankYou', target: next.href })}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                  {next.label}
                </a>
              ) : (
                <Link
                  to={next.href}
                  onClick={() => trackEvent(next.event, { page: 'ThankYou', target: next.href })}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                  {next.label}
                </Link>
              )}
            </div>
          )}

          {/* WhatsApp stays available, but as a quiet link: a second message
              shouldn't look necessary after the form has gone through. */}
          <p className="mt-6 text-sm text-muted-foreground">
            Une précision à ajouter ?{' '}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_cta_click', { page: 'ThankYou', target: whatsappLink, prefilled: true })}
              className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              Écrivez-moi sur WhatsApp
            </a>
          </p>

          <div className="mt-8 pt-6 border-t border-border">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Retour à l'accueil
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default ThankYou;
