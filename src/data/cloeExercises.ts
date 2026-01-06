// CLOE Exam Preparation Exercises
// Original exercises inspired by the CLOE certification format
// CLOE = Compétences Linguistiques Orales et Ecrites

export interface CloeQuestion {
  id: number;
  type: 'mcq' | 'fill-blank' | 'word-bank' | 'sentence-order' | 'listening';
  question: string;
  context?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  explanationFr: string;
}

export interface CloeExercise {
  id: string;
  title: string;
  titleFr: string;
  category: 'vocabulary' | 'grammar' | 'expressions' | 'reading' | 'listening';
  difficulty: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  description: string;
  descriptionFr: string;
  questions: CloeQuestion[];
  estimatedTime: number; // minutes
}

export const cloeExercises: CloeExercise[] = [
  // VOCABULARY EXERCISES
  {
    id: 'cloe-vocab-1',
    title: 'Business Vocabulary: The Office',
    titleFr: 'Vocabulaire professionnel : Le bureau',
    category: 'vocabulary',
    difficulty: 'B1',
    description: 'Practice essential business vocabulary related to office environments.',
    descriptionFr: 'Pratiquez le vocabulaire professionnel essentiel lié aux environnements de bureau.',
    estimatedTime: 8,
    questions: [
      {
        id: 1,
        type: 'mcq',
        question: 'Choose the best word to complete the sentence:',
        context: 'Please _____ the document to the email before sending it.',
        options: ['attach', 'join', 'connect', 'link'],
        correctAnswer: 'attach',
        explanation: 'In business English, we "attach" files to emails. "Join" is used for meetings or people, "connect" for systems or people, and "link" for websites.',
        explanationFr: 'En anglais professionnel, on dit "attach" (joindre) des fichiers aux e-mails. "Join" est utilisé pour les réunions, "connect" pour les systèmes, et "link" pour les sites web.'
      },
      {
        id: 2,
        type: 'mcq',
        question: 'Select the correct term:',
        context: 'The meeting has been _____ until next Thursday due to scheduling conflicts.',
        options: ['postponed', 'delayed', 'cancelled', 'moved'],
        correctAnswer: 'postponed',
        explanation: '"Postponed" is the correct formal term for rescheduling something to a later date. "Delayed" implies a shorter wait, "cancelled" means it won\'t happen, and "moved" needs a preposition.',
        explanationFr: '"Postponed" est le terme formel correct pour reporter quelque chose à une date ultérieure. "Delayed" implique une attente plus courte, "cancelled" signifie annulé.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete the sentence with the appropriate word:',
        context: 'Could you please _____ (FORWARD) this email to the marketing team?',
        correctAnswer: 'forward',
        explanation: '"Forward" means to send an email you received to another person. It\'s a common action in professional communication.',
        explanationFr: '"Forward" signifie transférer un e-mail reçu à une autre personne. C\'est une action courante dans la communication professionnelle.'
      },
      {
        id: 4,
        type: 'mcq',
        question: 'Which phrase is most appropriate in a formal email?',
        context: 'You want to ask for information about a product.',
        options: [
          'I would like to inquire about your products.',
          'Tell me about your products.',
          'I want to know about your products.',
          'Give me info on your products.'
        ],
        correctAnswer: 'I would like to inquire about your products.',
        explanation: '"I would like to inquire" is the most formal and professional way to ask for information in business correspondence.',
        explanationFr: '"I would like to inquire" est la manière la plus formelle et professionnelle de demander des informations dans la correspondance professionnelle.'
      },
      {
        id: 5,
        type: 'mcq',
        question: 'Choose the correct word:',
        context: 'The CEO will _____ the quarterly results at the annual meeting.',
        options: ['present', 'say', 'tell', 'speak'],
        correctAnswer: 'present',
        explanation: '"Present" is used when formally showing or explaining information to an audience, especially in business contexts.',
        explanationFr: '"Present" est utilisé lorsqu\'on montre ou explique formellement des informations à un public, surtout dans un contexte professionnel.'
      },
      {
        id: 6,
        type: 'word-bank',
        question: 'Fill in the blanks with the correct words from the word bank:',
        context: 'Before the meeting, I need to _____ the agenda and _____ the documents for distribution.',
        options: ['review', 'prepare', 'schedule', 'confirm'],
        correctAnswer: ['review', 'prepare'],
        explanation: 'We "review" (examine) the agenda and "prepare" (get ready) documents before a meeting.',
        explanationFr: 'On "review" (examine) l\'ordre du jour et on "prepare" (prépare) les documents avant une réunion.'
      },
      {
        id: 7,
        type: 'mcq',
        question: 'Select the most professional alternative:',
        context: 'How would you end a formal business email?',
        options: [
          'Kind regards,',
          'Bye!',
          'Later!',
          'Thanks a bunch,'
        ],
        correctAnswer: 'Kind regards,',
        explanation: '"Kind regards" is a professional and widely accepted closing for formal business emails.',
        explanationFr: '"Kind regards" est une formule de politesse professionnelle et largement acceptée pour les e-mails professionnels.'
      },
      {
        id: 8,
        type: 'fill-blank',
        question: 'Complete with the correct form:',
        context: 'The department has _____ (SUBMIT) the budget proposal for approval.',
        correctAnswer: 'submitted',
        explanation: 'With present perfect (has), we need the past participle "submitted" to describe a completed action.',
        explanationFr: 'Avec le present perfect (has), on utilise le participe passé "submitted" pour décrire une action accomplie.'
      }
    ]
  },
  {
    id: 'cloe-grammar-1',
    title: 'Grammar Essentials: Tenses in Context',
    titleFr: 'Grammaire essentielle : Les temps en contexte',
    category: 'grammar',
    difficulty: 'B1',
    description: 'Practice using the correct tenses in professional contexts.',
    descriptionFr: 'Pratiquez l\'utilisation des temps corrects dans des contextes professionnels.',
    estimatedTime: 10,
    questions: [
      {
        id: 1,
        type: 'mcq',
        question: 'Choose the correct form:',
        context: 'The company _____ its new product line next month.',
        options: ['will launch', 'launches', 'is launching', 'has launched'],
        correctAnswer: 'will launch',
        explanation: 'We use "will + verb" for scheduled future events, especially in formal announcements.',
        explanationFr: 'On utilise "will + verbe" pour les événements futurs programmés, surtout dans les annonces formelles.'
      },
      {
        id: 2,
        type: 'mcq',
        question: 'Select the grammatically correct option:',
        context: 'I _____ in this company since 2018.',
        options: ['have been working', 'am working', 'work', 'was working'],
        correctAnswer: 'have been working',
        explanation: 'Present perfect continuous is used for an action that started in the past and continues to the present, especially with "since".',
        explanationFr: 'Le present perfect continuous est utilisé pour une action commencée dans le passé et qui continue dans le présent, surtout avec "since".'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Put the verb in the correct form:',
        context: 'By the time the meeting starts, we _____ (FINISH) the report.',
        correctAnswer: 'will have finished',
        explanation: 'Future perfect is used for actions that will be completed before a specific point in the future.',
        explanationFr: 'Le futur antérieur est utilisé pour des actions qui seront accomplies avant un moment précis dans le futur.'
      },
      {
        id: 4,
        type: 'mcq',
        question: 'Which sentence is correct?',
        context: '',
        options: [
          'She has been working here for five years.',
          'She is working here for five years.',
          'She works here for five years.',
          'She had been working here for five years.'
        ],
        correctAnswer: 'She has been working here for five years.',
        explanation: 'Present perfect continuous with "for" describes duration of an ongoing action.',
        explanationFr: 'Le present perfect continuous avec "for" décrit la durée d\'une action en cours.'
      },
      {
        id: 5,
        type: 'sentence-order',
        question: 'Put the words in the correct order:',
        context: 'meeting / the / has / postponed / been / until / Friday',
        correctAnswer: ['The meeting has been postponed until Friday'],
        explanation: 'This is a passive voice sentence in present perfect: Subject + has/have been + past participle.',
        explanationFr: 'C\'est une phrase passive au present perfect : Sujet + has/have been + participe passé.'
      },
      {
        id: 6,
        type: 'mcq',
        question: 'Choose the best option:',
        context: 'If I _____ earlier, I would have finished the project on time.',
        options: ['had started', 'started', 'would start', 'have started'],
        correctAnswer: 'had started',
        explanation: 'Third conditional uses past perfect in the if-clause for unreal past situations.',
        explanationFr: 'Le troisième conditionnel utilise le past perfect dans la proposition conditionnelle pour des situations irréelles du passé.'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete with the appropriate form:',
        context: 'The manager asked me if I _____ (CAN) attend the conference next week.',
        correctAnswer: 'could',
        explanation: 'In reported speech, "can" changes to "could" when the reporting verb is in the past.',
        explanationFr: 'Dans le discours indirect, "can" devient "could" quand le verbe introducteur est au passé.'
      },
      {
        id: 8,
        type: 'mcq',
        question: 'Select the correct answer:',
        context: 'While I _____ on the phone, my colleague _____ in with an urgent message.',
        options: [
          'was talking / came',
          'talked / was coming',
          'had talked / came',
          'was talking / was coming'
        ],
        correctAnswer: 'was talking / came',
        explanation: 'Past continuous for the longer action + past simple for the interrupting action.',
        explanationFr: 'Past continuous pour l\'action plus longue + past simple pour l\'action qui interrompt.'
      }
    ]
  },
  {
    id: 'cloe-expressions-1',
    title: 'Professional Expressions & Idioms',
    titleFr: 'Expressions professionnelles et idiomes',
    category: 'expressions',
    difficulty: 'B2',
    description: 'Master common business expressions and idiomatic phrases used in professional settings.',
    descriptionFr: 'Maîtrisez les expressions professionnelles courantes et les locutions idiomatiques utilisées dans les contextes professionnels.',
    estimatedTime: 10,
    questions: [
      {
        id: 1,
        type: 'mcq',
        question: 'What does "to touch base" mean in a business context?',
        context: '"Let\'s touch base next week to discuss the project progress."',
        options: [
          'To briefly connect or communicate with someone',
          'To play baseball',
          'To visit an office',
          'To start a new project'
        ],
        correctAnswer: 'To briefly connect or communicate with someone',
        explanation: '"Touch base" is a common business idiom meaning to make brief contact with someone, usually to update or check in.',
        explanationFr: '"Touch base" est un idiome professionnel courant signifiant prendre brièvement contact avec quelqu\'un, généralement pour faire le point.'
      },
      {
        id: 2,
        type: 'mcq',
        question: 'Choose the expression that means "to begin":',
        context: 'In a meeting, you want to say that the team should start working on a new initiative.',
        options: ['kick off', 'wrap up', 'touch base', 'follow up'],
        correctAnswer: 'kick off',
        explanation: '"Kick off" means to start or begin something, often used for projects, meetings, or initiatives.',
        explanationFr: '"Kick off" signifie commencer ou démarrer quelque chose, souvent utilisé pour les projets, réunions ou initiatives.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete the expression:',
        context: 'We need to think outside the _____ to solve this problem creatively.',
        correctAnswer: 'box',
        explanation: '"Think outside the box" means to think creatively or unconventionally.',
        explanationFr: '"Think outside the box" signifie penser de manière créative ou non conventionnelle.'
      },
      {
        id: 4,
        type: 'mcq',
        question: 'What does "to be on the same page" mean?',
        context: '"Before we proceed, let\'s make sure we\'re all on the same page."',
        options: [
          'To share the same understanding',
          'To read the same document',
          'To be in the same room',
          'To work on the same computer'
        ],
        correctAnswer: 'To share the same understanding',
        explanation: '"On the same page" means everyone has the same understanding or agrees on something.',
        explanationFr: '"On the same page" signifie que tout le monde a la même compréhension ou est d\'accord sur quelque chose.'
      },
      {
        id: 5,
        type: 'mcq',
        question: 'Choose the correct expression:',
        context: 'The project has some problems but they are manageable. The speaker wants to say:',
        options: [
          'There are a few hiccups but nothing major.',
          'There are a few earthquakes but nothing major.',
          'There are a few storms but nothing major.',
          'There are a few crashes but nothing major.'
        ],
        correctAnswer: 'There are a few hiccups but nothing major.',
        explanation: '"Hiccups" in business English refers to minor problems or setbacks.',
        explanationFr: '"Hiccups" en anglais professionnel désigne des problèmes mineurs ou des contretemps.'
      },
      {
        id: 6,
        type: 'mcq',
        question: 'What does "to get the ball rolling" mean?',
        context: '"Let\'s get the ball rolling on the new marketing campaign."',
        options: [
          'To start an activity or process',
          'To play a game',
          'To move furniture',
          'To end a project'
        ],
        correctAnswer: 'To start an activity or process',
        explanation: '"Get the ball rolling" means to begin something or initiate action.',
        explanationFr: '"Get the ball rolling" signifie commencer quelque chose ou initier une action.'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete the phrase:',
        context: 'Could you give me a _____ of the meeting? I couldn\'t attend.',
        correctAnswer: 'recap',
        explanation: 'A "recap" is a brief summary or review of what happened.',
        explanationFr: 'Un "recap" est un bref résumé ou une révision de ce qui s\'est passé.'
      },
      {
        id: 8,
        type: 'mcq',
        question: 'What is the meaning of "to cut corners"?',
        context: '"We can\'t cut corners on quality control."',
        options: [
          'To do something the cheapest or easiest way, often sacrificing quality',
          'To remove shapes from paper',
          'To drive around corners quickly',
          'To reduce the size of something'
        ],
        correctAnswer: 'To do something the cheapest or easiest way, often sacrificing quality',
        explanation: '"Cut corners" means to save time, money, or effort by doing something less thoroughly.',
        explanationFr: '"Cut corners" signifie économiser du temps, de l\'argent ou des efforts en faisant quelque chose moins consciencieusement.'
      }
    ]
  },
  {
    id: 'cloe-reading-1',
    title: 'Reading Comprehension: Business Email',
    titleFr: 'Compréhension écrite : E-mail professionnel',
    category: 'reading',
    difficulty: 'B1',
    description: 'Practice understanding professional emails and business correspondence.',
    descriptionFr: 'Pratiquez la compréhension des e-mails professionnels et de la correspondance commerciale.',
    estimatedTime: 12,
    questions: [
      {
        id: 1,
        type: 'mcq',
        question: 'Read the email and answer the question:',
        context: `Subject: Project Update - Q3 Marketing Campaign

Dear Team,

I hope this email finds you well. I wanted to provide a quick update on our Q3 marketing campaign. 

As of today, we have completed the initial research phase and are moving into the creative development stage. The focus groups showed positive reactions to our proposed messaging, particularly around the sustainability theme.

However, we are facing a slight delay due to the vendor not delivering the promotional materials on time. We expect this to push our launch date back by approximately one week.

Please let me know if you have any questions or concerns.

Best regards,
Sarah Thompson
Marketing Director`,
        options: [
          'The launch will be delayed by about a week.',
          'The project has been cancelled.',
          'The vendor has completed all deliveries.',
          'The team is still in the research phase.'
        ],
        correctAnswer: 'The launch will be delayed by about a week.',
        explanation: 'The email clearly states that the delay is "approximately one week" due to vendor issues.',
        explanationFr: 'L\'e-mail indique clairement que le retard est "d\'environ une semaine" en raison de problèmes avec le fournisseur.'
      },
      {
        id: 2,
        type: 'mcq',
        question: 'Based on the email above, what is the current project phase?',
        context: '',
        options: [
          'Creative development',
          'Research phase',
          'Launch phase',
          'Completion phase'
        ],
        correctAnswer: 'Creative development',
        explanation: 'The email says they "have completed the initial research phase and are moving into the creative development stage."',
        explanationFr: 'L\'e-mail dit qu\'ils "ont terminé la phase de recherche initiale et passent à l\'étape de développement créatif."'
      },
      {
        id: 3,
        type: 'mcq',
        question: 'What was the focus groups\' reaction?',
        context: '',
        options: [
          'Positive, especially about sustainability',
          'Negative about all aspects',
          'Mixed reactions',
          'No reactions were mentioned'
        ],
        correctAnswer: 'Positive, especially about sustainability',
        explanation: 'The email mentions "positive reactions to our proposed messaging, particularly around the sustainability theme."',
        explanationFr: 'L\'e-mail mentionne des "réactions positives à notre message proposé, en particulier autour du thème de la durabilité."'
      },
      {
        id: 4,
        type: 'mcq',
        question: 'Who is the sender of the email?',
        context: '',
        options: [
          'Sarah Thompson, Marketing Director',
          'A vendor',
          'A team member',
          'The CEO'
        ],
        correctAnswer: 'Sarah Thompson, Marketing Director',
        explanation: 'The signature at the bottom clearly identifies the sender as Sarah Thompson, Marketing Director.',
        explanationFr: 'La signature en bas identifie clairement l\'expéditeur comme Sarah Thompson, Directrice Marketing.'
      },
      {
        id: 5,
        type: 'fill-blank',
        question: 'Complete based on the text:',
        context: 'The delay is caused by the _____ not delivering materials on time.',
        correctAnswer: 'vendor',
        explanation: 'The email explicitly states that "the vendor not delivering the promotional materials on time" is the cause of the delay.',
        explanationFr: 'L\'e-mail indique explicitement que "le fournisseur ne livrant pas les matériaux promotionnels à temps" est la cause du retard.'
      }
    ]
  },
  {
    id: 'cloe-vocab-2',
    title: 'Vocabulary: Professional Communication',
    titleFr: 'Vocabulaire : Communication professionnelle',
    category: 'vocabulary',
    difficulty: 'A2',
    description: 'Learn essential vocabulary for professional phone calls and meetings.',
    descriptionFr: 'Apprenez le vocabulaire essentiel pour les appels téléphoniques et réunions professionnels.',
    estimatedTime: 8,
    questions: [
      {
        id: 1,
        type: 'mcq',
        question: 'What do you say when answering a business call?',
        context: '',
        options: [
          'Good morning, ABC Company, how may I help you?',
          'Yeah, what do you want?',
          'Hello, who is this?',
          'Speak now.'
        ],
        correctAnswer: 'Good morning, ABC Company, how may I help you?',
        explanation: 'A professional phone greeting includes a greeting, company name, and offer of assistance.',
        explanationFr: 'Un accueil téléphonique professionnel inclut une salutation, le nom de l\'entreprise et une offre d\'aide.'
      },
      {
        id: 2,
        type: 'mcq',
        question: 'Which phrase is used to ask someone to wait on the phone?',
        context: '',
        options: [
          'Could you please hold for a moment?',
          'Wait there.',
          'Don\'t hang up.',
          'Stay on the line forever.'
        ],
        correctAnswer: 'Could you please hold for a moment?',
        explanation: '"Hold" is the professional term for waiting on a phone line.',
        explanationFr: '"Hold" est le terme professionnel pour attendre au téléphone.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Complete the phrase:',
        context: 'I\'m calling to _____ a meeting for next Tuesday.',
        correctAnswer: 'schedule',
        explanation: '"Schedule" means to arrange or plan a meeting at a specific time.',
        explanationFr: '"Schedule" signifie organiser ou planifier une réunion à un moment précis.'
      },
      {
        id: 4,
        type: 'mcq',
        question: 'What does "I\'ll get back to you" mean?',
        context: '"I don\'t have that information right now, but I\'ll get back to you."',
        options: [
          'I will contact you again with the information',
          'I will return to your office',
          'I will call you back immediately',
          'I will walk behind you'
        ],
        correctAnswer: 'I will contact you again with the information',
        explanation: '"Get back to someone" means to respond or return a call/email later.',
        explanationFr: '"Get back to someone" signifie répondre ou rappeler plus tard.'
      },
      {
        id: 5,
        type: 'mcq',
        question: 'Which is a polite way to interrupt in a meeting?',
        context: '',
        options: [
          'Sorry to interrupt, but may I add something?',
          'Stop talking, I have an idea.',
          'Be quiet, I want to speak.',
          'You\'re wrong, let me explain.'
        ],
        correctAnswer: 'Sorry to interrupt, but may I add something?',
        explanation: 'Starting with an apology and asking permission is the polite way to interrupt.',
        explanationFr: 'Commencer par une excuse et demander la permission est la manière polie d\'interrompre.'
      },
      {
        id: 6,
        type: 'mcq',
        question: 'What is an "agenda" in a meeting context?',
        context: '',
        options: [
          'A list of topics to be discussed',
          'A type of notebook',
          'A digital calendar',
          'A meeting room'
        ],
        correctAnswer: 'A list of topics to be discussed',
        explanation: 'An agenda is a list of items or topics to be discussed during a meeting.',
        explanationFr: 'Un agenda (ordre du jour) est une liste de points ou sujets à discuter pendant une réunion.'
      },
      {
        id: 7,
        type: 'fill-blank',
        question: 'Complete the sentence:',
        context: 'Let me _____ the main points before we finish.',
        correctAnswer: 'summarize',
        explanation: 'To "summarize" means to give a brief overview of the main points.',
        explanationFr: '"Summarize" signifie donner un bref aperçu des points principaux.'
      },
      {
        id: 8,
        type: 'mcq',
        question: 'What does "take minutes" mean in a meeting?',
        context: '',
        options: [
          'To write notes of what was discussed',
          'To count the time',
          'To be punctual',
          'To steal time from others'
        ],
        correctAnswer: 'To write notes of what was discussed',
        explanation: 'Meeting "minutes" are the official notes or record of what was discussed and decided.',
        explanationFr: 'Les "minutes" d\'une réunion sont les notes officielles ou le compte-rendu de ce qui a été discuté et décidé.'
      }
    ]
  }
];

