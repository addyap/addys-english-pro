import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageSquare, Sparkles, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { trackEvent } from "@/lib/analytics";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { Reveal } from "@/components/motion/Reveal";

const ThankYou: React.FC = () => {
  const whatsappLink = useWhatsAppLink();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

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
            Merci de votre message. Je vous réponds dans les meilleurs délais.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Réponse sous 24 h ouvrées.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Was "Try the AI Trainer ↗" — an English CTA on a French page,
                deep-linking to one platform. Now French, and pointing at the list. */}
            <Link
              to="/ressources-en-ligne"
              onClick={() => trackEvent('thankyou_resources_click', { page: 'ThankYou', target: '/ressources-en-ligne' })}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              En attendant, entraînez-vous gratuitement
            </Link>

            <a
              href={whatsappLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!whatsappLink) { e.preventDefault(); return; }
                trackEvent('whatsapp_cta_click', { page: 'ThankYou', target: whatsappLink, prefilled: true });
              }}
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Me contacter sur WhatsApp
            </a>
          </div>

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
