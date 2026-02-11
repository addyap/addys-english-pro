export interface PrepositionQuestion {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationFr: string;
}

export interface PrepositionExercise {
  id: number;
  title: string;
  description: string;
  theme: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: PrepositionQuestion[];
}

export const prepositionExercises: PrepositionExercise[] = [
  {
    id: 1,
    title: "Time Prepositions: In, On, At",
    description: "Master prepositions used with time expressions",
    theme: "Time",
    difficulty: 'easy',
    questions: [
      { id: 1, sentence: "I was born ___ 1995.", options: ["in", "on", "at", "by"], correctAnswer: "in", explanation: "We use 'in' with years.", explanationFr: "On utilise 'in' avec les années." },
      { id: 2, sentence: "The meeting is ___ Monday.", options: ["in", "on", "at", "by"], correctAnswer: "on", explanation: "We use 'on' with days of the week.", explanationFr: "On utilise 'on' avec les jours de la semaine." },
      { id: 3, sentence: "Let's meet ___ 3 o'clock.", options: ["in", "on", "at", "by"], correctAnswer: "at", explanation: "We use 'at' with specific times.", explanationFr: "On utilise 'at' avec les heures précises." },
      { id: 4, sentence: "We go on vacation ___ summer.", options: ["in", "on", "at", "by"], correctAnswer: "in", explanation: "We use 'in' with seasons.", explanationFr: "On utilise 'in' avec les saisons." },
      { id: 5, sentence: "My birthday is ___ March 15th.", options: ["in", "on", "at", "by"], correctAnswer: "on", explanation: "We use 'on' with specific dates.", explanationFr: "On utilise 'on' avec les dates précises." },
      { id: 6, sentence: "The train leaves ___ noon.", options: ["in", "on", "at", "by"], correctAnswer: "at", explanation: "We use 'at' with noon, midnight, and night.", explanationFr: "On utilise 'at' avec midi, minuit et la nuit." },
      { id: 7, sentence: "I usually wake up early ___ the morning.", options: ["in", "on", "at", "by"], correctAnswer: "in", explanation: "We use 'in' with parts of the day (morning, afternoon, evening).", explanationFr: "On utilise 'in' avec les parties de la journée (matin, après-midi, soir)." },
      { id: 8, sentence: "They got married ___ Christmas Day.", options: ["in", "on", "at", "by"], correctAnswer: "on", explanation: "We use 'on' with specific holidays when mentioning the day.", explanationFr: "On utilise 'on' avec les jours fériés spécifiques quand on mentionne le jour." },
      { id: 9, sentence: "I'll be there ___ 5 minutes.", options: ["in", "on", "at", "by"], correctAnswer: "in", explanation: "We use 'in' to indicate duration before something happens.", explanationFr: "On utilise 'in' pour indiquer la durée avant que quelque chose se passe." },
      { id: 10, sentence: "The shop closes ___ the weekend. (British English)", options: ["in", "on", "at", "by"], correctAnswer: "at", explanation: "We use 'at the weekend' in British English.", explanationFr: "On utilise 'at the weekend' en anglais britannique." },
    ]
  },
  {
    id: 2,
    title: "Place Prepositions: In, On, At",
    description: "Learn prepositions used with locations",
    theme: "Place",
    difficulty: 'easy',
    questions: [
      { id: 1, sentence: "I live ___ Paris.", options: ["in", "on", "at", "to"], correctAnswer: "in", explanation: "We use 'in' with cities and countries.", explanationFr: "On utilise 'in' avec les villes et les pays." },
      { id: 2, sentence: "The book is ___ the table.", options: ["in", "on", "at", "to"], correctAnswer: "on", explanation: "We use 'on' when something is on a surface.", explanationFr: "On utilise 'on' quand quelque chose est sur une surface." },
      { id: 3, sentence: "I'm waiting ___ the bus stop.", options: ["in", "on", "at", "to"], correctAnswer: "at", explanation: "We use 'at' for specific locations/points.", explanationFr: "On utilise 'at' pour des lieux/points spécifiques." },
      { id: 4, sentence: "She works ___ a bank.", options: ["in", "on", "at", "to"], correctAnswer: "in", explanation: "We use 'in' for enclosed spaces or buildings.", explanationFr: "On utilise 'in' pour les espaces clos ou les bâtiments." },
      { id: 5, sentence: "There's a picture ___ the wall.", options: ["in", "on", "at", "to"], correctAnswer: "on", explanation: "We use 'on' for things attached to surfaces.", explanationFr: "On utilise 'on' pour les choses attachées aux surfaces." },
      { id: 6, sentence: "Meet me ___ the entrance.", options: ["in", "on", "at", "to"], correctAnswer: "at", explanation: "We use 'at' for specific meeting points.", explanationFr: "On utilise 'at' pour des points de rendez-vous spécifiques." },
      { id: 7, sentence: "I'm ___ the bus right now.", options: ["in", "on", "at", "to"], correctAnswer: "on", explanation: "We use 'on' for public transport.", explanationFr: "On utilise 'on' pour les transports en commun." },
      { id: 8, sentence: "The keys are ___ my bag.", options: ["in", "on", "at", "to"], correctAnswer: "in", explanation: "We use 'in' for things inside containers.", explanationFr: "On utilise 'in' pour les choses à l'intérieur de contenants." },
      { id: 9, sentence: "She's ___ school right now.", options: ["in", "on", "at", "to"], correctAnswer: "at", explanation: "We use 'at' with institutions.", explanationFr: "On utilise 'at' avec les institutions." },
      { id: 10, sentence: "I found this ___ the internet.", options: ["in", "on", "at", "to"], correctAnswer: "on", explanation: "We use 'on' with electronic devices and the internet.", explanationFr: "On utilise 'on' avec les appareils électroniques et internet." },
    ]
  },
  {
    id: 3,
    title: "Movement Prepositions: To, Into, Onto",
    description: "Prepositions indicating direction and movement",
    theme: "Movement",
    difficulty: 'medium',
    questions: [
      { id: 1, sentence: "I'm going ___ the supermarket.", options: ["to", "into", "onto", "at"], correctAnswer: "to", explanation: "'To' indicates direction or destination.", explanationFr: "'To' indique la direction ou la destination." },
      { id: 2, sentence: "She walked ___ the room quietly.", options: ["to", "into", "onto", "at"], correctAnswer: "into", explanation: "'Into' indicates movement from outside to inside.", explanationFr: "'Into' indique un mouvement de l'extérieur vers l'intérieur." },
      { id: 3, sentence: "The cat jumped ___ the table.", options: ["to", "into", "onto", "at"], correctAnswer: "onto", explanation: "'Onto' indicates movement to a surface.", explanationFr: "'Onto' indique un mouvement vers une surface." },
      { id: 4, sentence: "We drove ___ the coast.", options: ["to", "into", "onto", "at"], correctAnswer: "to", explanation: "'To' is used for destinations.", explanationFr: "'To' est utilisé pour les destinations." },
      { id: 5, sentence: "He put the letter ___ the envelope.", options: ["to", "into", "onto", "at"], correctAnswer: "into", explanation: "'Into' shows something entering an enclosed space.", explanationFr: "'Into' montre quelque chose entrant dans un espace clos." },
      { id: 6, sentence: "The bird flew ___ the roof.", options: ["to", "into", "onto", "at"], correctAnswer: "onto", explanation: "'Onto' indicates landing on a surface.", explanationFr: "'Onto' indique l'atterrissage sur une surface." },
      { id: 7, sentence: "I'm traveling ___ London next week.", options: ["to", "into", "onto", "at"], correctAnswer: "to", explanation: "'To' is used before destinations.", explanationFr: "'To' est utilisé avant les destinations." },
      { id: 8, sentence: "She fell ___ the pool.", options: ["to", "into", "onto", "at"], correctAnswer: "into", explanation: "'Into' indicates falling inside something.", explanationFr: "'Into' indique tomber dans quelque chose." },
      { id: 9, sentence: "The cat jumped ___ the shelf.", options: ["to", "into", "onto", "at"], correctAnswer: "onto", explanation: "'Onto' indicates movement to a surface.", explanationFr: "'Onto' indique un mouvement vers une surface." },
      { id: 10, sentence: "We need to get ___ the meeting room.", options: ["to", "into", "onto", "at"], correctAnswer: "to", explanation: "'To' indicates the destination.", explanationFr: "'To' indique la destination." },
    ]
  },
  {
    id: 4,
    title: "Prepositions with Verbs",
    description: "Common verb + preposition combinations",
    theme: "Verb Collocations",
    difficulty: 'medium',
    questions: [
      { id: 1, sentence: "I'm looking ___ my keys. Have you seen them?", options: ["for", "at", "after", "into"], correctAnswer: "for", explanation: "'Look for' means to search for something.", explanationFr: "'Look for' signifie chercher quelque chose." },
      { id: 2, sentence: "Can you look ___ the children while I'm out?", options: ["for", "at", "after", "into"], correctAnswer: "after", explanation: "'Look after' means to take care of.", explanationFr: "'Look after' signifie prendre soin de." },
      { id: 3, sentence: "I'm really looking ___ the weekend.", options: ["for", "forward to", "after", "into"], correctAnswer: "forward to", explanation: "'Look forward to' means to anticipate with pleasure.", explanationFr: "'Look forward to' signifie attendre avec impatience." },
      { id: 4, sentence: "He apologized ___ being late.", options: ["for", "about", "to", "of"], correctAnswer: "for", explanation: "'Apologize for' is the correct collocation.", explanationFr: "'Apologize for' est la collocation correcte." },
      { id: 5, sentence: "I agree ___ your suggestion.", options: ["with", "to", "on", "for"], correctAnswer: "with", explanation: "'Agree with' is used with people or ideas.", explanationFr: "'Agree with' est utilisé avec des personnes ou des idées." },
      { id: 6, sentence: "She complained ___ the noise.", options: ["for", "about", "on", "with"], correctAnswer: "about", explanation: "'Complain about' is the correct collocation.", explanationFr: "'Complain about' est la collocation correcte." },
      { id: 7, sentence: "I depend ___ my parents for support.", options: ["on", "in", "to", "for"], correctAnswer: "on", explanation: "'Depend on' means to rely on.", explanationFr: "'Depend on' signifie compter sur." },
      { id: 8, sentence: "This book belongs ___ the library.", options: ["to", "for", "with", "at"], correctAnswer: "to", explanation: "'Belong to' indicates ownership.", explanationFr: "'Belong to' indique l'appartenance." },
      { id: 9, sentence: "I succeeded ___ passing the exam.", options: ["in", "at", "on", "to"], correctAnswer: "in", explanation: "'Succeed in' is followed by -ing or a noun.", explanationFr: "'Succeed in' est suivi de -ing ou d'un nom." },
      { id: 10, sentence: "She insisted ___ paying for dinner.", options: ["on", "in", "for", "to"], correctAnswer: "on", explanation: "'Insist on' is the correct collocation.", explanationFr: "'Insist on' est la collocation correcte." },
    ]
  },
  {
    id: 5,
    title: "Prepositions with Adjectives",
    description: "Adjective + preposition combinations",
    theme: "Adjective Collocations",
    difficulty: 'hard',
    questions: [
      { id: 1, sentence: "I'm very interested ___ learning languages.", options: ["in", "on", "at", "for"], correctAnswer: "in", explanation: "'Interested in' is the correct collocation.", explanationFr: "'Interested in' est la collocation correcte." },
      { id: 2, sentence: "She's afraid ___ spiders.", options: ["of", "from", "about", "by"], correctAnswer: "of", explanation: "'Afraid of' is used to express fear.", explanationFr: "'Afraid of' est utilisé pour exprimer la peur." },
      { id: 3, sentence: "He's good ___ mathematics.", options: ["at", "in", "on", "for"], correctAnswer: "at", explanation: "'Good at' is used with skills or subjects.", explanationFr: "'Good at' est utilisé avec des compétences ou des matières." },
      { id: 4, sentence: "I'm responsible ___ the project.", options: ["for", "of", "to", "about"], correctAnswer: "for", explanation: "'Responsible for' indicates accountability.", explanationFr: "'Responsible for' indique la responsabilité." },
      { id: 5, sentence: "She's proud ___ her achievements.", options: ["of", "for", "about", "with"], correctAnswer: "of", explanation: "'Proud of' expresses pride.", explanationFr: "'Proud of' exprime la fierté." },
      { id: 6, sentence: "He's tired ___ working overtime.", options: ["of", "from", "with", "about"], correctAnswer: "of", explanation: "'Tired of' means fed up with.", explanationFr: "'Tired of' signifie en avoir assez de." },
      { id: 7, sentence: "I'm sorry ___ the inconvenience.", options: ["for", "about", "of", "to"], correctAnswer: "for", explanation: "'Sorry for' is used to apologize.", explanationFr: "'Sorry for' est utilisé pour s'excuser." },
      { id: 8, sentence: "She's keen ___ joining the team.", options: ["on", "in", "for", "to"], correctAnswer: "on", explanation: "'Keen on' expresses enthusiasm.", explanationFr: "'Keen on' exprime l'enthousiasme." },
      { id: 9, sentence: "He's capable ___ doing great things.", options: ["of", "for", "to", "in"], correctAnswer: "of", explanation: "'Capable of' indicates ability.", explanationFr: "'Capable of' indique la capacité." },
      { id: 10, sentence: "I'm grateful ___ your help.", options: ["for", "of", "to", "about"], correctAnswer: "for", explanation: "'Grateful for' expresses thankfulness.", explanationFr: "'Grateful for' exprime la gratitude." },
    ]
  },
  {
    id: 6,
    title: "Advanced Preposition Challenges",
    description: "Tricky preposition usage for advanced learners",
    theme: "Mixed Advanced",
    difficulty: 'hard',
    questions: [
      { id: 1, sentence: "The meeting was postponed ___ next week.", options: ["until", "to", "for", "by"], correctAnswer: "until", explanation: "'Postponed until' indicates the new time.", explanationFr: "'Postponed until' indique le nouveau moment." },
      { id: 2, sentence: "I've been working here ___ 2018.", options: ["since", "for", "from", "during"], correctAnswer: "since", explanation: "'Since' is used with a specific point in time.", explanationFr: "'Since' est utilisé avec un point précis dans le temps." },
      { id: 3, sentence: "The book was written ___ a famous author.", options: ["by", "from", "with", "of"], correctAnswer: "by", explanation: "'By' indicates the agent in passive voice.", explanationFr: "'By' indique l'agent dans la voix passive." },
      { id: 4, sentence: "She's been on the phone ___ hours.", options: ["for", "since", "during", "while"], correctAnswer: "for", explanation: "'For' is used with a duration of time.", explanationFr: "'For' est utilisé avec une durée." },
      { id: 5, sentence: "This is different ___ what I expected.", options: ["from", "to", "than", "of"], correctAnswer: "from", explanation: "'Different from' is standard usage.", explanationFr: "'Different from' est l'usage standard." },
      { id: 6, sentence: "He arrived ___ the meeting.", options: ["at", "to", "in", "on"], correctAnswer: "at", explanation: "'Arrive at' is used with events.", explanationFr: "'Arrive at' est utilisé avec les événements." },
      { id: 7, sentence: "The price increased ___ 20%.", options: ["by", "to", "with", "for"], correctAnswer: "by", explanation: "'Increase by' indicates the amount of change.", explanationFr: "'Increase by' indique le montant du changement." },
      { id: 8, sentence: "I'm not used ___ waking up early.", options: ["to", "for", "with", "at"], correctAnswer: "to", explanation: "'Used to' (be accustomed to) takes the -ing form.", explanationFr: "'Used to' (être habitué à) prend la forme -ing." },
      { id: 9, sentence: "According ___ the report, sales are up.", options: ["to", "with", "by", "for"], correctAnswer: "to", explanation: "'According to' is the correct expression.", explanationFr: "'According to' est l'expression correcte." },
      { id: 10, sentence: "In spite ___ the rain, we went outside.", options: ["of", "for", "to", "with"], correctAnswer: "of", explanation: "'In spite of' means despite.", explanationFr: "'In spite of' signifie malgré." },
    ]
  }
];

export const getPrepositionExerciseById = (id: number): PrepositionExercise | undefined => {
  return prepositionExercises.find(ex => ex.id === id);
};
