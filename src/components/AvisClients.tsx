
import React from 'react';
import { Link } from "react-router-dom";
import TestimonialCarousel from './TestimonialCarousel';

const AvisClients = () => {
  const testimonials = [
    {
      quote: "Antony est un super professeur. À l'écoute, dans l'échange et très pédagogue, il s'adapte à nos besoins.",
      name: "Loan MIRMONT",
      role: "Préparateur physique N2 – Gérant PPR-Formance",
    },
    {
      quote: "Moi qui ne parlais pas un mot d'anglais, Anthony m'a poussé à m'améliorer à chaque cours.",
      name: "Paula Giusto",
      role: "Conseillère de Vente en Produits de Luxe",
    },
    {
      quote: "Anthony excels in creating an engaging and inclusive learning environment.",
      name: "Chia Min HSU",
      role: "Sales Assistant Sinophone Market",
    },
  ];

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">
            Avis Clients
          </h2>

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
