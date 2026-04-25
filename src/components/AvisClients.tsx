
import React from 'react';
import { Link } from "react-router-dom";
import TestimonialCarousel from './TestimonialCarousel';

const AvisClients = () => {
  const testimonials = [
    {
      quote: "Antony est un super professeur. À l'écoute, dans l'échange et très pédagogue, il s'adapte à nos besoins et rend chaque séance utile et concrète.",
      name: "Loan MIRMONT",
      role: "Préparateur physique N2 — Gérant PPR-Formance",
      company: "Professionnel · cours individuels",
    },
    {
      quote: "Moi qui ne parlais pas un mot d'anglais, Antony m'a poussée à m'améliorer à chaque cours. Aujourd'hui, je tiens une conversation avec mes clients internationaux.",
      name: "Paula GIUSTO",
      role: "Conseillère de Vente en Produits de Luxe",
      company: "Débutante · anglais professionnel",
    },
    {
      quote: "Antony excelle à créer un environnement d'apprentissage engageant et inclusif. Ses cours m'ont aidée à gagner en confiance lors de mes échanges commerciaux.",
      name: "Chia Min HSU",
      role: "Conseillère commerciale — marché sinophone",
      company: "Professionnelle · anglais des affaires",
    },
  ];

  return (
    <section className="bg-muted py-16" aria-labelledby="avis-clients-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="avis-clients-heading" className="text-3xl font-bold text-primary mb-3 font-heading">
            Avis clients
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-body">
            Ils ont progressé avec un accompagnement personnalisé.
          </p>

          <TestimonialCarousel testimonials={testimonials} />

          <div className="mt-10">
            <Link
              to="/temoignages"
              className="inline-block bg-red-600 text-white font-medium px-6 py-3 rounded hover:bg-red-700 transition-all hover:scale-105 active:scale-95 font-body focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Voir tous les témoignages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisClients;
