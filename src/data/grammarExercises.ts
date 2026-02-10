import { Exercise } from './exercisesData';

export interface GrammarCategory {
  id: string;
  titleEn: string;
  titleFr: string;
  explanationEn: string;
  explanationFr: string;
  examples: {
    en: string;
    fr: string;
  }[];
  exercises: Exercise[];
}

export const grammarCategories: GrammarCategory[] = [
  {
    id: 'present-simple-continuous',
    titleEn: 'Present Simple vs Present Continuous',
    titleFr: 'Présent Simple vs Présent Continu',
    explanationEn: `**Present Simple** is used for:
- Habits and routines (I wake up at 7 AM every day)
- General truths and facts (Water boils at 100°C)
- Permanent situations (She lives in Paris)

**Present Continuous** is used for:
- Actions happening now (I am reading a book)
- Temporary situations (He is staying with us this week)
- Future arrangements (We are meeting tomorrow)

**Key signal words:**
- Present Simple: always, usually, often, sometimes, never, every day/week/month
- Present Continuous: now, at the moment, currently, right now, today`,
    explanationFr: `**Le Present Simple** s'utilise pour :
- Les habitudes et routines (Je me réveille à 7h tous les jours)
- Les vérités générales et faits (L'eau bout à 100°C)
- Les situations permanentes (Elle habite à Paris)

**Le Present Continuous** s'utilise pour :
- Les actions en cours (Je suis en train de lire un livre)
- Les situations temporaires (Il loge chez nous cette semaine)
- Les arrangements futurs (Nous nous voyons demain)

**Mots-clés indicateurs :**
- Present Simple : always, usually, often, sometimes, never, every day/week/month
- Present Continuous : now, at the moment, currently, right now, today`,
    examples: [
      { en: "I **work** in a bank. (permanent job)", fr: "Je **travaille** dans une banque. (emploi permanent)" },
      { en: "I **am working** on a project. (right now)", fr: "Je **travaille** sur un projet. (en ce moment)" },
      { en: "She **speaks** three languages.", fr: "Elle **parle** trois langues." },
      { en: "She **is speaking** to her boss right now.", fr: "Elle **parle** à son patron en ce moment." }
    ],
    exercises: [
      {
        id: 101,
        title: "Present Simple or Present Continuous",
        description: "Choose the correct tense.",
        questions: [
          {
            id: 1,
            question: "She ___ to work every day.",
            options: ["goes", "is going"],
            correctAnswer: "goes",
            explanation: "Present Simple for daily routines."
          },
          {
            id: 2,
            question: "Look! The baby ___.",
            options: ["sleeps", "is sleeping"],
            correctAnswer: "is sleeping",
            explanation: "Present Continuous for actions happening now."
          },
          {
            id: 3,
            question: "Water ___ at 100 degrees Celsius.",
            options: ["boils", "is boiling"],
            correctAnswer: "boils",
            explanation: "Present Simple for scientific facts."
          },
          {
            id: 4,
            question: "I ___ a book about history at the moment.",
            options: ["read", "am reading"],
            correctAnswer: "am reading",
            explanation: "Present Continuous with 'at the moment'."
          },
          {
            id: 5,
            question: "He usually ___ coffee in the morning.",
            options: ["drinks", "is drinking"],
            correctAnswer: "drinks",
            explanation: "Present Simple with 'usually' for habits."
          },
          {
            id: 6,
            question: "They ___ to Paris next week.",
            options: ["fly", "are flying"],
            correctAnswer: "are flying",
            explanation: "Present Continuous for future arrangements."
          },
          {
            id: 7,
            question: "The Earth ___ around the Sun.",
            options: ["revolves", "is revolving"],
            correctAnswer: "revolves",
            explanation: "Present Simple for permanent truths."
          },
          {
            id: 8,
            question: "Why ___ you ___ so loud?",
            options: ["do... talk", "are... talking"],
            correctAnswer: "are... talking",
            explanation: "Present Continuous for current actions."
          },
          {
            id: 9,
            question: "My sister ___ in London but she ___ in Manchester this month.",
            options: ["lives... stays", "lives... is staying"],
            correctAnswer: "lives... is staying",
            explanation: "Simple for permanent, Continuous for temporary."
          },
          {
            id: 10,
            question: "I ___ what you mean.",
            options: ["understand", "am understanding"],
            correctAnswer: "understand",
            explanation: "State verbs don't usually use continuous."
          }
        ]
      }
    ]
  },
  {
    id: 'past-simple-present-perfect',
    titleEn: 'Past Simple vs Present Perfect',
    titleFr: 'Passé Simple vs Present Perfect',
    explanationEn: `**Past Simple** is used for:
- Completed actions at a specific time in the past (I visited Paris in 2019)
- A series of completed actions (I got up, had breakfast, and left)
- Past habits (She always walked to school)

**Present Perfect** is used for:
- Experiences without specific time (I have visited Paris)
- Actions that started in the past and continue now (I have lived here for 5 years)
- Recent actions with present relevance (I have just finished my work)

**Key signal words:**
- Past Simple: yesterday, last week/month/year, in 2019, ago, when
- Present Perfect: ever, never, already, yet, just, since, for, recently`,
    explanationFr: `**Le Past Simple** s'utilise pour :
- Les actions terminées à un moment précis du passé (J'ai visité Paris en 2019)
- Une série d'actions terminées (Je me suis levé, j'ai pris le petit-déjeuner, et je suis parti)
- Les habitudes passées (Elle allait toujours à l'école à pied)

**Le Present Perfect** s'utilise pour :
- Les expériences sans moment précis (J'ai visité Paris - dans ma vie)
- Les actions commencées dans le passé qui continuent (J'habite ici depuis 5 ans)
- Les actions récentes avec pertinence présente (Je viens de finir mon travail)

**Mots-clés indicateurs :**
- Past Simple : yesterday, last week/month/year, in 2019, ago, when
- Present Perfect : ever, never, already, yet, just, since, for, recently`,
    examples: [
      { en: "I **went** to Rome last summer. (specific time)", fr: "Je **suis allé** à Rome l'été dernier. (moment précis)" },
      { en: "I **have been** to Rome. (experience, time not important)", fr: "Je **suis allé** à Rome. (expérience, moment non précisé)" },
      { en: "She **worked** here for 5 years. (she doesn't work here anymore)", fr: "Elle **a travaillé** ici pendant 5 ans. (elle n'y travaille plus)" },
      { en: "She **has worked** here for 5 years. (she still works here)", fr: "Elle **travaille** ici depuis 5 ans. (elle y travaille encore)" }
    ],
    exercises: [
      {
        id: 102,
        title: "Past Simple or Present Perfect",
        description: "Choose the correct tense.",
        questions: [
          {
            id: 1,
            question: "I ___ this film yesterday.",
            options: ["saw", "have seen"],
            correctAnswer: "saw",
            explanation: "Past Simple with 'yesterday' (specific time)."
          },
          {
            id: 2,
            question: "___ you ever ___ sushi?",
            options: ["Did... eat", "Have... eaten"],
            correctAnswer: "Have... eaten",
            explanation: "Present Perfect with 'ever' for life experience."
          },
          {
            id: 3,
            question: "She ___ in Paris for 10 years now.",
            options: ["lived", "has lived"],
            correctAnswer: "has lived",
            explanation: "Present Perfect for actions continuing to now."
          },
          {
            id: 4,
            question: "When ___ you ___ to drive?",
            options: ["did... learn", "have... learned"],
            correctAnswer: "did... learn",
            explanation: "Past Simple with 'when' asking about specific time."
          },
          {
            id: 5,
            question: "I ___ just ___ my homework.",
            options: ["did... finish", "have... finished"],
            correctAnswer: "have... finished",
            explanation: "Present Perfect with 'just' for recent actions."
          },
          {
            id: 6,
            question: "They ___ to the cinema last night.",
            options: ["went", "have gone"],
            correctAnswer: "went",
            explanation: "Past Simple with 'last night'."
          },
          {
            id: 7,
            question: "I ___ never ___ so scared in my life!",
            options: ["was... feeling", "have... been"],
            correctAnswer: "have... been",
            explanation: "Present Perfect with 'never' for life experience."
          },
          {
            id: 8,
            question: "We ___ here since 2015.",
            options: ["moved", "have lived"],
            correctAnswer: "have lived",
            explanation: "Present Perfect with 'since' for ongoing situations."
          },
          {
            id: 9,
            question: "He ___ his keys. He can't find them.",
            options: ["lost", "has lost"],
            correctAnswer: "has lost",
            explanation: "Present Perfect for past action with present result."
          },
          {
            id: 10,
            question: "Mozart ___ more than 600 pieces of music.",
            options: ["composed", "has composed"],
            correctAnswer: "composed",
            explanation: "Past Simple for historical facts (Mozart is dead)."
          }
        ]
      }
    ]
  },
  {
    id: 'past-simple-continuous',
    titleEn: 'Past Simple vs Past Continuous',
    titleFr: 'Passé Simple vs Passé Continu',
    explanationEn: `**Past Simple** is used for:
- Completed actions in the past (I finished my work)
- Short, completed actions (She opened the door)
- A sequence of events (He arrived, sat down, and ordered a coffee)

**Past Continuous** is used for:
- Actions in progress at a specific past moment (I was reading at 8 PM)
- Background actions interrupted by another action (I was cooking when he called)
- Two simultaneous ongoing actions (While I was reading, she was watching TV)

**Key pattern:** When + Past Simple + Past Continuous
- When the phone rang, I **was having** a shower.
- I **was having** a shower when the phone **rang**.`,
    explanationFr: `**Le Past Simple** s'utilise pour :
- Les actions terminées dans le passé (J'ai fini mon travail)
- Les actions courtes et terminées (Elle a ouvert la porte)
- Une séquence d'événements (Il est arrivé, s'est assis et a commandé un café)

**Le Past Continuous** s'utilise pour :
- Les actions en cours à un moment précis du passé (Je lisais à 20h)
- Les actions en arrière-plan interrompues (Je cuisinais quand il a appelé)
- Deux actions simultanées en cours (Pendant que je lisais, elle regardait la télé)

**Structure clé :** When + Past Simple + Past Continuous
- Quand le téléphone a sonné, je **prenais** une douche.
- Je **prenais** une douche quand le téléphone **a sonné**.`,
    examples: [
      { en: "I **was walking** home when I **met** John.", fr: "Je **rentrais** à pied quand j'**ai rencontré** John." },
      { en: "While she **was sleeping**, the phone **rang**.", fr: "Pendant qu'elle **dormait**, le téléphone **a sonné**." },
      { en: "What **were** you **doing** at 9 PM?", fr: "Que **faisais**-tu à 21h ?" },
      { en: "I **watched** TV and then **went** to bed.", fr: "J'**ai regardé** la télé et ensuite je **suis allé** me coucher." }
    ],
    exercises: [
      {
        id: 103,
        title: "Past Simple or Past Continuous",
        description: "Choose the correct tense.",
        questions: [
          {
            id: 1,
            question: "What ___ you ___ at 8 PM yesterday?",
            options: ["did... do", "were... doing"],
            correctAnswer: "were... doing",
            explanation: "Past Continuous for action in progress at specific time."
          },
          {
            id: 2,
            question: "I ___ dinner when she ___.",
            options: ["cooked... arrived", "was cooking... arrived"],
            correctAnswer: "was cooking... arrived",
            explanation: "Continuous for background action, Simple for interruption."
          },
          {
            id: 3,
            question: "While I ___, the doorbell rang.",
            options: ["showered", "was showering"],
            correctAnswer: "was showering",
            explanation: "Past Continuous with 'while' for ongoing action."
          },
          {
            id: 4,
            question: "She ___ her coffee and ___ the newspaper.",
            options: ["drank... read", "was drinking... was reading"],
            correctAnswer: "drank... read",
            explanation: "Past Simple for sequence of completed actions."
          },
          {
            id: 5,
            question: "When I ___ home, my kids ___ TV.",
            options: ["got... watched", "got... were watching"],
            correctAnswer: "got... were watching",
            explanation: "Simple for point action, Continuous for ongoing."
          },
          {
            id: 6,
            question: "It ___ when I left the house this morning.",
            options: ["rained", "was raining"],
            correctAnswer: "was raining",
            explanation: "Past Continuous for weather as background."
          },
          {
            id: 7,
            question: "He ___ asleep while he ___ the film.",
            options: ["fell... watched", "fell... was watching"],
            correctAnswer: "fell... was watching",
            explanation: "'Fell' interrupts the ongoing 'watching'."
          },
          {
            id: 8,
            question: "I ___ my leg while I ___ football.",
            options: ["broke... played", "broke... was playing"],
            correctAnswer: "broke... was playing",
            explanation: "Short action during ongoing activity."
          },
          {
            id: 9,
            question: "They ___ dinner at 7, then ___ to bed.",
            options: ["had... went", "were having... went"],
            correctAnswer: "had... went",
            explanation: "Sequence of completed actions."
          },
          {
            id: 10,
            question: "While she ___ a book, her brother ___ video games.",
            options: ["read... played", "was reading... was playing"],
            correctAnswer: "was reading... was playing",
            explanation: "Two simultaneous ongoing actions."
          }
        ]
      }
    ]
  },
  {
    id: 'past-simple-perfect',
    titleEn: 'Past Simple vs Past Perfect',
    titleFr: 'Passé Simple vs Plus-que-parfait',
    explanationEn: `**Past Simple** is used for:
- Actions that happened at a specific time in the past
- The main events in a narrative
- Actions in chronological order

**Past Perfect** is used for:
- Actions that happened BEFORE another past action (the "past of the past")
- To show which action came first when the order matters
- Often with: after, before, when, by the time, already, just

**Key concept:** Past Perfect = earlier action, Past Simple = later action
- When I arrived at the station, the train **had** already **left**.
- (First: train left. Then: I arrived.)`,
    explanationFr: `**Le Past Simple** s'utilise pour :
- Les actions qui se sont passées à un moment précis du passé
- Les événements principaux d'un récit
- Les actions dans l'ordre chronologique

**Le Past Perfect** s'utilise pour :
- Les actions qui se sont passées AVANT une autre action passée (le "passé du passé")
- Pour montrer quelle action s'est passée en premier quand l'ordre compte
- Souvent avec : after, before, when, by the time, already, just

**Concept clé :** Past Perfect = action antérieure, Past Simple = action ultérieure
- Quand je suis arrivé à la gare, le train **était** déjà **parti**.
- (D'abord : le train est parti. Ensuite : je suis arrivé.)`,
    examples: [
      { en: "When I **arrived**, she **had** already **left**.", fr: "Quand je **suis arrivé**, elle **était** déjà **partie**." },
      { en: "I **didn't recognize** him because he **had changed** so much.", fr: "Je ne l'**ai pas reconnu** parce qu'il **avait** tellement **changé**." },
      { en: "After I **had finished** dinner, I **watched** TV.", fr: "Après avoir **fini** le dîner, j'**ai regardé** la télé." },
      { en: "By the time we **got** there, the film **had started**.", fr: "Quand nous **sommes arrivés**, le film **avait commencé**." }
    ],
    exercises: [
      {
        id: 104,
        title: "Past Simple or Past Perfect",
        description: "Choose the correct tense.",
        questions: [
          {
            id: 1,
            question: "When I arrived, the meeting ___ already ___.",
            options: ["already started", "had already started"],
            correctAnswer: "had already started",
            explanation: "Past Perfect for the earlier action."
          },
          {
            id: 2,
            question: "After she ___ lunch, she went for a walk.",
            options: ["had", "had had"],
            correctAnswer: "had had",
            explanation: "Past Perfect ('had had') for the first action."
          },
          {
            id: 3,
            question: "I ___ never ___ such a beautiful sunset before that day.",
            options: ["saw", "had... seen"],
            correctAnswer: "had... seen",
            explanation: "Past Perfect with 'never... before' for prior experience."
          },
          {
            id: 4,
            question: "She ___ very tired because she ___ all day.",
            options: ["was... worked", "was... had worked"],
            correctAnswer: "was... had worked",
            explanation: "Working happened before being tired."
          },
          {
            id: 5,
            question: "By the time the ambulance ___, the man ___ died.",
            options: ["arrived... had", "had arrived... had"],
            correctAnswer: "arrived... had",
            explanation: "Simple for arriving, Perfect for earlier death."
          },
          {
            id: 6,
            question: "I ___ the book before I ___ the film.",
            options: ["read... saw", "had read... saw"],
            correctAnswer: "had read... saw",
            explanation: "Reading happened before seeing the film."
          },
          {
            id: 7,
            question: "He told me he ___ to Paris three times.",
            options: ["went", "had been"],
            correctAnswer: "had been",
            explanation: "Past Perfect for action before 'told'."
          },
          {
            id: 8,
            question: "The thief ___ before the police arrived.",
            options: ["escaped", "had escaped"],
            correctAnswer: "had escaped",
            explanation: "Escaping happened before arriving."
          },
          {
            id: 9,
            question: "I ___ realize she ___ me the wrong address.",
            options: ["didn't... gave", "didn't... had given"],
            correctAnswer: "didn't... had given",
            explanation: "Giving wrong address happened first."
          },
          {
            id: 10,
            question: "When they ___ married, they ___ each other for 10 years.",
            options: ["got... knew", "got... had known"],
            correctAnswer: "got... had known",
            explanation: "Knowing started 10 years before marriage."
          }
        ]
      }
    ]
  },
  {
    id: 'future-continuous',
    titleEn: 'Future Continuous',
    titleFr: 'Futur Continu',
    explanationEn: `**Future Continuous** (will be + -ing) is used for:
- Actions in progress at a specific future time (At 8 PM, I will be having dinner)
- Actions that will happen as a matter of course (I'll be seeing John tomorrow anyway)
- Polite inquiries about someone's plans (Will you be using the car tonight?)

**Structure:** will + be + verb-ing

**vs Will (Simple Future):**
- "I **will work** tomorrow" = decision/promise
- "I **will be working** at 3 PM tomorrow" = action in progress at that time`,
    explanationFr: `**Le Future Continuous** (will be + -ing) s'utilise pour :
- Les actions en cours à un moment précis du futur (À 20h, je serai en train de dîner)
- Les actions qui se passeront naturellement (Je verrai John demain de toute façon)
- Les questions polies sur les projets (Tu utiliseras la voiture ce soir ?)

**Structure :** will + be + verbe-ing

**vs Will (Futur Simple) :**
- "Je **travaillerai** demain" = décision/promesse
- "Je **serai en train de travailler** à 15h demain" = action en cours à ce moment`,
    examples: [
      { en: "This time tomorrow, I **will be flying** to New York.", fr: "Demain à cette heure-ci, je **serai en train de** voler vers New York." },
      { en: "Don't call at 9 PM—I **will be sleeping**.", fr: "N'appelle pas à 21h—je **serai en train de** dormir." },
      { en: "**Will** you **be using** the computer later?", fr: "**Utiliseras**-tu l'ordinateur plus tard ?" },
      { en: "They **will be waiting** for us when we arrive.", fr: "Ils **seront en train de** nous attendre quand on arrivera." }
    ],
    exercises: [
      {
        id: 105,
        title: "Future Continuous",
        description: "Complete with the correct form.",
        questions: [
          {
            id: 1,
            question: "This time next week, I ___ on a beach.",
            options: ["will relax", "will be relaxing"],
            correctAnswer: "will be relaxing",
            explanation: "Future Continuous for action in progress at future time."
          },
          {
            id: 2,
            question: "At 10 AM tomorrow, they ___ the meeting.",
            options: ["will have", "will be having"],
            correctAnswer: "will be having",
            explanation: "Action in progress at specific future time."
          },
          {
            id: 3,
            question: "___ you ___ the car this evening?",
            options: ["Will... use", "Will... be using"],
            correctAnswer: "Will... be using",
            explanation: "Polite inquiry about plans."
          },
          {
            id: 4,
            question: "Don't phone between 7 and 8. We ___ dinner.",
            options: ["will have", "will be having"],
            correctAnswer: "will be having",
            explanation: "Action in progress during that period."
          },
          {
            id: 5,
            question: "I ___ her anyway, so I can give her the message.",
            options: ["will see", "will be seeing"],
            correctAnswer: "will be seeing",
            explanation: "Action that will happen as a matter of course."
          },
          {
            id: 6,
            question: "At midnight tonight, millions of people ___ the new year.",
            options: ["will celebrate", "will be celebrating"],
            correctAnswer: "will be celebrating",
            explanation: "Action in progress at specific future moment."
          },
          {
            id: 7,
            question: "This time next year, I ___ at university.",
            options: ["will study", "will be studying"],
            correctAnswer: "will be studying",
            explanation: "Ongoing activity at future point in time."
          },
          {
            id: 8,
            question: "When you arrive, I ___ probably ___ in the garden.",
            options: ["will... work", "will... be working"],
            correctAnswer: "will... be working",
            explanation: "Action in progress when something happens."
          },
          {
            id: 9,
            question: "I can't come at 3 PM. I ___ the kids from school.",
            options: ["will pick up", "will be picking up"],
            correctAnswer: "will be picking up",
            explanation: "Activity during that time period."
          },
          {
            id: 10,
            question: "This time next month, the company ___ its new product.",
            options: ["will launch", "will be launching"],
            correctAnswer: "will be launching",
            explanation: "Future Continuous with 'this time next month' for action in progress at a future point."
          }
        ]
      }
    ]
  },
  {
    id: 'future-perfect',
    titleEn: 'Future Perfect',
    titleFr: 'Futur Antérieur',
    explanationEn: `**Future Perfect** (will have + past participle) is used for:
- Actions that will be completed before a specific future time (By 5 PM, I will have finished)
- Looking back from a future point (By next year, they will have been married for 20 years)
- Assumptions about the past from a future perspective

**Structure:** will + have + past participle

**Key signal words:** by, by the time, before, by next week/month/year

**Key concept:** Think of it as "completed by [future time]"`,
    explanationFr: `**Le Future Perfect** (will have + participe passé) s'utilise pour :
- Les actions qui seront terminées avant un moment précis du futur (À 17h, j'aurai fini)
- Regarder en arrière depuis un point futur (L'année prochaine, ils seront mariés depuis 20 ans)
- Les suppositions sur le passé depuis une perspective future

**Structure :** will + have + participe passé

**Mots-clés indicateurs :** by, by the time, before, by next week/month/year

**Concept clé :** Pensez-y comme "terminé avant [moment futur]"`,
    examples: [
      { en: "By 6 PM, I **will have finished** my work.", fr: "À 18h, j'**aurai fini** mon travail." },
      { en: "By next month, she **will have graduated**.", fr: "Le mois prochain, elle **aura obtenu** son diplôme." },
      { en: "By the time you arrive, we **will have left**.", fr: "Quand tu arriveras, nous **serons partis**." },
      { en: "In 2030, I **will have lived** here for 20 years.", fr: "En 2030, j'**aurai vécu** ici pendant 20 ans." }
    ],
    exercises: [
      {
        id: 106,
        title: "Future Perfect",
        description: "Complete with the correct form.",
        questions: [
          {
            id: 1,
            question: "By the end of this year, I ___ English for 5 years.",
            options: ["will study", "will have studied"],
            correctAnswer: "will have studied",
            explanation: "Future Perfect for completed duration by future time."
          },
          {
            id: 2,
            question: "By the time you get home, I ___ dinner.",
            options: ["will cook", "will have cooked"],
            correctAnswer: "will have cooked",
            explanation: "Action completed before you arrive."
          },
          {
            id: 3,
            question: "She ___ her exams by next Friday.",
            options: ["will finish", "will have finished"],
            correctAnswer: "will have finished",
            explanation: "Completed before 'next Friday'."
          },
          {
            id: 4,
            question: "By 2030, scientists ___ a cure for cancer, hopefully.",
            options: ["will find", "will have found"],
            correctAnswer: "will have found",
            explanation: "Completed by the year 2030."
          },
          {
            id: 5,
            question: "I ___ this book by tomorrow morning.",
            options: ["will read", "will have read"],
            correctAnswer: "will have read",
            explanation: "Completed before tomorrow morning."
          },
          {
            id: 6,
            question: "By next summer, they ___ married for 25 years.",
            options: ["will be", "will have been"],
            correctAnswer: "will have been",
            explanation: "Duration completed by future point."
          },
          {
            id: 7,
            question: "The film ___ by the time we get to the cinema.",
            options: ["will start", "will have started"],
            correctAnswer: "will have started",
            explanation: "Starting happens before arriving."
          },
          {
            id: 8,
            question: "By midnight, the guests ___.",
            options: ["will leave", "will have left"],
            correctAnswer: "will have left",
            explanation: "Departure completed by midnight."
          },
          {
            id: 9,
            question: "In three years, he ___ from university.",
            options: ["will graduate", "will have graduated"],
            correctAnswer: "will have graduated",
            explanation: "Graduation completed within three years."
          },
          {
            id: 10,
            question: "By the time she's 30, she ___ the world.",
            options: ["will travel", "will have traveled"],
            correctAnswer: "will have traveled",
            explanation: "Traveling completed before turning 30."
          }
        ]
      }
    ]
  },
  {
    id: 'present-perfect-continuous',
    titleEn: 'Present Perfect Continuous',
    titleFr: 'Present Perfect Continu',
    explanationEn: `**Present Perfect Continuous** (have/has + been + verb-ing) is used for:

**1. Actions that started in the past and are still continuing:**
- I have been waiting for an hour. (still waiting)
- She has been learning English for two years. (still learning)

**2. Recent continuous actions with visible results:**
- You're out of breath. Have you been running?
- Her eyes are red. She has been crying.

**3. Emphasis on duration:**
- How long have you been working here?
- I've been studying all day.

**Key signal words:** for, since, all day/morning/week, how long, lately, recently

**Present Perfect vs Present Perfect Continuous:**
- I have read three books. (focus on completion/result)
- I have been reading all morning. (focus on duration/activity)`,
    explanationFr: `**Le Present Perfect Continuous** (have/has + been + verbe-ing) s'utilise pour :

**1. Les actions qui ont commencé dans le passé et continuent encore :**
- J'attends depuis une heure. (j'attends toujours)
- Elle apprend l'anglais depuis deux ans. (elle apprend toujours)

**2. Les actions continues récentes avec des résultats visibles :**
- Tu es essoufflé. Tu as couru ?
- Ses yeux sont rouges. Elle a pleuré.

**3. L'accent sur la durée :**
- Depuis combien de temps travaillez-vous ici ?
- J'étudie toute la journée.

**Mots-clés indicateurs :** for, since, all day/morning/week, how long, lately, recently

**Present Perfect vs Present Perfect Continuous :**
- J'ai lu trois livres. (accent sur l'achèvement/le résultat)
- Je lis toute la matinée. (accent sur la durée/l'activité)`,
    examples: [
      { en: "I **have been waiting** for you for 30 minutes!", fr: "Je **t'attends** depuis 30 minutes !" },
      { en: "She **has been working** here since 2020.", fr: "Elle **travaille** ici depuis 2020." },
      { en: "It **has been raining** all day.", fr: "Il **pleut** toute la journée." },
      { en: "What **have** you **been doing**?", fr: "Qu'est-ce que tu **as fait** (tout ce temps) ?" }
    ],
    exercises: [
      {
        id: 109,
        title: "Present Perfect Continuous",
        description: "Choose the correct form.",
        questions: [
          {
            id: 1,
            question: "I ___ for two hours. I'm exhausted!",
            options: ["have studied", "have been studying"],
            correctAnswer: "have been studying",
            explanation: "Continuous emphasizes the duration of the activity."
          },
          {
            id: 2,
            question: "She ___ three emails this morning.",
            options: ["has written", "has been writing"],
            correctAnswer: "has written",
            explanation: "Simple Perfect for completed quantity (three emails)."
          },
          {
            id: 3,
            question: "How long ___ you ___ English?",
            options: ["have... learned", "have... been learning"],
            correctAnswer: "have... been learning",
            explanation: "'How long' suggests duration - use Continuous."
          },
          {
            id: 4,
            question: "Your hands are dirty. What ___ you ___?",
            options: ["have... done", "have... been doing"],
            correctAnswer: "have... been doing",
            explanation: "Continuous for recent activity with visible result."
          },
          {
            id: 5,
            question: "I ___ this book. It's really good!",
            options: ["have finished", "have been finishing"],
            correctAnswer: "have finished",
            explanation: "Simple Perfect for completed action."
          },
          {
            id: 6,
            question: "They ___ tennis since 9 AM.",
            options: ["have played", "have been playing"],
            correctAnswer: "have been playing",
            explanation: "'Since' + duration suggests ongoing activity."
          },
          {
            id: 7,
            question: "Sorry I'm late. ___ you ___ long?",
            options: ["Have... waited", "Have... been waiting"],
            correctAnswer: "Have... been waiting",
            explanation: "Asking about duration of waiting."
          },
          {
            id: 8,
            question: "He ___ to that song all morning. It's annoying!",
            options: ["has listened", "has been listening"],
            correctAnswer: "has been listening",
            explanation: "'All morning' emphasizes continuous duration."
          },
          {
            id: 9,
            question: "I ___ five countries in Europe.",
            options: ["have visited", "have been visiting"],
            correctAnswer: "have visited",
            explanation: "Simple Perfect for completed experiences/quantity."
          },
          {
            id: 10,
            question: "Why are your eyes red? ___ you ___?",
            options: ["Have... cried", "Have... been crying"],
            correctAnswer: "Have... been crying",
            explanation: "Continuous for recent activity with visible result."
          }
        ]
      }
    ]
  },
  {
    id: 'future-perfect-continuous',
    titleEn: 'Future Perfect Continuous',
    titleFr: 'Futur Perfect Continu',
    explanationEn: `**Future Perfect Continuous** (will + have + been + verb-ing) is used for:

**1. Duration of an action up to a point in the future:**
- By next month, I will have been working here for 10 years.
- In June, they will have been living together for 5 years.

**2. Cause of a future situation:**
- She'll be tired because she will have been traveling all day.
- He will have been studying for hours by exam time.

**Structure:** Subject + will have been + verb-ing

**Key signal words:** by (the time), for, when, by next week/month/year

**Future Perfect vs Future Perfect Continuous:**
- By 6 PM, I will have finished my work. (completed)
- By 6 PM, I will have been working for 8 hours. (duration)`,
    explanationFr: `**Le Future Perfect Continuous** (will + have + been + verbe-ing) s'utilise pour :

**1. La durée d'une action jusqu'à un moment dans le futur :**
- Le mois prochain, ça fera 10 ans que je travaille ici.
- En juin, ça fera 5 ans qu'ils vivent ensemble.

**2. La cause d'une situation future :**
- Elle sera fatiguée parce qu'elle aura voyagé toute la journée.
- Il aura étudié pendant des heures avant l'examen.

**Structure :** Sujet + will have been + verbe-ing

**Mots-clés indicateurs :** by (the time), for, when, by next week/month/year

**Future Perfect vs Future Perfect Continuous :**
- À 18h, j'aurai fini mon travail. (achevé)
- À 18h, j'aurai travaillé pendant 8 heures. (durée)`,
    examples: [
      { en: "By December, I **will have been living** here for 5 years.", fr: "En décembre, ça fera 5 ans que **j'habite** ici." },
      { en: "She **will have been teaching** for 20 years next month.", fr: "Elle **aura enseigné** pendant 20 ans le mois prochain." },
      { en: "By the time you arrive, I **will have been waiting** for an hour.", fr: "Quand tu arriveras, **j'attendrai** depuis une heure." },
      { en: "They **will have been traveling** all day, so they'll be tired.", fr: "Ils **auront voyagé** toute la journée, donc ils seront fatigués." }
    ],
    exercises: [
      {
        id: 110,
        title: "Future Perfect Continuous",
        description: "Choose the correct form.",
        questions: [
          {
            id: 1,
            question: "By next year, she ___ at this company for 10 years.",
            options: ["will work", "will have been working"],
            correctAnswer: "will have been working",
            explanation: "Duration up to a future point requires Future Perfect Continuous."
          },
          {
            id: 2,
            question: "By 8 PM, I ___ for five hours.",
            options: ["will have studied", "will have been studying"],
            correctAnswer: "will have been studying",
            explanation: "Emphasis on duration (five hours) - use Continuous."
          },
          {
            id: 3,
            question: "In 2030, they ___ married for 25 years.",
            options: ["will be", "will have been being"],
            correctAnswer: "will be",
            explanation: "'Be' doesn't typically use continuous forms - use Future Perfect."
          },
          {
            id: 4,
            question: "By the time the movie ends, we ___ for 3 hours.",
            options: ["will have sat", "will have been sitting"],
            correctAnswer: "will have been sitting",
            explanation: "Duration of ongoing action - use Continuous."
          },
          {
            id: 5,
            question: "She'll be exhausted. She ___ all day without a break.",
            options: ["will have worked", "will have been working"],
            correctAnswer: "will have been working",
            explanation: "Continuous emphasizes the ongoing nature causing exhaustion."
          },
          {
            id: 6,
            question: "By Christmas, I ___ English for two years.",
            options: ["will have learned", "will have been learning"],
            correctAnswer: "will have been learning",
            explanation: "Duration of learning process - use Continuous."
          },
          {
            id: 7,
            question: "By the time he retires, he ___ for this company for 40 years.",
            options: ["will have worked", "will have been working"],
            correctAnswer: "will have been working",
            explanation: "Duration of employment - Continuous emphasizes the ongoing nature."
          },
          {
            id: 8,
            question: "At midnight, they ___ for 6 hours straight.",
            options: ["will have danced", "will have been dancing"],
            correctAnswer: "will have been dancing",
            explanation: "'For 6 hours' emphasizes duration - use Continuous."
          },
          {
            id: 9,
            question: "By next month, how long ___ you ___ on this project?",
            options: ["will... have worked", "will... have been working"],
            correctAnswer: "will... have been working",
            explanation: "'How long' asks about duration - use Continuous."
          },
          {
            id: 10,
            question: "When you arrive, I ___ dinner for an hour already.",
            options: ["will have cooked", "will have been cooking"],
            correctAnswer: "will have been cooking",
            explanation: "Duration of ongoing activity at arrival time."
          }
        ]
      }
    ]
  },
  {
    id: 'prepositions-place',
    titleEn: 'Prepositions of Place: In, On, At',
    titleFr: 'Prépositions de Lieu : In, On, At',
    explanationEn: `**IN** is used for:
- Enclosed spaces (in a room, in a car, in a box)
- Cities, countries, continents (in Paris, in France, in Europe)
- Water (in the sea, in a pool)
- Lines/rows (in a queue, in a line)

**ON** is used for:
- Surfaces (on the table, on the wall, on the floor)
- Streets/roads (on Oxford Street, on the highway)
- Floors of buildings (on the first floor)
- Public transport (on a bus, on a train, on a plane)
- Islands (on an island)

**AT** is used for:
- Specific points/locations (at the door, at the corner)
- Addresses with numbers (at 25 Oxford Street)
- Places of activity (at school, at work, at home)
- Events (at a party, at a concert)`,
    explanationFr: `**IN** s'utilise pour :
- Les espaces clos (dans une pièce, dans une voiture, dans une boîte)
- Les villes, pays, continents (à Paris, en France, en Europe)
- L'eau (dans la mer, dans une piscine)
- Les files/rangées (dans une queue, dans une ligne)

**ON** s'utilise pour :
- Les surfaces (sur la table, sur le mur, sur le sol)
- Les rues/routes (dans Oxford Street, sur l'autoroute)
- Les étages (au premier étage)
- Les transports en commun (dans un bus, dans un train, dans un avion)
- Les îles (sur une île)

**AT** s'utilise pour :
- Les points/lieux spécifiques (à la porte, au coin)
- Les adresses avec numéros (au 25 Oxford Street)
- Les lieux d'activité (à l'école, au travail, à la maison)
- Les événements (à une fête, à un concert)`,
    examples: [
      { en: "She lives **in** London.", fr: "Elle habite **à** Londres." },
      { en: "The book is **on** the shelf.", fr: "Le livre est **sur** l'étagère." },
      { en: "I'll meet you **at** the station.", fr: "Je te retrouve **à** la gare." },
      { en: "He's **in** the car waiting for us.", fr: "Il est **dans** la voiture à nous attendre." }
    ],
    exercises: [
      {
        id: 107,
        title: "Prepositions of Place",
        description: "Choose the correct preposition: in, on, or at.",
        questions: [
          {
            id: 1,
            question: "She lives ___ a small village.",
            options: ["in", "on", "at"],
            correctAnswer: "in",
            explanation: "Use 'in' for villages, towns, cities, and countries."
          },
          {
            id: 2,
            question: "The picture is hanging ___ the wall.",
            options: ["in", "on", "at"],
            correctAnswer: "on",
            explanation: "Use 'on' for surfaces like walls."
          },
          {
            id: 3,
            question: "I'll meet you ___ the bus stop.",
            options: ["in", "on", "at"],
            correctAnswer: "at",
            explanation: "Use 'at' for specific meeting points."
          },
          {
            id: 4,
            question: "There's someone ___ the door.",
            options: ["in", "on", "at"],
            correctAnswer: "at",
            explanation: "Use 'at' for specific positions like door, window."
          },
          {
            id: 5,
            question: "He's sitting ___ the back of the car.",
            options: ["in", "on", "at"],
            correctAnswer: "in",
            explanation: "Use 'in' for positions inside vehicles."
          },
          {
            id: 6,
            question: "My office is ___ the third floor.",
            options: ["in", "on", "at"],
            correctAnswer: "on",
            explanation: "Use 'on' for floors of buildings."
          },
          {
            id: 7,
            question: "We had a picnic ___ the park.",
            options: ["in", "on", "at"],
            correctAnswer: "in",
            explanation: "Use 'in' for enclosed or bounded areas like parks."
          },
          {
            id: 8,
            question: "She was waiting ___ the corner of the street.",
            options: ["in", "on", "at"],
            correctAnswer: "at",
            explanation: "Use 'at' for specific points like corners."
          },
          {
            id: 9,
            question: "I left my keys ___ the table.",
            options: ["in", "on", "at"],
            correctAnswer: "on",
            explanation: "Use 'on' for surfaces like tables."
          },
          {
            id: 10,
            question: "She spent her holiday ___ a beautiful island.",
            options: ["in", "on", "at"],
            correctAnswer: "on",
            explanation: "Use 'on' for islands."
          }
        ]
      }
    ]
  },
  {
    id: 'prepositions-time',
    titleEn: 'Prepositions of Time: In, On, At (or No Preposition)',
    titleFr: 'Prépositions de Temps : In, On, At (ou Pas de Préposition)',
    explanationEn: `**IN** is used for:
- Months (in January, in March)
- Years (in 2024, in 1990)
- Seasons (in summer, in winter)
- Parts of the day (in the morning, in the afternoon, in the evening)
- Centuries/decades (in the 21st century, in the 1980s)

**ON** is used for:
- Days of the week (on Monday, on Friday)
- Dates (on 25th December, on March 3rd)
- Special days (on my birthday, on Christmas Day)
- Specific day + part (on Monday morning)

**AT** is used for:
- Exact times (at 5 o'clock, at midnight)
- Night (at night - exception!)
- Meal times (at lunchtime, at dinner)
- Holiday periods (at Christmas, at Easter, at the weekend - British)

**NO PREPOSITION** with:
- This, next, last, every (this week, next Monday, last year, every day)
- Today, tomorrow, yesterday`,
    explanationFr: `**IN** s'utilise pour :
- Les mois (en janvier, en mars)
- Les années (en 2024, en 1990)
- Les saisons (en été, en hiver)
- Les parties de la journée (le matin, l'après-midi, le soir)
- Les siècles/décennies (au 21ème siècle, dans les années 1980)

**ON** s'utilise pour :
- Les jours de la semaine (lundi, vendredi)
- Les dates (le 25 décembre, le 3 mars)
- Les jours spéciaux (le jour de mon anniversaire, le jour de Noël)
- Jour spécifique + partie (lundi matin)

**AT** s'utilise pour :
- Les heures exactes (à 5 heures, à minuit)
- La nuit (at night - exception!)
- Les repas (à l'heure du déjeuner, à l'heure du dîner)
- Les périodes de fêtes (à Noël, à Pâques, le week-end)

**PAS DE PRÉPOSITION** avec :
- This, next, last, every (cette semaine, lundi prochain, l'an dernier, chaque jour)
- Today, tomorrow, yesterday`,
    examples: [
      { en: "I was born **in** 1995.", fr: "Je suis né **en** 1995." },
      { en: "The meeting is **on** Friday.", fr: "La réunion est **vendredi**." },
      { en: "I wake up **at** 7 AM.", fr: "Je me réveille **à** 7 heures." },
      { en: "I'll see you **next** week. (no preposition)", fr: "Je te vois **la semaine** prochaine. (pas de préposition)" }
    ],
    exercises: [
      {
        id: 108,
        title: "Prepositions of Time",
        description: "Choose the correct preposition: in, on, at, or no preposition (-).",
        questions: [
          {
            id: 1,
            question: "I usually go to bed ___ midnight.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "at",
            explanation: "Use 'at' for specific times like midnight."
          },
          {
            id: 2,
            question: "She was born ___ March.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "in",
            explanation: "Use 'in' for months."
          },
          {
            id: 3,
            question: "The party is ___ Saturday.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "on",
            explanation: "Use 'on' for days of the week."
          },
          {
            id: 4,
            question: "I'll call you ___ tomorrow.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "- (no preposition)",
            explanation: "No preposition before 'tomorrow'."
          },
          {
            id: 5,
            question: "We often go skiing ___ winter.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "in",
            explanation: "Use 'in' for seasons."
          },
          {
            id: 6,
            question: "The concert starts ___ 8 o'clock.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "at",
            explanation: "Use 'at' for exact times."
          },
          {
            id: 7,
            question: "I met her ___ Christmas Day.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "on",
            explanation: "Use 'on' for specific days (Christmas Day is a specific day)."
          },
          {
            id: 8,
            question: "What are you doing ___ next weekend?",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "- (no preposition)",
            explanation: "No preposition with 'next'."
          },
          {
            id: 9,
            question: "I prefer to study ___ the morning.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "in",
            explanation: "Use 'in' for parts of the day (except 'at night')."
          },
          {
            id: 10,
            question: "The shop is closed ___ night.",
            options: ["in", "on", "at", "- (no preposition)"],
            correctAnswer: "at",
            explanation: "'At night' is an exception - we use 'at', not 'in'."
          }
        ]
      }
    ]
  },
  {
    id: 'comparatives',
    titleEn: 'Comparatives',
    titleFr: 'Les Comparatifs',
    explanationEn: `**Comparatives** are used to compare two things, people, or ideas.

**Short adjectives (1 syllable):** Add -er
- tall → taller, fast → faster, old → older
- Spelling rules: big → bigger (double consonant), nice → nicer (drop e)

**Long adjectives (2+ syllables):** Use "more" + adjective
- beautiful → more beautiful, expensive → more expensive
- Exception: 2-syllable adjectives ending in -y: happy → happier

**Irregular comparatives:**
- good → better
- bad → worse
- far → farther/further

**Structure:** Subject + be + comparative + than + noun/pronoun
- She is taller than her brother.
- This book is more interesting than that one.

**As...as for equality:**
- He is as tall as his father. (equal)
- She isn't as old as me. (not equal)`,
    explanationFr: `**Les comparatifs** servent à comparer deux choses, personnes ou idées.

**Adjectifs courts (1 syllabe) :** Ajouter -er
- tall → taller, fast → faster, old → older
- Règles d'orthographe : big → bigger (doubler la consonne), nice → nicer (supprimer le e)

**Adjectifs longs (2+ syllabes) :** Utiliser "more" + adjectif
- beautiful → more beautiful, expensive → more expensive
- Exception : adjectifs de 2 syllabes en -y : happy → happier

**Comparatifs irréguliers :**
- good → better
- bad → worse
- far → farther/further

**Structure :** Sujet + be + comparatif + than + nom/pronom
- Elle est plus grande que son frère.
- Ce livre est plus intéressant que celui-là.

**As...as pour l'égalité :**
- Il est aussi grand que son père. (égal)
- Elle n'est pas aussi âgée que moi. (pas égal)`,
    examples: [
      { en: "This car is **faster than** that one.", fr: "Cette voiture est **plus rapide que** celle-là." },
      { en: "English is **easier than** Chinese.", fr: "L'anglais est **plus facile que** le chinois." },
      { en: "She is **more intelligent than** him.", fr: "Elle est **plus intelligente que** lui." },
      { en: "My coffee is **as hot as** yours.", fr: "Mon café est **aussi chaud que** le tien." }
    ],
    exercises: [
      {
        id: 111,
        title: "Comparatives",
        description: "Choose the correct comparative form.",
        questions: [
          {
            id: 1,
            question: "My house is ___ than yours.",
            options: ["bigger", "more big", "biger"],
            correctAnswer: "bigger",
            explanation: "Short adjective 'big' → double consonant + er = bigger."
          },
          {
            id: 2,
            question: "This exercise is ___ than the last one.",
            options: ["difficulter", "more difficult", "most difficult"],
            correctAnswer: "more difficult",
            explanation: "Long adjective 'difficult' → more + adjective."
          },
          {
            id: 3,
            question: "She speaks English ___ than her sister.",
            options: ["better", "gooder", "more good"],
            correctAnswer: "better",
            explanation: "'Good' has an irregular comparative: better."
          },
          {
            id: 4,
            question: "Today is ___ than yesterday.",
            options: ["hoter", "more hot", "hotter"],
            correctAnswer: "hotter",
            explanation: "Short adjective 'hot' → double consonant + er = hotter."
          },
          {
            id: 5,
            question: "The movie was ___ than I expected.",
            options: ["boringer", "more boring", "most boring"],
            correctAnswer: "more boring",
            explanation: "Two-syllable adjective 'boring' → more + adjective."
          },
          {
            id: 6,
            question: "He is ___ than his brother.",
            options: ["taller", "more tall", "tallest"],
            correctAnswer: "taller",
            explanation: "Short adjective 'tall' → adjective + er."
          },
          {
            id: 7,
            question: "This situation is ___ than before.",
            options: ["badder", "worse", "more bad"],
            correctAnswer: "worse",
            explanation: "'Bad' has an irregular comparative: worse."
          },
          {
            id: 8,
            question: "Learning French is ___ than I thought.",
            options: ["easier", "more easy", "easyer"],
            correctAnswer: "easier",
            explanation: "Adjectives ending in -y: change y to i + er = easier."
          },
          {
            id: 9,
            question: "This hotel is ___ than the other one.",
            options: ["expensiver", "more expensive", "most expensive"],
            correctAnswer: "more expensive",
            explanation: "Long adjective 'expensive' → more + adjective."
          },
          {
            id: 10,
            question: "He drives ___ than his father.",
            options: ["more carefully", "carefuller", "carefullier"],
            correctAnswer: "more carefully",
            explanation: "Adverbs ending in -ly use 'more' for comparison."
          }
        ]
      }
    ]
  },
  {
    id: 'superlatives',
    titleEn: 'Superlatives',
    titleFr: 'Les Superlatifs',
    explanationEn: `**Superlatives** are used to compare one thing with all others in a group (the highest degree).

**Short adjectives (1 syllable):** Add -est
- tall → the tallest, fast → the fastest, old → the oldest
- Spelling rules: big → the biggest, nice → the nicest

**Long adjectives (2+ syllables):** Use "the most" + adjective
- beautiful → the most beautiful, expensive → the most expensive
- Exception: 2-syllable adjectives ending in -y: happy → the happiest

**Irregular superlatives:**
- good → the best
- bad → the worst
- far → the farthest/furthest

**Structure:** Subject + be + the + superlative + (in/of)
- She is the tallest in her class.
- This is the most expensive car in the world.

**In vs Of:**
- "In" for places/groups: the best in the class, the tallest in the family
- "Of" for quantities: the best of all, the youngest of the three`,
    explanationFr: `**Les superlatifs** servent à comparer une chose avec toutes les autres d'un groupe (le plus haut degré).

**Adjectifs courts (1 syllabe) :** Ajouter -est
- tall → the tallest, fast → the fastest, old → the oldest
- Règles d'orthographe : big → the biggest, nice → the nicest

**Adjectifs longs (2+ syllabes) :** Utiliser "the most" + adjectif
- beautiful → the most beautiful, expensive → the most expensive
- Exception : adjectifs de 2 syllabes en -y : happy → the happiest

**Superlatifs irréguliers :**
- good → the best
- bad → the worst
- far → the farthest/furthest

**Structure :** Sujet + be + the + superlatif + (in/of)
- Elle est la plus grande de sa classe.
- C'est la voiture la plus chère du monde.

**In vs Of :**
- "In" pour les lieux/groupes : the best in the class, the tallest in the family
- "Of" pour les quantités : the best of all, the youngest of the three`,
    examples: [
      { en: "She is **the tallest** girl in the class.", fr: "Elle est **la plus grande** fille de la classe." },
      { en: "This is **the most beautiful** place I have ever seen.", fr: "C'est **le plus bel** endroit que j'aie jamais vu." },
      { en: "He is **the best** student in our school.", fr: "Il est **le meilleur** élève de notre école." },
      { en: "It was **the worst** day of my life.", fr: "C'était **le pire** jour de ma vie." }
    ],
    exercises: [
      {
        id: 112,
        title: "Superlatives",
        description: "Choose the correct superlative form.",
        questions: [
          {
            id: 1,
            question: "Mount Everest is ___ mountain in the world.",
            options: ["the highest", "the most high", "higher"],
            correctAnswer: "the highest",
            explanation: "Short adjective 'high' → the + adjective + est."
          },
          {
            id: 2,
            question: "This is ___ book I have ever read.",
            options: ["the interestingest", "the most interesting", "more interesting"],
            correctAnswer: "the most interesting",
            explanation: "Long adjective 'interesting' → the most + adjective."
          },
          {
            id: 3,
            question: "She is ___ person I know.",
            options: ["the nicest", "the most nice", "nicer"],
            correctAnswer: "the nicest",
            explanation: "Short adjective 'nice' → the + adjective (drop e) + st."
          },
          {
            id: 4,
            question: "What is ___ city in your country?",
            options: ["the bigger", "the most big", "the biggest"],
            correctAnswer: "the biggest",
            explanation: "Short adjective 'big' → the + double consonant + est."
          },
          {
            id: 5,
            question: "He is ___ player on the team.",
            options: ["the better", "the best", "the goodest"],
            correctAnswer: "the best",
            explanation: "'Good' has an irregular superlative: the best."
          },
          {
            id: 6,
            question: "This was ___ exam of the year.",
            options: ["the difficultest", "the most difficult", "more difficult"],
            correctAnswer: "the most difficult",
            explanation: "Long adjective 'difficult' → the most + adjective."
          },
          {
            id: 7,
            question: "Today is ___ day of the year.",
            options: ["the hottest", "the most hot", "the hotest"],
            correctAnswer: "the hottest",
            explanation: "Short adjective 'hot' → the + double consonant + est."
          },
          {
            id: 8,
            question: "It was ___ experience of my life.",
            options: ["the baddest", "the worst", "the most bad"],
            correctAnswer: "the worst",
            explanation: "'Bad' has an irregular superlative: the worst."
          },
          {
            id: 9,
            question: "She is ___ of the three sisters.",
            options: ["the youngest", "the most young", "younger"],
            correctAnswer: "the youngest",
            explanation: "Short adjective 'young' + 'of' for comparing within a group."
          },
          {
            id: 10,
            question: "This restaurant serves ___ food in town.",
            options: ["the delicioust", "the most delicious", "deliciouser"],
            correctAnswer: "the most delicious",
            explanation: "Long adjective 'delicious' → the most + adjective."
          }
        ]
      }
    ]
  },
  {
    id: 'countable-uncountable',
    titleEn: 'Countable and Uncountable Nouns',
    titleFr: 'Noms Dénombrables et Indénombrables',
    explanationEn: `**Countable nouns** can be counted and have singular/plural forms:
- a book → two books, an apple → three apples
- Use: a/an, many, few, a few, several, a number of

**Uncountable nouns** cannot be counted and have no plural form:
- water, milk, rice, information, advice, furniture, money
- Use: much, little, a little, a great deal of, an amount of

**Common uncountable nouns (often mistaken as countable):**
- information (NOT informations)
- advice (NOT advices)
- furniture (NOT furnitures)
- luggage/baggage (NOT luggages)
- news (NOT a news)
- work (NOT works, when meaning employment)

**Quantifiers for both:**
- some, any, a lot of, lots of, plenty of, enough

**Making uncountable nouns countable:**
- a piece of advice, a glass of water, a slice of bread`,
    explanationFr: `**Les noms dénombrables** peuvent être comptés et ont des formes singulier/pluriel :
- a book → two books, an apple → three apples
- Utiliser : a/an, many, few, a few, several, a number of

**Les noms indénombrables** ne peuvent pas être comptés et n'ont pas de pluriel :
- water, milk, rice, information, advice, furniture, money
- Utiliser : much, little, a little, a great deal of, an amount of

**Noms indénombrables courants (souvent confondus avec dénombrables) :**
- information (PAS informations)
- advice (PAS advices)
- furniture (PAS furnitures)
- luggage/baggage (PAS luggages)
- news (PAS a news)
- work (PAS works, quand il signifie emploi)

**Quantifieurs pour les deux :**
- some, any, a lot of, lots of, plenty of, enough

**Rendre les indénombrables dénombrables :**
- a piece of advice, a glass of water, a slice of bread`,
    examples: [
      { en: "I need some **information**. (NOT informations)", fr: "J'ai besoin d'**informations**. (information est indénombrable en anglais)" },
      { en: "She gave me good **advice**. (NOT advices)", fr: "Elle m'a donné de bons **conseils**. (advice est indénombrable en anglais)" },
      { en: "How **much** money do you have?", fr: "**Combien** d'argent as-tu ?" },
      { en: "How **many** books did you read?", fr: "**Combien** de livres as-tu lus ?" }
    ],
    exercises: [
      {
        id: 113,
        title: "Countable and Uncountable Nouns",
        description: "Choose the correct word or form.",
        questions: [
          {
            id: 1,
            question: "How ___ sugar do you want in your coffee?",
            options: ["many", "much", "few"],
            correctAnswer: "much",
            explanation: "'Sugar' is uncountable, so use 'much'."
          },
          {
            id: 2,
            question: "There are ___ apples in the basket.",
            options: ["much", "a few", "a little"],
            correctAnswer: "a few",
            explanation: "'Apples' is countable, so use 'a few'."
          },
          {
            id: 3,
            question: "Can you give me some ___?",
            options: ["advice", "advices", "an advice"],
            correctAnswer: "advice",
            explanation: "'Advice' is uncountable - no plural form."
          },
          {
            id: 4,
            question: "I don't have ___ time today.",
            options: ["many", "much", "few"],
            correctAnswer: "much",
            explanation: "'Time' is uncountable, so use 'much'."
          },
          {
            id: 5,
            question: "She bought ___ new furniture for her apartment.",
            options: ["a", "some", "many"],
            correctAnswer: "some",
            explanation: "'Furniture' is uncountable - use 'some', not 'a' or 'many'."
          },
          {
            id: 6,
            question: "How ___ people came to the party?",
            options: ["much", "many", "a lot"],
            correctAnswer: "many",
            explanation: "'People' is countable, so use 'many'."
          },
          {
            id: 7,
            question: "I need ___ information about the course.",
            options: ["an", "some", "many"],
            correctAnswer: "some",
            explanation: "'Information' is uncountable - use 'some'."
          },
          {
            id: 8,
            question: "There is ___ milk left in the fridge.",
            options: ["a few", "a little", "many"],
            correctAnswer: "a little",
            explanation: "'Milk' is uncountable, so use 'a little'."
          },
          {
            id: 9,
            question: "The ___ was very heavy at the airport.",
            options: ["luggages", "luggage", "a luggage"],
            correctAnswer: "luggage",
            explanation: "'Luggage' is uncountable - no plural, no article 'a'."
          },
          {
            id: 10,
            question: "I have ___ homework to do tonight.",
            options: ["many", "a lot of", "a few"],
            correctAnswer: "a lot of",
            explanation: "'Homework' is uncountable - 'a lot of' works for both types."
          }
        ]
      }
    ]
  },
  {
    id: 'demonstratives',
    titleEn: 'Demonstratives: This, That, These, Those',
    titleFr: 'Les Démonstratifs : This, That, These, Those',
    explanationEn: `**Demonstratives** point to specific things and indicate distance.

**THIS** (singular, near):
- This book is interesting. (the book near me)
- This is my friend John. (introducing someone present)

**THAT** (singular, far):
- That building over there is the museum.
- That was a great movie! (referring to something past)

**THESE** (plural, near):
- These shoes are comfortable. (shoes near me)
- These are my colleagues.

**THOSE** (plural, far):
- Those mountains in the distance are beautiful.
- Those were the days! (referring to past times)

**Key uses:**
- Physical distance: this/these (near) vs that/those (far)
- Time: this (present/future) vs that (past)
- Phone: "This is John speaking" (introducing yourself)`,
    explanationFr: `**Les démonstratifs** désignent des choses spécifiques et indiquent la distance.

**THIS** (singulier, proche) :
- This book is interesting. (le livre près de moi)
- This is my friend John. (présenter quelqu'un présent)

**THAT** (singulier, loin) :
- That building over there is the museum.
- That was a great movie! (référence au passé)

**THESE** (pluriel, proche) :
- These shoes are comfortable. (chaussures près de moi)
- These are my colleagues.

**THOSE** (pluriel, loin) :
- Those mountains in the distance are beautiful.
- Those were the days! (référence au passé)

**Utilisations clés :**
- Distance physique : this/these (proche) vs that/those (loin)
- Temps : this (présent/futur) vs that (passé)
- Téléphone : "This is John speaking" (se présenter)`,
    examples: [
      { en: "**This** is delicious! (food I am eating now)", fr: "**C'est** délicieux ! (ce que je mange maintenant)" },
      { en: "**That** restaurant across the street is expensive.", fr: "**Ce** restaurant de l'autre côté de la rue est cher." },
      { en: "**These** flowers smell lovely.", fr: "**Ces** fleurs sentent bon." },
      { en: "**Those** were happy times.", fr: "**C'étaient** des moments heureux." }
    ],
    exercises: [
      {
        id: 114,
        title: "Demonstratives",
        description: "Choose the correct demonstrative: this, that, these, or those.",
        questions: [
          {
            id: 1,
            question: "___ is my new car. (showing a car right next to you)",
            options: ["This", "That", "These", "Those"],
            correctAnswer: "This",
            explanation: "'This' for singular objects near the speaker."
          },
          {
            id: 2,
            question: "Look at ___ birds in the sky!",
            options: ["this", "that", "these", "those"],
            correctAnswer: "those",
            explanation: "'Those' for plural objects far from the speaker."
          },
          {
            id: 3,
            question: "___ shoes are too tight. (shoes you are wearing)",
            options: ["This", "That", "These", "Those"],
            correctAnswer: "These",
            explanation: "'These' for plural objects near/on the speaker."
          },
          {
            id: 4,
            question: "Hello? ___ is Sarah speaking.",
            options: ["This", "That", "These", "Those"],
            correctAnswer: "This",
            explanation: "On the phone, use 'this' to introduce yourself."
          },
          {
            id: 5,
            question: "___ was an excellent movie! (movie you just watched)",
            options: ["This", "That", "These", "Those"],
            correctAnswer: "That",
            explanation: "'That' for referring to something just finished/past."
          },
          {
            id: 6,
            question: "Can you pass me ___ book on the table next to you?",
            options: ["this", "that", "these", "those"],
            correctAnswer: "that",
            explanation: "'That' for singular objects far from the speaker."
          },
          {
            id: 7,
            question: "___ days, everyone uses smartphones.",
            options: ["This", "That", "These", "Those"],
            correctAnswer: "These",
            explanation: "'These days' refers to the current time period."
          },
          {
            id: 8,
            question: "Who are ___ people over there?",
            options: ["this", "that", "these", "those"],
            correctAnswer: "those",
            explanation: "'Those' for plural people at a distance."
          },
          {
            id: 9,
            question: "___ coffee is too hot to drink. (cup in your hand)",
            options: ["This", "That", "These", "Those"],
            correctAnswer: "This",
            explanation: "'This' for something you are holding."
          },
          {
            id: 10,
            question: "Do you remember ___ holidays we spent in Spain?",
            options: ["this", "that", "these", "those"],
            correctAnswer: "those",
            explanation: "'Those' for plural past memories/events."
          }
        ]
      }
    ]
  },
  {
    id: 'either-neither',
    titleEn: 'Either (or) / Neither (nor)',
    titleFr: 'Either (or) / Neither (nor)',
    explanationEn: `**EITHER...OR** presents two choices/alternatives (positive):
- You can have either tea or coffee.
- Either you apologize, or I leave.
- Either option is fine with me.

**NEITHER...NOR** negates both options:
- I like neither tea nor coffee. (= I don't like tea AND I don't like coffee)
- Neither John nor Mary came to the party.
- The film was neither interesting nor entertaining.

**EITHER/NEITHER alone:**
- "I don't like coffee." → "I don't either." / "Neither do I." / "Me neither."
- Either of them can help you. (one or the other)
- Neither of them knows the answer. (not one, not the other)

**Subject-verb agreement:**
- With "either...or" / "neither...nor": verb agrees with the NEAREST subject
- Neither the teacher nor the students were happy.
- Neither the students nor the teacher was happy.`,
    explanationFr: `**EITHER...OR** présente deux choix/alternatives (positif) :
- Tu peux avoir soit du thé soit du café.
- Soit tu t'excuses, soit je pars.
- L'une ou l'autre option me convient.

**NEITHER...NOR** nie les deux options :
- Je n'aime ni le thé ni le café.
- Ni John ni Mary ne sont venus à la fête.
- Le film n'était ni intéressant ni divertissant.

**EITHER/NEITHER seuls :**
- "Je n'aime pas le café." → "Moi non plus."
- Either of them can help you. (l'un ou l'autre)
- Neither of them knows the answer. (ni l'un ni l'autre)

**Accord sujet-verbe :**
- Avec "either...or" / "neither...nor" : le verbe s'accorde avec le sujet LE PLUS PROCHE
- Neither the teacher nor the students were happy.
- Neither the students nor the teacher was happy.`,
    examples: [
      { en: "You can **either** stay **or** leave.", fr: "Tu peux **soit** rester **soit** partir." },
      { en: "**Neither** answer is correct.", fr: "**Aucune** des deux réponses n'est correcte." },
      { en: "I speak **neither** Spanish **nor** Italian.", fr: "Je ne parle **ni** espagnol **ni** italien." },
      { en: "\"I'm tired.\" - \"Me too.\" / \"I'm not tired.\" - \"**Neither** am I.\"", fr: "\"Je suis fatigué.\" - \"Moi aussi.\" / \"Je ne suis pas fatigué.\" - \"**Moi non plus**.\"" }
    ],
    exercises: [
      {
        id: 115,
        title: "Either (or) / Neither (nor)",
        description: "Choose the correct word or phrase.",
        questions: [
          {
            id: 1,
            question: "You can ___ call me ___ send an email.",
            options: ["either... or", "neither... nor", "either... nor"],
            correctAnswer: "either... or",
            explanation: "'Either...or' for presenting two positive alternatives."
          },
          {
            id: 2,
            question: "I like ___ tea ___ coffee. I prefer water.",
            options: ["either... or", "neither... nor", "either... nor"],
            correctAnswer: "neither... nor",
            explanation: "'Neither...nor' to negate both options."
          },
          {
            id: 3,
            question: "\"I don't like horror films.\" - \"___ do I.\"",
            options: ["Either", "Neither", "So"],
            correctAnswer: "Neither",
            explanation: "'Neither do I' agrees with a negative statement."
          },
          {
            id: 4,
            question: "___ of the two candidates was qualified for the job.",
            options: ["Either", "Neither", "Both"],
            correctAnswer: "Neither",
            explanation: "'Neither' means not one and not the other."
          },
          {
            id: 5,
            question: "The restaurant was ___ cheap ___ good.",
            options: ["either... or", "neither... nor", "both... and"],
            correctAnswer: "neither... nor",
            explanation: "'Neither...nor' = not cheap AND not good."
          },
          {
            id: 6,
            question: "You can take ___ the bus ___ the train. Both go to the center.",
            options: ["either... or", "neither... nor", "neither... or"],
            correctAnswer: "either... or",
            explanation: "'Either...or' for choosing between two options."
          },
          {
            id: 7,
            question: "___ Tom ___ his brothers were at home.",
            options: ["Either... or", "Neither... nor", "Both... or"],
            correctAnswer: "Neither... nor",
            explanation: "'Neither...nor' = Tom wasn't there AND his brothers weren't there."
          },
          {
            id: 8,
            question: "\"I've never been to Japan.\" - \"I haven't ___.\"",
            options: ["too", "either", "neither"],
            correctAnswer: "either",
            explanation: "'Either' at the end of a negative sentence means 'also not'."
          },
          {
            id: 9,
            question: "___ of these options works for me. Choose whichever you prefer.",
            options: ["Either", "Neither", "None"],
            correctAnswer: "Either",
            explanation: "'Either' = one or the other (both are acceptable)."
          },
          {
            id: 10,
            question: "She ___ called ___ texted me. I'm worried.",
            options: ["either... or", "neither... nor", "either... and"],
            correctAnswer: "neither... nor",
            explanation: "'Neither...nor' = she didn't call AND she didn't text."
          }
        ]
      }
    ]
  },
  {
    id: 'used-to',
    titleEn: 'The Different Forms of "Used to"',
    titleFr: 'Les Différentes Formes de "Used to"',
    explanationEn: `There are THREE different structures with "used to":

**1. USED TO + infinitive** (past habits/states that no longer exist):
- I used to smoke. (but I don't anymore)
- She used to live in Paris. (but she doesn't now)
- Did you use to play football? / I didn't use to like coffee.

**2. BE USED TO + noun/gerund** (be accustomed to):
- I am used to working late. (I'm accustomed to it)
- She is used to the noise. (it doesn't bother her)
- Are you used to living alone?

**3. GET USED TO + noun/gerund** (become accustomed to):
- I'm getting used to my new job. (becoming accustomed)
- You'll get used to it. (you will become accustomed)
- I can't get used to waking up early.

**Key differences:**
- USED TO + infinitive → past habit (no longer true)
- BE USED TO + gerund → current state of being accustomed
- GET USED TO + gerund → process of becoming accustomed`,
    explanationFr: `Il existe TROIS structures différentes avec "used to" :

**1. USED TO + infinitif** (habitudes/états passés qui n'existent plus) :
- I used to smoke. (mais je ne fume plus)
- She used to live in Paris. (mais elle n'y habite plus)
- Did you use to play football? / I didn't use to like coffee.

**2. BE USED TO + nom/gérondif** (être habitué à) :
- I am used to working late. (j'y suis habitué)
- She is used to the noise. (ça ne la dérange pas)
- Are you used to living alone?

**3. GET USED TO + nom/gérondif** (s'habituer à) :
- I'm getting used to my new job. (je m'y habitue)
- You'll get used to it. (tu t'y habitueras)
- I can't get used to waking up early.

**Différences clés :**
- USED TO + infinitif → habitude passée (plus vraie maintenant)
- BE USED TO + gérondif → état actuel d'être habitué
- GET USED TO + gérondif → processus de s'habituer`,
    examples: [
      { en: "I **used to** play tennis. (past habit, not anymore)", fr: "Je **jouais** au tennis. (habitude passée, plus maintenant)" },
      { en: "I **am used to** getting up early. (I'm accustomed to it)", fr: "J'**ai l'habitude** de me lever tôt. (j'y suis habitué)" },
      { en: "I **can't get used to** this weather. (struggling to adapt)", fr: "Je **n'arrive pas à m'habituer** à ce temps. (difficulté à s'adapter)" },
      { en: "She **didn't use to** like spicy food.", fr: "Elle **n'aimait pas** la nourriture épicée avant." }
    ],
    exercises: [
      {
        id: 116,
        title: "Forms of 'Used to'",
        description: "Choose the correct form.",
        questions: [
          {
            id: 1,
            question: "I ___ smoke, but I quit five years ago.",
            options: ["used to", "am used to", "get used to"],
            correctAnswer: "used to",
            explanation: "'Used to' + infinitive for past habits that no longer exist."
          },
          {
            id: 2,
            question: "She ___ working at night. It doesn't bother her anymore.",
            options: ["used to", "is used to", "gets used to"],
            correctAnswer: "is used to",
            explanation: "'Be used to' + gerund for being accustomed to something."
          },
          {
            id: 3,
            question: "It took me a while to ___ the new software.",
            options: ["used to", "be used to", "get used to"],
            correctAnswer: "get used to",
            explanation: "'Get used to' for the process of becoming accustomed."
          },
          {
            id: 4,
            question: "Did you ___ live in London?",
            options: ["use to", "used to", "be used to"],
            correctAnswer: "use to",
            explanation: "In questions with 'did', use 'use to' (no 'd')."
          },
          {
            id: 5,
            question: "I ___ the cold weather now. I've been here for two years.",
            options: ["used to", "am used to", "get used to"],
            correctAnswer: "am used to",
            explanation: "'Be used to' for a current state of being accustomed."
          },
          {
            id: 6,
            question: "He ___ have long hair when he was younger.",
            options: ["used to", "is used to", "gets used to"],
            correctAnswer: "used to",
            explanation: "'Used to' for a past state that is no longer true."
          },
          {
            id: 7,
            question: "I can't ___ waking up so early every day.",
            options: ["used to", "be used to", "get used to"],
            correctAnswer: "get used to",
            explanation: "'Get used to' for the process of adapting (struggling here)."
          },
          {
            id: 8,
            question: "Are you ___ driving on the left side of the road?",
            options: ["use to", "used to", "getting used to"],
            correctAnswer: "used to",
            explanation: "'Be used to' in question form: Are you used to + gerund."
          },
          {
            id: 9,
            question: "We didn't ___ have a car when I was a child.",
            options: ["use to", "used to", "be used to"],
            correctAnswer: "use to",
            explanation: "In negatives with 'didn't', use 'use to' (no 'd')."
          },
          {
            id: 10,
            question: "After a few months, you'll ___ the routine.",
            options: ["used to", "be used to", "get used to"],
            correctAnswer: "get used to",
            explanation: "'Get used to' for future adaptation process."
          }
        ]
      }
    ]
  },
  {
    id: 'conditionals',
    titleEn: 'Conditional Sentences',
    titleFr: 'Les Phrases Conditionnelles',
    explanationEn: `**ZERO CONDITIONAL** (general truths, always true):
- If + present simple, present simple
- If you heat water to 100°C, it boils.
- If I eat too much, I feel sick.

**FIRST CONDITIONAL** (real/possible future situations):
- If + present simple, will + infinitive
- If it rains tomorrow, I will stay home.
- If you study hard, you will pass the exam.

**SECOND CONDITIONAL** (unreal/hypothetical present/future):
- If + past simple, would + infinitive
- If I won the lottery, I would travel the world.
- If I were you, I would apologize. (were for all persons)

**THIRD CONDITIONAL** (unreal past, impossible to change):
- If + past perfect, would have + past participle
- If I had studied harder, I would have passed.
- If she had called, I would have helped her.

**Mixed conditionals** combine different time references.`,
    explanationFr: `**ZERO CONDITIONAL** (vérités générales, toujours vrai) :
- If + présent simple, présent simple
- Si on chauffe l'eau à 100°C, elle bout.
- Si je mange trop, je me sens mal.

**FIRST CONDITIONAL** (situations futures réelles/possibles) :
- If + présent simple, will + infinitif
- S'il pleut demain, je resterai à la maison.
- Si tu étudies bien, tu réussiras l'examen.

**SECOND CONDITIONAL** (présent/futur irréel/hypothétique) :
- If + prétérit, would + infinitif
- Si je gagnais au loto, je voyagerais dans le monde.
- Si j'étais toi, je m'excuserais. (were pour toutes les personnes)

**THIRD CONDITIONAL** (passé irréel, impossible à changer) :
- If + plus-que-parfait, would have + participe passé
- Si j'avais étudié plus, j'aurais réussi.
- Si elle avait appelé, je l'aurais aidée.

**Conditionnels mixtes** combinent différentes références temporelles.`,
    examples: [
      { en: "If you **heat** ice, it **melts**. (zero)", fr: "Si tu **chauffes** la glace, elle **fond**. (zero)" },
      { en: "If it **rains**, I **will take** an umbrella. (first)", fr: "S'il **pleut**, je **prendrai** un parapluie. (first)" },
      { en: "If I **had** more time, I **would learn** Japanese. (second)", fr: "Si j'**avais** plus de temps, j'**apprendrais** le japonais. (second)" },
      { en: "If I **had known**, I **would have told** you. (third)", fr: "Si j'**avais su**, je te l'**aurais dit**. (third)" }
    ],
    exercises: [
      {
        id: 117,
        title: "Conditional Sentences",
        description: "Choose the correct form to complete the conditional.",
        questions: [
          {
            id: 1,
            question: "If you ___ water to 100°C, it boils.",
            options: ["heat", "heated", "will heat"],
            correctAnswer: "heat",
            explanation: "Zero conditional: If + present, present (general truth)."
          },
          {
            id: 2,
            question: "If it rains tomorrow, we ___ the picnic.",
            options: ["cancel", "will cancel", "would cancel"],
            correctAnswer: "will cancel",
            explanation: "First conditional: If + present, will + infinitive."
          },
          {
            id: 3,
            question: "If I ___ rich, I would buy a yacht.",
            options: ["am", "was/were", "will be"],
            correctAnswer: "was/were",
            explanation: "Second conditional: If + past simple, would + infinitive."
          },
          {
            id: 4,
            question: "If she had studied harder, she ___ the exam.",
            options: ["passed", "would pass", "would have passed"],
            correctAnswer: "would have passed",
            explanation: "Third conditional: If + past perfect, would have + past participle."
          },
          {
            id: 5,
            question: "I ___ you if I had known your number.",
            options: ["will call", "would call", "would have called"],
            correctAnswer: "would have called",
            explanation: "Third conditional for unreal past situation."
          },
          {
            id: 6,
            question: "If I ___ you, I would accept the offer.",
            options: ["am", "were", "will be"],
            correctAnswer: "were",
            explanation: "Second conditional: 'were' is used for all persons in formal English."
          },
          {
            id: 7,
            question: "If you mix blue and yellow, you ___ green.",
            options: ["get", "will get", "would get"],
            correctAnswer: "get",
            explanation: "Zero conditional for scientific facts."
          },
          {
            id: 8,
            question: "If he ___ earlier, he wouldn't have missed the train.",
            options: ["left", "had left", "would leave"],
            correctAnswer: "had left",
            explanation: "Third conditional: If + past perfect in the if-clause."
          },
          {
            id: 9,
            question: "We will go to the beach if the weather ___ nice.",
            options: ["is", "was", "will be"],
            correctAnswer: "is",
            explanation: "First conditional: present simple in the if-clause."
          },
          {
            id: 10,
            question: "If I had more free time, I ___ a new hobby.",
            options: ["start", "will start", "would start"],
            correctAnswer: "would start",
            explanation: "Second conditional for hypothetical present/future."
          }
        ]
      }
    ]
  },
  {
    id: 'passive-voice',
    titleEn: 'Passive Voice',
    titleFr: 'La Voix Passive',
    explanationEn: `**Active voice:** The subject performs the action.
- The chef **cooks** the meal.

**Passive voice:** The subject receives the action.
- The meal **is cooked** (by the chef).

**Formation:** be + past participle

**Passive in different tenses:**
- Present Simple: The car **is washed** every week.
- Past Simple: The letter **was sent** yesterday.
- Present Perfect: The work **has been completed**.
- Future: The project **will be finished** tomorrow.
- Modal: The report **must be submitted** by Friday.

**When to use passive:**
- When the doer is unknown: My bike **was stolen**.
- When the action is more important than the doer.
- In formal/scientific writing: The experiment **was conducted**.
- When the doer is obvious: He **was arrested** (by police).`,
    explanationFr: `**Voix active :** Le sujet fait l'action.
- Le chef **prépare** le repas.

**Voix passive :** Le sujet subit l'action.
- Le repas **est préparé** (par le chef).

**Formation :** be + participe passé

**Passif aux différents temps :**
- Présent Simple : La voiture **est lavée** chaque semaine.
- Passé Simple : La lettre **a été envoyée** hier.
- Present Perfect : Le travail **a été terminé**.
- Futur : Le projet **sera terminé** demain.
- Modal : Le rapport **doit être soumis** avant vendredi.

**Quand utiliser le passif :**
- Quand l'auteur est inconnu : Mon vélo **a été volé**.
- Quand l'action est plus importante que l'auteur.
- Dans l'écriture formelle/scientifique : L'expérience **a été menée**.
- Quand l'auteur est évident : Il **a été arrêté** (par la police).`,
    examples: [
      { en: "The book **was written** by J.K. Rowling.", fr: "Le livre **a été écrit** par J.K. Rowling." },
      { en: "English **is spoken** in many countries.", fr: "L'anglais **est parlé** dans de nombreux pays." },
      { en: "The Eiffel Tower **was built** in 1889.", fr: "La Tour Eiffel **a été construite** en 1889." },
      { en: "The results **will be announced** tomorrow.", fr: "Les résultats **seront annoncés** demain." }
    ],
    exercises: [
      {
        id: 118,
        title: "Passive Voice",
        description: "Choose the correct passive form.",
        questions: [
          {
            id: 1,
            question: "The window ___ by the storm last night.",
            options: ["broke", "was broken", "has broken"],
            correctAnswer: "was broken",
            explanation: "Past simple passive: was/were + past participle."
          },
          {
            id: 2,
            question: "English ___ all over the world.",
            options: ["speaks", "is spoken", "is speaking"],
            correctAnswer: "is spoken",
            explanation: "Present simple passive for general facts."
          },
          {
            id: 3,
            question: "The new hospital ___ next year.",
            options: ["will build", "will be built", "is built"],
            correctAnswer: "will be built",
            explanation: "Future passive: will be + past participle."
          },
          {
            id: 4,
            question: "The report ___ already ___.",
            options: ["has... written", "has... been written", "was... written"],
            correctAnswer: "has... been written",
            explanation: "Present perfect passive: has/have been + past participle."
          },
          {
            id: 5,
            question: "The documents must ___ by Friday.",
            options: ["submit", "be submitted", "be submitting"],
            correctAnswer: "be submitted",
            explanation: "Modal passive: modal + be + past participle."
          },
          {
            id: 6,
            question: "This castle ___ in the 15th century.",
            options: ["built", "was built", "has been built"],
            correctAnswer: "was built",
            explanation: "Past simple passive for historical facts."
          },
          {
            id: 7,
            question: "The meeting ___ at the moment.",
            options: ["is holding", "is being held", "is held"],
            correctAnswer: "is being held",
            explanation: "Present continuous passive: is/are being + past participle."
          },
          {
            id: 8,
            question: "By whom ___ this painting ___?",
            options: ["was... paint", "was... painted", "did... paint"],
            correctAnswer: "was... painted",
            explanation: "Passive question: By whom was + subject + past participle."
          },
          {
            id: 9,
            question: "The thief ___ yet.",
            options: ["hasn't caught", "hasn't been caught", "didn't catch"],
            correctAnswer: "hasn't been caught",
            explanation: "Present perfect passive negative."
          },
          {
            id: 10,
            question: "This song ___ by millions of people.",
            options: ["loves", "is loved", "is loving"],
            correctAnswer: "is loved",
            explanation: "Present simple passive for general statements."
          }
        ]
      }
    ]
  },
  {
    id: 'phrasal-verbs',
    titleEn: 'Phrasal Verbs',
    titleFr: 'Les Verbes à Particule (Phrasal Verbs)',
    explanationEn: `**Phrasal verbs** = verb + particle (preposition/adverb)
The meaning often changes completely from the original verb.

**SEPARABLE phrasal verbs** (object can go in the middle):
- Turn off the light. / Turn the light off. / Turn it off.
- Pick up your clothes. / Pick your clothes up. / Pick them up.
- ⚠️ With pronouns, MUST separate: Turn **it** off. (NOT: Turn off it.)

**INSEPARABLE phrasal verbs** (object must come after):
- Look after the children. (NOT: Look the children after.)
- Get over a problem. (NOT: Get a problem over.)

**THREE-WORD phrasal verbs** (always inseparable):
- I look forward to the holiday.
- She gets along with everyone.
- We ran out of milk.

**Common phrasal verbs:**
- give up (stop trying), look up (search), put off (postpone)
- turn down (refuse), work out (exercise/solve), break down (stop working)
- figure out (understand), come across (find by chance)`,
    explanationFr: `**Les phrasal verbs** = verbe + particule (préposition/adverbe)
Le sens change souvent complètement par rapport au verbe original.

**Phrasal verbs SÉPARABLES** (l'objet peut aller au milieu) :
- Turn off the light. / Turn the light off. / Turn it off.
- Pick up your clothes. / Pick your clothes up. / Pick them up.
- ⚠️ Avec les pronoms, on DOIT séparer : Turn **it** off. (PAS : Turn off it.)

**Phrasal verbs INSÉPARABLES** (l'objet doit venir après) :
- Look after the children. (PAS : Look the children after.)
- Get over a problem. (PAS : Get a problem over.)

**Phrasal verbs à TROIS MOTS** (toujours inséparables) :
- I look forward to the holiday.
- She gets along with everyone.
- We ran out of milk.

**Phrasal verbs courants :**
- give up (abandonner), look up (chercher), put off (reporter)
- turn down (refuser), work out (faire du sport/résoudre), break down (tomber en panne)
- figure out (comprendre), come across (trouver par hasard)`,
    examples: [
      { en: "Please **turn off** the TV. / Please **turn** the TV **off**.", fr: "S'il te plaît, **éteins** la télé." },
      { en: "I need to **look after** my sister. (inseparable)", fr: "Je dois **m'occuper de** ma sœur. (inséparable)" },
      { en: "She **gave up** smoking last year.", fr: "Elle a **arrêté de** fumer l'année dernière." },
      { en: "We've **run out of** coffee.", fr: "Nous n'avons **plus de** café." }
    ],
    exercises: [
      {
        id: 119,
        title: "Phrasal Verbs",
        description: "Choose the correct phrasal verb or word order.",
        questions: [
          {
            id: 1,
            question: "Can you ___ the music? It's too loud.",
            options: ["turn down", "turn up", "turn on"],
            correctAnswer: "turn down",
            explanation: "'Turn down' means to reduce volume or refuse."
          },
          {
            id: 2,
            question: "I need to ___ this word in the dictionary.",
            options: ["look up", "look after", "look for"],
            correctAnswer: "look up",
            explanation: "'Look up' means to search for information."
          },
          {
            id: 3,
            question: "The meeting has been ___. It's now next week.",
            options: ["put on", "put off", "put up"],
            correctAnswer: "put off",
            explanation: "'Put off' means to postpone."
          },
          {
            id: 4,
            question: "Which is correct? 'Turn ___ .'",
            options: ["off it", "it off", "it on off"],
            correctAnswer: "it off",
            explanation: "With pronouns, separable phrasal verbs MUST be split."
          },
          {
            id: 5,
            question: "She ___ her grandmother every weekend.",
            options: ["looks after", "looks up", "looks for"],
            correctAnswer: "looks after",
            explanation: "'Look after' means to take care of someone."
          },
          {
            id: 6,
            question: "I can't ___ what this word means.",
            options: ["figure out", "figure up", "figure in"],
            correctAnswer: "figure out",
            explanation: "'Figure out' means to understand or solve."
          },
          {
            id: 7,
            question: "He ___ smoking three years ago.",
            options: ["gave up", "gave in", "gave off"],
            correctAnswer: "gave up",
            explanation: "'Give up' means to stop doing something."
          },
          {
            id: 8,
            question: "We've ___ milk. Can you buy some?",
            options: ["run out of", "run into", "run over"],
            correctAnswer: "run out of",
            explanation: "'Run out of' means to have no more of something."
          },
          {
            id: 9,
            question: "I ___ an old friend at the supermarket yesterday.",
            options: ["came across", "came up", "came in"],
            correctAnswer: "came across",
            explanation: "'Come across' means to find or meet by chance."
          },
          {
            id: 10,
            question: "My car ___ on the highway. I had to call for help.",
            options: ["broke down", "broke up", "broke in"],
            correctAnswer: "broke down",
            explanation: "'Break down' means to stop working (for machines)."
          }
        ]
      }
    ]
  },
  {
    id: 'articles',
    titleEn: 'Articles: A, An, The, Zero Article',
    titleFr: 'Les Articles : A, An, The, Article Zéro',
    explanationEn: `**A/AN** (indefinite article) - for singular countable nouns, first mention:
- A before consonant sounds: a book, a university (sounds like "yoo")
- An before vowel sounds: an apple, an hour (silent h)

**THE** (definite article) - for specific/known things:
- When both speaker and listener know: The book on the table.
- Unique things: the sun, the internet, the President
- Superlatives: the best, the most beautiful
- With of: the end of the story

**ZERO ARTICLE (no article):**
- Plural/uncountable for general statements: Dogs are loyal. Water is essential.
- Countries (most): France, Japan (BUT: the USA, the UK, the Netherlands)
- Languages: English, French
- Meals: breakfast, lunch, dinner
- Sports: football, tennis
- Next/last + time: next week, last year

**Common mistakes:**
- I like THE music. ❌ → I like music. ✓ (general)
- She is doctor. ❌ → She is A doctor. ✓`,
    explanationFr: `**A/AN** (article indéfini) - pour les noms dénombrables singuliers, première mention :
- A devant les sons consonnes : a book, a university (sonne comme "you")
- An devant les sons voyelles : an apple, an hour (h muet)

**THE** (article défini) - pour les choses spécifiques/connues :
- Quand les deux interlocuteurs savent : The book on the table.
- Choses uniques : the sun, the internet, the President
- Superlatifs : the best, the most beautiful
- Avec of : the end of the story

**ARTICLE ZÉRO (pas d'article) :**
- Pluriel/indénombrable pour généralités : Dogs are loyal. Water is essential.
- Pays (la plupart) : France, Japan (MAIS : the USA, the UK, the Netherlands)
- Langues : English, French
- Repas : breakfast, lunch, dinner
- Sports : football, tennis
- Next/last + temps : next week, last year

**Erreurs courantes :**
- I like THE music. ❌ → I like music. ✓ (général)
- She is doctor. ❌ → She is A doctor. ✓`,
    examples: [
      { en: "I saw **a** dog. **The** dog was brown.", fr: "J'ai vu **un** chien. **Le** chien était marron." },
      { en: "**The** sun rises in **the** east.", fr: "**Le** soleil se lève à **l'**est." },
      { en: "I like **∅** music. (general)", fr: "J'aime **la** musique. (général - pas d'article en anglais)" },
      { en: "She is **an** engineer.", fr: "Elle est **∅** ingénieur. (article en anglais, pas en français)" }
    ],
    exercises: [
      {
        id: 120,
        title: "Articles",
        description: "Choose the correct article: a, an, the, or no article (-).",
        questions: [
          {
            id: 1,
            question: "She is ___ doctor.",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "a",
            explanation: "Use 'a' before professions (consonant sound)."
          },
          {
            id: 2,
            question: "I love ___ music.",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "- (no article)",
            explanation: "No article for general statements about uncountable nouns."
          },
          {
            id: 3,
            question: "___ Amazon is the longest river in South America.",
            options: ["A", "An", "The", "- (no article)"],
            correctAnswer: "The",
            explanation: "Use 'the' with rivers, oceans, and mountain ranges."
          },
          {
            id: 4,
            question: "He is ___ honest man.",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "an",
            explanation: "'Honest' starts with a vowel sound (silent h)."
          },
          {
            id: 5,
            question: "I had ___ breakfast at 8 AM.",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "- (no article)",
            explanation: "No article before meal names in general."
          },
          {
            id: 6,
            question: "This is ___ best restaurant in town.",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "the",
            explanation: "Use 'the' with superlatives."
          },
          {
            id: 7,
            question: "She goes to ___ university in London.",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "a",
            explanation: "'University' starts with a consonant sound (yoo-)."
          },
          {
            id: 8,
            question: "I'm going to ___ France next summer.",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "- (no article)",
            explanation: "No article before most country names."
          },
          {
            id: 9,
            question: "Can you pass me ___ salt, please?",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "the",
            explanation: "Use 'the' when both people know which salt."
          },
          {
            id: 10,
            question: "He plays ___ football every weekend.",
            options: ["a", "an", "the", "- (no article)"],
            correctAnswer: "- (no article)",
            explanation: "No article before sports."
          }
        ]
      }
    ]
  },
  {
    id: 'modal-verbs',
    titleEn: 'Modal Verbs',
    titleFr: 'Les Verbes Modaux',
    explanationEn: `**Modal verbs** express ability, possibility, permission, obligation, etc.
They are followed by the base form of the verb (no "to").

**CAN / COULD:**
- Ability: I can swim. I could swim when I was 5.
- Permission: Can I leave? Could I use your phone? (more polite)
- Possibility: It can be cold in winter.

**MAY / MIGHT:**
- Permission (formal): May I come in?
- Possibility: It may/might rain later. (might = less certain)

**MUST / HAVE TO:**
- Obligation: You must wear a seatbelt. / You have to wear a seatbelt.
- Strong probability: He must be tired. (I'm sure he is)
- MUSTN'T = prohibition ≠ DON'T HAVE TO = no obligation

**SHOULD / OUGHT TO:**
- Advice: You should see a doctor.
- Expectation: She should be here soon.

**WOULD:**
- Polite requests: Would you help me?
- Hypothetical: I would travel if I had money.`,
    explanationFr: `**Les verbes modaux** expriment la capacité, la possibilité, la permission, l'obligation, etc.
Ils sont suivis de la base verbale (sans "to").

**CAN / COULD :**
- Capacité : I can swim. I could swim when I was 5.
- Permission : Can I leave? Could I use your phone? (plus poli)
- Possibilité : It can be cold in winter.

**MAY / MIGHT :**
- Permission (formel) : May I come in?
- Possibilité : It may/might rain later. (might = moins certain)

**MUST / HAVE TO :**
- Obligation : You must wear a seatbelt. / You have to wear a seatbelt.
- Forte probabilité : He must be tired. (je suis sûr qu'il l'est)
- MUSTN'T = interdiction ≠ DON'T HAVE TO = pas d'obligation

**SHOULD / OUGHT TO :**
- Conseil : You should see a doctor.
- Attente : She should be here soon.

**WOULD :**
- Demandes polies : Would you help me?
- Hypothétique : I would travel if I had money.`,
    examples: [
      { en: "You **must** wear a helmet. (obligation)", fr: "Tu **dois** porter un casque. (obligation)" },
      { en: "You **mustn't** smoke here. (prohibition)", fr: "Tu **ne dois pas** fumer ici. (interdiction)" },
      { en: "You **don't have to** come. (no obligation)", fr: "Tu **n'es pas obligé** de venir. (pas d'obligation)" },
      { en: "It **might** rain tomorrow.", fr: "Il **pourrait** pleuvoir demain." }
    ],
    exercises: [
      {
        id: 121,
        title: "Modal Verbs",
        description: "Choose the correct modal verb.",
        questions: [
          {
            id: 1,
            question: "You ___ drive without a license. It's illegal.",
            options: ["mustn't", "don't have to", "shouldn't"],
            correctAnswer: "mustn't",
            explanation: "'Mustn't' for prohibition (it's not allowed)."
          },
          {
            id: 2,
            question: "You ___ come if you don't want to. It's optional.",
            options: ["mustn't", "don't have to", "can't"],
            correctAnswer: "don't have to",
            explanation: "'Don't have to' = no obligation (your choice)."
          },
          {
            id: 3,
            question: "___ you help me with this box, please?",
            options: ["Could", "Must", "Should"],
            correctAnswer: "Could",
            explanation: "'Could' for polite requests."
          },
          {
            id: 4,
            question: "She ___ be at home. Her car is in the driveway.",
            options: ["can", "must", "should"],
            correctAnswer: "must",
            explanation: "'Must' for strong probability/deduction."
          },
          {
            id: 5,
            question: "You ___ see a doctor. That cough sounds bad.",
            options: ["should", "must", "could"],
            correctAnswer: "should",
            explanation: "'Should' for advice/recommendation."
          },
          {
            id: 6,
            question: "When I was young, I ___ run very fast.",
            options: ["can", "could", "may"],
            correctAnswer: "could",
            explanation: "'Could' for past ability."
          },
          {
            id: 7,
            question: "It ___ rain later. Take an umbrella just in case.",
            options: ["must", "might", "should"],
            correctAnswer: "might",
            explanation: "'Might' for possibility (not certain)."
          },
          {
            id: 8,
            question: "___ I use your bathroom, please?",
            options: ["May", "Must", "Should"],
            correctAnswer: "May",
            explanation: "'May' for formal/polite permission requests."
          },
          {
            id: 9,
            question: "You ___ to finish this report by Friday. It's required.",
            options: ["should", "have", "must"],
            correctAnswer: "have",
            explanation: "'Have to' expresses external obligation."
          },
          {
            id: 10,
            question: "He ___ be French. He has a strong accent.",
            options: ["can't", "mustn't", "shouldn't"],
            correctAnswer: "can't",
            explanation: "'Can't' for impossibility/negative deduction."
          }
        ]
      }
    ]
  },
  {
    id: 'reported-speech',
    titleEn: 'Reported Speech (Indirect Speech)',
    titleFr: 'Le Discours Indirect (Reported Speech)',
    explanationEn: `**Reported speech** reports what someone said without quoting exactly.

**Tense changes (backshift):**
- Present Simple → Past Simple: "I work" → He said he worked.
- Present Continuous → Past Continuous: "I'm working" → He said he was working.
- Past Simple → Past Perfect: "I worked" → He said he had worked.
- Will → Would: "I will go" → He said he would go.
- Can → Could: "I can swim" → He said he could swim.

**Pronoun and time changes:**
- I → he/she, you → I/we, my → his/her
- today → that day, tomorrow → the next day, yesterday → the day before
- here → there, this → that, now → then

**Reporting verbs:**
- say (+ that): He said (that) he was tired.
- tell (+ person): He told me (that) he was tired.
- ask (questions): She asked if/whether I was coming.

**Questions in reported speech:**
- "Are you happy?" → She asked if I was happy.
- "Where do you live?" → She asked where I lived.`,
    explanationFr: `**Le discours indirect** rapporte ce que quelqu'un a dit sans citer exactement.

**Changements de temps (concordance des temps) :**
- Présent Simple → Prétérit : "I work" → He said he worked.
- Présent Continu → Prétérit Continu : "I'm working" → He said he was working.
- Prétérit → Plus-que-parfait : "I worked" → He said he had worked.
- Will → Would : "I will go" → He said he would go.
- Can → Could : "I can swim" → He said he could swim.

**Changements de pronoms et de temps :**
- I → he/she, you → I/we, my → his/her
- today → that day, tomorrow → the next day, yesterday → the day before
- here → there, this → that, now → then

**Verbes introducteurs :**
- say (+ that) : He said (that) he was tired.
- tell (+ personne) : He told me (that) he was tired.
- ask (questions) : She asked if/whether I was coming.

**Questions au discours indirect :**
- "Are you happy?" → She asked if I was happy.
- "Where do you live?" → She asked where I lived.`,
    examples: [
      { en: "\"I am tired.\" → He said he **was** tired.", fr: "\"Je suis fatigué.\" → Il a dit qu'il **était** fatigué." },
      { en: "\"I will call you.\" → She said she **would** call me.", fr: "\"Je t'appellerai.\" → Elle a dit qu'elle **m'appellerait**." },
      { en: "\"Where do you live?\" → He asked where I **lived**.", fr: "\"Où habites-tu ?\" → Il m'a demandé où **j'habitais**." },
      { en: "\"Are you coming?\" → She asked **if** I was coming.", fr: "\"Tu viens ?\" → Elle m'a demandé **si** je venais." }
    ],
    exercises: [
      {
        id: 122,
        title: "Reported Speech",
        description: "Convert to reported speech or choose the correct form.",
        questions: [
          {
            id: 1,
            question: "\"I am happy.\" → She said she ___ happy.",
            options: ["is", "was", "were"],
            correctAnswer: "was",
            explanation: "Present Simple 'am' becomes Past Simple 'was'."
          },
          {
            id: 2,
            question: "\"I will help you.\" → He said he ___ help me.",
            options: ["will", "would", "could"],
            correctAnswer: "would",
            explanation: "'Will' becomes 'would' in reported speech."
          },
          {
            id: 3,
            question: "\"I have finished.\" → She said she ___ finished.",
            options: ["has", "had", "have"],
            correctAnswer: "had",
            explanation: "Present Perfect 'have' becomes Past Perfect 'had'."
          },
          {
            id: 4,
            question: "\"Where do you work?\" → He asked me where I ___.",
            options: ["work", "worked", "am working"],
            correctAnswer: "worked",
            explanation: "Present Simple becomes Past Simple in reported questions."
          },
          {
            id: 5,
            question: "\"Are you coming?\" → She asked ___ I was coming.",
            options: ["that", "if", "what"],
            correctAnswer: "if",
            explanation: "Yes/No questions use 'if' or 'whether' in reported speech."
          },
          {
            id: 6,
            question: "He ___ me that he was tired.",
            options: ["said", "told", "asked"],
            correctAnswer: "told",
            explanation: "'Tell' requires an object (told ME)."
          },
          {
            id: 7,
            question: "\"I can swim.\" → She said she ___ swim.",
            options: ["can", "could", "may"],
            correctAnswer: "could",
            explanation: "'Can' becomes 'could' in reported speech."
          },
          {
            id: 8,
            question: "\"I saw her yesterday.\" → He said he had seen her ___.",
            options: ["yesterday", "the day before", "tomorrow"],
            correctAnswer: "the day before",
            explanation: "'Yesterday' becomes 'the day before' in reported speech."
          },
          {
            id: 9,
            question: "\"What time does the train leave?\" → She asked what time the train ___.",
            options: ["leaves", "left", "had left"],
            correctAnswer: "left",
            explanation: "Present Simple becomes Past Simple."
          },
          {
            id: 10,
            question: "She said, \"I'm working.\" → She said she ___.",
            options: ["is working", "was working", "had been working"],
            correctAnswer: "was working",
            explanation: "Present Continuous becomes Past Continuous."
          }
        ]
      }
    ]
  },
  {
    id: 'relative-clauses',
    titleEn: 'Relative Clauses',
    titleFr: 'Les Propositions Relatives',
    explanationEn: `**Relative clauses** give extra information about a noun.

**Relative pronouns:**
- **WHO** for people: The man who called is my uncle.
- **WHICH** for things/animals: The book which I bought is interesting.
- **THAT** for people/things (informal): The man that called... The book that I bought...
- **WHOSE** for possession: The woman whose car was stolen...
- **WHERE** for places: The restaurant where we met...
- **WHEN** for times: The day when I graduated...

**Defining vs Non-defining:**
- Defining (essential): The man WHO stole my bag was arrested. (which man?)
- Non-defining (extra info): My brother, WHO lives in Paris, is a doctor. (commas!)

**Omitting relative pronouns:**
- When the relative pronoun is the OBJECT, you can omit it:
- The book (which/that) I read was good. ✓
- The man (who/that) I met was nice. ✓
- But NOT when it's the SUBJECT: The man who called... (cannot omit)`,
    explanationFr: `**Les propositions relatives** donnent des informations supplémentaires sur un nom.

**Pronoms relatifs :**
- **WHO** pour les personnes : The man who called is my uncle.
- **WHICH** pour les choses/animaux : The book which I bought is interesting.
- **THAT** pour personnes/choses (informel) : The man that called... The book that I bought...
- **WHOSE** pour la possession : The woman whose car was stolen...
- **WHERE** pour les lieux : The restaurant where we met...
- **WHEN** pour le temps : The day when I graduated...

**Définissante vs Non-définissante :**
- Définissante (essentielle) : The man WHO stole my bag was arrested. (quel homme ?)
- Non-définissante (info supplémentaire) : My brother, WHO lives in Paris, is a doctor. (virgules !)

**Omission du pronom relatif :**
- Quand le pronom relatif est OBJET, on peut l'omettre :
- The book (which/that) I read was good. ✓
- The man (who/that) I met was nice. ✓
- Mais PAS quand c'est le SUJET : The man who called... (ne peut pas omettre)`,
    examples: [
      { en: "The woman **who** lives next door is a teacher.", fr: "La femme **qui** habite à côté est professeur." },
      { en: "The car **which/that** I bought is red.", fr: "La voiture **que** j'ai achetée est rouge." },
      { en: "That's the man **whose** dog bit me.", fr: "C'est l'homme **dont** le chien m'a mordu." },
      { en: "This is the hotel **where** we stayed.", fr: "C'est l'hôtel **où** nous avons séjourné." }
    ],
    exercises: [
      {
        id: 123,
        title: "Relative Clauses",
        description: "Choose the correct relative pronoun.",
        questions: [
          {
            id: 1,
            question: "The man ___ called you is my father.",
            options: ["who", "which", "whose"],
            correctAnswer: "who",
            explanation: "'Who' for people as subject of the clause."
          },
          {
            id: 2,
            question: "The book ___ I'm reading is very interesting.",
            options: ["who", "which", "whose"],
            correctAnswer: "which",
            explanation: "'Which' for things."
          },
          {
            id: 3,
            question: "That's the woman ___ husband is a pilot.",
            options: ["who", "which", "whose"],
            correctAnswer: "whose",
            explanation: "'Whose' shows possession."
          },
          {
            id: 4,
            question: "This is the restaurant ___ we had our first date.",
            options: ["which", "where", "when"],
            correctAnswer: "where",
            explanation: "'Where' for places."
          },
          {
            id: 5,
            question: "I remember the day ___ I met you.",
            options: ["which", "where", "when"],
            correctAnswer: "when",
            explanation: "'When' for times."
          },
          {
            id: 6,
            question: "The movie ___ we watched last night was boring.",
            options: ["who", "which", "whose"],
            correctAnswer: "which",
            explanation: "'Which' (or 'that') for things."
          },
          {
            id: 7,
            question: "She's the girl ___ won the competition.",
            options: ["who", "which", "whose"],
            correctAnswer: "who",
            explanation: "'Who' for people as subject."
          },
          {
            id: 8,
            question: "The house ___ roof is red belongs to my uncle.",
            options: ["who", "which", "whose"],
            correctAnswer: "whose",
            explanation: "'Whose' for possession (the house's roof)."
          },
          {
            id: 9,
            question: "Is this the bag ___ you were looking for?",
            options: ["who", "which", "whose"],
            correctAnswer: "which",
            explanation: "'Which' (or 'that') for things."
          },
          {
            id: 10,
            question: "My sister, ___ lives in London, is visiting us.",
            options: ["who", "which", "that"],
            correctAnswer: "who",
            explanation: "Non-defining clause (with commas) - 'who' for people, not 'that'."
          }
        ]
      }
    ]
  },
  {
    id: 'gerunds-infinitives',
    titleEn: 'Gerunds vs Infinitives',
    titleFr: 'Gérondif vs Infinitif',
    explanationEn: `**Gerund** (-ing form used as a noun):
- Enjoy, finish, avoid, consider, suggest, keep, mind, practice + -ING
- I enjoy **swimming**. She finished **working**.

**Infinitive** (to + verb):
- Want, need, decide, hope, plan, promise, refuse, learn, offer + TO
- I want **to go**. She decided **to stay**.

**Both (same meaning):**
- Like, love, hate, prefer, start, begin, continue
- I like swimming / I like to swim. (same meaning)

**Both (DIFFERENT meanings):**
- STOP: He stopped smoking. (quit) vs He stopped to smoke. (paused in order to)
- REMEMBER: I remember locking the door. (memory of past) vs Remember to lock the door. (don't forget)
- TRY: Try eating less sugar. (experiment) vs Try to eat less. (make an effort)
- FORGET: I forgot meeting him. (no memory) vs I forgot to meet him. (didn't do it)

**After prepositions → always gerund:**
- interested in learning, good at swimming, instead of working`,
    explanationFr: `**Gérondif** (forme en -ing utilisée comme nom) :
- Enjoy, finish, avoid, consider, suggest, keep, mind, practice + -ING
- I enjoy **swimming**. She finished **working**.

**Infinitif** (to + verbe) :
- Want, need, decide, hope, plan, promise, refuse, learn, offer + TO
- I want **to go**. She decided **to stay**.

**Les deux (même sens) :**
- Like, love, hate, prefer, start, begin, continue
- I like swimming / I like to swim. (même sens)

**Les deux (sens DIFFÉRENT) :**
- STOP : He stopped smoking. (arrêter) vs He stopped to smoke. (s'arrêter pour)
- REMEMBER : I remember locking the door. (souvenir du passé) vs Remember to lock the door. (n'oublie pas)
- TRY : Try eating less sugar. (expérimenter) vs Try to eat less. (faire un effort)
- FORGET : I forgot meeting him. (pas de souvenir) vs I forgot to meet him. (je n'ai pas fait)

**Après les prépositions → toujours gérondif :**
- interested in learning, good at swimming, instead of working`,
    examples: [
      { en: "I enjoy **reading**. (gerund after enjoy)", fr: "J'aime **lire**. (gérondif après enjoy)" },
      { en: "I want **to travel**. (infinitive after want)", fr: "Je veux **voyager**. (infinitif après want)" },
      { en: "He stopped **smoking**. (quit the habit)", fr: "Il a arrêté de **fumer**. (abandonner l'habitude)" },
      { en: "He stopped **to smoke**. (paused to have a cigarette)", fr: "Il s'est arrêté pour **fumer**. (pause pour fumer)" }
    ],
    exercises: [
      {
        id: 124,
        title: "Gerunds vs Infinitives",
        description: "Choose the correct form: gerund (-ing) or infinitive (to + verb).",
        questions: [
          {
            id: 1,
            question: "I enjoy ___ to music.",
            options: ["listen", "listening", "to listen"],
            correctAnswer: "listening",
            explanation: "'Enjoy' is always followed by gerund (-ing)."
          },
          {
            id: 2,
            question: "She decided ___ a new car.",
            options: ["buy", "buying", "to buy"],
            correctAnswer: "to buy",
            explanation: "'Decide' is followed by infinitive."
          },
          {
            id: 3,
            question: "He stopped ___ because of his health.",
            options: ["smoke", "smoking", "to smoke"],
            correctAnswer: "smoking",
            explanation: "'Stop + gerund' = quit the habit."
          },
          {
            id: 4,
            question: "I want ___ English fluently.",
            options: ["speak", "speaking", "to speak"],
            correctAnswer: "to speak",
            explanation: "'Want' is followed by infinitive."
          },
          {
            id: 5,
            question: "Would you mind ___ the window?",
            options: ["open", "opening", "to open"],
            correctAnswer: "opening",
            explanation: "'Mind' is always followed by gerund."
          },
          {
            id: 6,
            question: "She's interested in ___ French.",
            options: ["learn", "learning", "to learn"],
            correctAnswer: "learning",
            explanation: "After prepositions (in), always use gerund."
          },
          {
            id: 7,
            question: "Remember ___ the door when you leave.",
            options: ["lock", "locking", "to lock"],
            correctAnswer: "to lock",
            explanation: "'Remember + infinitive' = don't forget to do something."
          },
          {
            id: 8,
            question: "I can't avoid ___ mistakes.",
            options: ["make", "making", "to make"],
            correctAnswer: "making",
            explanation: "'Avoid' is always followed by gerund."
          },
          {
            id: 9,
            question: "They promised ___ on time.",
            options: ["arrive", "arriving", "to arrive"],
            correctAnswer: "to arrive",
            explanation: "'Promise' is followed by infinitive."
          },
          {
            id: 10,
            question: "The door was stuck, so I tried ___ it harder, but nothing worked.",
            options: ["push", "pushing", "to push"],
            correctAnswer: "pushing",
            explanation: "'Try + gerund' = experiment with a different method. The context 'nothing worked' confirms trying various approaches."
          }
        ]
      }
    ]
  },
  {
    id: 'question-tags',
    titleEn: 'Question Tags',
    titleFr: 'Les Question Tags',
    explanationEn: `**Question tags** are mini-questions at the end of sentences to confirm information.

**Rules:**
- Positive statement → negative tag: You are French, **aren't you**?
- Negative statement → positive tag: You aren't French, **are you**?
- Use the same auxiliary/modal: She can swim, **can't she**?
- No auxiliary? Use do/does/did: You like coffee, **don't you**?

**Special cases:**
- I am → aren't I? (NOT amn't I): I'm late, **aren't I**?
- Let's → shall we?: Let's go, **shall we**?
- Imperative → will you/won't you?: Close the door, **will you**?
- There is/are: There's a problem, **isn't there**?
- Nobody/nothing (negative) → positive tag: Nobody called, **did they**?

**Intonation:**
- Rising intonation ↗ = genuine question (you don't know)
- Falling intonation ↘ = expecting agreement (you're pretty sure)`,
    explanationFr: `**Les question tags** sont des mini-questions à la fin des phrases pour confirmer une information.

**Règles :**
- Phrase positive → tag négatif : You are French, **aren't you**?
- Phrase négative → tag positif : You aren't French, **are you**?
- Utiliser le même auxiliaire/modal : She can swim, **can't she**?
- Pas d'auxiliaire ? Utiliser do/does/did : You like coffee, **don't you**?

**Cas spéciaux :**
- I am → aren't I? (PAS amn't I) : I'm late, **aren't I**?
- Let's → shall we? : Let's go, **shall we**?
- Impératif → will you/won't you? : Close the door, **will you**?
- There is/are : There's a problem, **isn't there**?
- Nobody/nothing (négatif) → tag positif : Nobody called, **did they**?

**Intonation :**
- Intonation montante ↗ = vraie question (vous ne savez pas)
- Intonation descendante ↘ = attente d'accord (vous êtes assez sûr)`,
    examples: [
      { en: "You speak English, **don't you**?", fr: "Tu parles anglais, **n'est-ce pas** ?" },
      { en: "She can't swim, **can she**?", fr: "Elle ne sait pas nager, **si** ?" },
      { en: "I'm right, **aren't I**?", fr: "J'ai raison, **n'est-ce pas** ?" },
      { en: "Let's have lunch, **shall we**?", fr: "Allons déjeuner, **d'accord** ?" }
    ],
    exercises: [
      {
        id: 125,
        title: "Question Tags",
        description: "Choose the correct question tag.",
        questions: [
          {
            id: 1,
            question: "You're coming to the party, ___?",
            options: ["are you", "aren't you", "don't you"],
            correctAnswer: "aren't you",
            explanation: "Positive statement (you're) → negative tag (aren't you)."
          },
          {
            id: 2,
            question: "She doesn't like coffee, ___?",
            options: ["does she", "doesn't she", "is she"],
            correctAnswer: "does she",
            explanation: "Negative statement → positive tag."
          },
          {
            id: 3,
            question: "They have finished, ___?",
            options: ["have they", "haven't they", "don't they"],
            correctAnswer: "haven't they",
            explanation: "Positive with 'have' → negative 'haven't they'."
          },
          {
            id: 4,
            question: "You can swim, ___?",
            options: ["can you", "can't you", "do you"],
            correctAnswer: "can't you",
            explanation: "Positive with modal 'can' → negative 'can't you'."
          },
          {
            id: 5,
            question: "I'm late, ___?",
            options: ["am I", "amn't I", "aren't I"],
            correctAnswer: "aren't I",
            explanation: "Special case: 'I am' uses 'aren't I' in the tag."
          },
          {
            id: 6,
            question: "Let's go for a walk, ___?",
            options: ["shall we", "will we", "do we"],
            correctAnswer: "shall we",
            explanation: "Special case: 'Let's' uses 'shall we'."
          },
          {
            id: 7,
            question: "He never calls, ___?",
            options: ["doesn't he", "does he", "is he"],
            correctAnswer: "does he",
            explanation: "'Never' is negative, so use positive tag."
          },
          {
            id: 8,
            question: "There are many people here, ___?",
            options: ["are there", "aren't there", "isn't there"],
            correctAnswer: "aren't there",
            explanation: "'There are' (positive) → 'aren't there' (negative)."
          },
          {
            id: 9,
            question: "You went to Paris last year, ___?",
            options: ["did you", "didn't you", "weren't you"],
            correctAnswer: "didn't you",
            explanation: "Past simple positive → 'didn't you'."
          },
          {
            id: 10,
            question: "Nobody came to the meeting, ___?",
            options: ["didn't they", "did they", "didn't nobody"],
            correctAnswer: "did they",
            explanation: "'Nobody' is negative, so use positive tag 'did they'."
          }
        ]
      }
    ]
  },
  {
    id: 'so-such',
    titleEn: 'So and Such',
    titleFr: 'So et Such',
    explanationEn: `**SO** and **SUCH** both mean "very" but are used differently.

**SO + adjective/adverb:**
- It was **so** cold!
- She speaks **so** quickly.
- SO + adjective + that: It was **so cold that** we stayed inside.

**SUCH + (a/an) + (adjective) + noun:**
- It was **such** a cold day!
- She is **such** a nice person.
- They are **such** nice people. (no article with plural)
- SUCH + noun + that: It was **such a cold day that** we stayed inside.

**Remember:**
- SO + adjective: so beautiful, so expensive, so tired
- SUCH + a/an + adjective + noun: such a beautiful day, such an expensive car
- SUCH + adjective + plural/uncountable noun: such nice people, such good advice

**Common expressions:**
- so much/many, so few/little (+ noun)
- such a lot of (+ noun)`,
    explanationFr: `**SO** et **SUCH** signifient tous deux "très/tellement" mais s'utilisent différemment.

**SO + adjectif/adverbe :**
- It was **so** cold! (C'était tellement froid !)
- She speaks **so** quickly. (Elle parle si vite.)
- SO + adjectif + that : It was **so cold that** we stayed inside.

**SUCH + (a/an) + (adjectif) + nom :**
- It was **such** a cold day! (C'était une journée si froide !)
- She is **such** a nice person. (C'est une personne si gentille.)
- They are **such** nice people. (pas d'article avec le pluriel)
- SUCH + nom + that : It was **such a cold day that** we stayed inside.

**À retenir :**
- SO + adjectif : so beautiful, so expensive, so tired
- SUCH + a/an + adjectif + nom : such a beautiful day, such an expensive car
- SUCH + adjectif + nom pluriel/indénombrable : such nice people, such good advice

**Expressions courantes :**
- so much/many, so few/little (+ nom)
- such a lot of (+ nom)`,
    examples: [
      { en: "The film was **so** boring!", fr: "Le film était **tellement** ennuyeux !" },
      { en: "It was **such** a boring film!", fr: "C'était un film **tellement** ennuyeux !" },
      { en: "I've never met **such** nice people.", fr: "Je n'ai jamais rencontré des gens **aussi** gentils." },
      { en: "It was **so** hot **that** I couldn't sleep.", fr: "Il faisait **tellement** chaud **que** je n'arrivais pas à dormir." }
    ],
    exercises: [
      {
        id: 126,
        title: "So and Such",
        description: "Choose 'so' or 'such'.",
        questions: [
          {
            id: 1,
            question: "The weather was ___ nice that we went to the beach.",
            options: ["so", "such", "such a"],
            correctAnswer: "so",
            explanation: "'So' + adjective (nice)."
          },
          {
            id: 2,
            question: "It was ___ nice day that we went to the beach.",
            options: ["so", "such", "such a"],
            correctAnswer: "such a",
            explanation: "'Such a' + adjective + singular noun."
          },
          {
            id: 3,
            question: "She is ___ talented!",
            options: ["so", "such", "such a"],
            correctAnswer: "so",
            explanation: "'So' + adjective (talented)."
          },
          {
            id: 4,
            question: "They are ___ good friends.",
            options: ["so", "such", "such a"],
            correctAnswer: "such",
            explanation: "'Such' + adjective + plural noun (no article)."
          },
          {
            id: 5,
            question: "I've never seen ___ beautiful sunset.",
            options: ["so", "such", "such a"],
            correctAnswer: "such a",
            explanation: "'Such a' + adjective + singular noun."
          },
          {
            id: 6,
            question: "Why are you ___ angry?",
            options: ["so", "such", "such a"],
            correctAnswer: "so",
            explanation: "'So' + adjective (angry)."
          },
          {
            id: 7,
            question: "He gave me ___ good advice.",
            options: ["so", "such", "such a"],
            correctAnswer: "such",
            explanation: "'Such' + adjective + uncountable noun (advice)."
          },
          {
            id: 8,
            question: "The test was ___ difficult that nobody passed.",
            options: ["so", "such", "such a"],
            correctAnswer: "so",
            explanation: "'So' + adjective + that clause."
          },
          {
            id: 9,
            question: "We had ___ wonderful time!",
            options: ["so", "such", "such a"],
            correctAnswer: "such a",
            explanation: "'Such a' + adjective + singular noun."
          },
          {
            id: 10,
            question: "There were ___ many people at the concert.",
            options: ["so", "such", "such a"],
            correctAnswer: "so",
            explanation: "'So many' (not 'such many') + plural noun."
          }
        ]
      }
    ]
  },
  {
    id: 'too-enough',
    titleEn: 'Too and Enough',
    titleFr: 'Too et Enough',
    explanationEn: `**TOO** = more than necessary (negative meaning)
**ENOUGH** = sufficient (can be positive or negative with "not")

**TOO + adjective/adverb:**
- This coffee is **too** hot. (I can't drink it)
- He drives **too** fast. (it's dangerous)
- TOO + adjective + to: He's **too young to** drive.
- TOO + adjective + for + person: It's **too difficult for** me.

**ENOUGH + noun (before):**
- I have **enough** money. (sufficient)
- There isn't **enough** time.

**Adjective/Adverb + ENOUGH (after):**
- He's **old enough** to drive. (sufficient age)
- She didn't run **fast enough**.
- Adjective + ENOUGH + to: She's **tall enough to** reach.

**TOO vs VERY:**
- very = high degree (neutral): The coffee is very hot. (but I can drink it)
- too = excessive (negative): The coffee is too hot. (I can't drink it)`,
    explanationFr: `**TOO** = plus que nécessaire (sens négatif)
**ENOUGH** = suffisant (peut être positif ou négatif avec "not")

**TOO + adjectif/adverbe :**
- This coffee is **too** hot. (Je ne peux pas le boire)
- He drives **too** fast. (c'est dangereux)
- TOO + adjectif + to : He's **too young to** drive.
- TOO + adjectif + for + personne : It's **too difficult for** me.

**ENOUGH + nom (avant) :**
- I have **enough** money. (suffisamment)
- There isn't **enough** time.

**Adjectif/Adverbe + ENOUGH (après) :**
- He's **old enough** to drive. (âge suffisant)
- She didn't run **fast enough**.
- Adjectif + ENOUGH + to : She's **tall enough to** reach.

**TOO vs VERY :**
- very = haut degré (neutre) : The coffee is very hot. (mais je peux le boire)
- too = excessif (négatif) : The coffee is too hot. (je ne peux pas le boire)`,
    examples: [
      { en: "This bag is **too** heavy. I can't carry it.", fr: "Ce sac est **trop** lourd. Je ne peux pas le porter." },
      { en: "He's **old enough** to vote.", fr: "Il est **assez** vieux pour voter." },
      { en: "I don't have **enough** time.", fr: "Je n'ai pas **assez** de temps." },
      { en: "It's **too** cold **to** go swimming.", fr: "Il fait **trop** froid **pour** aller nager." }
    ],
    exercises: [
      {
        id: 127,
        title: "Too and Enough",
        description: "Choose the correct option.",
        questions: [
          {
            id: 1,
            question: "This box is ___ heavy for me to lift.",
            options: ["too", "enough", "very"],
            correctAnswer: "too",
            explanation: "'Too' + adjective = excessive (can't lift)."
          },
          {
            id: 2,
            question: "She's ___ to understand the situation.",
            options: ["old too", "enough old", "old enough"],
            correctAnswer: "old enough",
            explanation: "Adjective + 'enough' (enough comes after)."
          },
          {
            id: 3,
            question: "I don't have ___ money to buy a car.",
            options: ["too", "enough", "too much"],
            correctAnswer: "enough",
            explanation: "'Enough' + noun = sufficient."
          },
          {
            id: 4,
            question: "The music is ___ loud. I can't hear you.",
            options: ["too", "enough", "very enough"],
            correctAnswer: "too",
            explanation: "'Too' + adjective = excessive."
          },
          {
            id: 5,
            question: "Is your coffee hot ___?",
            options: ["too", "enough", "much"],
            correctAnswer: "enough",
            explanation: "Adjective + 'enough' in questions."
          },
          {
            id: 6,
            question: "He's ___ young ___ drive a car.",
            options: ["too... to", "enough... to", "very... to"],
            correctAnswer: "too... to",
            explanation: "'Too + adjective + to' = excessively (negative result)."
          },
          {
            id: 7,
            question: "We have ___ food for everyone.",
            options: ["too", "enough", "too much"],
            correctAnswer: "enough",
            explanation: "'Enough' + noun (sufficient quantity)."
          },
          {
            id: 8,
            question: "She didn't work hard ___ to pass the exam.",
            options: ["too", "enough", "very"],
            correctAnswer: "enough",
            explanation: "Adverb + 'enough' (insufficient effort)."
          },
          {
            id: 9,
            question: "This room is ___ small for all of us.",
            options: ["too", "enough", "enough small"],
            correctAnswer: "too",
            explanation: "'Too' + adjective = insufficient space."
          },
          {
            id: 10,
            question: "Are you strong ___ to carry this?",
            options: ["too", "enough", "very"],
            correctAnswer: "enough",
            explanation: "Adjective + 'enough' in questions."
          }
        ]
      }
    ]
  },
  {
    id: 'some-any',
    titleEn: 'Some and Any',
    titleFr: 'Some et Any',
    explanationEn: `**SOME** and **ANY** are used with plural and uncountable nouns.

**SOME** - mainly in positive sentences:
- I have **some** friends in London.
- There is **some** milk in the fridge.
- Would you like **some** coffee? (offers)
- Can I have **some** water? (requests)

**ANY** - mainly in negative sentences and questions:
- I don't have **any** friends here.
- Is there **any** milk left?
- Do you have **any** questions?

**ANY in positive sentences** (meaning "it doesn't matter which"):
- You can call me **any** time.
- Take **any** seat you like.
- **Anyone** can learn to cook.

**Compounds:**
- SOME: something, someone/somebody, somewhere
- ANY: anything, anyone/anybody, anywhere
- Negative: nothing, no one/nobody, nowhere (= not anything, not anyone, not anywhere)`,
    explanationFr: `**SOME** et **ANY** s'utilisent avec les noms pluriels et indénombrables.

**SOME** - principalement dans les phrases positives :
- I have **some** friends in London.
- There is **some** milk in the fridge.
- Would you like **some** coffee? (offres)
- Can I have **some** water? (demandes)

**ANY** - principalement dans les phrases négatives et les questions :
- I don't have **any** friends here.
- Is there **any** milk left?
- Do you have **any** questions?

**ANY dans les phrases positives** (sens "n'importe lequel") :
- You can call me **any** time. (n'importe quand)
- Take **any** seat you like. (n'importe quel siège)
- **Anyone** can learn to cook. (n'importe qui)

**Composés :**
- SOME : something, someone/somebody, somewhere
- ANY : anything, anyone/anybody, anywhere
- Négatif : nothing, no one/nobody, nowhere`,
    examples: [
      { en: "I bought **some** apples.", fr: "J'ai acheté **des** pommes." },
      { en: "I don't have **any** money.", fr: "Je n'ai pas d'argent." },
      { en: "Would you like **some** tea?", fr: "Voulez-vous **du** thé ?" },
      { en: "**Anyone** can do it.", fr: "**N'importe qui** peut le faire." }
    ],
    exercises: [
      {
        id: 128,
        title: "Some and Any",
        description: "Choose 'some' or 'any'.",
        questions: [
          {
            id: 1,
            question: "There are ___ books on the table.",
            options: ["some", "any"],
            correctAnswer: "some",
            explanation: "Positive sentence → 'some'."
          },
          {
            id: 2,
            question: "I don't have ___ brothers or sisters.",
            options: ["some", "any"],
            correctAnswer: "any",
            explanation: "Negative sentence → 'any'."
          },
          {
            id: 3,
            question: "Would you like ___ more coffee?",
            options: ["some", "any"],
            correctAnswer: "some",
            explanation: "Offers use 'some'."
          },
          {
            id: 4,
            question: "Is there ___ milk in the fridge?",
            options: ["some", "any"],
            correctAnswer: "any",
            explanation: "Questions typically use 'any'."
          },
          {
            id: 5,
            question: "Can I have ___ water, please?",
            options: ["some", "any"],
            correctAnswer: "some",
            explanation: "Polite requests use 'some'."
          },
          {
            id: 6,
            question: "You can sit in ___ chair you like.",
            options: ["some", "any"],
            correctAnswer: "any",
            explanation: "'Any' = it doesn't matter which one."
          },
          {
            id: 7,
            question: "She didn't give me ___ information.",
            options: ["some", "any"],
            correctAnswer: "any",
            explanation: "Negative sentence → 'any'."
          },
          {
            id: 8,
            question: "I need ___ help with this project.",
            options: ["some", "any"],
            correctAnswer: "some",
            explanation: "Positive sentence → 'some'."
          },
          {
            id: 9,
            question: "Do you know ___ good restaurants nearby?",
            options: ["some", "any"],
            correctAnswer: "any",
            explanation: "Question → typically 'any'."
          },
          {
            id: 10,
            question: "___ can enter the competition. It's open to all.",
            options: ["Someone", "Anyone"],
            correctAnswer: "Anyone",
            explanation: "'Anyone' = any person, it doesn't matter who."
          }
        ]
      }
    ]
  },
  {
    id: 'wish-if-only',
    titleEn: 'Wish and If Only',
    titleFr: 'Wish et If Only',
    explanationEn: `**WISH** and **IF ONLY** express regret or desire for something different.
"If only" is more emphatic than "wish".

**Present wishes (wanting present to be different):**
- WISH/IF ONLY + past simple
- I **wish** I **had** more money. (but I don't)
- **If only** I **were** taller! (but I'm not)
- I **wish** I **could** speak French. (but I can't)

**Past wishes (regret about the past):**
- WISH/IF ONLY + past perfect
- I **wish** I **had studied** harder. (but I didn't)
- **If only** I **hadn't said** that! (but I did)

**Wishes about annoying habits/situations:**
- WISH + would + infinitive (for other people/things)
- I **wish** you **would** stop smoking.
- I **wish** it **would** stop raining.
- ⚠️ NOT: I wish I would... (use "I wish I could")

**Were vs Was:**
- Formal: I wish I **were**... / If only he **were**...
- Informal: I wish I **was**... / If only he **was**...`,
    explanationFr: `**WISH** et **IF ONLY** expriment le regret ou le désir que quelque chose soit différent.
"If only" est plus emphatique que "wish".

**Souhaits présents (vouloir que le présent soit différent) :**
- WISH/IF ONLY + prétérit
- I **wish** I **had** more money. (mais je n'en ai pas)
- **If only** I **were** taller! (mais je ne le suis pas)
- I **wish** I **could** speak French. (mais je ne peux pas)

**Souhaits passés (regret concernant le passé) :**
- WISH/IF ONLY + plus-que-parfait
- I **wish** I **had studied** harder. (mais je n'ai pas étudié)
- **If only** I **hadn't said** that! (mais je l'ai dit)

**Souhaits concernant des habitudes/situations agaçantes :**
- WISH + would + infinitif (pour les autres personnes/choses)
- I **wish** you **would** stop smoking.
- I **wish** it **would** stop raining.
- ⚠️ PAS : I wish I would... (utiliser "I wish I could")

**Were vs Was :**
- Formel : I wish I **were**... / If only he **were**...
- Informel : I wish I **was**... / If only he **was**...`,
    examples: [
      { en: "I **wish** I **had** a car. (present wish)", fr: "J'**aimerais** avoir une voiture. (souhait présent)" },
      { en: "**If only** I **had listened** to you! (past regret)", fr: "**Si seulement** je t'**avais écouté** ! (regret passé)" },
      { en: "I **wish** it **would** stop raining.", fr: "J'**aimerais** qu'il **arrête** de pleuvoir." },
      { en: "I **wish** I **were** younger.", fr: "J'**aimerais** être plus jeune." }
    ],
    exercises: [
      {
        id: 129,
        title: "Wish and If Only",
        description: "Choose the correct form.",
        questions: [
          {
            id: 1,
            question: "I wish I ___ more free time. (present wish)",
            options: ["have", "had", "would have"],
            correctAnswer: "had",
            explanation: "Present wish uses past simple."
          },
          {
            id: 2,
            question: "If only I ___ studied harder for the exam! (past regret)",
            options: ["have", "had", "would have"],
            correctAnswer: "had",
            explanation: "Past regret uses past perfect (had + past participle)."
          },
          {
            id: 3,
            question: "I wish you ___ making that noise. It's annoying!",
            options: ["stop", "stopped", "would stop"],
            correctAnswer: "would stop",
            explanation: "Wish + would for annoying habits (other people)."
          },
          {
            id: 4,
            question: "She wishes she ___ speak Spanish.",
            options: ["can", "could", "would"],
            correctAnswer: "could",
            explanation: "Present wish about ability uses 'could'."
          },
          {
            id: 5,
            question: "If only I ___ rich!",
            options: ["am", "was/were", "would be"],
            correctAnswer: "was/were",
            explanation: "Present wish uses past simple (were is formal)."
          },
          {
            id: 6,
            question: "I wish I ___ said that. It was stupid.",
            options: ["didn't", "hadn't", "wouldn't"],
            correctAnswer: "hadn't",
            explanation: "Past regret uses past perfect."
          },
          {
            id: 7,
            question: "He wishes he ___ taller.",
            options: ["is", "were", "would be"],
            correctAnswer: "were",
            explanation: "Present wish about unchangeable situation."
          },
          {
            id: 8,
            question: "I wish it ___ rain so much in this country.",
            options: ["doesn't", "didn't", "wouldn't"],
            correctAnswer: "didn't",
            explanation: "Present wish about general situation uses past simple."
          },
          {
            id: 9,
            question: "If only I ___ to the party last night!",
            options: ["went", "had gone", "would go"],
            correctAnswer: "had gone",
            explanation: "Past regret uses past perfect."
          },
          {
            id: 10,
            question: "I wish you ___ leave your clothes on the floor!",
            options: ["don't", "didn't", "wouldn't"],
            correctAnswer: "wouldn't",
            explanation: "Wish + would for annoying repeated behavior."
          }
        ]
      }
    ]
  },
  {
    id: 'make-vs-do',
    titleEn: 'Make vs Do',
    titleFr: 'Make vs Do',
    explanationEn: `**MAKE** and **DO** are often confused because both can mean "faire" in French. However, they're used differently in English.

**DO** is typically used for:
- Tasks, jobs, and work (do the housework, do homework, do a job)
- General activities without specifying what (do something, do nothing, do your best)
- Body and personal care (do your hair, do your nails, do exercise)
- With -ing words (do the shopping, do the cooking, do the cleaning)

**MAKE** is typically used for:
- Creating or producing something (make a cake, make coffee, make dinner)
- Causing a result or reaction (make a mistake, make noise, make someone happy)
- Plans and decisions (make a decision, make plans, make an appointment)
- Communication (make a phone call, make a speech, make a comment)
- Money (make money, make a profit, make a fortune)

**Common expressions:**
- DO: do well, do badly, do business, do damage, do a favor, do research
- MAKE: make friends, make progress, make an effort, make sense, make sure`,
    explanationFr: `**MAKE** et **DO** sont souvent confondus car tous deux peuvent signifier "faire" en français. Cependant, ils s'utilisent différemment en anglais.

**DO** s'utilise typiquement pour :
- Les tâches, travaux et emplois (do the housework, do homework, do a job)
- Les activités générales sans précision (do something, do nothing, do your best)
- Les soins corporels et personnels (do your hair, do your nails, do exercise)
- Avec les mots en -ing (do the shopping, do the cooking, do the cleaning)

**MAKE** s'utilise typiquement pour :
- Créer ou produire quelque chose (make a cake, make coffee, make dinner)
- Causer un résultat ou une réaction (make a mistake, make noise, make someone happy)
- Les plans et décisions (make a decision, make plans, make an appointment)
- La communication (make a phone call, make a speech, make a comment)
- L'argent (make money, make a profit, make a fortune)

**Expressions courantes :**
- DO : do well, do badly, do business, do damage, do a favor, do research
- MAKE : make friends, make progress, make an effort, make sense, make sure`,
    examples: [
      { en: "I need to **do** the housework before guests arrive.", fr: "Je dois **faire** le ménage avant l'arrivée des invités." },
      { en: "Can you **make** me a cup of tea?", fr: "Peux-tu me **faire** une tasse de thé ?" },
      { en: "She **made** a mistake in her calculation.", fr: "Elle **a fait** une erreur dans son calcul." },
      { en: "He **does** exercise every morning.", fr: "Il **fait** de l'exercice chaque matin." }
    ],
    exercises: [
      {
        id: 130,
        title: "Make vs Do",
        description: "Choose make or do.",
        questions: [
          {
            id: 1,
            question: "Can you ___ me a favor?",
            options: ["make", "do"],
            correctAnswer: "do",
            explanation: "'Do a favor' is a fixed expression."
          },
          {
            id: 2,
            question: "She ___ a lot of money in her new job.",
            options: ["makes", "does"],
            correctAnswer: "makes",
            explanation: "Make is used with money (earn/produce)."
          },
          {
            id: 3,
            question: "I need to ___ some research for my project.",
            options: ["make", "do"],
            correctAnswer: "do",
            explanation: "'Do research' is the correct collocation."
          },
          {
            id: 4,
            question: "Don't ___ noise! The baby is sleeping.",
            options: ["make", "do"],
            correctAnswer: "make",
            explanation: "Make is used for producing sounds (make noise)."
          },
          {
            id: 5,
            question: "I ___ my best to help you.",
            options: ["made", "did"],
            correctAnswer: "did",
            explanation: "'Do your best' is a fixed expression."
          },
          {
            id: 6,
            question: "She ___ an appointment with the doctor.",
            options: ["made", "did"],
            correctAnswer: "made",
            explanation: "Make is used for arrangements (make an appointment)."
          },
          {
            id: 7,
            question: "Who ___ the cooking in your family?",
            options: ["makes", "does"],
            correctAnswer: "does",
            explanation: "Do is used with -ing activities (do the cooking)."
          },
          {
            id: 8,
            question: "The company ___ business with several countries.",
            options: ["makes", "does"],
            correctAnswer: "does",
            explanation: "'Do business' is the correct expression."
          },
          {
            id: 9,
            question: "Let me ___ a suggestion.",
            options: ["make", "do"],
            correctAnswer: "make",
            explanation: "Make is used for communication (make a suggestion)."
          },
          {
            id: 10,
            question: "I'm trying to ___ progress with my English.",
            options: ["make", "do"],
            correctAnswer: "make",
            explanation: "'Make progress' means to improve."
          }
        ]
      }
    ]
  },
  {
    id: 'say-vs-tell',
    titleEn: 'Say vs Tell',
    titleFr: 'Say vs Tell',
    explanationEn: `**SAY** and **TELL** both involve communicating with words, but they're used differently.

**SAY** is used:
- To quote or report words directly or indirectly
- Without mentioning who you're speaking to (or with "to" + person)
- Say something / say that... / say "..."

**TELL** is used:
- With a person object (tell someone something)
- For giving information, instructions, or orders
- Tell someone (that)... / tell someone to do something

**Key difference:**
- SAY focuses on the words spoken
- TELL focuses on who receives the information

**Fixed expressions with TELL:**
- tell the truth, tell a lie, tell a story, tell a joke
- tell the time, tell the difference, tell someone's fortune

**Fixed expressions with SAY:**
- say hello/goodbye, say please/thank you, say sorry
- say a prayer, say a few words, say yes/no`,
    explanationFr: `**SAY** et **TELL** impliquent tous deux de communiquer avec des mots, mais ils s'utilisent différemment.

**SAY** s'utilise :
- Pour citer ou rapporter des paroles directement ou indirectement
- Sans mentionner à qui on parle (ou avec "to" + personne)
- Say something / say that... / say "..."

**TELL** s'utilise :
- Avec un complément d'objet personne (tell someone something)
- Pour donner des informations, instructions ou ordres
- Tell someone (that)... / tell someone to do something

**Différence clé :**
- SAY se concentre sur les mots prononcés
- TELL se concentre sur qui reçoit l'information

**Expressions figées avec TELL :**
- tell the truth, tell a lie, tell a story, tell a joke
- tell the time, tell the difference, tell someone's fortune

**Expressions figées avec SAY :**
- say hello/goodbye, say please/thank you, say sorry
- say a prayer, say a few words, say yes/no`,
    examples: [
      { en: "He **said** (that) he was tired.", fr: "Il **a dit** qu'il était fatigué." },
      { en: "He **told** me (that) he was tired.", fr: "Il m'**a dit** qu'il était fatigué." },
      { en: "She **said** hello to everyone.", fr: "Elle **a dit** bonjour à tout le monde." },
      { en: "Can you **tell** me the time?", fr: "Peux-tu me **dire** l'heure ?" }
    ],
    exercises: [
      {
        id: 131,
        title: "Say vs Tell",
        description: "Choose say or tell.",
        questions: [
          {
            id: 1,
            question: "She ___ me she was leaving.",
            options: ["said", "told"],
            correctAnswer: "told",
            explanation: "Tell + person object (me)."
          },
          {
            id: 2,
            question: "He ___ that he didn't agree.",
            options: ["said", "told"],
            correctAnswer: "said",
            explanation: "Say + that clause (no person object)."
          },
          {
            id: 3,
            question: "Can you ___ me the truth?",
            options: ["say", "tell"],
            correctAnswer: "tell",
            explanation: "'Tell the truth' is a fixed expression (+ person object)."
          },
          {
            id: 4,
            question: "Don't forget to ___ goodbye to your grandmother.",
            options: ["say", "tell"],
            correctAnswer: "say",
            explanation: "'Say goodbye' is a fixed expression."
          },
          {
            id: 5,
            question: "He ___ to me that he would be late.",
            options: ["said", "told"],
            correctAnswer: "said",
            explanation: "Say + to + person is correct."
          },
          {
            id: 6,
            question: "I can't ___ the difference between them.",
            options: ["say", "tell"],
            correctAnswer: "tell",
            explanation: "'Tell the difference' is a fixed expression."
          },
          {
            id: 7,
            question: "___ me a story, please!",
            options: ["Say", "Tell"],
            correctAnswer: "Tell",
            explanation: "'Tell a story' requires a person object."
          },
          {
            id: 8,
            question: "She always ___ what she thinks.",
            options: ["says", "tells"],
            correctAnswer: "says",
            explanation: "Say + what/something (no person object)."
          },
          {
            id: 9,
            question: "They ___ us to wait outside.",
            options: ["said", "told"],
            correctAnswer: "told",
            explanation: "Tell + person + to do something for instructions."
          },
          {
            id: 10,
            question: "What did she ___ about the meeting?",
            options: ["say", "tell"],
            correctAnswer: "say",
            explanation: "Say + about something (no person object)."
          }
        ]
      }
    ]
  },
  {
    id: 'reflexive-pronouns',
    titleEn: 'Reflexive Pronouns',
    titleFr: 'Pronoms Réfléchis',
    explanationEn: `**Reflexive pronouns** end in -self (singular) or -selves (plural) and refer back to the subject.

**Forms:**
- I → myself
- you (singular) → yourself
- he → himself
- she → herself
- it → itself
- we → ourselves
- you (plural) → yourselves
- they → themselves

**Uses:**
1. When subject and object are the same person:
   - I hurt **myself**. (I hurt me)
   - She taught **herself** to play piano.

2. For emphasis (emphatic pronouns):
   - I'll do it **myself**! (I, and no one else)
   - The president **himself** came to the meeting.

3. With "by" to mean "alone":
   - He lives by **himself**. (alone)
   - Did you make this by **yourself**?

**Common expressions:**
- enjoy yourself, behave yourself, help yourself, make yourself at home
- introduce yourself, express yourself, believe in yourself`,
    explanationFr: `**Les pronoms réfléchis** se terminent en -self (singulier) ou -selves (pluriel) et renvoient au sujet.

**Formes :**
- I → myself
- you (singulier) → yourself
- he → himself
- she → herself
- it → itself
- we → ourselves
- you (pluriel) → yourselves
- they → themselves

**Utilisations :**
1. Quand le sujet et l'objet sont la même personne :
   - I hurt **myself**. (Je me suis blessé)
   - She taught **herself** to play piano. (Elle s'est appris le piano)

2. Pour l'emphase (pronoms emphatiques) :
   - I'll do it **myself**! (Moi, et personne d'autre)
   - The president **himself** came to the meeting.

3. Avec "by" pour signifier "seul" :
   - He lives by **himself**. (seul)
   - Did you make this by **yourself**? (tout seul)

**Expressions courantes :**
- enjoy yourself, behave yourself, help yourself, make yourself at home
- introduce yourself, express yourself, believe in yourself`,
    examples: [
      { en: "Be careful! You might hurt **yourself**.", fr: "Fais attention ! Tu pourrais te blesser." },
      { en: "I made this cake **myself**.", fr: "J'ai fait ce gâteau moi-même." },
      { en: "The children can dress **themselves**.", fr: "Les enfants peuvent s'habiller tout seuls." },
      { en: "She lives by **herself** in a small apartment.", fr: "Elle vit seule dans un petit appartement." }
    ],
    exercises: [
      {
        id: 132,
        title: "Reflexive Pronouns",
        description: "Choose the correct reflexive pronoun.",
        questions: [
          {
            id: 1,
            question: "I taught ___ to play guitar.",
            options: ["me", "myself", "I"],
            correctAnswer: "myself",
            explanation: "Subject (I) and object are the same person."
          },
          {
            id: 2,
            question: "Be careful with that knife! You'll cut ___.",
            options: ["you", "yourself", "yourselves"],
            correctAnswer: "yourself",
            explanation: "Singular 'you' needs 'yourself'."
          },
          {
            id: 3,
            question: "The children made the decorations ___.",
            options: ["theirselves", "themselves", "themself"],
            correctAnswer: "themselves",
            explanation: "Plural subject 'children' needs 'themselves'."
          },
          {
            id: 4,
            question: "Help ___ to some cake!",
            options: ["you", "yourself", "yourselves"],
            correctAnswer: "yourself",
            explanation: "'Help yourself' is a polite invitation (singular)."
          },
          {
            id: 5,
            question: "The cat is cleaning ___.",
            options: ["it", "itself", "himself"],
            correctAnswer: "itself",
            explanation: "'Cat' (it) needs 'itself'."
          },
          {
            id: 6,
            question: "We really enjoyed ___ at the party.",
            options: ["us", "ourself", "ourselves"],
            correctAnswer: "ourselves",
            explanation: "'We' needs 'ourselves' (plural)."
          },
          {
            id: 7,
            question: "Did you paint this picture by ___?",
            options: ["you", "yourself", "your own"],
            correctAnswer: "yourself",
            explanation: "'By yourself' means alone/without help."
          },
          {
            id: 8,
            question: "She looked at ___ in the mirror.",
            options: ["her", "herself", "hers"],
            correctAnswer: "herself",
            explanation: "Subject (she) and object are the same person."
          },
          {
            id: 9,
            question: "The machine turns ___ off automatically.",
            options: ["it", "itself", "its"],
            correctAnswer: "itself",
            explanation: "The machine does the action to itself."
          },
          {
            id: 10,
            question: "Let me introduce ___. I'm Sarah.",
            options: ["me", "myself", "mine"],
            correctAnswer: "myself",
            explanation: "'Introduce myself' - formal self-introduction."
          }
        ]
      }
    ]
  },
  {
    id: 'subject-object-pronouns',
    titleEn: 'Subject and Object Pronouns',
    titleFr: 'Pronoms Sujets et Compléments',
    explanationEn: `**Subject pronouns** replace the subject of a sentence (who does the action).
**Object pronouns** replace the object of a sentence (who receives the action).

**Subject pronouns:** I, you, he, she, it, we, they
**Object pronouns:** me, you, him, her, it, us, them

**Subject pronouns** come BEFORE the verb:
- **I** love chocolate.
- **She** is my sister.
- **They** work here.

**Object pronouns** come AFTER the verb or preposition:
- Call **me** later.
- I saw **him** yesterday.
- This is for **you**.

**Common mistakes:**
- ❌ Me and John went to the shop. → ✅ **John and I** went to the shop.
- ❌ Between you and I → ✅ Between you and **me** (after preposition)
- ❌ Him is tall. → ✅ **He** is tall.

**Tip:** When in doubt with "X and I" vs "X and me", remove "X and" to test:
- John and I/me went... → I went ✓ / Me went ✗ → "John and I"`,
    explanationFr: `**Les pronoms sujets** remplacent le sujet de la phrase (qui fait l'action).
**Les pronoms compléments** remplacent l'objet de la phrase (qui reçoit l'action).

**Pronoms sujets :** I, you, he, she, it, we, they
**Pronoms compléments :** me, you, him, her, it, us, them

**Les pronoms sujets** viennent AVANT le verbe :
- **I** love chocolate. (J'aime le chocolat)
- **She** is my sister. (Elle est ma sœur)
- **They** work here. (Ils travaillent ici)

**Les pronoms compléments** viennent APRÈS le verbe ou la préposition :
- Call **me** later. (Appelle-moi plus tard)
- I saw **him** yesterday. (Je l'ai vu hier)
- This is for **you**. (C'est pour toi)

**Erreurs courantes :**
- ❌ Me and John went to the shop. → ✅ **John and I** went to the shop.
- ❌ Between you and I → ✅ Between you and **me** (après préposition)
- ❌ Him is tall. → ✅ **He** is tall.

**Astuce :** En cas de doute avec "X and I" vs "X and me", enlevez "X and" pour tester :
- John and I/me went... → I went ✓ / Me went ✗ → "John and I"`,
    examples: [
      { en: "**I** love **her** and **she** loves **me**.", fr: "**Je** l'aime et **elle** m'aime." },
      { en: "**They** invited **us** to **their** party.", fr: "**Ils** nous ont invités à leur fête." },
      { en: "**He** gave the book to **her**.", fr: "**Il** lui a donné le livre." },
      { en: "My brother and **I** went shopping.", fr: "Mon frère et **moi** sommes allés faire du shopping." }
    ],
    exercises: [
      {
        id: 133,
        title: "Subject and Object Pronouns",
        description: "Choose the correct pronoun.",
        questions: [
          {
            id: 1,
            question: "___ is my best friend.",
            options: ["Her", "She", "Hers"],
            correctAnswer: "She",
            explanation: "Subject pronoun needed before the verb 'is'."
          },
          {
            id: 2,
            question: "Please call ___ when you arrive.",
            options: ["I", "me", "myself"],
            correctAnswer: "me",
            explanation: "Object pronoun needed after the verb 'call'."
          },
          {
            id: 3,
            question: "John and ___ went to the cinema.",
            options: ["me", "I", "myself"],
            correctAnswer: "I",
            explanation: "Subject pronoun needed (test: 'I went' not 'me went')."
          },
          {
            id: 4,
            question: "The teacher spoke to Sarah and ___.",
            options: ["I", "me", "myself"],
            correctAnswer: "me",
            explanation: "Object pronoun after 'to' (test: 'spoke to me')."
          },
          {
            id: 5,
            question: "Between you and ___, I don't like him.",
            options: ["I", "me", "myself"],
            correctAnswer: "me",
            explanation: "Object pronoun after the preposition 'between'."
          },
          {
            id: 6,
            question: "___ and his wife are coming to dinner.",
            options: ["Him", "He", "His"],
            correctAnswer: "He",
            explanation: "Subject pronoun needed before the verb 'are coming'."
          },
          {
            id: 7,
            question: "I saw ___ at the supermarket yesterday.",
            options: ["they", "them", "their"],
            correctAnswer: "them",
            explanation: "Object pronoun needed after the verb 'saw'."
          },
          {
            id: 8,
            question: "This present is for ___.",
            options: ["she", "her", "hers"],
            correctAnswer: "her",
            explanation: "Object pronoun after the preposition 'for'."
          },
          {
            id: 9,
            question: "___ students need to work harder.",
            options: ["Us", "We", "Our"],
            correctAnswer: "We",
            explanation: "Subject pronoun needed before the noun 'students'."
          },
          {
            id: 10,
            question: "My parents gave my sister and ___ a car.",
            options: ["I", "me", "myself"],
            correctAnswer: "me",
            explanation: "Object pronoun (indirect object of 'gave')."
          }
        ]
      }
    ]
  },
  {
    id: 'possessive-adjectives',
    titleEn: 'Possessive Adjectives',
    titleFr: 'Adjectifs Possessifs',
    explanationEn: `**Possessive adjectives** show ownership and come BEFORE a noun.

**Forms:**
- I → **my** (my book)
- you → **your** (your car)
- he → **his** (his phone)
- she → **her** (her bag)
- it → **its** (its tail)
- we → **our** (our house)
- they → **their** (their children)

**Key rules:**
1. Possessive adjectives are always followed by a noun:
   - This is **my** book. ✓
   - This is **my**. ✗ (need "mine" without noun)

2. They don't change for singular/plural nouns:
   - **my** book / **my** books
   - **her** child / **her** children

3. **Its vs It's:**
   - **its** = possessive (The dog wagged **its** tail)
   - **it's** = it is/it has (It's raining)

4. **Their vs There vs They're:**
   - **their** = possessive (**Their** house is big)
   - **there** = place (over **there**)
   - **they're** = they are (**They're** happy)`,
    explanationFr: `**Les adjectifs possessifs** indiquent la possession et viennent AVANT un nom.

**Formes :**
- I → **my** (mon/ma/mes)
- you → **your** (ton/ta/tes, votre/vos)
- he → **his** (son/sa/ses - à lui)
- she → **her** (son/sa/ses - à elle)
- it → **its** (son/sa/ses - pour les choses/animaux)
- we → **our** (notre/nos)
- they → **their** (leur/leurs)

**Règles clés :**
1. Les adjectifs possessifs sont toujours suivis d'un nom :
   - This is **my** book. ✓
   - This is **my**. ✗ (il faut "mine" sans nom)

2. Ils ne changent pas selon le singulier/pluriel du nom :
   - **my** book / **my** books
   - **her** child / **her** children

3. **Its vs It's :**
   - **its** = possessif (The dog wagged **its** tail)
   - **it's** = it is/it has (It's raining)

4. **Their vs There vs They're :**
   - **their** = possessif (**Their** house is big)
   - **there** = lieu (over **there**)
   - **they're** = they are (**They're** happy)`,
    examples: [
      { en: "I love **my** job.", fr: "J'aime **mon** travail." },
      { en: "She forgot **her** keys.", fr: "Elle a oublié **ses** clés." },
      { en: "The cat is licking **its** paw.", fr: "Le chat lèche **sa** patte." },
      { en: "**Their** children go to **our** school.", fr: "**Leurs** enfants vont à **notre** école." }
    ],
    exercises: [
      {
        id: 134,
        title: "Possessive Adjectives",
        description: "Choose the correct possessive adjective.",
        questions: [
          {
            id: 1,
            question: "I can't find ___ keys anywhere.",
            options: ["me", "my", "mine"],
            correctAnswer: "my",
            explanation: "Possessive adjective 'my' before noun 'keys'."
          },
          {
            id: 2,
            question: "She loves ___ new job.",
            options: ["she", "her", "hers"],
            correctAnswer: "her",
            explanation: "Possessive adjective 'her' before noun 'job'."
          },
          {
            id: 3,
            question: "The dog is wagging ___ tail.",
            options: ["it's", "its", "his"],
            correctAnswer: "its",
            explanation: "'Its' (no apostrophe) is the possessive for 'it'."
          },
          {
            id: 4,
            question: "We should clean ___ room before Mom gets home.",
            options: ["we", "our", "ours"],
            correctAnswer: "our",
            explanation: "Possessive adjective 'our' before noun 'room'."
          },
          {
            id: 5,
            question: "They invited all ___ friends to the party.",
            options: ["they", "their", "theirs"],
            correctAnswer: "their",
            explanation: "Possessive adjective 'their' before noun 'friends'."
          },
          {
            id: 6,
            question: "John forgot ___ wallet at home.",
            options: ["he", "him", "his"],
            correctAnswer: "his",
            explanation: "Possessive adjective 'his' for male person."
          },
          {
            id: 7,
            question: "Is this ___ pen? - Yes, it's mine.",
            options: ["you", "your", "yours"],
            correctAnswer: "your",
            explanation: "Possessive adjective 'your' before noun 'pen'."
          },
          {
            id: 8,
            question: "The company changed ___ logo last year.",
            options: ["it's", "its", "their"],
            correctAnswer: "its",
            explanation: "'Its' for things/organizations (no apostrophe)."
          },
          {
            id: 9,
            question: "I need to wash ___ hair.",
            options: ["me", "my", "mine"],
            correctAnswer: "my",
            explanation: "Possessive adjective 'my' before noun 'hair'."
          },
          {
            id: 10,
            question: "___ house is bigger than ours.",
            options: ["They", "Their", "Theirs"],
            correctAnswer: "Their",
            explanation: "Possessive adjective 'Their' before noun 'house'."
          }
        ]
      }
    ]
  },
  {
    id: 'possessive-pronouns',
    titleEn: 'Possessive Pronouns',
    titleFr: 'Pronoms Possessifs',
    explanationEn: `**Possessive pronouns** replace a possessive adjective + noun. They stand ALONE without a noun.

**Forms:**
- my → **mine**
- your → **yours**
- his → **his** (same form)
- her → **hers**
- its → (rarely used)
- our → **ours**
- their → **theirs**

**Usage:**
- Possessive adjective + noun: This is **my** book.
- Possessive pronoun (alone): This book is **mine**.

**Key difference:**
- **my/your/his/her/our/their** + NOUN
- **mine/yours/his/hers/ours/theirs** = NO noun after

**Common patterns:**
- Is this yours? - Yes, it's **mine**.
- Whose car is that? - It's **theirs**.
- A friend of **mine** (= one of my friends)
- That's **none of your business** (fixed expression)

**Note:** There is no possessive pronoun for "it" - we don't say "its" as a pronoun.`,
    explanationFr: `**Les pronoms possessifs** remplacent un adjectif possessif + nom. Ils s'utilisent SEULS sans nom.

**Formes :**
- my → **mine** (le mien, la mienne, les miens, les miennes)
- your → **yours** (le tien, le vôtre...)
- his → **his** (le sien - à lui)
- her → **hers** (le sien - à elle)
- its → (rarement utilisé)
- our → **ours** (le nôtre, les nôtres)
- their → **theirs** (le leur, les leurs)

**Utilisation :**
- Adjectif possessif + nom : This is **my** book.
- Pronom possessif (seul) : This book is **mine**.

**Différence clé :**
- **my/your/his/her/our/their** + NOM
- **mine/yours/his/hers/ours/theirs** = PAS de nom après

**Structures courantes :**
- Is this yours? - Yes, it's **mine**.
- Whose car is that? - It's **theirs**.
- A friend of **mine** (= un de mes amis)
- That's **none of your business** (expression figée)

**Note :** Il n'y a pas de pronom possessif pour "it".`,
    examples: [
      { en: "This bag is **mine**, not yours.", fr: "Ce sac est **le mien**, pas le tien." },
      { en: "Is this phone **yours**?", fr: "Ce téléphone est-il **le tien** ?" },
      { en: "Their house is big, but **ours** is bigger.", fr: "Leur maison est grande, mais **la nôtre** est plus grande." },
      { en: "A friend of **mine** told me the news.", fr: "Un de **mes** amis m'a dit la nouvelle." }
    ],
    exercises: [
      {
        id: 135,
        title: "Possessive Pronouns",
        description: "Choose the correct possessive pronoun.",
        questions: [
          {
            id: 1,
            question: "This umbrella isn't mine. Is it ___?",
            options: ["your", "yours", "you"],
            correctAnswer: "yours",
            explanation: "Possessive pronoun 'yours' stands alone (no noun after)."
          },
          {
            id: 2,
            question: "I forgot my pen. Can I borrow ___?",
            options: ["your", "yours", "you're"],
            correctAnswer: "yours",
            explanation: "Possessive pronoun replaces 'your pen'."
          },
          {
            id: 3,
            question: "Her car is red. ___ is blue.",
            options: ["My", "Mine", "Me"],
            correctAnswer: "Mine",
            explanation: "'Mine' replaces 'My car'."
          },
          {
            id: 4,
            question: "Whose keys are these? - They're ___.",
            options: ["her", "hers", "she"],
            correctAnswer: "hers",
            explanation: "Possessive pronoun 'hers' stands alone."
          },
          {
            id: 5,
            question: "Our garden is small, but ___ is huge.",
            options: ["their", "theirs", "them"],
            correctAnswer: "theirs",
            explanation: "'Theirs' replaces 'their garden'."
          },
          {
            id: 6,
            question: "I met a friend of ___ at the party.",
            options: ["him", "his", "he"],
            correctAnswer: "his",
            explanation: "'A friend of his' = one of his friends."
          },
          {
            id: 7,
            question: "This seat is taken. That one is ___.",
            options: ["our", "ours", "us"],
            correctAnswer: "ours",
            explanation: "Possessive pronoun 'ours' replaces 'our seat'."
          },
          {
            id: 8,
            question: "Is this laptop ___ or your brother's?",
            options: ["your", "yours", "you"],
            correctAnswer: "yours",
            explanation: "Possessive pronoun needed (no noun follows)."
          },
          {
            id: 9,
            question: "My phone is broken. Can I use ___?",
            options: ["her", "hers", "she's"],
            correctAnswer: "hers",
            explanation: "'Hers' replaces 'her phone'."
          },
          {
            id: 10,
            question: "That idea was ___, not mine.",
            options: ["your", "yours", "you're"],
            correctAnswer: "yours",
            explanation: "Possessive pronoun 'yours' stands alone."
          }
        ]
      }
    ]
  },
  {
    id: 'either-neither',
    titleEn: 'Either / Neither',
    titleFr: 'Either / Neither',
    explanationEn: `**EITHER** and **NEITHER** are used to talk about two things or people.

**EITHER** (one OR the other):
- **Either** = one or the other (of two)
- **Either...or** = one or the other option
- "Would you like tea or coffee?" - "**Either** is fine." (both are OK)

**NEITHER** (not one AND not the other):
- **Neither** = not one and not the other (of two)
- **Neither...nor** = not the first and not the second
- "Do you want tea or coffee?" - "**Neither**, thanks." (I don't want any)

**Agreement expressions:**
- A: "I love pizza." B: "**Me too**" / "**So do I**"
- A: "I don't like spiders." B: "**Me neither**" / "**Neither do I**"

**Verb agreement:**
- Either of them **is** correct. (formal: singular)
- Neither of them **has** arrived. (formal: singular)
- In informal speech, plural is often used.

**Position:**
- Neither/Either + singular noun: **Neither** option works.
- Neither/Either + of + plural noun: **Neither of** the options works.`,
    explanationFr: `**EITHER** et **NEITHER** s'utilisent pour parler de deux choses ou personnes.

**EITHER** (l'un OU l'autre) :
- **Either** = l'un ou l'autre (parmi deux)
- **Either...or** = l'une ou l'autre option
- "Would you like tea or coffee?" - "**Either** is fine." (les deux me vont)

**NEITHER** (ni l'un NI l'autre) :
- **Neither** = ni l'un ni l'autre (parmi deux)
- **Neither...nor** = pas le premier et pas le second
- "Do you want tea or coffee?" - "**Neither**, thanks." (je n'en veux aucun)

**Expressions d'accord :**
- A: "I love pizza." B: "**Me too**" / "**So do I**" (Moi aussi)
- A: "I don't like spiders." B: "**Me neither**" / "**Neither do I**" (Moi non plus)

**Accord du verbe :**
- Either of them **is** correct. (formel : singulier)
- Neither of them **has** arrived. (formel : singulier)
- Dans le langage informel, le pluriel est souvent utilisé.

**Position :**
- Neither/Either + nom singulier : **Neither** option works.
- Neither/Either + of + nom pluriel : **Neither of** the options works.`,
    examples: [
      { en: "**Either** answer is acceptable.", fr: "L'une ou l'autre réponse est acceptable." },
      { en: "**Neither** of them speaks French.", fr: "Ni l'un ni l'autre ne parle français." },
      { en: "You can have **either** tea **or** coffee.", fr: "Tu peux avoir soit du thé soit du café." },
      { en: "\"I don't like horror films.\" \"**Me neither**.\"", fr: "\"Je n'aime pas les films d'horreur.\" \"**Moi non plus**.\"" }
    ],
    exercises: [
      {
        id: 136,
        title: "Either / Neither",
        description: "Choose the correct word.",
        questions: [
          {
            id: 1,
            question: "___ of the two answers is correct.",
            options: ["Either", "Neither", "Both"],
            correctAnswer: "Either",
            explanation: "Either = one or the other is correct."
          },
          {
            id: 2,
            question: "I don't like spinach. - ___.",
            options: ["Me too", "Me neither", "So do I"],
            correctAnswer: "Me neither",
            explanation: "'Me neither' agrees with a negative statement."
          },
          {
            id: 3,
            question: "___ John ___ Mary came to the party. It was empty!",
            options: ["Either...or", "Neither...nor", "Both...and"],
            correctAnswer: "Neither...nor",
            explanation: "Neither...nor = not one and not the other came."
          },
          {
            id: 4,
            question: "You can choose ___ the red one ___ the blue one.",
            options: ["either...or", "neither...nor", "both...and"],
            correctAnswer: "either...or",
            explanation: "Either...or for choosing one of two options."
          },
          {
            id: 5,
            question: "I haven't seen that film. - ___ have I.",
            options: ["So", "Neither", "Either"],
            correctAnswer: "Neither",
            explanation: "'Neither have I' agrees with negative (haven't)."
          },
          {
            id: 6,
            question: "___ of the restaurants was open. We couldn't eat out.",
            options: ["Either", "Neither", "Both"],
            correctAnswer: "Neither",
            explanation: "Neither = not one and not the other was open."
          },
          {
            id: 7,
            question: "I can't swim. - ___ can my brother.",
            options: ["So", "Neither", "Either"],
            correctAnswer: "Neither",
            explanation: "'Neither can...' agrees with negative (can't)."
          },
          {
            id: 8,
            question: "Which shirt do you prefer? - ___ is nice. I'll take both!",
            options: ["Either", "Neither", "None"],
            correctAnswer: "Either",
            explanation: "Either = both are nice (one or the other)."
          },
          {
            id: 9,
            question: "She ___ called ___ texted me. I'm worried.",
            options: ["either...or", "neither...nor", "both...and"],
            correctAnswer: "neither...nor",
            explanation: "Neither...nor = she didn't call AND didn't text."
          },
          {
            id: 10,
            question: "I love chocolate. - ___!",
            options: ["Me too", "Me neither", "Neither do I"],
            correctAnswer: "Me too",
            explanation: "'Me too' agrees with a positive statement."
          }
        ]
      }
    ]
  },
  {
    id: 'will-vs-going-to',
    titleEn: 'Will vs Going to',
    titleFr: 'Will vs Going to',
    explanationEn: `**WILL** and **GOING TO** both express the future, but they have different uses.

**WILL** is used for:
- Spontaneous decisions made at the moment of speaking: "I'll help you with that."
- Predictions based on opinion/belief: "I think it will rain tomorrow."
- Promises and offers: "I'll call you later."
- Facts about the future: "The sun will rise at 6 AM."

**GOING TO** is used for:
- Plans and intentions decided before speaking: "I'm going to visit Paris next month."
- Predictions based on present evidence: "Look at those clouds! It's going to rain."
- Something that is about to happen: "She's going to have a baby."

**Key difference:**
- "I'll have pizza." (deciding NOW)
- "I'm going to have pizza." (already decided before)`,
    explanationFr: `**WILL** et **GOING TO** expriment tous deux le futur, mais avec des usages différents.

**WILL** s'utilise pour :
- Les décisions spontanées prises au moment de parler : "I'll help you with that."
- Les prédictions basées sur une opinion : "I think it will rain tomorrow."
- Les promesses et offres : "I'll call you later."
- Les faits futurs : "The sun will rise at 6 AM."

**GOING TO** s'utilise pour :
- Les plans et intentions décidés avant de parler : "I'm going to visit Paris next month."
- Les prédictions basées sur des preuves présentes : "Look at those clouds! It's going to rain."
- Quelque chose qui va se produire très bientôt : "She's going to have a baby."

**Différence clé :**
- "I'll have pizza." (je décide MAINTENANT)
- "I'm going to have pizza." (j'avais déjà décidé)`,
    examples: [
      { en: "The phone is ringing! I**'ll** answer it. (spontaneous)", fr: "Le téléphone sonne ! Je **vais** répondre. (spontané)" },
      { en: "I**'m going to** study medicine next year. (plan)", fr: "Je **vais** étudier la médecine l'année prochaine. (plan)" },
      { en: "Look out! You**'re going to** fall! (evidence)", fr: "Attention ! Tu **vas** tomber ! (preuve visible)" },
      { en: "I think she **will** love this gift. (opinion)", fr: "Je pense qu'elle **va** adorer ce cadeau. (opinion)" }
    ],
    exercises: [
      {
        id: 137,
        title: "Will vs Going to",
        description: "Choose the correct future form.",
        questions: [
          {
            id: 1,
            question: "I've decided. I ___ learn Spanish next year.",
            options: ["will", "am going to"],
            correctAnswer: "am going to",
            explanation: "Going to for a pre-planned intention."
          },
          {
            id: 2,
            question: "The phone is ringing. I ___ get it!",
            options: ["will", "am going to"],
            correctAnswer: "will",
            explanation: "Will for spontaneous decisions."
          },
          {
            id: 3,
            question: "Look at those dark clouds. It ___ rain.",
            options: ["will", "is going to"],
            correctAnswer: "is going to",
            explanation: "Going to for predictions based on present evidence."
          },
          {
            id: 4,
            question: "I think Brazil ___ win the World Cup.",
            options: ["will", "is going to"],
            correctAnswer: "will",
            explanation: "Will for predictions based on opinion."
          },
          {
            id: 5,
            question: "We've booked everything. We ___ travel to Japan in May.",
            options: ["will", "are going to"],
            correctAnswer: "are going to",
            explanation: "Going to for plans already made."
          },
          {
            id: 6,
            question: "Don't worry, I ___ help you with your homework.",
            options: ["will", "am going to"],
            correctAnswer: "will",
            explanation: "Will for offers and promises."
          },
          {
            id: 7,
            question: "Be careful! That ladder ___ fall!",
            options: ["will", "is going to"],
            correctAnswer: "is going to",
            explanation: "Going to for imminent events based on evidence."
          },
          {
            id: 8,
            question: "A: We need milk. B: OK, I ___ buy some on my way home.",
            options: ["will", "am going to"],
            correctAnswer: "will",
            explanation: "Will for decisions made at the moment of speaking."
          },
          {
            id: 9,
            question: "She ___ have a baby in March. She's 8 months pregnant.",
            options: ["will", "is going to"],
            correctAnswer: "is going to",
            explanation: "Going to for something certain based on present evidence."
          },
          {
            id: 10,
            question: "I promise I ___ never tell anyone your secret.",
            options: ["will", "am going to"],
            correctAnswer: "will",
            explanation: "Will for promises."
          }
        ]
      }
    ]
  },
  {
    id: 'much-many-lot',
    titleEn: 'Much, Many, A lot of',
    titleFr: 'Much, Many, A lot of',
    explanationEn: `**MUCH**, **MANY**, and **A LOT OF** express quantity.

**MUCH** is used with:
- Uncountable nouns (things we can't count)
- Usually in questions and negatives
- "How **much** money do you have?"
- "I don't have **much** time."

**MANY** is used with:
- Countable nouns (things we can count)
- Usually in questions and negatives
- "How **many** books did you read?"
- "There aren't **many** people here."

**A LOT OF / LOTS OF** is used with:
- Both countable AND uncountable nouns
- Usually in affirmative sentences
- "She has **a lot of** friends." (countable)
- "We have **a lot of** work to do." (uncountable)

**Note:** In formal English, "much" and "many" are also used in affirmatives.
**In spoken English:** "a lot of" is more natural in positive sentences.`,
    explanationFr: `**MUCH**, **MANY** et **A LOT OF** expriment la quantité.

**MUCH** s'utilise avec :
- Les noms indénombrables (ce qu'on ne peut pas compter)
- Généralement dans les questions et négations
- "How **much** money do you have?" (Combien d'argent ?)
- "I don't have **much** time." (Je n'ai pas beaucoup de temps.)

**MANY** s'utilise avec :
- Les noms dénombrables (ce qu'on peut compter)
- Généralement dans les questions et négations
- "How **many** books did you read?" (Combien de livres ?)
- "There aren't **many** people here." (Il n'y a pas beaucoup de gens.)

**A LOT OF / LOTS OF** s'utilise avec :
- Les noms dénombrables ET indénombrables
- Généralement dans les phrases affirmatives
- "She has **a lot of** friends." (dénombrable)
- "We have **a lot of** work to do." (indénombrable)

**À noter :** En anglais formel, "much" et "many" s'utilisent aussi dans les affirmatives.
**En anglais parlé :** "a lot of" est plus naturel dans les phrases positives.`,
    examples: [
      { en: "I don't have **much** money. (uncountable, negative)", fr: "Je n'ai pas beaucoup d'**argent**. (indénombrable, négatif)" },
      { en: "How **many** languages do you speak? (countable, question)", fr: "Combien de **langues** parles-tu ? (dénombrable, question)" },
      { en: "She has **a lot of** experience. (uncountable, positive)", fr: "Elle a beaucoup d'**expérience**. (indénombrable, positif)" },
      { en: "There are **a lot of** students in this class. (countable, positive)", fr: "Il y a beaucoup d'**étudiants** dans cette classe. (dénombrable, positif)" }
    ],
    exercises: [
      {
        id: 138,
        title: "Much, Many, A lot of",
        description: "Choose the correct quantifier.",
        questions: [
          {
            id: 1,
            question: "I don't have ___ time to finish this.",
            options: ["much", "many", "a lot"],
            correctAnswer: "much",
            explanation: "Much with uncountable noun (time) in negative."
          },
          {
            id: 2,
            question: "How ___ people came to the party?",
            options: ["much", "many", "a lot"],
            correctAnswer: "many",
            explanation: "Many with countable noun (people) in question."
          },
          {
            id: 3,
            question: "She earns ___ money as a lawyer.",
            options: ["much", "many", "a lot of"],
            correctAnswer: "a lot of",
            explanation: "A lot of in affirmative with uncountable noun."
          },
          {
            id: 4,
            question: "There aren't ___ chairs in this room.",
            options: ["much", "many", "a lot"],
            correctAnswer: "many",
            explanation: "Many with countable noun (chairs) in negative."
          },
          {
            id: 5,
            question: "How ___ sugar do you take in your coffee?",
            options: ["much", "many", "a lot"],
            correctAnswer: "much",
            explanation: "Much with uncountable noun (sugar) in question."
          },
          {
            id: 6,
            question: "He has ___ friends on social media.",
            options: ["much", "many", "a lot of"],
            correctAnswer: "a lot of",
            explanation: "A lot of in affirmative with countable noun."
          },
          {
            id: 7,
            question: "Is there ___ traffic on this road?",
            options: ["much", "many", "a lot"],
            correctAnswer: "much",
            explanation: "Much with uncountable noun (traffic) in question."
          },
          {
            id: 8,
            question: "We didn't see ___ tourists in the winter.",
            options: ["much", "many", "a lot"],
            correctAnswer: "many",
            explanation: "Many with countable noun (tourists) in negative."
          },
          {
            id: 9,
            question: "They drink ___ coffee every day.",
            options: ["much", "many", "a lot of"],
            correctAnswer: "a lot of",
            explanation: "A lot of in affirmative with uncountable noun."
          },
          {
            id: 10,
            question: "There isn't ___ information about this topic.",
            options: ["much", "many", "a lot"],
            correctAnswer: "much",
            explanation: "Much with uncountable noun (information) in negative."
          }
        ]
      }
    ]
  },
  {
    id: 'since-for',
    titleEn: 'Since vs For',
    titleFr: 'Since vs For',
    explanationEn: `**SINCE** and **FOR** both express duration, but they work differently.

**SINCE** is used with:
- A specific POINT in time (when something started)
- since Monday, since 2020, since I was a child, since 8 o'clock

**FOR** is used with:
- A PERIOD of time (how long)
- for two days, for a year, for ages, for a long time

**Common tenses:**
- Present Perfect: "I **have lived** here **since** 2010 / **for** 10 years."
- Past Perfect: "She **had worked** there **since** graduation / **for** 5 years."

**Memory trick:**
- **S**ince = **S**tarting point
- **F**or = **F**or how long (period)`,
    explanationFr: `**SINCE** et **FOR** expriment tous deux la durée, mais différemment.

**SINCE** s'utilise avec :
- Un POINT précis dans le temps (quand quelque chose a commencé)
- since Monday, since 2020, since I was a child, since 8 o'clock

**FOR** s'utilise avec :
- Une PÉRIODE de temps (combien de temps)
- for two days, for a year, for ages, for a long time

**Temps courants :**
- Present Perfect : "I **have lived** here **since** 2010 / **for** 10 years."
- Past Perfect : "She **had worked** there **since** graduation / **for** 5 years."

**Astuce mémorisation :**
- **S**ince = Point de départ (**S**tart)
- **F**or = Pendant combien de temps (**F**or how long)`,
    examples: [
      { en: "I've known her **since** 2015. (point in time)", fr: "Je la connais **depuis** 2015. (point dans le temps)" },
      { en: "I've known her **for** 9 years. (period)", fr: "Je la connais **depuis** 9 ans. (période)" },
      { en: "He's been waiting **since** 3 o'clock.", fr: "Il attend **depuis** 15h." },
      { en: "He's been waiting **for** two hours.", fr: "Il attend **depuis** deux heures." }
    ],
    exercises: [
      {
        id: 139,
        title: "Since vs For",
        description: "Choose the correct word.",
        questions: [
          {
            id: 1,
            question: "I've lived in this city ___ 2010.",
            options: ["since", "for"],
            correctAnswer: "since",
            explanation: "Since with a specific year (point in time)."
          },
          {
            id: 2,
            question: "She's been studying English ___ three years.",
            options: ["since", "for"],
            correctAnswer: "for",
            explanation: "For with a period of time (three years)."
          },
          {
            id: 3,
            question: "We haven't seen each other ___ Christmas.",
            options: ["since", "for"],
            correctAnswer: "since",
            explanation: "Since with a specific point in time (Christmas)."
          },
          {
            id: 4,
            question: "They've been married ___ a long time.",
            options: ["since", "for"],
            correctAnswer: "for",
            explanation: "For with a period (a long time)."
          },
          {
            id: 5,
            question: "He's worked here ___ he graduated.",
            options: ["since", "for"],
            correctAnswer: "since",
            explanation: "Since with a point when something started."
          },
          {
            id: 6,
            question: "I've been waiting ___ 45 minutes!",
            options: ["since", "for"],
            correctAnswer: "for",
            explanation: "For with a duration (45 minutes)."
          },
          {
            id: 7,
            question: "She's been a doctor ___ 1998.",
            options: ["since", "for"],
            correctAnswer: "since",
            explanation: "Since with a specific year."
          },
          {
            id: 8,
            question: "We've known each other ___ ages.",
            options: ["since", "for"],
            correctAnswer: "for",
            explanation: "For with 'ages' (a period of time)."
          },
          {
            id: 9,
            question: "He hasn't called ___ last Monday.",
            options: ["since", "for"],
            correctAnswer: "since",
            explanation: "Since with 'last Monday' (point in time)."
          },
          {
            id: 10,
            question: "I've had this car ___ over five years.",
            options: ["since", "for"],
            correctAnswer: "for",
            explanation: "For with a duration (five years)."
          }
        ]
      }
    ]
  },
  {
    id: 'been-gone',
    titleEn: 'Been vs Gone',
    titleFr: 'Been vs Gone',
    explanationEn: `**BEEN** and **GONE** are both past participles, but they mean different things.

**HAS/HAVE BEEN (to):**
- The person went somewhere and came BACK
- "She **has been** to Paris." (= She visited Paris and returned)
- Experience in life: "Have you ever **been** to Japan?"

**HAS/HAVE GONE (to):**
- The person went somewhere and is STILL THERE (not back yet)
- "She **has gone** to Paris." (= She's in Paris now, not here)
- Current absence: "Where's Tom?" "He **has gone** to the shops."

**Memory trick:**
- **BEEN** = **B**ack (visited and returned)
- **GONE** = **G**one away (still there)

**Note:** We say "have been TO" but "have gone TO" a place.`,
    explanationFr: `**BEEN** et **GONE** sont tous deux des participes passés, mais avec des sens différents.

**HAS/HAVE BEEN (to) :**
- La personne est allée quelque part et est REVENUE
- "She **has been** to Paris." (= Elle a visité Paris et est rentrée)
- Expérience dans la vie : "Have you ever **been** to Japan?"

**HAS/HAVE GONE (to) :**
- La personne est allée quelque part et y est ENCORE (pas encore revenue)
- "She **has gone** to Paris." (= Elle est à Paris maintenant, pas ici)
- Absence actuelle : "Where's Tom?" "He **has gone** to the shops."

**Astuce mémorisation :**
- **BEEN** = De retour (visité et revenu)
- **GONE** = Parti (encore là-bas)

**Note :** On dit "have been TO" et "have gone TO" un lieu.`,
    examples: [
      { en: "I **have been** to London three times. (experience, I'm back)", fr: "Je **suis allé** à Londres trois fois. (expérience, je suis revenu)" },
      { en: "She **has gone** to London. (she's there now)", fr: "Elle **est partie** à Londres. (elle y est maintenant)" },
      { en: "Where's Dad? He **has gone** to work.", fr: "Où est papa ? Il **est parti** au travail." },
      { en: "Have you ever **been** to Australia?", fr: "Es-tu déjà **allé** en Australie ?" }
    ],
    exercises: [
      {
        id: 140,
        title: "Been vs Gone",
        description: "Choose the correct word.",
        questions: [
          {
            id: 1,
            question: "Have you ever ___ to New York?",
            options: ["been", "gone"],
            correctAnswer: "been",
            explanation: "Been for life experience (visiting and returning)."
          },
          {
            id: 2,
            question: "Where's Sarah? She has ___ to the supermarket.",
            options: ["been", "gone"],
            correctAnswer: "gone",
            explanation: "Gone because she's still there (not back yet)."
          },
          {
            id: 3,
            question: "I've ___ to that restaurant many times. It's excellent!",
            options: ["been", "gone"],
            correctAnswer: "been",
            explanation: "Been for past visits (went and came back)."
          },
          {
            id: 4,
            question: "Tom has ___ to the doctor. He'll be back soon.",
            options: ["been", "gone"],
            correctAnswer: "gone",
            explanation: "Gone because he's currently at the doctor's."
          },
          {
            id: 5,
            question: "She's never ___ abroad before.",
            options: ["been", "gone"],
            correctAnswer: "been",
            explanation: "Been for life experience (traveling abroad)."
          },
          {
            id: 6,
            question: "My parents have ___ on holiday. They're in Spain.",
            options: ["been", "gone"],
            correctAnswer: "gone",
            explanation: "Gone because they're still on holiday."
          },
          {
            id: 7,
            question: "I've just ___ to the bank. Here's your money.",
            options: ["been", "gone"],
            correctAnswer: "been",
            explanation: "Been because the person has returned."
          },
          {
            id: 8,
            question: "Have your parents ___ home yet?",
            options: ["been", "gone"],
            correctAnswer: "gone",
            explanation: "Gone because asking if they've left/departed."
          },
          {
            id: 9,
            question: "We've ___ to that museum. It was amazing!",
            options: ["been", "gone"],
            correctAnswer: "been",
            explanation: "Been for completed visit (went and returned)."
          },
          {
            id: 10,
            question: "Sorry, Mr. Smith has ___ to lunch. Can you call back?",
            options: ["been", "gone"],
            correctAnswer: "gone",
            explanation: "Gone because he's currently out for lunch."
          }
        ]
      }
    ]
  },
  {
    id: 'few-little',
    titleEn: 'Few / A few, Little / A little',
    titleFr: 'Few / A few, Little / A little',
    explanationEn: `These words express small quantities but with different meanings.

**With COUNTABLE nouns (things we can count):**
- **FEW** = almost none (negative meaning)
  - "He has **few** friends." (= almost no friends, sad)
- **A FEW** = some, a small number (positive meaning)
  - "He has **a few** friends." (= some friends, that's good)

**With UNCOUNTABLE nouns (things we can't count):**
- **LITTLE** = almost none (negative meaning)
  - "There is **little** hope." (= almost no hope, pessimistic)
- **A LITTLE** = some, a small amount (positive meaning)
  - "There is **a little** hope." (= some hope, optimistic)

**Memory trick:**
- Without "a" = negative, almost nothing
- With "a" = positive, some amount

**Common mistakes:** Don't use "few" with uncountable nouns!
❌ few water → ✅ little water`,
    explanationFr: `Ces mots expriment de petites quantités mais avec des sens différents.

**Avec les noms DÉNOMBRABLES (qu'on peut compter) :**
- **FEW** = presque aucun (sens négatif)
  - "He has **few** friends." (= presque pas d'amis, triste)
- **A FEW** = quelques, un petit nombre (sens positif)
  - "He has **a few** friends." (= quelques amis, c'est bien)

**Avec les noms INDÉNOMBRABLES (qu'on ne peut pas compter) :**
- **LITTLE** = presque pas (sens négatif)
  - "There is **little** hope." (= presque pas d'espoir, pessimiste)
- **A LITTLE** = un peu (sens positif)
  - "There is **a little** hope." (= un peu d'espoir, optimiste)

**Astuce mémorisation :**
- Sans "a" = négatif, presque rien
- Avec "a" = positif, une certaine quantité

**Erreurs courantes :** N'utilisez pas "few" avec les noms indénombrables !
❌ few water → ✅ little water`,
    examples: [
      { en: "I have **few** options. (= almost no options, negative)", fr: "J'ai **peu** d'options. (= presque pas d'options, négatif)" },
      { en: "I have **a few** options. (= some options, positive)", fr: "J'ai **quelques** options. (= certaines options, positif)" },
      { en: "There's **little** time left. (= almost no time, negative)", fr: "Il reste **peu** de temps. (= presque pas de temps, négatif)" },
      { en: "There's **a little** time left. (= some time, positive)", fr: "Il reste **un peu** de temps. (= du temps, positif)" }
    ],
    exercises: [
      {
        id: 141,
        title: "Few / A few, Little / A little",
        description: "Choose the correct word.",
        questions: [
          {
            id: 1,
            question: "I have ___ money, so I can buy you lunch. (positive)",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "a little",
            explanation: "A little with uncountable (money), positive meaning."
          },
          {
            id: 2,
            question: "There are ___ eggs left. We need to buy more. (negative)",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "few",
            explanation: "Few with countable (eggs), negative meaning."
          },
          {
            id: 3,
            question: "She speaks ___ French - enough to order in a restaurant.",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "a little",
            explanation: "A little with uncountable (French), positive meaning."
          },
          {
            id: 4,
            question: "Very ___ people came to the meeting. It was disappointing.",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "few",
            explanation: "Few with countable (people), negative meaning."
          },
          {
            id: 5,
            question: "Could you give me ___ advice?",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "a little",
            explanation: "A little with uncountable (advice), polite request."
          },
          {
            id: 6,
            question: "I met ___ interesting people at the party.",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "a few",
            explanation: "A few with countable (people), positive meaning."
          },
          {
            id: 7,
            question: "There's ___ hope of finding survivors. (pessimistic)",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "little",
            explanation: "Little with uncountable (hope), negative meaning."
          },
          {
            id: 8,
            question: "I need ___ minutes to finish this.",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "a few",
            explanation: "A few with countable (minutes), positive meaning."
          },
          {
            id: 9,
            question: "He has ___ patience with children. He gets angry easily.",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "little",
            explanation: "Little with uncountable (patience), negative meaning."
          },
          {
            id: 10,
            question: "There are ___ good restaurants near here. Let me recommend one.",
            options: ["few", "a few", "little", "a little"],
            correctAnswer: "a few",
            explanation: "A few with countable (restaurants), positive meaning."
          }
        ]
      }
    ]
  },
  // === MEDIUM PRIORITY LESSONS ===
  {
    id: 'past-perfect-continuous',
    titleEn: 'Past Perfect Continuous',
    titleFr: 'Past Perfect Continu',
    explanationEn: `**PAST PERFECT CONTINUOUS** (had been + -ing) describes actions that were ongoing before another past action.

**Form:** Subject + had been + verb-ing

**Uses:**
- Duration of an activity before something in the past
  - "I **had been waiting** for 2 hours when she finally arrived."
- Cause of a past situation (explains why something was the case)
  - "He was tired because he **had been working** all day."
- Emphasize the duration/continuation of an action
  - "They **had been living** there for 10 years before they moved."

**Key signal words:**
- for, since, all day/week, how long
- when, before, by the time

**Difference from Past Perfect:**
- Past Perfect: focuses on completion ("I **had finished** the book")
- Past Perfect Continuous: focuses on duration ("I **had been reading** for hours")`,
    explanationFr: `**LE PAST PERFECT CONTINUOUS** (had been + -ing) décrit des actions qui étaient en cours avant une autre action passée.

**Forme :** Sujet + had been + verbe-ing

**Utilisations :**
- Durée d'une activité avant quelque chose dans le passé
  - "I **had been waiting** for 2 hours when she finally arrived." (J'attendais depuis 2h quand elle est enfin arrivée)
- Cause d'une situation passée (explique pourquoi quelque chose était le cas)
  - "He was tired because he **had been working** all day." (Il était fatigué parce qu'il avait travaillé toute la journée)
- Souligner la durée/continuation d'une action
  - "They **had been living** there for 10 years before they moved." (Ils habitaient là depuis 10 ans avant de déménager)

**Mots-clés indicateurs :**
- for, since, all day/week, how long
- when, before, by the time

**Différence avec le Past Perfect :**
- Past Perfect : accent sur l'achèvement ("I **had finished** the book" - J'avais fini le livre)
- Past Perfect Continuous : accent sur la durée ("I **had been reading** for hours" - Je lisais depuis des heures)`,
    examples: [
      { en: "She **had been studying** for 3 hours when I called.", fr: "Elle **étudiait depuis** 3 heures quand j'ai appelé." },
      { en: "His eyes were red because he **had been crying**.", fr: "Ses yeux étaient rouges parce qu'il **avait pleuré**." },
      { en: "How long **had** you **been waiting** before the bus came?", fr: "**Depuis combien de temps attendais**-tu avant que le bus arrive ?" },
      { en: "They **had been dating** for 2 years before they got married.", fr: "Ils **sortaient ensemble depuis** 2 ans avant de se marier." }
    ],
    exercises: [
      {
        id: 142,
        title: "Past Perfect Continuous",
        description: "Choose the correct form.",
        questions: [
          {
            id: 1,
            question: "She was tired because she ___ all night.",
            options: ["had worked", "had been working"],
            correctAnswer: "had been working",
            explanation: "Past Perfect Continuous emphasizes the duration of work."
          },
          {
            id: 2,
            question: "How long ___ you ___ before the train arrived?",
            options: ["had... waited", "had... been waiting"],
            correctAnswer: "had... been waiting",
            explanation: "Past Perfect Continuous for duration before a past event."
          },
          {
            id: 3,
            question: "His clothes were dirty because he ___ in the garden.",
            options: ["had worked", "had been working"],
            correctAnswer: "had been working",
            explanation: "Continuous shows the ongoing activity that caused the result."
          },
          {
            id: 4,
            question: "They ___ for 5 years before they moved abroad.",
            options: ["had saved", "had been saving"],
            correctAnswer: "had been saving",
            explanation: "Past Perfect Continuous for ongoing action over a period."
          },
          {
            id: 5,
            question: "I ___ about you when you called!",
            options: ["had just thought", "had just been thinking"],
            correctAnswer: "had just been thinking",
            explanation: "Continuous for an action in progress just before another."
          },
          {
            id: 6,
            question: "She finally got the job she ___ for.",
            options: ["had applied", "had been applying"],
            correctAnswer: "had been applying",
            explanation: "Continuous emphasizes repeated/ongoing effort."
          },
          {
            id: 7,
            question: "The ground was wet. It ___.",
            options: ["had rained", "had been raining"],
            correctAnswer: "had been raining",
            explanation: "Continuous for recent activity with visible effects."
          },
          {
            id: 8,
            question: "By the time he arrived, we ___ for 2 hours.",
            options: ["had talked", "had been talking"],
            correctAnswer: "had been talking",
            explanation: "Continuous with 'for' indicating duration."
          },
          {
            id: 9,
            question: "She ___ English for 10 years before she visited London.",
            options: ["had learned", "had been learning"],
            correctAnswer: "had been learning",
            explanation: "Continuous for an ongoing process over time."
          },
          {
            id: 10,
            question: "I was exhausted because I ___ since 5 AM.",
            options: ["had driven", "had been driving"],
            correctAnswer: "had been driving",
            explanation: "Continuous with 'since' showing duration causing tiredness."
          }
        ]
      }
    ]
  },
  {
    id: 'possessives',
    titleEn: 'Possessive Adjectives vs Possessive Pronouns',
    titleFr: 'Adjectifs Possessifs vs Pronoms Possessifs',
    explanationEn: `**POSSESSIVE ADJECTIVES** come BEFORE a noun:
- my, your, his, her, its, our, their
- "This is **my** book." (adjective + noun)

**POSSESSIVE PRONOUNS** REPLACE the noun (stand alone):
- mine, yours, his, hers, ours, theirs
- "This book is **mine**." (no noun after)

**Comparison:**
| Adjective | Pronoun |
|-----------|---------|
| my | mine |
| your | yours |
| his | his |
| her | hers |
| its | (no pronoun form) |
| our | ours |
| their | theirs |

**Common mistake with "its" vs "it's":**
- **its** = possessive ("The dog wagged **its** tail.")
- **it's** = it is/it has ("**It's** raining.")

**Note:** "his" is the same for both adjective and pronoun.`,
    explanationFr: `**LES ADJECTIFS POSSESSIFS** viennent AVANT un nom :
- my, your, his, her, its, our, their
- "This is **my** book." (adjectif + nom)

**LES PRONOMS POSSESSIFS** REMPLACENT le nom (utilisés seuls) :
- mine, yours, his, hers, ours, theirs
- "This book is **mine**." (pas de nom après)

**Comparaison :**
| Adjectif | Pronom |
|----------|--------|
| my (mon/ma) | mine (le mien) |
| your (ton/ta) | yours (le tien) |
| his (son - à lui) | his (le sien) |
| her (son - à elle) | hers (le sien) |
| its (son - neutre) | (pas de forme pronom) |
| our (notre) | ours (le nôtre) |
| their (leur) | theirs (le leur) |

**Erreur courante avec "its" vs "it's" :**
- **its** = possessif ("The dog wagged **its** tail." - Le chien a remué sa queue)
- **it's** = it is/it has ("**It's** raining." - Il pleut)

**Note :** "his" est identique pour l'adjectif et le pronom.`,
    examples: [
      { en: "This is **my** car. The blue one is **yours**.", fr: "C'est **ma** voiture. La bleue est **la tienne**." },
      { en: "Is this **her** bag? No, **hers** is red.", fr: "C'est **son** sac ? Non, **le sien** est rouge." },
      { en: "**Our** house is big, but **theirs** is bigger.", fr: "**Notre** maison est grande, mais **la leur** est plus grande." },
      { en: "The cat hurt **its** paw. (NOT it's)", fr: "Le chat s'est blessé **sa** patte. (PAS it's)" }
    ],
    exercises: [
      {
        id: 143,
        title: "Possessives",
        description: "Choose the correct possessive form.",
        questions: [
          {
            id: 1,
            question: "This isn't my pen. It's ___.",
            options: ["your", "yours"],
            correctAnswer: "yours",
            explanation: "Possessive pronoun (yours) replaces 'your pen'."
          },
          {
            id: 2,
            question: "Is this ___ umbrella?",
            options: ["her", "hers"],
            correctAnswer: "her",
            explanation: "Possessive adjective (her) before noun 'umbrella'."
          },
          {
            id: 3,
            question: "The dog wagged ___ tail happily.",
            options: ["its", "it's"],
            correctAnswer: "its",
            explanation: "Its (possessive) not it's (it is)."
          },
          {
            id: 4,
            question: "My house is small. ___ is much bigger.",
            options: ["Their", "Theirs"],
            correctAnswer: "Theirs",
            explanation: "Possessive pronoun (theirs) replaces 'their house'."
          },
          {
            id: 5,
            question: "She forgot ___ keys at home.",
            options: ["her", "hers"],
            correctAnswer: "her",
            explanation: "Possessive adjective (her) before noun 'keys'."
          },
          {
            id: 6,
            question: "Is this phone yours or ___?",
            options: ["my", "mine"],
            correctAnswer: "mine",
            explanation: "Possessive pronoun (mine) stands alone."
          },
          {
            id: 7,
            question: "___ children go to the same school as ___.",
            options: ["Our... their", "Our... theirs"],
            correctAnswer: "Our... theirs",
            explanation: "Our (adjective + noun), theirs (pronoun alone)."
          },
          {
            id: 8,
            question: "A friend of ___ told me the news.",
            options: ["her", "hers"],
            correctAnswer: "hers",
            explanation: "'A friend of hers' = one of her friends (pronoun)."
          },
          {
            id: 9,
            question: "___ raining outside.",
            options: ["Its", "It's"],
            correctAnswer: "It's",
            explanation: "It's = It is raining."
          },
          {
            id: 10,
            question: "This bag isn't ___. ___ bag is black.",
            options: ["my... My", "mine... My"],
            correctAnswer: "mine... My",
            explanation: "Mine (pronoun alone), My (adjective + noun)."
          }
        ]
      }
    ]
  },
  {
    id: 'adverbs-frequency',
    titleEn: 'Adverbs of Frequency',
    titleFr: 'Adverbes de Fréquence',
    explanationEn: `**ADVERBS OF FREQUENCY** tell us how often something happens.

**Common adverbs (from most to least frequent):**
- always (100%)
- usually/normally (80%)
- often/frequently (60%)
- sometimes (40%)
- occasionally (20%)
- rarely/seldom (5%)
- never (0%)

**Position in sentence:**

1. **Before the main verb:**
   - "I **always** eat breakfast."
   - "She **never** drinks coffee."

2. **After the verb "to be":**
   - "He **is** always late."
   - "They **are** never on time."

3. **After auxiliary/modal verbs:**
   - "I can **never** remember her name."
   - "She has **always** loved music."

**Exceptions - these can go at the beginning or end:**
- sometimes, usually, occasionally, often
- "**Sometimes** I go running." / "I go running **sometimes**."`,
    explanationFr: `**LES ADVERBES DE FRÉQUENCE** indiquent à quelle fréquence quelque chose se produit.

**Adverbes courants (du plus au moins fréquent) :**
- always (toujours - 100%)
- usually/normally (habituellement - 80%)
- often/frequently (souvent - 60%)
- sometimes (parfois - 40%)
- occasionally (occasionnellement - 20%)
- rarely/seldom (rarement - 5%)
- never (jamais - 0%)

**Position dans la phrase :**

1. **Avant le verbe principal :**
   - "I **always** eat breakfast." (Je prends toujours le petit-déjeuner)
   - "She **never** drinks coffee." (Elle ne boit jamais de café)

2. **Après le verbe "to be" :**
   - "He **is** always late." (Il est toujours en retard)
   - "They **are** never on time." (Ils ne sont jamais à l'heure)

3. **Après les auxiliaires/modaux :**
   - "I can **never** remember her name." (Je ne peux jamais me souvenir de son nom)
   - "She has **always** loved music." (Elle a toujours aimé la musique)

**Exceptions - peuvent aller au début ou à la fin :**
- sometimes, usually, occasionally, often
- "**Sometimes** I go running." / "I go running **sometimes**."`,
    examples: [
      { en: "I **always** brush my teeth before bed.", fr: "Je me brosse **toujours** les dents avant de dormir." },
      { en: "She **is** usually tired after work.", fr: "Elle **est** généralement fatiguée après le travail." },
      { en: "He can **never** find his keys.", fr: "Il ne peut **jamais** trouver ses clés." },
      { en: "**Sometimes** we eat out on Fridays.", fr: "**Parfois** nous mangeons dehors le vendredi." }
    ],
    exercises: [
      {
        id: 144,
        title: "Adverbs of Frequency",
        description: "Choose the correct position or adverb.",
        questions: [
          {
            id: 1,
            question: "She ___ late for work.",
            options: ["is never", "never is"],
            correctAnswer: "is never",
            explanation: "Adverb goes after 'to be'."
          },
          {
            id: 2,
            question: "I ___ my grandmother on Sundays.",
            options: ["visit usually", "usually visit"],
            correctAnswer: "usually visit",
            explanation: "Adverb goes before the main verb."
          },
          {
            id: 3,
            question: "They ___ been to Asia.",
            options: ["have never", "never have"],
            correctAnswer: "have never",
            explanation: "Adverb goes after the auxiliary 'have'."
          },
          {
            id: 4,
            question: "He ___ remembers my birthday.",
            options: ["always", "is always"],
            correctAnswer: "always",
            explanation: "'Always' before main verb 'remembers'."
          },
          {
            id: 5,
            question: "We ___ late.",
            options: ["are rarely", "rarely are"],
            correctAnswer: "are rarely",
            explanation: "Adverb goes after 'to be'."
          },
          {
            id: 6,
            question: "She can ___ find parking in the city.",
            options: ["never", "never can"],
            correctAnswer: "never",
            explanation: "Adverb goes after modal 'can'."
          },
          {
            id: 7,
            question: "I ___ to the gym three times a week.",
            options: ["go usually", "usually go"],
            correctAnswer: "usually go",
            explanation: "Adverb before main verb 'go'."
          },
          {
            id: 8,
            question: "My parents ___ strict when I was young.",
            options: ["were always", "always were"],
            correctAnswer: "were always",
            explanation: "Adverb after 'to be' (were)."
          },
          {
            id: 9,
            question: "She ___ watch TV in the morning.",
            options: ["doesn't usually", "usually doesn't"],
            correctAnswer: "doesn't usually",
            explanation: "Adverb after auxiliary 'doesn't'."
          },
          {
            id: 10,
            question: "___ I take a walk after dinner.",
            options: ["Sometimes", "Always"],
            correctAnswer: "Sometimes",
            explanation: "'Sometimes' can go at the beginning (not 'always')."
          }
        ]
      }
    ]
  },
  {
    id: 'causative-have-get',
    titleEn: 'Causative Have and Get',
    titleFr: 'Causatif Have et Get',
    explanationEn: `**CAUSATIVE** structures are used when someone else does something for us (we arrange/cause it to happen).

**HAVE something done:**
- Form: have + object + past participle
- "I **had** my car **repaired**." (Someone repaired it for me)
- "She **has** her hair **cut** every month."

**GET something done:**
- Form: get + object + past participle  
- "I **got** my car **repaired**." (Same meaning as 'have')
- More informal than 'have'

**Common examples:**
- have/get your hair cut (at the hairdresser's)
- have/get your car serviced (at the garage)
- have/get a suit made (by a tailor)
- have/get your eyes tested (by an optician)
- have/get your house painted (by painters)

**Different tenses:**
- Present: "I **have** my car **washed** every week."
- Past: "I **had** my teeth **checked** yesterday."
- Future: "I'**ll have** my nails **done** tomorrow."
- Present Perfect: "I'**ve had** my phone **repaired**."`,
    explanationFr: `**LE CAUSATIF** s'utilise quand quelqu'un d'autre fait quelque chose pour nous (on organise/fait en sorte que cela se produise).

**HAVE something done :**
- Forme : have + objet + participe passé
- "I **had** my car **repaired**." (Quelqu'un l'a réparée pour moi)
- "She **has** her hair **cut** every month." (Elle se fait couper les cheveux)

**GET something done :**
- Forme : get + objet + participe passé
- "I **got** my car **repaired**." (Même sens que 'have')
- Plus informel que 'have'

**Exemples courants :**
- have/get your hair cut (se faire couper les cheveux)
- have/get your car serviced (faire réviser sa voiture)
- have/get a suit made (se faire faire un costume)
- have/get your eyes tested (se faire examiner les yeux)
- have/get your house painted (faire peindre sa maison)

**Différents temps :**
- Présent : "I **have** my car **washed** every week."
- Passé : "I **had** my teeth **checked** yesterday."
- Futur : "I'**ll have** my nails **done** tomorrow."
- Present Perfect : "I'**ve had** my phone **repaired**."`,
    examples: [
      { en: "I **had** my hair **cut** last week.", fr: "Je me suis fait couper les cheveux la semaine dernière." },
      { en: "We're **having** our house **painted**.", fr: "Nous faisons peindre notre maison." },
      { en: "You should **get** your eyes **tested**.", fr: "Tu devrais te faire examiner les yeux." },
      { en: "I need to **have** my suit **cleaned**.", fr: "Je dois faire nettoyer mon costume." }
    ],
    exercises: [
      {
        id: 145,
        title: "Causative Have and Get",
        description: "Choose the correct causative form.",
        questions: [
          {
            id: 1,
            question: "I ___ my car ___ yesterday.",
            options: ["had... washed", "had... washing"],
            correctAnswer: "had... washed",
            explanation: "Causative: have + object + past participle."
          },
          {
            id: 2,
            question: "She ___ her nails ___ every two weeks.",
            options: ["has... done", "has... doing"],
            correctAnswer: "has... done",
            explanation: "Causative with past participle 'done'."
          },
          {
            id: 3,
            question: "We're going to ___ the house ___.",
            options: ["have... paint", "have... painted"],
            correctAnswer: "have... painted",
            explanation: "Causative requires past participle."
          },
          {
            id: 4,
            question: "I need to ___ my passport ___ before the trip.",
            options: ["get... renewed", "get... renew"],
            correctAnswer: "get... renewed",
            explanation: "Get + object + past participle."
          },
          {
            id: 5,
            question: "Have you ever ___ your fortune ___?",
            options: ["had... tell", "had... told"],
            correctAnswer: "had... told",
            explanation: "Causative: have + object + past participle."
          },
          {
            id: 6,
            question: "She ___ her teeth ___ twice a year.",
            options: ["gets... check", "gets... checked"],
            correctAnswer: "gets... checked",
            explanation: "Causative with past participle 'checked'."
          },
          {
            id: 7,
            question: "I'm ___ my suit ___ for the wedding.",
            options: ["having... made", "having... make"],
            correctAnswer: "having... made",
            explanation: "Present continuous causative with past participle."
          },
          {
            id: 8,
            question: "You should ___ that cut ___ at by a doctor.",
            options: ["have... look", "have... looked"],
            correctAnswer: "have... looked",
            explanation: "Causative: have + object + past participle."
          },
          {
            id: 9,
            question: "We ___ all our windows ___ last month.",
            options: ["got... replaced", "got... replace"],
            correctAnswer: "got... replaced",
            explanation: "Past causative with past participle."
          },
          {
            id: 10,
            question: "I'll ___ the documents ___ to you tomorrow.",
            options: ["have... send", "have... sent"],
            correctAnswer: "have... sent",
            explanation: "Future causative with past participle."
          }
        ]
      }
    ]
  },
  {
    id: 'adjective-order',
    titleEn: 'Order of Adjectives',
    titleFr: "Ordre des Adjectifs",
    explanationEn: `When using multiple adjectives, English follows a specific order. The order is often remembered as **OSASCOMP**:

1. **O**pinion - beautiful, ugly, lovely, horrible
2. **S**ize - big, small, tall, short, huge
3. **A**ge - old, new, young, ancient
4. **S**hape - round, square, flat, rectangular
5. **C**olor - red, blue, green, black
6. **O**rigin - French, Japanese, Italian, American
7. **M**aterial - wooden, metal, cotton, silk
8. **P**urpose - cooking (pot), sleeping (bag)

**Examples:**
- "A **lovely** (opinion) **little** (size) **old** (age) **French** (origin) **wooden** (material) table"
- "A **beautiful** **big** **round** **blue** vase"

**Rules:**
- Maximum 2-3 adjectives before a noun is natural
- Determiners (a, the, my, this) always come first
- Numbers come after determiners: "the **three** big houses"

**Tip:** Native speakers may not follow this exactly, but wrong order sounds odd!`,
    explanationFr: `Quand on utilise plusieurs adjectifs, l'anglais suit un ordre spécifique. On retient souvent **OSASCOMP** :

1. **O**pinion - beautiful, ugly, lovely, horrible
2. **S**ize (Taille) - big, small, tall, short, huge
3. **A**ge - old, new, young, ancient
4. **S**hape (Forme) - round, square, flat, rectangular
5. **C**olor (Couleur) - red, blue, green, black
6. **O**rigin (Origine) - French, Japanese, Italian, American
7. **M**aterial (Matériau) - wooden, metal, cotton, silk
8. **P**urpose (But) - cooking (pot), sleeping (bag)

**Exemples :**
- "A **lovely** (opinion) **little** (taille) **old** (âge) **French** (origine) **wooden** (matériau) table"
- "A **beautiful** **big** **round** **blue** vase"

**Règles :**
- Maximum 2-3 adjectifs avant un nom semble naturel
- Les déterminants (a, the, my, this) viennent toujours en premier
- Les nombres viennent après les déterminants : "the **three** big houses"

**Astuce :** Les natifs ne suivent pas toujours cet ordre exactement, mais un mauvais ordre sonne bizarre !`,
    examples: [
      { en: "A **beautiful big old** house (opinion-size-age)", fr: "Une **belle grande vieille** maison (opinion-taille-âge)" },
      { en: "A **small round wooden** table (size-shape-material)", fr: "Une **petite table ronde en bois** (taille-forme-matériau)" },
      { en: "An **expensive Italian leather** bag (opinion-origin-material)", fr: "Un **sac en cuir italien cher** (opinion-origine-matériau)" },
      { en: "The **three large black German** cars (number-size-color-origin)", fr: "Les **trois grandes voitures allemandes noires**" }
    ],
    exercises: [
      {
        id: 146,
        title: "Order of Adjectives",
        description: "Choose the correct adjective order.",
        questions: [
          {
            id: 1,
            question: "She bought a ___ dress.",
            options: ["beautiful red silk", "red beautiful silk", "silk red beautiful"],
            correctAnswer: "beautiful red silk",
            explanation: "Opinion (beautiful) + Color (red) + Material (silk)."
          },
          {
            id: 2,
            question: "They live in a ___ house.",
            options: ["big old lovely", "lovely big old", "old lovely big"],
            correctAnswer: "lovely big old",
            explanation: "Opinion (lovely) + Size (big) + Age (old)."
          },
          {
            id: 3,
            question: "I found a ___ box in the attic.",
            options: ["wooden small square", "small square wooden", "square small wooden"],
            correctAnswer: "small square wooden",
            explanation: "Size (small) + Shape (square) + Material (wooden)."
          },
          {
            id: 4,
            question: "She has ___ hair.",
            options: ["long black beautiful", "beautiful long black", "black long beautiful"],
            correctAnswer: "beautiful long black",
            explanation: "Opinion (beautiful) + Size (long) + Color (black)."
          },
          {
            id: 5,
            question: "He drives an ___ car.",
            options: ["old Italian expensive", "expensive old Italian", "Italian old expensive"],
            correctAnswer: "expensive old Italian",
            explanation: "Opinion (expensive) + Age (old) + Origin (Italian)."
          },
          {
            id: 6,
            question: "We sat at a ___ table.",
            options: ["round big wooden", "big round wooden", "wooden round big"],
            correctAnswer: "big round wooden",
            explanation: "Size (big) + Shape (round) + Material (wooden)."
          },
          {
            id: 7,
            question: "She wore a ___ scarf.",
            options: ["silk Chinese lovely", "lovely Chinese silk", "Chinese lovely silk"],
            correctAnswer: "lovely Chinese silk",
            explanation: "Opinion (lovely) + Origin (Chinese) + Material (silk)."
          },
          {
            id: 8,
            question: "I need a ___ bag.",
            options: ["sleeping new blue", "new blue sleeping", "blue new sleeping"],
            correctAnswer: "new blue sleeping",
            explanation: "Age (new) + Color (blue) + Purpose (sleeping)."
          },
          {
            id: 9,
            question: "They bought ___ chairs.",
            options: ["six comfortable plastic", "comfortable six plastic", "plastic comfortable six"],
            correctAnswer: "six comfortable plastic",
            explanation: "Number (six) + Opinion (comfortable) + Material (plastic)."
          },
          {
            id: 10,
            question: "It's a ___ building.",
            options: ["tall modern glass", "modern tall glass", "glass tall modern"],
            correctAnswer: "tall modern glass",
            explanation: "Size (tall) + Age (modern) + Material (glass)."
          }
        ]
      }
    ]
  },
  {
    id: 'determiners',
    titleEn: 'Determiners: All, Both, Each, Every, No',
    titleFr: 'Déterminants : All, Both, Each, Every, No',
    explanationEn: `**DETERMINERS** come before nouns and tell us which or how many.

**ALL** = the whole group (100%)
- All + plural noun: "**All** students must register."
- All + uncountable: "**All** information is free."
- All (of) the: "**All (of) the** children are here."

**BOTH** = two things/people together
- "**Both** answers are correct."
- "I like **both** of them."
- Both...and: "**Both** Tom **and** Mary came."

**EACH** = every individual (one by one)
- + singular verb: "**Each** student **has** a book."
- More personal, individual focus

**EVERY** = all members of a group
- + singular verb: "**Every** student **has** a book."
- More general, group focus
- Every = each + all together

**NO** = not any, zero
- + singular or plural: "**No** student came." / "**No** students came."
- "There's **no** milk left."

**Difference: EACH vs EVERY**
- Each: "Each of the 5 students received a prize." (individual)
- Every: "Every student in the school wears uniform." (general rule)`,
    explanationFr: `**LES DÉTERMINANTS** viennent avant les noms et indiquent lesquels ou combien.

**ALL** = tout le groupe (100%)
- All + nom pluriel : "**All** students must register." (Tous les étudiants)
- All + indénombrable : "**All** information is free." (Toute l'information)
- All (of) the : "**All (of) the** children are here." (Tous les enfants)

**BOTH** = deux choses/personnes ensemble
- "**Both** answers are correct." (Les deux réponses)
- "I like **both** of them." (Je les aime tous les deux)
- Both...and : "**Both** Tom **and** Mary came." (Tom et Mary tous les deux)

**EACH** = chaque individu (un par un)
- + verbe singulier : "**Each** student **has** a book." (Chaque étudiant)
- Plus personnel, focus individuel

**EVERY** = tous les membres d'un groupe
- + verbe singulier : "**Every** student **has** a book." (Chaque étudiant)
- Plus général, focus sur le groupe
- Every = each + tous ensemble

**NO** = pas de, zéro
- + singulier ou pluriel : "**No** student came." / "**No** students came."
- "There's **no** milk left." (Il n'y a plus de lait)

**Différence : EACH vs EVERY**
- Each : "Each of the 5 students received a prize." (individuel)
- Every : "Every student in the school wears uniform." (règle générale)`,
    examples: [
      { en: "**All** my friends came to the party.", fr: "**Tous** mes amis sont venus à la fête." },
      { en: "**Both** options are good.", fr: "**Les deux** options sont bonnes." },
      { en: "**Each** person received a gift.", fr: "**Chaque** personne a reçu un cadeau." },
      { en: "**Every** morning I drink coffee.", fr: "**Chaque** matin je bois du café." },
      { en: "There's **no** reason to worry.", fr: "Il n'y a **aucune** raison de s'inquiéter." }
    ],
    exercises: [
      {
        id: 147,
        title: "Determiners",
        description: "Choose the correct determiner.",
        questions: [
          {
            id: 1,
            question: "___ of my parents are teachers.",
            options: ["All", "Both", "Every"],
            correctAnswer: "Both",
            explanation: "Both for two people (parents = 2)."
          },
          {
            id: 2,
            question: "___ student must bring their own laptop.",
            options: ["Each", "All", "Both"],
            correctAnswer: "Each",
            explanation: "Each + singular noun for individual requirement."
          },
          {
            id: 3,
            question: "There is ___ milk left in the fridge.",
            options: ["no", "any", "every"],
            correctAnswer: "no",
            explanation: "No = not any milk remaining."
          },
          {
            id: 4,
            question: "___ children love ice cream.",
            options: ["Every", "All", "Each"],
            correctAnswer: "All",
            explanation: "All + plural noun for general statement."
          },
          {
            id: 5,
            question: "___ day I learn something new.",
            options: ["All", "Every", "Both"],
            correctAnswer: "Every",
            explanation: "Every + singular noun for 'each day'."
          },
          {
            id: 6,
            question: "I invited Tom and Sarah. ___ of them came.",
            options: ["All", "Both", "Every"],
            correctAnswer: "Both",
            explanation: "Both for two people."
          },
          {
            id: 7,
            question: "___ the information you need is online.",
            options: ["All", "Every", "Each"],
            correctAnswer: "All",
            explanation: "All + the + uncountable noun."
          },
          {
            id: 8,
            question: "She checks ___ door before leaving.",
            options: ["every", "all", "no"],
            correctAnswer: "every",
            explanation: "Every + singular noun for each one."
          },
          {
            id: 9,
            question: "___ person in this room speaks English.",
            options: ["Every", "All", "Both"],
            correctAnswer: "Every",
            explanation: "Every + singular noun for all individuals."
          },
          {
            id: 10,
            question: "I have ___ idea what you're talking about.",
            options: ["no", "all", "every"],
            correctAnswer: "no",
            explanation: "No idea = I don't know at all."
          }
        ]
      }
    ]
  },
  // === LOWER PRIORITY LESSONS ===
  {
    id: 'had-better-would-rather',
    titleEn: 'Had Better / Would Rather',
    titleFr: 'Had Better / Would Rather',
    explanationEn: `**HAD BETTER** and **WOULD RATHER** express preferences and advice.

**HAD BETTER** (+ infinitive without 'to'):
- Strong advice or warning (something bad might happen if not followed)
- "You **had better** hurry or you'll miss the bus."
- "We **'d better** leave now." (contraction)
- Negative: "You **had better not** be late."

**WOULD RATHER** (+ infinitive without 'to'):
- Personal preference
- "I **would rather** stay home tonight."
- "I**'d rather** not go." (negative)
- Comparing: "I**'d rather** walk **than** drive."

**WOULD RATHER + subject + past tense:**
- Preference for someone else to do something
- "I**'d rather** you **didn't** smoke here." (present/future meaning)
- "I**'d rather** he **came** tomorrow." (past form, future meaning)

**Key difference:**
- Had better = advice/warning (external pressure)
- Would rather = preference (personal choice)`,
    explanationFr: `**HAD BETTER** et **WOULD RATHER** expriment des préférences et conseils.

**HAD BETTER** (+ infinitif sans 'to') :
- Conseil fort ou avertissement (quelque chose de mauvais pourrait arriver)
- "You **had better** hurry or you'll miss the bus." (Tu ferais mieux de te dépêcher)
- "We **'d better** leave now." (contraction)
- Négatif : "You **had better not** be late." (Tu ferais mieux de ne pas être en retard)

**WOULD RATHER** (+ infinitif sans 'to') :
- Préférence personnelle
- "I **would rather** stay home tonight." (Je préférerais rester à la maison)
- "I**'d rather** not go." (négatif - Je préférerais ne pas y aller)
- Comparaison : "I**'d rather** walk **than** drive." (Je préférerais marcher que conduire)

**WOULD RATHER + sujet + passé :**
- Préférence pour qu'une autre personne fasse quelque chose
- "I**'d rather** you **didn't** smoke here." (Je préférerais que tu ne fumes pas ici)
- "I**'d rather** he **came** tomorrow." (forme passée, sens futur)

**Différence clé :**
- Had better = conseil/avertissement (pression externe)
- Would rather = préférence (choix personnel)`,
    examples: [
      { en: "You**'d better** study or you'll fail the exam.", fr: "Tu **ferais mieux** d'étudier sinon tu vas rater l'examen." },
      { en: "I**'d rather** have tea **than** coffee.", fr: "Je **préférerais** du thé **plutôt que** du café." },
      { en: "We**'d better not** wake the baby.", fr: "On **ferait mieux de ne pas** réveiller le bébé." },
      { en: "I**'d rather** you **didn't** tell anyone.", fr: "Je **préférerais** que tu **ne le dises** à personne." }
    ],
    exercises: [
      {
        id: 148,
        title: "Had Better / Would Rather",
        description: "Choose the correct form.",
        questions: [
          {
            id: 1,
            question: "You ___ take an umbrella. It's going to rain.",
            options: ["had better", "would rather"],
            correctAnswer: "had better",
            explanation: "Had better for advice/warning about rain."
          },
          {
            id: 2,
            question: "I ___ stay home tonight. I'm tired.",
            options: ["had better", "would rather"],
            correctAnswer: "would rather",
            explanation: "Would rather for personal preference."
          },
          {
            id: 3,
            question: "You'd better ___ late for the interview.",
            options: ["not be", "not to be"],
            correctAnswer: "not be",
            explanation: "Had better not + infinitive without 'to'."
          },
          {
            id: 4,
            question: "I'd rather ___ than take the bus.",
            options: ["walk", "walking", "to walk"],
            correctAnswer: "walk",
            explanation: "Would rather + infinitive without 'to'."
          },
          {
            id: 5,
            question: "We ___ leave now or we'll miss the flight.",
            options: ["had better", "would rather"],
            correctAnswer: "had better",
            explanation: "Had better for urgent advice."
          },
          {
            id: 6,
            question: "I'd rather you ___ smoke in here.",
            options: ["don't", "didn't", "not"],
            correctAnswer: "didn't",
            explanation: "Would rather + subject + past tense."
          },
          {
            id: 7,
            question: "She ___ eat something before the meeting.",
            options: ["had better", "would rather"],
            correctAnswer: "had better",
            explanation: "Had better for advice (she needs energy)."
          },
          {
            id: 8,
            question: "Would you rather ___ pizza or pasta?",
            options: ["have", "having", "to have"],
            correctAnswer: "have",
            explanation: "Would rather + infinitive without 'to'."
          },
          {
            id: 9,
            question: "I'd rather he ___ tomorrow instead of today.",
            options: ["comes", "came", "come"],
            correctAnswer: "came",
            explanation: "Would rather + subject + past tense for future."
          },
          {
            id: 10,
            question: "You ___ not mention this to anyone.",
            options: ["had better", "would rather"],
            correctAnswer: "had better",
            explanation: "Had better for strong advice/warning."
          }
        ]
      }
    ]
  },
  {
    id: 'although-despite-however',
    titleEn: 'Although / Despite / However',
    titleFr: 'Although / Despite / However',
    explanationEn: `These words express **contrast** (unexpected results).

**ALTHOUGH / EVEN THOUGH / THOUGH** (+ clause):
- "**Although** it was raining, we went out."
- "We went out **even though** it was raining."
- Though is more informal and can go at the end: "It was fun, **though**."

**DESPITE / IN SPITE OF** (+ noun/-ing):
- "**Despite** the rain, we went out."
- "**In spite of** being tired, she worked late."
- Never: ~~despite of~~ or ~~despite that~~

**HOWEVER / NEVERTHELESS / NONETHELESS**:
- Usually start a new sentence
- "It was raining. **However**, we went out."
- More formal than 'but'
- Always followed by a comma

**Comparison:**
| Word | Followed by |
|------|-------------|
| Although | subject + verb |
| Despite | noun / -ing |
| However | comma + new clause |

**Common mistake:**
❌ Despite it was raining...
✅ Despite the rain... / Although it was raining...`,
    explanationFr: `Ces mots expriment le **contraste** (résultats inattendus).

**ALTHOUGH / EVEN THOUGH / THOUGH** (+ proposition) :
- "**Although** it was raining, we went out." (Bien qu'il pleuvait, on est sortis)
- "We went out **even though** it was raining." (Même si...)
- Though est plus informel et peut aller à la fin : "It was fun, **though**."

**DESPITE / IN SPITE OF** (+ nom/-ing) :
- "**Despite** the rain, we went out." (Malgré la pluie...)
- "**In spite of** being tired, she worked late." (Malgré sa fatigue...)
- Jamais : ~~despite of~~ ou ~~despite that~~

**HOWEVER / NEVERTHELESS / NONETHELESS** :
- Commencent généralement une nouvelle phrase
- "It was raining. **However**, we went out." (Cependant...)
- Plus formel que 'but'
- Toujours suivi d'une virgule

**Comparaison :**
| Mot | Suivi de |
|-----|----------|
| Although | sujet + verbe |
| Despite | nom / -ing |
| However | virgule + nouvelle proposition |

**Erreur courante :**
❌ Despite it was raining...
✅ Despite the rain... / Although it was raining...`,
    examples: [
      { en: "**Although** she's rich, she's not happy.", fr: "**Bien qu'**elle soit riche, elle n'est pas heureuse." },
      { en: "**Despite** the cold weather, we went swimming.", fr: "**Malgré** le froid, nous sommes allés nager." },
      { en: "I was tired. **However**, I finished the project.", fr: "J'étais fatigué. **Cependant**, j'ai fini le projet." },
      { en: "**In spite of** working hard, he failed.", fr: "**Malgré** son travail acharné, il a échoué." }
    ],
    exercises: [
      {
        id: 149,
        title: "Although / Despite / However",
        description: "Choose the correct word.",
        questions: [
          {
            id: 1,
            question: "___ the heavy traffic, we arrived on time.",
            options: ["Although", "Despite", "However"],
            correctAnswer: "Despite",
            explanation: "Despite + noun (the heavy traffic)."
          },
          {
            id: 2,
            question: "___ it was expensive, I bought it.",
            options: ["Although", "Despite", "However"],
            correctAnswer: "Although",
            explanation: "Although + subject + verb (it was)."
          },
          {
            id: 3,
            question: "The hotel was old. ___, it was very comfortable.",
            options: ["Although", "Despite", "However"],
            correctAnswer: "However",
            explanation: "However starts a new contrasting sentence."
          },
          {
            id: 4,
            question: "___ being very busy, she helped me.",
            options: ["Although", "Despite", "However"],
            correctAnswer: "Despite",
            explanation: "Despite + -ing form."
          },
          {
            id: 5,
            question: "___ he studied hard, he failed the exam.",
            options: ["Although", "Despite", "However"],
            correctAnswer: "Although",
            explanation: "Although + clause (he studied)."
          },
          {
            id: 6,
            question: "I don't like coffee. ___, I drink it sometimes.",
            options: ["Although", "In spite of", "However"],
            correctAnswer: "However",
            explanation: "However connects two contrasting sentences."
          },
          {
            id: 7,
            question: "___ her fear of heights, she climbed the tower.",
            options: ["Although", "In spite of", "However"],
            correctAnswer: "In spite of",
            explanation: "In spite of + noun (her fear)."
          },
          {
            id: 8,
            question: "___ we left early, we missed the train.",
            options: ["Even though", "Despite", "However"],
            correctAnswer: "Even though",
            explanation: "Even though + clause (we left early)."
          },
          {
            id: 9,
            question: "The food was delicious ___ the poor service.",
            options: ["although", "despite", "however"],
            correctAnswer: "despite",
            explanation: "Despite + noun phrase."
          },
          {
            id: 10,
            question: "It was a difficult test. I passed it, ___.",
            options: ["although", "despite", "though"],
            correctAnswer: "though",
            explanation: "Though can go at the end of a sentence."
          }
        ]
      }
    ]
  },
  {
    id: 'still-yet-already',
    titleEn: 'Still / Yet / Already',
    titleFr: 'Still / Yet / Already',
    explanationEn: `**STILL**, **YET**, and **ALREADY** relate to time and expectations.

**STILL** = something continues (longer than expected):
- Position: before main verb, after 'be'
- "I**'m still** waiting." (continuing now)
- "He **still** works there." (continuing)
- "I **still** haven't finished." (negative - expected to finish by now)

**YET** = up to now (used in questions and negatives):
- Position: end of sentence
- "Have you finished **yet**?" (Is it done now?)
- "I haven't eaten **yet**." (Not done, but expected)
- "She hasn't called **yet**."

**ALREADY** = sooner than expected (used in positives):
- Position: before main verb, or end for emphasis
- "I've **already** finished." (sooner than expected)
- "It's only 10 AM and she's **already** left."
- In questions (surprise): "Have you **already** eaten?"

**Key patterns:**
- Still + positive/negative: action continues
- Yet + negative/question: action not completed
- Already + positive: action completed sooner than expected`,
    explanationFr: `**STILL**, **YET** et **ALREADY** concernent le temps et les attentes.

**STILL** = quelque chose continue (plus longtemps que prévu) :
- Position : avant le verbe principal, après 'be'
- "I**'m still** waiting." (J'attends encore)
- "He **still** works there." (Il travaille encore là)
- "I **still** haven't finished." (négatif - je n'ai toujours pas fini)

**YET** = jusqu'à maintenant (questions et négations) :
- Position : fin de phrase
- "Have you finished **yet**?" (Tu as fini ?)
- "I haven't eaten **yet**." (Je n'ai pas encore mangé)
- "She hasn't called **yet**." (Elle n'a pas encore appelé)

**ALREADY** = plus tôt que prévu (phrases positives) :
- Position : avant le verbe principal, ou à la fin pour l'emphase
- "I've **already** finished." (J'ai déjà fini)
- "It's only 10 AM and she's **already** left." (Elle est déjà partie)
- Dans les questions (surprise) : "Have you **already** eaten?"

**Structures clés :**
- Still + positif/négatif : l'action continue
- Yet + négatif/question : l'action n'est pas terminée
- Already + positif : l'action terminée plus tôt que prévu`,
    examples: [
      { en: "Are you **still** working? It's midnight!", fr: "Tu travailles **encore** ? Il est minuit !" },
      { en: "I haven't finished my homework **yet**.", fr: "Je n'ai **pas encore** fini mes devoirs." },
      { en: "She's **already** left for work.", fr: "Elle est **déjà** partie au travail." },
      { en: "He **still** hasn't replied to my email.", fr: "Il n'a **toujours pas** répondu à mon email." }
    ],
    exercises: [
      {
        id: 150,
        title: "Still / Yet / Already",
        description: "Choose the correct word.",
        questions: [
          {
            id: 1,
            question: "Have you finished your project ___?",
            options: ["still", "yet", "already"],
            correctAnswer: "yet",
            explanation: "Yet in questions (Is it done now?)."
          },
          {
            id: 2,
            question: "I've ___ seen that movie three times.",
            options: ["still", "yet", "already"],
            correctAnswer: "already",
            explanation: "Already for completed action (emphasis)."
          },
          {
            id: 3,
            question: "He's ___ sleeping. It's 11 AM!",
            options: ["still", "yet", "already"],
            correctAnswer: "still",
            explanation: "Still = continuing longer than expected."
          },
          {
            id: 4,
            question: "They haven't arrived ___.",
            options: ["still", "yet", "already"],
            correctAnswer: "yet",
            explanation: "Yet in negative (not done but expected)."
          },
          {
            id: 5,
            question: "I ___ don't understand this grammar rule.",
            options: ["still", "yet", "already"],
            correctAnswer: "still",
            explanation: "Still + negative = continuing not to understand."
          },
          {
            id: 6,
            question: "It's only 9 AM and she's ___ finished all her work!",
            options: ["still", "yet", "already"],
            correctAnswer: "already",
            explanation: "Already = sooner than expected."
          },
          {
            id: 7,
            question: "Is she ___ talking on the phone?",
            options: ["still", "yet", "already"],
            correctAnswer: "still",
            explanation: "Still = action continuing."
          },
          {
            id: 8,
            question: "I haven't decided ___. I need more time.",
            options: ["still", "yet", "already"],
            correctAnswer: "yet",
            explanation: "Yet in negative sentence."
          },
          {
            id: 9,
            question: "Have you ___ booked your flight? The prices are going up!",
            options: ["still", "yet", "already"],
            correctAnswer: "already",
            explanation: "Already in question showing surprise/urgency."
          },
          {
            id: 10,
            question: "He ___ hasn't apologized for what he said.",
            options: ["still", "yet", "already"],
            correctAnswer: "still",
            explanation: "Still + negative = continuing not to do something."
          }
        ]
      }
    ]
  },
  {
    id: 'unless-as-long-as',
    titleEn: 'Unless / As Long As / Provided',
    titleFr: 'Unless / As Long As / Provided',
    explanationEn: `These are **conditional connectors** with specific meanings.

**UNLESS** = if not / except if:
- "I'll go **unless** it rains." (= if it doesn't rain)
- "**Unless** you study, you'll fail." (= if you don't study)
- Don't use double negatives: ❌ unless you don't

**AS LONG AS / SO LONG AS** = on the condition that:
- "You can borrow my car **as long as** you're careful."
- "I'll help you **so long as** you help me too."
- Emphasizes the condition must be met

**PROVIDED (THAT) / PROVIDING (THAT)** = on the condition that (more formal):
- "I'll come **provided that** you pay for dinner."
- "**Providing** the weather is good, we'll have a picnic."
- More formal than 'as long as'

**Comparison:**
- Unless = negative condition (if not)
- As long as = condition must be true
- Provided = formal condition

**Common mistake:**
❌ Unless you don't hurry... (double negative)
✅ Unless you hurry... (= if you don't hurry)`,
    explanationFr: `Ce sont des **connecteurs conditionnels** avec des sens spécifiques.

**UNLESS** = si... ne... pas / sauf si :
- "I'll go **unless** it rains." (= sauf s'il pleut)
- "**Unless** you study, you'll fail." (= si tu n'étudies pas)
- Pas de double négation : ❌ unless you don't

**AS LONG AS / SO LONG AS** = à condition que :
- "You can borrow my car **as long as** you're careful." (tant que tu fais attention)
- "I'll help you **so long as** you help me too." (à condition que tu m'aides aussi)
- Souligne que la condition doit être remplie

**PROVIDED (THAT) / PROVIDING (THAT)** = à condition que (plus formel) :
- "I'll come **provided that** you pay for dinner." (à condition que tu paies)
- "**Providing** the weather is good, we'll have a picnic."
- Plus formel que 'as long as'

**Comparaison :**
- Unless = condition négative (si ne pas)
- As long as = la condition doit être vraie
- Provided = condition formelle

**Erreur courante :**
❌ Unless you don't hurry... (double négation)
✅ Unless you hurry... (= si tu ne te dépêches pas)`,
    examples: [
      { en: "**Unless** you leave now, you'll be late.", fr: "**Si** tu ne pars pas maintenant, tu seras en retard." },
      { en: "You can stay **as long as** you're quiet.", fr: "Tu peux rester **tant que** tu es silencieux." },
      { en: "I'll lend you money **provided** you pay me back.", fr: "Je te prêterai de l'argent **à condition que** tu me rembourses." },
      { en: "**Unless** there's a problem, I'll see you tomorrow.", fr: "**Sauf** s'il y a un problème, je te vois demain." }
    ],
    exercises: [
      {
        id: 151,
        title: "Unless / As Long As / Provided",
        description: "Choose the correct connector.",
        questions: [
          {
            id: 1,
            question: "I won't go ___ you come with me.",
            options: ["unless", "as long as", "provided"],
            correctAnswer: "unless",
            explanation: "Unless = if you don't come."
          },
          {
            id: 2,
            question: "You can use my phone ___ you don't break it.",
            options: ["unless", "as long as", "unless not"],
            correctAnswer: "as long as",
            explanation: "As long as = on condition that you don't break it."
          },
          {
            id: 3,
            question: "___ it stops raining, we'll have to cancel the game.",
            options: ["Unless", "As long as", "Provided"],
            correctAnswer: "Unless",
            explanation: "Unless = if it doesn't stop raining."
          },
          {
            id: 4,
            question: "I'll help you ___ you promise to work hard.",
            options: ["unless", "provided", "unless not"],
            correctAnswer: "provided",
            explanation: "Provided = on the condition that you promise."
          },
          {
            id: 5,
            question: "___ you study, you'll pass the exam easily.",
            options: ["Unless", "As long as", "If not"],
            correctAnswer: "As long as",
            explanation: "As long as = if the condition is met."
          },
          {
            id: 6,
            question: "She won't speak to him ___ he apologizes.",
            options: ["unless", "as long as", "provided"],
            correctAnswer: "unless",
            explanation: "Unless = if he doesn't apologize."
          },
          {
            id: 7,
            question: "You can borrow my car ___ you fill up the tank.",
            options: ["unless", "providing", "unless not"],
            correctAnswer: "providing",
            explanation: "Providing = on condition that you fill it up."
          },
          {
            id: 8,
            question: "___ there are delays, we should arrive by 6 PM.",
            options: ["Unless", "As long as", "Provided"],
            correctAnswer: "Unless",
            explanation: "Unless = if there are no delays."
          },
          {
            id: 9,
            question: "I'm happy ___ my family is healthy.",
            options: ["unless", "as long as", "provided that"],
            correctAnswer: "as long as",
            explanation: "As long as = while the condition is true."
          },
          {
            id: 10,
            question: "___ everyone agrees, we can start the project.",
            options: ["Unless", "Provided that", "Unless not"],
            correctAnswer: "Provided that",
            explanation: "Provided that = on the condition that everyone agrees."
          }
        ]
      }
    ]
  },
  {
    id: 'subject-verb-agreement',
    titleEn: 'Subject-Verb Agreement',
    titleFr: 'Accord Sujet-Verbe',
    explanationEn: `**SUBJECT-VERB AGREEMENT** means the verb must match the subject in number (singular/plural).

**Basic rules:**
- Singular subject → singular verb: "The dog **runs**."
- Plural subject → plural verb: "The dogs **run**."

**Tricky cases:**

1. **Compound subjects with "and"** → usually plural:
   - "Tom **and** Mary **are** friends."

2. **Either/or, Neither/nor** → verb agrees with nearest subject:
   - "Neither the teacher **nor** the students **were** happy."
   - "Neither the students **nor** the teacher **was** happy."

3. **Collective nouns** (team, family, government):
   - UK: can be singular or plural based on meaning
   - US: usually singular ("The team **is** winning.")

4. **Indefinite pronouns:**
   - Singular: everyone, everybody, someone, nobody, each, every
   - "Everyone **is** here." / "Each student **has** a book."

5. **Phrases between subject and verb** - don't affect agreement:
   - "The box of chocolates **is** on the table." (not "are")
   - "The students in the class **are** noisy." (not "is")

6. **There is/are:**
   - "There **is** a book on the table."
   - "There **are** books on the table."`,
    explanationFr: `**L'ACCORD SUJET-VERBE** signifie que le verbe doit correspondre au sujet en nombre (singulier/pluriel).

**Règles de base :**
- Sujet singulier → verbe singulier : "The dog **runs**."
- Sujet pluriel → verbe pluriel : "The dogs **run**."

**Cas difficiles :**

1. **Sujets composés avec "and"** → généralement pluriel :
   - "Tom **and** Mary **are** friends."

2. **Either/or, Neither/nor** → le verbe s'accorde avec le sujet le plus proche :
   - "Neither the teacher **nor** the students **were** happy."
   - "Neither the students **nor** the teacher **was** happy."

3. **Noms collectifs** (team, family, government) :
   - UK : peut être singulier ou pluriel selon le sens
   - US : généralement singulier ("The team **is** winning.")

4. **Pronoms indéfinis :**
   - Singulier : everyone, everybody, someone, nobody, each, every
   - "Everyone **is** here." / "Each student **has** a book."

5. **Expressions entre sujet et verbe** - n'affectent pas l'accord :
   - "The box of chocolates **is** on the table." (pas "are")
   - "The students in the class **are** noisy." (pas "is")

6. **There is/are :**
   - "There **is** a book on the table."
   - "There **are** books on the table."`,
    examples: [
      { en: "The list of items **is** on the desk.", fr: "La liste des articles **est** sur le bureau." },
      { en: "Everyone **knows** the answer.", fr: "Tout le monde **connaît** la réponse." },
      { en: "Neither Tom nor his friends **were** invited.", fr: "Ni Tom ni ses amis n'**ont été** invités." },
      { en: "There **are** many reasons to be happy.", fr: "Il y **a** beaucoup de raisons d'être heureux." }
    ],
    exercises: [
      {
        id: 152,
        title: "Subject-Verb Agreement",
        description: "Choose the correct verb form.",
        questions: [
          {
            id: 1,
            question: "The group of students ___ waiting outside.",
            options: ["is", "are"],
            correctAnswer: "is",
            explanation: "'Group' is the subject (singular), not 'students'."
          },
          {
            id: 2,
            question: "Everyone ___ to pass the exam.",
            options: ["want", "wants"],
            correctAnswer: "wants",
            explanation: "'Everyone' is always singular."
          },
          {
            id: 3,
            question: "Neither the manager nor the employees ___ satisfied.",
            options: ["was", "were"],
            correctAnswer: "were",
            explanation: "Verb agrees with nearest subject (employees = plural)."
          },
          {
            id: 4,
            question: "The news ___ shocking.",
            options: ["is", "are"],
            correctAnswer: "is",
            explanation: "'News' is uncountable/singular."
          },
          {
            id: 5,
            question: "Each of the players ___ a uniform.",
            options: ["has", "have"],
            correctAnswer: "has",
            explanation: "'Each' is always singular."
          },
          {
            id: 6,
            question: "There ___ many options to consider.",
            options: ["is", "are"],
            correctAnswer: "are",
            explanation: "'Options' is plural, so 'are'."
          },
          {
            id: 7,
            question: "The scissors ___ on the table.",
            options: ["is", "are"],
            correctAnswer: "are",
            explanation: "'Scissors' is always plural in English."
          },
          {
            id: 8,
            question: "Politics ___ a controversial topic.",
            options: ["is", "are"],
            correctAnswer: "is",
            explanation: "'Politics' as a subject of study is singular."
          },
          {
            id: 9,
            question: "Either my brothers or my father ___ coming.",
            options: ["is", "are"],
            correctAnswer: "is",
            explanation: "Verb agrees with nearest subject (father = singular)."
          },
          {
            id: 10,
            question: "A number of people ___ waiting.",
            options: ["is", "are"],
            correctAnswer: "are",
            explanation: "'A number of' = many, takes plural verb."
          }
        ]
      }
    ]
  },
  {
    id: 'auxiliary-verbs',
    titleEn: 'Auxiliary Verbs: Do, Have, Be',
    titleFr: 'Verbes Auxiliaires : Do, Have, Be',
    explanationEn: `**AUXILIARY VERBS** help main verbs form tenses, questions, and negatives.

**DO / DOES / DID:**
- Questions: "**Do** you like coffee?" / "**Did** she go?"
- Negatives: "I **don't** understand." / "He **didn't** come."
- Emphasis: "I **do** love you!" (emphatic)
- Present: do/does | Past: did

**HAVE / HAS / HAD:**
- Perfect tenses: "I **have** finished." / "She **had** left."
- Present Perfect: have/has + past participle
- Past Perfect: had + past participle
- Questions: "**Have** you eaten?"

**BE (am/is/are/was/were):**
- Continuous tenses: "I **am** working." / "They **were** sleeping."
- Passive voice: "The book **was** written by her."
- Questions: "**Are** you coming?" / "**Was** it good?"

**Rules:**
1. Only ONE auxiliary for questions/negatives (don't double up)
   - ❌ "Do you can swim?" → ✅ "Can you swim?"
2. Don't use 'do' with 'be' or modals:
   - ❌ "Do you are happy?" → ✅ "Are you happy?"
3. After auxiliary, use base form (not -s or -ed):
   - ❌ "Does he works?" → ✅ "Does he work?"`,
    explanationFr: `**LES VERBES AUXILIAIRES** aident les verbes principaux à former les temps, questions et négations.

**DO / DOES / DID :**
- Questions : "**Do** you like coffee?" / "**Did** she go?"
- Négations : "I **don't** understand." / "He **didn't** come."
- Emphase : "I **do** love you!" (emphatique)
- Présent : do/does | Passé : did

**HAVE / HAS / HAD :**
- Temps parfaits : "I **have** finished." / "She **had** left."
- Present Perfect : have/has + participe passé
- Past Perfect : had + participe passé
- Questions : "**Have** you eaten?"

**BE (am/is/are/was/were) :**
- Temps continus : "I **am** working." / "They **were** sleeping."
- Voix passive : "The book **was** written by her."
- Questions : "**Are** you coming?" / "**Was** it good?"

**Règles :**
1. Un seul auxiliaire pour questions/négations
   - ❌ "Do you can swim?" → ✅ "Can you swim?"
2. Ne pas utiliser 'do' avec 'be' ou les modaux :
   - ❌ "Do you are happy?" → ✅ "Are you happy?"
3. Après l'auxiliaire, utiliser la forme de base (pas -s ou -ed) :
   - ❌ "Does he works?" → ✅ "Does he work?"`,
    examples: [
      { en: "**Do** you **speak** English?", fr: "**Est-ce que** tu **parles** anglais ?" },
      { en: "She **doesn't** like spiders.", fr: "Elle **n'aime pas** les araignées." },
      { en: "**Have** you **seen** my keys?", fr: "**As-tu vu** mes clés ?" },
      { en: "I **was** working when you called.", fr: "Je **travaillais** quand tu as appelé." }
    ],
    exercises: [
      {
        id: 153,
        title: "Auxiliary Verbs",
        description: "Choose the correct auxiliary verb.",
        questions: [
          {
            id: 1,
            question: "___ she speak French?",
            options: ["Do", "Does", "Is"],
            correctAnswer: "Does",
            explanation: "'Does' for third person singular questions."
          },
          {
            id: 2,
            question: "I ___ not understand the question.",
            options: ["do", "am", "have"],
            correctAnswer: "do",
            explanation: "'Do not' (don't) for negatives with main verbs."
          },
          {
            id: 3,
            question: "___ you finished your homework yet?",
            options: ["Do", "Have", "Are"],
            correctAnswer: "Have",
            explanation: "'Have' for Present Perfect questions."
          },
          {
            id: 4,
            question: "She ___ working when I arrived.",
            options: ["did", "was", "had"],
            correctAnswer: "was",
            explanation: "'Was' for Past Continuous."
          },
          {
            id: 5,
            question: "___ they come to the party last night?",
            options: ["Do", "Did", "Were"],
            correctAnswer: "Did",
            explanation: "'Did' for past simple questions."
          },
          {
            id: 6,
            question: "We ___ not seen him for weeks.",
            options: ["do", "have", "are"],
            correctAnswer: "have",
            explanation: "'Have not' for Present Perfect negative."
          },
          {
            id: 7,
            question: "___ you coming to the meeting tomorrow?",
            options: ["Do", "Have", "Are"],
            correctAnswer: "Are",
            explanation: "'Are' for Present Continuous questions."
          },
          {
            id: 8,
            question: "He ___ like coffee, but he loves tea.",
            options: ["doesn't", "isn't", "hasn't"],
            correctAnswer: "doesn't",
            explanation: "'Doesn't' + base form for negative."
          },
          {
            id: 9,
            question: "The letter ___ sent yesterday.",
            options: ["did", "was", "has"],
            correctAnswer: "was",
            explanation: "'Was' for past passive voice."
          },
          {
            id: 10,
            question: "I ___ really enjoy that film!",
            options: ["do", "am", "have"],
            correctAnswer: "do",
            explanation: "'Do' for emphatic affirmative."
          }
        ]
      }
    ]
  },
  {
    id: 'word-order',
    titleEn: 'Word Order in English',
    titleFr: "L'Ordre des Mots en Anglais",
    explanationEn: `**English has a strict word order** compared to many languages.

**STATEMENTS (SVO):** Subject + Verb + Object
- "I (S) **eat** (V) breakfast (O)."
- "She (S) **loves** (V) music (O)."

**QUESTIONS:**
1. Yes/No questions: Auxiliary + Subject + Verb
   - "**Do** you like pizza?"
   - "**Is** she coming?"

2. Wh-questions: Wh-word + Auxiliary + Subject + Verb
   - "**Where do** you live?"
   - "**What is** she doing?"

3. Exception - Wh as subject (no auxiliary):
   - "**Who** broke the window?" (not "Who did break")
   - "**What** happened?" (not "What did happen")

**NEGATIVES:** Subject + Auxiliary + Not + Verb
- "I **do not** (don't) like it."
- "She **is not** (isn't) coming."

**ADVERBS:**
- Time/Place usually at end: "I saw him **yesterday**."
- Frequency before main verb: "I **always** eat breakfast."

**ADJECTIVES:** Before the noun
- "A **beautiful big** house" (not "a house beautiful big")`,
    explanationFr: `**L'anglais a un ordre des mots strict** comparé à beaucoup de langues.

**AFFIRMATIONS (SVO) :** Sujet + Verbe + Objet
- "I (S) **eat** (V) breakfast (O)."
- "She (S) **loves** (V) music (O)."

**QUESTIONS :**
1. Questions oui/non : Auxiliaire + Sujet + Verbe
   - "**Do** you like pizza?"
   - "**Is** she coming?"

2. Questions en Wh : Mot Wh + Auxiliaire + Sujet + Verbe
   - "**Where do** you live?"
   - "**What is** she doing?"

3. Exception - Wh comme sujet (pas d'auxiliaire) :
   - "**Who** broke the window?" (pas "Who did break")
   - "**What** happened?" (pas "What did happen")

**NÉGATIONS :** Sujet + Auxiliaire + Not + Verbe
- "I **do not** (don't) like it."
- "She **is not** (isn't) coming."

**ADVERBES :**
- Temps/Lieu généralement à la fin : "I saw him **yesterday**."
- Fréquence avant le verbe principal : "I **always** eat breakfast."

**ADJECTIFS :** Avant le nom
- "A **beautiful big** house" (pas "a house beautiful big")`,
    examples: [
      { en: "**What did** you **buy**? (Wh + aux + S + V)", fr: "**Qu'as-tu acheté** ?" },
      { en: "**Who** called you? (Wh as subject, no aux)", fr: "**Qui** t'a appelé ?" },
      { en: "I **don't** eat meat. (S + aux + not + V)", fr: "Je **ne mange pas** de viande." },
      { en: "She **always** arrives early. (adverb before verb)", fr: "Elle **arrive toujours** tôt." }
    ],
    exercises: [
      {
        id: 154,
        title: "Word Order",
        description: "Choose the correct word order.",
        questions: [
          {
            id: 1,
            question: "Which is correct?",
            options: ["Where you live?", "Where do you live?", "Where live you?"],
            correctAnswer: "Where do you live?",
            explanation: "Wh-word + auxiliary + subject + verb."
          },
          {
            id: 2,
            question: "Which is correct?",
            options: ["Who did call you?", "Who called you?", "Who you called?"],
            correctAnswer: "Who called you?",
            explanation: "'Who' is the subject, so no auxiliary needed."
          },
          {
            id: 3,
            question: "Which is correct?",
            options: ["I coffee drink every morning.", "Every morning I drink coffee.", "I drink coffee every morning."],
            correctAnswer: "I drink coffee every morning.",
            explanation: "Standard SVO order with time at end."
          },
          {
            id: 4,
            question: "Which is correct?",
            options: ["She likes very much chocolate.", "She very much likes chocolate.", "She likes chocolate very much."],
            correctAnswer: "She likes chocolate very much.",
            explanation: "'Very much' comes after the object."
          },
          {
            id: 5,
            question: "Which is correct?",
            options: ["What happened?", "What did happen?", "What did happened?"],
            correctAnswer: "What happened?",
            explanation: "'What' is the subject, no auxiliary needed."
          },
          {
            id: 6,
            question: "Which is correct?",
            options: ["Never I have seen this.", "I have never seen this.", "I never have seen this."],
            correctAnswer: "I have never seen this.",
            explanation: "Adverb between auxiliary and main verb."
          },
          {
            id: 7,
            question: "Which is correct?",
            options: ["Is she coming not?", "She is not coming?", "Is she not coming?"],
            correctAnswer: "Is she not coming?",
            explanation: "For questions: Is + subject + not + verb."
          },
          {
            id: 8,
            question: "Which is correct?",
            options: ["A car red big", "A big red car", "A red big car"],
            correctAnswer: "A big red car",
            explanation: "Size before color (OSASCOMP order)."
          },
          {
            id: 9,
            question: "Which is correct?",
            options: ["How much does it cost?", "How much it costs?", "How much costs it?"],
            correctAnswer: "How much does it cost?",
            explanation: "Wh + aux + subject + base verb."
          },
          {
            id: 10,
            question: "Which is correct?",
            options: ["She gave to me a present.", "She gave me a present.", "She gave a present to I."],
            correctAnswer: "She gave me a present.",
            explanation: "Give + indirect object + direct object."
          }
        ]
      }
    ]
  },
  {
    id: 'linking-words',
    titleEn: 'Linking Words and Conjunctions',
    titleFr: 'Mots de Liaison et Conjonctions',
    explanationEn: `**LINKING WORDS** connect ideas and show relationships between them.

**ADDITION:**
- and, also, as well as, moreover, furthermore, in addition
- "I like tea **and** coffee."
- "She speaks French. **Moreover**, she speaks German."

**CONTRAST:**
- but, however, although, despite, on the other hand, yet
- "He is rich **but** unhappy."
- "**Although** it rained, we went out."

**CAUSE/REASON:**
- because, since, as, due to, because of
- "I stayed home **because** I was ill."
- "**Due to** the weather, the flight was cancelled."

**RESULT:**
- so, therefore, consequently, as a result, thus
- "It was raining, **so** we stayed inside."
- "He worked hard. **Therefore**, he passed."

**PURPOSE:**
- to, in order to, so that, so as to
- "I study **to** learn."
- "She whispered **so that** no one would hear."

**TIME:**
- when, while, before, after, until, as soon as
- "I'll call you **when** I arrive."

**CONDITION:**
- if, unless, provided that, as long as
- "**If** you study, you'll pass."`,
    explanationFr: `**LES MOTS DE LIAISON** connectent les idées et montrent leurs relations.

**ADDITION :**
- and, also, as well as, moreover, furthermore, in addition
- "I like tea **and** coffee." (J'aime le thé et le café)
- "She speaks French. **Moreover**, she speaks German." (De plus...)

**CONTRASTE :**
- but, however, although, despite, on the other hand, yet
- "He is rich **but** unhappy." (Il est riche mais malheureux)
- "**Although** it rained, we went out." (Bien qu'il ait plu...)

**CAUSE/RAISON :**
- because, since, as, due to, because of
- "I stayed home **because** I was ill." (parce que)
- "**Due to** the weather, the flight was cancelled." (En raison de)

**RÉSULTAT :**
- so, therefore, consequently, as a result, thus
- "It was raining, **so** we stayed inside." (donc)
- "He worked hard. **Therefore**, he passed." (Par conséquent)

**BUT :**
- to, in order to, so that, so as to
- "I study **to** learn." (pour)
- "She whispered **so that** no one would hear." (pour que)

**TEMPS :**
- when, while, before, after, until, as soon as
- "I'll call you **when** I arrive." (quand)

**CONDITION :**
- if, unless, provided that, as long as
- "**If** you study, you'll pass." (si)`,
    examples: [
      { en: "**Although** he was tired, he kept working.", fr: "**Bien qu'**il était fatigué, il a continué à travailler." },
      { en: "She failed the exam **because** she didn't study.", fr: "Elle a raté l'examen **parce qu'**elle n'a pas étudié." },
      { en: "It's cold; **therefore**, wear a coat.", fr: "Il fait froid ; **donc**, mets un manteau." },
      { en: "I'll wait **until** you're ready.", fr: "J'attendrai **jusqu'à ce que** tu sois prêt." }
    ],
    exercises: [
      {
        id: 155,
        title: "Linking Words",
        description: "Choose the correct linking word.",
        questions: [
          {
            id: 1,
            question: "I love coffee, ___ I don't like tea.",
            options: ["and", "but", "so"],
            correctAnswer: "but",
            explanation: "'But' shows contrast."
          },
          {
            id: 2,
            question: "She was tired, ___ she went to bed early.",
            options: ["because", "so", "although"],
            correctAnswer: "so",
            explanation: "'So' shows result."
          },
          {
            id: 3,
            question: "I stayed home ___ I was ill.",
            options: ["so", "because", "although"],
            correctAnswer: "because",
            explanation: "'Because' shows reason."
          },
          {
            id: 4,
            question: "___ it was raining, we decided to go out.",
            options: ["Because", "So", "Although"],
            correctAnswer: "Although",
            explanation: "'Although' shows contrast (unexpected result)."
          },
          {
            id: 5,
            question: "I'll call you ___ I arrive.",
            options: ["while", "when", "until"],
            correctAnswer: "when",
            explanation: "'When' = at the moment I arrive."
          },
          {
            id: 6,
            question: "She studies hard ___ pass the exam.",
            options: ["for", "in order to", "so"],
            correctAnswer: "in order to",
            explanation: "'In order to' + infinitive shows purpose."
          },
          {
            id: 7,
            question: "He's very talented. ___, he's also humble.",
            options: ["But", "Moreover", "So"],
            correctAnswer: "Moreover",
            explanation: "'Moreover' adds additional information."
          },
          {
            id: 8,
            question: "I won't leave ___ you tell me the truth.",
            options: ["when", "until", "while"],
            correctAnswer: "until",
            explanation: "'Until' = I'll stay here and wait for the truth."
          },
          {
            id: 9,
            question: "___ the bad weather, the event was a success.",
            options: ["Although", "Despite", "Because of"],
            correctAnswer: "Despite",
            explanation: "'Despite' + noun shows contrast."
          },
          {
            id: 10,
            question: "The flight was cancelled ___ the storm.",
            options: ["due to", "so", "although"],
            correctAnswer: "due to",
            explanation: "'Due to' + noun shows cause."
          }
        ]
      }
    ]
  },
  {
    id: 'prepositions-movement',
    titleEn: 'Prepositions of Movement',
    titleFr: 'Prépositions de Mouvement',
    explanationEn: `**PREPOSITIONS OF MOVEMENT** show direction or motion from one place to another.

**TO** = destination
- "I'm going **to** school."
- "She walked **to** the park."

**INTO** = entering (outside → inside)
- "He jumped **into** the pool."
- "She walked **into** the room."

**OUT OF** = exiting (inside → outside)
- "He climbed **out of** the window."
- "She ran **out of** the house."

**ONTO** = moving to a surface
- "The cat jumped **onto** the table."
- "Put the book **onto** the shelf."

**OFF** = leaving a surface
- "The cat jumped **off** the table."
- "Take your feet **off** the sofa!"

**THROUGH** = from one side to the other (inside)
- "We drove **through** the tunnel."
- "She walked **through** the park."

**ACROSS** = from one side to the other (surface)
- "They swam **across** the river."
- "Walk **across** the street."

**ALONG** = following a line
- "We walked **along** the beach."

**PAST** = by the side of
- "I walked **past** the bank."

**OVER** = above and across
- "The plane flew **over** the city."
- "Jump **over** the fence."

**UNDER** = below something
- "The cat ran **under** the bed."`,
    explanationFr: `**LES PRÉPOSITIONS DE MOUVEMENT** indiquent la direction ou le mouvement d'un endroit à un autre.

**TO** = destination
- "I'm going **to** school." (Je vais à l'école)

**INTO** = entrer (extérieur → intérieur)
- "He jumped **into** the pool." (Il a sauté dans la piscine)

**OUT OF** = sortir (intérieur → extérieur)
- "He climbed **out of** the window." (Il est sorti par la fenêtre)

**ONTO** = se déplacer sur une surface
- "The cat jumped **onto** the table." (Le chat a sauté sur la table)

**OFF** = quitter une surface
- "The cat jumped **off** the table." (Le chat a sauté de la table)

**THROUGH** = d'un côté à l'autre (à travers)
- "We drove **through** the tunnel." (Nous avons traversé le tunnel)

**ACROSS** = d'un côté à l'autre (surface)
- "They swam **across** the river." (Ils ont traversé la rivière à la nage)

**ALONG** = le long de
- "We walked **along** the beach." (Nous avons marché le long de la plage)

**PAST** = devant (en passant)
- "I walked **past** the bank." (Je suis passé devant la banque)

**OVER** = au-dessus et de l'autre côté
- "Jump **over** the fence." (Saute par-dessus la clôture)

**UNDER** = en dessous
- "The cat ran **under** the bed." (Le chat a couru sous le lit)`,
    examples: [
      { en: "She walked **into** the shop and **out of** it 5 minutes later.", fr: "Elle est entrée **dans** le magasin et en est sortie 5 minutes plus tard." },
      { en: "The children ran **across** the field.", fr: "Les enfants ont couru **à travers** le champ." },
      { en: "We drove **through** the mountains.", fr: "Nous avons conduit **à travers** les montagnes." },
      { en: "The dog jumped **over** the fence.", fr: "Le chien a sauté **par-dessus** la clôture." }
    ],
    exercises: [
      {
        id: 156,
        title: "Prepositions of Movement",
        description: "Choose the correct preposition.",
        questions: [
          {
            id: 1,
            question: "She walked ___ the room and sat down.",
            options: ["in", "into", "to"],
            correctAnswer: "into",
            explanation: "'Into' shows entering a space."
          },
          {
            id: 2,
            question: "The cat jumped ___ the table.",
            options: ["on", "onto", "over"],
            correctAnswer: "onto",
            explanation: "'Onto' for movement to a surface."
          },
          {
            id: 3,
            question: "We swam ___ the river to the other side.",
            options: ["through", "across", "along"],
            correctAnswer: "across",
            explanation: "'Across' for crossing a surface."
          },
          {
            id: 4,
            question: "He drove ___ the tunnel for 10 minutes.",
            options: ["across", "through", "along"],
            correctAnswer: "through",
            explanation: "'Through' for going inside something."
          },
          {
            id: 5,
            question: "Take your books ___ the floor!",
            options: ["of", "off", "from"],
            correctAnswer: "off",
            explanation: "'Off' for removing from a surface."
          },
          {
            id: 6,
            question: "She walked ___ the beach for hours.",
            options: ["along", "through", "across"],
            correctAnswer: "along",
            explanation: "'Along' for following a line/path."
          },
          {
            id: 7,
            question: "The plane flew ___ the city.",
            options: ["across", "over", "through"],
            correctAnswer: "over",
            explanation: "'Over' for above and across."
          },
          {
            id: 8,
            question: "He climbed ___ the window to escape.",
            options: ["out", "out of", "off"],
            correctAnswer: "out of",
            explanation: "'Out of' for exiting through something."
          },
          {
            id: 9,
            question: "I walked ___ the bank on my way here.",
            options: ["past", "pass", "passed"],
            correctAnswer: "past",
            explanation: "'Past' = by the side of (preposition)."
          },
          {
            id: 10,
            question: "The ball rolled ___ the table.",
            options: ["under", "below", "down"],
            correctAnswer: "under",
            explanation: "'Under' for beneath something."
          }
        ]
      }
    ]
  },
  {
    id: 'prefixes-suffixes',
    titleEn: 'Prefixes and Suffixes',
    titleFr: 'Préfixes et Suffixes',
    explanationEn: `**PREFIXES** are added at the beginning of words to change meaning.
**SUFFIXES** are added at the end to change word class or meaning.

**COMMON PREFIXES:**

**Negative prefixes:**
- un-: unhappy, unusual, unfair
- dis-: disagree, disappear, dishonest
- im-/in-/il-/ir-: impossible, invisible, illegal, irregular
- mis-: misunderstand, mistake

**Other prefixes:**
- re-: redo, rewrite, return (again)
- pre-: preview, prepare (before)
- over-: overwork, overeat (too much)
- under-: underpay, underestimate (too little)

**COMMON SUFFIXES:**

**Noun suffixes:**
- -tion/-sion: information, decision
- -ness: happiness, sadness
- -ment: development, agreement
- -er/-or: teacher, actor
- -ity: possibility, reality

**Adjective suffixes:**
- -ful: beautiful, careful (full of)
- -less: careless, hopeless (without)
- -able/-ible: comfortable, possible
- -ous: dangerous, famous

**Adverb suffix:**
- -ly: quickly, carefully, happily

**Verb suffixes:**
- -ize/-ise: organize, realize
- -en: widen, strengthen`,
    explanationFr: `**LES PRÉFIXES** s'ajoutent au début des mots pour changer le sens.
**LES SUFFIXES** s'ajoutent à la fin pour changer la classe ou le sens du mot.

**PRÉFIXES COURANTS :**

**Préfixes négatifs :**
- un-: unhappy (malheureux), unusual (inhabituel)
- dis-: disagree (être en désaccord), disappear (disparaître)
- im-/in-/il-/ir-: impossible, invisible, illegal, irregular
- mis-: misunderstand (mal comprendre)

**Autres préfixes :**
- re-: redo (refaire), rewrite (réécrire) - encore
- pre-: preview (aperçu), prepare (préparer) - avant
- over-: overwork (trop travailler) - trop
- under-: underpay (sous-payer) - pas assez

**SUFFIXES COURANTS :**

**Suffixes de noms :**
- -tion/-sion: information, decision
- -ness: happiness (bonheur), sadness (tristesse)
- -ment: development (développement)
- -er/-or: teacher (professeur), actor (acteur)

**Suffixes d'adjectifs :**
- -ful: beautiful (beau), careful (prudent) - plein de
- -less: careless (négligent), hopeless (sans espoir) - sans
- -able/-ible: comfortable, possible
- -ous: dangerous (dangereux), famous (célèbre)

**Suffixe d'adverbe :**
- -ly: quickly (rapidement), carefully (prudemment)`,
    examples: [
      { en: "**un**happy → happy with **un-** prefix means 'not happy'", fr: "**un**happy → happy avec le préfixe **un-** signifie 'pas content'" },
      { en: "care → care**ful** (adjective) → care**fully** (adverb)", fr: "care → care**ful** (adjectif) → care**fully** (adverbe)" },
      { en: "possible → **im**possible (negative prefix)", fr: "possible → **im**possible (préfixe négatif)" },
      { en: "develop → develop**ment** (noun)", fr: "develop → develop**ment** (nom)" }
    ],
    exercises: [
      {
        id: 157,
        title: "Prefixes and Suffixes",
        description: "Choose the correct prefix or suffix.",
        questions: [
          {
            id: 1,
            question: "The opposite of 'happy' is ___.",
            options: ["dishappy", "unhappy", "inhappy"],
            correctAnswer: "unhappy",
            explanation: "'Un-' is used with 'happy' to mean 'not happy'."
          },
          {
            id: 2,
            question: "The noun form of 'develop' is ___.",
            options: ["developness", "development", "develoption"],
            correctAnswer: "development",
            explanation: "Develop + -ment = development."
          },
          {
            id: 3,
            question: "The opposite of 'possible' is ___.",
            options: ["unpossible", "dispossible", "impossible"],
            correctAnswer: "impossible",
            explanation: "'Im-' before 'p' for negative."
          },
          {
            id: 4,
            question: "'Quick' becomes an adverb as ___.",
            options: ["quickful", "quickly", "quickness"],
            correctAnswer: "quickly",
            explanation: "Adjective + -ly = adverb."
          },
          {
            id: 5,
            question: "Someone without care is ___.",
            options: ["careful", "careless", "carefulness"],
            correctAnswer: "careless",
            explanation: "Care + -less = without care."
          },
          {
            id: 6,
            question: "The opposite of 'agree' is ___.",
            options: ["unagree", "disagree", "inagree"],
            correctAnswer: "disagree",
            explanation: "'Dis-' is used with 'agree'."
          },
          {
            id: 7,
            question: "The noun form of 'happy' is ___.",
            options: ["happyness", "happiness", "happiment"],
            correctAnswer: "happiness",
            explanation: "Happy (drop y) + -iness = happiness."
          },
          {
            id: 8,
            question: "To write again is to ___.",
            options: ["prewrite", "rewrite", "unwrite"],
            correctAnswer: "rewrite",
            explanation: "'Re-' means 'again'."
          },
          {
            id: 9,
            question: "The opposite of 'legal' is ___.",
            options: ["unlegal", "dislegal", "illegal"],
            correctAnswer: "illegal",
            explanation: "'Il-' before 'l' for negative."
          },
          {
            id: 10,
            question: "Something full of danger is ___.",
            options: ["dangerly", "dangerous", "dangerful"],
            correctAnswer: "dangerous",
            explanation: "Danger + -ous = dangerous."
          }
        ]
      }
    ]
  },
  {
    id: 'inversion',
    titleEn: 'Inversion for Emphasis',
    titleFr: "L'Inversion pour l'Emphase",
    explanationEn: `**INVERSION** means putting the auxiliary/verb before the subject for emphasis or in formal writing.

**After negative adverbs at the start:**
- Never, Rarely, Seldom, Hardly, Scarcely, No sooner, Not only

Examples:
- "**Never have** I seen such beauty." (Not: Never I have seen)
- "**Rarely does** she complain."
- "**Not only did** he arrive late, (but) he also forgot the documents."
- "**Hardly had** I arrived when it started raining."

**With 'only' + time/place expressions:**
- "**Only then did** I understand."
- "**Only after** the meeting **did** we realize the problem."
- "**Only in Paris can** you find such cafés."

**In conditional sentences (formal, no 'if'):**
- "**Had** I known, I would have helped." (= If I had known)
- "**Were** she here, she would agree." (= If she were here)
- "**Should** you need help, call me." (= If you should need)

**After 'so' and 'such' for emphasis:**
- "**So beautiful was** the sunset that we stopped to watch."
- "**Such was** his anger that he couldn't speak."

**Note:** Inversion is more common in formal/literary English.`,
    explanationFr: `**L'INVERSION** consiste à mettre l'auxiliaire/verbe avant le sujet pour l'emphase ou dans un style formel.

**Après des adverbes négatifs en début de phrase :**
- Never, Rarely, Seldom, Hardly, Scarcely, No sooner, Not only

Exemples :
- "**Never have** I seen such beauty." (Jamais je n'ai vu une telle beauté)
- "**Rarely does** she complain." (Rarement se plaint-elle)
- "**Not only did** he arrive late, (but) he also forgot the documents."
- "**Hardly had** I arrived when it started raining."

**Avec 'only' + expressions de temps/lieu :**
- "**Only then did** I understand." (Ce n'est qu'alors que j'ai compris)
- "**Only after** the meeting **did** we realize the problem."

**Dans les phrases conditionnelles (formel, sans 'if') :**
- "**Had** I known, I would have helped." (= Si j'avais su)
- "**Were** she here, she would agree." (= Si elle était là)
- "**Should** you need help, call me." (= Si tu as besoin d'aide)

**Après 'so' et 'such' pour l'emphase :**
- "**So beautiful was** the sunset that we stopped to watch."
- "**Such was** his anger that he couldn't speak."

**Note :** L'inversion est plus courante dans l'anglais formel/littéraire.`,
    examples: [
      { en: "**Never have** I been so happy!", fr: "**Jamais** je n'ai été aussi heureux !" },
      { en: "**Had** I known, I would have called.", fr: "**Si j'avais su**, j'aurais appelé." },
      { en: "**Not only did** she win, but she broke the record.", fr: "**Non seulement** elle a gagné, mais elle a battu le record." },
      { en: "**Only then did** I realize my mistake.", fr: "**Ce n'est qu'alors** que j'ai réalisé mon erreur." }
    ],
    exercises: [
      {
        id: 158,
        title: "Inversion",
        description: "Choose the correct inverted form.",
        questions: [
          {
            id: 1,
            question: "Never ___ such a beautiful sunset.",
            options: ["I have seen", "have I seen", "I saw"],
            correctAnswer: "have I seen",
            explanation: "After 'Never': auxiliary + subject."
          },
          {
            id: 2,
            question: "Rarely ___ so much.",
            options: ["she eats", "does she eat", "she does eat"],
            correctAnswer: "does she eat",
            explanation: "After 'Rarely': does + subject + verb."
          },
          {
            id: 3,
            question: "___ I known, I would have helped.",
            options: ["If", "Had", "Have"],
            correctAnswer: "Had",
            explanation: "'Had I known' = If I had known (formal)."
          },
          {
            id: 4,
            question: "Not only ___ late, but he also forgot the files.",
            options: ["he arrived", "did he arrive", "arrived he"],
            correctAnswer: "did he arrive",
            explanation: "After 'Not only': did + subject + verb."
          },
          {
            id: 5,
            question: "Only then ___ the truth.",
            options: ["I understood", "did I understand", "I did understand"],
            correctAnswer: "did I understand",
            explanation: "After 'Only then': did + subject + verb."
          },
          {
            id: 6,
            question: "___ she here, she would help us.",
            options: ["If", "Were", "Was"],
            correctAnswer: "Were",
            explanation: "'Were she here' = If she were here (formal)."
          },
          {
            id: 7,
            question: "Hardly ___ home when the phone rang.",
            options: ["I had arrived", "had I arrived", "I arrived"],
            correctAnswer: "had I arrived",
            explanation: "After 'Hardly': had + subject + past participle."
          },
          {
            id: 8,
            question: "___ you need any help, please call me.",
            options: ["If", "Should", "Would"],
            correctAnswer: "Should",
            explanation: "'Should you need' = If you should need (formal)."
          },
          {
            id: 9,
            question: "So tired ___ that he fell asleep immediately.",
            options: ["he was", "was he", "did he"],
            correctAnswer: "was he",
            explanation: "'So + adjective + was/were + subject' for emphasis."
          },
          {
            id: 10,
            question: "No sooner ___ than it started raining.",
            options: ["I left", "had I left", "I had left"],
            correctAnswer: "had I left",
            explanation: "'No sooner had + subject + past participle'."
          }
        ]
      }
    ]
  },
  {
    id: 'cleft-sentences',
    titleEn: 'Cleft Sentences: It is/was... that',
    titleFr: 'Phrases Clivées : It is/was... that',
    explanationEn: `**CLEFT SENTENCES** split a simple sentence into two parts to emphasize one element.

**IT-CLEFTS (It is/was... that/who):**
Used to emphasize the subject, object, or adverbial.

Original: "John broke the window yesterday."
- Emphasizing WHO: "**It was John who** broke the window."
- Emphasizing WHAT: "**It was the window that** John broke."
- Emphasizing WHEN: "**It was yesterday that** John broke the window."

**WHAT-CLEFTS (What... is/was):**
Often emphasize the action or thing needed/wanted.

- "**What** I need **is** a coffee." (I need a coffee → emphasizing the coffee)
- "**What** happened **was** unbelievable."
- "**What** she said **was** true."

**ALL-CLEFTS:**
- "**All** I want **is** peace and quiet."
- "**All** you need **is** love."

**THE THING/REASON/PLACE CLEFTS:**
- "**The thing** I like most **is** the view."
- "**The reason** I called **is** to apologize."
- "**The place** where I feel happiest **is** home."

**Usage:**
- Common in spoken and written English
- Adds emphasis and focus
- Can clarify or correct information`,
    explanationFr: `**LES PHRASES CLIVÉES** divisent une phrase simple en deux parties pour souligner un élément.

**IT-CLEFTS (It is/was... that/who) :**
Utilisées pour souligner le sujet, l'objet ou l'adverbe.

Original : "John broke the window yesterday."
- Souligner QUI : "**It was John who** broke the window." (C'est John qui...)
- Souligner QUOI : "**It was the window that** John broke." (C'est la fenêtre que...)
- Souligner QUAND : "**It was yesterday that** John broke..." (C'est hier que...)

**WHAT-CLEFTS (What... is/was) :**
Soulignent souvent l'action ou ce dont on a besoin.

- "**What** I need **is** a coffee." (Ce dont j'ai besoin, c'est un café)
- "**What** happened **was** unbelievable." (Ce qui s'est passé était incroyable)
- "**What** she said **was** true." (Ce qu'elle a dit était vrai)

**ALL-CLEFTS :**
- "**All** I want **is** peace and quiet." (Tout ce que je veux, c'est...)
- "**All** you need **is** love." (Tout ce dont tu as besoin, c'est...)

**THE THING/REASON/PLACE CLEFTS :**
- "**The thing** I like most **is** the view." (Ce que j'aime le plus, c'est...)
- "**The reason** I called **is** to apologize." (La raison pour laquelle...)

**Usage :**
- Courant à l'oral et à l'écrit
- Ajoute de l'emphase et du focus
- Peut clarifier ou corriger une information`,
    examples: [
      { en: "**It was** Tom **who** called you. (emphasizing Tom)", fr: "**C'est** Tom **qui** t'a appelé." },
      { en: "**What** I really need **is** a vacation.", fr: "**Ce dont** j'ai vraiment besoin, **c'est** des vacances." },
      { en: "**All** I want **is** to be happy.", fr: "**Tout** ce que je veux, **c'est** être heureux." },
      { en: "**It was** in Paris **that** we first met.", fr: "**C'est** à Paris **que** nous nous sommes rencontrés." }
    ],
    exercises: [
      {
        id: 159,
        title: "Cleft Sentences",
        description: "Choose the correct cleft structure.",
        questions: [
          {
            id: 1,
            question: "___ John who broke the window.",
            options: ["It is", "It was", "What was"],
            correctAnswer: "It was",
            explanation: "'It was + person + who' to emphasize the person."
          },
          {
            id: 2,
            question: "___ I need is a cup of coffee.",
            options: ["It", "What", "That"],
            correctAnswer: "What",
            explanation: "'What + subject + verb + is' for what-cleft."
          },
          {
            id: 3,
            question: "It was the red dress ___ she bought.",
            options: ["what", "which", "that"],
            correctAnswer: "that",
            explanation: "'It was + object + that' to emphasize the object."
          },
          {
            id: 4,
            question: "___ I want is some peace and quiet.",
            options: ["What", "All", "It"],
            correctAnswer: "All",
            explanation: "'All + subject + verb + is' = the only thing."
          },
          {
            id: 5,
            question: "It ___ yesterday that I saw her.",
            options: ["is", "was", "were"],
            correctAnswer: "was",
            explanation: "'It was' for past time reference."
          },
          {
            id: 6,
            question: "What happened ___ completely unexpected.",
            options: ["is", "was", "were"],
            correctAnswer: "was",
            explanation: "'What happened was' for past events."
          },
          {
            id: 7,
            question: "___ she said made everyone laugh.",
            options: ["What", "It", "That"],
            correctAnswer: "What",
            explanation: "'What + subject + verb' as subject of sentence."
          },
          {
            id: 8,
            question: "It is ___ I rely on the most.",
            options: ["you who", "you that", "you which"],
            correctAnswer: "you who",
            explanation: "'Who' for people in cleft sentences."
          },
          {
            id: 9,
            question: "The reason ___ I called is to apologize.",
            options: ["why", "what", "which"],
            correctAnswer: "why",
            explanation: "'The reason why' is the standard structure."
          },
          {
            id: 10,
            question: "It was in 2020 ___ we moved to this house.",
            options: ["when", "that", "which"],
            correctAnswer: "that",
            explanation: "'It was + time + that' for emphasis on time."
          }
        ]
      }
    ]
  },
  {
    id: 'mixed-tenses-review',
    titleEn: 'Mixed Tenses Review',
    titleFr: 'Révision des Temps Mélangés',
    explanationEn: `This is a comprehensive review combining all the major English tenses.

**PRESENT TENSES:**
- Present Simple: habits, facts ("I **work** every day.")
- Present Continuous: now, temporary ("I **am working** now.")
- Present Perfect: experience, until now ("I **have worked** here for 5 years.")
- Present Perfect Continuous: ongoing action ("I **have been working** all day.")

**PAST TENSES:**
- Past Simple: completed past actions ("I **worked** yesterday.")
- Past Continuous: ongoing past actions ("I **was working** at 8 PM.")
- Past Perfect: before another past action ("I **had worked** before he arrived.")
- Past Perfect Continuous: ongoing before past ("I **had been working** for hours.")

**FUTURE TENSES:**
- Will: predictions, spontaneous ("I **will work** tomorrow.")
- Going to: plans, evidence ("I **am going to work** harder.")
- Future Continuous: ongoing future ("I **will be working** at 8.")
- Future Perfect: completed by future time ("I **will have worked** 10 hours by 6 PM.")

**Key tips:**
- Look for TIME MARKERS (yesterday, since, for, tomorrow, now)
- Consider the CONTEXT (completed? ongoing? connected to present?)
- Check for SIGNAL WORDS (already, just, yet, always, etc.)`,
    explanationFr: `C'est une révision complète combinant tous les temps principaux de l'anglais.

**TEMPS DU PRÉSENT :**
- Present Simple : habitudes, faits ("I **work** every day.")
- Present Continuous : maintenant, temporaire ("I **am working** now.")
- Present Perfect : expérience, jusqu'à maintenant ("I **have worked** here for 5 years.")
- Present Perfect Continuous : action en cours ("I **have been working** all day.")

**TEMPS DU PASSÉ :**
- Past Simple : actions passées terminées ("I **worked** yesterday.")
- Past Continuous : actions passées en cours ("I **was working** at 8 PM.")
- Past Perfect : avant une autre action passée ("I **had worked** before he arrived.")
- Past Perfect Continuous : en cours avant le passé ("I **had been working** for hours.")

**TEMPS DU FUTUR :**
- Will : prédictions, spontané ("I **will work** tomorrow.")
- Going to : plans, preuves ("I **am going to work** harder.")
- Future Continuous : futur en cours ("I **will be working** at 8.")
- Future Perfect : terminé avant un moment futur ("I **will have worked** 10 hours by 6 PM.")

**Conseils clés :**
- Cherchez les MARQUEURS DE TEMPS (yesterday, since, for, tomorrow, now)
- Considérez le CONTEXTE (terminé ? en cours ? lié au présent ?)
- Vérifiez les MOTS INDICATEURS (already, just, yet, always, etc.)`,
    examples: [
      { en: "I **have been waiting** for an hour. (ongoing until now)", fr: "J'**attends** depuis une heure. (en cours jusqu'à maintenant)" },
      { en: "When I **arrived**, she **had** already **left**. (past before past)", fr: "Quand je **suis arrivé**, elle **était** déjà **partie**." },
      { en: "By next year, I **will have graduated**. (completed before future time)", fr: "L'année prochaine, j'**aurai obtenu** mon diplôme." },
      { en: "I **was sleeping** when you **called**. (ongoing interrupted)", fr: "Je **dormais** quand tu **as appelé**." }
    ],
    exercises: [
      {
        id: 160,
        title: "Mixed Tenses Review",
        description: "Choose the correct tense.",
        questions: [
          {
            id: 1,
            question: "I ___ for you since 9 o'clock.",
            options: ["wait", "am waiting", "have been waiting"],
            correctAnswer: "have been waiting",
            explanation: "'Since' + ongoing action = Present Perfect Continuous."
          },
          {
            id: 2,
            question: "She ___ to London twice last year.",
            options: ["went", "has gone", "was going"],
            correctAnswer: "went",
            explanation: "'Last year' = specific past time, use Past Simple."
          },
          {
            id: 3,
            question: "By the time you arrive, I ___ dinner.",
            options: ["will cook", "will have cooked", "cook"],
            correctAnswer: "will have cooked",
            explanation: "'By the time' + future = Future Perfect."
          },
          {
            id: 4,
            question: "I ___ TV when the power went out.",
            options: ["watched", "was watching", "have watched"],
            correctAnswer: "was watching",
            explanation: "Ongoing action interrupted = Past Continuous."
          },
          {
            id: 5,
            question: "___ you ever ___ Japanese food?",
            options: ["Did... try", "Have... tried", "Were... trying"],
            correctAnswer: "Have... tried",
            explanation: "'Ever' for life experience = Present Perfect."
          },
          {
            id: 6,
            question: "Look! The bus ___!",
            options: ["comes", "is coming", "came"],
            correctAnswer: "is coming",
            explanation: "Action happening now = Present Continuous."
          },
          {
            id: 7,
            question: "After she ___ the report, she went home.",
            options: ["finished", "had finished", "was finishing"],
            correctAnswer: "had finished",
            explanation: "Action completed before another past action = Past Perfect."
          },
          {
            id: 8,
            question: "This time next week, I ___ on a beach.",
            options: ["will lie", "will be lying", "am lying"],
            correctAnswer: "will be lying",
            explanation: "Ongoing action at a specific future time = Future Continuous."
          },
          {
            id: 9,
            question: "I ___ him for years. He's a good friend.",
            options: ["know", "knew", "have known"],
            correctAnswer: "have known",
            explanation: "Started in past, continues now = Present Perfect."
          },
          {
            id: 10,
            question: "She ___ for two hours before the interview started.",
            options: ["waited", "was waiting", "had been waiting"],
            correctAnswer: "had been waiting",
            explanation: "Ongoing action before a past moment = Past Perfect Continuous."
          }
        ]
      }
    ]
  }
];
