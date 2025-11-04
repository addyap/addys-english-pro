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
  },
  {
    id: 6,
    title: "APPRENDRE : LEARN ou TEACH",
    description: "Distinguez entre LEARN (apprendre) et TEACH (enseigner).",
    questions: [
      {
        id: 1,
        question: "My father ___ me how to drive.",
        options: ["learned", "taught"],
        correctAnswer: "taught",
        explanation: "TEACH = enseigner à quelqu'un."
      },
      {
        id: 2,
        question: "I ___ French at school.",
        options: ["learned", "taught"],
        correctAnswer: "learned",
        explanation: "LEARN = apprendre quelque chose."
      },
      {
        id: 3,
        question: "She ___ English in Japan.",
        options: ["learns", "teaches"],
        correctAnswer: "teaches",
        explanation: "Elle enseigne l'anglais (elle est professeur)."
      },
      {
        id: 4,
        question: "Children ___ quickly.",
        options: ["learn", "teach"],
        correctAnswer: "learn",
        explanation: "Les enfants apprennent vite."
      },
      {
        id: 5,
        question: "Can you ___ me Spanish?",
        options: ["learn", "teach"],
        correctAnswer: "teach",
        explanation: "Peux-tu m'enseigner l'espagnol?"
      },
      {
        id: 6,
        question: "I want to ___ to play guitar.",
        options: ["learn", "teach"],
        correctAnswer: "learn",
        explanation: "Je veux apprendre à jouer de la guitare."
      },
      {
        id: 7,
        question: "He ___ at a university.",
        options: ["learns", "teaches"],
        correctAnswer: "teaches",
        explanation: "Il enseigne à l'université."
      },
      {
        id: 8,
        question: "We ___ a lot from our mistakes.",
        options: ["learn", "teach"],
        correctAnswer: "learn",
        explanation: "On apprend de nos erreurs."
      },
      {
        id: 9,
        question: "Who ___ you mathematics?",
        options: ["learned", "taught"],
        correctAnswer: "taught",
        explanation: "Qui vous a enseigné les mathématiques?"
      },
      {
        id: 10,
        question: "I ___ this lesson yesterday.",
        options: ["learned", "taught"],
        correctAnswer: "learned",
        explanation: "J'ai appris cette leçon hier."
      }
    ]
  },
  {
    id: 7,
    title: "(S') ARRÊTER : STOP ou TO STOP + VERBE EN -ING",
    description: "Distinguez STOP + TO (s'arrêter pour faire) et STOP + -ING (arrêter de faire).",
    questions: [
      {
        id: 1,
        question: "I stopped ___ a coffee.",
        options: ["to buy", "buying"],
        correctAnswer: "to buy",
        explanation: "STOP TO = s'arrêter pour faire quelque chose."
      },
      {
        id: 2,
        question: "He stopped ___ last year.",
        options: ["to smoke", "smoking"],
        correctAnswer: "smoking",
        explanation: "STOP -ING = arrêter de faire quelque chose."
      },
      {
        id: 3,
        question: "We stopped ___ at the view.",
        options: ["to look", "looking"],
        correctAnswer: "to look",
        explanation: "S'arrêter pour regarder."
      },
      {
        id: 4,
        question: "She stopped ___ when she saw me.",
        options: ["to talk", "talking"],
        correctAnswer: "talking",
        explanation: "Elle a arrêté de parler."
      },
      {
        id: 5,
        question: "I stopped ___ some rest.",
        options: ["to take", "taking"],
        correctAnswer: "to take",
        explanation: "S'arrêter pour prendre du repos."
      },
      {
        id: 6,
        question: "They stopped ___ TV.",
        options: ["to watch", "watching"],
        correctAnswer: "watching",
        explanation: "Ils ont arrêté de regarder la télé."
      },
      {
        id: 7,
        question: "Stop ___ that noise!",
        options: ["to make", "making"],
        correctAnswer: "making",
        explanation: "Arrête de faire ce bruit!"
      },
      {
        id: 8,
        question: "We stopped ___ directions.",
        options: ["to ask", "asking"],
        correctAnswer: "to ask",
        explanation: "S'arrêter pour demander des indications."
      },
      {
        id: 9,
        question: "Please stop ___.",
        options: ["to shout", "shouting"],
        correctAnswer: "shouting",
        explanation: "Arrête de crier."
      },
      {
        id: 10,
        question: "He stopped ___ hello.",
        options: ["to say", "saying"],
        correctAnswer: "to say",
        explanation: "Il s'est arrêté pour dire bonjour."
      }
    ]
  },
  {
    id: 8,
    title: "ASSEZ : ENOUGH ou QUITE",
    description: "Distinguez ENOUGH (assez/suffisamment) et QUITE (assez/plutôt).",
    questions: [
      {
        id: 1,
        question: "This room is ___ small.",
        options: ["enough", "quite"],
        correctAnswer: "quite",
        explanation: "QUITE = assez, plutôt (intensité modérée)."
      },
      {
        id: 2,
        question: "I'm not old ___ to drive.",
        options: ["enough", "quite"],
        correctAnswer: "enough",
        explanation: "ENOUGH = suffisamment (après l'adjectif)."
      },
      {
        id: 3,
        question: "The film was ___ interesting.",
        options: ["enough", "quite"],
        correctAnswer: "quite",
        explanation: "Assez/plutôt intéressant."
      },
      {
        id: 4,
        question: "Is it warm ___ for you?",
        options: ["enough", "quite"],
        correctAnswer: "enough",
        explanation: "Assez chaud = suffisamment."
      },
      {
        id: 5,
        question: "She's ___ tall.",
        options: ["enough", "quite"],
        correctAnswer: "quite",
        explanation: "Elle est assez/plutôt grande."
      },
      {
        id: 6,
        question: "We have ___ time.",
        options: ["enough", "quite"],
        correctAnswer: "enough",
        explanation: "ENOUGH devant un nom = assez de."
      },
      {
        id: 7,
        question: "It's ___ expensive.",
        options: ["enough", "quite"],
        correctAnswer: "quite",
        explanation: "C'est plutôt cher."
      },
      {
        id: 8,
        question: "Are you strong ___ to lift this?",
        options: ["enough", "quite"],
        correctAnswer: "enough",
        explanation: "Suffisamment fort."
      },
      {
        id: 9,
        question: "That's ___ difficult.",
        options: ["enough", "quite"],
        correctAnswer: "quite",
        explanation: "C'est plutôt difficile."
      },
      {
        id: 10,
        question: "We don't have ___ money.",
        options: ["enough", "quite"],
        correctAnswer: "enough",
        explanation: "Pas assez d'argent."
      }
    ]
  },
  {
    id: 9,
    title: "ATTENDRE : EXPECT ou WAIT",
    description: "Distinguez EXPECT (s'attendre à) et WAIT (attendre).",
    questions: [
      {
        id: 1,
        question: "I'm ___ for the bus.",
        options: ["expecting", "waiting"],
        correctAnswer: "waiting",
        explanation: "WAIT = attendre (action)."
      },
      {
        id: 2,
        question: "I ___ him to call me.",
        options: ["expect", "wait"],
        correctAnswer: "expect",
        explanation: "EXPECT = s'attendre à ce que."
      },
      {
        id: 3,
        question: "She's ___ a baby.",
        options: ["expecting", "waiting"],
        correctAnswer: "expecting",
        explanation: "EXPECT a baby = attendre un bébé (enceinte)."
      },
      {
        id: 4,
        question: "___ here, please.",
        options: ["Expect", "Wait"],
        correctAnswer: "Wait",
        explanation: "Attendre (rester quelque part)."
      },
      {
        id: 5,
        question: "I didn't ___ to see you here.",
        options: ["expect", "wait"],
        correctAnswer: "expect",
        explanation: "Je ne m'attendais pas à te voir."
      },
      {
        id: 6,
        question: "How long did you ___?",
        options: ["expect", "wait"],
        correctAnswer: "wait",
        explanation: "Combien de temps as-tu attendu?"
      },
      {
        id: 7,
        question: "We ___ good results.",
        options: ["expect", "wait"],
        correctAnswer: "expect",
        explanation: "Nous nous attendons à de bons résultats."
      },
      {
        id: 8,
        question: "Don't ___ for me.",
        options: ["expect", "wait"],
        correctAnswer: "wait",
        explanation: "N'attends pas pour moi."
      },
      {
        id: 9,
        question: "What do you ___?",
        options: ["expect", "wait"],
        correctAnswer: "expect",
        explanation: "À quoi t'attends-tu?"
      },
      {
        id: 10,
        question: "I ___ to hear from you soon.",
        options: ["expect", "wait"],
        correctAnswer: "expect",
        explanation: "Je m'attends à avoir de tes nouvelles."
      }
    ]
  },
  {
    id: 10,
    title: "AU-DESSUS : ABOVE ou OVER",
    description: "Distinguez ABOVE et OVER (tous deux signifient au-dessus).",
    questions: [
      {
        id: 1,
        question: "The picture is ___ the sofa.",
        options: ["above", "over"],
        correctAnswer: "above",
        explanation: "ABOVE = au-dessus (position verticale)."
      },
      {
        id: 2,
        question: "The plane flew ___ the clouds.",
        options: ["above", "over"],
        correctAnswer: "over",
        explanation: "OVER = par-dessus (mouvement)."
      },
      {
        id: 3,
        question: "She's ___ average height.",
        options: ["above", "over"],
        correctAnswer: "above",
        explanation: "ABOVE = supérieur à (niveau)."
      },
      {
        id: 4,
        question: "The bridge goes ___ the river.",
        options: ["above", "over"],
        correctAnswer: "over",
        explanation: "OVER = traverse au-dessus."
      },
      {
        id: 5,
        question: "Temperatures are ___ zero.",
        options: ["above", "over"],
        correctAnswer: "above",
        explanation: "Au-dessus de zéro (niveau)."
      },
      {
        id: 6,
        question: "He jumped ___ the fence.",
        options: ["above", "over"],
        correctAnswer: "over",
        explanation: "OVER = par-dessus (mouvement)."
      },
      {
        id: 7,
        question: "Children ___ 12 must pay.",
        options: ["above", "over"],
        correctAnswer: "over",
        explanation: "OVER = plus de (âge)."
      },
      {
        id: 8,
        question: "The shelf is ___ my head.",
        options: ["above", "over"],
        correctAnswer: "above",
        explanation: "Position au-dessus."
      },
      {
        id: 9,
        question: "She wore a coat ___ her dress.",
        options: ["above", "over"],
        correctAnswer: "over",
        explanation: "OVER = par-dessus (vêtement)."
      },
      {
        id: 10,
        question: "The stars are ___ us.",
        options: ["above", "over"],
        correctAnswer: "above",
        explanation: "Position verticale au-dessus."
      }
    ]
  },
  {
    id: 11,
    title: "AUTRE : ELSE ou OTHER",
    description: "Distinguez ELSE et OTHER (autre).",
    questions: [
      {
        id: 1,
        question: "Who ___ is coming?",
        options: ["else", "other"],
        correctAnswer: "else",
        explanation: "ELSE après un pronom interrogatif."
      },
      {
        id: 2,
        question: "The ___ students left early.",
        options: ["else", "other"],
        correctAnswer: "other",
        explanation: "OTHER devant un nom."
      },
      {
        id: 3,
        question: "What ___ can I do?",
        options: ["else", "other"],
        correctAnswer: "else",
        explanation: "ELSE après what."
      },
      {
        id: 4,
        question: "Do you have any ___ questions?",
        options: ["else", "other"],
        correctAnswer: "other",
        explanation: "OTHER devant un nom."
      },
      {
        id: 5,
        question: "Someone ___ told me.",
        options: ["else", "other"],
        correctAnswer: "else",
        explanation: "ELSE après someone."
      },
      {
        id: 6,
        question: "The ___ day I saw him.",
        options: ["else", "other"],
        correctAnswer: "other",
        explanation: "The other day = l'autre jour."
      },
      {
        id: 7,
        question: "Where ___ did you go?",
        options: ["else", "other"],
        correctAnswer: "else",
        explanation: "ELSE après where."
      },
      {
        id: 8,
        question: "On the ___ hand...",
        options: ["else", "other"],
        correctAnswer: "other",
        explanation: "On the other hand = d'autre part."
      },
      {
        id: 9,
        question: "What ___ would you like?",
        options: ["else", "other"],
        correctAnswer: "else",
        explanation: "ELSE après what."
      },
      {
        id: 10,
        question: "Each ___ person agreed.",
        options: ["else", "other"],
        correctAnswer: "other",
        explanation: "OTHER devant un nom."
      }
    ]
  },
  {
    id: 12,
    title: "AVANT : BEFORE ou UNTIL",
    description: "Distinguez BEFORE (avant) et UNTIL (jusqu'à).",
    questions: [
      {
        id: 1,
        question: "I'll wait ___ 5 PM.",
        options: ["before", "until"],
        correctAnswer: "until",
        explanation: "UNTIL = jusqu'à (durée)."
      },
      {
        id: 2,
        question: "Call me ___ you leave.",
        options: ["before", "until"],
        correctAnswer: "before",
        explanation: "BEFORE = avant de."
      },
      {
        id: 3,
        question: "Stay ___ I come back.",
        options: ["before", "until"],
        correctAnswer: "until",
        explanation: "UNTIL = jusqu'à ce que."
      },
      {
        id: 4,
        question: "I saw her ___ the meeting.",
        options: ["before", "until"],
        correctAnswer: "before",
        explanation: "BEFORE = avant (moment précis)."
      },
      {
        id: 5,
        question: "We worked ___ midnight.",
        options: ["before", "until"],
        correctAnswer: "until",
        explanation: "Travailler jusqu'à minuit."
      },
      {
        id: 6,
        question: "Think ___ you speak.",
        options: ["before", "until"],
        correctAnswer: "before",
        explanation: "Réfléchir avant de parler."
      },
      {
        id: 7,
        question: "Don't go ___ I tell you.",
        options: ["before", "until"],
        correctAnswer: "until",
        explanation: "Ne pars pas jusqu'à ce que je te le dise."
      },
      {
        id: 8,
        question: "I met him ___ 2020.",
        options: ["before", "until"],
        correctAnswer: "before",
        explanation: "Je l'ai rencontré avant 2020."
      },
      {
        id: 9,
        question: "Wait here ___ your name is called.",
        options: ["before", "until"],
        correctAnswer: "until",
        explanation: "Attendre jusqu'à ce que."
      },
      {
        id: 10,
        question: "Finish this ___ tomorrow.",
        options: ["before", "until"],
        correctAnswer: "before",
        explanation: "Terminer avant demain."
      }
    ]
  },
  {
    id: 13,
    title: "BEAUCOUP : MUCH ou MANY",
    description: "MUCH (indénombrable) et MANY (dénombrable).",
    questions: [
      {
        id: 1,
        question: "How ___ people are there?",
        options: ["much", "many"],
        correctAnswer: "many",
        explanation: "MANY avec dénombrable (people)."
      },
      {
        id: 2,
        question: "How ___ money do you need?",
        options: ["much", "many"],
        correctAnswer: "much",
        explanation: "MUCH avec indénombrable (money)."
      },
      {
        id: 3,
        question: "There aren't ___ chairs.",
        options: ["much", "many"],
        correctAnswer: "many",
        explanation: "MANY avec dénombrable pluriel."
      },
      {
        id: 4,
        question: "I don't have ___ time.",
        options: ["much", "many"],
        correctAnswer: "much",
        explanation: "MUCH avec indénombrable (time)."
      },
      {
        id: 5,
        question: "How ___ books did you buy?",
        options: ["much", "many"],
        correctAnswer: "many",
        explanation: "MANY avec dénombrable (books)."
      },
      {
        id: 6,
        question: "There isn't ___ water left.",
        options: ["much", "many"],
        correctAnswer: "much",
        explanation: "MUCH avec indénombrable (water)."
      },
      {
        id: 7,
        question: "How ___ children do they have?",
        options: ["much", "many"],
        correctAnswer: "many",
        explanation: "MANY avec dénombrable (children)."
      },
      {
        id: 8,
        question: "We don't need ___ sugar.",
        options: ["much", "many"],
        correctAnswer: "much",
        explanation: "MUCH avec indénombrable (sugar)."
      },
      {
        id: 9,
        question: "How ___ cars are parked there?",
        options: ["much", "many"],
        correctAnswer: "many",
        explanation: "MANY avec dénombrable (cars)."
      },
      {
        id: 10,
        question: "I don't drink ___ coffee.",
        options: ["much", "many"],
        correctAnswer: "much",
        explanation: "MUCH avec indénombrable (coffee)."
      }
    ]
  },
  {
    id: 14,
    title: "BIEN/BON : GOOD ou WELL",
    description: "GOOD (adjectif) et WELL (adverbe).",
    questions: [
      {
        id: 1,
        question: "She speaks English ___.",
        options: ["good", "well"],
        correctAnswer: "well",
        explanation: "WELL modifie le verbe."
      },
      {
        id: 2,
        question: "That's a ___ idea!",
        options: ["good", "well"],
        correctAnswer: "good",
        explanation: "GOOD modifie le nom."
      },
      {
        id: 3,
        question: "I don't feel ___.",
        options: ["good", "well"],
        correctAnswer: "well",
        explanation: "WELL = en bonne santé."
      },
      {
        id: 4,
        question: "The food tastes ___.",
        options: ["good", "well"],
        correctAnswer: "good",
        explanation: "GOOD après taste (verbe d'état)."
      },
      {
        id: 5,
        question: "He did ___ in the exam.",
        options: ["good", "well"],
        correctAnswer: "well",
        explanation: "WELL modifie le verbe did."
      },
      {
        id: 6,
        question: "She's a ___ teacher.",
        options: ["good", "well"],
        correctAnswer: "good",
        explanation: "GOOD modifie le nom teacher."
      },
      {
        id: 7,
        question: "You look ___!",
        options: ["good", "well"],
        correctAnswer: "good",
        explanation: "GOOD après look (apparence)."
      },
      {
        id: 8,
        question: "They work ___ together.",
        options: ["good", "well"],
        correctAnswer: "well",
        explanation: "WELL modifie le verbe work."
      },
      {
        id: 9,
        question: "It's a ___ day.",
        options: ["good", "well"],
        correctAnswer: "good",
        explanation: "GOOD modifie le nom day."
      },
      {
        id: 10,
        question: "I can swim quite ___.",
        options: ["good", "well"],
        correctAnswer: "well",
        explanation: "WELL modifie le verbe swim."
      }
    ]
  },
  {
    id: 15,
    title: "CE QUI/CE QUE : WHAT ou WHICH",
    description: "Distinguez WHAT et WHICH.",
    questions: [
      {
        id: 1,
        question: "___ is your name?",
        options: ["What", "Which"],
        correctAnswer: "What",
        explanation: "WHAT pour une question ouverte."
      },
      {
        id: 2,
        question: "___ color do you prefer: red or blue?",
        options: ["What", "Which"],
        correctAnswer: "Which",
        explanation: "WHICH pour un choix limité."
      },
      {
        id: 3,
        question: "___ do you want to eat?",
        options: ["What", "Which"],
        correctAnswer: "What",
        explanation: "WHAT sans choix limité."
      },
      {
        id: 4,
        question: "___ one is yours?",
        options: ["What", "Which"],
        correctAnswer: "Which",
        explanation: "WHICH one = lequel."
      },
      {
        id: 5,
        question: "___ time is it?",
        options: ["What", "Which"],
        correctAnswer: "What",
        explanation: "WHAT time = quelle heure."
      },
      {
        id: 6,
        question: "___ book should I read first?",
        options: ["What", "Which"],
        correctAnswer: "Which",
        explanation: "WHICH pour un choix entre plusieurs."
      },
      {
        id: 7,
        question: "___ happened?",
        options: ["What", "Which"],
        correctAnswer: "What",
        explanation: "WHAT happened = que s'est-il passé."
      },
      {
        id: 8,
        question: "___ way is faster?",
        options: ["What", "Which"],
        correctAnswer: "Which",
        explanation: "WHICH way = quel chemin."
      },
      {
        id: 9,
        question: "___ is your job?",
        options: ["What", "Which"],
        correctAnswer: "What",
        explanation: "WHAT pour demander une profession."
      },
      {
        id: 10,
        question: "___ floor do you live on?",
        options: ["What", "Which"],
        correctAnswer: "Which",
        explanation: "WHICH floor = à quel étage."
      }
    ]
  },
  {
    id: 16,
    title: "CENT : HUNDRED ou HUNDREDS",
    description: "Distinguez HUNDRED (sans s) et HUNDREDS (avec s).",
    questions: [
      { id: 1, question: "There are five ___ people.", options: ["hundred", "hundreds"], correctAnswer: "hundred", explanation: "Nombre précis: pas de -s, pas de OF." },
      { id: 2, question: "___ of people came.", options: ["Hundred", "Hundreds"], correctAnswer: "Hundreds", explanation: "Quantité imprécise: avec -s et OF." },
      { id: 3, question: "Two ___ years ago...", options: ["hundred", "hundreds"], correctAnswer: "hundred", explanation: "Nombre précis après un chiffre." },
      { id: 4, question: "I've told you ___ of times!", options: ["hundred", "hundreds"], correctAnswer: "hundreds", explanation: "Des centaines de fois (imprécis)." },
      { id: 5, question: "Three ___ dollars.", options: ["hundred", "hundreds"], correctAnswer: "hundred", explanation: "300 dollars = nombre précis." },
      { id: 6, question: "For ___ of years...", options: ["hundred", "hundreds"], correctAnswer: "hundreds", explanation: "Pendant des centaines d'années." },
      { id: 7, question: "Nine ___ students.", options: ["hundred", "hundreds"], correctAnswer: "hundred", explanation: "900 étudiants = précis." },
      { id: 8, question: "___ and ___ of cars.", options: ["Hundred", "Hundreds"], correctAnswer: "Hundreds", explanation: "Des centaines et des centaines." },
      { id: 9, question: "About seven ___.", options: ["hundred", "hundreds"], correctAnswer: "hundred", explanation: "Environ 700 = toujours singulier." },
      { id: 10, question: "___ of reasons exist.", options: ["Hundred", "Hundreds"], correctAnswer: "Hundreds", explanation: "Des centaines de raisons (imprécis)." }
    ]
  },
  {
    id: 17,
    title: "CHAQUE : EACH ou EVERY",
    description: "Distinguez EACH (chacun individuellement) et EVERY (tous sans exception).",
    questions: [
      { id: 1, question: "___ student has a book.", options: ["Each", "Every"], correctAnswer: "Every", explanation: "EVERY = tous les étudiants (collectif)." },
      { id: 2, question: "___ of them received a gift.", options: ["Each", "Every"], correctAnswer: "Each", explanation: "EACH OF + pronom." },
      { id: 3, question: "I see her ___ day.", options: ["each", "every"], correctAnswer: "every", explanation: "EVERY day = tous les jours." },
      { id: 4, question: "___ room is different.", options: ["Each", "Every"], correctAnswer: "Each", explanation: "EACH souligne l'individualité." },
      { id: 5, question: "___ child needs love.", options: ["Each", "Every"], correctAnswer: "Every", explanation: "EVERY = tous les enfants en général." },
      { id: 6, question: "I gave ___ person a copy.", options: ["each", "every"], correctAnswer: "each", explanation: "EACH = à chaque personne individuellement." },
      { id: 7, question: "I go there ___ week.", options: ["each", "every"], correctAnswer: "every", explanation: "EVERY week = chaque semaine régulièrement." },
      { id: 8, question: "___ of us has responsibilities.", options: ["Each", "Every"], correctAnswer: "Each", explanation: "EACH OF + pronom." },
      { id: 9, question: "Not ___ student passed.", options: ["each", "every"], correctAnswer: "every", explanation: "NOT EVERY = pas tous." },
      { id: 10, question: "I read ___ page carefully.", options: ["each", "every"], correctAnswer: "each", explanation: "EACH page = chaque page individuellement." }
    ]
  },
  {
    id: 18,
    title: "COMBIEN : HOW MUCH ou HOW MANY",
    description: "HOW MUCH (indénombrable) et HOW MANY (dénombrable).",
    questions: [
      { id: 1, question: "___ books do you have?", options: ["How much", "How many"], correctAnswer: "How many", explanation: "MANY avec dénombrable pluriel." },
      { id: 2, question: "___ sugar do you want?", options: ["How much", "How many"], correctAnswer: "How much", explanation: "MUCH avec indénombrable." },
      { id: 3, question: "___ people are coming?", options: ["How much", "How many"], correctAnswer: "How many", explanation: "MANY avec dénombrable." },
      { id: 4, question: "___ time do we have?", options: ["How much", "How many"], correctAnswer: "How much", explanation: "MUCH avec time (indénombrable)." },
      { id: 5, question: "___ children do they have?", options: ["How much", "How many"], correctAnswer: "How many", explanation: "MANY avec dénombrable." },
      { id: 6, question: "___ money do you need?", options: ["How much", "How many"], correctAnswer: "How much", explanation: "MUCH avec money (indénombrable)." },
      { id: 7, question: "___ chairs are there?", options: ["How much", "How many"], correctAnswer: "How many", explanation: "MANY avec dénombrable." },
      { id: 8, question: "___ water should I add?", options: ["How much", "How many"], correctAnswer: "How much", explanation: "MUCH avec indénombrable." },
      { id: 9, question: "___ days off do you get?", options: ["How much", "How many"], correctAnswer: "How many", explanation: "MANY avec dénombrable." },
      { id: 10, question: "___ information do you have?", options: ["How much", "How many"], correctAnswer: "How much", explanation: "MUCH avec indénombrable." }
    ]
  },
  {
    id: 19,
    title: "COMME : AS ou LIKE",
    description: "Distinguez AS (en tant que, comme) et LIKE (comme, tel que).",
    questions: [
      { id: 1, question: "He works ___ a teacher.", options: ["as", "like"], correctAnswer: "as", explanation: "AS = en tant que (fonction)." },
      { id: 2, question: "She sings ___ an angel.", options: ["as", "like"], correctAnswer: "like", explanation: "LIKE = comparaison (ressemblance)." },
      { id: 3, question: "Do ___ I say.", options: ["as", "like"], correctAnswer: "as", explanation: "AS après un impératif." },
      { id: 4, question: "She looks ___ her mother.", options: ["as", "like"], correctAnswer: "like", explanation: "LIKE = ressemble à." },
      { id: 5, question: "I used it ___ an example.", options: ["as", "like"], correctAnswer: "as", explanation: "AS = en tant qu'exemple." },
      { id: 6, question: "It tastes ___ chicken.", options: ["as", "like"], correctAnswer: "like", explanation: "LIKE = a le goût de." },
      { id: 7, question: "___ you know, I'm busy.", options: ["As", "Like"], correctAnswer: "As", explanation: "AS you know = comme tu sais." },
      { id: 8, question: "Cities ___ London are expensive.", options: ["as", "like"], correctAnswer: "like", explanation: "LIKE = tel que (exemple)." },
      { id: 9, question: "He acted ___ a fool.", options: ["as", "like"], correctAnswer: "like", explanation: "LIKE = comparaison comportementale." },
      { id: 10, question: "She works ___ a doctor.", options: ["as", "like"], correctAnswer: "as", explanation: "AS = profession." }
    ]
  },
  {
    id: 20,
    title: "COMMENT : HOW ou WHAT",
    description: "Distinguez HOW et WHAT dans les questions.",
    questions: [
      { id: 1, question: "___ is your name?", options: ["How", "What"], correctAnswer: "What", explanation: "WHAT = quel est." },
      { id: 2, question: "___ are you?", options: ["How", "What"], correctAnswer: "How", explanation: "HOW = comment vas-tu." },
      { id: 3, question: "___ do you do?", options: ["How", "What"], correctAnswer: "What", explanation: "WHAT do you do = profession." },
      { id: 4, question: "___ old are you?", options: ["How", "What"], correctAnswer: "How", explanation: "HOW old = quel âge." },
      { id: 5, question: "___ does it cost?", options: ["How", "What"], correctAnswer: "How", explanation: "HOW much (implicite)." },
      { id: 6, question: "___ time is it?", options: ["How", "What"], correctAnswer: "What", explanation: "WHAT time = quelle heure." },
      { id: 7, question: "___ do you spell it?", options: ["How", "What"], correctAnswer: "How", explanation: "HOW = de quelle manière." },
      { id: 8, question: "___ is he like?", options: ["How", "What"], correctAnswer: "What", explanation: "WHAT... like = comment est-il (description)." },
      { id: 9, question: "___ tall is she?", options: ["How", "What"], correctAnswer: "How", explanation: "HOW tall = quelle taille." },
      { id: 10, question: "___ is your job?", options: ["How", "What"], correctAnswer: "What", explanation: "WHAT = quel." }
    ]
  },
  {
    id: 21,
    title: "CONTRACTION 'D : HAD ou WOULD",
    description: "Distinguez 'D = HAD ou 'D = WOULD.",
    questions: [
      { id: 1, question: "I'd finished when he arrived.", options: ["had", "would"], correctAnswer: "had", explanation: "'D = HAD (past perfect)." },
      { id: 2, question: "I'd like some tea.", options: ["had", "would"], correctAnswer: "would", explanation: "'D like = WOULD like." },
      { id: 3, question: "She'd never been there before.", options: ["had", "would"], correctAnswer: "had", explanation: "'D = HAD (experience passée)." },
      { id: 4, question: "We'd go if we could.", options: ["had", "would"], correctAnswer: "would", explanation: "'D = WOULD (conditionnel)." },
      { id: 5, question: "If I'd known, I'd have told you.", options: ["had", "would"], correctAnswer: "had", explanation: "Premier 'D = HAD (if + past perfect)." },
      { id: 6, question: "I'd rather stay home.", options: ["had", "would"], correctAnswer: "would", explanation: "'D rather = WOULD rather." },
      { id: 7, question: "They'd already left.", options: ["had", "would"], correctAnswer: "had", explanation: "'D = HAD (past perfect)." },
      { id: 8, question: "I'd love to come!", options: ["had", "would"], correctAnswer: "would", explanation: "'D love = WOULD love." },
      { id: 9, question: "He'd seen that film twice.", options: ["had", "would"], correctAnswer: "had", explanation: "'D = HAD (expérience)." },
      { id: 10, question: "We'd prefer coffee.", options: ["had", "would"], correctAnswer: "would", explanation: "'D prefer = WOULD prefer." }
    ]
  },
  {
    id: 22,
    title: "CONTRACTION 'S : IS ou HAS",
    description: "Distinguez 'S = IS ou 'S = HAS.",
    questions: [
      { id: 1, question: "She's coming tomorrow.", options: ["is", "has"], correctAnswer: "is", explanation: "'S = IS (present continuous)." },
      { id: 2, question: "He's finished his work.", options: ["is", "has"], correctAnswer: "has", explanation: "'S = HAS (present perfect)." },
      { id: 3, question: "It's cold today.", options: ["is", "has"], correctAnswer: "is", explanation: "'S = IS (état)." },
      { id: 4, question: "She's been to Paris.", options: ["is", "has"], correctAnswer: "has", explanation: "'S = HAS (present perfect)." },
      { id: 5, question: "He's a teacher.", options: ["is", "has"], correctAnswer: "is", explanation: "'S = IS (profession)." },
      { id: 6, question: "She's got a new car.", options: ["is", "has"], correctAnswer: "has", explanation: "'S = HAS got." },
      { id: 7, question: "It's raining.", options: ["is", "has"], correctAnswer: "is", explanation: "'S = IS (present continuous)." },
      { id: 8, question: "He's never done that.", options: ["is", "has"], correctAnswer: "has", explanation: "'S = HAS (present perfect)." },
      { id: 9, question: "She's very tall.", options: ["is", "has"], correctAnswer: "is", explanation: "'S = IS (description)." },
      { id: 10, question: "It's been a long day.", options: ["is", "has"], correctAnswer: "has", explanation: "'S = HAS (present perfect)." }
    ]
  },
  {
    id: 23,
    title: "CRITIQUE : CRITIC ou CRITICAL",
    description: "Distinguez CRITIC (nom: critique) et CRITICAL (adjectif: critique).",
    questions: [
      { id: 1, question: "He's a film ___.", options: ["critic", "critical"], correctAnswer: "critic", explanation: "CRITIC = nom (personne)." },
      { id: 2, question: "The situation is ___.", options: ["critic", "critical"], correctAnswer: "critical", explanation: "CRITICAL = adjectif (grave)." },
      { id: 3, question: "She's a harsh ___.", options: ["critic", "critical"], correctAnswer: "critic", explanation: "CRITIC = nom." },
      { id: 4, question: "This is a ___ moment.", options: ["critic", "critical"], correctAnswer: "critical", explanation: "CRITICAL = adjectif (crucial)." },
      { id: 5, question: "The ___ wrote a review.", options: ["critic", "critical"], correctAnswer: "critic", explanation: "CRITIC = nom (personne)." },
      { id: 6, question: "Don't be so ___!", options: ["critic", "critical"], correctAnswer: "critical", explanation: "CRITICAL = adjectif (sévère)." },
      { id: 7, question: "He's a famous art ___.", options: ["critic", "critical"], correctAnswer: "critic", explanation: "CRITIC = nom." },
      { id: 8, question: "A ___ error occurred.", options: ["critic", "critical"], correctAnswer: "critical", explanation: "CRITICAL = adjectif (grave)." },
      { id: 9, question: "She's a music ___.", options: ["critic", "critical"], correctAnswer: "critic", explanation: "CRITIC = nom." },
      { id: 10, question: "He's in ___ condition.", options: ["critic", "critical"], correctAnswer: "critical", explanation: "CRITICAL condition = état critique." }
    ]
  },
  {
    id: 24,
    title: "DANS/EN : IN ou INTO",
    description: "Distinguez IN (dans, position) et INTO (dans, mouvement).",
    questions: [
      { id: 1, question: "She's ___ the room.", options: ["in", "into"], correctAnswer: "in", explanation: "IN = position (elle y est)." },
      { id: 2, question: "She walked ___ the room.", options: ["in", "into"], correctAnswer: "into", explanation: "INTO = mouvement vers l'intérieur." },
      { id: 3, question: "The book is ___ my bag.", options: ["in", "into"], correctAnswer: "in", explanation: "IN = position." },
      { id: 4, question: "Put it ___ your bag.", options: ["in", "into"], correctAnswer: "into", explanation: "INTO = mouvement." },
      { id: 5, question: "He lives ___ London.", options: ["in", "into"], correctAnswer: "in", explanation: "IN = habiter dans (position)." },
      { id: 6, question: "She jumped ___ the water.", options: ["in", "into"], correctAnswer: "into", explanation: "INTO = mouvement de saut." },
      { id: 7, question: "I'm ___ the office.", options: ["in", "into"], correctAnswer: "in", explanation: "IN = position." },
      { id: 8, question: "Come ___ the house.", options: ["in", "into"], correctAnswer: "into", explanation: "INTO = mouvement d'entrée." },
      { id: 9, question: "He's ___ bed.", options: ["in", "into"], correctAnswer: "in", explanation: "IN bed = position (couché)." },
      { id: 10, question: "She got ___ the car.", options: ["in", "into"], correctAnswer: "into", explanation: "INTO = mouvement pour entrer." }
    ]
  },
  {
    id: 25,
    title: "DANS : IN ou ON",
    description: "Distinguez IN et ON selon le contexte.",
    questions: [
      { id: 1, question: "I'll see you ___ Monday.", options: ["in", "on"], correctAnswer: "on", explanation: "ON + jour de la semaine." },
      { id: 2, question: "I'll see you ___ June.", options: ["in", "on"], correctAnswer: "in", explanation: "IN + mois." },
      { id: 3, question: "The book is ___ the table.", options: ["in", "on"], correctAnswer: "on", explanation: "ON = sur (surface)." },
      { id: 4, question: "I live ___ Paris.", options: ["in", "on"], correctAnswer: "in", explanation: "IN = dans (ville)." },
      { id: 5, question: "I was born ___ 1990.", options: ["in", "on"], correctAnswer: "in", explanation: "IN + année." },
      { id: 6, question: "I was born ___ May 5th.", options: ["in", "on"], correctAnswer: "on", explanation: "ON + date précise." },
      { id: 7, question: "The picture is ___ the wall.", options: ["in", "on"], correctAnswer: "on", explanation: "ON the wall = sur le mur." },
      { id: 8, question: "I'll call you ___ the evening.", options: ["in", "on"], correctAnswer: "in", explanation: "IN the evening/morning/afternoon." },
      { id: 9, question: "See you ___ Christmas Day.", options: ["in", "on"], correctAnswer: "on", explanation: "ON + jour férié spécifique." },
      { id: 10, question: "I'll be there ___ 10 minutes.", options: ["in", "on"], correctAnswer: "in", explanation: "IN = dans (futur proche)." }
    ]
  },
  {
    id: 26,
    title: "DE : OF ou FOR",
    description: "Distinguez OF et FOR.",
    questions: [
      { id: 1, question: "The color ___ the car.", options: ["of", "for"], correctAnswer: "of", explanation: "OF = appartenance/caractéristique." },
      { id: 2, question: "This is ___ you.", options: ["of", "for"], correctAnswer: "for", explanation: "FOR = destiné à." },
      { id: 3, question: "A friend ___ mine.", options: ["of", "for"], correctAnswer: "of", explanation: "OF mine = à moi." },
      { id: 4, question: "I waited ___ an hour.", options: ["of", "for"], correctAnswer: "for", explanation: "FOR = pendant (durée)." },
      { id: 5, question: "The capital ___ France.", options: ["of", "for"], correctAnswer: "of", explanation: "OF = de (appartenance)." },
      { id: 6, question: "It's time ___ dinner.", options: ["of", "for"], correctAnswer: "for", explanation: "FOR = pour." },
      { id: 7, question: "A cup ___ coffee.", options: ["of", "for"], correctAnswer: "of", explanation: "OF = de (contenu)." },
      { id: 8, question: "Thank you ___ coming.", options: ["of", "for"], correctAnswer: "for", explanation: "Thank you FOR." },
      { id: 9, question: "The name ___ the street.", options: ["of", "for"], correctAnswer: "of", explanation: "OF = de (appartenance)." },
      { id: 10, question: "I did it ___ you.", options: ["of", "for"], correctAnswer: "for", explanation: "FOR = pour (bénéficiaire)." }
    ]
  },
  {
    id: 27,
    title: "DE : OF ou FROM",
    description: "Distinguez OF (de, appartenance) et FROM (de, origine).",
    questions: [
      { id: 1, question: "I'm ___ London.", options: ["of", "from"], correctAnswer: "from", explanation: "FROM = origine géographique." },
      { id: 2, question: "The title ___ the book.", options: ["of", "from"], correctAnswer: "of", explanation: "OF = de (appartenance)." },
      { id: 3, question: "She comes ___ Spain.", options: ["of", "from"], correctAnswer: "from", explanation: "FROM = provenance." },
      { id: 4, question: "The Queen ___ England.", options: ["of", "from"], correctAnswer: "of", explanation: "OF = de (titre/fonction)." },
      { id: 5, question: "A letter ___ my friend.", options: ["of", "from"], correctAnswer: "from", explanation: "FROM = expéditeur." },
      { id: 6, question: "The price ___ the car.", options: ["of", "from"], correctAnswer: "of", explanation: "OF = de (caractéristique)." },
      { id: 7, question: "I got it ___ the shop.", options: ["of", "from"], correctAnswer: "from", explanation: "FROM = provenance/source." },
      { id: 8, question: "The roof ___ the house.", options: ["of", "from"], correctAnswer: "of", explanation: "OF = de (partie de)." },
      { id: 9, question: "She's ___ a rich family.", options: ["of", "from"], correctAnswer: "from", explanation: "FROM = origine familiale." },
      { id: 10, question: "The top ___ the mountain.", options: ["of", "from"], correctAnswer: "of", explanation: "OF = de (partie de)." }
    ]
  },
  {
    id: 28,
    title: "DE : OF ou OFF",
    description: "Distinguez OF (de) et OFF (éteint, enlevé).",
    questions: [
      { id: 1, question: "Turn ___ the light.", options: ["of", "off"], correctAnswer: "off", explanation: "OFF = éteindre." },
      { id: 2, question: "The end ___ the story.", options: ["of", "off"], correctAnswer: "of", explanation: "OF = de (appartenance)." },
      { id: 3, question: "Get ___ the bus here.", options: ["of", "off"], correctAnswer: "off", explanation: "OFF = descendre de." },
      { id: 4, question: "A piece ___ cake.", options: ["of", "off"], correctAnswer: "of", explanation: "OF = de (partie de)." },
      { id: 5, question: "Take ___ your shoes.", options: ["of", "off"], correctAnswer: "off", explanation: "OFF = enlever." },
      { id: 6, question: "Some ___ them left.", options: ["of", "off"], correctAnswer: "of", explanation: "OF = de (parmi)." },
      { id: 7, question: "The alarm went ___.", options: ["of", "off"], correctAnswer: "off", explanation: "GO OFF = se déclencher." },
      { id: 8, question: "The best ___ all.", options: ["of", "off"], correctAnswer: "of", explanation: "OF = de (parmi)." },
      { id: 9, question: "Switch ___ the TV.", options: ["of", "off"], correctAnswer: "off", explanation: "OFF = éteindre." },
      { id: 10, question: "Most ___ the students.", options: ["of", "off"], correctAnswer: "of", explanation: "OF = de (parmi)." }
    ]
  },
  {
    id: 29,
    title: "DE : OF ou WITH",
    description: "Distinguez OF et WITH.",
    questions: [
      { id: 1, question: "I'm pleased ___ the result.", options: ["of", "with"], correctAnswer: "with", explanation: "Pleased WITH." },
      { id: 2, question: "The owner ___ the shop.", options: ["of", "with"], correctAnswer: "of", explanation: "OF = de (possession)." },
      { id: 3, question: "I agree ___ you.", options: ["of", "with"], correctAnswer: "with", explanation: "Agree WITH somebody." },
      { id: 4, question: "A lot ___ people.", options: ["of", "with"], correctAnswer: "of", explanation: "A lot OF." },
      { id: 5, question: "I'm satisfied ___ it.", options: ["of", "with"], correctAnswer: "with", explanation: "Satisfied WITH." },
      { id: 6, question: "The smell ___ flowers.", options: ["of", "with"], correctAnswer: "of", explanation: "OF = de (provenance)." },
      { id: 7, question: "Are you happy ___ this?", options: ["of", "with"], correctAnswer: "with", explanation: "Happy WITH something." },
      { id: 8, question: "The cost ___ living.", options: ["of", "with"], correctAnswer: "of", explanation: "OF = de (relation)." },
      { id: 9, question: "I'm angry ___ him.", options: ["of", "with"], correctAnswer: "with", explanation: "Angry WITH somebody." },
      { id: 10, question: "The cause ___ the problem.", options: ["of", "with"], correctAnswer: "of", explanation: "OF = de (relation)." }
    ]
  },
  {
    id: 30,
    title: "DÉJÀ : ALREADY ou EVER",
    description: "Distinguez ALREADY (déjà accompli) et EVER (déjà dans la vie).",
    questions: [
      { id: 1, question: "I've ___ finished.", options: ["already", "ever"], correctAnswer: "already", explanation: "ALREADY = déjà (action accomplie)." },
      { id: 2, question: "Have you ___ been to Paris?", options: ["already", "ever"], correctAnswer: "ever", explanation: "EVER = déjà (dans ta vie)." },
      { id: 3, question: "She's ___ left.", options: ["already", "ever"], correctAnswer: "already", explanation: "ALREADY = déjà parti." },
      { id: 4, question: "This is the best film I've ___ seen.", options: ["already", "ever"], correctAnswer: "ever", explanation: "EVER = jamais vu (superlatif)." },
      { id: 5, question: "I've ___ done it.", options: ["already", "ever"], correctAnswer: "already", explanation: "ALREADY = déjà fait." },
      { id: 6, question: "Have you ___ tried sushi?", options: ["already", "ever"], correctAnswer: "ever", explanation: "EVER = déjà essayé (expérience)." },
      { id: 7, question: "They've ___ arrived.", options: ["already", "ever"], correctAnswer: "already", explanation: "ALREADY = déjà arrivés." },
      { id: 8, question: "Nobody has ___ done this.", options: ["already", "ever"], correctAnswer: "ever", explanation: "EVER après nobody." },
      { id: 9, question: "I've ___ told you.", options: ["already", "ever"], correctAnswer: "already", explanation: "ALREADY = je te l'ai déjà dit." },
      { id: 10, question: "Have you ___ met him?", options: ["already", "ever"], correctAnswer: "ever", explanation: "EVER = déjà rencontré (dans ta vie)." }
    ]
  },
  {
    id: 31,
    title: "DEPUIS : FOR ou SINCE",
    description: "FOR (durée) et SINCE (point de départ).",
    questions: [
      { id: 1, question: "I've lived here ___ 2010.", options: ["for", "since"], correctAnswer: "since", explanation: "SINCE + date/moment précis." },
      { id: 2, question: "I've lived here ___ 5 years.", options: ["for", "since"], correctAnswer: "for", explanation: "FOR + durée." },
      { id: 3, question: "She's been ill ___ Monday.", options: ["for", "since"], correctAnswer: "since", explanation: "SINCE + jour précis." },
      { id: 4, question: "She's been ill ___ three days.", options: ["for", "since"], correctAnswer: "for", explanation: "FOR + durée." },
      { id: 5, question: "I haven't seen him ___ ages.", options: ["for", "since"], correctAnswer: "for", explanation: "FOR ages = depuis longtemps." },
      { id: 6, question: "I haven't seen him ___ last week.", options: ["for", "since"], correctAnswer: "since", explanation: "SINCE + moment passé." },
      { id: 7, question: "We've known each other ___ childhood.", options: ["for", "since"], correctAnswer: "since", explanation: "SINCE + période/époque." },
      { id: 8, question: "We've known each other ___ 20 years.", options: ["for", "since"], correctAnswer: "for", explanation: "FOR + durée chiffrée." },
      { id: 9, question: "I've been waiting ___ an hour.", options: ["for", "since"], correctAnswer: "for", explanation: "FOR + durée." },
      { id: 10, question: "I've been waiting ___ 2 o'clock.", options: ["for", "since"], correctAnswer: "since", explanation: "SINCE + heure précise." }
    ]
  },
  {
    id: 32,
    title: "DERNIER : LAST ou LATEST",
    description: "LAST (dernier d'une série terminée) et LATEST (dernier en date, plus récent).",
    questions: [
      { id: 1, question: "This is my ___ chance.", options: ["last", "latest"], correctAnswer: "last", explanation: "LAST = dernier (série finie)." },
      { id: 2, question: "Have you seen his ___ film?", options: ["last", "latest"], correctAnswer: "latest", explanation: "LATEST = le plus récent." },
      { id: 3, question: "She finished ___.", options: ["last", "latest"], correctAnswer: "last", explanation: "LAST = en dernier (position)." },
      { id: 4, question: "What's the ___ news?", options: ["last", "latest"], correctAnswer: "latest", explanation: "LATEST = le plus récent." },
      { id: 5, question: "___ week I was ill.", options: ["Last", "Latest"], correctAnswer: "Last", explanation: "LAST week = la semaine dernière." },
      { id: 6, question: "That was his ___ novel before he died.", options: ["last", "latest"], correctAnswer: "last", explanation: "LAST = dernier (série terminée)." },
      { id: 7, question: "Here's my ___ report.", options: ["last", "latest"], correctAnswer: "latest", explanation: "LATEST = le plus récent." },
      { id: 8, question: "This is the ___ time I'm telling you.", options: ["last", "latest"], correctAnswer: "last", explanation: "LAST time = dernière fois." },
      { id: 9, question: "Check out his ___ album.", options: ["last", "latest"], correctAnswer: "latest", explanation: "LATEST = le plus récent." },
      { id: 10, question: "Who came ___?", options: ["last", "latest"], correctAnswer: "last", explanation: "LAST = en dernier (ordre)." }
    ]
  },
  {
    id: 33,
    title: "DES : SOME ou ANY",
    description: "SOME (affirmatif/offre) et ANY (négatif/interrogatif).",
    questions: [
      { id: 1, question: "I need ___ help.", options: ["some", "any"], correctAnswer: "some", explanation: "SOME dans une phrase affirmative." },
      { id: 2, question: "I don't have ___ money.", options: ["some", "any"], correctAnswer: "any", explanation: "ANY dans une phrase négative." },
      { id: 3, question: "Do you have ___ questions?", options: ["some", "any"], correctAnswer: "any", explanation: "ANY dans une question." },
      { id: 4, question: "Would you like ___ tea?", options: ["some", "any"], correctAnswer: "some", explanation: "SOME dans une offre." },
      { id: 5, question: "There aren't ___ chairs.", options: ["some", "any"], correctAnswer: "any", explanation: "ANY après une négation." },
      { id: 6, question: "I bought ___ apples.", options: ["some", "any"], correctAnswer: "some", explanation: "SOME dans une affirmation." },
      { id: 7, question: "Can I have ___ water?", options: ["some", "any"], correctAnswer: "some", explanation: "SOME dans une requête." },
      { id: 8, question: "There isn't ___ milk left.", options: ["some", "any"], correctAnswer: "any", explanation: "ANY après négation." },
      { id: 9, question: "I met ___ interesting people.", options: ["some", "any"], correctAnswer: "some", explanation: "SOME dans une affirmation." },
      { id: 10, question: "He never has ___ time.", options: ["some", "any"], correctAnswer: "any", explanation: "ANY après never (négation)." }
    ]
  },
  {
    id: 34,
    title: "DEUX : BOTH ou TWO",
    description: "Distinguez BOTH (les deux) et TWO (deux).",
    questions: [
      { id: 1, question: "I have ___ sisters.", options: ["both", "two"], correctAnswer: "two", explanation: "TWO = nombre." },
      { id: 2, question: "___ of them are doctors.", options: ["Both", "Two"], correctAnswer: "Both", explanation: "BOTH = les deux (emphase)." },
      { id: 3, question: "There are ___ options.", options: ["both", "two"], correctAnswer: "two", explanation: "TWO = quantité." },
      { id: 4, question: "___ answers are correct.", options: ["Both", "Two"], correctAnswer: "Both", explanation: "BOTH = les deux réponses." },
      { id: 5, question: "I want ___ tickets.", options: ["both", "two"], correctAnswer: "two", explanation: "TWO = quantité demandée." },
      { id: 6, question: "I like ___ books.", options: ["both", "two"], correctAnswer: "both", explanation: "BOTH = j'aime les deux." },
      { id: 7, question: "I waited ___ hours.", options: ["both", "two"], correctAnswer: "two", explanation: "TWO = durée chiffrée." },
      { id: 8, question: "___ children can swim.", options: ["Both", "Two"], correctAnswer: "Both", explanation: "BOTH = les deux enfants." },
      { id: 9, question: "I need ___ pens.", options: ["both", "two"], correctAnswer: "two", explanation: "TWO = quantité." },
      { id: 10, question: "___ my parents are teachers.", options: ["Both", "Two"], correctAnswer: "Both", explanation: "BOTH = mes deux parents." }
    ]
  },
  {
    id: 35,
    title: "DEVOIR : MUST ou HAVE TO",
    description: "MUST (obligation personnelle) et HAVE TO (obligation externe).",
    questions: [
      { id: 1, question: "I ___ see a doctor.", options: ["must", "have to"], correctAnswer: "must", explanation: "MUST = je sens que je dois." },
      { id: 2, question: "I ___ wear a uniform at work.", options: ["must", "have to"], correctAnswer: "have to", explanation: "HAVE TO = règlement (obligation externe)." },
      { id: 3, question: "You ___ try this cake!", options: ["must", "have to"], correctAnswer: "must", explanation: "MUST = recommandation forte." },
      { id: 4, question: "She ___ be 18 to vote.", options: ["must", "has to"], correctAnswer: "has to", explanation: "HAS TO = règle légale." },
      { id: 5, question: "I ___ remember to call her.", options: ["must", "have to"], correctAnswer: "must", explanation: "MUST = obligation personnelle." },
      { id: 6, question: "Students ___ attend classes.", options: ["must", "have to"], correctAnswer: "have to", explanation: "HAVE TO = règlement." },
      { id: 7, question: "You ___ be tired.", options: ["must", "have to"], correctAnswer: "must", explanation: "MUST = déduction logique." },
      { id: 8, question: "Do I ___ pay now?", options: ["must", "have to"], correctAnswer: "have to", explanation: "HAVE TO dans les questions." },
      { id: 9, question: "I really ___ go now.", options: ["must", "have to"], correctAnswer: "must", explanation: "MUST = conviction personnelle." },
      { id: 10, question: "You ___ have a license to drive.", options: ["must", "have to"], correctAnswer: "have to", explanation: "HAVE TO = obligation légale." }
    ]
  },
  {
    id: 36,
    title: "(NE PAS) DEVOIR : MUSTN'T ou DON'T HAVE TO",
    description: "MUSTN'T (interdit) et DON'T HAVE TO (pas nécessaire).",
    questions: [
      { id: 1, question: "You ___ smoke here.", options: ["mustn't", "don't have to"], correctAnswer: "mustn't", explanation: "MUSTN'T = interdit." },
      { id: 2, question: "You ___ come if you're busy.", options: ["mustn't", "don't have to"], correctAnswer: "don't have to", explanation: "DON'T HAVE TO = pas obligé." },
      { id: 3, question: "You ___ tell anyone.", options: ["mustn't", "don't have to"], correctAnswer: "mustn't", explanation: "MUSTN'T = ne doit pas (interdiction)." },
      { id: 4, question: "We ___ wear uniforms on Fridays.", options: ["mustn't", "don't have to"], correctAnswer: "don't have to", explanation: "DON'T HAVE TO = pas nécessaire." },
      { id: 5, question: "You ___ be late.", options: ["mustn't", "don't have to"], correctAnswer: "mustn't", explanation: "MUSTN'T = interdit d'être en retard." },
      { id: 6, question: "You ___ pay now, you can pay later.", options: ["mustn't", "don't have to"], correctAnswer: "don't have to", explanation: "DON'T HAVE TO = pas obligé." },
      { id: 7, question: "You ___ touch that!", options: ["mustn't", "don't have to"], correctAnswer: "mustn't", explanation: "MUSTN'T = interdiction forte." },
      { id: 8, question: "You ___ answer if you don't want to.", options: ["mustn't", "don't have to"], correctAnswer: "don't have to", explanation: "DON'T HAVE TO = pas obligé." },
      { id: 9, question: "We ___ forget this meeting.", options: ["mustn't", "don't have to"], correctAnswer: "mustn't", explanation: "MUSTN'T = ne doit pas oublier." },
      { id: 10, question: "You ___ finish it today.", options: ["mustn't", "don't have to"], correctAnswer: "don't have to", explanation: "DON'T HAVE TO = pas nécessaire." }
    ]
  },
  {
    id: 37,
    title: "DIRE : SAY ou TELL",
    description: "SAY (dire) et TELL (dire à quelqu'un).",
    questions: [
      { id: 1, question: "He ___ me the truth.", options: ["said", "told"], correctAnswer: "told", explanation: "TELL + personne." },
      { id: 2, question: "He ___ that he was tired.", options: ["said", "told"], correctAnswer: "said", explanation: "SAY + que (pas de personne après say)." },
      { id: 3, question: "Can you ___ me the time?", options: ["say", "tell"], correctAnswer: "tell", explanation: "TELL + personne." },
      { id: 4, question: "She ___ goodbye.", options: ["said", "told"], correctAnswer: "said", explanation: "SAY goodbye (expression figée)." },
      { id: 5, question: "He ___ her a story.", options: ["said", "told"], correctAnswer: "told", explanation: "TELL + personne + objet." },
      { id: 6, question: "What did you ___?", options: ["say", "tell"], correctAnswer: "say", explanation: "SAY (pas de personne)." },
      { id: 7, question: "He ___ me to wait.", options: ["said", "told"], correctAnswer: "told", explanation: "TELL somebody TO do." },
      { id: 8, question: "She ___ she would come.", options: ["said", "told"], correctAnswer: "said", explanation: "SAY + proposition." },
      { id: 9, question: "___ me about it.", options: ["Say", "Tell"], correctAnswer: "Tell", explanation: "TELL + personne + about." },
      { id: 10, question: "He didn't ___ anything.", options: ["say", "tell"], correctAnswer: "say", explanation: "SAY something/anything." }
    ]
  },
  {
    id: 38,
    title: "DONT : WHOM/WHICH ou WHOSE",
    description: "Distinguez les pronoms relatifs.",
    questions: [
      { id: 1, question: "The man ___ car was stolen...", options: ["whom", "whose"], correctAnswer: "whose", explanation: "WHOSE = dont (possession)." },
      { id: 2, question: "The person to ___ I spoke...", options: ["whom", "whose"], correctAnswer: "whom", explanation: "WHOM après préposition (personne)." },
      { id: 3, question: "The woman ___ son is a doctor...", options: ["which", "whose"], correctAnswer: "whose", explanation: "WHOSE = dont (lien familial)." },
      { id: 4, question: "The book ___ I read...", options: ["which", "whose"], correctAnswer: "which", explanation: "WHICH = que (chose)." },
      { id: 5, question: "The girl ___ I met...", options: ["whom", "whose"], correctAnswer: "whom", explanation: "WHOM = que (personne objet)." },
      { id: 6, question: "The house ___ roof is red...", options: ["which", "whose"], correctAnswer: "whose", explanation: "WHOSE = dont (possession)." },
      { id: 7, question: "The people with ___ I work...", options: ["whom", "whose"], correctAnswer: "whom", explanation: "WHOM après préposition." },
      { id: 8, question: "The teacher ___ class I attend...", options: ["whom", "whose"], correctAnswer: "whose", explanation: "WHOSE = dont (possession)." },
      { id: 9, question: "The film ___ won the Oscar...", options: ["which", "whose"], correctAnswer: "which", explanation: "WHICH = qui (chose sujet)." },
      { id: 10, question: "The author ___ books I love...", options: ["whom", "whose"], correctAnswer: "whose", explanation: "WHOSE = dont (possession)." }
    ]
  },
  {
    id: 39,
    title: "ÉCONOMIQUE : ECONOMIC ou ECONOMICAL",
    description: "ECONOMIC (relatif à l'économie) et ECONOMICAL (économe).",
    questions: [
      { id: 1, question: "The ___ crisis is serious.", options: ["economic", "economical"], correctAnswer: "economic", explanation: "ECONOMIC = relatif à l'économie." },
      { id: 2, question: "This car is very ___.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = économe, bon marché." },
      { id: 3, question: "___ growth is slowing.", options: ["Economic", "Economical"], correctAnswer: "Economic", explanation: "ECONOMIC growth = croissance économique." },
      { id: 4, question: "It's more ___ to buy in bulk.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = économique (avantageux)." },
      { id: 5, question: "The government's ___ policy...", options: ["economic", "economical"], correctAnswer: "economic", explanation: "ECONOMIC policy = politique économique." },
      { id: 6, question: "She's very ___ with money.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = économe." },
      { id: 7, question: "The ___ situation has improved.", options: ["economic", "economical"], correctAnswer: "economic", explanation: "ECONOMIC = relatif à l'économie." },
      { id: 8, question: "This method is more ___.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = plus économique (rentable)." },
      { id: 9, question: "He's an ___ advisor.", options: ["economic", "economical"], correctAnswer: "economic", explanation: "ECONOMIC advisor = conseiller économique." },
      { id: 10, question: "LED bulbs are ___.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = économes en énergie." }
    ]
  },
  {
    id: 40,
    title: "ÉLEVER/LEVER : RAISE ou RISE",
    description: "RAISE (transitif: lever qqch) et RISE (intransitif: se lever).",
    questions: [
      { id: 1, question: "Please ___ your hand.", options: ["raise", "rise"], correctAnswer: "raise", explanation: "RAISE + objet (transitif)." },
      { id: 2, question: "The sun ___ in the east.", options: ["raises", "rises"], correctAnswer: "rises", explanation: "RISE = se lever (intransitif)." },
      { id: 3, question: "They ___ prices.", options: ["raised", "rose"], correctAnswer: "raised", explanation: "RAISE prices = augmenter les prix." },
      { id: 4, question: "Temperatures are ___.", options: ["raising", "rising"], correctAnswer: "rising", explanation: "RISE = monter (intransitif)." },
      { id: 5, question: "She ___ her voice.", options: ["raised", "rose"], correctAnswer: "raised", explanation: "RAISE one's voice = élever la voix." },
      { id: 6, question: "Smoke was ___ from the chimney.", options: ["raising", "rising"], correctAnswer: "rising", explanation: "RISE = s'élever (intransitif)." },
      { id: 7, question: "He ___ his children alone.", options: ["raised", "rose"], correctAnswer: "raised", explanation: "RAISE children = élever des enfants." },
      { id: 8, question: "She ___ to her feet.", options: ["raised", "rose"], correctAnswer: "rose", explanation: "RISE to one's feet = se lever." },
      { id: 9, question: "Can we ___ this issue?", options: ["raise", "rise"], correctAnswer: "raise", explanation: "RAISE an issue = soulever une question." },
      { id: 10, question: "Crime rates have ___.", options: ["raised", "risen"], correctAnswer: "risen", explanation: "RISE = augmenter (intransitif)." }
    ]
  },
  {
    id: 41,
    title: "ENCORE : STILL ou YET",
    description: "STILL (toujours) et YET (encore/déjà dans négatif/interrogatif).",
    questions: [
      { id: 1, question: "He's ___ working.", options: ["still", "yet"], correctAnswer: "still", explanation: "STILL = toujours (action continue)." },
      { id: 2, question: "Haven't you finished ___?", options: ["still", "yet"], correctAnswer: "yet", explanation: "YET en fin de phrase négative/interrogative." },
      { id: 3, question: "Is she ___ here?", options: ["still", "yet"], correctAnswer: "still", explanation: "STILL = toujours (en cours)." },
      { id: 4, question: "I haven't done it ___.", options: ["still", "yet"], correctAnswer: "yet", explanation: "YET = pas encore." },
      { id: 5, question: "Do you ___ live there?", options: ["still", "yet"], correctAnswer: "still", explanation: "STILL = toujours (continuité)." },
      { id: 6, question: "Has he called ___?", options: ["still", "yet"], correctAnswer: "yet", explanation: "YET dans une question." },
      { id: 7, question: "They're ___ waiting.", options: ["still", "yet"], correctAnswer: "still", explanation: "STILL = toujours en train de." },
      { id: 8, question: "We haven't decided ___.", options: ["still", "yet"], correctAnswer: "yet", explanation: "YET = pas encore décidé." },
      { id: 9, question: "I ___ remember that day.", options: ["still", "yet"], correctAnswer: "still", explanation: "STILL = je me souviens toujours." },
      { id: 10, question: "Haven't you seen it ___?", options: ["still", "yet"], correctAnswer: "yet", explanation: "YET en fin de phrase interrogative." }
    ]
  },
  {
    id: 42,
    title: "ENFIN : AT LAST ou FINALLY",
    description: "AT LAST (enfin! soulagement) et FINALLY (finalement, dans l'ordre).",
    questions: [
      { id: 1, question: "___, the rain stopped!", options: ["At last", "Finally"], correctAnswer: "At last", explanation: "AT LAST = enfin (soulagement après attente)." },
      { id: 2, question: "___, I'd like to thank everyone.", options: ["At last", "Finally"], correctAnswer: "Finally", explanation: "FINALLY = pour terminer (énumération)." },
      { id: 3, question: "___, you're here!", options: ["At last", "Finally"], correctAnswer: "At last", explanation: "AT LAST = enfin! (impatience)." },
      { id: 4, question: "First..., then..., and ___, we left.", options: ["at last", "finally"], correctAnswer: "finally", explanation: "FINALLY dans une énumération." },
      { id: 5, question: "___, I found my keys!", options: ["At last", "Finally"], correctAnswer: "At last", explanation: "AT LAST = enfin! (recherche longue)." },
      { id: 6, question: "He ___ agreed.", options: ["at last", "finally"], correctAnswer: "finally", explanation: "FINALLY = finalement (neutre)." },
      { id: 7, question: "___, the bus arrived!", options: ["At last", "Finally"], correctAnswer: "At last", explanation: "AT LAST = enfin! (attente pénible)." },
      { id: 8, question: "We visited Paris, Rome, and ___ Athens.", options: ["at last", "finally"], correctAnswer: "finally", explanation: "FINALLY = dernier élément d'une liste." },
      { id: 9, question: "___, I can rest!", options: ["At last", "Finally"], correctAnswer: "At last", explanation: "AT LAST = enfin! (soulagement)." },
      { id: 10, question: "___, the project was completed.", options: ["At last", "Finally"], correctAnswer: "Finally", explanation: "FINALLY = finalement (conclusion)." }
    ]
  },
  {
    id: 43,
    title: "ÊTRE ALLONGÉ/MENTIR/POSER : LAY ou LIE",
    description: "LAY (poser, transitif) et LIE (être allongé/mentir, intransitif).",
    questions: [
      { id: 1, question: "Please ___ the book on the table.", options: ["lay", "lie"], correctAnswer: "lay", explanation: "LAY = poser (transitif, + objet)." },
      { id: 2, question: "I need to ___ down.", options: ["lay", "lie"], correctAnswer: "lie", explanation: "LIE down = s'allonger (intransitif)." },
      { id: 3, question: "She ___ the baby in the crib.", options: ["laid", "lay"], correctAnswer: "laid", explanation: "LAY = poser (passé: laid)." },
      { id: 4, question: "He ___ on the beach yesterday.", options: ["laid", "lay"], correctAnswer: "lay", explanation: "LIE = être allongé (passé: lay)." },
      { id: 5, question: "Don't ___ to me!", options: ["lay", "lie"], correctAnswer: "lie", explanation: "LIE = mentir." },
      { id: 6, question: "___ the papers here.", options: ["Lay", "Lie"], correctAnswer: "Lay", explanation: "LAY = poser (transitif)." },
      { id: 7, question: "The town ___ in a valley.", options: ["lays", "lies"], correctAnswer: "lies", explanation: "LIE = être situé." },
      { id: 8, question: "He has ___ the foundation.", options: ["laid", "lain"], correctAnswer: "laid", explanation: "LAY (participe passé: laid)." },
      { id: 9, question: "She has ___ there for hours.", options: ["laid", "lain"], correctAnswer: "lain", explanation: "LIE = être allongé (participe passé: lain)." },
      { id: 10, question: "He was ___ about his age.", options: ["laying", "lying"], correctAnswer: "lying", explanation: "LIE = mentir (-ing: lying)." }
    ]
  },
  {
    id: 44,
    title: "EXCUSER : EXCUSE ME ou SORRY",
    description: "EXCUSE ME (pour attirer l'attention) et SORRY (pour s'excuser).",
    questions: [
      { id: 1, question: "___, where is the station?", options: ["Excuse me", "Sorry"], correctAnswer: "Excuse me", explanation: "EXCUSE ME pour attirer l'attention." },
      { id: 2, question: "___, I didn't mean to hurt you.", options: ["Excuse me", "Sorry"], correctAnswer: "Sorry", explanation: "SORRY pour s'excuser d'une faute." },
      { id: 3, question: "___, can I get past?", options: ["Excuse me", "Sorry"], correctAnswer: "Excuse me", explanation: "EXCUSE ME pour demander de passer." },
      { id: 4, question: "___, I broke your cup.", options: ["Excuse me", "Sorry"], correctAnswer: "Sorry", explanation: "SORRY pour s'excuser d'un accident." },
      { id: 5, question: "___, what did you say?", options: ["Excuse me", "Sorry"], correctAnswer: "Excuse me", explanation: "EXCUSE ME pour faire répéter." },
      { id: 6, question: "___ for being late.", options: ["Excuse me", "Sorry"], correctAnswer: "Sorry", explanation: "SORRY pour s'excuser du retard." },
      { id: 7, question: "___, is this seat taken?", options: ["Excuse me", "Sorry"], correctAnswer: "Excuse me", explanation: "EXCUSE ME pour poser une question." },
      { id: 8, question: "___ I stepped on your foot.", options: ["Excuse me", "Sorry"], correctAnswer: "Sorry", explanation: "SORRY pour s'excuser." },
      { id: 9, question: "___, may I interrupt?", options: ["Excuse me", "Sorry"], correctAnswer: "Excuse me", explanation: "EXCUSE ME pour interrompre poliment." },
      { id: 10, question: "I'm ___ to hear that.", options: ["excuse me", "sorry"], correctAnswer: "sorry", explanation: "SORRY = désolé (empathie)." }
    ]
  },
  {
    id: 45,
    title: "FAIRE (1) : DO ou MAKE",
    description: "DO (actions générales) et MAKE (créer, produire). Partie 1.",
    questions: [
      { id: 1, question: "___ your homework.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO homework." },
      { id: 2, question: "___ a cake.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE = fabriquer." },
      { id: 3, question: "___ a mistake.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE a mistake." },
      { id: 4, question: "___ the dishes.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO the dishes." },
      { id: 5, question: "___ a decision.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE a decision." },
      { id: 6, question: "___ your best.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO your best." },
      { id: 7, question: "___ noise.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE noise." },
      { id: 8, question: "___ business.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO business." },
      { id: 9, question: "___ a phone call.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE a call." },
      { id: 10, question: "___ exercise.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO exercise." }
    ]
  },
  {
    id: 46,
    title: "FAIRE (2) : DO ou MAKE",
    description: "DO et MAKE. Partie 2 - plus d'expressions.",
    questions: [
      { id: 1, question: "___ money.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE money = gagner de l'argent." },
      { id: 2, question: "___ the shopping.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO the shopping." },
      { id: 3, question: "___ friends.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE friends." },
      { id: 4, question: "___ an effort.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE an effort." },
      { id: 5, question: "___ damage.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO damage." },
      { id: 6, question: "___ progress.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE progress." },
      { id: 7, question: "___ a favour.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO a favour." },
      { id: 8, question: "___ an excuse.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE an excuse." },
      { id: 9, question: "___ harm.", options: ["Do", "Make"], correctAnswer: "Do", explanation: "DO harm." },
      { id: 10, question: "___ sure.", options: ["Do", "Make"], correctAnswer: "Make", explanation: "MAKE sure." }
    ]
  },
  {
    id: 47,
    title: "FAIRE FAIRE : HAVE ou MAKE",
    description: "HAVE (faire faire) et MAKE (forcer à faire).",
    questions: [
      { id: 1, question: "I ___ my car repaired.", options: ["had", "made"], correctAnswer: "had", explanation: "HAVE something done (service)." },
      { id: 2, question: "She ___ him apologize.", options: ["had", "made"], correctAnswer: "made", explanation: "MAKE somebody do (forcer)." },
      { id: 3, question: "I'll ___ my hair cut.", options: ["have", "make"], correctAnswer: "have", explanation: "HAVE something done." },
      { id: 4, question: "They ___ us wait.", options: ["had", "made"], correctAnswer: "made", explanation: "MAKE somebody do (obliger)." },
      { id: 5, question: "I ___ the house painted.", options: ["had", "made"], correctAnswer: "had", explanation: "HAVE something done (service)." },
      { id: 6, question: "His jokes ___ me laugh.", options: ["have", "make"], correctAnswer: "make", explanation: "MAKE somebody do (causer)." },
      { id: 7, question: "She ___ her teeth checked.", options: ["had", "made"], correctAnswer: "had", explanation: "HAVE something done." },
      { id: 8, question: "The teacher ___ us study.", options: ["had", "made"], correctAnswer: "made", explanation: "MAKE somebody do (contraindre)." },
      { id: 9, question: "I'll ___ it delivered.", options: ["have", "make"], correctAnswer: "have", explanation: "HAVE something done." },
      { id: 10, question: "Don't ___ me do it!", options: ["have", "make"], correctAnswer: "make", explanation: "MAKE somebody do (forcer)." }
    ]
  },
  {
    id: 48,
    title: "FAUX AMIS (1)",
    description: "Mots français qui ne se traduisent pas littéralement. Partie 1.",
    questions: [
      { id: 1, question: "Actuellement = ___", options: ["actually", "currently"], correctAnswer: "currently", explanation: "CURRENTLY = maintenant (actually = en fait)." },
      { id: 2, question: "Assister à = ___", options: ["assist", "attend"], correctAnswer: "attend", explanation: "ATTEND = assister à (assist = aider)." },
      { id: 3, question: "Librairie = ___", options: ["library", "bookshop"], correctAnswer: "bookshop", explanation: "BOOKSHOP = librairie (library = bibliothèque)." },
      { id: 4, question: "Photographe = ___", options: ["photograph", "photographer"], correctAnswer: "photographer", explanation: "PHOTOGRAPHER = photographe (photograph = photo)." },
      { id: 5, question: "Sympathique = ___", options: ["sympathetic", "nice"], correctAnswer: "nice", explanation: "NICE = sympathique (sympathetic = compatissant)." },
      { id: 6, question: "Grand (taille) = ___", options: ["grand", "tall"], correctAnswer: "tall", explanation: "TALL = grand (grand = grandiose)." },
      { id: 7, question: "Blesser = ___", options: ["bless", "injure"], correctAnswer: "injure", explanation: "INJURE = blesser (bless = bénir)." },
      { id: 8, question: "Cave = ___", options: ["cave", "cellar"], correctAnswer: "cellar", explanation: "CELLAR = cave (cave = grotte)." },
      { id: 9, question: "Décevoir = ___", options: ["deceive", "disappoint"], correctAnswer: "disappoint", explanation: "DISAPPOINT = décevoir (deceive = tromper)." },
      { id: 10, question: "Journée = ___", options: ["journey", "day"], correctAnswer: "day", explanation: "DAY = journée (journey = voyage)." }
    ]
  },
  {
    id: 49,
    title: "FAUX AMIS (2)",
    description: "Mots français qui ne se traduisent pas littéralement. Partie 2.",
    questions: [
      { id: 1, question: "Éventuel = ___", options: ["eventual", "possible"], correctAnswer: "possible", explanation: "POSSIBLE = éventuel (eventual = final)." },
      { id: 2, question: "Ignorer (ne pas connaître) = ___", options: ["ignore", "not know"], correctAnswer: "not know", explanation: "NOT KNOW = ignorer (ignore = ne pas tenir compte)." },
      { id: 3, question: "Lecture = ___", options: ["lecture", "reading"], correctAnswer: "reading", explanation: "READING = lecture (lecture = conférence)." },
      { id: 4, question: "Location = ___", options: ["location", "rental"], correctAnswer: "rental", explanation: "RENTAL = location (location = emplacement)." },
      { id: 5, question: "Opportunité = ___", options: ["opportunity", "timeliness"], correctAnswer: "opportunity", explanation: "OPPORTUNITY = opportunité (bon moment)." },
      { id: 6, question: "Passer un examen = ___", options: ["pass", "take"], correctAnswer: "take", explanation: "TAKE an exam = passer (pass = réussir)." },
      { id: 7, question: "Prétendre (affirmer) = ___", options: ["pretend", "claim"], correctAnswer: "claim", explanation: "CLAIM = prétendre (pretend = faire semblant)." },
      { id: 8, question: "Rester = ___", options: ["rest", "stay"], correctAnswer: "stay", explanation: "STAY = rester (rest = se reposer)." },
      { id: 9, question: "Sensible = ___", options: ["sensible", "sensitive"], correctAnswer: "sensitive", explanation: "SENSITIVE = sensible (sensible = raisonnable)." },
      { id: 10, question: "Supporter = ___", options: ["support", "bear"], correctAnswer: "bear", explanation: "BEAR = supporter (support = soutenir)." }
    ]
  },
  {
    id: 50,
    title: "GAGNER : EARN ou WIN",
    description: "EARN (gagner par le travail) et WIN (gagner une compétition).",
    questions: [
      { id: 1, question: "He ___ a lot of money.", options: ["earns", "wins"], correctAnswer: "earns", explanation: "EARN = gagner (salaire)." },
      { id: 2, question: "She ___ the race.", options: ["earned", "won"], correctAnswer: "won", explanation: "WIN = gagner (compétition)." },
      { id: 3, question: "I ___ £500 a week.", options: ["earn", "win"], correctAnswer: "earn", explanation: "EARN = gagner (argent du travail)." },
      { id: 4, question: "They ___ the championship.", options: ["earned", "won"], correctAnswer: "won", explanation: "WIN = gagner (titre)." },
      { id: 5, question: "She ___ her living as a teacher.", options: ["earns", "wins"], correctAnswer: "earns", explanation: "EARN one's living = gagner sa vie." },
      { id: 6, question: "Who ___ the game?", options: ["earned", "won"], correctAnswer: "won", explanation: "WIN = gagner (jeu)." },
      { id: 7, question: "He ___ respect from everyone.", options: ["earned", "won"], correctAnswer: "earned", explanation: "EARN respect = mériter le respect." },
      { id: 8, question: "She ___ a prize.", options: ["earned", "won"], correctAnswer: "won", explanation: "WIN a prize." },
      { id: 9, question: "I need to ___ more money.", options: ["earn", "win"], correctAnswer: "earn", explanation: "EARN money (travail)." },
      { id: 10, question: "He ___ the lottery!", options: ["earned", "won"], correctAnswer: "won", explanation: "WIN the lottery." }
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
];
