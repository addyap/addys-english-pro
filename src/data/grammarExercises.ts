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
            question: "Next month, the company ___ its new product.",
            options: ["will launch", "will be launching"],
            correctAnswer: "will be launching",
            explanation: "Both are possible but 'will launch' is more natural for a planned event."
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
            question: "I tried ___ the door, but it was stuck.",
            options: ["push", "pushing", "to push"],
            correctAnswer: "pushing",
            explanation: "'Try + gerund' = experiment with a method."
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
  }
];
