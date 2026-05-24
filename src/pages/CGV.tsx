import React from "react";
import SEOHead from "@/components/SEOHead";

/**
 * Conditions Générales de Vente (CGV) — placeholder.
 * Content to be drafted in a separate pass.
 */
const CGV = () => {
  return (
    <>
      <SEOHead
        title="Conditions Générales de Vente | Antony Addy"
        description="Conditions générales de vente applicables aux prestations de formation en anglais professionnel d'Antony Addy."
        canonicalPath="/cgv"
      />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
            Conditions Générales de Vente
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les conditions générales de vente applicables aux prestations de
            formation en anglais professionnel d'Antony Addy sont en cours de
            mise à jour. Cette page sera complétée prochainement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Pour toute question concernant les modalités de prestation, les
            tarifs ou la facturation, merci de me contacter directement via la
            page <a href="/contact" className="text-primary underline">contact</a>.
          </p>
        </div>
      </main>
    </>
  );
};

export default CGV;
