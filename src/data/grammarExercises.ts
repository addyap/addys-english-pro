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
  }
];
