export interface Collocation {
  collocation: string;
  meaning: string;
  meaningFr: string;
  example: string;
  exampleFr: string;
}

export interface CollocationQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface CollocationExercise {
  id: number;
  title: string;
  titleFr: string;
  theme: string;
  collocations: Collocation[];
  questions: CollocationQuestion[];
}

export const collocationExercises: CollocationExercise[] = [
  {
    id: 1,
    title: "Business & Work Collocations",
    titleFr: "Collocations - Affaires & Travail",
    theme: "business",
    collocations: [
      {
        collocation: "make a decision",
        meaning: "to decide something",
        meaningFr: "prendre une décision",
        example: "We need to make a decision by Friday.",
        exampleFr: "Nous devons prendre une décision d'ici vendredi."
      },
      {
        collocation: "meet a deadline",
        meaning: "to finish something on time",
        meaningFr: "respecter une échéance",
        example: "The team worked overtime to meet the deadline.",
        exampleFr: "L'équipe a fait des heures supplémentaires pour respecter l'échéance."
      },
      {
        collocation: "reach an agreement",
        meaning: "to come to a mutual understanding",
        meaningFr: "parvenir à un accord",
        example: "After long negotiations, they reached an agreement.",
        exampleFr: "Après de longues négociations, ils sont parvenus à un accord."
      },
      {
        collocation: "run a business",
        meaning: "to manage/operate a company",
        meaningFr: "gérer une entreprise",
        example: "She has been running a business for ten years.",
        exampleFr: "Elle gère une entreprise depuis dix ans."
      },
      {
        collocation: "take responsibility",
        meaning: "to accept being accountable",
        meaningFr: "prendre ses responsabilités",
        example: "A good leader takes responsibility for their team.",
        exampleFr: "Un bon leader prend ses responsabilités envers son équipe."
      },
      {
        collocation: "hold a meeting",
        meaning: "to organize/conduct a meeting",
        meaningFr: "tenir une réunion",
        example: "We hold a meeting every Monday morning.",
        exampleFr: "Nous tenons une réunion chaque lundi matin."
      },
      {
        collocation: "draw up a contract",
        meaning: "to prepare a formal document",
        meaningFr: "rédiger un contrat",
        example: "The lawyer will draw up a contract for you.",
        exampleFr: "L'avocat rédigera un contrat pour vous."
      },
      {
        collocation: "launch a product",
        meaning: "to introduce something new to market",
        meaningFr: "lancer un produit",
        example: "Apple launched a new product last week.",
        exampleFr: "Apple a lancé un nouveau produit la semaine dernière."
      },
      {
        collocation: "conduct research",
        meaning: "to carry out an investigation",
        meaningFr: "mener des recherches",
        example: "Scientists conduct research on climate change.",
        exampleFr: "Les scientifiques mènent des recherches sur le changement climatique."
      },
      {
        collocation: "set a goal",
        meaning: "to establish an objective",
        meaningFr: "fixer un objectif",
        example: "It's important to set clear goals for your career.",
        exampleFr: "Il est important de fixer des objectifs clairs pour sa carrière."
      }
    ],
    questions: [
      {
        question: "We need to ___ a decision before the end of the week.",
        options: ["do", "make", "take", "have"],
        correctAnswer: "make",
        explanation: "The correct collocation is 'make a decision'. We use 'make' with decision, not 'do' or 'take'."
      },
      {
        question: "The project team managed to ___ the deadline despite many challenges.",
        options: ["reach", "meet", "catch", "get"],
        correctAnswer: "meet",
        explanation: "The correct collocation is 'meet a deadline'. We use 'meet' to express finishing on time."
      },
      {
        question: "After hours of discussion, the two companies finally ___ an agreement.",
        options: ["made", "did", "reached", "got"],
        correctAnswer: "reached",
        explanation: "The correct collocation is 'reach an agreement'. It means to come to a mutual understanding."
      },
      {
        question: "My aunt has been ___ a small bakery for over twenty years.",
        options: ["making", "doing", "running", "having"],
        correctAnswer: "running",
        explanation: "The correct collocation is 'run a business'. It means to manage or operate a company."
      },
      {
        question: "Good managers ___ responsibility for their team's mistakes.",
        options: ["make", "do", "have", "take"],
        correctAnswer: "take",
        explanation: "The correct collocation is 'take responsibility'. It means to accept being accountable."
      },
      {
        question: "We ___ a meeting every Friday to discuss the week's progress.",
        options: ["make", "hold", "do", "get"],
        correctAnswer: "hold",
        explanation: "The correct collocation is 'hold a meeting'. It means to organize or conduct a meeting."
      },
      {
        question: "The legal team will ___ up a contract for the new partnership.",
        options: ["write", "draw", "make", "put"],
        correctAnswer: "draw",
        explanation: "The correct collocation is 'draw up a contract'. It means to prepare a formal document."
      },
      {
        question: "The company plans to ___ a new product next month.",
        options: ["start", "begin", "launch", "open"],
        correctAnswer: "launch",
        explanation: "The correct collocation is 'launch a product'. It means to introduce something new to market."
      },
      {
        question: "The university is ___ research on renewable energy sources.",
        options: ["making", "doing", "conducting", "having"],
        correctAnswer: "conducting",
        explanation: "The correct collocation is 'conduct research'. It means to carry out an investigation."
      },
      {
        question: "You should ___ realistic goals for your personal development.",
        options: ["put", "set", "make", "do"],
        correctAnswer: "set",
        explanation: "The correct collocation is 'set a goal'. It means to establish an objective."
      }
    ]
  },
  {
    id: 2,
    title: "Daily Life Collocations",
    titleFr: "Collocations - Vie Quotidienne",
    theme: "daily-life",
    collocations: [
      {
        collocation: "take a shower",
        meaning: "to wash yourself under running water",
        meaningFr: "prendre une douche",
        example: "I take a shower every morning before work.",
        exampleFr: "Je prends une douche chaque matin avant le travail."
      },
      {
        collocation: "make the bed",
        meaning: "to arrange bedding neatly",
        meaningFr: "faire le lit",
        example: "Don't forget to make the bed before you leave.",
        exampleFr: "N'oublie pas de faire le lit avant de partir."
      },
      {
        collocation: "do the dishes",
        meaning: "to wash plates, cups, etc.",
        meaningFr: "faire la vaisselle",
        example: "It's your turn to do the dishes tonight.",
        exampleFr: "C'est ton tour de faire la vaisselle ce soir."
      },
      {
        collocation: "catch a cold",
        meaning: "to become ill with a cold",
        meaningFr: "attraper un rhume",
        example: "I caught a cold from my colleague.",
        exampleFr: "J'ai attrapé un rhume de mon collègue."
      },
      {
        collocation: "pay attention",
        meaning: "to focus on something",
        meaningFr: "faire attention",
        example: "Please pay attention to what I'm saying.",
        exampleFr: "S'il te plaît, fais attention à ce que je dis."
      },
      {
        collocation: "save time",
        meaning: "to use time efficiently",
        meaningFr: "gagner du temps",
        example: "Taking the train saves time during rush hour.",
        exampleFr: "Prendre le train fait gagner du temps aux heures de pointe."
      },
      {
        collocation: "waste money",
        meaning: "to spend money unwisely",
        meaningFr: "gaspiller de l'argent",
        example: "Don't waste money on things you don't need.",
        exampleFr: "Ne gaspille pas d'argent pour des choses dont tu n'as pas besoin."
      },
      {
        collocation: "keep in touch",
        meaning: "to maintain contact with someone",
        meaningFr: "rester en contact",
        example: "Let's keep in touch after you move abroad.",
        exampleFr: "Restons en contact après ton déménagement à l'étranger."
      },
      {
        collocation: "break the news",
        meaning: "to tell someone important information",
        meaningFr: "annoncer la nouvelle",
        example: "I don't know how to break the news to her.",
        exampleFr: "Je ne sais pas comment lui annoncer la nouvelle."
      },
      {
        collocation: "get dressed",
        meaning: "to put on clothes",
        meaningFr: "s'habiller",
        example: "Hurry up and get dressed or we'll be late!",
        exampleFr: "Dépêche-toi de t'habiller ou nous serons en retard !"
      }
    ],
    questions: [
      {
        question: "I usually ___ a shower before breakfast.",
        options: ["make", "have", "take", "do"],
        correctAnswer: "take",
        explanation: "The correct collocation is 'take a shower'. In British English, 'have a shower' is also common."
      },
      {
        question: "My mother always told me to ___ my bed before going to school.",
        options: ["do", "make", "take", "have"],
        correctAnswer: "make",
        explanation: "The correct collocation is 'make the bed'. It means to arrange the bedding neatly."
      },
      {
        question: "Who's going to ___ the dishes after dinner?",
        options: ["make", "take", "do", "have"],
        correctAnswer: "do",
        explanation: "The correct collocation is 'do the dishes'. We use 'do' for household chores."
      },
      {
        question: "Be careful in this weather or you'll ___ a cold.",
        options: ["get", "catch", "take", "have"],
        correctAnswer: "catch",
        explanation: "The correct collocation is 'catch a cold'. It means to become ill with a cold."
      },
      {
        question: "Students, please ___ attention to the instructions.",
        options: ["give", "make", "pay", "take"],
        correctAnswer: "pay",
        explanation: "The correct collocation is 'pay attention'. It means to focus on something."
      },
      {
        question: "Using a dishwasher ___ a lot of time.",
        options: ["keeps", "saves", "makes", "takes"],
        correctAnswer: "saves",
        explanation: "The correct collocation is 'save time'. It means to use time efficiently."
      },
      {
        question: "Don't ___ money on lottery tickets.",
        options: ["lose", "waste", "spend", "throw"],
        correctAnswer: "waste",
        explanation: "The correct collocation is 'waste money'. It means to spend money unwisely."
      },
      {
        question: "Promise me you'll ___ in touch while you're traveling.",
        options: ["stay", "keep", "be", "remain"],
        correctAnswer: "keep",
        explanation: "The correct collocation is 'keep in touch'. It means to maintain contact."
      },
      {
        question: "Someone has to ___ the news to him about his job.",
        options: ["say", "tell", "break", "give"],
        correctAnswer: "break",
        explanation: "The correct collocation is 'break the news'. It means to tell someone important information."
      },
      {
        question: "The children need to ___ dressed for school.",
        options: ["make", "have", "get", "take"],
        correctAnswer: "get",
        explanation: "The correct collocation is 'get dressed'. It means to put on clothes."
      }
    ]
  },
  {
    id: 3,
    title: "Weather & Nature Collocations",
    titleFr: "Collocations - Météo & Nature",
    theme: "weather",
    collocations: [
      {
        collocation: "heavy rain",
        meaning: "intense rainfall",
        meaningFr: "forte pluie",
        example: "We had heavy rain all day yesterday.",
        exampleFr: "Nous avons eu une forte pluie toute la journée hier."
      },
      {
        collocation: "strong wind",
        meaning: "powerful wind",
        meaningFr: "vent fort",
        example: "The strong wind knocked down several trees.",
        exampleFr: "Le vent fort a fait tomber plusieurs arbres."
      },
      {
        collocation: "bright sunshine",
        meaning: "intense sunlight",
        meaningFr: "soleil éclatant",
        example: "We enjoyed bright sunshine on our vacation.",
        exampleFr: "Nous avons profité d'un soleil éclatant pendant nos vacances."
      },
      {
        collocation: "thick fog",
        meaning: "dense fog",
        meaningFr: "brouillard épais",
        example: "Thick fog made driving dangerous this morning.",
        exampleFr: "Un brouillard épais a rendu la conduite dangereuse ce matin."
      },
      {
        collocation: "bitter cold",
        meaning: "extremely cold temperature",
        meaningFr: "froid glacial",
        example: "The bitter cold kept everyone indoors.",
        exampleFr: "Le froid glacial a gardé tout le monde à l'intérieur."
      },
      {
        collocation: "scorching heat",
        meaning: "extremely hot temperature",
        meaningFr: "chaleur torride",
        example: "The scorching heat made it impossible to work outside.",
        exampleFr: "La chaleur torride a rendu le travail dehors impossible."
      },
      {
        collocation: "clear sky",
        meaning: "sky without clouds",
        meaningFr: "ciel dégagé",
        example: "We could see all the stars in the clear sky.",
        exampleFr: "Nous pouvions voir toutes les étoiles dans le ciel dégagé."
      },
      {
        collocation: "dense forest",
        meaning: "thick forest with many trees",
        meaningFr: "forêt dense",
        example: "The hikers got lost in the dense forest.",
        exampleFr: "Les randonneurs se sont perdus dans la forêt dense."
      },
      {
        collocation: "torrential rain",
        meaning: "extremely heavy rain",
        meaningFr: "pluie torrentielle",
        example: "The torrential rain caused flooding in the streets.",
        exampleFr: "La pluie torrentielle a provoqué des inondations dans les rues."
      },
      {
        collocation: "pitch black",
        meaning: "completely dark",
        meaningFr: "noir complet",
        example: "It was pitch black outside without any streetlights.",
        exampleFr: "Il faisait noir complet dehors sans lampadaires."
      }
    ],
    questions: [
      {
        question: "We had ___ rain during the entire weekend.",
        options: ["strong", "heavy", "big", "hard"],
        correctAnswer: "heavy",
        explanation: "The correct collocation is 'heavy rain'. We use 'heavy' to describe intense rainfall."
      },
      {
        question: "The ___ wind made it difficult to walk on the beach.",
        options: ["heavy", "hard", "strong", "big"],
        correctAnswer: "strong",
        explanation: "The correct collocation is 'strong wind'. We use 'strong' to describe powerful wind."
      },
      {
        question: "After the storm, we enjoyed ___ sunshine for days.",
        options: ["strong", "hard", "bright", "heavy"],
        correctAnswer: "bright",
        explanation: "The correct collocation is 'bright sunshine'. We use 'bright' to describe intense sunlight."
      },
      {
        question: "The airport was closed due to ___ fog.",
        options: ["heavy", "thick", "strong", "hard"],
        correctAnswer: "thick",
        explanation: "The correct collocation is 'thick fog'. We use 'thick' to describe dense fog."
      },
      {
        question: "The ___ cold in January made everyone stay home.",
        options: ["strong", "hard", "heavy", "bitter"],
        correctAnswer: "bitter",
        explanation: "The correct collocation is 'bitter cold'. We use 'bitter' to describe extremely cold temperature."
      },
      {
        question: "The ___ heat during summer can be dangerous for health.",
        options: ["burning", "scorching", "hot", "heavy"],
        correctAnswer: "scorching",
        explanation: "The correct collocation is 'scorching heat'. It describes extremely hot temperature."
      },
      {
        question: "On a ___ sky night, you can see thousands of stars.",
        options: ["open", "empty", "clear", "clean"],
        correctAnswer: "clear",
        explanation: "The correct collocation is 'clear sky'. It means a sky without clouds."
      },
      {
        question: "The Amazon has some of the most ___ forest in the world.",
        options: ["thick", "heavy", "dense", "strong"],
        correctAnswer: "dense",
        explanation: "The correct collocation is 'dense forest'. We use 'dense' to describe thick forest."
      },
      {
        question: "The ___ rain caused severe flooding in the city center.",
        options: ["torrential", "strong", "hard", "big"],
        correctAnswer: "torrential",
        explanation: "The correct collocation is 'torrential rain'. It describes extremely heavy rain."
      },
      {
        question: "Without the flashlight, the cave was ___ black.",
        options: ["complete", "total", "pitch", "full"],
        correctAnswer: "pitch",
        explanation: "The correct collocation is 'pitch black'. It means completely dark."
      }
    ]
  },
  {
    id: 4,
    title: "Health & Fitness Collocations",
    titleFr: "Collocations - Santé & Forme",
    theme: "health",
    collocations: [
      {
        collocation: "keep fit",
        meaning: "to stay in good physical condition",
        meaningFr: "rester en forme",
        example: "I go jogging to keep fit.",
        exampleFr: "Je fais du jogging pour rester en forme."
      },
      {
        collocation: "take exercise",
        meaning: "to do physical activity",
        meaningFr: "faire de l'exercice",
        example: "Doctors recommend taking exercise regularly.",
        exampleFr: "Les médecins recommandent de faire de l'exercice régulièrement."
      },
      {
        collocation: "have an operation",
        meaning: "to undergo surgery",
        meaningFr: "se faire opérer",
        example: "She had an operation on her knee last month.",
        exampleFr: "Elle s'est fait opérer du genou le mois dernier."
      },
      {
        collocation: "follow a diet",
        meaning: "to eat according to a specific plan",
        meaningFr: "suivre un régime",
        example: "He's following a strict diet to lose weight.",
        exampleFr: "Il suit un régime strict pour perdre du poids."
      },
      {
        collocation: "suffer from",
        meaning: "to be affected by an illness",
        meaningFr: "souffrir de",
        example: "Many people suffer from back pain.",
        exampleFr: "Beaucoup de gens souffrent de maux de dos."
      },
      {
        collocation: "make a full recovery",
        meaning: "to completely get better",
        meaningFr: "se rétablir complètement",
        example: "After the surgery, she made a full recovery.",
        exampleFr: "Après l'opération, elle s'est complètement rétablie."
      },
      {
        collocation: "take medicine",
        meaning: "to consume medication",
        meaningFr: "prendre des médicaments",
        example: "You should take this medicine three times a day.",
        exampleFr: "Tu dois prendre ce médicament trois fois par jour."
      },
      {
        collocation: "lose weight",
        meaning: "to become lighter/thinner",
        meaningFr: "perdre du poids",
        example: "She lost weight by eating healthier.",
        exampleFr: "Elle a perdu du poids en mangeant plus sainement."
      },
      {
        collocation: "gain weight",
        meaning: "to become heavier",
        meaningFr: "prendre du poids",
        example: "I tend to gain weight during winter.",
        exampleFr: "J'ai tendance à prendre du poids en hiver."
      },
      {
        collocation: "get well",
        meaning: "to recover from illness",
        meaningFr: "guérir / aller mieux",
        example: "I hope you get well soon!",
        exampleFr: "J'espère que tu iras mieux bientôt !"
      }
    ],
    questions: [
      {
        question: "Swimming is a great way to ___ fit.",
        options: ["stay", "keep", "be", "remain"],
        correctAnswer: "keep",
        explanation: "The correct collocation is 'keep fit'. It means to stay in good physical condition."
      },
      {
        question: "You should ___ exercise at least three times a week.",
        options: ["make", "do", "take", "have"],
        correctAnswer: "take",
        explanation: "The correct collocation is 'take exercise'. 'Do exercise' is also acceptable in informal contexts."
      },
      {
        question: "My grandfather ___ an operation on his heart last year.",
        options: ["made", "did", "took", "had"],
        correctAnswer: "had",
        explanation: "The correct collocation is 'have an operation'. It means to undergo surgery."
      },
      {
        question: "She's ___ a strict diet to control her diabetes.",
        options: ["making", "doing", "following", "having"],
        correctAnswer: "following",
        explanation: "The correct collocation is 'follow a diet'. It means to eat according to a specific plan."
      },
      {
        question: "He has ___ from migraines since he was a teenager.",
        options: ["had", "felt", "got", "suffered"],
        correctAnswer: "suffered",
        explanation: "The correct collocation is 'suffer from'. It means to be affected by an illness."
      },
      {
        question: "The doctor expects him to ___ a full recovery within weeks.",
        options: ["do", "have", "make", "get"],
        correctAnswer: "make",
        explanation: "The correct collocation is 'make a full recovery'. It means to completely get better."
      },
      {
        question: "Don't forget to ___ your medicine before going to bed.",
        options: ["eat", "have", "drink", "take"],
        correctAnswer: "take",
        explanation: "The correct collocation is 'take medicine'. It means to consume medication."
      },
      {
        question: "She managed to ___ weight by cutting out sugar.",
        options: ["drop", "lose", "reduce", "lower"],
        correctAnswer: "lose",
        explanation: "The correct collocation is 'lose weight'. It means to become lighter/thinner."
      },
      {
        question: "It's easy to ___ weight if you don't exercise.",
        options: ["win", "get", "gain", "take"],
        correctAnswer: "gain",
        explanation: "The correct collocation is 'gain weight'. It means to become heavier."
      },
      {
        question: "I hope you ___ well soon after your illness.",
        options: ["become", "go", "get", "feel"],
        correctAnswer: "get",
        explanation: "The correct collocation is 'get well'. It means to recover from illness."
      }
    ]
  },
  {
    id: 5,
    title: "Emotions & Relationships Collocations",
    titleFr: "Collocations - Émotions & Relations",
    theme: "emotions",
    collocations: [
      {
        collocation: "fall in love",
        meaning: "to begin to love someone romantically",
        meaningFr: "tomber amoureux",
        example: "They fell in love during their trip to Paris.",
        exampleFr: "Ils sont tombés amoureux pendant leur voyage à Paris."
      },
      {
        collocation: "deeply hurt",
        meaning: "very emotionally wounded",
        meaningFr: "profondément blessé",
        example: "She was deeply hurt by his comments.",
        exampleFr: "Elle a été profondément blessée par ses commentaires."
      },
      {
        collocation: "burst into tears",
        meaning: "to suddenly start crying",
        meaningFr: "fondre en larmes",
        example: "The child burst into tears when she lost her toy.",
        exampleFr: "L'enfant a fondu en larmes quand elle a perdu son jouet."
      },
      {
        collocation: "lose your temper",
        meaning: "to become suddenly angry",
        meaningFr: "perdre son calme",
        example: "Try not to lose your temper during the meeting.",
        exampleFr: "Essaie de ne pas perdre ton calme pendant la réunion."
      },
      {
        collocation: "make friends",
        meaning: "to establish friendships",
        meaningFr: "se faire des amis",
        example: "It's easy to make friends at university.",
        exampleFr: "C'est facile de se faire des amis à l'université."
      },
      {
        collocation: "have an argument",
        meaning: "to quarrel or disagree verbally",
        meaningFr: "avoir une dispute",
        example: "We had an argument about money yesterday.",
        exampleFr: "Nous avons eu une dispute à propos d'argent hier."
      },
      {
        collocation: "bitterly disappointed",
        meaning: "extremely disappointed",
        meaningFr: "terriblement déçu",
        example: "He was bitterly disappointed with the results.",
        exampleFr: "Il était terriblement déçu des résultats."
      },
      {
        collocation: "deeply grateful",
        meaning: "very thankful",
        meaningFr: "profondément reconnaissant",
        example: "I'm deeply grateful for your help.",
        exampleFr: "Je vous suis profondément reconnaissant pour votre aide."
      },
      {
        collocation: "get along with",
        meaning: "to have a good relationship with",
        meaningFr: "bien s'entendre avec",
        example: "I get along well with my colleagues.",
        exampleFr: "Je m'entends bien avec mes collègues."
      },
      {
        collocation: "hold a grudge",
        meaning: "to continue feeling resentment",
        meaningFr: "garder rancune",
        example: "She still holds a grudge against her ex-boss.",
        exampleFr: "Elle garde encore rancune à son ancien patron."
      }
    ],
    questions: [
      {
        question: "Romeo and Juliet ___ in love at first sight.",
        options: ["got", "fell", "went", "became"],
        correctAnswer: "fell",
        explanation: "The correct collocation is 'fall in love'. It means to begin to love someone romantically."
      },
      {
        question: "She was ___ hurt when he forgot her birthday.",
        options: ["strongly", "heavily", "deeply", "highly"],
        correctAnswer: "deeply",
        explanation: "The correct collocation is 'deeply hurt'. We use 'deeply' with emotions."
      },
      {
        question: "When she heard the bad news, she ___ into tears.",
        options: ["broke", "fell", "burst", "went"],
        correctAnswer: "burst",
        explanation: "The correct collocation is 'burst into tears'. It means to suddenly start crying."
      },
      {
        question: "He tends to ___ his temper when things go wrong.",
        options: ["lose", "miss", "drop", "fall"],
        correctAnswer: "lose",
        explanation: "The correct collocation is 'lose your temper'. It means to become suddenly angry."
      },
      {
        question: "Children often ___ friends quickly at summer camp.",
        options: ["get", "do", "have", "make"],
        correctAnswer: "make",
        explanation: "The correct collocation is 'make friends'. It means to establish friendships."
      },
      {
        question: "The couple ___ an argument about where to go on holiday.",
        options: ["made", "did", "got", "had"],
        correctAnswer: "had",
        explanation: "The correct collocation is 'have an argument'. It means to quarrel or disagree."
      },
      {
        question: "Fans were ___ disappointed when the concert was cancelled.",
        options: ["deeply", "bitterly", "strongly", "heavily"],
        correctAnswer: "bitterly",
        explanation: "The correct collocation is 'bitterly disappointed'. We use 'bitterly' with disappointment."
      },
      {
        question: "I am ___ grateful for everything you've done for me.",
        options: ["heavily", "strongly", "deeply", "highly"],
        correctAnswer: "deeply",
        explanation: "The correct collocation is 'deeply grateful'. We use 'deeply' with gratitude."
      },
      {
        question: "Do you ___ along with your new neighbors?",
        options: ["go", "come", "get", "have"],
        correctAnswer: "get",
        explanation: "The correct collocation is 'get along with'. It means to have a good relationship."
      },
      {
        question: "Life is too short to ___ a grudge against anyone.",
        options: ["keep", "hold", "have", "take"],
        correctAnswer: "hold",
        explanation: "The correct collocation is 'hold a grudge'. It means to continue feeling resentment."
      }
    ]
  },
  {
    id: 6,
    title: "Travel & Transport Collocations",
    titleFr: "Collocations - Voyage & Transport",
    theme: "travel",
    collocations: [
      {
        collocation: "catch a flight",
        meaning: "to get on a plane on time",
        meaningFr: "prendre un vol",
        example: "We need to leave early to catch our flight.",
        exampleFr: "Nous devons partir tôt pour prendre notre vol."
      },
      {
        collocation: "miss a train",
        meaning: "to arrive too late for the train",
        meaningFr: "rater un train",
        example: "I missed the train because of the traffic.",
        exampleFr: "J'ai raté le train à cause de la circulation."
      },
      {
        collocation: "get off the bus",
        meaning: "to exit a bus",
        meaningFr: "descendre du bus",
        example: "You should get off the bus at the next stop.",
        exampleFr: "Tu devrais descendre du bus au prochain arrêt."
      },
      {
        collocation: "book a hotel",
        meaning: "to reserve accommodation",
        meaningFr: "réserver un hôtel",
        example: "Don't forget to book a hotel before you travel.",
        exampleFr: "N'oublie pas de réserver un hôtel avant de voyager."
      },
      {
        collocation: "pack your bags",
        meaning: "to put items in luggage",
        meaningFr: "faire ses valises",
        example: "We need to pack our bags the night before.",
        exampleFr: "Nous devons faire nos valises la veille."
      },
      {
        collocation: "go abroad",
        meaning: "to travel to another country",
        meaningFr: "aller à l'étranger",
        example: "Many students go abroad during summer.",
        exampleFr: "Beaucoup d'étudiants vont à l'étranger en été."
      },
      {
        collocation: "take a trip",
        meaning: "to go on a journey",
        meaningFr: "faire un voyage",
        example: "We're taking a trip to Spain next month.",
        exampleFr: "Nous faisons un voyage en Espagne le mois prochain."
      },
      {
        collocation: "board a plane",
        meaning: "to get on an aircraft",
        meaningFr: "embarquer dans un avion",
        example: "Passengers began to board the plane at 10 AM.",
        exampleFr: "Les passagers ont commencé à embarquer dans l'avion à 10h."
      },
      {
        collocation: "check in",
        meaning: "to register at a hotel or airport",
        meaningFr: "s'enregistrer",
        example: "You can check in online 24 hours before your flight.",
        exampleFr: "Tu peux t'enregistrer en ligne 24 heures avant ton vol."
      },
      {
        collocation: "fasten your seatbelt",
        meaning: "to secure your safety belt",
        meaningFr: "attacher sa ceinture",
        example: "Please fasten your seatbelt during takeoff.",
        exampleFr: "Veuillez attacher votre ceinture pendant le décollage."
      }
    ],
    questions: [
      {
        question: "We barely managed to ___ our flight on time.",
        options: ["get", "take", "catch", "have"],
        correctAnswer: "catch",
        explanation: "The correct collocation is 'catch a flight'. It means to get on a plane on time."
      },
      {
        question: "I ___ the train and had to wait an hour for the next one.",
        options: ["lost", "missed", "forgot", "left"],
        correctAnswer: "missed",
        explanation: "The correct collocation is 'miss a train'. It means to arrive too late."
      },
      {
        question: "Remember to ___ the bus at Oxford Street.",
        options: ["leave", "exit", "get off", "go off"],
        correctAnswer: "get off",
        explanation: "The correct collocation is 'get off the bus'. It means to exit a bus."
      },
      {
        question: "Have you ___ a hotel for our vacation yet?",
        options: ["reserved", "ordered", "booked", "taken"],
        correctAnswer: "booked",
        explanation: "The correct collocation is 'book a hotel'. It means to reserve accommodation."
      },
      {
        question: "Don't forget to ___ your bags before you leave.",
        options: ["make", "do", "pack", "put"],
        correctAnswer: "pack",
        explanation: "The correct collocation is 'pack your bags'. It means to put items in luggage."
      },
      {
        question: "She wants to ___ abroad after finishing university.",
        options: ["travel", "move", "go", "leave"],
        correctAnswer: "go",
        explanation: "The correct collocation is 'go abroad'. It means to travel to another country."
      },
      {
        question: "Let's ___ a trip to the mountains this weekend.",
        options: ["do", "make", "have", "take"],
        correctAnswer: "take",
        explanation: "The correct collocation is 'take a trip'. It means to go on a journey."
      },
      {
        question: "All passengers are now invited to ___ the plane.",
        options: ["enter", "get on", "board", "climb"],
        correctAnswer: "board",
        explanation: "The correct collocation is 'board a plane'. It means to get on an aircraft."
      },
      {
        question: "What time can we ___ in at the hotel?",
        options: ["register", "check", "sign", "enter"],
        correctAnswer: "check",
        explanation: "The correct collocation is 'check in'. It means to register at a hotel or airport."
      },
      {
        question: "The pilot asked everyone to ___ their seatbelts.",
        options: ["tie", "close", "fasten", "lock"],
        correctAnswer: "fasten",
        explanation: "The correct collocation is 'fasten your seatbelt'. It means to secure your safety belt."
      }
    ]
  }
];
