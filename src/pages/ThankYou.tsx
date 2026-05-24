import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageSquare, Sparkles, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_PREFILLED_URL } from "@/lib/whatsapp";

const ThankYou: React.FC = () => {
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

      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="w-9 h-9 text-green-600" aria-hidden="true" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Message Sent ✅
          </h1>

          <p className="text-lg text-gray-600 mb-2">
            Thanks for reaching out. I'll get back to you shortly.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Réponse garantie sous 24h ouvrées.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://anglaisadistance.fr/conversation-trainer"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              Try the AI Trainer ↗
            </a>

            <a
              href={WHATSAPP_PREFILLED_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_cta_click', { page: 'ThankYou', target: WHATSAPP_PREFILLED_URL, prefilled: true })}
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Contact via WhatsApp
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
