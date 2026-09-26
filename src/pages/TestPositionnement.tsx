import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Clock, CheckCircle, Zap, Smartphone, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Reveal } from '@/components/motion/Reveal';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import { trackEvent } from '@/lib/analytics';
import {
  CHALLENGE_URL as KAHOOT_ASSIGNMENT_URL,
  PIN as KAHOOT_PIN,
  useIsPositioningTestOpen,
} from '@/config/positioningTest';

const CECRL_LEVELS = [
  { level: 'A1', label: 'Débutant', range: 'Questions 1–20', tint: 50 },
  { level: 'A2', label: 'Élémentaire', range: 'Questions 21–40', tint: 43 },
  { level: 'B1', label: 'Pré-intermédiaire', range: 'Questions 41–60', tint: 36 },
  { level: 'B1+', label: 'Intermédiaire', range: 'Questions 61–80', tint: 29 },
  { level: 'B2', label: 'Intermédiaire avancé', range: 'Questions 81–100', tint: 22 },
  { level: 'C1', label: 'Avancé', range: 'Questions 101–120', tint: 15 },
];

const STEPS = [
  {
    num: 1,
    title: 'Lancez le test',
    body: 'Cliquez sur « Commencer le test », ou allez sur kahoot.it et entrez le PIN. Aucun compte nécessaire, entrez simplement votre prénom.',
  },
  {
    num: 2,
    title: 'Répondez à votre rythme',
    body: '120 questions à choix multiples, de plus en plus difficiles (A1 → C1). Pas de chronomètre serré : prenez le temps de réfléchir, sans dictionnaire ni traducteur.',
  },
  {
    num: 3,
    title: 'Arrêtez quand ça devient trop difficile',
    body: "C'est normal de ne pas finir ! Dès que vous devinez plus que vous ne répondez, arrêtez-vous et notez votre score et le numéro de la question. Comptez 40 minutes maximum.",
  },
];

const BADGES = [
  { icon: Zap, label: '120 questions' },
  { icon: Clock, label: '≈ 40 min max' },
  { icon: CheckCircle, label: 'Sans compte Kahoot!' },
  { icon: Smartphone, label: 'Résultat immédiat' },
];

