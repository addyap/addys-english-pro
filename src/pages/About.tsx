import React from 'react';
import { YEARS_OF_EXPERIENCE } from '@/lib/utils';
import { Award, BookOpen, Users, Globe, CheckCircle, Target, MessageCircle, Mail, Building, GraduationCap, MapPin, Phone, Factory, School, University, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { TypingText } from '../components/TypingText';
import { FadeInSection } from '../components/Effects';
import { trackEvent } from '@/lib/analytics';
import { WHATSAPP_PREFILLED_URL } from '@/lib/whatsapp';

const About = () => {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antony Addy",
    "jobTitle": "Formateur Professionnel d'Adultes certifié",
    "description": `Formateur d'anglais professionnel avec plus de ${YEARS_OF_EXPERIENCE} ans d'expérience`,
    "url": "https://www.antonyaddy.com/qui-je-suis",
    "email": "formations@antonyaddy.com",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Var" },
      { "@type": "AdministrativeArea", "name": "Alpes-Maritimes" },
      { "@type": "Country", "name": "France" }
    ],
    "knowsLanguage": ["fr", "en"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "English Language Trainer",
      "occupationLocation": {
        "@type": "AdministrativeArea",
        "name": "Var & Alpes-Maritimes, France"
      }
    }
  };

  return <>
      <SEOHead 
        title="Antony Addy | Formateur Anglais FPA Certifié"
        description={`Britannique natif certifié Formateur Professionnel d'Adultes depuis 2017. Plus de ${YEARS_OF_EXPERIENCE} ans d'expérience en formation anglais professionnel.`}
        keywords={["Antony Addy", "formateur anglais", "FPA certifié", "britannique natif", "formation adultes", "Var", "Alpes-Maritimes", "Fréjus"]}
        canonicalUrl="https://www.antonyaddy.com/qui-je-suis"
        image="https://www.antonyaddy.com/lovable-uploads/4cd831d2-27d6-4dbd-abcf-edcee4b0d28a.png"
        imageAlt="Antony Addy, formateur d'anglais certifié FPA"
        enableOrgJsonLd
        enableWebSiteJsonLd
        jsonLd={[aboutJsonLd, {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Person",
            name: "Antony Addy",
            jobTitle: "Formateur Professionnel d'Adultes certifié",
            description: `Formateur britannique natif avec plus de ${YEARS_OF_EXPERIENCE} ans d'expérience dans l'enseignement de l'anglais professionnel`,
            nationality: "British",
            knowsLanguage: ["en", "fr"],
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Certification",
              name: "Formateur Professionnel d'Adultes (FPA)"
            }
          }
        }, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qui est Antony Addy ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Antony Addy est un formateur britannique natif certifié Formateur Professionnel d'Adultes (FPA) depuis 2017, avec plus de 20 ans d'expérience dans l'enseignement de l'anglais professionnel."
              }
            },
            {
              "@type": "Question",
              name: "Quelles sont ses qualifications ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Il possède la certification FPA (Formateur Professionnel d'Adultes), une licence en langues et civilisations étrangères, et une spécialisation en anglais des affaires et TOEIC."
              }
            }
          ]
        }]}
      />
      
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-6">
                Qui je suis
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Formateur britannique certifié, spécialisé dans l'anglais professionnel pour adultes en France
              </p>
            </div>
          </FadeInSection>

          {/* Content */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-primary">Antony Addy</h2>
              </div>
              
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <img src="/lovable-uploads/4cd831d2-27d6-4dbd-abcf-edcee4b0d28a.png" alt="Antony Addy, Formateur Professionnel d'Adultes certifié depuis 2017, spécialisé en anglais professionnel" className="w-full max-w-[350px] h-auto rounded-2xl shadow-lg border border-gray-200" width="350" height="auto" loading="lazy" />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed mb-6 font-body space-y-4">
                <p>
                  <strong className="text-primary">Britannique de naissance</strong>, je vis et travaille en France depuis plus de vingt ans. J'enseigne l'anglais à des adultes dans des contextes professionnels exigeants : entreprises, écoles de commerce, organismes de formation, et accompagnement de demandeurs d'emploi via France Travail.
                </p>
                <p>
                  Ma certification <strong className="text-primary">Formateur Professionnel d'Adultes (FPA)</strong>, obtenue en 2017, atteste d'une pédagogie rigoureuse, centrée sur les résultats. Je ne vous fais pas mémoriser des règles abstraites — je vous aide à <em>parler, écrire et comprendre</em> l'anglais dans votre quotidien professionnel.
                </p>
                <p>
                  J'attends de mes apprenants une implication active. Pas de formule magique : vous progresserez parce que vous pratiquerez. En retour, je m'engage à créer un cadre exigeant mais bienveillant, où chaque erreur devient un levier d'apprentissage.
                </p>
              </div>

              {/* Philosophy - moved up for emphasis */}
              <div className="border-l-4 border-accent pl-4 mb-6">
                <h3 className="font-semibold text-primary mb-2">Ce que je crois</h3>
                <p className="text-muted-foreground">
                  L'anglais professionnel ne s'apprend pas dans un manuel. Il se construit dans la pratique : simuler une réunion, rédiger un email réel, répondre à un appel difficile. C'est cette approche concrète qui fait la différence pour des adultes occupés.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certifications
                  </h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Titre professionnel FPA (niveau 5, 2017)</li>
                    <li>• 20+ années d'enseignement en France</li>
                    <li>• Anglophone natif (Royaume-Uni)</li>
                  </ul>
                </div>
                
                <div className="bg-accent/5 rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Spécialisations
                  </h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Anglais des affaires et commercial</li>
                    <li>• Préparation aux certifications professionnelles</li>
                    <li>• Communication téléphonique et écrite</li>
                  </ul>
                </div>
              </div>
              
              {/* Link to exercises */}
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-primary">Pour vous entraîner en autonomie</span>, j'ai créé une plateforme dédiée d'exercices interactifs : <a href="https://anglaisadistance.fr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">anglaisadistance.fr</a>. Accès libre, sans inscription.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Mes clients */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">🏢</span>
                <h2 className="text-2xl font-bold text-primary">Ils me font confiance</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Factory className="h-5 w-5 text-accent mr-2" />
                  <span className="font-medium text-primary">Entreprises</span>
                </div>
                
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-accent mr-2" />
                  <span className="font-medium text-primary">Organismes de formation</span>
                </div>
                
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-accent mr-2" />
                  <span className="font-medium text-primary">Écoles de Commerce</span>
                </div>

                <div className="flex items-center">
                  <School className="h-5 w-5 text-accent mr-2" />
                  <span className="font-medium text-primary">Écoles privées spécialisées</span>
                </div>

                <div className="flex items-center">
                  <University className="h-5 w-5 text-accent mr-2" />
                  <span className="font-medium text-primary">Universités</span>
                </div>

                <div className="flex items-center">
                  <Building className="h-5 w-5 text-accent mr-2" />
                  <span className="font-medium text-primary">Centres de formation France Travail</span>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-accent mr-2" />
                  <span className="font-medium text-primary">Écoles de langues</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mt-6">
                J'interviens auprès de structures variées, de la PME aux grands groupes, en passant par les écoles de commerce et les organismes de formation professionnelle.
              </p>
            </div>
          </FadeInSection>

          {/* Zone d'intervention */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📍</span>
                <h2 className="text-2xl font-bold text-primary">Zone d'intervention</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    <Globe className="inline-block h-5 w-5 mr-1 align-middle" />
                    En ligne
                  </h3>
                  <p className="text-muted-foreground">
                    Partout en France et à l'étranger
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    <MapPin className="inline-block h-5 w-5 mr-1 align-middle" />
                    En présentiel
                  </h3>
                  <p className="text-muted-foreground">
                    Var et Alpes-Maritimes : Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Contact */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Prêt à progresser ?</h2>
              
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Un premier échange sans engagement pour comprendre vos besoins et voir si nous pouvons travailler ensemble.
              </p>
              
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center justify-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>formations@antonyaddy.com</span>
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>WhatsApp : +33 6 49 82 98 26</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Prendre contact
                </Link>
                <a href={WHATSAPP_PREFILLED_URL} onClick={() => trackEvent('whatsapp_cta_click', { page: 'About', target: WHATSAPP_PREFILLED_URL, prefilled: true })} className="bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-3 rounded-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp direct
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Réponse sous 24h • Aucun engagement
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>;
};

export default About;
