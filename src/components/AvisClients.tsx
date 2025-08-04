
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-red-500 h-full animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="flex flex-col items-start gap-2">
                  <Quote className="w-6 h-6 text-red-500" />
                  <p className="italic text-lg leading-relaxed text-card-foreground">
                    "{testimonial.quote}"
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-primary text-lg font-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm font-body">
                    {testimonial.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/temoignages"
              className="inline-block bg-red-600 text-white font-medium px-6 py-3 rounded hover:bg-red-700 transition-colors font-body"
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
