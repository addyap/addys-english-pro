import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import AnimatedCard from '../components/AnimatedCard';

const Exercises = () => {
  useScrollTracking('exercises');
  useTimeTracking('exercises');

  const exercises = [
    { id: 1, title: "À : AT ou TO" },
    { id: 2, title: "ADJECTIFS : -ING ou -ED" },
    { id: 3, title: "ADJECTIFS ou ADVERBES" },
    { id: 4, title: "À LA FIN : AT THE END ou IN THE END" },
    { id: 5, title: "À L'HEURE/À TEMPS : IN TIME ou ON TIME" },
    { id: 6, title: "APPRENDRE : LEARN ou TEACH" },
    { id: 7, title: "(S') ARRÊTER : STOP ou TO STOP + VERBE EN -ING" },
    { id: 8, title: "ASSEZ : ENOUGH ou QUITE" },
    { id: 9, title: "ATTENDRE : EXPECT ou WAIT" },
    { id: 10, title: "AU-DESSUS : ABOVE ou OVER" },
    { id: 11, title: "AUTRE : ELSE ou OTHER" },
    { id: 12, title: "AVANT : BEFORE ou UNTIL" },
    { id: 13, title: "BEAUCOUP : MUCH ou MANY" },
    { id: 14, title: "BIEN/BON : GOOD ou WELL" },
    { id: 15, title: "CE QUI/CE QUE : WHAT ou WHICH" },
    { id: 16, title: "CENT : HUNDRED ou HUNDREDS" },
    { id: 17, title: "CHAQUE : EACH ou EVERY" },
    { id: 18, title: "COMBIEN : HOW MUCH ou HOW MANY" },
    { id: 19, title: "COMME : AS ou LIKE" },
    { id: 20, title: "COMMENT : HOW ou WHAT" },
    { id: 21, title: "CONTRACTION 'D : HAD ou WOULD" },
    { id: 22, title: "CONTRACTION 'S : IS ou HAS" },
    { id: 23, title: "CRITIQUE : CRITIC ou CRITICAL" },
    { id: 24, title: "DANS/EN : IN ou INTO" },
    { id: 25, title: "DANS : IN ou ON" },
    { id: 26, title: "DE : OF ou FOR" },
    { id: 27, title: "DE : OF ou FROM" },
    { id: 28, title: "DE : OF ou OFF" },
    { id: 29, title: "DE : OF ou WITH" },
    { id: 30, title: "DÉJÀ : ALREADY ou EVER" },
    { id: 31, title: "DEPUIS : FOR ou SINCE" },
    { id: 32, title: "DERNIER : LAST ou LATEST" },
    { id: 33, title: "DES : SOME ou ANY" },
    { id: 34, title: "DEUX : BOTH ou TWO" },
    { id: 35, title: "DEVOIR : MUST ou HAVE TO" },
    { id: 36, title: "(NE PAS) DEVOIR : MUSTN'T ou DON'T HAVE TO" },
    { id: 37, title: "DIRE : SAY ou TELL" },
    { id: 38, title: "DONT : WHOM/WHICH ou WHOSE" },
    { id: 39, title: "ÉCONOMIQUE : ECONOMIC ou ECONOMICAL" },
    { id: 40, title: "ÉLEVER/LEVER : RAISE ou RISE" },
    { id: 41, title: "ENCORE : STILL ou YET" },
    { id: 42, title: "ENFIN : AT LAST ou FINALLY" },
    { id: 43, title: "ÊTRE ALLONGÉ/MENTIR/POSER : LAY ou LIE" },
    { id: 44, title: "EXCUSER : EXCUSE ME ou SORRY" },
    { id: 45, title: "FAIRE (1) : DO ou MAKE" },
    { id: 46, title: "FAIRE (2) : DO ou MAKE" },
    { id: 47, title: "FAIRE FAIRE : HAVE ou MAKE" },
    { id: 48, title: "FAUX AMIS (1)" },
    { id: 49, title: "FAUX AMIS (2)" },
    { id: 50, title: "GAGNER : EARN ou WIN" },
    { id: 51, title: "IL Y A : AGO ou THERE IS/ARE" },
    { id: 52, title: "INFINITIF EN FRANÇAIS : BASE VERBALE ou VERBE EN -ING" },
    { id: 53, title: "JAMAIS : EVER ou NEVER" },
    { id: 54, title: "JUSQU'À : UNTIL ou UP TO" },
    { id: 55, title: "LAISSER : LEAVE ou LET" },
    { id: 56, title: "LA PLUPART : MOST ou MOST OF" },
    { id: 57, title: "LOUER : LET ou RENT" },
    { id: 58, title: "MANQUER : LACK ou MISS" },
    { id: 59, title: "MÊME : EVEN ou SAME" },
    { id: 60, title: "MOINS : LESS ou LEAST" },
    { id: 61, title: "MOTS PROCHES (1)" },
    { id: 62, title: "MOTS PROCHES (2)" },
    { id: 63, title: "ORTHOGRAPHE" },
    { id: 64, title: "OÙ : WHERE ou WHEN" },
    { id: 65, title: "PAR : BY ou THROUGH" },
    { id: 66, title: "PARLER : SPEAK ou TALK" },
    { id: 67, title: "PASSÉ COMPOSÉ FRANÇAIS : PRESENT PERFECT ou PRETERIT" },
    { id: 68, title: "PASSER : PASS ou SPEND" },
    { id: 69, title: "PENDANT : FOR ou DURING" },
    { id: 70, title: "PETIT : LITTLE ou SMALL" },
    { id: 71, title: "PEU : FEW ou LITTLE" },
    { id: 72, title: "(LE) PLUS : -ER/-EST ou MORE/MOST" },
    { id: 73, title: "POLITIQUE : POLITICS ou POLICY" },
    { id: 74, title: "POUR : FOR ou TO" },
    { id: 75, title: "PRÉFÉRENCE ET CONSEIL : RATHER ET BETTER" },
    { id: 76, title: "PRÉFIXES : IN- ou UN-" },
    { id: 77, title: "PREMIER : FIRST ou AUTRES MOTS" },
    { id: 78, title: "PRÉSENT : SIMPLE ou BE + VERBE EN -ING" },
    { id: 79, title: "PRÉSENT FRANÇAIS : PRESENT SIMPLE ou PRESENT PERFECT" },
    { id: 80, title: "PRÉSENT et PASSÉ COMPOSÉ FRANÇAIS : HAVE ou BE" },
    { id: 81, title: "QUE : AS ou THAN" },
    { id: 82, title: "QUE : VERBE EN -ING ou TO" },
    { id: 83, title: "QUE : THAT ou WHAT" },
    { id: 84, title: "QUESTIONS EN HOW" },
    { id: 85, title: "QUESTIONS EN WH-" },
    { id: 86, title: "QUI : WHO ou WHICH" },
    { id: 87, title: "RAPPELER : REMEMBER ou REMIND" },
    { id: 88, title: "SE (1) : -SELF/-SELVES ou EACH OTHER" },
    { id: 89, title: "SE (2) : -SELF ou Ø" },
    { id: 90, title: "SENTIR : FEEL ou SMELL" },
    { id: 91, title: "SEUL : ALONE/LONELY ou ONLY" },
    { id: 92, title: "SINGULIER ou PLURIEL" },
    { id: 93, title: "SUFFIXES : -ABLE ou -IBLE" },
    { id: 94, title: "TOUJOURS : ALWAYS ou STILL" },
    { id: 95, title: "TOUT : ALL ou WHOLE" },
    { id: 96, title: "TROP : TOO, TOO MUCH ou TOO MANY" },
    { id: 97, title: "UN/UNE : A ou AN" },
    { id: 98, title: "UN/UNE : A/AN ou ONE" },
    { id: 99, title: "VERBES RÉGULIERS ou IRRÉGULIERS" },
    { id: 100, title: "VOLER : ROB ou STEAL" }
  ];

  return (
    <>
      <SEOHead 
        title="100 Exercices d'anglais – Antony Addy"
        description="Accédez à 100 exercices d'anglais couvrant la grammaire, le vocabulaire et les pièges courants pour améliorer votre niveau."
        canonicalPath="/exercices"
        keywords={["Exercices d'anglais", "Grammaire anglaise", "Vocabulaire anglais", "Pièges en anglais", "Formation anglais", "Antony Addy"]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              100 Exercices d'Anglais
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-body">
              Maîtrisez les nuances de l'anglais avec des exercices ciblés sur les pièges courants
            </p>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-8 bg-accent/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-accent">
              <Lock className="h-8 w-8 text-accent mx-auto mb-3" />
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading">Exercices à venir</h2>
              <p className="text-muted-foreground font-body">
                Les 100 exercices seront bientôt disponibles. Cette section est en cours de développement.
              </p>
            </div>
          </div>
        </section>

        {/* Exercises Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {exercises.map((exercise, index) => (
                <AnimatedCard
                  key={exercise.id}
                  className="bg-card hover:bg-accent/5 border border-border p-4 cursor-not-allowed opacity-60"
                  delay={index * 0.02}
                  hoverScale={1}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary font-heading">
                        {exercise.id}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground leading-tight font-body">
                        {exercise.title}
                      </h3>
                    </div>
                    <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-body">
              Ces exercices sont conçus pour compléter mes formations. Pour un apprentissage structuré et adapté à vos besoins, contactez-moi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body"
              >
                Me contacter
              </Link>
              <Link
                to="/offres-de-formation"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors font-body"
              >
                Voir les formations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Exercises;
