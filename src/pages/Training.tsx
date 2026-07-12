
import React from 'react';
import { Users, Building, GraduationCap, CheckCircle, AlertCircle, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { FadeInSection, Accordion } from '../components/Effects';
import { CourseSchema } from '@/lib/seo/structuredData';
import { seoMetadata } from '../utils/seoMetadata';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { trackEvent } from '@/lib/analytics';
import { WHATSAPP_PREFILLED_URL } from '@/lib/whatsapp';

const Training = () => {
  useScrollTracking('training');
  useTimeTracking('training');
  const trainingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Formations d'anglais professionnel",
    "description": "Formations d'anglais personnalisées pour adultes, en ligne ou en présentiel",
    "provider": {
      "@type": "Person",
      "name": "Antony Addy",
      "jobTitle": "Formateur Professionnel d'Adultes certifié"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT20H"
      },
      {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "135 rue Henri Vadon",
            "addressLocality": "Fréjus",
            "postalCode": "83600",
            "addressRegion": "Provence-Alpes-Côte d'Azur",
            "addressCountry": "FR"
          }
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "eligibleRegion": {
        "@type": "Place",
        "name": "France"
      }
    }
  };

  const formations = [
    {
      title: 'Anglais général',
      pourQui: 'Adultes souhaitant gagner en aisance au quotidien.',
      objectif: 'Améliorer fluidité, compréhension et confiance.',
      format: 'Visio ou présentiel · individuel ou petit groupe.',
      resultat: 'Conversations naturelles sans blocage.'
    },
    {
      title: 'Anglais professionnel',
      pourQui: 'Professionnels en poste utilisant l\'anglais au travail.',
      objectif: 'Maîtriser réunions, appels, présentations, rédaction.',
      format: 'Sessions ciblées sur vos situations réelles.',
      resultat: 'Communication efficace avec clients et collègues.'
    },
    {
      title: 'Anglais téléphonique et email',
      pourQui: 'Métiers en relation client, support, commerce.',
      objectif: 'Parler clairement au téléphone et écrire sans stress.',
      format: 'Mises en situation et modèles d\'emails utiles.',
      resultat: 'Échanges pros plus rapides et plus clairs.'
    },
    {
      title: 'Anglais spécialisé',
      pourQui: 'Vente, RH, immobilier, hôtellerie, accueil, etc.',
      objectif: 'Acquérir le vocabulaire métier et les bons réflexes.',
      format: 'Contenus 100% adaptés à votre secteur.',
      resultat: 'Crédibilité immédiate dans votre domaine.'
    },
    {
      title: 'Préparation à une certification',
      pourQui: 'Candidats TOEIC, Linguaskill, Cambridge ou équivalent.',
      objectif: 'Atteindre le score visé avec une méthode structurée.',
      format: 'Plan d\'entraînement + tests blancs corrigés.',
      resultat: 'Certification obtenue avec confiance.'
    },
    {
      title: 'Préparation aux entretiens en anglais',
      pourQui: 'Candidats à un poste, une école ou une promotion.',
      objectif: 'Répondre avec aisance aux questions clés en anglais.',
      format: 'Simulations d\'entretien + feedback personnalisé.',
      resultat: 'Entretien passé sereinement et avec impact.'
    }
  ];

  const audienceShortcuts = [
    {
      emoji: '💼',
      title: 'Professionnels',
      desc: 'Réunions, emails, appels clients en anglais.',
      target: 'formations'
    },
    {
      emoji: '🎓',
      title: 'Étudiants',
      desc: 'Préparer vos études et votre entrée en entreprise.',
      target: 'formations'
    },
    {
      emoji: '🎤',
      title: 'Entretiens',
      desc: 'Réussir un entretien d\'embauche ou d\'école en anglais.',
      target: 'formations'
    }
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <SEOHead
        title="Formations d'anglais professionnel | Antony Addy"
        description="Formations d'anglais professionnel sur mesure pour entreprises, cadres et particuliers. Présentiel (Var, Alpes-Maritimes) ou à distance. Devis gratuit."
        canonicalUrl="https://www.antonyaddy.com/offres-de-formation"
        enableOrgJsonLd
        enableWebSiteJsonLd
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Formations d'anglais professionnel par Antony Addy"
        keywords={[
          "formation anglais",
          "cours entreprise",
          "formation à distance",
          "anglais Var",
          "anglais Alpes-Maritimes",
          "anglais Fréjus",
          "préparation TOEIC"
        ]}
        jsonLd={[trainingJsonLd, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Quels types de formations d'anglais proposez-vous ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Je propose plusieurs types de formations : anglais général, anglais professionnel, anglais téléphonique et email, anglais spécialisé (vente, RH, immobilier, hôtellerie), et préparation aux certifications professionnelles (TOEIC, Linguaskill, Cambridge)."
              }
            },
            {
              "@type": "Question",
              name: "Les formations sont-elles disponibles en ligne ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, toutes les formations sont disponibles en ligne (visioconférence) partout en France et dans le monde, ou en présentiel dans le Var et les Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco)."
              }
            }
          ]
        }]}
      />
      <CourseSchema
        name="Formations d'anglais professionnel"
        description="Formations personnalisées en anglais professionnel pour adultes, en ligne partout en France et dans le monde ou en présentiel dans le Var et les Alpes-Maritimes."
        provider={{
          name: "Antony Addy",
          url: "https://www.antonyaddy.com"
        }}
      />
      
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Formations d'anglais professionnel
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des formations concrètes pour communiquer avec confiance en anglais dans votre vie professionnelle
              </p>
            </div>
          </FadeInSection>

          <hr className="border-t border-border mb-12" />

          {/* Quick audience shortcuts */}
          <FadeInSection>
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {audienceShortcuts.map((a) => (
                <button
                  key={a.title}
                  type="button"
                  onClick={() => handleScrollTo(a.target)}
                  className="text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 border border-border"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2" aria-hidden="true">{a.emoji}</span>
                    <h2 className="text-lg font-semibold text-primary">{a.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{a.desc}</p>
                  <span className="text-sm font-medium text-accent">Voir les formations ↓</span>
                </button>
              ))}
            </div>
          </FadeInSection>

          {/* Per-audience landing page links */}
          <FadeInSection>
            <div className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8 border border-border">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 font-heading">Voir le détail par profil</h2>
              <p className="text-sm text-muted-foreground mb-5">Chaque profil a sa propre page dédiée avec FAQ et exemples concrets.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <Link to="/anglais-entreprise" className="block p-3 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                  <span className="font-semibold text-primary text-sm">Entreprises →</span>
                </Link>
                <Link to="/anglais-cadres" className="block p-3 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                  <span className="font-semibold text-primary text-sm">Cadres &amp; dirigeants →</span>
                </Link>
                <Link to="/anglais-particuliers" className="block p-3 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                  <span className="font-semibold text-primary text-sm">Particuliers →</span>
                </Link>
                <Link to="/anglais-etudiants" className="block p-3 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                  <span className="font-semibold text-primary text-sm">Étudiants →</span>
                </Link>
              </div>
            </div>
          </FadeInSection>


          {/* Formations professionnelles spécialisées (AI-powered) */}
          <FadeInSection>
            <div id="formations-professionnelles" className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12 scroll-mt-24">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3" aria-hidden="true">🎯</span>
                <h2 className="text-2xl font-bold text-primary">Formations professionnelles spécialisées</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Entraînez-vous à votre métier avec un partenaire IA qui adapte le vocabulaire, le ton et les scénarios à votre secteur.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3">
                <li>
                  <a
                    href="https://anglaisadistance.fr/conversation-trainer?ctx=ACOM"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <span className="text-xl shrink-0" aria-hidden="true">💼</span>
                    <div>
                      <div className="font-semibold text-primary">ACOM — Salons & commerce international ↗</div>
                      <div className="text-sm text-muted-foreground">Accueil visiteurs, prospection B2B, négociation.</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://anglaisadistance.fr/conversation-trainer?ctx=VPL"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <span className="text-xl shrink-0" aria-hidden="true">💎</span>
                    <div>
                      <div className="font-semibold text-primary">VPL — Vente luxe ↗</div>
                      <div className="text-sm text-muted-foreground">Conseil clientèle haut de gamme en boutique.</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://anglaisadistance.fr/conversation-trainer?ctx=AD"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <span className="text-xl shrink-0" aria-hidden="true">📞</span>
                    <div>
                      <div className="font-semibold text-primary">Assistant de Direction ↗</div>
                      <div className="text-sm text-muted-foreground">Téléphone professionnel, prise de message, agenda.</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://anglaisadistance.fr/conversation-trainer?ctx=MEDICAL"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <span className="text-xl shrink-0" aria-hidden="true">🩺</span>
                    <div>
                      <div className="font-semibold text-primary">Secrétaire Médicale ↗</div>
                      <div className="text-sm text-muted-foreground">Accueil patient, prise de rendez-vous, réassurance.</div>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="mt-5 pt-5 border-t border-border">
                <a
                  href="https://anglaisadistance.fr/conversation-trainer"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  → IA d'entraînement professionnel (tous contextes) ↗
                </a>
              </div>
            </div>
          </FadeInSection>


          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Pour qui ?</h2>
              
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">Professionnels en poste</strong> qui ont besoin de l'anglais au quotidien : réunions, emails, appels clients, présentations.
              </p>
              
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">Personnes en reconversion</strong> ou en recherche d'emploi qui veulent valoriser leur profil et gagner en confiance à l'oral comme à l'écrit.
              </p>
              
              <p className="text-muted-foreground">
                <strong className="text-primary">Étudiants en école de commerce ou formation continue</strong> qui préparent leur entrée dans le monde professionnel.
              </p>
            </div>
          </FadeInSection>

          {/* Formation categories with Accordion */}
          <FadeInSection>
            <div id="formations" className="bg-white rounded-lg shadow-lg p-8 mb-12 scroll-mt-24">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📚</span>
                <h2 className="text-2xl font-bold text-primary">Types de formations</h2>
              </div>
              
              <Accordion title="Formations individuelles & sur mesure">
                <p>Parcours personnalisés selon votre métier, vos objectifs et votre niveau, en présentiel ou à distance.</p>
              </Accordion>
              <Accordion title="Formations en entreprise">
                <p>Sessions de formation adaptées à vos équipes, sur site ou à distance, avec contenus sur mesure.</p>
              </Accordion>
              <Accordion title="Centres de formation et écoles">
                <p>Interventions dans des établissements comme ESCCOM, ITEC, et universités, avec approche certifiée.</p>
              </Accordion>
            </div>
          </FadeInSection>

          {/* Ce que je propose */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">🎯</span>
                <h2 className="text-2xl font-bold text-primary">Ce que je propose</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Chaque formation est pensée pour vous aider dans votre vie professionnelle, tout en prenant en compte vos besoins personnels : confiance, aisance à l'oral, progression visible.
              </p>
              
              <p className="font-medium text-primary mb-6">
                Voici quelques exemples de formations possibles :
              </p>
              
              <div className="space-y-6">
                {formations.map((formation, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-primary mb-2">
                      {formation.title}
                    </h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li><span className="font-medium text-primary">Pour qui :</span> {formation.pourQui}</li>
                      <li><span className="font-medium text-primary">Objectif :</span> {formation.objectif}</li>
                      <li><span className="font-medium text-primary">Format :</span> {formation.format}</li>
                      <li><span className="font-medium text-primary">Résultat :</span> {formation.resultat}</li>
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
                <p className="text-accent-foreground">
                  <span className="text-lg mr-2">🛠️</span>
                  <strong>Toutes les formations sont personnalisées, flexibles et orientées vers des résultats concrets.</strong>
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Où et comment */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📍</span>
                <h2 className="text-2xl font-bold text-primary">Où et comment ?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">En ligne</h3>
                    <p className="text-muted-foreground text-sm">toute la France et à l'international</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">En présentiel</h3>
                    <p className="text-muted-foreground text-sm">Var & Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2 text-muted-foreground">
                <p>• Séances individuelles ou petits groupes</p>
                <p>• Rythme flexible, selon vos besoins</p>
              </div>
            </div>
          </FadeInSection>

          {/* Financement */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">💼</span>
                <h2 className="text-2xl font-bold text-primary">Financement</h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-primary">Finançable directement par votre entreprise.</strong>{' '}
                  En tant qu'organisme de formation enregistré (déclaration d'activité auprès de la DREETS),
                  je délivre une convention de formation professionnelle et l'ensemble des pièces requises.
                  Votre employeur peut ainsi commander la formation et l'inscrire à son plan de développement
                  des compétences, sur ses fonds propres.
                </p>
                <p>
                  <strong className="text-primary">Financement personnel.</strong>{' '}
                  Les particuliers peuvent financer leur formation directement, avec un programme adapté
                  à leur rythme et à leur budget.
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic border-t border-border pt-4 mt-6">
                À noter : ces formations ne sont pas éligibles au CPF ni aux fonds mutualisés
                (OPCO, France Travail). Le financement se fait directement par l'entreprise ou à titre
                personnel — un circuit plus simple et sans dossier administratif.
              </p>
            </div>
          </FadeInSection>

          {/* Authority Resources Section */}
          <FadeInSection>
            <div className="bg-muted/50 border border-border rounded-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📚</span>
                <h2 className="text-2xl font-bold text-primary">Ressources et références</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Références institutionnelles</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <a href="https://www.francecompetences.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        France Compétences ↗
                      </a>
                    </li>
                    <li>
                      <a href="https://www.afpa.fr/formation/titre-professionnel-formateur-professionnel-adultes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Titre FPA (AFPA) ↗
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Certifications reconnues</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <a href="https://www.cambridgeenglish.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Cambridge English ↗
                      </a>
                    </li>
                    <li>
                      <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/home" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Cadre Européen CECRL ↗
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ets.org/toeic.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        TOEIC ↗
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground border-t border-border pt-4">
                <strong>Dernière mise à jour :</strong> Mars 2026
              </p>
            </div>
          </FadeInSection>

          {/* Et en attendant */}
          <FadeInSection>
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">🌐</span>
                <h2 className="text-2xl font-bold text-primary">Et en attendant ?</h2>
              </div>
              
              <p className="text-muted-foreground">
                <span className="text-lg mr-2">🎓</span>
                En parallèle de mes formations, je mets à disposition des{' '}
                <a
                  href="https://anglaisadistance.fr/grammaire-essentielle/contrastes"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  ressources gratuites ↗
                </a>
                {' '}— grammaire claire, vocabulaire utile, dialogues pratiques, quiz interactifs, et bien plus.
              </p>
            </div>
          </FadeInSection>

          {/* Contact */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Commencer</h2>
              
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Prenez contact pour un premier échange gratuit. Je vous aide à définir vos objectifs et à choisir la formule adaptée.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
                <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">
                  Réserver un premier échange
                </Link>
                <a href={WHATSAPP_PREFILLED_URL} onClick={() => trackEvent('whatsapp_cta_click', { page: 'Training', target: WHATSAPP_PREFILLED_URL, prefilled: true, location: 'final-cta' })} className="bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-4 rounded-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp direct
                </a>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                💬 Premier échange gratuit · Sans engagement · Réponse sous 24h
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>formations@antonyaddy.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+33 6 49 82 98 26</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Réponse sous 24h • Sans engagement • Devis gratuit
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>
  );
};

export default Training;
