
import React from 'react';
import { Link } from "react-router-dom";
import { testimonials } from '@/data/testimonials';
import TestimonialCarousel from './TestimonialCarousel';

const AvisClients = () => {

  return (
    <section className="bg-muted py-16" aria-labelledby="avis-clients-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="avis-clients-heading" className="text-3xl font-bold text-primary mb-3 font-heading">
            Avis clients
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-body">
            Ils nous font confiance.
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
