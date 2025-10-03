import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import SEOHead from '../components/SEOHead';
import { TypingText } from '../components/TypingText';
import { TestimonialSkeleton } from '../components/SkeletonLoader';

const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading testimonials
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const testimonialsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Alina Ostashchenko"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "An excellent teacher! Passionate and dedicated to their work, which brings a positive energy to the class atmosphere!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Yamina ABDA"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Un formateur exceptionnel qui sait transmettre et communiquer avec la bonne humeur qui le caractérise!"
      }
    ]
  };

  const testimonials = [
    {
      quote: "An excellent teacher! Passionate and dedicated to their work, which brings a positive energy to the class atmosphere!",
      name: "Alina Ostashchenko",
      role: "Transformational Leader | Driving Sales Growth & High-Performing Teams in Luxury Retail | MBA Candidate at EDHEC Business School",
    },
    {
      quote: "Un formateur exceptionnel qui sait transmettre et communiquer avec la bonne humeur qui le caractérise! Keep going dear!",
      name: "Yamina ABDA",
      role: "Assistante de direction",
    },
    {
      quote: "Je recommande vivement Mr Addy pour son professionnalisme, son enthousiasme, sa capacité à s'adapter à différents niveaux.",
      name: "Adrien KOWALSKI",
      role: "Genius Product / Expert Produit | Automobile",
    },
    {
      quote: "Antony a des très bonnes capacités d'adaptation. Il a bien saisi nos manières différentes d'apprendre. Il a su adapter les cours au niveau de chaque apprenant. Toujours avec beaucoup d'humour. Thank you so much, Antony!",
      name: "Karyna Suvarian",
      role: "Conseillère de vente français/ukrainien/russe/anglais",
    },
    {
      quote: "Antony est l'un des meilleurs professeurs d'anglais que j'ai pu rencontrer. Il est anglais et cela est un avantage pour nous enseigner sa langue maternelle. Ces cours m'ont beaucoup plu, ludiques, intéressants et amusants, il arrivait à nous détendre \"Donald Duck\" pour nous mettre en bonne condition d'apprentissage. Pour ma part il m'a bien aidé avec les mots en termes techniques anglais /français sur supports papiers, (que je relis de temps à autres), pendant cette formation que j'ai fais cette année 2024 sur 8 mois à l'escomm de Cannes., où j'ai rencontré Antony pour devenir Conseillère de vente, spécialisée qui pour moi, dans le domaine de l'outillage, bricolage et du BTP. Je ne suis pas douée en anglais, je n'arrive pas à assimiler l'auditif et le traduire, en tout cas très difficilement, par contre en voyant les mots et lisant, malgré mes grosses lacunes de mots, de la grammaire et l'orthographe, dont je n'ai pas pratiqué depuis 20/30 ans, je me débrouille mieux et avec l'enseignement des cours d'Antony cela m'a beaucoup aidé. Merci Antony",
      name: "Alexandra Buat",
      role: "Votre futur CONSEILLÈRE DE VENTE dans le secteur : du BTP Outillage | du Bricolage | PROMOTEUR DES VENTES",
    },
    {
      quote: "Antony is the best from the best! He gave us material in the easiest form! Every lesson was full of positive emotions and all of our group loved him! Real professional and very kind person!",
      name: "Marine Melkumian",
      role: "Vendeuse",
    },
    {
      quote: "Moi qui ne parlais pas un mot d'anglais, Anthony m'a poussé à m'améliorer à chaque cours. Sa manière d'enseigner la langue est divertissante. J'ai adoré ses cours, mais également les progrès qui en sont ressortis.",
      name: "Paula Giusto",
      role: "Conseillère de Vente en Produits de Luxe",
    },
    {
      quote: "Que dire de mon expérience de préparation au TOEIC avec Antony ? Eh bien sans hésitation qu'il est l'un des meilleurs professeurs d'anglais que j'ai rencontrés. D'abord il est anglais … (ca aide 😉) mais ce qui distingue vraiment Anto, c'est sa capacité à rendre les cours amusants et intéressants. Malgré la rigueur nécessaire pour réussir le TOEIC, il a réussi à injecter une dose de bonne humeur et de rires dans chaque séance. Grâce à son approche unique, chaque cours était un moment agréable, ce qui a rendu les apprentissages beaucoup plus faciles et motivants. Son sérieux et son professionnalisme sont également remarquables. Il était toujours bien préparé, structurant les cours de manière claire et organisée. Il nous a fourni des ressources supplémentaires et des conseils précieux pour améliorer nos compétences en anglais. Grâce à son soutien constant et à son encouragement, nous avons tous obtenu de bons résultats au TOEIC. Je recommande vivement Antony en tant que professeur d'anglais. Sa passion pour l'enseignement, son approche ludique et sa capacité à créer une atmosphère conviviale font de lui un enseignant exceptionnel. Si vous cherchez à améliorer vos compétences en anglais tout en passant un bon moment, Antony est la personne idéale pour vous accompagner dans votre apprentissage ! Je recommande à 1000%!!!!",
      name: "Nathalie LE MÉNACH",
      role: "Conseillère en Formation Continue Responsable Relations Entreprises et Organisations Institutionnelles – GIP FIPAN – Rectorat de l'Académie de Nice – Présidente DCF CÔTE D'AZUR",
    },
    {
      quote: "Super formateur motivé et motivant, capable de créer des plans de cours attrayants et de fournir des explications claires qui aident à l'acquisition de solides connaissances! Ton enthousiasme et ta bonne humeur créent un environnement d'apprentissage positif et dynamique!! Merci pour tout!!!",
      name: "Audrey KLOCZKO-BEAUDON",
      role: "Gestionnaire RH, Ressources Humaines, Sécurité au travail, Management, Recrutement",
    },
    {
      quote: "Antony est un super professeur. À l'écoute, dans l'échange et très pédagogue, il s'adapte à nos besoins (anglais travail, anglais courant). Je recommande vivement.",
      name: "Loan MIRMONT",
      role: "Préparateur physique N2 et responsable P.A académie Etoile FC – Enseignant vacataire UFR STAPS NICE – Gérant de l'entreprise PPR-Formance dédiée à la préparation physique et reathlétisation des sportifs",
    },
    {
      quote: "Anthony excels in creating an engaging and inclusive learning environment. His innovative teaching strategies cater to diverse learning styles and have been a great source of motivation for us to learn English. Highly recommend!",
      name: "Chia Min HSU",
      role: "Sales Assistant Sinophone Market",
    },
    {
      quote: "Formateur très professionnel sachant manier la pédagogie avec humour et enthousiasme tout en s'adaptant à son audience. Je le recommande sans hésitation.",
      name: "Sandrine Masse",
      role: "Responsable administrative",
    },
    {
      quote: "Cours dispensé sur-mesure avec la \"touch so british\" 👍👍👍",
      name: "Sophie Chenot",
      role: "Management, sales & services",
    },
    {
      quote: "Très bon formateur d'anglais! Excellent dans la pédagogie et l'écoute, toujours dans le sérieux et la bonne humeur!",
      name: "Arnaud Dalmasso",
      role: "Notaire associé",
    },
    {
      quote: "Un professeur pédagogue, à l'écoute, qui s'adapte à la demande ; et tout ça dans la bonne humeur !! thank you ;-)",
      name: "Colette Chrétien",
      role: "Directrice de production – Régisseuse générale",
    },
  ];

  return (
    <>
      <SEOHead 
        title="Témoignages – Antony Addy | Formateur Anglais"
        description="Avis authentiques d'anciens apprenants et professionnels sur la qualité des formations d'anglais animées par Antony Addy."
        keywords={["témoignages", "avis clients", "formation anglais", "Antony Addy", "satisfaction clients"]}
        canonicalUrl="https://antonyaddy.com/temoignages"
        jsonLd={testimonialsJsonLd}
      />
      
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Témoignages
            </h1>
            <TypingText
              texts={[
                "Ce qu'ils disent de mes formations...",
                "Des retours authentiques.",
                "Ils m'ont fait confiance.",
              ]}
              speed={50}
              pause={1800}
              className="text-lg font-medium text-center text-muted-foreground mb-6 block"
            />
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TestimonialSkeleton key={index} />
              ))
            ) : (
              testimonials.map((testimonial, index) => (
                <Card key={index} className="border-red-500 border-2 bg-card">
                  <CardHeader>
                    <div className="text-red-500 text-4xl mb-2">"</div>
                    <p className="text-lg italic text-card-foreground leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-bold text-primary text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground mt-1">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
