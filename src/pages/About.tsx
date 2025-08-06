import React from 'react';
import { Award, BookOpen, Users, Globe, CheckCircle, Target, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { TypingText } from '../components/TypingText';
import { seoMetadata } from '../utils/seoMetadata';

const About = () => {
  return (
    <>
      <SEOHead {...seoMetadata.about} />
      
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">
              Qui je suis
            </h1>
            <TypingText
              texts={[
                "Un formateur engagé pour votre réussite.",
                "Spécialiste de l'anglais professionnel.",
                "20+ ans d'expérience en formation d'adultes.",
              ]}
              className="text-xl font-semibold text-primary"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">👋</span>
              <h2 className="text-2xl font-bold text-primary">Antony Addy</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Formateur d'anglais certifié, je suis natif britannique et j'accompagne des adultes en formation continue, CPF ou en reconversion. Mon approche ? L'humour, l'adaptabilité, et la clarté. Je travaille avec tous types de profils — des écoles de commerce aux auto-entrepreneurs — toujours dans un esprit pratique et motivant.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  <Award className="inline-block h-5 w-5 mr-1 align-middle" />
                  Expérience
                </h3>
                <p className="text-muted-foreground">
                  Plus de 20 ans d'expérience dans la formation pour adultes, en France et à l'étranger.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  <BookOpen className="inline-block h-5 w-5 mr-1 align-middle" />
                  Pédagogie
                </h3>
                <p className="text-muted-foreground">
                  Méthodes actives et participatives, basées sur vos besoins et vos objectifs.
                </p>
              </div>
            </div>
            
            <div className="mt-6 space-y-2 text-muted-foreground">
              <p>• Formations sur mesure, adaptées à votre niveau</p>
              <p>• Suivi personnalisé et conseils individualisés</p>
            </div>
          </div>

          {/* Mes clients */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">🏢</span>
              <h2 className="text-2xl font-bold text-primary">Ils me font confiance</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-accent mr-2" />
                <span className="font-medium text-primary">Entreprises</span>
              </div>
              
              <div className="flex items-center">
                <Building className="h-5 w-5 text-accent mr-2" />
                <span className="font-medium text-primary">Écoles</span>
              </div>
              
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 text-accent mr-2" />
                <span className="font-medium text-primary">Centres de formation</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mt-6">
              J'interviens auprès de structures variées, de la PME aux grands groupes, en passant par les écoles de commerce et les organismes de formation professionnelle.
            </p>
          </div>

          {/* Zone d'intervention */}
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

          {/* Contact */}
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
              <a href="https://wa.me/33649829826" className="bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-3 rounded-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                WhatsApp direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
