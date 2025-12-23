import React from 'react';
import { Award, BookOpen, Users, Globe, CheckCircle, Target, MessageCircle, Mail, Building, GraduationCap, MapPin, Phone, Factory, School, University, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { TypingText } from '../components/TypingText';
import { FadeInSection } from '../components/Effects';

const About = () => {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antony Addy",
    "jobTitle": "Formateur Professionnel d'Adultes certifié",
    "description": "Formateur d'anglais professionnel avec plus de 20 ans d'expérience",
    "url": "https://antonyaddy.com/qui-je-suis",
    "email": "formations@antonyaddy.com",
    "areaServed": {
      "@type": "Place",
      "name": "France"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "English Language Trainer",
      "occupationLocation": {
        "@type": "AdministrativeArea",
        "name": "Alpes-Maritimes, France"
      }
    }
  };

  return <>
      <SEOHead 
        title="Qui suis-je – Antony Addy, Formateur d'anglais certifié FPA"
        description="Antony Addy, formateur britannique natif certifié FPA depuis 2017. Plus de 20 ans d'expérience en formation d'anglais professionnel pour adultes, entreprises et écoles."
        keywords={["Antony Addy", "Formateur Professionnel d'Adultes", "FPA certifié", "anglais professionnel", "formation continue", "Alpes-Maritimes", "formateur britannique natif", "plus de 20 ans d'expérience"]}
        canonicalUrl="https://www.antonyaddy.com/qui-je-suis"
        image="https://www.antonyaddy.com/lovable-uploads/4cd831d2-27d6-4dbd-abcf-edcee4b0d28a.png"
        imageAlt="Photo professionnelle d'Antony Addy, formateur d'anglais certifié"
        enableOrgJsonLd
        enableWebSiteJsonLd
        jsonLd={[aboutJsonLd, {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Person",
            name: "Antony Addy",
            jobTitle: "Formateur Professionnel d'Adultes certifié",
            description: "Formateur britannique natif avec plus de 20 ans d'expérience dans l'enseignement de l'anglais professionnel",
            nationality: "British",
            knowsLanguage: ["en", "fr"],
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Certification",
              name: "Formateur Professionnel d'Adultes (FPA)"
            }
          }
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
              <TypingText texts={["Un formateur engagé pour votre réussite.", "Spécialiste de l'anglais professionnel.", "Formateur Professionnel d'Adultes depuis 2017."]} className="text-xl font-semibold text-primary" />
            </div>
          </FadeInSection>

          {/* Content */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">👋</span>
                <h2 className="text-2xl font-bold text-primary">Antony Addy</h2>
              </div>
              
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <img src="/lovable-uploads/4cd831d2-27d6-4dbd-abcf-edcee4b0d28a.png" alt="Antony Addy, Formateur Professionnel d'Adultes certifié depuis 2017, spécialisé en anglais professionnel" className="w-full max-w-[350px] h-auto rounded-2xl shadow-lg border border-gray-200" width="350" height="auto" loading="lazy" />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed mb-6 font-body space-y-4">
                <p>
                  Formateur Professionnel d'Adultes certifié depuis 2017, avec plus de 20 ans d'expérience dans l'enseignement de l'anglais, j'interviens auprès de publics variés à travers la France.
                </p>
                <p>
                  <strong className="text-primary">Britannique natif</strong>, j'apporte une perspective authentique de la langue anglaise. Mon parcours m'a conduit à travailler avec des profils très différents : cadres en entreprise, étudiants en école de commerce, salariés en reconversion, demandeurs d'emploi accompagnés par France Travail.
                </p>
                <p>
                  Ma certification <strong className="text-primary">FPA (Formateur Professionnel d'Adultes)</strong> garantit une approche pédagogique adaptée aux adultes : méthodes actives, progression personnalisée, objectifs concrets. Je ne me contente pas d'enseigner la grammaire — je vous aide à <em>communiquer efficacement</em> dans votre contexte professionnel.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certifications & Qualifications
                  </h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Titre professionnel FPA (niveau 5)</li>
                    <li>• Spécialisation anglais professionnel</li>
                    <li>• Formation continue pédagogique</li>
                  </ul>
                </div>
                
                <div className="bg-accent/5 rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Spécialisations
                  </h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Anglais des affaires & commercial</li>
                    <li>• Préparation TOEIC, CLOE, Bright</li>
                    <li>• Anglais téléphonique & rédactionnel</li>
                  </ul>
                </div>
              </div>

              {/* Philosophy */}
              <div className="border-l-4 border-accent pl-4 mt-6">
                <h3 className="font-semibold text-primary mb-2">Ma philosophie d'enseignement</h3>
                <p className="text-muted-foreground text-sm">
                  L'apprentissage d'une langue doit être <strong>motivant et concret</strong>. Je privilégie les mises en situation réelles, les exercices pratiques et une atmosphère bienveillante où l'erreur est un tremplin vers le progrès. Mes apprenants progressent parce qu'ils <em>pratiquent</em>, pas parce qu'ils mémorisent.
                </p>
              </div>
              
              {/* Link to exercises */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-primary">En complément de mes formations</span>, j'ai créé plus de <Link to="/exercices" className="text-accent hover:underline font-semibold">150 exercices d'anglais gratuits</Link> et des <Link to="/reading" className="text-accent hover:underline font-semibold">textes de compréhension écrite</Link> pour permettre à chacun de progresser en autonomie.
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
                    Cannes, Antibes, Nice, Monaco (Alpes-Maritimes)
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Contact */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-2xl mr-3">📞</span>
                <h2 className="text-2xl font-bold text-primary">Discutons ensemble de vos besoins</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Je réponds rapidement à toutes vos demandes. Vous pouvez me contacter directement ici :
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center text-muted-foreground">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>formations@antonyaddy.com</span>
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>WhatsApp : +33 6 49 82 98 26</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  <span className="mr-2">💬</span>
                  Parlons de votre projet
                </Link>
                <a href="https://wa.me/33649829826" className="animate-pulse ring ring-yellow-400 ring-offset-2 bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-3 rounded-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp direct
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>;
};

export default About;
