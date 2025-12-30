export interface IdiomExercise {
  id: number;
  title: string;
  description: string;
  idioms: {
    id: number;
    idiom: string;
    meaning: string;
    meaningFr: string;
    example: string;
    exampleFr: string;
  }[];
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export const idiomExercises: IdiomExercise[] = [
  {
    id: 1,
    title: "Everyday Idioms (1)",
    description: "Common English idioms used in daily conversation.",
    idioms: [
      {
        id: 1,
        idiom: "Break the ice",
        meaning: "To initiate conversation in a social setting; to make people feel more comfortable",
        meaningFr: "Briser la glace — entamer une conversation pour détendre l'atmosphère",
        example: "The host told a joke to break the ice at the party.",
        exampleFr: "L'hôte a raconté une blague pour briser la glace à la fête."
      },
      {
        id: 2,
        idiom: "Piece of cake",
        meaning: "Something very easy to do",
        meaningFr: "Du gâteau — quelque chose de très facile",
        example: "The exam was a piece of cake. I finished in 20 minutes.",
        exampleFr: "L'examen était du gâteau. J'ai fini en 20 minutes."
      },
      {
        id: 3,
        idiom: "Hit the nail on the head",
        meaning: "To describe exactly what is causing a situation or problem",
        meaningFr: "Mettre le doigt dessus — décrire exactement la cause d'un problème",
        example: "You hit the nail on the head when you said we need better communication.",
        exampleFr: "Tu as mis le doigt dessus quand tu as dit qu'on avait besoin de mieux communiquer."
      },
      {
        id: 4,
        idiom: "Under the weather",
        meaning: "Feeling ill or sick",
        meaningFr: "Pas dans son assiette — se sentir malade",
        example: "I'm feeling a bit under the weather today, so I'll stay home.",
        exampleFr: "Je ne suis pas dans mon assiette aujourd'hui, donc je vais rester à la maison."
      },
      {
        id: 5,
        idiom: "Cost an arm and a leg",
        meaning: "To be very expensive",
        meaningFr: "Coûter les yeux de la tête — être très cher",
        example: "That new car cost him an arm and a leg.",
        exampleFr: "Cette nouvelle voiture lui a coûté les yeux de la tête."
      }
    ],
    questions: [
      {
        id: 1,
        question: "If something is 'a piece of cake', it is ___.",
        options: ["very expensive", "very easy", "very delicious", "very difficult"],
        correctAnswer: "very easy",
        explanation: "'Piece of cake' means something is very easy to do."
      },
      {
        id: 2,
        question: "When you 'break the ice', you ___.",
        options: ["destroy something frozen", "start a conversation to make people comfortable", "end a relationship", "cool down a drink"],
        correctAnswer: "start a conversation to make people comfortable",
        explanation: "'Break the ice' means to initiate conversation and make people feel at ease."
      },
      {
        id: 3,
        question: "If you're 'under the weather', you feel ___.",
        options: ["cold", "wet", "sick", "happy"],
        correctAnswer: "sick",
        explanation: "'Under the weather' means feeling ill or unwell."
      },
      {
        id: 4,
        question: "If something 'costs an arm and a leg', it is ___.",
        options: ["painful", "cheap", "very expensive", "free"],
        correctAnswer: "very expensive",
        explanation: "'Cost an arm and a leg' means something is extremely expensive."
      },
      {
        id: 5,
        question: "When you 'hit the nail on the head', you ___.",
        options: ["build something", "hurt yourself", "describe something exactly right", "make a mistake"],
        correctAnswer: "describe something exactly right",
        explanation: "'Hit the nail on the head' means to identify something precisely."
      },
      {
        id: 6,
        question: "Complete: The job interview was ___. I got the offer immediately!",
        options: ["under the weather", "an arm and a leg", "a piece of cake", "breaking the ice"],
        correctAnswer: "a piece of cake",
        explanation: "If the interview was easy and successful, it was 'a piece of cake'."
      },
      {
        id: 7,
        question: "Complete: My new laptop ___. It was €2000!",
        options: ["hit the nail on the head", "cost an arm and a leg", "broke the ice", "was under the weather"],
        correctAnswer: "cost an arm and a leg",
        explanation: "An expensive item 'costs an arm and a leg'."
      },
      {
        id: 8,
        question: "Complete: She ___ with her analysis of the problem.",
        options: ["broke the ice", "hit the nail on the head", "was a piece of cake", "cost an arm and a leg"],
        correctAnswer: "hit the nail on the head",
        explanation: "When someone's analysis is exactly right, they 'hit the nail on the head'."
      },
      {
        id: 9,
        question: "Complete: I'm staying home because I'm feeling ___.",
        options: ["a piece of cake", "an arm and a leg", "under the weather", "the nail on the head"],
        correctAnswer: "under the weather",
        explanation: "When you feel ill, you're 'under the weather'."
      },
      {
        id: 10,
        question: "Complete: The comedian's jokes helped ___ at the networking event.",
        options: ["cost an arm and a leg", "hit the nail on the head", "be a piece of cake", "break the ice"],
        correctAnswer: "break the ice",
        explanation: "Starting conversation in a social setting is 'breaking the ice'."
      }
    ]
  },
  {
    id: 2,
    title: "Everyday Idioms (2)",
    description: "More common idioms for everyday situations.",
    idioms: [
      {
        id: 1,
        idiom: "Bite the bullet",
        meaning: "To endure a painful or difficult situation with courage",
        meaningFr: "Serrer les dents — endurer une situation difficile avec courage",
        example: "I hate going to the dentist, but I'll have to bite the bullet.",
        exampleFr: "Je déteste aller chez le dentiste, mais je vais devoir serrer les dents."
      },
      {
        id: 2,
        idiom: "Let the cat out of the bag",
        meaning: "To reveal a secret accidentally",
        meaningFr: "Vendre la mèche — révéler un secret par accident",
        example: "Tom let the cat out of the bag about the surprise party.",
        exampleFr: "Tom a vendu la mèche à propos de la fête surprise."
      },
      {
        id: 3,
        idiom: "Once in a blue moon",
        meaning: "Very rarely; almost never",
        meaningFr: "Tous les 36 du mois — très rarement",
        example: "He only visits his parents once in a blue moon.",
        exampleFr: "Il ne rend visite à ses parents que tous les 36 du mois."
      },
      {
        id: 4,
        idiom: "Kill two birds with one stone",
        meaning: "To accomplish two things with a single action",
        meaningFr: "Faire d'une pierre deux coups — accomplir deux choses en une seule action",
        example: "By cycling to work, I kill two birds with one stone: I save money and get exercise.",
        exampleFr: "En allant au travail à vélo, je fais d'une pierre deux coups : j'économise de l'argent et je fais de l'exercice."
      },
      {
        id: 5,
        idiom: "The ball is in your court",
        meaning: "It's your turn to take action or make a decision",
        meaningFr: "La balle est dans ton camp — c'est à ton tour d'agir",
        example: "I've made my offer. The ball is in your court now.",
        exampleFr: "J'ai fait mon offre. La balle est dans ton camp maintenant."
      }
    ],
    questions: [
      {
        id: 1,
        question: "If something happens 'once in a blue moon', it happens ___.",
        options: ["at night", "every month", "very rarely", "only in winter"],
        correctAnswer: "very rarely",
        explanation: "'Once in a blue moon' means something happens very rarely."
      },
      {
        id: 2,
        question: "When you 'bite the bullet', you ___.",
        options: ["eat something hard", "face a difficult situation bravely", "shoot a gun", "make a mistake"],
        correctAnswer: "face a difficult situation bravely",
        explanation: "'Bite the bullet' means to endure something painful with courage."
      },
      {
        id: 3,
        question: "If you 'let the cat out of the bag', you ___.",
        options: ["release an animal", "reveal a secret", "open a container", "tell a joke"],
        correctAnswer: "reveal a secret",
        explanation: "'Let the cat out of the bag' means to accidentally reveal a secret."
      },
      {
        id: 4,
        question: "To 'kill two birds with one stone' means to ___.",
        options: ["hunt efficiently", "accomplish two things at once", "be very cruel", "waste time"],
        correctAnswer: "accomplish two things at once",
        explanation: "This idiom means achieving two goals with a single action."
      },
      {
        id: 5,
        question: "When 'the ball is in your court', it means ___.",
        options: ["you're playing tennis", "it's your decision/turn to act", "you've made a mistake", "the game is over"],
        correctAnswer: "it's your decision/turn to act",
        explanation: "This means it's now up to you to take the next step."
      },
      {
        id: 6,
        question: "Complete: We only go to that expensive restaurant ___.",
        options: ["killing two birds", "once in a blue moon", "biting the bullet", "letting the cat out"],
        correctAnswer: "once in a blue moon",
        explanation: "Rarely going somewhere happens 'once in a blue moon'."
      },
      {
        id: 7,
        question: "Complete: I have to ___ and tell my boss I made an error.",
        options: ["bite the bullet", "kill two birds", "let the cat out", "throw the ball"],
        correctAnswer: "bite the bullet",
        explanation: "Facing a difficult conversation requires you to 'bite the bullet'."
      },
      {
        id: 8,
        question: "Complete: She accidentally ___ about the pregnancy announcement.",
        options: ["bit the bullet", "killed two birds", "let the cat out of the bag", "put the ball in her court"],
        correctAnswer: "let the cat out of the bag",
        explanation: "Accidentally revealing a secret is 'letting the cat out of the bag'."
      },
      {
        id: 9,
        question: "Complete: By shopping at the farmers market, I ___: I get fresh food and support local farmers.",
        options: ["bite the bullet", "kill two birds with one stone", "let the cat out of the bag", "once in a blue moon"],
        correctAnswer: "kill two birds with one stone",
        explanation: "Achieving two benefits at once is 'killing two birds with one stone'."
      },
      {
        id: 10,
        question: "Complete: I've sent my resume. Now ___.",
        options: ["I'll bite the bullet", "the ball is in their court", "I'll let the cat out", "once in a blue moon"],
        correctAnswer: "the ball is in their court",
        explanation: "When you're waiting for someone else to respond, 'the ball is in their court'."
      }
    ]
  },
  {
    id: 3,
    title: "Business Idioms",
    description: "Idioms commonly used in professional and business contexts.",
    idioms: [
      {
        id: 1,
        idiom: "Get the ball rolling",
        meaning: "To start a process or activity",
        meaningFr: "Lancer le bal — démarrer un processus ou une activité",
        example: "Let's get the ball rolling on this new project.",
        exampleFr: "Lançons le bal sur ce nouveau projet."
      },
      {
        id: 2,
        idiom: "Think outside the box",
        meaning: "To think creatively or unconventionally",
        meaningFr: "Sortir des sentiers battus — penser de manière créative",
        example: "We need to think outside the box to solve this problem.",
        exampleFr: "Nous devons sortir des sentiers battus pour résoudre ce problème."
      },
      {
        id: 3,
        idiom: "Back to the drawing board",
        meaning: "To start over because the previous attempt failed",
        meaningFr: "Repartir de zéro — recommencer après un échec",
        example: "The client rejected our proposal. It's back to the drawing board.",
        exampleFr: "Le client a rejeté notre proposition. Il faut repartir de zéro."
      },
      {
        id: 4,
        idiom: "Cut corners",
        meaning: "To do something in the cheapest or easiest way, often sacrificing quality",
        meaningFr: "Rogner sur la qualité — faire quelque chose de la façon la moins coûteuse",
        example: "We can't cut corners on safety.",
        exampleFr: "On ne peut pas rogner sur la sécurité."
      },
      {
        id: 5,
        idiom: "In the red / In the black",
        meaning: "Losing money / Making a profit",
        meaningFr: "Dans le rouge / Dans le noir — perdre de l'argent / être bénéficiaire",
        example: "The company was in the red for two years before becoming profitable.",
        exampleFr: "L'entreprise était dans le rouge pendant deux ans avant de devenir rentable."
      }
    ],
    questions: [
      {
        id: 1,
        question: "To 'get the ball rolling' means to ___.",
        options: ["play sports", "start something", "end a meeting", "throw something away"],
        correctAnswer: "start something",
        explanation: "'Get the ball rolling' means to initiate or start a process."
      },
      {
        id: 2,
        question: "If you 'think outside the box', you ___.",
        options: ["work in a small office", "think creatively", "organize your desk", "follow the rules strictly"],
        correctAnswer: "think creatively",
        explanation: "'Think outside the box' means to think in an innovative, unconventional way."
      },
      {
        id: 3,
        question: "Going 'back to the drawing board' means ___.",
        options: ["visiting an art studio", "starting over after failure", "checking your notes", "finishing a project"],
        correctAnswer: "starting over after failure",
        explanation: "This idiom means you need to start again from the beginning."
      },
      {
        id: 4,
        question: "When someone 'cuts corners', they ___.",
        options: ["drive carefully", "save time/money by reducing quality", "are very precise", "work overtime"],
        correctAnswer: "save time/money by reducing quality",
        explanation: "'Cut corners' means to do something cheaply or quickly, often reducing quality."
      },
      {
        id: 5,
        question: "A company 'in the red' is ___.",
        options: ["very angry", "losing money", "very busy", "on holiday"],
        correctAnswer: "losing money",
        explanation: "'In the red' means operating at a loss (from red ink in accounting)."
      },
      {
        id: 6,
        question: "Complete: Let's ___ and schedule the first meeting.",
        options: ["cut corners", "go back to the drawing board", "get the ball rolling", "be in the red"],
        correctAnswer: "get the ball rolling",
        explanation: "Starting a process is 'getting the ball rolling'."
      },
      {
        id: 7,
        question: "Complete: Our prototype failed. We need to go ___.",
        options: ["outside the box", "in the red", "back to the drawing board", "corner cutting"],
        correctAnswer: "back to the drawing board",
        explanation: "After a failure, you go 'back to the drawing board' to start over."
      },
      {
        id: 8,
        question: "Complete: We need to ___ to find a solution nobody has tried.",
        options: ["cut corners", "think outside the box", "be in the black", "get the ball"],
        correctAnswer: "think outside the box",
        explanation: "Finding creative solutions requires 'thinking outside the box'."
      },
      {
        id: 9,
        question: "Complete: Don't ___ on this project. Quality is essential.",
        options: ["think outside the box", "cut corners", "get the ball rolling", "go back to the drawing board"],
        correctAnswer: "cut corners",
        explanation: "Reducing quality to save time/money is 'cutting corners'."
      },
      {
        id: 10,
        question: "Complete: After years of losses, the company is finally ___.",
        options: ["in the red", "in the black", "outside the box", "at the drawing board"],
        correctAnswer: "in the black",
        explanation: "Making a profit means being 'in the black'."
      }
    ]
  },
  {
    id: 4,
    title: "Emotions & Feelings Idioms",
    description: "Idioms to express emotions and states of mind.",
    idioms: [
      {
        id: 1,
        idiom: "On cloud nine",
        meaning: "Extremely happy",
        meaningFr: "Aux anges — extrêmement heureux",
        example: "She's been on cloud nine since she got engaged.",
        exampleFr: "Elle est aux anges depuis qu'elle s'est fiancée."
      },
      {
        id: 2,
        idiom: "Down in the dumps",
        meaning: "Feeling sad or depressed",
        meaningFr: "Avoir le cafard — se sentir triste ou déprimé",
        example: "He's been down in the dumps since he lost his job.",
        exampleFr: "Il a le cafard depuis qu'il a perdu son emploi."
      },
      {
        id: 3,
        idiom: "Blow off steam",
        meaning: "To release pent-up emotions, especially anger or frustration",
        meaningFr: "Se défouler — libérer ses émotions, surtout la colère ou la frustration",
        example: "I go running to blow off steam after work.",
        exampleFr: "Je vais courir pour me défouler après le travail."
      },
      {
        id: 4,
        idiom: "Get cold feet",
        meaning: "To become nervous and hesitant about doing something",
        meaningFr: "Avoir froid aux pieds — devenir nerveux et hésitant",
        example: "He got cold feet before the wedding.",
        exampleFr: "Il a eu froid aux pieds avant le mariage."
      },
      {
        id: 5,
        idiom: "Have butterflies in your stomach",
        meaning: "To feel nervous or excited",
        meaningFr: "Avoir des papillons dans le ventre — se sentir nerveux ou excité",
        example: "I always have butterflies in my stomach before presentations.",
        exampleFr: "J'ai toujours des papillons dans le ventre avant les présentations."
      }
    ],
    questions: [
      {
        id: 1,
        question: "If you're 'on cloud nine', you feel ___.",
        options: ["confused", "extremely happy", "very tired", "scared"],
        correctAnswer: "extremely happy",
        explanation: "'On cloud nine' means being extremely happy or elated."
      },
      {
        id: 2,
        question: "Being 'down in the dumps' means feeling ___.",
        options: ["dirty", "lost", "sad", "excited"],
        correctAnswer: "sad",
        explanation: "'Down in the dumps' means feeling sad or depressed."
      },
      {
        id: 3,
        question: "When you 'blow off steam', you ___.",
        options: ["cook something", "release stress or frustration", "clean a machine", "breathe heavily"],
        correctAnswer: "release stress or frustration",
        explanation: "'Blow off steam' means to release pent-up emotions."
      },
      {
        id: 4,
        question: "To 'get cold feet' means to ___.",
        options: ["feel cold", "become nervous about doing something", "walk barefoot", "freeze something"],
        correctAnswer: "become nervous about doing something",
        explanation: "'Get cold feet' means to become anxious and hesitant about something planned."
      },
      {
        id: 5,
        question: "'Butterflies in your stomach' indicates ___.",
        options: ["hunger", "sickness", "nervousness or excitement", "digestion problems"],
        correctAnswer: "nervousness or excitement",
        explanation: "'Butterflies in your stomach' describes nervous excitement."
      },
      {
        id: 6,
        question: "Complete: She's ___ after winning the lottery!",
        options: ["down in the dumps", "on cloud nine", "getting cold feet", "blowing off steam"],
        correctAnswer: "on cloud nine",
        explanation: "Being extremely happy after winning is being 'on cloud nine'."
      },
      {
        id: 7,
        question: "Complete: I've been ___ since my best friend moved away.",
        options: ["on cloud nine", "getting cold feet", "down in the dumps", "blowing off steam"],
        correctAnswer: "down in the dumps",
        explanation: "Feeling sad about a friend leaving is being 'down in the dumps'."
      },
      {
        id: 8,
        question: "Complete: I go to the gym to ___ after stressful meetings.",
        options: ["get cold feet", "be on cloud nine", "blow off steam", "have butterflies"],
        correctAnswer: "blow off steam",
        explanation: "Exercising to release stress is 'blowing off steam'."
      },
      {
        id: 9,
        question: "Complete: He ___ and cancelled the skydiving trip.",
        options: ["blew off steam", "was on cloud nine", "got cold feet", "had butterflies"],
        correctAnswer: "got cold feet",
        explanation: "Becoming too nervous to do something is 'getting cold feet'."
      },
      {
        id: 10,
        question: "Complete: I always ___ before job interviews.",
        options: ["blow off steam", "get on cloud nine", "go down in the dumps", "have butterflies in my stomach"],
        correctAnswer: "have butterflies in my stomach",
        explanation: "Feeling nervous before interviews means 'having butterflies in your stomach'."
      }
    ]
  },
  {
    id: 5,
    title: "Time & Deadlines Idioms",
    description: "Idioms related to time, speed, and deadlines.",
    idioms: [
      {
        id: 1,
        idiom: "In the nick of time",
        meaning: "Just in time; at the last possible moment",
        meaningFr: "Juste à temps — au tout dernier moment",
        example: "The ambulance arrived in the nick of time.",
        exampleFr: "L'ambulance est arrivée juste à temps."
      },
      {
        id: 2,
        idiom: "Time flies",
        meaning: "Time passes quickly",
        meaningFr: "Le temps passe vite",
        example: "Time flies when you're having fun!",
        exampleFr: "Le temps passe vite quand on s'amuse !"
      },
      {
        id: 3,
        idiom: "Against the clock",
        meaning: "In a race against time; working under time pressure",
        meaningFr: "Contre la montre — travailler sous pression",
        example: "We're working against the clock to meet the deadline.",
        exampleFr: "Nous travaillons contre la montre pour respecter la date limite."
      },
      {
        id: 4,
        idiom: "Call it a day",
        meaning: "To stop working for the day; to end an activity",
        meaningFr: "Arrêter pour aujourd'hui — cesser une activité",
        example: "It's getting late. Let's call it a day.",
        exampleFr: "Il se fait tard. Arrêtons pour aujourd'hui."
      },
      {
        id: 5,
        idiom: "Around the clock",
        meaning: "24 hours a day; continuously",
        meaningFr: "24h/24 — en continu",
        example: "The hospital operates around the clock.",
        exampleFr: "L'hôpital fonctionne 24h/24."
      }
    ],
    questions: [
      {
        id: 1,
        question: "'In the nick of time' means ___.",
        options: ["too late", "too early", "just in time", "never"],
        correctAnswer: "just in time",
        explanation: "'In the nick of time' means arriving or happening just in time."
      },
      {
        id: 2,
        question: "When we say 'time flies', we mean ___.",
        options: ["clocks are broken", "time passes quickly", "we're traveling", "it's late"],
        correctAnswer: "time passes quickly",
        explanation: "'Time flies' expresses that time seems to pass quickly."
      },
      {
        id: 3,
        question: "Working 'against the clock' means ___.",
        options: ["repairing watches", "working under time pressure", "working slowly", "ignoring deadlines"],
        correctAnswer: "working under time pressure",
        explanation: "'Against the clock' means rushing to meet a deadline."
      },
      {
        id: 4,
        question: "To 'call it a day' means to ___.",
        options: ["make a phone call", "name the day", "stop working", "start working"],
        correctAnswer: "stop working",
        explanation: "'Call it a day' means to stop working and end the activity."
      },
      {
        id: 5,
        question: "Operating 'around the clock' means ___.",
        options: ["near a clock", "occasionally", "24 hours a day", "only during daytime"],
        correctAnswer: "24 hours a day",
        explanation: "'Around the clock' means continuously, 24/7."
      },
      {
        id: 6,
        question: "Complete: We finished the report ___. The boss was just about to ask for it!",
        options: ["around the clock", "in the nick of time", "calling it a day", "time flies"],
        correctAnswer: "in the nick of time",
        explanation: "Finishing just before it's needed is 'in the nick of time'."
      },
      {
        id: 7,
        question: "Complete: ___! It's already December!",
        options: ["Against the clock", "Around the clock", "Time flies", "Call it a day"],
        correctAnswer: "Time flies",
        explanation: "Expressing surprise at how quickly time passed is 'time flies'."
      },
      {
        id: 8,
        question: "Complete: The team is working ___ to launch the product on Friday.",
        options: ["around the clock", "in the nick of time", "calling it a day", "time flying"],
        correctAnswer: "around the clock",
        explanation: "Working continuously to meet a deadline is 'working around the clock'."
      },
      {
        id: 9,
        question: "Complete: It's 7pm. Let's ___ and continue tomorrow.",
        options: ["work against the clock", "call it a day", "fly time", "nick the time"],
        correctAnswer: "call it a day",
        explanation: "Deciding to stop work is 'calling it a day'."
      },
      {
        id: 10,
        question: "Complete: We're ___ to finish before the client arrives.",
        options: ["calling it a day", "around the clock", "in the nick of time", "working against the clock"],
        correctAnswer: "working against the clock",
        explanation: "Rushing to complete something before a deadline is 'working against the clock'."
      }
    ]
  },
  {
    id: 6,
    title: "Money & Success Idioms",
    description: "Idioms about money, success, and achievement.",
    idioms: [
      {
        id: 1,
        idiom: "Break the bank",
        meaning: "To cost a lot of money; to be very expensive",
        meaningFr: "Coûter très cher — vider son compte en banque",
        example: "This restaurant won't break the bank.",
        exampleFr: "Ce restaurant ne va pas vider ton compte en banque."
      },
      {
        id: 2,
        idiom: "Make ends meet",
        meaning: "To have just enough money to pay for basic needs",
        meaningFr: "Joindre les deux bouts — avoir juste assez pour vivre",
        example: "It's hard to make ends meet on minimum wage.",
        exampleFr: "C'est difficile de joindre les deux bouts avec le salaire minimum."
      },
      {
        id: 3,
        idiom: "Strike gold",
        meaning: "To become very successful or find something valuable",
        meaningFr: "Trouver le filon — avoir beaucoup de succès",
        example: "The company struck gold with their new app.",
        exampleFr: "L'entreprise a trouvé le filon avec sa nouvelle appli."
      },
      {
        id: 4,
        idiom: "Go the extra mile",
        meaning: "To make more effort than expected",
        meaningFr: "Se donner à fond — faire plus d'efforts que prévu",
        example: "She always goes the extra mile for her clients.",
        exampleFr: "Elle se donne toujours à fond pour ses clients."
      },
      {
        id: 5,
        idiom: "Burn the midnight oil",
        meaning: "To work late into the night",
        meaningFr: "Travailler tard dans la nuit",
        example: "I've been burning the midnight oil to finish this project.",
        exampleFr: "J'ai travaillé tard dans la nuit pour finir ce projet."
      }
    ],
    questions: [
      {
        id: 1,
        question: "If something 'breaks the bank', it ___.",
        options: ["is free", "is very expensive", "is illegal", "is broken"],
        correctAnswer: "is very expensive",
        explanation: "'Break the bank' means something costs a lot of money."
      },
      {
        id: 2,
        question: "To 'make ends meet' means to ___.",
        options: ["be very rich", "barely have enough money to live", "tie things together", "meet friends"],
        correctAnswer: "barely have enough money to live",
        explanation: "'Make ends meet' means having just enough to cover basic expenses."
      },
      {
        id: 3,
        question: "If you 'strike gold', you ___.",
        options: ["find a mine", "become very successful", "hit something", "paint something gold"],
        correctAnswer: "become very successful",
        explanation: "'Strike gold' means to find great success or something valuable."
      },
      {
        id: 4,
        question: "To 'go the extra mile' means to ___.",
        options: ["run a long distance", "do more than expected", "get lost", "drive far away"],
        correctAnswer: "do more than expected",
        explanation: "'Go the extra mile' means making extra effort beyond what's required."
      },
      {
        id: 5,
        question: "To 'burn the midnight oil' means to ___.",
        options: ["waste resources", "work late at night", "light a fire", "cook at midnight"],
        correctAnswer: "work late at night",
        explanation: "'Burn the midnight oil' means working late into the night."
      },
      {
        id: 6,
        question: "Complete: This affordable holiday won't ___.",
        options: ["make ends meet", "break the bank", "strike gold", "burn oil"],
        correctAnswer: "break the bank",
        explanation: "An affordable option 'won't break the bank'."
      },
      {
        id: 7,
        question: "Complete: Many families struggle to ___ with rising prices.",
        options: ["break the bank", "strike gold", "make ends meet", "go the extra mile"],
        correctAnswer: "make ends meet",
        explanation: "Struggling financially is struggling to 'make ends meet'."
      },
      {
        id: 8,
        question: "Complete: The startup ___ when their video went viral.",
        options: ["broke the bank", "made ends meet", "struck gold", "went the extra mile"],
        correctAnswer: "struck gold",
        explanation: "Finding sudden success is 'striking gold'."
      },
      {
        id: 9,
        question: "Complete: Great employees always ___ for customers.",
        options: ["break the bank", "burn the midnight oil", "go the extra mile", "make ends meet"],
        correctAnswer: "go the extra mile",
        explanation: "Doing more than required is 'going the extra mile'."
      },
      {
        id: 10,
        question: "Complete: Students often ___ during exam periods.",
        options: ["break the bank", "burn the midnight oil", "strike gold", "make ends meet"],
        correctAnswer: "burn the midnight oil",
        explanation: "Studying late at night is 'burning the midnight oil'."
      }
    ]
  }
];

export const getIdiomExerciseById = (id: number): IdiomExercise | undefined => {
  return idiomExercises.find(ex => ex.id === id);
};
