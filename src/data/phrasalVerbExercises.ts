export interface PhrasalVerb {
  verb: string;
  meaning: string;
  meaningFr: string;
  example: string;
  exampleFr: string;
}

export interface PhrasalVerbQuestion {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationFr: string;
}

export interface PhrasalVerbExercise {
  id: string;
  title: string;
  titleFr: string;
  theme: string;
  themeFr: string;
  description: string;
  descriptionFr: string;
  phrasalVerbs: PhrasalVerb[];
  questions: PhrasalVerbQuestion[];
}

export const phrasalVerbExercises: PhrasalVerbExercise[] = [
  {
    id: "travel",
    title: "Travel Phrasal Verbs",
    titleFr: "Verbes à particule - Voyage",
    theme: "Travel",
    themeFr: "Voyage",
    description: "Essential phrasal verbs for travel situations",
    descriptionFr: "Verbes à particule essentiels pour les situations de voyage",
    phrasalVerbs: [
      {
        verb: "check in",
        meaning: "register at a hotel or airport",
        meaningFr: "s'enregistrer (hôtel ou aéroport)",
        example: "We need to check in at least 2 hours before the flight.",
        exampleFr: "Nous devons nous enregistrer au moins 2 heures avant le vol."
      },
      {
        verb: "check out",
        meaning: "leave a hotel after paying",
        meaningFr: "quitter l'hôtel après avoir payé",
        example: "What time do we have to check out?",
        exampleFr: "À quelle heure devons-nous libérer la chambre ?"
      },
      {
        verb: "set off",
        meaning: "start a journey",
        meaningFr: "partir, se mettre en route",
        example: "We set off early to avoid the traffic.",
        exampleFr: "Nous sommes partis tôt pour éviter le trafic."
      },
      {
        verb: "get on",
        meaning: "board a bus, train, or plane",
        meaningFr: "monter (dans un bus, train, avion)",
        example: "Please get on the bus through the front door.",
        exampleFr: "Veuillez monter dans le bus par la porte avant."
      },
      {
        verb: "get off",
        meaning: "leave a bus, train, or plane",
        meaningFr: "descendre (d'un bus, train, avion)",
        example: "We need to get off at the next stop.",
        exampleFr: "Nous devons descendre au prochain arrêt."
      },
      {
        verb: "take off",
        meaning: "leave the ground (plane)",
        meaningFr: "décoller (avion)",
        example: "The plane took off on time despite the bad weather.",
        exampleFr: "L'avion a décollé à l'heure malgré le mauvais temps."
      },
      {
        verb: "pick up",
        meaning: "collect someone from a place",
        meaningFr: "récupérer quelqu'un quelque part",
        example: "Can you pick me up from the airport?",
        exampleFr: "Peux-tu venir me chercher à l'aéroport ?"
      },
      {
        verb: "drop off",
        meaning: "take someone to a place and leave them there",
        meaningFr: "déposer quelqu'un quelque part",
        example: "I'll drop you off at the train station.",
        exampleFr: "Je vais te déposer à la gare."
      },
      {
        verb: "get away",
        meaning: "go on holiday, escape from routine",
        meaningFr: "partir en vacances, s'échapper de la routine",
        example: "We really need to get away for a few days.",
        exampleFr: "Nous avons vraiment besoin de partir quelques jours."
      },
      {
        verb: "look around",
        meaning: "explore a place",
        meaningFr: "visiter, explorer un endroit",
        example: "Let's look around the old town this afternoon.",
        exampleFr: "Visitons la vieille ville cet après-midi."
      }
    ],
    questions: [
      {
        id: 1,
        sentence: "We need to _____ at the hotel before 3 PM.",
        options: ["check in", "check out", "get on", "set off"],
        correctAnswer: "check in",
        explanation: "'Check in' means to register upon arrival at a hotel.",
        explanationFr: "'Check in' signifie s'enregistrer à l'arrivée à l'hôtel."
      },
      {
        id: 2,
        sentence: "The plane _____ exactly at 9:30 AM.",
        options: ["got off", "took off", "set off", "dropped off"],
        correctAnswer: "took off",
        explanation: "'Take off' is used for planes leaving the ground.",
        explanationFr: "'Take off' s'utilise pour les avions qui décollent."
      },
      {
        id: 3,
        sentence: "Can you _____ at the next bus stop?",
        options: ["get on", "get off", "take off", "check out"],
        correctAnswer: "get off",
        explanation: "'Get off' means to leave a vehicle.",
        explanationFr: "'Get off' signifie descendre d'un véhicule."
      },
      {
        id: 4,
        sentence: "We _____ early in the morning to avoid traffic.",
        options: ["checked in", "set off", "got on", "looked around"],
        correctAnswer: "set off",
        explanation: "'Set off' means to begin a journey.",
        explanationFr: "'Set off' signifie commencer un voyage."
      },
      {
        id: 5,
        sentence: "I'll _____ you _____ at the airport terminal.",
        options: ["pick...up", "drop...off", "get...on", "check...in"],
        correctAnswer: "drop...off",
        explanation: "'Drop off' means to take someone somewhere and leave them.",
        explanationFr: "'Drop off' signifie déposer quelqu'un quelque part."
      },
      {
        id: 6,
        sentence: "Please _____ the train through door number 3.",
        options: ["get off", "take off", "get on", "set off"],
        correctAnswer: "get on",
        explanation: "'Get on' means to board a train, bus, or plane.",
        explanationFr: "'Get on' signifie monter dans un train, bus ou avion."
      },
      {
        id: 7,
        sentence: "We spent the afternoon _____ the museum.",
        options: ["checking out", "looking around", "getting away", "setting off"],
        correctAnswer: "looking around",
        explanation: "'Look around' means to explore or visit a place.",
        explanationFr: "'Look around' signifie explorer ou visiter un endroit."
      },
      {
        id: 8,
        sentence: "I really need to _____ from work for a while.",
        options: ["get away", "take off", "check out", "drop off"],
        correctAnswer: "get away",
        explanation: "'Get away' means to escape from routine, often for a holiday.",
        explanationFr: "'Get away' signifie s'échapper de la routine, souvent pour des vacances."
      },
      {
        id: 9,
        sentence: "What time do we have to _____ of the hotel?",
        options: ["check in", "check out", "get off", "set off"],
        correctAnswer: "check out",
        explanation: "'Check out' means to leave a hotel after paying the bill.",
        explanationFr: "'Check out' signifie quitter l'hôtel après avoir réglé la note."
      },
      {
        id: 10,
        sentence: "My father will _____ us _____ from the station.",
        options: ["drop...off", "pick...up", "check...in", "get...on"],
        correctAnswer: "pick...up",
        explanation: "'Pick up' means to collect someone from a place.",
        explanationFr: "'Pick up' signifie récupérer quelqu'un quelque part."
      }
    ]
  },
  {
    id: "work",
    title: "Work Phrasal Verbs",
    titleFr: "Verbes à particule - Travail",
    theme: "Work",
    themeFr: "Travail",
    description: "Common phrasal verbs used in professional settings",
    descriptionFr: "Verbes à particule courants utilisés dans un contexte professionnel",
    phrasalVerbs: [
      {
        verb: "carry out",
        meaning: "perform or complete a task",
        meaningFr: "effectuer, réaliser une tâche",
        example: "The team will carry out the research next month.",
        exampleFr: "L'équipe effectuera la recherche le mois prochain."
      },
      {
        verb: "put off",
        meaning: "postpone, delay",
        meaningFr: "reporter, remettre à plus tard",
        example: "We had to put off the meeting until Friday.",
        exampleFr: "Nous avons dû reporter la réunion à vendredi."
      },
      {
        verb: "take on",
        meaning: "accept a job or responsibility",
        meaningFr: "accepter un travail ou une responsabilité",
        example: "She decided to take on the project manager role.",
        exampleFr: "Elle a décidé d'accepter le rôle de chef de projet."
      },
      {
        verb: "hand in",
        meaning: "submit work or a document",
        meaningFr: "remettre, soumettre un travail ou document",
        example: "Please hand in your reports by Friday.",
        exampleFr: "Veuillez remettre vos rapports avant vendredi."
      },
      {
        verb: "work out",
        meaning: "find a solution, calculate",
        meaningFr: "trouver une solution, calculer",
        example: "We need to work out the budget for next year.",
        exampleFr: "Nous devons calculer le budget pour l'année prochaine."
      },
      {
        verb: "come up with",
        meaning: "think of an idea or plan",
        meaningFr: "trouver, proposer une idée ou un plan",
        example: "He came up with a brilliant marketing strategy.",
        exampleFr: "Il a proposé une stratégie marketing brillante."
      },
      {
        verb: "fill in",
        meaning: "complete a form; substitute for someone",
        meaningFr: "remplir un formulaire ; remplacer quelqu'un",
        example: "Could you fill in for me while I'm on holiday?",
        exampleFr: "Pourrais-tu me remplacer pendant mes vacances ?"
      },
      {
        verb: "lay off",
        meaning: "make workers redundant",
        meaningFr: "licencier des employés",
        example: "The company had to lay off 50 employees.",
        exampleFr: "L'entreprise a dû licencier 50 employés."
      },
      {
        verb: "take over",
        meaning: "assume control of something",
        meaningFr: "prendre le contrôle de quelque chose",
        example: "The new CEO will take over next month.",
        exampleFr: "Le nouveau PDG prendra ses fonctions le mois prochain."
      },
      {
        verb: "run out of",
        meaning: "have no more of something",
        meaningFr: "ne plus avoir de quelque chose",
        example: "We've run out of printer paper.",
        exampleFr: "Nous n'avons plus de papier pour l'imprimante."
      }
    ],
    questions: [
      {
        id: 1,
        sentence: "The research team will _____ the experiments next week.",
        options: ["carry out", "put off", "take on", "hand in"],
        correctAnswer: "carry out",
        explanation: "'Carry out' means to perform or complete a task.",
        explanationFr: "'Carry out' signifie effectuer ou accomplir une tâche."
      },
      {
        id: 2,
        sentence: "Due to bad weather, we had to _____ the outdoor event.",
        options: ["take on", "put off", "work out", "fill in"],
        correctAnswer: "put off",
        explanation: "'Put off' means to postpone or delay something.",
        explanationFr: "'Put off' signifie reporter ou retarder quelque chose."
      },
      {
        id: 3,
        sentence: "She's ready to _____ more responsibilities.",
        options: ["hand in", "take on", "lay off", "run out of"],
        correctAnswer: "take on",
        explanation: "'Take on' means to accept a job or responsibility.",
        explanationFr: "'Take on' signifie accepter un travail ou une responsabilité."
      },
      {
        id: 4,
        sentence: "Please _____ your homework before leaving class.",
        options: ["carry out", "put off", "hand in", "take over"],
        correctAnswer: "hand in",
        explanation: "'Hand in' means to submit work or a document.",
        explanationFr: "'Hand in' signifie remettre ou soumettre un travail."
      },
      {
        id: 5,
        sentence: "We need to _____ how much the project will cost.",
        options: ["come up with", "work out", "fill in", "take over"],
        correctAnswer: "work out",
        explanation: "'Work out' means to calculate or find a solution.",
        explanationFr: "'Work out' signifie calculer ou trouver une solution."
      },
      {
        id: 6,
        sentence: "The marketing team _____ a new advertising campaign.",
        options: ["came up with", "ran out of", "laid off", "filled in"],
        correctAnswer: "came up with",
        explanation: "'Come up with' means to think of an idea or plan.",
        explanationFr: "'Come up with' signifie trouver ou proposer une idée."
      },
      {
        id: 7,
        sentence: "Could you _____ this application form, please?",
        options: ["hand in", "fill in", "take on", "work out"],
        correctAnswer: "fill in",
        explanation: "'Fill in' means to complete a form with information.",
        explanationFr: "'Fill in' signifie remplir un formulaire avec des informations."
      },
      {
        id: 8,
        sentence: "The factory had to _____ 200 workers due to the crisis.",
        options: ["take over", "lay off", "put off", "carry out"],
        correctAnswer: "lay off",
        explanation: "'Lay off' means to make workers redundant.",
        explanationFr: "'Lay off' signifie licencier des employés."
      },
      {
        id: 9,
        sentence: "The new director will _____ the department in January.",
        options: ["take over", "hand in", "put off", "come up with"],
        correctAnswer: "take over",
        explanation: "'Take over' means to assume control of something.",
        explanationFr: "'Take over' signifie prendre le contrôle de quelque chose."
      },
      {
        id: 10,
        sentence: "We've _____ coffee in the break room.",
        options: ["laid off", "taken over", "run out of", "worked out"],
        correctAnswer: "run out of",
        explanation: "'Run out of' means to have no more of something.",
        explanationFr: "'Run out of' signifie ne plus avoir de quelque chose."
      }
    ]
  },
  {
    id: "daily-life",
    title: "Daily Life Phrasal Verbs",
    titleFr: "Verbes à particule - Vie quotidienne",
    theme: "Daily Life",
    themeFr: "Vie quotidienne",
    description: "Everyday phrasal verbs for common situations",
    descriptionFr: "Verbes à particule du quotidien pour les situations courantes",
    phrasalVerbs: [
      {
        verb: "wake up",
        meaning: "stop sleeping",
        meaningFr: "se réveiller",
        example: "I usually wake up at 7 AM.",
        exampleFr: "Je me réveille généralement à 7 heures."
      },
      {
        verb: "get up",
        meaning: "rise from bed",
        meaningFr: "se lever",
        example: "She gets up early every morning.",
        exampleFr: "Elle se lève tôt tous les matins."
      },
      {
        verb: "put on",
        meaning: "dress oneself with clothing",
        meaningFr: "mettre (un vêtement)",
        example: "Put on your coat, it's cold outside.",
        exampleFr: "Mets ton manteau, il fait froid dehors."
      },
      {
        verb: "take off",
        meaning: "remove clothing",
        meaningFr: "enlever (un vêtement)",
        example: "Please take off your shoes at the door.",
        exampleFr: "Veuillez enlever vos chaussures à la porte."
      },
      {
        verb: "turn on",
        meaning: "start a device or machine",
        meaningFr: "allumer (un appareil)",
        example: "Can you turn on the lights?",
        exampleFr: "Peux-tu allumer les lumières ?"
      },
      {
        verb: "turn off",
        meaning: "stop a device or machine",
        meaningFr: "éteindre (un appareil)",
        example: "Don't forget to turn off the TV before bed.",
        exampleFr: "N'oublie pas d'éteindre la télé avant de te coucher."
      },
      {
        verb: "clean up",
        meaning: "make a place tidy",
        meaningFr: "nettoyer, ranger",
        example: "We need to clean up before the guests arrive.",
        exampleFr: "Nous devons ranger avant l'arrivée des invités."
      },
      {
        verb: "throw away",
        meaning: "dispose of something",
        meaningFr: "jeter",
        example: "You should throw away those old magazines.",
        exampleFr: "Tu devrais jeter ces vieux magazines."
      },
      {
        verb: "look after",
        meaning: "take care of",
        meaningFr: "s'occuper de, prendre soin de",
        example: "Can you look after my cat while I'm away?",
        exampleFr: "Peux-tu t'occuper de mon chat pendant mon absence ?"
      },
      {
        verb: "go out",
        meaning: "leave home for social activity",
        meaningFr: "sortir (pour une activité sociale)",
        example: "We're going out for dinner tonight.",
        exampleFr: "Nous sortons dîner ce soir."
      }
    ],
    questions: [
      {
        id: 1,
        sentence: "I always _____ at 6:30 when my alarm rings.",
        options: ["get up", "wake up", "go out", "put on"],
        correctAnswer: "wake up",
        explanation: "'Wake up' means to stop sleeping.",
        explanationFr: "'Wake up' signifie se réveiller, cesser de dormir."
      },
      {
        id: 2,
        sentence: "After my alarm rings, I _____ and take a shower.",
        options: ["wake up", "get up", "turn on", "clean up"],
        correctAnswer: "get up",
        explanation: "'Get up' means to rise from bed.",
        explanationFr: "'Get up' signifie se lever du lit."
      },
      {
        id: 3,
        sentence: "It's raining, so _____ your raincoat.",
        options: ["take off", "put on", "throw away", "turn on"],
        correctAnswer: "put on",
        explanation: "'Put on' means to dress oneself with clothing.",
        explanationFr: "'Put on' signifie mettre un vêtement."
      },
      {
        id: 4,
        sentence: "Please _____ your hat when you're inside.",
        options: ["put on", "take off", "turn off", "clean up"],
        correctAnswer: "take off",
        explanation: "'Take off' means to remove clothing.",
        explanationFr: "'Take off' signifie enlever un vêtement."
      },
      {
        id: 5,
        sentence: "It's dark in here. Can you _____ the light?",
        options: ["turn off", "turn on", "throw away", "look after"],
        correctAnswer: "turn on",
        explanation: "'Turn on' means to start a device or make it work.",
        explanationFr: "'Turn on' signifie allumer un appareil."
      },
      {
        id: 6,
        sentence: "Before leaving, don't forget to _____ the computer.",
        options: ["turn on", "turn off", "clean up", "throw away"],
        correctAnswer: "turn off",
        explanation: "'Turn off' means to stop a device from working.",
        explanationFr: "'Turn off' signifie éteindre un appareil."
      },
      {
        id: 7,
        sentence: "The kitchen is a mess. Let's _____ before cooking.",
        options: ["go out", "throw away", "clean up", "look after"],
        correctAnswer: "clean up",
        explanation: "'Clean up' means to make a place tidy.",
        explanationFr: "'Clean up' signifie nettoyer, ranger un endroit."
      },
      {
        id: 8,
        sentence: "These old newspapers are useless. Let's _____ them.",
        options: ["clean up", "throw away", "look after", "turn off"],
        correctAnswer: "throw away",
        explanation: "'Throw away' means to dispose of something.",
        explanationFr: "'Throw away' signifie jeter quelque chose."
      },
      {
        id: 9,
        sentence: "My neighbor will _____ my plants while I'm on holiday.",
        options: ["throw away", "clean up", "look after", "go out"],
        correctAnswer: "look after",
        explanation: "'Look after' means to take care of someone or something.",
        explanationFr: "'Look after' signifie s'occuper de quelqu'un ou quelque chose."
      },
      {
        id: 10,
        sentence: "We're _____ to a restaurant to celebrate.",
        options: ["getting up", "waking up", "going out", "looking after"],
        correctAnswer: "going out",
        explanation: "'Go out' means to leave home for a social activity.",
        explanationFr: "'Go out' signifie sortir pour une activité sociale."
      }
    ]
  },
  {
    id: "relationships",
    title: "Relationship Phrasal Verbs",
    titleFr: "Verbes à particule - Relations",
    theme: "Relationships",
    themeFr: "Relations",
    description: "Phrasal verbs about personal and social relationships",
    descriptionFr: "Verbes à particule sur les relations personnelles et sociales",
    phrasalVerbs: [
      {
        verb: "get along",
        meaning: "have a good relationship with",
        meaningFr: "bien s'entendre avec",
        example: "I get along really well with my colleagues.",
        exampleFr: "Je m'entends très bien avec mes collègues."
      },
      {
        verb: "fall out",
        meaning: "have an argument and stop being friends",
        meaningFr: "se disputer et cesser d'être amis",
        example: "They fell out over money and haven't spoken since.",
        exampleFr: "Ils se sont disputés pour de l'argent et ne se parlent plus."
      },
      {
        verb: "make up",
        meaning: "become friends again after an argument",
        meaningFr: "se réconcilier après une dispute",
        example: "They made up after a long conversation.",
        exampleFr: "Ils se sont réconciliés après une longue conversation."
      },
      {
        verb: "break up",
        meaning: "end a romantic relationship",
        meaningFr: "rompre, mettre fin à une relation amoureuse",
        example: "They broke up after three years together.",
        exampleFr: "Ils ont rompu après trois ans ensemble."
      },
      {
        verb: "ask out",
        meaning: "invite someone on a date",
        meaningFr: "inviter quelqu'un à sortir",
        example: "He finally asked her out for dinner.",
        exampleFr: "Il l'a finalement invitée à dîner."
      },
      {
        verb: "go out with",
        meaning: "have a romantic relationship with",
        meaningFr: "sortir avec (relation amoureuse)",
        example: "She's been going out with him for six months.",
        exampleFr: "Elle sort avec lui depuis six mois."
      },
      {
        verb: "grow up",
        meaning: "become an adult",
        meaningFr: "grandir, devenir adulte",
        example: "I grew up in a small village.",
        exampleFr: "J'ai grandi dans un petit village."
      },
      {
        verb: "look up to",
        meaning: "admire and respect someone",
        meaningFr: "admirer, respecter quelqu'un",
        example: "Children often look up to their older siblings.",
        exampleFr: "Les enfants admirent souvent leurs aînés."
      },
      {
        verb: "put up with",
        meaning: "tolerate something unpleasant",
        meaningFr: "tolérer, supporter quelque chose de désagréable",
        example: "I can't put up with his constant complaining.",
        exampleFr: "Je ne supporte plus ses plaintes constantes."
      },
      {
        verb: "let down",
        meaning: "disappoint someone",
        meaningFr: "décevoir quelqu'un",
        example: "I promised I'd help and I don't want to let you down.",
        exampleFr: "J'ai promis de t'aider et je ne veux pas te décevoir."
      }
    ],
    questions: [
      {
        id: 1,
        sentence: "My sister and I _____ very well despite our age difference.",
        options: ["fall out", "get along", "break up", "let down"],
        correctAnswer: "get along",
        explanation: "'Get along' means to have a good relationship with someone.",
        explanationFr: "'Get along' signifie bien s'entendre avec quelqu'un."
      },
      {
        id: 2,
        sentence: "They _____ over a silly misunderstanding.",
        options: ["got along", "fell out", "made up", "grew up"],
        correctAnswer: "fell out",
        explanation: "'Fall out' means to have an argument and stop being friends.",
        explanationFr: "'Fall out' signifie se disputer et cesser d'être amis."
      },
      {
        id: 3,
        sentence: "After weeks of not talking, they finally _____.",
        options: ["fell out", "broke up", "made up", "let down"],
        correctAnswer: "made up",
        explanation: "'Make up' means to become friends again after an argument.",
        explanationFr: "'Make up' signifie se réconcilier après une dispute."
      },
      {
        id: 4,
        sentence: "They _____ because they wanted different things in life.",
        options: ["made up", "broke up", "grew up", "got along"],
        correctAnswer: "broke up",
        explanation: "'Break up' means to end a romantic relationship.",
        explanationFr: "'Break up' signifie mettre fin à une relation amoureuse."
      },
      {
        id: 5,
        sentence: "He was too shy to _____ the girl he liked.",
        options: ["let down", "put up with", "ask out", "look up to"],
        correctAnswer: "ask out",
        explanation: "'Ask out' means to invite someone on a date.",
        explanationFr: "'Ask out' signifie inviter quelqu'un à sortir."
      },
      {
        id: 6,
        sentence: "She's been _____ him since they met at university.",
        options: ["breaking up with", "going out with", "falling out with", "letting down"],
        correctAnswer: "going out with",
        explanation: "'Go out with' means to have a romantic relationship with someone.",
        explanationFr: "'Go out with' signifie avoir une relation amoureuse avec quelqu'un."
      },
      {
        id: 7,
        sentence: "I _____ in the countryside but now I live in the city.",
        options: ["got along", "grew up", "made up", "looked up to"],
        correctAnswer: "grew up",
        explanation: "'Grow up' means to become an adult.",
        explanationFr: "'Grow up' signifie grandir, devenir adulte."
      },
      {
        id: 8,
        sentence: "Many young athletes _____ famous sports stars.",
        options: ["put up with", "let down", "look up to", "fall out with"],
        correctAnswer: "look up to",
        explanation: "'Look up to' means to admire and respect someone.",
        explanationFr: "'Look up to' signifie admirer et respecter quelqu'un."
      },
      {
        id: 9,
        sentence: "How can you _____ so much noise from your neighbors?",
        options: ["look up to", "put up with", "get along with", "grow up with"],
        correctAnswer: "put up with",
        explanation: "'Put up with' means to tolerate something unpleasant.",
        explanationFr: "'Put up with' signifie tolérer quelque chose de désagréable."
      },
      {
        id: 10,
        sentence: "I promised to help her and I don't want to _____ her _____.",
        options: ["put...up", "let...down", "ask...out", "fall...out"],
        correctAnswer: "let...down",
        explanation: "'Let down' means to disappoint someone.",
        explanationFr: "'Let down' signifie décevoir quelqu'un."
      }
    ]
  },
  {
    id: "communication",
    title: "Communication Phrasal Verbs",
    titleFr: "Verbes à particule - Communication",
    theme: "Communication",
    themeFr: "Communication",
    description: "Phrasal verbs for expressing and communicating",
    descriptionFr: "Verbes à particule pour s'exprimer et communiquer",
    phrasalVerbs: [
      {
        verb: "bring up",
        meaning: "mention a topic in conversation",
        meaningFr: "mentionner, soulever un sujet",
        example: "She brought up an interesting point during the meeting.",
        exampleFr: "Elle a soulevé un point intéressant pendant la réunion."
      },
      {
        verb: "speak up",
        meaning: "speak louder; express your opinion",
        meaningFr: "parler plus fort ; exprimer son opinion",
        example: "Could you speak up? I can't hear you.",
        exampleFr: "Pourrais-tu parler plus fort ? Je ne t'entends pas."
      },
      {
        verb: "point out",
        meaning: "draw attention to something",
        meaningFr: "faire remarquer, signaler",
        example: "He pointed out several errors in the report.",
        exampleFr: "Il a signalé plusieurs erreurs dans le rapport."
      },
      {
        verb: "figure out",
        meaning: "understand or solve something",
        meaningFr: "comprendre, résoudre",
        example: "I can't figure out how this works.",
        exampleFr: "Je n'arrive pas à comprendre comment ça fonctionne."
      },
      {
        verb: "call back",
        meaning: "return a phone call",
        meaningFr: "rappeler (au téléphone)",
        example: "I'll call you back in five minutes.",
        exampleFr: "Je te rappelle dans cinq minutes."
      },
      {
        verb: "hang up",
        meaning: "end a phone call",
        meaningFr: "raccrocher",
        example: "Don't hang up! I have something important to tell you.",
        exampleFr: "Ne raccroche pas ! J'ai quelque chose d'important à te dire."
      },
      {
        verb: "go on",
        meaning: "continue speaking",
        meaningFr: "continuer (à parler)",
        example: "Sorry for interrupting. Please go on.",
        exampleFr: "Désolé de t'avoir interrompu. Continue, je t'en prie."
      },
      {
        verb: "get through to",
        meaning: "successfully contact someone; make someone understand",
        meaningFr: "réussir à joindre quelqu'un ; se faire comprendre",
        example: "I tried calling but couldn't get through to her.",
        exampleFr: "J'ai essayé d'appeler mais je n'ai pas réussi à la joindre."
      },
      {
        verb: "talk over",
        meaning: "discuss something thoroughly",
        meaningFr: "discuter de quelque chose en détail",
        example: "Let's talk it over before making a decision.",
        exampleFr: "Discutons-en avant de prendre une décision."
      },
      {
        verb: "cut off",
        meaning: "interrupt someone; disconnect a call",
        meaningFr: "interrompre quelqu'un ; couper une communication",
        example: "The phone signal was bad and we got cut off.",
        exampleFr: "Le signal était mauvais et nous avons été coupés."
      }
    ],
    questions: [
      {
        id: 1,
        sentence: "Nobody wanted to _____ the subject of the budget cuts.",
        options: ["hang up", "bring up", "cut off", "call back"],
        correctAnswer: "bring up",
        explanation: "'Bring up' means to mention a topic in conversation.",
        explanationFr: "'Bring up' signifie mentionner ou soulever un sujet."
      },
      {
        id: 2,
        sentence: "You're too quiet. Please _____ so everyone can hear you.",
        options: ["hang up", "go on", "speak up", "cut off"],
        correctAnswer: "speak up",
        explanation: "'Speak up' means to speak louder.",
        explanationFr: "'Speak up' signifie parler plus fort."
      },
      {
        id: 3,
        sentence: "The teacher _____ that the deadline had changed.",
        options: ["pointed out", "figured out", "called back", "hung up"],
        correctAnswer: "pointed out",
        explanation: "'Point out' means to draw attention to something.",
        explanationFr: "'Point out' signifie faire remarquer ou signaler quelque chose."
      },
      {
        id: 4,
        sentence: "It took me hours to _____ how to use this software.",
        options: ["bring up", "point out", "figure out", "talk over"],
        correctAnswer: "figure out",
        explanation: "'Figure out' means to understand or solve something.",
        explanationFr: "'Figure out' signifie comprendre ou résoudre quelque chose."
      },
      {
        id: 5,
        sentence: "I missed your call. Can I _____ later?",
        options: ["hang up", "call back", "cut off", "get through"],
        correctAnswer: "call back",
        explanation: "'Call back' means to return a phone call.",
        explanationFr: "'Call back' signifie rappeler au téléphone."
      },
      {
        id: 6,
        sentence: "She was so angry that she _____ without saying goodbye.",
        options: ["called back", "went on", "hung up", "spoke up"],
        correctAnswer: "hung up",
        explanation: "'Hang up' means to end a phone call.",
        explanationFr: "'Hang up' signifie raccrocher."
      },
      {
        id: 7,
        sentence: "Sorry for the interruption. Please _____ with your story.",
        options: ["hang up", "bring up", "go on", "cut off"],
        correctAnswer: "go on",
        explanation: "'Go on' means to continue speaking.",
        explanationFr: "'Go on' signifie continuer à parler."
      },
      {
        id: 8,
        sentence: "I tried calling several times but couldn't _____ anyone.",
        options: ["get through to", "talk over", "point out", "figure out"],
        correctAnswer: "get through to",
        explanation: "'Get through to' means to successfully contact someone.",
        explanationFr: "'Get through to' signifie réussir à joindre quelqu'un."
      },
      {
        id: 9,
        sentence: "This is important. We should _____ it _____ before deciding.",
        options: ["bring...up", "talk...over", "figure...out", "cut...off"],
        correctAnswer: "talk...over",
        explanation: "'Talk over' means to discuss something thoroughly.",
        explanationFr: "'Talk over' signifie discuter de quelque chose en détail."
      },
      {
        id: 10,
        sentence: "Please don't _____ me _____ when I'm speaking.",
        options: ["call...back", "cut...off", "hang...up", "bring...up"],
        correctAnswer: "cut...off",
        explanation: "'Cut off' means to interrupt someone while they're speaking.",
        explanationFr: "'Cut off' signifie interrompre quelqu'un pendant qu'il parle."
      }
    ]
  }
];
