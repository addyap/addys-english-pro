export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Exercise {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export const exercisesData: Exercise[] = [
  {
    id: 1,
    title: "À : AT ou TO",
    description: "Choisissez entre AT et TO selon le contexte.",
    questions: [
      {
        id: 1,
        question: "I arrived ___ the airport at 6 AM.",
        options: ["at", "to"],
        correctAnswer: "at",
        explanation: "AT s'utilise pour indiquer un lieu précis."
      },
      {
        id: 2,
        question: "I'm going ___ London next week.",
        options: ["at", "to"],
        correctAnswer: "to",
        explanation: "TO indique une direction, un mouvement vers un lieu."
      },
      {
        id: 3,
        question: "She's ___ home right now.",
        options: ["at", "to"],
        correctAnswer: "at",
        explanation: "AT home est une expression figée."
      },
      {
        id: 4,
        question: "We went ___ the cinema yesterday.",
        options: ["at", "to"],
        correctAnswer: "to",
        explanation: "TO indique le mouvement vers le cinéma."
      },
      {
        id: 5,
        question: "Look ___ the board, please.",
        options: ["at", "to"],
        correctAnswer: "at",
        explanation: "Look AT signifie regarder quelque chose."
      },
      {
        id: 6,
        question: "I need to talk ___ you.",
        options: ["at", "to"],
        correctAnswer: "to",
        explanation: "Talk TO somebody est la forme correcte."
      },
      {
        id: 7,
        question: "The meeting is ___ 3 PM.",
        options: ["at", "to"],
        correctAnswer: "at",
        explanation: "AT s'utilise pour indiquer une heure précise."
      },
      {
        id: 8,
        question: "I'm listening ___ music.",
        options: ["at", "to"],
        correctAnswer: "to",
        explanation: "Listen TO est la forme correcte."
      },
      {
        id: 9,
        question: "She's ___ work until 6 PM.",
        options: ["at", "to"],
        correctAnswer: "at",
        explanation: "AT work est une expression courante."
      },
      {
        id: 10,
        question: "I gave the book ___ Sarah.",
        options: ["at", "to"],
        correctAnswer: "to",
        explanation: "Give something TO somebody."
      }
    ]
  },
  {
    id: 2,
    title: "ADJECTIFS : -ING ou -ED",
    description: "Choisissez la forme correcte de l'adjectif.",
    questions: [
      {
        id: 1,
        question: "The film was very ___.",
        options: ["boring", "bored"],
        correctAnswer: "boring",
        explanation: "-ING décrit ce qui cause l'émotion."
      },
      {
        id: 2,
        question: "I was ___ during the lecture.",
        options: ["boring", "bored"],
        correctAnswer: "bored",
        explanation: "-ED décrit ce que l'on ressent."
      },
      {
        id: 3,
        question: "This is an ___ story!",
        options: ["exciting", "excited"],
        correctAnswer: "exciting",
        explanation: "L'histoire cause l'excitation."
      },
      {
        id: 4,
        question: "The children are ___ about the trip.",
        options: ["exciting", "excited"],
        correctAnswer: "excited",
        explanation: "Les enfants ressentent l'excitation."
      },
      {
        id: 5,
        question: "The news was ___.",
        options: ["surprising", "surprised"],
        correctAnswer: "surprising",
        explanation: "La nouvelle cause la surprise."
      },
      {
        id: 6,
        question: "We were ___ by the results.",
        options: ["surprising", "surprised"],
        correctAnswer: "surprised",
        explanation: "On ressent la surprise."
      },
      {
        id: 7,
        question: "It's a ___ book.",
        options: ["interesting", "interested"],
        correctAnswer: "interesting",
        explanation: "Le livre cause l'intérêt."
      },
      {
        id: 8,
        question: "She's ___ in art.",
        options: ["interesting", "interested"],
        correctAnswer: "interested",
        explanation: "Elle ressent de l'intérêt."
      },
      {
        id: 9,
        question: "The exam was ___.",
        options: ["tiring", "tired"],
        correctAnswer: "tiring",
        explanation: "L'examen cause la fatigue."
      },
      {
        id: 10,
        question: "I feel ___ after work.",
        options: ["tiring", "tired"],
        correctAnswer: "tired",
        explanation: "On ressent la fatigue."
      }
    ]
  },
  {
    id: 3,
    title: "ADJECTIFS ou ADVERBES",
    description: "Choisissez entre la forme adjectif ou adverbe.",
    questions: [
      {
        id: 1,
        question: "She speaks English ___.",
        options: ["good", "well"],
        correctAnswer: "well",
        explanation: "WELL est l'adverbe qui modifie le verbe 'speaks'."
      },
      {
        id: 2,
        question: "This is a ___ book.",
        options: ["good", "well"],
        correctAnswer: "good",
        explanation: "GOOD est l'adjectif qui décrit le nom 'book'."
      },
      {
        id: 3,
        question: "He drives ___.",
        options: ["careful", "carefully"],
        correctAnswer: "carefully",
        explanation: "L'adverbe modifie le verbe 'drives'."
      },
      {
        id: 4,
        question: "Be ___ with that vase!",
        options: ["careful", "carefully"],
        correctAnswer: "careful",
        explanation: "Après 'be', on utilise l'adjectif."
      },
      {
        id: 5,
        question: "She answered ___.",
        options: ["quick", "quickly"],
        correctAnswer: "quickly",
        explanation: "L'adverbe modifie le verbe 'answered'."
      },
      {
        id: 6,
        question: "It's a ___ car.",
        options: ["fast", "fastly"],
        correctAnswer: "fast",
        explanation: "FAST est à la fois adjectif et adverbe."
      },
      {
        id: 7,
        question: "The train arrived ___.",
        options: ["late", "lately"],
        correctAnswer: "late",
        explanation: "LATE signifie 'en retard', LATELY signifie 'récemment'."
      },
      {
        id: 8,
        question: "She looks ___.",
        options: ["happy", "happily"],
        correctAnswer: "happy",
        explanation: "Après 'look' (sembler), on utilise l'adjectif."
      },
      {
        id: 9,
        question: "He works ___.",
        options: ["hard", "hardly"],
        correctAnswer: "hard",
        explanation: "HARD signifie 'dur', HARDLY signifie 'à peine'."
      },
      {
        id: 10,
        question: "This seems ___.",
        options: ["easy", "easily"],
        correctAnswer: "easy",
        explanation: "Après 'seem', on utilise l'adjectif."
      }
    ]
  },
  {
    id: 4,
    title: "À LA FIN : AT THE END ou IN THE END",
    description: "Distinguez entre AT THE END et IN THE END.",
    questions: [
      {
        id: 1,
        question: "___ of the film, everyone cried.",
        options: ["At the end", "In the end"],
        correctAnswer: "At the end",
        explanation: "AT THE END + OF indique un point précis dans le temps/espace."
      },
      {
        id: 2,
        question: "___, we decided to stay home.",
        options: ["At the end", "In the end"],
        correctAnswer: "In the end",
        explanation: "IN THE END signifie 'finalement', après réflexion."
      },
      {
        id: 3,
        question: "The best scene is ___ of the book.",
        options: ["at the end", "in the end"],
        correctAnswer: "at the end",
        explanation: "Position spécifique dans le livre."
      },
      {
        id: 4,
        question: "___, everything worked out fine.",
        options: ["At the end", "In the end"],
        correctAnswer: "In the end",
        explanation: "Résultat final après une série d'événements."
      },
      {
        id: 5,
        question: "Sign your name ___ of the page.",
        options: ["at the end", "in the end"],
        correctAnswer: "at the end",
        explanation: "Position précise sur la page."
      },
      {
        id: 6,
        question: "I wasn't sure, but ___ I agreed.",
        options: ["at the end", "in the end"],
        correctAnswer: "in the end",
        explanation: "Décision finale après hésitation."
      },
      {
        id: 7,
        question: "___ of the street, turn left.",
        options: ["At the end", "In the end"],
        correctAnswer: "At the end",
        explanation: "Point géographique précis."
      },
      {
        id: 8,
        question: "___, she got the job she wanted.",
        options: ["At the end", "In the end"],
        correctAnswer: "In the end",
        explanation: "Résultat final positif."
      },
      {
        id: 9,
        question: "There's a surprise ___ of the story.",
        options: ["at the end", "in the end"],
        correctAnswer: "at the end",
        explanation: "Position dans la narration."
      },
      {
        id: 10,
        question: "We had many problems, but ___ we succeeded.",
        options: ["at the end", "in the end"],
        correctAnswer: "in the end",
        explanation: "Résultat final après des difficultés."
      }
    ]
  },
  {
    id: 5,
    title: "À L'HEURE/À TEMPS : IN TIME ou ON TIME",
    description: "Distinguez IN TIME (à temps) et ON TIME (à l'heure).",
    questions: [
      {
        id: 1,
        question: "The train left ___.",
        options: ["in time", "on time"],
        correctAnswer: "on time",
        explanation: "ON TIME = à l'heure prévue (horaire)."
      },
      {
        id: 2,
        question: "We arrived ___ to catch the flight.",
        options: ["in time", "on time"],
        correctAnswer: "in time",
        explanation: "IN TIME = assez tôt pour faire quelque chose."
      },
      {
        id: 3,
        question: "The meeting started ___.",
        options: ["in time", "on time"],
        correctAnswer: "on time",
        explanation: "Commencé à l'heure exacte prévue."
      },
      {
        id: 4,
        question: "I got there ___ to see the beginning.",
        options: ["in time", "on time"],
        correctAnswer: "in time",
        explanation: "Assez tôt pour ne pas manquer le début."
      },
      {
        id: 5,
        question: "The bus is always ___.",
        options: ["in time", "on time"],
        correctAnswer: "on time",
        explanation: "Respect de l'horaire."
      },
      {
        id: 6,
        question: "We finished ___ for the deadline.",
        options: ["in time", "on time"],
        correctAnswer: "in time",
        explanation: "Avant la limite de temps."
      },
      {
        id: 7,
        question: "Please be ___ for the appointment.",
        options: ["in time", "on time"],
        correctAnswer: "on time",
        explanation: "À l'heure exacte du rendez-vous."
      },
      {
        id: 8,
        question: "The doctor will see you ___.",
        options: ["in time", "on time"],
        correctAnswer: "on time",
        explanation: "À l'heure prévue."
      },
      {
        id: 9,
        question: "I hope we get there ___ for dinner.",
        options: ["in time", "on time"],
        correctAnswer: "in time",
        explanation: "Assez tôt pour le dîner."
      },
      {
        id: 10,
        question: "The show started exactly ___.",
        options: ["in time", "on time"],
        correctAnswer: "on time",
        explanation: "À l'heure précise prévue."
      }
    ]
  }
];

export const exercisesList = [
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
