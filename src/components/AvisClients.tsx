
import React from 'react';
import { Link } from "react-router-dom";
import TestimonialCarousel from './TestimonialCarousel';

const AvisClients = () => {
  const testimonials = [
    {
      quote: "Antony est très pédagogue et à l'écoute. Il adapte chaque séance à mes besoins concrets, ce qui rend l'apprentissage utile et motivant.",
      name: "Loan M.",
      role: "Préparateur physique — gérant indépendant",
      company: "Professionnel · anglais oral",
    },
    {
      quote: "Je ne parlais quasiment pas anglais au début. Aujourd'hui, j'arrive à tenir une conversation simple avec mes clients internationaux.",
      name: "Paula G.",
      role: "Conseillère de vente",
      company: "Débutante · anglais professionnel",
    },
    {
      quote: "Antony crée un environnement bienveillant et engageant. J'ai gagné en confiance pour mes échanges commerciaux en anglais.",
      name: "Chia Min H.",
      role: "Conseillère commerciale",
      company: "Professionnelle · anglais des affaires",
    },
    {
      quote: "Les séances ciblées m'ont aidé à préparer un entretien en anglais sereinement. Approche claire, exercices concrets et retours immédiats.",
      name: "Julien R.",
      role: "Cadre en reconversion",
      company: "Entretien · anglais professionnel",
    },
    {
      quote: "Très bon accompagnement pour mes études supérieures. Les explications sont précises et les corrections toujours utiles.",
      name: "Sarah B.",
      role: "Étudiante en Bachelor",
      company: "Étudiante · anglais académique",
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
