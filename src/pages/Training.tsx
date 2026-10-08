
import React from 'react';
import { Users, Building, GraduationCap, CheckCircle, AlertCircle, Globe, MapPin, Phone, Mail, Clock3, CalendarClock, ClipboardCheck, Euro, Accessibility, BriefcaseBusiness, Target, BookOpen, ClipboardList, Gem, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Reveal } from '@/components/motion/Reveal';
import { CourseSchema } from '@/lib/seo/structuredData';
import { formatMonthYearFR } from '@/lib/utils';
import { PLATFORM_COUNT } from '@/data/platforms';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { trackEvent } from '@/lib/analytics';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';

const Training = () => {
  const whatsappLink = useWhatsAppLink();
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
      format: 'Visio ou présentiel · individuel ou petit groupe.'
    },
    {
      title: 'Anglais professionnel',
      pourQui: 'Professionnels en poste utilisant l\'anglais au travail.',
      objectif: 'Maîtriser réunions, appels, présentations, rédaction.',
      format: 'Sessions ciblées sur vos situations réelles.'
    },
    {
      title: 'Anglais téléphonique et email',
      pourQui: 'Métiers en relation client, support, commerce.',
      objectif: 'Parler clairement au téléphone et écrire sans stress.',
      format: 'Mises en situation et modèles d\'emails utiles.'
    },
    {
      title: 'Anglais spécialisé',
      pourQui: 'Vente, RH, immobilier, hôtellerie, accueil, etc.',
      objectif: 'Acquérir le vocabulaire métier et les bons réflexes.',
      format: 'Contenus adaptés à votre secteur.'
    },
    {
      title: 'Préparation à une certification',
      pourQui: 'Candidats TOEIC, Linguaskill, Cambridge ou équivalent.',
      objectif: 'Atteindre le score visé avec une méthode structurée.',
      format: 'Plan d\'entraînement et tests blancs corrigés.'
    },
    {
      title: 'Préparation aux entretiens en anglais',
      pourQui: 'Candidats à un poste, une école ou une promotion.',
      objectif: 'Répondre avec aisance aux questions clés en anglais.',
      format: 'Simulations d\'entretien et retour personnalisé.'
    }
  ];

  // ── Mentions obligatoires (art. L.6353-8 du Code du travail) ──────────────
  // A declared training provider must publish these before enrolment. Keep them
  // here as one editable block rather than scattered through the JSX.
  //
  // Rates are quoted per engagement, not published. `null` is the intended
  // state, not a gap: the Tarifs entry renders "sur devis", which satisfies
  // L.6353-8. Leave it alone unless Antony asks for a public entry rate — if he
  // ever does, set it to the hourly figure net de TVA and the copy adapts.
  const HOURLY_RATE_FROM: number | null = null;
  const ACCESS_LEAD_TIME = '15 jours ouvrés';

  const practicalInfo = [
    {
      icon: CheckCircle,
      title: 'Prérequis',
      body: "Aucun prérequis de niveau : je forme du grand débutant (A1) à l'avancé (C1). Un entretien préalable et une évaluation de départ permettent de situer votre niveau et de construire le programme. Pour les formations à distance, une connexion internet et un ordinateur ou une tablette équipés d'un micro sont nécessaires.",
    },
    {
      icon: Clock3,
      title: 'Durée et rythme',
      body: "La durée est définie avec vous au moment du devis, en fonction de votre objectif et de votre niveau de départ. Les parcours se déroulent en séances individuelles ou en petits groupes, à un rythme hebdomadaire ou intensif selon vos contraintes.",
    },
    {
      icon: CalendarClock,
      title: "Délais d'accès",
      body: `Le premier échange a lieu sous 24 h ouvrées après votre demande. L'entrée en formation intervient généralement sous ${ACCESS_LEAD_TIME} après validation du devis et signature de la convention ou du contrat de formation, sous réserve de disponibilité mutuelle.`,
    },
    {
      icon: ClipboardCheck,
      title: "Modalités d'évaluation",
      body: "Évaluation de positionnement en début de parcours, points de progression réguliers en cours de formation, et bilan final au regard des objectifs fixés dans la convention. Une attestation de fin de formation est remise à l'issue du parcours. Les parcours de préparation à une certification (TOEIC, Linguaskill, Cambridge) intègrent des tests blancs au format réel.",
    },
    {
      icon: Euro,
      title: 'Tarifs',
      body: HOURLY_RATE_FROM
        ? `À partir de ${HOURLY_RATE_FROM} € de l'heure, net de TVA (TVA non applicable, art. 293 B du CGI). Le tarif exact figure sur le devis personnalisé et dépend du volume horaire, du format (individuel ou collectif) et du lieu d'intervention. Devis gratuit et sans engagement.`
        : "Tarif établi sur devis personnalisé, net de TVA (TVA non applicable, art. 293 B du CGI). Il dépend du volume horaire, du format (individuel ou collectif) et du lieu d'intervention. Devis gratuit et sans engagement.",
    },
    {
      icon: Accessibility,
      title: 'Accessibilité et situation de handicap',
      body: "Mes formations sont ouvertes aux personnes en situation de handicap. En tant que formateur indépendant, j'assure moi-même le rôle de référent handicap : contactez-moi en amont à formations@antonyaddy.com ou au +33 6 49 82 98 26 pour que nous étudiions ensemble les aménagements nécessaires (rythme, supports adaptés, durée des séances, lieu accessible, formation à distance). Si un besoin dépasse ce que je peux mettre en place seul, je vous oriente vers les ressources spécialisées de l'Agefiph ou de Cap Emploi.",
    },
  ];

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
        /* FAQPage removed: this page renders no visible Q&A, and Google requires
           FAQ answers to appear on the page. See the note in Home.tsx. */
        jsonLd={trainingJsonLd}
      />
      <CourseSchema
        name="Formations d'anglais professionnel"
        description="Formations personnalisées en anglais professionnel pour adultes, en ligne partout en France et dans le monde ou en présentiel dans le Var et les Alpes-Maritimes."
        provider={{
          name: "Antony Addy",
          url: "https://www.antonyaddy.com"
        }}
      />
      
      <div className="inner-page inner-page--training min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <Reveal>
            <div className="inner-intro text-center mb-12">
              <span className="inner-kicker">Ligne anglais · Vos formations</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
                Formations d'anglais professionnel
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des formations concrètes pour communiquer avec confiance en anglais dans votre vie professionnelle
              </p>
            </div>
          </Reveal>

          <hr className="border-t border-border mb-12" />

          <section id="formations" className="training-overview mb-12 scroll-mt-24" aria-labelledby="training-overview-title">
            <div className="training-overview-head">
              <span>Six parcours, un programme adapté à vous</span>
              <h2 id="training-overview-title">Quel est votre objectif ?</h2>
              <p>Choisissez le besoin qui vous ressemble. Le contenu et le rythme seront ajustés après notre premier échange.</p>
            </div>
            <div className="training-overview-grid">
              {formations.map((formation, index) => (
                <article key={formation.title} className="training-option">
                  <span className="training-option-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{formation.title}</h3>
                  <p>{formation.pourQui}</p>
                  <div><strong>Objectif</strong><span>{formation.objectif}</span></div>
                  <div><strong>Format</strong><span>{formation.format}</span></div>
                  <Link to={`/contact?formation=${encodeURIComponent(formation.title)}`} className="training-option-link" aria-label={`Se renseigner sur la formation ${formation.title}`}>
                    Se renseigner <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* Per-audience landing page links */}
          <Reveal>
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
          </Reveal>


          {/* Formations professionnelles spécialisées (AI-powered) */}
          <Reveal>
            <div id="formations-professionnelles" className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12 scroll-mt-24">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 mr-3 text-accent" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-primary">Formations professionnelles spécialisées</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Entraînez-vous à votre métier avec un partenaire IA qui adapte le vocabulaire, le ton et les scénarios à votre secteur.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3">
                <li>
                  <a
                    href="https://anglaisadistance.fr/dialogues?ctx=ACOM"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <BriefcaseBusiness className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-primary">ACOM — Salons & commerce international ↗</div>
                      <div className="text-sm text-muted-foreground">Accueil visiteurs, prospection B2B, négociation.</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://anglaisadistance.fr/dialogues?ctx=VPL"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <Gem className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-primary">VPL — Vente luxe ↗</div>
                      <div className="text-sm text-muted-foreground">Conseil clientèle haut de gamme en boutique.</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://anglaisadistance.fr/dialogues?ctx=AD"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-primary">Assistant de Direction ↗</div>
                      <div className="text-sm text-muted-foreground">Téléphone professionnel, prise de message, agenda.</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://anglaisadistance.fr/dialogues?ctx=MEDICAL"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <Stethoscope className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-primary">Secrétaire Médicale ↗</div>
                      <div className="text-sm text-muted-foreground">Accueil patient, prise de rendez-vous, réassurance.</div>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="mt-5 pt-5 border-t border-border">
                <a
                  href="https://anglaisadistance.fr/dialogues"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  → IA d'entraînement professionnel (tous contextes) ↗
                </a>
              </div>
            </div>
          </Reveal>


          {/* Où et comment */}
          <Reveal>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 mr-3 text-accent" aria-hidden="true" />
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
          </Reveal>

          {/* Informations pratiques — mentions obligatoires art. L.6353-8 */}
          <Reveal>
            <div id="modalites" className="bg-white rounded-lg shadow-lg p-8 mb-12 scroll-mt-24">
              <div className="flex items-center mb-3">
                <ClipboardList className="h-6 w-6 mr-3 text-accent" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-primary">Informations pratiques</h2>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Prérequis, durée, délais d'accès, modalités d'évaluation, tarifs et accessibilité —
                les informations que tout organisme de formation doit vous communiquer avant votre
                inscription.
              </p>

              <dl className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {practicalInfo.map((item) => (
                  <div key={item.title}>
                    <dt className="font-semibold text-primary mb-1.5 flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                      {item.title}
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">{item.body}</dd>
                  </div>
                ))}
              </dl>

              <p className="text-sm text-muted-foreground border-t border-border pt-4 mt-6">
                Le détail contractuel figure dans les{' '}
                <Link to="/cgv" className="text-accent hover:underline font-medium">
                  conditions générales de vente
                </Link>
                .
              </p>
            </div>
          </Reveal>

          {/* Financement */}
          <Reveal>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <BriefcaseBusiness className="h-6 w-6 mr-3 text-accent" aria-hidden="true" />
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
          </Reveal>

          {/* Authority Resources Section */}
          <Reveal>
            <div className="bg-muted/50 border border-border rounded-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 mr-3 text-accent" aria-hidden="true" />
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
                      <a href="https://www.afpa.fr/formation-qualifiante/formateur-professionnel-d-adultes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
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
                      <a href="https://www.coe.int/en/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
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
                <strong>Dernière mise à jour :</strong> {formatMonthYearFR()}
              </p>
            </div>
          </Reveal>

          {/* Et en attendant */}
          <Reveal>
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 mr-3 text-accent" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-primary">Et en attendant ?</h2>
              </div>
              
              {/* Links to the list of all six platforms rather than deep-linking
                  into one exercise on anglaisadistance.fr, which is what this
                  did before — the other five were invisible from here. */}
              <p className="text-muted-foreground">
                <GraduationCap className="inline h-5 w-5 mr-2 text-accent" aria-hidden="true" />
                En parallèle de mes formations, je mets à disposition{' '}
                <Link
                  to="/ressources-en-ligne"
                  className="font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  {PLATFORM_COUNT} plateformes d'entraînement gratuites
                </Link>
                {' '}— grammaire claire, vocabulaire utile, dialogues audio, préparation TOEIC et CLOE,
                et un entraîneur d'expression orale. Accès libre, sans inscription.
              </p>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Commencer</h2>
              
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Prenez contact pour un premier échange gratuit. Je vous aide à définir vos objectifs et à choisir la formule adaptée.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
                <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">
                  Réserver un premier échange
                </Link>
                <a href={whatsappLink || "#"} onClick={(e) => { if (!whatsappLink) { e.preventDefault(); return; } trackEvent('whatsapp_cta_click', { page: 'Training', target: whatsappLink, prefilled: true, location: 'final-cta' }); }} className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp direct
                </a>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                💬 Premier échange gratuit · Sans engagement · Réponse sous 24 h ouvrées
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
                Réponse sous 24 h ouvrées • Sans engagement • Devis gratuit
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Training;