const TestPositionnement = () => {
  useScrollTracking('test-de-positionnement');
  useTimeTracking('test-de-positionnement');
  const whatsappScoreLink = useWhatsAppLink('score');
  const whatsappLink = useWhatsAppLink();
  // False once the Kahoot challenge deadline has passed. Flips after mount, so
  // the page never advertises a test that no longer accepts players.
  const testIsOpen = useIsPositioningTestOpen();

  const handleStartTest = () => {
    trackEvent('kahoot_cta_click', { page: 'test-de-positionnement', target: KAHOOT_ASSIGNMENT_URL });
    window.open(KAHOOT_ASSIGNMENT_URL, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    if (!whatsappScoreLink) return;
    trackEvent('whatsapp_score_cta_click', { page: 'test-de-positionnement', target: whatsappScoreLink });
  };

  return (
    <>
      <SEOHead
        title="Test de positionnement en anglais gratuit (A1–C1)"
        description="Testez votre niveau d'anglais gratuitement en 40 minutes : 120 questions CECRL du A1 au C1, résultat immédiat. Formateur britannique certifié FPA."
        canonicalUrl="https://www.antonyaddy.com/test-de-positionnement"
        enableOrgJsonLd
        enableWebSiteJsonLd
      />

      {/* ── 1. HERO ── */}
      <section className="relative bg-primary text-primary-foreground py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10" />
          <div className="absolute bottom-8 left-8 w-40 h-40 rounded-full bg-white/10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3 font-body">
              Ressource gratuite · CECRL A1 → C1
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-5 leading-tight">
              Test de positionnement en anglais
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-6 font-body">
              Évaluez votre niveau d'anglais en 40 minutes maximum, gratuitement et sans inscription. 120 questions de difficulté croissante, du niveau débutant (A1) au niveau avancé (C1), sous forme de quiz interactif Kahoot!.
            </p>
            {!testIsOpen && (
              <p
                role="status"
                className="flex items-start gap-2 rounded-lg bg-amber-400/15 border border-amber-300/40 px-4 py-3 mb-6 text-sm text-white/95 font-body max-w-2xl"
              >
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  La session de quiz en ligne est momentanément fermée pendant son
                  renouvellement. Je peux évaluer votre niveau directement —{' '}
                  <Link to="/contact" className="underline underline-offset-2 font-semibold hover:text-white">
                    voir comment
                  </Link>
                  .
                </span>
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium font-body border border-white/20"
                >
                  <b.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {b.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. ÉCHELLE CECRL ── */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center font-heading mb-3">
              Plus vous allez loin, plus votre niveau est élevé
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 font-body">
              Le test devient progressivement plus difficile. Le bloc de questions où vous commencez à bloquer donne une première indication de votre niveau CECRL.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {CECRL_LEVELS.map((lvl) => (
                <div
                  key={lvl.level}
                  className="rounded-lg p-4 sm:p-5 text-white text-center border border-white/10"
                  style={{ backgroundColor: `hsl(220, 60%, ${lvl.tint}%)` }}
                >
                  <p className="text-xl sm:text-2xl font-bold font-heading mb-1">{lvl.level}</p>
                  <p className="text-xs sm:text-sm font-medium mb-1 font-body">{lvl.label}</p>
                  <p className="text-[11px] sm:text-xs opacity-80 font-body">{lvl.range}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6 max-w-xl mx-auto font-body italic">
              Niveau indicatif. Pour une évaluation complète (oral compris), contactez-moi avec votre score.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 3. COMMENT ÇA MARCHE ── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center font-heading mb-10 sm:mb-12">
              Comment ça marche ?
            </h2>
            <div className="space-y-8 sm:space-y-10">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg sm:text-xl font-heading">
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. CTA CARD ── */}
      <section className="bg-background py-12 sm:py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm text-center">
              {testIsOpen ? (
                <>
                  <button
                    type="button"
                    onClick={handleStartTest}
                    className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-accent/90 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 font-body w-full sm:w-auto"
                  >
                    Commencer le test
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>

                  <p className="mt-5 text-sm text-muted-foreground font-body">
                    Ou rendez-vous sur{' '}
                    <a
                      href="https://kahoot.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      kahoot.it
                    </a>{' '}
                    et entrez le PIN :{' '}
                    <span className="font-mono font-semibold text-foreground">{KAHOOT_PIN}</span>
                  </p>

                  <p className="mt-3 text-xs text-muted-foreground/80 font-body flex items-center justify-center gap-1.5">
                    <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                    Fonctionne sur ordinateur, tablette et téléphone (navigateur ou application Kahoot!).
                  </p>
                </>
              ) : (
                /* Challenge deadline has passed. Say so plainly rather than sending
                   people to a PIN that no longer resolves, and keep the page useful
                   by routing them to a real evaluation instead. */
                <div role="status">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 mb-4">
                    <AlertCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-2">
                    Session de test momentanément fermée
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-6">
                    La session en ligne est en cours de renouvellement. En attendant, je vous
                    propose mieux : dites-moi où vous en êtes et je vous évalue moi-même — à
                    l'écrit comme à l'oral, ce que le quiz ne fait pas. C'est gratuit et sans
                    engagement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={whatsappLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!whatsappLink) { e.preventDefault(); return; }
                        trackEvent('positioning_test_expired_cta', { page: 'test-de-positionnement', target: 'whatsapp' });
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-bold text-base hover:bg-accent/90 transition-all font-body"
                    >
                      <span aria-hidden="true">💬</span>
                      Évaluer mon niveau sur WhatsApp
                    </a>
                    <Link
                      to="/contact"
                      onClick={() => trackEvent('positioning_test_expired_cta', { page: 'test-de-positionnement', target: '/contact' })}
                      className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3.5 rounded-lg font-semibold text-base hover:bg-primary/5 transition-colors font-body"
                    >
                      Passer par le formulaire
                    </Link>
                  </div>
                  <p className="mt-5 text-xs text-muted-foreground/80 font-body">
                    En autonomie dès maintenant :{' '}
                    <a
                      href="https://anglaisadistance.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      anglaisadistance.fr
                    </a>{' '}
                    — exercices classés par niveau, accès libre.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. FOOTER CTA ── */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
              Vous avez votre score ? Parlons-en.
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 font-body max-w-2xl mx-auto">
              Envoyez-moi votre score et le numéro de la question où vous avez commencé à bloquer : je vous confirme votre niveau CECRL et je vous propose un parcours adapté à vos objectifs — entretiens, réunions, TOEIC, Linguaskill ou conversation. Premier échange gratuit, réponse sous 24 h ouvrées.
            </p>
            <a
              href={whatsappScoreLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!whatsappScoreLink) { e.preventDefault(); return; }
                handleWhatsApp();
              }}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white/90 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary font-body"
            >
              <span aria-hidden="true">💬</span>
              Envoyer mon score sur WhatsApp
            </a>
            <p className="mt-4 text-xs text-white/70 font-body">
              Réponse sous 24 h ouvrées · Sans engagement
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default TestPositionnement;
