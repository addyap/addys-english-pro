export interface WordFormationExercise {
  id: number;
  title: string;
  description: string;
  questions: {
    id: number;
    baseWord: string;
    targetForm: string; // e.g., "noun", "adjective", "verb", "adverb"
    sentence: string; // Sentence with blank
    answer: string;
    alternatives?: string[];
    explanation: string;
    translation: string;
  }[];
}

export const wordFormationExercises: WordFormationExercise[] = [
  {
    id: 1,
    title: "Formation de mots (1) : Noms à partir de verbes",
    description: "Transformez des verbes en noms en utilisant les suffixes appropriés.",
    questions: [
      { id: 1, baseWord: "develop", targetForm: "noun", sentence: "The ___ of new technologies has changed our lives.", answer: "development", explanation: "develop + -ment = development (le développement)", translation: "Le développement de nouvelles technologies a changé nos vies." },
      { id: 2, baseWord: "decide", targetForm: "noun", sentence: "Making a ___ is not always easy.", answer: "decision", explanation: "decide → decision (la décision)", translation: "Prendre une décision n'est pas toujours facile." },
      { id: 3, baseWord: "perform", targetForm: "noun", sentence: "Her ___ in the play was outstanding.", answer: "performance", explanation: "perform + -ance = performance (la performance)", translation: "Sa performance dans la pièce était exceptionnelle." },
      { id: 4, baseWord: "arrive", targetForm: "noun", sentence: "Please announce your ___ at the reception.", answer: "arrival", explanation: "arrive → arrival (l'arrivée)", translation: "Veuillez annoncer votre arrivée à la réception." },
      { id: 5, baseWord: "explain", targetForm: "noun", sentence: "Can you give me a clear ___?", answer: "explanation", explanation: "explain → explanation (l'explication)", translation: "Pouvez-vous me donner une explication claire ?" },
      { id: 6, baseWord: "imagine", targetForm: "noun", sentence: "Children have a vivid ___.", answer: "imagination", explanation: "imagine → imagination (l'imagination)", translation: "Les enfants ont une imagination vive." },
      { id: 7, baseWord: "compete", targetForm: "noun", sentence: "The ___ between the two companies is fierce.", answer: "competition", explanation: "compete → competition (la compétition)", translation: "La compétition entre les deux entreprises est féroce." },
      { id: 8, baseWord: "organize", targetForm: "noun", sentence: "Good ___ is key to success.", answer: "organization", alternatives: ["organisation"], explanation: "organize → organization (l'organisation)", translation: "Une bonne organisation est la clé du succès." },
      { id: 9, baseWord: "discuss", targetForm: "noun", sentence: "We had an interesting ___ about the project.", answer: "discussion", explanation: "discuss → discussion (la discussion)", translation: "Nous avons eu une discussion intéressante sur le projet." },
      { id: 10, baseWord: "fail", targetForm: "noun", sentence: "Don't be afraid of ___; it's part of learning.", answer: "failure", explanation: "fail → failure (l'échec)", translation: "N'ayez pas peur de l'échec ; c'est une partie de l'apprentissage." }
    ]
  },
  {
    id: 2,
    title: "Formation de mots (2) : Adjectifs à partir de noms",
    description: "Formez des adjectifs à partir de noms en utilisant les suffixes appropriés.",
    questions: [
      { id: 1, baseWord: "danger", targetForm: "adjective", sentence: "Swimming in this river is very ___.", answer: "dangerous", explanation: "danger + -ous = dangerous (dangereux)", translation: "Nager dans cette rivière est très dangereux." },
      { id: 2, baseWord: "success", targetForm: "adjective", sentence: "She is a very ___ businesswoman.", answer: "successful", explanation: "success + -ful = successful (réussi, ayant du succès)", translation: "C'est une femme d'affaires très prospère." },
      { id: 3, baseWord: "care", targetForm: "adjective", sentence: "Be ___ when crossing the road.", answer: "careful", explanation: "care + -ful = careful (prudent)", translation: "Soyez prudent en traversant la route." },
      { id: 4, baseWord: "nature", targetForm: "adjective", sentence: "This product is made from ___ ingredients.", answer: "natural", explanation: "nature → natural (naturel)", translation: "Ce produit est fabriqué à partir d'ingrédients naturels." },
      { id: 5, baseWord: "music", targetForm: "adjective", sentence: "She comes from a very ___ family.", answer: "musical", explanation: "music + -al = musical (musical)", translation: "Elle vient d'une famille très musicale." },
      { id: 6, baseWord: "power", targetForm: "adjective", sentence: "This is a very ___ engine.", answer: "powerful", explanation: "power + -ful = powerful (puissant)", translation: "C'est un moteur très puissant." },
      { id: 7, baseWord: "beauty", targetForm: "adjective", sentence: "What a ___ sunset!", answer: "beautiful", explanation: "beauty → beautiful (beau, magnifique)", translation: "Quel magnifique coucher de soleil !" },
      { id: 8, baseWord: "nation", targetForm: "adjective", sentence: "It's a ___ holiday today.", answer: "national", explanation: "nation + -al = national (national)", translation: "C'est un jour férié national aujourd'hui." },
      { id: 9, baseWord: "tradition", targetForm: "adjective", sentence: "They serve ___ French cuisine.", answer: "traditional", explanation: "tradition + -al = traditional (traditionnel)", translation: "Ils servent une cuisine française traditionnelle." },
      { id: 10, baseWord: "economy", targetForm: "adjective", sentence: "The country is facing ___ difficulties.", answer: "economic", explanation: "economy → economic (économique)", translation: "Le pays fait face à des difficultés économiques." }
    ]
  },
  {
    id: 3,
    title: "Formation de mots (3) : Adverbes à partir d'adjectifs",
    description: "Formez des adverbes à partir d'adjectifs.",
    questions: [
      { id: 1, baseWord: "quick", targetForm: "adverb", sentence: "She ___ finished her homework.", answer: "quickly", explanation: "quick + -ly = quickly (rapidement)", translation: "Elle a rapidement terminé ses devoirs." },
      { id: 2, baseWord: "careful", targetForm: "adverb", sentence: "Please drive ___.", answer: "carefully", explanation: "careful + -ly = carefully (prudemment)", translation: "Veuillez conduire prudemment." },
      { id: 3, baseWord: "happy", targetForm: "adverb", sentence: "They lived ___ ever after.", answer: "happily", explanation: "happy → happily (heureusement)", translation: "Ils vécurent heureux pour toujours." },
      { id: 4, baseWord: "easy", targetForm: "adverb", sentence: "You can ___ learn this language.", answer: "easily", explanation: "easy → easily (facilement)", translation: "Vous pouvez facilement apprendre cette langue." },
      { id: 5, baseWord: "probable", targetForm: "adverb", sentence: "He will ___ arrive late.", answer: "probably", explanation: "probable → probably (probablement)", translation: "Il arrivera probablement en retard." },
      { id: 6, baseWord: "complete", targetForm: "adverb", sentence: "I ___ agree with you.", answer: "completely", explanation: "complete + -ly = completely (complètement)", translation: "Je suis complètement d'accord avec vous." },
      { id: 7, baseWord: "immediate", targetForm: "adverb", sentence: "Please respond ___.", answer: "immediately", explanation: "immediate + -ly = immediately (immédiatement)", translation: "Veuillez répondre immédiatement." },
      { id: 8, baseWord: "serious", targetForm: "adverb", sentence: "Are you ___ considering this offer?", answer: "seriously", explanation: "serious + -ly = seriously (sérieusement)", translation: "Considérez-vous sérieusement cette offre ?" },
      { id: 9, baseWord: "fortunate", targetForm: "adverb", sentence: "___, nobody was injured.", answer: "Fortunately", alternatives: ["fortunately"], explanation: "fortunate + -ly = fortunately (heureusement)", translation: "Heureusement, personne n'a été blessé." },
      { id: 10, baseWord: "automatic", targetForm: "adverb", sentence: "The door opens ___.", answer: "automatically", explanation: "automatic + -ally = automatically (automatiquement)", translation: "La porte s'ouvre automatiquement." }
    ]
  },
  {
    id: 4,
    title: "Formation de mots (4) : Préfixes négatifs",
    description: "Formez des mots de sens contraire en utilisant des préfixes négatifs (un-, in-, im-, dis-, ir-).",
    questions: [
      { id: 1, baseWord: "happy", targetForm: "opposite", sentence: "She seems ___ with the results.", answer: "unhappy", explanation: "un- + happy = unhappy (malheureux)", translation: "Elle semble mécontente des résultats." },
      { id: 2, baseWord: "possible", targetForm: "opposite", sentence: "This task is ___ to complete in one day.", answer: "impossible", explanation: "im- + possible = impossible", translation: "Cette tâche est impossible à accomplir en une journée." },
      { id: 3, baseWord: "agree", targetForm: "opposite", sentence: "I ___ with your opinion.", answer: "disagree", explanation: "dis- + agree = disagree (être en désaccord)", translation: "Je ne suis pas d'accord avec votre opinion." },
      { id: 4, baseWord: "regular", targetForm: "opposite", sentence: "His working hours are very ___.", answer: "irregular", explanation: "ir- + regular = irregular (irrégulier)", translation: "Ses horaires de travail sont très irréguliers." },
      { id: 5, baseWord: "patient", targetForm: "opposite", sentence: "Don't be so ___; good things take time.", answer: "impatient", explanation: "im- + patient = impatient", translation: "Ne soyez pas si impatient ; les bonnes choses prennent du temps." },
      { id: 6, baseWord: "honest", targetForm: "opposite", sentence: "It was ___ of him to cheat on the test.", answer: "dishonest", explanation: "dis- + honest = dishonest (malhonnête)", translation: "C'était malhonnête de sa part de tricher à l'examen." },
      { id: 7, baseWord: "responsible", targetForm: "opposite", sentence: "His behavior was completely ___.", answer: "irresponsible", explanation: "ir- + responsible = irresponsible", translation: "Son comportement était complètement irresponsable." },
      { id: 8, baseWord: "comfortable", targetForm: "opposite", sentence: "This chair is very ___.", answer: "uncomfortable", explanation: "un- + comfortable = uncomfortable (inconfortable)", translation: "Cette chaise est très inconfortable." },
      { id: 9, baseWord: "correct", targetForm: "opposite", sentence: "Your answer is ___.", answer: "incorrect", explanation: "in- + correct = incorrect", translation: "Votre réponse est incorrecte." },
      { id: 10, baseWord: "appear", targetForm: "opposite", sentence: "The magician made the rabbit ___.", answer: "disappear", explanation: "dis- + appear = disappear (disparaître)", translation: "Le magicien a fait disparaître le lapin." }
    ]
  },
  {
    id: 5,
    title: "Formation de mots (5) : Noms de personnes",
    description: "Formez des noms désignant des personnes (-er, -or, -ist, -ian).",
    questions: [
      { id: 1, baseWord: "teach", targetForm: "person", sentence: "My ___ is very patient.", answer: "teacher", explanation: "teach + -er = teacher (enseignant)", translation: "Mon professeur est très patient." },
      { id: 2, baseWord: "act", targetForm: "person", sentence: "She wants to become an ___.", answer: "actor", alternatives: ["actress"], explanation: "act + -or = actor (acteur)", translation: "Elle veut devenir actrice." },
      { id: 3, baseWord: "science", targetForm: "person", sentence: "The ___ made an important discovery.", answer: "scientist", explanation: "science → scientist (scientifique)", translation: "Le scientifique a fait une découverte importante." },
      { id: 4, baseWord: "music", targetForm: "person", sentence: "He is a talented ___.", answer: "musician", explanation: "music + -ian = musician (musicien)", translation: "C'est un musicien talentueux." },
      { id: 5, baseWord: "art", targetForm: "person", sentence: "Picasso was a famous ___.", answer: "artist", explanation: "art + -ist = artist (artiste)", translation: "Picasso était un artiste célèbre." },
      { id: 6, baseWord: "write", targetForm: "person", sentence: "Shakespeare is a famous ___.", answer: "writer", explanation: "write + -er = writer (écrivain)", translation: "Shakespeare est un écrivain célèbre." },
      { id: 7, baseWord: "direct", targetForm: "person", sentence: "The ___ won an Oscar.", answer: "director", explanation: "direct + -or = director (réalisateur)", translation: "Le réalisateur a gagné un Oscar." },
      { id: 8, baseWord: "library", targetForm: "person", sentence: "Ask the ___ for help.", answer: "librarian", explanation: "library → librarian (bibliothécaire)", translation: "Demandez de l'aide au bibliothécaire." },
      { id: 9, baseWord: "psychology", targetForm: "person", sentence: "She works as a ___.", answer: "psychologist", explanation: "psychology → psychologist (psychologue)", translation: "Elle travaille comme psychologue." },
      { id: 10, baseWord: "journal", targetForm: "person", sentence: "The ___ interviewed the prime minister.", answer: "journalist", explanation: "journal + -ist = journalist (journaliste)", translation: "Le journaliste a interviewé le Premier ministre." }
    ]
  },
  {
    id: 6,
    title: "Formation de mots (6) : Exercice mixte",
    description: "Exercice combinant différents types de formation de mots.",
    questions: [
      { id: 1, baseWord: "employ", targetForm: "noun", sentence: "The company has over 500 ___s.", answer: "employee", alternatives: ["employees"], explanation: "employ + -ee = employee (employé)", translation: "L'entreprise compte plus de 500 employés." },
      { id: 2, baseWord: "friend", targetForm: "noun", sentence: "Their ___ has lasted for many years.", answer: "friendship", explanation: "friend + -ship = friendship (amitié)", translation: "Leur amitié dure depuis de nombreuses années." },
      { id: 3, baseWord: "child", targetForm: "noun", sentence: "He had a happy ___.", answer: "childhood", explanation: "child + -hood = childhood (enfance)", translation: "Il a eu une enfance heureuse." },
      { id: 4, baseWord: "wide", targetForm: "verb", sentence: "They plan to ___ the road.", answer: "widen", explanation: "wide + -en = widen (élargir)", translation: "Ils prévoient d'élargir la route." },
      { id: 5, baseWord: "strength", targetForm: "verb", sentence: "Exercise will ___ your muscles.", answer: "strengthen", explanation: "strength + -en = strengthen (renforcer)", translation: "L'exercice renforcera vos muscles." },
      { id: 6, baseWord: "length", targetForm: "verb", sentence: "We need to ___ the deadline.", answer: "lengthen", explanation: "length + -en = lengthen (allonger)", translation: "Nous devons allonger le délai." },
      { id: 7, baseWord: "rely", targetForm: "adjective", sentence: "She is a very ___ person.", answer: "reliable", explanation: "rely → reliable (fiable)", translation: "C'est une personne très fiable." },
      { id: 8, baseWord: "enjoy", targetForm: "adjective", sentence: "It was a very ___ evening.", answer: "enjoyable", explanation: "enjoy + -able = enjoyable (agréable)", translation: "C'était une soirée très agréable." },
      { id: 9, baseWord: "create", targetForm: "noun", sentence: "Art requires a lot of ___.", answer: "creativity", explanation: "create → creativity (créativité)", translation: "L'art demande beaucoup de créativité." },
      { id: 10, baseWord: "electric", targetForm: "noun", sentence: "The ___ is off in the whole building.", answer: "electricity", explanation: "electric → electricity (électricité)", translation: "L'électricité est coupée dans tout le bâtiment." }
    ]
  }
];

export const getWordFormationExerciseById = (id: number): WordFormationExercise | undefined => {
  return wordFormationExercises.find(ex => ex.id === id);
};