// Helper functions
export const getCloeExerciseById = (id: string): CloeExercise | undefined => {
  return cloeExercises.find(ex => ex.id === id);
};

export const getCloeExercisesByCategory = (category: CloeExercise['category']): CloeExercise[] => {
  return cloeExercises.filter(ex => ex.category === category);
};

export const getCloeExercisesByDifficulty = (difficulty: CloeExercise['difficulty']): CloeExercise[] => {
  return cloeExercises.filter(ex => ex.difficulty === difficulty);
};

export const cloeCategories = [
  { id: 'vocabulary', name: 'Vocabulary', nameFr: 'Vocabulaire', icon: 'BookOpen' },
  { id: 'grammar', name: 'Grammar & Syntax', nameFr: 'Grammaire et Syntaxe', icon: 'Pencil' },
  { id: 'expressions', name: 'Expressions', nameFr: 'Expressions', icon: 'MessageSquare' },
  { id: 'reading', name: 'Reading Comprehension', nameFr: 'Compréhension écrite', icon: 'FileText' },
  { id: 'listening', name: 'Listening Comprehension', nameFr: 'Compréhension orale', icon: 'Headphones' }
] as const;

export const cloeLevels = [
  { level: 'A1', description: 'Beginner', descriptionFr: 'Débutant' },
  { level: 'A2', description: 'Elementary', descriptionFr: 'Élémentaire' },
  { level: 'B1', description: 'Intermediate', descriptionFr: 'Intermédiaire' },
  { level: 'B2', description: 'Upper Intermediate', descriptionFr: 'Intermédiaire supérieur' },
  { level: 'C1', description: 'Advanced', descriptionFr: 'Avancé' }
] as const;
