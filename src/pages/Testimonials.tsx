
import React from 'react';
import { Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const Testimonials = () => {
  const testimonials = [
    // Commerce & Vente
    {
      sector: 'Commerce & Vente',
      testimonials: [
        {
          text: "Une formation vraiment adaptée à mes besoins en anglais commercial. Antony a su identifier mes points faibles et m'aider à progresser rapidement dans mes négociations avec les clients internationaux.",
          author: "Marie L.",
          role: "Responsable Export",
          company: "Entreprise vinicole"
        },
        {
          text: "Thanks to Antony's training, I now feel confident presenting our products to English-speaking clients. The role-play exercises were particularly effective.",
          author: "David R.",
          role: "Commercial Senior",
          company: "Industrie textile"
        }
      ]
    },
    // Ressources Humaines
    {
      sector: 'Ressources Humaines',
      testimonials: [
        {
          text: "Excellent formateur, très pédagogue. Les modules sur l'anglais des réunions et des entretiens d'embauche m'ont été particulièrement utiles pour mon travail quotidien en RH.",
          author: "Thomas B.",
          role: "DRH",
          company: "Groupe international"
        },
        {
          text: "Formation très pratique avec des mises en situation réalistes. Je recommande vivement Antony pour toute formation en anglais professionnel.",
          author: "Sophie M.",
          role: "Responsable Recrutement",
          company: "Cabinet conseil"
        }
      ]
    },
    // Hôtellerie & Luxe
    {
      sector: 'Hôtellerie & Luxe',
      testimonials: [
        {
          text: "Professional training that really made a difference in my daily work with international guests. Antony's approach is both practical and engaging.",
          author: "Sarah M.",
          role: "Guest Relations Manager",
          company: "Hôtel 5 étoiles"
        },
        {
          text: "Formation parfaitement adaptée au secteur du luxe. Les expressions spécifiques et le vocabulaire technique m'ont aidée à mieux servir notre clientèle internationale.",
          author: "Émilie D.",
          role: "Concierge",
          company: "Palace côte d'azur"
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead {...seoMetadata.testimonials} />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les retours d'apprenants ayant suivi une formation d'anglais 
              professionnel avec Antony Addy
            </p>
          </div>

          {/* Testimonials by Sector */}
          <div className="space-y-12">
            {testimonials.map((sectorData, sectorIndex) => (
              <div key={sectorIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                  {sectorData.sector}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {sectorData.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      {/* Stars */}
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      
                      {/* Author Info */}
                      <div className="border-t pt-4">
                        <p className="font-semibold text-gray-900 text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-blue-600 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-blue-900 text-white rounded-lg p-8 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8">En quelques chiffres</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
                  <p className="text-blue-100">Apprenants formés</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">95%</div>
                  <p className="text-blue-100">Satisfaction client</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">20</div>
                  <p className="text-blue-100">Années d'expérience</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous aussi, progressez en anglais professionnel
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Rejoignez les centaines de professionnels qui ont développé leurs compétences 
              en anglais avec des formations sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Demander un devis
              </a>
              <a
                href="/offres-de-formation"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Voir les formations
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
