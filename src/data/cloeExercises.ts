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
  },
  // ============= ADDITIONAL VOCABULARY EXERCISES =============
  {
    id: 'cloe-vocab-3',
    title: 'Vocabulary: Travel & Transport',
    titleFr: 'Vocabulaire : Voyages et Transport',
    category: 'vocabulary',
    difficulty: 'A2',
    description: 'Essential vocabulary for business trips and transportation.',
    descriptionFr: 'Vocabulaire essentiel pour les voyages d\'affaires et le transport.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct word:', context: 'I need to _____ a flight to London for next Monday.', options: ['book', 'reserve', 'order', 'ask'], correctAnswer: 'book', explanation: 'We "book" flights, hotels, and tickets. "Reserve" is also correct but "book" is more common for flights.', explanationFr: 'On "book" (réserve) des vols, hôtels et billets. "Reserve" est aussi correct mais "book" est plus courant.' },
      { id: 2, type: 'mcq', question: 'What is a "layover"?', context: '', options: ['A stop between connecting flights', 'A type of airplane', 'A travel insurance', 'A delay'], correctAnswer: 'A stop between connecting flights', explanation: 'A layover is the time spent waiting at an airport between connecting flights.', explanationFr: 'Un "layover" est le temps d\'attente dans un aéroport entre deux vols de correspondance.' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'Please fasten your seat _____ before takeoff.', correctAnswer: 'belt', explanation: 'A "seat belt" is the safety strap in planes and cars.', explanationFr: 'Une "seat belt" (ceinture de sécurité) est la sangle de sécurité dans les avions et voitures.' },
      { id: 4, type: 'mcq', question: 'Which sentence is correct?', context: '', options: ['My flight departs at 8 AM.', 'My flight leaves away at 8 AM.', 'My flight goes out at 8 AM.', 'My flight exits at 8 AM.'], correctAnswer: 'My flight departs at 8 AM.', explanation: 'Flights "depart" or "leave" – both are correct.', explanationFr: 'Les vols "depart" ou "leave" – les deux sont corrects.' },
      { id: 5, type: 'mcq', question: 'What is "boarding"?', context: '', options: ['Getting on the plane', 'Buying a ticket', 'Checking luggage', 'Going through security'], correctAnswer: 'Getting on the plane', explanation: '"Boarding" means entering and getting on the aircraft.', explanationFr: '"Boarding" signifie monter à bord de l\'avion.' },
      { id: 6, type: 'fill-blank', question: 'Complete:', context: 'I prefer the _____ seat because I like to look out the window.', correctAnswer: 'window', explanation: 'A "window seat" is next to the window. An "aisle seat" is next to the corridor.', explanationFr: 'Un "window seat" (siège hublot) est près de la fenêtre. Un "aisle seat" est côté couloir.' }
    ]
  },
  {
    id: 'cloe-vocab-4',
    title: 'Vocabulary: Finance & Banking',
    titleFr: 'Vocabulaire : Finance et Banque',
    category: 'vocabulary',
    difficulty: 'B2',
    description: 'Financial terms for business professionals.',
    descriptionFr: 'Termes financiers pour les professionnels.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'What is an "invoice"?', context: '', options: ['A bill requesting payment for goods or services', 'A bank statement', 'A receipt for a purchase', 'A contract'], correctAnswer: 'A bill requesting payment for goods or services', explanation: 'An invoice is a document sent by a seller to a buyer listing products/services and amounts due.', explanationFr: 'Une "invoice" (facture) est un document envoyé par un vendeur à un acheteur listant les produits/services et montants dus.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'The company has a strong cash _____ this quarter.', correctAnswer: 'flow', explanation: '"Cash flow" refers to the movement of money in and out of a business.', explanationFr: '"Cash flow" (flux de trésorerie) désigne les mouvements d\'argent entrant et sortant d\'une entreprise.' },
      { id: 3, type: 'mcq', question: 'What does "ROI" stand for?', context: '', options: ['Return on Investment', 'Rate of Interest', 'Report on Income', 'Revenue of Industry'], correctAnswer: 'Return on Investment', explanation: 'ROI measures the profitability of an investment.', explanationFr: 'ROI (retour sur investissement) mesure la rentabilité d\'un investissement.' },
      { id: 4, type: 'mcq', question: 'Choose the correct term:', context: 'The annual _____ shows all income and expenses for the year.', options: ['budget', 'receipt', 'ticket', 'menu'], correctAnswer: 'budget', explanation: 'A budget is a financial plan listing expected income and expenses.', explanationFr: 'Un "budget" est un plan financier listant les revenus et dépenses prévus.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'We need to reduce our operational _____ to improve profitability.', correctAnswer: 'costs', explanation: '"Operational costs" are the expenses required to run a business.', explanationFr: 'Les "operational costs" (coûts opérationnels) sont les dépenses nécessaires au fonctionnement d\'une entreprise.' },
      { id: 6, type: 'mcq', question: 'What is a "deadline"?', context: '', options: ['The final date for completing a task', 'A budget limit', 'A type of loan', 'A payment method'], correctAnswer: 'The final date for completing a task', explanation: 'A deadline is the last day/time by which something must be done.', explanationFr: 'Une "deadline" (date limite) est le dernier jour/moment pour faire quelque chose.' }
    ]
  },
  {
    id: 'cloe-vocab-5',
    title: 'Vocabulary: Technology & IT',
    titleFr: 'Vocabulaire : Technologie et Informatique',
    category: 'vocabulary',
    difficulty: 'B1',
    description: 'Common tech vocabulary for the modern workplace.',
    descriptionFr: 'Vocabulaire technologique courant pour le lieu de travail moderne.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'What does "to update" mean?', context: '', options: ['To install a newer version', 'To delete a file', 'To print a document', 'To save data'], correctAnswer: 'To install a newer version', explanation: '"Update" means to bring software or information to the latest version.', explanationFr: '"Update" signifie mettre à jour un logiciel ou des informations vers la dernière version.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'I can\'t open the file. Can you _____ it in a different format?', correctAnswer: 'save', explanation: 'We "save" files in different formats to ensure compatibility.', explanationFr: 'On "save" (enregistre) des fichiers dans différents formats pour assurer la compatibilité.' },
      { id: 3, type: 'mcq', question: 'What is "bandwidth"?', context: '', options: ['The capacity for data transfer', 'A type of cable', 'A software program', 'A computer screen'], correctAnswer: 'The capacity for data transfer', explanation: 'Bandwidth refers to the amount of data that can be transmitted in a given time.', explanationFr: '"Bandwidth" (bande passante) désigne la quantité de données transmissibles dans un temps donné.' },
      { id: 4, type: 'mcq', question: 'What does "to log in" mean?', context: '', options: ['To enter your username and password to access a system', 'To write in a journal', 'To record a meeting', 'To print a report'], correctAnswer: 'To enter your username and password to access a system', explanation: '"Log in" (or "log on") means to authenticate and access a computer system or account.', explanationFr: '"Log in" signifie s\'authentifier et accéder à un système informatique ou compte.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'Please _____ the document to my email address.', correctAnswer: 'send', explanation: 'We "send" documents, emails, and messages electronically.', explanationFr: 'On "send" (envoie) des documents, e-mails et messages électroniquement.' },
      { id: 6, type: 'mcq', question: 'What is a "backup"?', context: '', options: ['A copy of data stored for safety', 'A power supply', 'A keyboard shortcut', 'An error message'], correctAnswer: 'A copy of data stored for safety', explanation: 'A backup is a copy of files saved in case the original is lost or damaged.', explanationFr: 'Un "backup" (sauvegarde) est une copie de fichiers gardée en cas de perte ou dommage de l\'original.' }
    ]
  },
  // ============= ADDITIONAL GRAMMAR EXERCISES =============
  {
    id: 'cloe-grammar-2',
    title: 'Grammar: Modal Verbs',
    titleFr: 'Grammaire : Verbes modaux',
    category: 'grammar',
    difficulty: 'B1',
    description: 'Practice using modal verbs correctly in professional contexts.',
    descriptionFr: 'Pratiquez l\'utilisation correcte des verbes modaux dans des contextes professionnels.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the best modal:', context: 'You _____ submit the report by Friday. It\'s mandatory.', options: ['must', 'might', 'could', 'would'], correctAnswer: 'must', explanation: '"Must" expresses strong obligation or requirement.', explanationFr: '"Must" exprime une obligation ou exigence forte.' },
      { id: 2, type: 'mcq', question: 'Select the correct option:', context: '_____ you please send me the file?', options: ['Could', 'Must', 'Have to', 'Might'], correctAnswer: 'Could', explanation: '"Could" is used for polite requests.', explanationFr: '"Could" est utilisé pour les demandes polies.' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'We _____ (NOT HAVE TO) work tomorrow. It\'s a holiday.', correctAnswer: 'don\'t have to', explanation: '"Don\'t have to" means something is not necessary (no obligation).', explanationFr: '"Don\'t have to" signifie que quelque chose n\'est pas nécessaire (pas d\'obligation).' },
      { id: 4, type: 'mcq', question: 'Which sentence expresses possibility?', context: '', options: ['The meeting might be postponed.', 'The meeting must be postponed.', 'The meeting should be postponed.', 'The meeting has to be postponed.'], correctAnswer: 'The meeting might be postponed.', explanation: '"Might" expresses possibility – something that could happen but isn\'t certain.', explanationFr: '"Might" exprime la possibilité – quelque chose qui pourrait arriver mais n\'est pas certain.' },
      { id: 5, type: 'mcq', question: 'Choose the correct form:', context: 'You _____ be more careful with client data.', options: ['should', 'might', 'would', 'could'], correctAnswer: 'should', explanation: '"Should" is used for advice or recommendations.', explanationFr: '"Should" est utilisé pour les conseils ou recommandations.' },
      { id: 6, type: 'fill-blank', question: 'Complete:', context: 'I _____ (CAN) speak French fluently now after two years of lessons.', correctAnswer: 'can', explanation: '"Can" expresses present ability.', explanationFr: '"Can" exprime une capacité présente.' }
    ]
  },
  {
    id: 'cloe-grammar-3',
    title: 'Grammar: Passive Voice',
    titleFr: 'Grammaire : Voix passive',
    category: 'grammar',
    difficulty: 'B2',
    description: 'Master the passive voice for formal business writing.',
    descriptionFr: 'Maîtrisez la voix passive pour la rédaction professionnelle formelle.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct passive form:', context: 'The report _____ by the team yesterday.', options: ['was completed', 'has completed', 'is completing', 'completed'], correctAnswer: 'was completed', explanation: 'Past simple passive = was/were + past participle.', explanationFr: 'Passé simple passif = was/were + participe passé.' },
      { id: 2, type: 'fill-blank', question: 'Convert to passive:', context: 'They manufacture the products in Germany. → The products _____ in Germany.', correctAnswer: 'are manufactured', explanation: 'Present simple passive = am/is/are + past participle.', explanationFr: 'Présent simple passif = am/is/are + participe passé.' },
      { id: 3, type: 'mcq', question: 'Which is the correct passive form?', context: 'The new policy _____ next month.', options: ['will be implemented', 'will implement', 'is implementing', 'has implemented'], correctAnswer: 'will be implemented', explanation: 'Future passive = will be + past participle.', explanationFr: 'Futur passif = will be + participe passé.' },
      { id: 4, type: 'mcq', question: 'Identify the passive sentence:', context: '', options: ['The contract was signed by both parties.', 'Both parties signed the contract.', 'The contract signing took place yesterday.', 'We need to sign the contract.'], correctAnswer: 'The contract was signed by both parties.', explanation: 'Passive uses be + past participle; the doer (if mentioned) comes after "by".', explanationFr: 'La voix passive utilise be + participe passé ; l\'agent (s\'il est mentionné) vient après "by".' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'The email _____ (SEND) to all employees this morning.', correctAnswer: 'was sent', explanation: 'Past passive of "send" = was sent.', explanationFr: 'Passif passé de "send" = was sent.' },
      { id: 6, type: 'mcq', question: 'Which sentence is in passive voice?', context: '', options: ['Applications are being reviewed.', 'We are reviewing applications.', 'The team reviews applications.', 'Applications arrived yesterday.'], correctAnswer: 'Applications are being reviewed.', explanation: 'Present continuous passive = am/is/are + being + past participle.', explanationFr: 'Présent continu passif = am/is/are + being + participe passé.' }
    ]
  },
  {
    id: 'cloe-grammar-4',
    title: 'Grammar: Reported Speech',
    titleFr: 'Grammaire : Discours indirect',
    category: 'grammar',
    difficulty: 'B2',
    description: 'Practice converting direct speech to reported speech.',
    descriptionFr: 'Pratiquez la conversion du discours direct en discours indirect.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Convert to reported speech:', context: '"I will finish the project tomorrow," she said.', options: ['She said she would finish the project the next day.', 'She said she will finish the project tomorrow.', 'She said I would finish the project the next day.', 'She told she will finish the project.'], correctAnswer: 'She said she would finish the project the next day.', explanation: 'In reported speech, "will" becomes "would" and "tomorrow" becomes "the next day".', explanationFr: 'Dans le discours indirect, "will" devient "would" et "tomorrow" devient "the next day".' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: '"We are working on it," they explained. → They explained that they _____ working on it.', correctAnswer: 'were', explanation: '"Are" changes to "were" in reported speech with past reporting verb.', explanationFr: '"Are" devient "were" dans le discours indirect avec un verbe au passé.' },
      { id: 3, type: 'mcq', question: 'Choose the correct reported form:', context: '"Can you help me?" he asked.', options: ['He asked if I could help him.', 'He asked if I can help him.', 'He asked can I help him.', 'He asked that I could help him.'], correctAnswer: 'He asked if I could help him.', explanation: 'Yes/no questions use "if" or "whether"; "can" becomes "could".', explanationFr: 'Les questions oui/non utilisent "if" ou "whether" ; "can" devient "could".' },
      { id: 4, type: 'mcq', question: 'Select the correct option:', context: '"Where is the meeting room?" she asked.', options: ['She asked where the meeting room was.', 'She asked where was the meeting room.', 'She asked where is the meeting room.', 'She asked that where the meeting room was.'], correctAnswer: 'She asked where the meeting room was.', explanation: 'In reported questions, use statement word order (subject + verb).', explanationFr: 'Dans les questions indirectes, utilisez l\'ordre affirmatif (sujet + verbe).' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: '"Don\'t be late," the manager told us. → The manager told us _____ to be late.', correctAnswer: 'not', explanation: 'Negative imperatives become "not + to + verb" in reported speech.', explanationFr: 'Les impératifs négatifs deviennent "not + to + verbe" au discours indirect.' },
      { id: 6, type: 'mcq', question: 'Which is correct?', context: '"I have finished the report," John said.', options: ['John said he had finished the report.', 'John said he has finished the report.', 'John said I had finished the report.', 'John told he had finished the report.'], correctAnswer: 'John said he had finished the report.', explanation: 'Present perfect "have finished" becomes past perfect "had finished".', explanationFr: 'Le present perfect "have finished" devient past perfect "had finished".' }
    ]
  },
  // ============= ADDITIONAL EXPRESSIONS EXERCISES =============
  {
    id: 'cloe-expressions-2',
    title: 'Expressions: Negotiations & Agreements',
    titleFr: 'Expressions : Négociations et accords',
    category: 'expressions',
    difficulty: 'B2',
    description: 'Key phrases for business negotiations.',
    descriptionFr: 'Phrases clés pour les négociations commerciales.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'What does "to meet someone halfway" mean?', context: '', options: ['To compromise', 'To schedule a meeting', 'To walk together', 'To agree completely'], correctAnswer: 'To compromise', explanation: '"Meet halfway" means both parties make concessions to reach an agreement.', explanationFr: '"Meet halfway" signifie que les deux parties font des concessions pour parvenir à un accord.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'Let\'s put all our cards on the _____. I want complete transparency.', correctAnswer: 'table', explanation: '"Put your cards on the table" means to be completely honest and open.', explanationFr: '"Put your cards on the table" signifie être complètement honnête et ouvert.' },
      { id: 3, type: 'mcq', question: 'What does "a win-win situation" mean?', context: '', options: ['Both parties benefit', 'Only one side wins', 'Nobody wins', 'The game continues'], correctAnswer: 'Both parties benefit', explanation: 'A win-win is an outcome where all parties gain something.', explanationFr: 'Un "win-win" est un résultat où toutes les parties gagnent quelque chose.' },
      { id: 4, type: 'mcq', question: 'What does "to close a deal" mean?', context: '', options: ['To finalize an agreement', 'To end negotiations without success', 'To refuse an offer', 'To start a negotiation'], correctAnswer: 'To finalize an agreement', explanation: '"Close a deal" means to successfully complete a business transaction.', explanationFr: '"Close a deal" signifie conclure avec succès une transaction commerciale.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'I think we can reach a _____ on this issue.', correctAnswer: 'compromise', explanation: 'A "compromise" is an agreement where both sides give up something.', explanationFr: 'Un "compromise" est un accord où les deux parties cèdent quelque chose.' },
      { id: 6, type: 'mcq', question: 'What is a "bottom line" in negotiations?', context: '', options: ['The minimum acceptable outcome', 'The first offer', 'The maximum price', 'A type of contract'], correctAnswer: 'The minimum acceptable outcome', explanation: 'Your "bottom line" is the least you will accept in a negotiation.', explanationFr: 'Votre "bottom line" est le minimum que vous accepterez dans une négociation.' }
    ]
  },
  {
    id: 'cloe-expressions-3',
    title: 'Expressions: Giving Presentations',
    titleFr: 'Expressions : Faire des présentations',
    category: 'expressions',
    difficulty: 'B1',
    description: 'Useful phrases for professional presentations.',
    descriptionFr: 'Phrases utiles pour les présentations professionnelles.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'How do you start a presentation?', context: '', options: ['Good morning, everyone. Thank you for being here today.', 'So, let\'s begin immediately.', 'Hello, I\'m going to talk now.', 'OK, everybody listen.'], correctAnswer: 'Good morning, everyone. Thank you for being here today.', explanation: 'A professional presentation starts with a greeting and thanks.', explanationFr: 'Une présentation professionnelle commence par une salutation et des remerciements.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'Let me _____ by giving you an overview of today\'s agenda.', correctAnswer: 'begin', explanation: '"Let me begin" is a common way to start the content of a presentation.', explanationFr: '"Let me begin" est une manière courante de commencer le contenu d\'une présentation.' },
      { id: 3, type: 'mcq', question: 'How do you introduce a new topic?', context: '', options: ['Moving on to the next point...', 'Anyway, the next thing...', 'Now something else...', 'OK, different topic now.'], correctAnswer: 'Moving on to the next point...', explanation: '"Moving on" is a professional transition phrase.', explanationFr: '"Moving on" est une phrase de transition professionnelle.' },
      { id: 4, type: 'mcq', question: 'How do you refer to a chart?', context: '', options: ['As you can see from this graph...', 'Look at this picture.', 'Here is a drawing.', 'This shows some numbers.'], correctAnswer: 'As you can see from this graph...', explanation: '"As you can see" directs attention and introduces visual information.', explanationFr: '"As you can see" attire l\'attention et introduit des informations visuelles.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'That brings me to the _____ of my presentation today.', correctAnswer: 'end', explanation: '"That brings me to the end" is a professional way to conclude.', explanationFr: '"That brings me to the end" est une manière professionnelle de conclure.' },
      { id: 6, type: 'mcq', question: 'How do you invite questions?', context: '', options: ['If you have any questions, I\'d be happy to answer them now.', 'Questions? Speak now.', 'Anyone want to ask something?', 'OK, that\'s all, questions?'], correctAnswer: 'If you have any questions, I\'d be happy to answer them now.', explanation: 'This is the polite and professional way to open a Q&A session.', explanationFr: 'C\'est la manière polie et professionnelle d\'ouvrir une session de questions-réponses.' }
    ]
  },
  // ============= ADDITIONAL READING EXERCISES =============
  {
    id: 'cloe-reading-2',
    title: 'Reading: Job Advertisement',
    titleFr: 'Compréhension écrite : Offre d\'emploi',
    category: 'reading',
    difficulty: 'B1',
    description: 'Practice understanding job postings and requirements.',
    descriptionFr: 'Pratiquez la compréhension des offres d\'emploi et des exigences.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Read the job ad and answer:', context: 'Marketing Coordinator\n\nLocation: Paris (hybrid working available)\nSalary: €35,000 - €42,000 + benefits\n\nRequirements:\n• Bachelor\'s degree in Marketing or related field\n• 2-3 years of experience in digital marketing\n• Excellent written and spoken English (B2 level minimum)\n• Proficiency in social media management tools\n• Strong analytical skills\n\nKey Responsibilities:\n• Develop and implement marketing campaigns\n• Manage company social media accounts\n• Analyze campaign performance and prepare reports\n\nTo apply, please send your CV and cover letter to careers@company.com', options: ['2-3 years in digital marketing', '5 years of experience', 'No experience required', '10 years of experience'], correctAnswer: '2-3 years in digital marketing', explanation: 'The ad clearly states "2-3 years of experience in digital marketing" as a requirement.', explanationFr: 'L\'annonce indique clairement "2-3 ans d\'expérience en marketing digital" comme exigence.' },
      { id: 2, type: 'mcq', question: 'What type of working arrangement is offered?', context: '', options: ['Hybrid (office and remote)', 'Fully remote', 'Office only', 'Flexible hours only'], correctAnswer: 'Hybrid (office and remote)', explanation: 'The ad mentions "hybrid working available", meaning a mix of office and remote work.', explanationFr: 'L\'annonce mentionne "hybrid working available", signifiant un mélange de travail au bureau et à distance.' },
      { id: 3, type: 'fill-blank', question: 'Complete based on the text:', context: 'The minimum English level required is _____.', correctAnswer: 'B2', explanation: 'The requirements state "B2 level minimum" for English.', explanationFr: 'Les exigences indiquent "niveau B2 minimum" pour l\'anglais.' },
      { id: 4, type: 'mcq', question: 'What should applicants send?', context: '', options: ['CV and cover letter', 'CV only', 'Cover letter only', 'Reference letters'], correctAnswer: 'CV and cover letter', explanation: 'The ad says "send your CV and cover letter".', explanationFr: 'L\'annonce dit "envoyez votre CV et lettre de motivation".' },
      { id: 5, type: 'mcq', question: 'Which skill is NOT mentioned?', context: '', options: ['Project management', 'Analytical skills', 'Social media management', 'English proficiency'], correctAnswer: 'Project management', explanation: 'Project management is not listed in the requirements.', explanationFr: 'La gestion de projet n\'est pas listée dans les exigences.' }
    ]
  },
  {
    id: 'cloe-reading-3',
    title: 'Reading: Company Policy',
    titleFr: 'Compréhension écrite : Politique d\'entreprise',
    category: 'reading',
    difficulty: 'B2',
    description: 'Understand internal company communications.',
    descriptionFr: 'Comprenez les communications internes de l\'entreprise.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Read and answer:', context: 'MEMO: Remote Work Policy Update\n\nEffective Date: January 1, 2025\n\nDear Colleagues,\n\nFollowing the recent employee survey, we are pleased to announce updates to our remote work policy:\n\n1. Employees may work from home up to 3 days per week\n2. Core hours (10 AM - 3 PM) must be observed regardless of location\n3. Department meetings on Tuesdays are mandatory in-person\n4. All remote work must be pre-approved by your line manager\n\nPlease note that this policy will be reviewed quarterly. Employees who abuse the policy may have their remote work privileges revoked.\n\nFor questions, contact HR at hr@company.com.\n\nBest regards,\nHuman Resources', options: ['Up to 3 days', 'Unlimited days', '1 day only', '5 days'], correctAnswer: 'Up to 3 days', explanation: 'The policy states "Employees may work from home up to 3 days per week".', explanationFr: 'La politique indique "Les employés peuvent travailler de chez eux jusqu\'à 3 jours par semaine".' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'Core hours are from 10 AM to _____ PM.', correctAnswer: '3', explanation: 'The memo specifies "Core hours (10 AM - 3 PM)".', explanationFr: 'Le mémo précise "Heures de base (10h - 15h)".' },
      { id: 3, type: 'mcq', question: 'What happens on Tuesdays?', context: '', options: ['Mandatory in-person department meetings', 'Remote work days', 'No meetings allowed', 'Half-day working'], correctAnswer: 'Mandatory in-person department meetings', explanation: 'The policy states "Department meetings on Tuesdays are mandatory in-person".', explanationFr: 'La politique indique "Les réunions de département le mardi sont obligatoirement en personne".' },
      { id: 4, type: 'mcq', question: 'Who must approve remote work?', context: '', options: ['Line manager', 'HR department', 'CEO', 'No approval needed'], correctAnswer: 'Line manager', explanation: 'The memo states "All remote work must be pre-approved by your line manager".', explanationFr: 'Le mémo indique "Tout travail à distance doit être pré-approuvé par votre manager direct".' },
      { id: 5, type: 'mcq', question: 'How often is the policy reviewed?', context: '', options: ['Quarterly', 'Monthly', 'Annually', 'Never'], correctAnswer: 'Quarterly', explanation: 'The memo says "this policy will be reviewed quarterly".', explanationFr: 'Le mémo dit "cette politique sera révisée trimestriellement".' }
    ]
  },
  // ============= LISTENING COMPREHENSION EXERCISES =============
  {
    id: 'cloe-listening-1',
    title: 'Listening: Business Phone Call',
    titleFr: 'Compréhension orale : Appel professionnel',
    category: 'listening',
    difficulty: 'B1',
    description: 'Practice understanding professional phone conversations.',
    descriptionFr: 'Pratiquez la compréhension des conversations téléphoniques professionnelles.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'listening', question: 'Listen to the phone call and answer: Why is Sarah calling?', context: 'Good morning, Thompson Industries. This is Sarah Martin from ABC Solutions. I\'m calling to schedule a meeting with Mr. Johnson regarding our new software proposal. We discussed this briefly at the conference last week, and he expressed interest in learning more. Would next Tuesday at 2 PM work for him?', options: ['To schedule a meeting about a software proposal', 'To cancel an appointment', 'To place an order', 'To file a complaint'], correctAnswer: 'To schedule a meeting about a software proposal', explanation: 'Sarah mentions she\'s calling "to schedule a meeting" about "our new software proposal".', explanationFr: 'Sarah mentionne qu\'elle appelle "pour planifier une réunion" concernant "notre nouvelle proposition de logiciel".' },
      { id: 2, type: 'listening', question: 'Where did Sarah and Mr. Johnson first meet?', context: '', options: ['At a conference', 'At the office', 'Online', 'At a restaurant'], correctAnswer: 'At a conference', explanation: 'She says "We discussed this briefly at the conference last week."', explanationFr: 'Elle dit "Nous en avons brièvement parlé à la conférence la semaine dernière."' },
      { id: 3, type: 'listening', question: 'What time is proposed for the meeting?', context: '', options: ['2 PM', '10 AM', '3 PM', '4 PM'], correctAnswer: '2 PM', explanation: 'Sarah asks "Would next Tuesday at 2 PM work for him?"', explanationFr: 'Sarah demande "Est-ce que mardi prochain à 14h lui conviendrait ?"' },
      { id: 4, type: 'listening', question: 'What company does Sarah work for?', context: '', options: ['ABC Solutions', 'Thompson Industries', 'Johnson Corp', 'Martin Enterprises'], correctAnswer: 'ABC Solutions', explanation: 'She introduces herself as "Sarah Martin from ABC Solutions".', explanationFr: 'Elle se présente comme "Sarah Martin de ABC Solutions".' }
    ]
  },
  {
    id: 'cloe-listening-2',
    title: 'Listening: Meeting Extract',
    titleFr: 'Compréhension orale : Extrait de réunion',
    category: 'listening',
    difficulty: 'B2',
    description: 'Understand key information from business meetings.',
    descriptionFr: 'Comprenez les informations clés des réunions professionnelles.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'listening', question: 'Listen and answer: What is the main topic of this meeting?', context: 'Alright everyone, let\'s get started. As you know, we\'re here to discuss the Q4 marketing budget. Sales have been strong this quarter, so we have some flexibility. I propose we increase our digital advertising spend by 15% and allocate additional funds for the new product launch in November. However, we\'ll need to cut back on print advertising. Does anyone have concerns about this approach?', options: ['Q4 marketing budget allocation', 'Staff hiring plans', 'Office relocation', 'Product development'], correctAnswer: 'Q4 marketing budget allocation', explanation: 'The speaker says "we\'re here to discuss the Q4 marketing budget".', explanationFr: 'L\'orateur dit "nous sommes ici pour discuter du budget marketing du Q4".' },
      { id: 2, type: 'listening', question: 'By how much does the speaker propose to increase digital advertising?', context: '', options: ['15%', '10%', '20%', '25%'], correctAnswer: '15%', explanation: 'The proposal is to "increase our digital advertising spend by 15%".', explanationFr: 'La proposition est "d\'augmenter nos dépenses en publicité digitale de 15%".' },
      { id: 3, type: 'listening', question: 'What will be reduced?', context: '', options: ['Print advertising', 'Digital advertising', 'Product launches', 'Staff bonuses'], correctAnswer: 'Print advertising', explanation: 'The speaker says "we\'ll need to cut back on print advertising".', explanationFr: 'L\'orateur dit "nous devrons réduire la publicité imprimée".' },
      { id: 4, type: 'listening', question: 'When is the new product launch planned?', context: '', options: ['November', 'December', 'October', 'January'], correctAnswer: 'November', explanation: 'The speaker mentions "the new product launch in November".', explanationFr: 'L\'orateur mentionne "le lancement du nouveau produit en novembre".' }
    ]
  },
  {
    id: 'cloe-listening-3',
    title: 'Listening: Voicemail Message',
    titleFr: 'Compréhension orale : Message vocal',
    category: 'listening',
    difficulty: 'A2',
    description: 'Practice understanding voicemail messages.',
    descriptionFr: 'Pratiquez la compréhension des messages vocaux.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'listening', question: 'Listen to the voicemail and answer: Who is leaving the message?', context: 'Hi, this is David Chen from Globalex Shipping. I\'m calling about your order number 4572. Unfortunately, there\'s been a delay with the delivery. The package was supposed to arrive today, but due to weather conditions, it will now arrive on Friday. I apologize for any inconvenience. If you have any questions, please call me back at 555-0142. Thank you.', options: ['David Chen from Globalex Shipping', 'A customer', 'A delivery driver', 'The CEO'], correctAnswer: 'David Chen from Globalex Shipping', explanation: 'He introduces himself as "David Chen from Globalex Shipping".', explanationFr: 'Il se présente comme "David Chen de Globalex Shipping".' },
      { id: 2, type: 'listening', question: 'What is the order number?', context: '', options: ['4572', '4527', '4752', '4275'], correctAnswer: '4572', explanation: 'David mentions "your order number 4572".', explanationFr: 'David mentionne "votre numéro de commande 4572".' },
      { id: 3, type: 'listening', question: 'Why is there a delay?', context: '', options: ['Weather conditions', 'Technical problems', 'Staff shortage', 'Wrong address'], correctAnswer: 'Weather conditions', explanation: 'He says the delay is "due to weather conditions".', explanationFr: 'Il dit que le retard est "dû aux conditions météorologiques".' },
      { id: 4, type: 'listening', question: 'When will the package arrive?', context: '', options: ['Friday', 'Today', 'Tomorrow', 'Next week'], correctAnswer: 'Friday', explanation: 'David says "it will now arrive on Friday".', explanationFr: 'David dit "il arrivera maintenant vendredi".' }
    ]
  },
  {
    id: 'cloe-listening-4',
    title: 'Listening: Office Announcement',
    titleFr: 'Compréhension orale : Annonce de bureau',
    category: 'listening',
    difficulty: 'B1',
    description: 'Understand workplace announcements and updates.',
    descriptionFr: 'Comprenez les annonces et mises à jour du lieu de travail.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'listening', question: 'Listen and answer: What is being announced?', context: 'Attention all staff. This is a reminder that the office will be closed next Monday for the national holiday. Please ensure all urgent tasks are completed by Friday. Also, the IT department will be performing system maintenance over the weekend, so you may experience some issues accessing your email on Saturday morning. If you need technical support, please contact the IT helpdesk before 5 PM today. Thank you for your cooperation.', options: ['Office closure and IT maintenance', 'A new policy', 'Staff meeting', 'Fire drill'], correctAnswer: 'Office closure and IT maintenance', explanation: 'The announcement covers the office closing for a holiday and IT maintenance.', explanationFr: 'L\'annonce couvre la fermeture du bureau pour un jour férié et la maintenance informatique.' },
      { id: 2, type: 'listening', question: 'When will the office be closed?', context: '', options: ['Next Monday', 'This Friday', 'Saturday', 'Sunday'], correctAnswer: 'Next Monday', explanation: 'The announcement says "the office will be closed next Monday".', explanationFr: 'L\'annonce dit "le bureau sera fermé lundi prochain".' },
      { id: 3, type: 'listening', question: 'When should urgent tasks be completed?', context: '', options: ['By Friday', 'By Thursday', 'By Monday', 'By Saturday'], correctAnswer: 'By Friday', explanation: 'Staff are asked to complete urgent tasks "by Friday".', explanationFr: 'On demande au personnel de terminer les tâches urgentes "d\'ici vendredi".' },
      { id: 4, type: 'listening', question: 'When might email access be affected?', context: '', options: ['Saturday morning', 'Monday morning', 'Friday evening', 'Sunday afternoon'], correctAnswer: 'Saturday morning', explanation: 'The announcement warns about issues "on Saturday morning".', explanationFr: 'L\'annonce avertit de problèmes "samedi matin".' }
    ]
  },
  // ============= MORE VOCABULARY EXERCISES =============
  {
    id: 'cloe-vocab-6',
    title: 'Vocabulary: Human Resources',
    titleFr: 'Vocabulaire : Ressources humaines',
    category: 'vocabulary',
    difficulty: 'B1',
    description: 'HR and employment-related vocabulary.',
    descriptionFr: 'Vocabulaire lié aux RH et à l\'emploi.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'What is a "probation period"?', context: '', options: ['A trial period for new employees', 'A vacation period', 'A lunch break', 'A retirement plan'], correctAnswer: 'A trial period for new employees', explanation: 'Probation is the initial period when a new employee\'s performance is evaluated.', explanationFr: 'La période d\'essai est la période initiale où les performances d\'un nouvel employé sont évaluées.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'She received a _____ after working at the company for two years.', correctAnswer: 'promotion', explanation: 'A "promotion" is advancement to a higher position.', explanationFr: 'Une "promotion" est une avancement à un poste supérieur.' },
      { id: 3, type: 'mcq', question: 'What does "to resign" mean?', context: '', options: ['To voluntarily leave a job', 'To be fired', 'To retire', 'To get a raise'], correctAnswer: 'To voluntarily leave a job', explanation: '"Resign" means to quit your job by choice.', explanationFr: '"Resign" signifie quitter son emploi par choix.' },
      { id: 4, type: 'mcq', question: 'What is an "annual review"?', context: '', options: ['A yearly performance evaluation', 'A holiday party', 'A financial audit', 'A safety inspection'], correctAnswer: 'A yearly performance evaluation', explanation: 'Annual reviews assess employee performance once per year.', explanationFr: 'Les évaluations annuelles évaluent la performance des employés une fois par an.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'All employees are entitled to 25 days of paid _____ per year.', correctAnswer: 'leave', explanation: '"Paid leave" (or "annual leave") refers to vacation days.', explanationFr: '"Paid leave" (congé payé) désigne les jours de vacances.' },
      { id: 6, type: 'mcq', question: 'What is "redundancy"?', context: '', options: ['Job loss because the role is no longer needed', 'Working overtime', 'A type of bonus', 'A training program'], correctAnswer: 'Job loss because the role is no longer needed', explanation: 'Redundancy occurs when a position is eliminated, not due to employee fault.', explanationFr: 'Le licenciement économique se produit quand un poste est supprimé, pas à cause d\'une faute de l\'employé.' }
    ]
  },
  {
    id: 'cloe-vocab-7',
    title: 'Vocabulary: Customer Service',
    titleFr: 'Vocabulaire : Service client',
    category: 'vocabulary',
    difficulty: 'A2',
    description: 'Essential vocabulary for customer interactions.',
    descriptionFr: 'Vocabulaire essentiel pour les interactions client.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'What does "to refund" mean?', context: '', options: ['To return money to a customer', 'To give a discount', 'To exchange a product', 'To repair an item'], correctAnswer: 'To return money to a customer', explanation: 'A refund is money given back when returning a product or cancelling a service.', explanationFr: 'Un remboursement est l\'argent rendu lors du retour d\'un produit ou de l\'annulation d\'un service.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'I\'d like to make a _____ about the service I received.', correctAnswer: 'complaint', explanation: 'A "complaint" is a formal expression of dissatisfaction.', explanationFr: 'Une "complaint" (réclamation) est une expression formelle de mécontentement.' },
      { id: 3, type: 'mcq', question: 'What is "feedback"?', context: '', options: ['Comments or opinions about a service', 'A type of food', 'A computer cable', 'An invoice'], correctAnswer: 'Comments or opinions about a service', explanation: 'Feedback is information about reactions to a product or service.', explanationFr: 'Le feedback est l\'information sur les réactions à un produit ou service.' },
      { id: 4, type: 'mcq', question: 'What does "out of stock" mean?', context: '', options: ['The item is not available', 'The item is on sale', 'The item is new', 'The item is expensive'], correctAnswer: 'The item is not available', explanation: '"Out of stock" means the product is currently unavailable.', explanationFr: '"Out of stock" (rupture de stock) signifie que le produit n\'est pas disponible.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'We apologize for any _____ this may have caused.', correctAnswer: 'inconvenience', explanation: '"Inconvenience" refers to trouble or problems caused to someone.', explanationFr: '"Inconvenience" (désagrément) désigne les problèmes causés à quelqu\'un.' },
      { id: 6, type: 'mcq', question: 'What is a "warranty"?', context: '', options: ['A guarantee that a product will be repaired if faulty', 'A type of payment', 'A discount code', 'A delivery method'], correctAnswer: 'A guarantee that a product will be repaired if faulty', explanation: 'A warranty is a manufacturer\'s promise to repair or replace defective products.', explanationFr: 'Une garantie est la promesse du fabricant de réparer ou remplacer les produits défectueux.' }
    ]
  },
  // ============= ADDITIONAL GRAMMAR EXERCISES =============
  {
    id: 'cloe-grammar-5',
    title: 'Grammar: Articles (A, An, The)',
    titleFr: 'Grammaire : Les articles (A, An, The)',
    category: 'grammar',
    difficulty: 'A2',
    description: 'Master the correct use of articles.',
    descriptionFr: 'Maîtrisez l\'utilisation correcte des articles.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct article:', context: 'She is _____ engineer at a tech company.', options: ['an', 'a', 'the', 'no article'], correctAnswer: 'an', explanation: 'We use "an" before words starting with a vowel sound (engineer).', explanationFr: 'On utilise "an" devant les mots commençant par un son voyelle (engineer).' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'Could you open _____ window? It\'s hot in here.', correctAnswer: 'the', explanation: 'We use "the" when both speaker and listener know which specific item.', explanationFr: 'On utilise "the" quand le locuteur et l\'auditeur savent de quel objet il s\'agit.' },
      { id: 3, type: 'mcq', question: 'Select the correct option:', context: 'I had _____ lunch at a new restaurant.', options: ['no article needed', 'a', 'the', 'an'], correctAnswer: 'no article needed', explanation: 'Meals (breakfast, lunch, dinner) generally don\'t take an article.', explanationFr: 'Les repas (breakfast, lunch, dinner) ne prennent généralement pas d\'article.' },
      { id: 4, type: 'mcq', question: 'Choose correctly:', context: '_____ Eiffel Tower is in Paris.', options: ['The', 'A', 'An', 'No article'], correctAnswer: 'The', explanation: 'We use "the" with unique landmarks and famous buildings.', explanationFr: 'On utilise "the" avec les monuments uniques et les bâtiments célèbres.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'I need _____ hour to finish this report.', correctAnswer: 'an', explanation: '"Hour" starts with a vowel sound (silent h), so we use "an".', explanationFr: '"Hour" commence par un son voyelle (h muet), donc on utilise "an".' },
      { id: 6, type: 'mcq', question: 'Which is correct?', context: '', options: ['I work in an office in the city center.', 'I work in a office in a city center.', 'I work in the office in an city center.', 'I work in office in city center.'], correctAnswer: 'I work in an office in the city center.', explanation: '"An" before vowel sound, "the" for specific known location.', explanationFr: '"An" devant un son voyelle, "the" pour un lieu spécifique connu.' }
    ]
  },
  {
    id: 'cloe-grammar-6',
    title: 'Grammar: Comparatives & Superlatives',
    titleFr: 'Grammaire : Comparatifs et superlatifs',
    category: 'grammar',
    difficulty: 'A2',
    description: 'Learn to compare things correctly.',
    descriptionFr: 'Apprenez à comparer les choses correctement.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct form:', context: 'This project is _____ than the previous one.', options: ['more important', 'importanter', 'most important', 'more importanter'], correctAnswer: 'more important', explanation: 'Long adjectives use "more + adjective" for comparatives.', explanationFr: 'Les adjectifs longs utilisent "more + adjectif" pour les comparatifs.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'She is the _____ (GOOD) employee in the department.', correctAnswer: 'best', explanation: '"Good" has an irregular superlative: good → better → best.', explanationFr: '"Good" a un superlatif irrégulier : good → better → best.' },
      { id: 3, type: 'mcq', question: 'Select the correct option:', context: 'Our new office is _____ than the old one.', options: ['bigger', 'more big', 'biggest', 'big'], correctAnswer: 'bigger', explanation: 'Short adjectives add "-er" for comparatives: big → bigger.', explanationFr: 'Les adjectifs courts ajoutent "-er" pour les comparatifs : big → bigger.' },
      { id: 4, type: 'mcq', question: 'Which is correct?', context: '', options: ['This is the most expensive option.', 'This is the expensivest option.', 'This is the more expensive option.', 'This is expensiver option.'], correctAnswer: 'This is the most expensive option.', explanation: 'Long adjectives use "the most + adjective" for superlatives.', explanationFr: 'Les adjectifs longs utilisent "the most + adjectif" pour les superlatifs.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'The meeting went _____ (BAD) than expected.', correctAnswer: 'worse', explanation: '"Bad" has an irregular comparative: bad → worse → worst.', explanationFr: '"Bad" a un comparatif irrégulier : bad → worse → worst.' },
      { id: 6, type: 'mcq', question: 'Choose the correct form:', context: 'Of all the candidates, she was the _____', options: ['most qualified', 'more qualified', 'qualifiedest', 'most qualifier'], correctAnswer: 'most qualified', explanation: 'Superlative of long adjectives = "the most + adjective".', explanationFr: 'Superlatif des adjectifs longs = "the most + adjectif".' }
    ]
  },
  // ============= ADDITIONAL WRITTEN EXERCISES FOR CLOE =============
  {
    id: 'cloe-grammar-7',
    title: 'Grammar: Prepositions of Time & Place',
    titleFr: 'Grammaire : Prépositions de temps et de lieu',
    category: 'grammar',
    difficulty: 'B1',
    description: 'Master prepositions commonly tested in CLOE exams.',
    descriptionFr: 'Maîtrisez les prépositions couramment testées aux examens CLOE.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct preposition:', context: 'The meeting is scheduled _____ Monday _____ 10 AM.', options: ['on / at', 'in / at', 'at / on', 'on / in'], correctAnswer: 'on / at', explanation: 'We use "on" for days and "at" for specific times.', explanationFr: 'On utilise "on" pour les jours et "at" pour les heures précises.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'I have been working here _____ 2019.', correctAnswer: 'since', explanation: '"Since" is used with a specific point in time.', explanationFr: '"Since" est utilisé avec un moment précis dans le temps.' },
      { id: 3, type: 'mcq', question: 'Select the correct option:', context: 'She arrived _____ the office _____ time for the presentation.', options: ['at / in', 'in / on', 'to / at', 'at / at'], correctAnswer: 'at / in', explanation: 'We arrive "at" a place and are "in time" (not late).', explanationFr: 'On arrive "at" un endroit et on est "in time" (à l\'heure).' },
      { id: 4, type: 'mcq', question: 'Choose correctly:', context: 'The report must be submitted _____ the end of the week.', options: ['by', 'until', 'on', 'in'], correctAnswer: 'by', explanation: '"By" means no later than a deadline.', explanationFr: '"By" signifie au plus tard à une date limite.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'We will discuss this _____ detail at the next meeting.', correctAnswer: 'in', explanation: '"In detail" is a fixed expression meaning thoroughly.', explanationFr: '"In detail" est une expression fixe signifiant en détail.' },
      { id: 6, type: 'mcq', question: 'Which is correct?', context: 'The office is located _____ the third floor _____ the city center.', options: ['on / in', 'at / on', 'in / at', 'on / on'], correctAnswer: 'on / in', explanation: '"On" for floors, "in" for areas/cities.', explanationFr: '"On" pour les étages, "in" pour les zones/villes.' },
      { id: 7, type: 'mcq', question: 'Choose the correct preposition:', context: 'I\'ll get back to you _____ a few days.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', explanation: '"In" is used for future time periods.', explanationFr: '"In" est utilisé pour les périodes futures.' },
      { id: 8, type: 'mcq', question: 'Complete:', context: 'The conference takes place _____ Paris _____ June.', options: ['in / in', 'at / in', 'in / on', 'at / on'], correctAnswer: 'in / in', explanation: '"In" is used for cities and months.', explanationFr: '"In" est utilisé pour les villes et les mois.' }
    ]
  },
  {
    id: 'cloe-grammar-8',
    title: 'Grammar: Connectors & Linking Words',
    titleFr: 'Grammaire : Connecteurs et mots de liaison',
    category: 'grammar',
    difficulty: 'B2',
    description: 'Use linking words to create coherent professional writing.',
    descriptionFr: 'Utilisez les mots de liaison pour créer des écrits professionnels cohérents.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the best connector:', context: 'Sales increased last quarter; _____, profits remained low due to rising costs.', options: ['however', 'therefore', 'furthermore', 'because'], correctAnswer: 'however', explanation: '"However" introduces a contrast or unexpected result.', explanationFr: '"However" introduit un contraste ou un résultat inattendu.' },
      { id: 2, type: 'mcq', question: 'Select the correct linking word:', context: 'The project was completed on time _____ the team faced numerous challenges.', options: ['although', 'because', 'so', 'and'], correctAnswer: 'although', explanation: '"Although" introduces a concession (despite the fact that).', explanationFr: '"Although" introduit une concession (malgré le fait que).' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'The deadline has been extended. _____, all reports must be submitted by Friday.', correctAnswer: 'Nevertheless', explanation: '"Nevertheless" means despite that / even so.', explanationFr: '"Nevertheless" signifie malgré cela / même ainsi.' },
      { id: 4, type: 'mcq', question: 'Choose the correct option:', context: '_____ to the economic downturn, the company had to reduce its workforce.', options: ['Due', 'Despite', 'Although', 'However'], correctAnswer: 'Due', explanation: '"Due to" introduces a cause/reason.', explanationFr: '"Due to" introduit une cause/raison.' },
      { id: 5, type: 'mcq', question: 'Select the appropriate connector:', context: 'First, we need to analyze the data. _____, we can develop a strategy.', options: ['Then', 'However', 'Although', 'Despite'], correctAnswer: 'Then', explanation: '"Then" indicates sequence or next step.', explanationFr: '"Then" indique la séquence ou l\'étape suivante.' },
      { id: 6, type: 'fill-blank', question: 'Complete:', context: 'The product is expensive; _____, it offers excellent value for money.', correctAnswer: 'however', explanation: '"However" introduces a contrasting point.', explanationFr: '"However" introduit un point contrastant.' },
      { id: 7, type: 'mcq', question: 'Which connector is correct?', context: 'We need to cut costs. _____, we should also look for new revenue streams.', options: ['In addition', 'However', 'Therefore', 'Despite'], correctAnswer: 'In addition', explanation: '"In addition" adds more information on the same topic.', explanationFr: '"In addition" ajoute plus d\'informations sur le même sujet.' },
      { id: 8, type: 'mcq', question: 'Choose the best option:', context: 'The meeting was cancelled _____ the manager\'s illness.', options: ['due to', 'despite', 'although', 'however'], correctAnswer: 'due to', explanation: '"Due to" explains the reason/cause.', explanationFr: '"Due to" explique la raison/cause.' }
    ]
  },
  {
    id: 'cloe-grammar-9',
    title: 'Grammar: Conditionals in Business',
    titleFr: 'Grammaire : Les conditionnels en entreprise',
    category: 'grammar',
    difficulty: 'B2',
    description: 'Practice all conditional forms in professional contexts.',
    descriptionFr: 'Pratiquez toutes les formes conditionnelles en contexte professionnel.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct form (Zero conditional):', context: 'If you _____ the "send" button, the email _____ immediately.', options: ['press / goes', 'pressed / goes', 'press / will go', 'will press / goes'], correctAnswer: 'press / goes', explanation: 'Zero conditional uses present simple in both clauses for facts.', explanationFr: 'Le conditionnel zéro utilise le présent simple dans les deux propositions pour les faits.' },
      { id: 2, type: 'mcq', question: 'First conditional - Select correctly:', context: 'If you _____ the training, you _____ more opportunities.', options: ['complete / will have', 'will complete / have', 'completed / would have', 'complete / would have'], correctAnswer: 'complete / will have', explanation: 'First conditional: if + present simple, will + verb.', explanationFr: 'Premier conditionnel : if + présent simple, will + verbe.' },
      { id: 3, type: 'fill-blank', question: 'Complete (Second conditional):', context: 'If we _____ (HAVE) more budget, we would hire additional staff.', correctAnswer: 'had', explanation: 'Second conditional uses past simple in the if-clause for hypothetical situations.', explanationFr: 'Le deuxième conditionnel utilise le passé simple dans la proposition "if" pour des situations hypothétiques.' },
      { id: 4, type: 'mcq', question: 'Third conditional - Choose correctly:', context: 'If they _____ the report earlier, we _____ the deadline.', options: ['had submitted / would have met', 'submitted / would meet', 'had submitted / would meet', 'would submit / had met'], correctAnswer: 'had submitted / would have met', explanation: 'Third conditional: if + past perfect, would have + past participle.', explanationFr: 'Troisième conditionnel : if + past perfect, would have + participe passé.' },
      { id: 5, type: 'mcq', question: 'Mixed conditional - Select the correct form:', context: 'If I _____ French, I _____ the Paris office job now.', options: ['had learned / would have', 'learned / would have', 'had learned / would have had', 'learn / will have'], correctAnswer: 'had learned / would have', explanation: 'Mixed conditional: past unreal condition + present result.', explanationFr: 'Conditionnel mixte : condition irréelle passée + résultat présent.' },
      { id: 6, type: 'fill-blank', question: 'Complete:', context: 'If I _____ (BE) you, I would accept the offer.', correctAnswer: 'were', explanation: 'In formal English, we use "were" for all persons in second conditional.', explanationFr: 'En anglais formel, on utilise "were" pour toutes les personnes au deuxième conditionnel.' },
      { id: 7, type: 'mcq', question: 'Choose the correct conditional:', context: 'Unless you _____ the form correctly, your application _____ rejected.', options: ['fill in / will be', 'filled in / would be', 'fill in / is', 'will fill in / will be'], correctAnswer: 'fill in / will be', explanation: '"Unless" = "if not" - first conditional structure.', explanationFr: '"Unless" = "if not" - structure du premier conditionnel.' },
      { id: 8, type: 'mcq', question: 'Select the appropriate form:', context: 'I wish I _____ more time to prepare for the presentation.', options: ['had', 'have', 'would have', 'will have'], correctAnswer: 'had', explanation: '"Wish" + past simple expresses a desire for a different present situation.', explanationFr: '"Wish" + passé simple exprime un désir pour une situation présente différente.' }
    ]
  },
  {
    id: 'cloe-reading-4',
    title: 'Reading: Business Report Extract',
    titleFr: 'Compréhension écrite : Extrait de rapport',
    category: 'reading',
    difficulty: 'B2',
    description: 'Analyze a business report and answer comprehension questions.',
    descriptionFr: 'Analysez un rapport d\'entreprise et répondez aux questions de compréhension.',
    estimatedTime: 15,
    questions: [
      { id: 1, type: 'mcq', question: 'Read the report extract and answer:', context: 'QUARTERLY SALES REPORT - Q3 2024\n\nExecutive Summary\n\nThis report presents the sales performance for Q3 2024. Overall, the company achieved a 12% increase in revenue compared to the previous quarter, exceeding our targets by 4%.\n\nKey Findings:\n• Online sales grew by 23%, driven by the new e-commerce platform\n• Retail store performance remained stable with a slight 2% decline\n• The European market showed the strongest growth at 18%\n• Customer acquisition costs decreased by 8%\n\nChallenges:\n• Supply chain disruptions affected delivery times\n• Staff turnover in the customer service department impacted response times\n\nRecommendations:\n1. Invest further in digital marketing to capitalize on online growth\n2. Review retail strategy to address declining in-store sales\n3. Implement retention initiatives for customer service staff\n\nThe outlook for Q4 remains positive, with the holiday season expected to drive additional growth.', options: ['12%', '23%', '18%', '8%'], correctAnswer: '12%', explanation: 'The report states "the company achieved a 12% increase in revenue".', explanationFr: 'Le rapport indique "l\'entreprise a réalisé une augmentation de 12% du chiffre d\'affaires".' },
      { id: 2, type: 'mcq', question: 'Which area showed the strongest growth?', context: '', options: ['European market', 'Online sales', 'Retail stores', 'Customer service'], correctAnswer: 'European market', explanation: 'The report mentions "The European market showed the strongest growth at 18%".', explanationFr: 'Le rapport mentionne "Le marché européen a montré la plus forte croissance à 18%".' },
      { id: 3, type: 'fill-blank', question: 'Complete based on the text:', context: 'Online sales growth was driven by the new _____ platform.', correctAnswer: 'e-commerce', explanation: 'The report states online sales "driven by the new e-commerce platform".', explanationFr: 'Le rapport indique que les ventes en ligne ont été "portées par la nouvelle plateforme e-commerce".' },
      { id: 4, type: 'mcq', question: 'What challenge affected delivery times?', context: '', options: ['Supply chain disruptions', 'Staff turnover', 'Digital marketing issues', 'Customer complaints'], correctAnswer: 'Supply chain disruptions', explanation: 'The report lists "Supply chain disruptions affected delivery times" as a challenge.', explanationFr: 'Le rapport liste "Les perturbations de la chaîne d\'approvisionnement ont affecté les délais de livraison" comme défi.' },
      { id: 5, type: 'mcq', question: 'How did retail store performance change?', context: '', options: ['Slight 2% decline', 'Increased by 12%', 'Grew by 23%', 'No change'], correctAnswer: 'Slight 2% decline', explanation: 'The report notes "Retail store performance remained stable with a slight 2% decline".', explanationFr: 'Le rapport note "La performance des magasins de détail est restée stable avec une légère baisse de 2%".' },
      { id: 6, type: 'mcq', question: 'What is recommended for customer service staff?', context: '', options: ['Retention initiatives', 'Salary cuts', 'More training only', 'Outsourcing'], correctAnswer: 'Retention initiatives', explanation: 'Recommendation 3 states "Implement retention initiatives for customer service staff".', explanationFr: 'La recommandation 3 indique "Mettre en œuvre des initiatives de rétention pour le personnel du service client".' }
    ]
  },
  {
    id: 'cloe-reading-5',
    title: 'Reading: Contract Terms',
    titleFr: 'Compréhension écrite : Termes contractuels',
    category: 'reading',
    difficulty: 'B2',
    description: 'Understand key clauses in business contracts.',
    descriptionFr: 'Comprenez les clauses clés des contrats commerciaux.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Read the contract extract and answer:', context: 'SERVICE AGREEMENT\n\nBetween: TechPro Solutions Ltd ("the Provider")\nAnd: Global Enterprises Inc ("the Client")\n\n1. Term of Agreement\nThis agreement shall commence on January 1, 2025, and continue for a period of 24 months unless terminated earlier in accordance with Clause 7.\n\n2. Services\nThe Provider agrees to deliver monthly IT maintenance services as outlined in Schedule A.\n\n3. Payment Terms\nThe Client shall pay a monthly fee of €2,500 within 30 days of receiving the invoice. Late payments will incur a 2% monthly interest charge.\n\n4. Confidentiality\nBoth parties agree to maintain strict confidentiality of all proprietary information exchanged during the term of this agreement.\n\n5. Liability\nThe Provider\'s liability shall not exceed the total fees paid in the 12 months preceding any claim.\n\n6. Force Majeure\nNeither party shall be liable for delays caused by circumstances beyond reasonable control.\n\n7. Termination\nEither party may terminate this agreement with 90 days written notice.', options: ['24 months', '12 months', '90 days', '30 days'], correctAnswer: '24 months', explanation: 'The contract states it "continue for a period of 24 months".', explanationFr: 'Le contrat indique qu\'il "continue pour une période de 24 mois".' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'Payment is due within _____ days of receiving the invoice.', correctAnswer: '30', explanation: 'The payment terms specify "within 30 days of receiving the invoice".', explanationFr: 'Les conditions de paiement précisent "dans les 30 jours suivant la réception de la facture".' },
      { id: 3, type: 'mcq', question: 'What is the monthly fee?', context: '', options: ['€2,500', '€25,000', '€250', '€2,000'], correctAnswer: '€2,500', explanation: 'The contract states "a monthly fee of €2,500".', explanationFr: 'Le contrat indique "des frais mensuels de 2 500 €".' },
      { id: 4, type: 'mcq', question: 'What is the late payment penalty?', context: '', options: ['2% monthly interest', '5% one-time fee', 'Service suspension', 'No penalty mentioned'], correctAnswer: '2% monthly interest', explanation: 'The contract mentions "Late payments will incur a 2% monthly interest charge".', explanationFr: 'Le contrat mentionne "Les paiements en retard entraîneront des intérêts mensuels de 2%".' },
      { id: 5, type: 'mcq', question: 'How much notice is required for termination?', context: '', options: ['90 days', '30 days', '24 months', 'No notice needed'], correctAnswer: '90 days', explanation: 'Clause 7 states "Either party may terminate this agreement with 90 days written notice".', explanationFr: 'L\'article 7 indique "Chaque partie peut résilier cet accord avec un préavis écrit de 90 jours".' },
      { id: 6, type: 'fill-blank', question: 'Complete:', context: 'The Provider\'s liability is limited to fees paid in the preceding _____ months.', correctAnswer: '12', explanation: 'The contract states liability "shall not exceed the total fees paid in the 12 months preceding any claim".', explanationFr: 'Le contrat indique que la responsabilité "ne dépassera pas les frais totaux payés au cours des 12 mois précédant toute réclamation".' }
    ]
  },
  {
    id: 'cloe-vocab-8',
    title: 'Vocabulary: Email Writing',
    titleFr: 'Vocabulaire : Rédaction d\'emails',
    category: 'vocabulary',
    difficulty: 'B1',
    description: 'Essential phrases for professional email communication.',
    descriptionFr: 'Phrases essentielles pour la communication par email professionnel.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Which opening is most appropriate for a formal email to someone you have not met?', context: '', options: ['Dear Mr. Johnson,', 'Hey Johnson,', 'Hi there,', 'To Johnson:'], correctAnswer: 'Dear Mr. Johnson,', explanation: '"Dear" followed by title and surname is the standard formal opening.', explanationFr: '"Dear" suivi du titre et du nom de famille est l\'ouverture formelle standard.' },
      { id: 2, type: 'fill-blank', question: 'Complete the formal phrase:', context: 'I am writing to _____ about your advertisement in the Times.', correctAnswer: 'inquire', explanation: '"I am writing to inquire" is a formal way to ask for information.', explanationFr: '"I am writing to inquire" est une manière formelle de demander des informations.' },
      { id: 3, type: 'mcq', question: 'What does "Please find attached" mean?', context: '', options: ['There is a file attached to this email', 'Please search for the file', 'I have lost the attachment', 'Please attach a file'], correctAnswer: 'There is a file attached to this email', explanation: 'This phrase indicates a file accompanies the email.', explanationFr: 'Cette phrase indique qu\'un fichier accompagne l\'email.' },
      { id: 4, type: 'mcq', question: 'Which phrase is used to follow up on a previous email?', context: '', options: ['Further to my email of 15th March...', 'More of my email...', 'After my email...', 'Since I emailed...'], correctAnswer: 'Further to my email of 15th March...', explanation: '"Further to" is a formal way to reference previous correspondence.', explanationFr: '"Further to" est une manière formelle de faire référence à une correspondance précédente.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'I would be _____ if you could send me the information by Friday.', correctAnswer: 'grateful', explanation: '"I would be grateful if" is a polite way to make requests.', explanationFr: '"I would be grateful if" est une manière polie de faire des demandes.' },
      { id: 6, type: 'mcq', question: 'Which closing is most appropriate for a formal email?', context: '', options: ['Yours faithfully,', 'Cheers!', 'Later,', 'Bye for now,'], correctAnswer: 'Yours faithfully,', explanation: '"Yours faithfully" is used when you do not know the recipient\'s name.', explanationFr: '"Yours faithfully" est utilisé quand vous ne connaissez pas le nom du destinataire.' },
      { id: 7, type: 'mcq', question: 'What does "I look forward to hearing from you" express?', context: '', options: ['You expect a reply', 'You will call them', 'You are ending the relationship', 'You have heard enough'], correctAnswer: 'You expect a reply', explanation: 'This phrase politely indicates you anticipate a response.', explanationFr: 'Cette phrase indique poliment que vous anticipez une réponse.' },
      { id: 8, type: 'fill-blank', question: 'Complete:', context: 'Should you have any questions, please do not _____ to contact me.', correctAnswer: 'hesitate', explanation: '"Do not hesitate to contact me" is a common polite offer of help.', explanationFr: '"Do not hesitate to contact me" est une offre d\'aide polie courante.' }
    ]
  },
  {
    id: 'cloe-vocab-9',
    title: 'Vocabulary: Formal vs Informal Register',
    titleFr: 'Vocabulaire : Registre formel vs informel',
    category: 'vocabulary',
    difficulty: 'B2',
    description: 'Distinguish between formal and informal language for CLOE exams.',
    descriptionFr: 'Distinguez le langage formel et informel pour les examens CLOE.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Which is the formal equivalent of "get"?', context: 'I need to _____ the manager\'s approval.', options: ['obtain', 'grab', 'get', 'take'], correctAnswer: 'obtain', explanation: '"Obtain" is more formal than "get" in professional contexts.', explanationFr: '"Obtain" est plus formel que "get" en contexte professionnel.' },
      { id: 2, type: 'mcq', question: 'Choose the formal alternative to "We need to talk about..."', context: '', options: ['We need to discuss...', 'We gotta chat about...', 'Let\'s have a word about...', 'We should mention...'], correctAnswer: 'We need to discuss...', explanation: '"Discuss" is more formal than "talk about".', explanationFr: '"Discuss" est plus formel que "talk about".' },
      { id: 3, type: 'fill-blank', question: 'Complete with the formal word:', context: 'Informal: "I\'m sorry for the mistake." Formal: "I _____ for the error."', correctAnswer: 'apologize', explanation: '"Apologize" is more formal than "sorry".', explanationFr: '"Apologize" est plus formel que "sorry".' },
      { id: 4, type: 'mcq', question: 'Which is the formal equivalent of "help"?', context: 'Can you _____ me with this report?', options: ['assist', 'help out', 'give a hand', 'help'], correctAnswer: 'assist', explanation: '"Assist" is more formal than "help" in business English.', explanationFr: '"Assist" est plus formel que "help" en anglais des affaires.' },
      { id: 5, type: 'mcq', question: 'Choose the formal phrase:', context: 'Instead of "Thanks for your email", in a formal letter you would write:', options: ['Thank you for your correspondence', 'Thanks a lot for writing', 'Cheers for the email', 'Great to hear from you'], correctAnswer: 'Thank you for your correspondence', explanation: '"Correspondence" is more formal than "email" in business writing.', explanationFr: '"Correspondence" est plus formel que "email" dans la rédaction professionnelle.' },
      { id: 6, type: 'fill-blank', question: 'Complete with the formal word:', context: 'Informal: "I want to know..." Formal: "I would like to _____ ..."', correctAnswer: 'inquire', explanation: '"Inquire" is the formal equivalent of "ask" or "want to know".', explanationFr: '"Inquire" est l\'équivalent formel de "ask" ou "want to know".' },
      { id: 7, type: 'mcq', question: 'Which is more formal?', context: '', options: ['Prior to the meeting', 'Before the meeting', 'Ahead of the meeting', 'Earlier than the meeting'], correctAnswer: 'Prior to the meeting', explanation: '"Prior to" is more formal than "before".', explanationFr: '"Prior to" est plus formel que "before".' },
      { id: 8, type: 'mcq', question: 'Choose the formal equivalent of "buy":', context: 'The company plans to _____ new equipment.', options: ['purchase', 'buy', 'get', 'pick up'], correctAnswer: 'purchase', explanation: '"Purchase" is the formal equivalent of "buy".', explanationFr: '"Purchase" est l\'équivalent formel de "buy".' }
    ]
  },
  {
    id: 'cloe-expressions-4',
    title: 'Expressions: Opinions & Diplomacy',
    titleFr: 'Expressions : Opinions et diplomatie',
    category: 'expressions',
    difficulty: 'B2',
    description: 'Diplomatic phrases for expressing opinions professionally.',
    descriptionFr: 'Phrases diplomatiques pour exprimer des opinions professionnellement.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Which phrase is the most diplomatic way to disagree?', context: '', options: ['I see your point, but I wonder if...', 'You\'re wrong about that.', 'That\'s not correct.', 'No, I disagree.'], correctAnswer: 'I see your point, but I wonder if...', explanation: 'Acknowledging the other\'s view before introducing yours is diplomatic.', explanationFr: 'Reconnaître le point de vue de l\'autre avant d\'introduire le vôtre est diplomatique.' },
      { id: 2, type: 'fill-blank', question: 'Complete the diplomatic phrase:', context: 'With all due _____, I think we should consider another approach.', correctAnswer: 'respect', explanation: '"With all due respect" is a polite way to introduce a differing opinion.', explanationFr: '"With all due respect" est une manière polie d\'introduire une opinion différente.' },
      { id: 3, type: 'mcq', question: 'How do you politely express uncertainty about a proposal?', context: '', options: ['I\'m not entirely convinced that...', 'That\'s a stupid idea.', 'This will never work.', 'Are you serious?'], correctAnswer: 'I\'m not entirely convinced that...', explanation: '"Not entirely convinced" expresses doubt without being offensive.', explanationFr: '"Not entirely convinced" exprime le doute sans être offensant.' },
      { id: 4, type: 'mcq', question: 'Which phrase softens a criticism?', context: '', options: ['Perhaps we could improve this by...', 'This is badly done.', 'You need to fix this.', 'This is wrong.'], correctAnswer: 'Perhaps we could improve this by...', explanation: 'Suggesting improvement is more diplomatic than criticizing directly.', explanationFr: 'Suggérer une amélioration est plus diplomatique que critiquer directement.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'If I may _____ a suggestion, we could try a different approach.', correctAnswer: 'make', explanation: '"If I may make a suggestion" politely introduces an idea.', explanationFr: '"If I may make a suggestion" introduit poliment une idée.' },
      { id: 6, type: 'mcq', question: 'How do you express strong agreement diplomatically?', context: '', options: ['I couldn\'t agree more.', 'Obviously!', 'Duh!', 'Of course I agree!'], correctAnswer: 'I couldn\'t agree more.', explanation: 'This phrase expresses complete agreement professionally.', explanationFr: 'Cette phrase exprime un accord complet de manière professionnelle.' },
      { id: 7, type: 'mcq', question: 'Which is the most diplomatic way to say someone is wrong?', context: '', options: ['I think there might be some confusion here.', 'You\'re mistaken.', 'That\'s incorrect.', 'You\'ve got it wrong.'], correctAnswer: 'I think there might be some confusion here.', explanation: 'Attributing it to "confusion" avoids directly blaming the person.', explanationFr: 'L\'attribuer à une "confusion" évite de blâmer directement la personne.' },
      { id: 8, type: 'fill-blank', question: 'Complete:', context: 'From my _____ of view, we should proceed with caution.', correctAnswer: 'point', explanation: '"From my point of view" introduces a personal opinion politely.', explanationFr: '"From my point of view" introduit poliment une opinion personnelle.' }
    ]
  },
  {
    id: 'cloe-reading-6',
    title: 'Reading: Meeting Minutes',
    titleFr: 'Compréhension écrite : Compte-rendu de réunion',
    category: 'reading',
    difficulty: 'B1',
    description: 'Understand key information from meeting minutes.',
    descriptionFr: 'Comprenez les informations clés d\'un compte-rendu de réunion.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Read the minutes and answer:', context: 'MEETING MINUTES\n\nDate: March 15, 2025\nTime: 14:00 - 15:30\nLocation: Conference Room B\nAttendees: J. Martinez (Chair), P. Wong, R. Dubois, S. Andersen\nApologies: T. Nakamura\n\nAgenda Items:\n\n1. Review of Q1 Results\nJ. Martinez presented the Q1 figures. Sales exceeded targets by 8%. Action: P. Wong to prepare detailed analysis by March 22.\n\n2. New Product Launch\nR. Dubois outlined the marketing plan for the April launch. Budget approved at €45,000. Action: R. Dubois to finalize creative materials by March 25.\n\n3. Office Renovation\nS. Andersen reported that renovation will begin May 1 and last approximately 6 weeks. Staff will temporarily relocate to Floor 3.\n\n4. AOB (Any Other Business)\nP. Wong raised concerns about parking availability. Action: J. Martinez to discuss with Building Management.\n\nNext Meeting: March 29, 2025, 14:00, Conference Room B', options: ['J. Martinez', 'P. Wong', 'T. Nakamura', 'R. Dubois'], correctAnswer: 'J. Martinez', explanation: 'The minutes show "J. Martinez (Chair)" indicating they led the meeting.', explanationFr: 'Le compte-rendu montre "J. Martinez (Chair)" indiquant qu\'il/elle a dirigé la réunion.' },
      { id: 2, type: 'mcq', question: 'Who was absent from the meeting?', context: '', options: ['T. Nakamura', 'J. Martinez', 'P. Wong', 'S. Andersen'], correctAnswer: 'T. Nakamura', explanation: 'The "Apologies" section lists T. Nakamura as absent.', explanationFr: 'La section "Apologies" liste T. Nakamura comme absent.' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'The marketing budget for the new product launch is €_____', correctAnswer: '45,000', explanation: 'The minutes state "Budget approved at €45,000".', explanationFr: 'Le compte-rendu indique "Budget approuvé à 45 000 €".' },
      { id: 4, type: 'mcq', question: 'When will the office renovation begin?', context: '', options: ['May 1', 'March 15', 'April 1', 'March 25'], correctAnswer: 'May 1', explanation: 'The minutes state "renovation will begin May 1".', explanationFr: 'Le compte-rendu indique "la rénovation commencera le 1er mai".' },
      { id: 5, type: 'mcq', question: 'What action was assigned to P. Wong?', context: '', options: ['Prepare detailed Q1 analysis', 'Finalize creative materials', 'Discuss parking with Building Management', 'Lead the renovation project'], correctAnswer: 'Prepare detailed Q1 analysis', explanation: 'The action assigned to P. Wong is "to prepare detailed analysis by March 22".', explanationFr: 'L\'action assignée à P. Wong est "préparer une analyse détaillée d\'ici le 22 mars".' },
      { id: 6, type: 'mcq', question: 'Where will staff relocate during renovation?', context: '', options: ['Floor 3', 'Conference Room B', 'Home office', 'A different building'], correctAnswer: 'Floor 3', explanation: 'The minutes state "Staff will temporarily relocate to Floor 3".', explanationFr: 'Le compte-rendu indique "Le personnel sera temporairement relocalisé à l\'étage 3".' }
    ]
  },
  {
    id: 'cloe-grammar-10',
    title: 'Grammar: Common Error Correction',
    titleFr: 'Grammaire : Correction d\'erreurs courantes',
    category: 'grammar',
    difficulty: 'B1',
    description: 'Identify and correct common grammatical errors.',
    descriptionFr: 'Identifiez et corrigez les erreurs grammaticales courantes.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Which sentence is correct?', context: '', options: ['The information is confidential.', 'The informations are confidential.', 'The information are confidential.', 'The informations is confidential.'], correctAnswer: 'The information is confidential.', explanation: '"Information" is uncountable and takes a singular verb.', explanationFr: '"Information" est indénombrable et prend un verbe singulier.' },
      { id: 2, type: 'mcq', question: 'Identify the correct sentence:', context: '', options: ['I have been to London twice.', 'I have been in London twice.', 'I went to London twice already.', 'I have went to London twice.'], correctAnswer: 'I have been to London twice.', explanation: 'Present perfect with "been to" for visiting places; "twice" suggests completed experiences.', explanationFr: 'Present perfect avec "been to" pour visiter des endroits ; "twice" suggère des expériences accomplies.' },
      { id: 3, type: 'mcq', question: 'Which is grammatically correct?', context: '', options: ['He suggested that I apply for the position.', 'He suggested me to apply for the position.', 'He suggested me applying for the position.', 'He suggested I to apply for the position.'], correctAnswer: 'He suggested that I apply for the position.', explanation: '"Suggest" is followed by "that + subject + base verb" (subjunctive).', explanationFr: '"Suggest" est suivi de "that + sujet + verbe base" (subjonctif).' },
      { id: 4, type: 'mcq', question: 'Choose the correct sentence:', context: '', options: ['Despite the rain, we continued working.', 'Despite of the rain, we continued working.', 'Despite it rained, we continued working.', 'Despite the rain, we continued to working.'], correctAnswer: 'Despite the rain, we continued working.', explanation: '"Despite" is followed by a noun/gerund, not "of" or a clause.', explanationFr: '"Despite" est suivi d\'un nom/gérondif, pas de "of" ou d\'une proposition.' },
      { id: 5, type: 'mcq', question: 'Which sentence is correct?', context: '', options: ['I look forward to hearing from you.', 'I look forward to hear from you.', 'I am looking forward to hear from you.', 'I look forward hearing from you.'], correctAnswer: 'I look forward to hearing from you.', explanation: '"Look forward to" is followed by a gerund (-ing form).', explanationFr: '"Look forward to" est suivi d\'un gérondif (forme en -ing).' },
      { id: 6, type: 'mcq', question: 'Identify the error-free sentence:', context: '', options: ['The meeting, which was scheduled for Monday, has been cancelled.', 'The meeting which was scheduled for Monday, has been cancelled.', 'The meeting, that was scheduled for Monday, has been cancelled.', 'The meeting what was scheduled for Monday has been cancelled.'], correctAnswer: 'The meeting, which was scheduled for Monday, has been cancelled.', explanation: 'Non-defining relative clauses use "which" with commas, not "that".', explanationFr: 'Les propositions relatives non-définitives utilisent "which" avec des virgules, pas "that".' },
      { id: 7, type: 'mcq', question: 'Which is correct?', context: '', options: ['Each of the employees has received a bonus.', 'Each of the employees have received a bonus.', 'Each of the employee has received a bonus.', 'Each the employees has received a bonus.'], correctAnswer: 'Each of the employees has received a bonus.', explanation: '"Each" takes a singular verb even when referring to multiple items.', explanationFr: '"Each" prend un verbe singulier même quand il fait référence à plusieurs éléments.' },
      { id: 8, type: 'mcq', question: 'Select the correct sentence:', context: '', options: ['Neither the manager nor the staff were informed.', 'Neither the manager nor the staff was informed.', 'Neither the manager or the staff were informed.', 'Neither the manager nor the staff wasn\'t informed.'], correctAnswer: 'Neither the manager nor the staff were informed.', explanation: 'With "neither...nor", the verb agrees with the nearest subject (staff = plural).', explanationFr: 'Avec "neither...nor", le verbe s\'accorde avec le sujet le plus proche (staff = pluriel).' }
    ]
  },
  // CONTRACT LANGUAGE, LEGAL TERMINOLOGY & FINANCIAL VOCABULARY
  {
    id: 'cloe-vocab-contract-1',
    title: 'Contract Language Fundamentals',
    titleFr: 'Vocabulaire contractuel : Les fondamentaux',
    category: 'vocabulary',
    difficulty: 'B2',
    description: 'Master essential contract terminology used in business agreements.',
    descriptionFr: 'Maîtrisez le vocabulaire contractuel essentiel utilisé dans les accords commerciaux.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'What does "binding agreement" mean?', context: 'The parties have entered into a binding agreement.', options: ['A contract that is legally enforceable', 'A temporary arrangement', 'An informal understanding', 'A proposal under review'], correctAnswer: 'A contract that is legally enforceable', explanation: 'A "binding agreement" is a contract that has legal force and all parties must comply with its terms.', explanationFr: 'Un "binding agreement" est un contrat ayant force légale et toutes les parties doivent respecter ses termes.' },
      { id: 2, type: 'mcq', question: 'Choose the correct term:', context: 'The _____ of the contract is 24 months from the date of signature.', options: ['term', 'time', 'period', 'duration'], correctAnswer: 'term', explanation: '"Term" is the standard legal word for the duration of a contract.', explanationFr: '"Term" est le mot juridique standard pour la durée d\'un contrat.' },
      { id: 3, type: 'fill-blank', question: 'Complete the sentence:', context: 'Either party may _____ (TERMINATE) the agreement with 30 days written notice.', correctAnswer: 'terminate', explanation: '"Terminate" means to end a contract according to its provisions.', explanationFr: '"Terminate" signifie mettre fin à un contrat selon ses dispositions.' },
      { id: 4, type: 'mcq', question: 'What is a "breach of contract"?', context: '', options: ['A violation of the terms of an agreement', 'A new contract clause', 'An amendment to the contract', 'A renewal of the agreement'], correctAnswer: 'A violation of the terms of an agreement', explanation: 'A "breach" occurs when one party fails to fulfill their contractual obligations.', explanationFr: 'Une "breach" survient quand une partie ne remplit pas ses obligations contractuelles.' },
      { id: 5, type: 'mcq', question: 'Select the correct definition of "indemnify":', context: '', options: ['To compensate for loss or damage', 'To sign a document', 'To negotiate terms', 'To extend a deadline'], correctAnswer: 'To compensate for loss or damage', explanation: '"Indemnify" means to protect someone against financial loss or legal liability.', explanationFr: '"Indemnify" signifie protéger quelqu\'un contre une perte financière ou une responsabilité légale.' },
      { id: 6, type: 'mcq', question: 'What does "hereinafter referred to as" mean?', context: 'ABC Company, hereinafter referred to as "the Client"...', options: ['Called from this point forward in the document', 'Previously known as', 'Formerly called', 'Sometimes called'], correctAnswer: 'Called from this point forward in the document', explanation: 'This phrase introduces a shorter name or title that will be used throughout the rest of the contract.', explanationFr: 'Cette expression introduit un nom ou titre plus court qui sera utilisé dans le reste du contrat.' },
      { id: 7, type: 'fill-blank', question: 'Complete with the correct term:', context: 'The _____ (PARTY) agrees to deliver the goods within 14 business days.', correctAnswer: 'party', explanation: 'In contracts, "party" refers to an individual or organization bound by the agreement.', explanationFr: 'Dans les contrats, "party" désigne un individu ou une organisation lié par l\'accord.' },
      { id: 8, type: 'mcq', question: 'What is a "non-disclosure agreement" (NDA)?', context: '', options: ['A contract to keep information confidential', 'A sales agreement', 'A partnership contract', 'An employment contract'], correctAnswer: 'A contract to keep information confidential', explanation: 'An NDA legally binds parties to keep certain information secret and not share it with others.', explanationFr: 'Un NDA engage légalement les parties à garder certaines informations secrètes.' }
    ]
  },
  {
    id: 'cloe-vocab-contract-2',
    title: 'Advanced Contract Clauses',
    titleFr: 'Clauses contractuelles avancées',
    category: 'vocabulary',
    difficulty: 'C1',
    description: 'Learn sophisticated contract terminology for complex business agreements.',
    descriptionFr: 'Apprenez le vocabulaire contractuel sophistiqué pour les accords commerciaux complexes.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'What is a "force majeure" clause?', context: '', options: ['A provision for unforeseeable circumstances beyond control', 'A clause requiring immediate payment', 'A penalty for late delivery', 'A guarantee of performance'], correctAnswer: 'A provision for unforeseeable circumstances beyond control', explanation: '"Force majeure" (French for "superior force") covers events like natural disasters, wars, or pandemics that prevent contract fulfillment.', explanationFr: '"Force majeure" couvre les événements comme les catastrophes naturelles, guerres ou pandémies qui empêchent l\'exécution du contrat.' },
      { id: 2, type: 'mcq', question: 'What does "severability" mean in a contract?', context: '', options: ['If one clause is invalid, the rest remains enforceable', 'The contract can be divided between parties', 'Each party can end the contract separately', 'The contract must be reviewed separately'], correctAnswer: 'If one clause is invalid, the rest remains enforceable', explanation: 'A severability clause ensures that if one provision is ruled unenforceable, it does not invalidate the entire contract.', explanationFr: 'Une clause de divisibilité garantit que si une disposition est invalide, cela n\'invalide pas tout le contrat.' },
      { id: 3, type: 'fill-blank', question: 'Complete the clause:', context: 'This Agreement shall be governed by and construed in accordance with the _____ (LAW) of France.', correctAnswer: 'laws', explanation: '"Governing law" clauses specify which jurisdiction\'s legal system applies to the contract.', explanationFr: 'Les clauses de "droit applicable" précisent quel système juridique s\'applique au contrat.' },
      { id: 4, type: 'mcq', question: 'What is "liquidated damages"?', context: '', options: ['A predetermined amount payable for breach', 'Money held in escrow', 'Profits from sales', 'Refundable deposits'], correctAnswer: 'A predetermined amount payable for breach', explanation: 'Liquidated damages are a fixed sum agreed upon in advance that one party will pay if they breach the contract.', explanationFr: 'Les "liquidated damages" sont une somme fixe convenue à l\'avance qu\'une partie paiera en cas de rupture du contrat.' },
      { id: 5, type: 'mcq', question: 'What does "in lieu of" mean?', context: 'Payment in lieu of notice.', options: ['Instead of', 'In addition to', 'Before', 'After'], correctAnswer: 'Instead of', explanation: '"In lieu of" is a formal expression meaning "instead of" or "in place of".', explanationFr: '"In lieu of" est une expression formelle signifiant "à la place de".' },
      { id: 6, type: 'mcq', question: 'What is an "addendum"?', context: '', options: ['A document added to modify or supplement a contract', 'The signature page', 'The table of contents', 'The main body of the contract'], correctAnswer: 'A document added to modify or supplement a contract', explanation: 'An addendum is an attachment that adds or changes terms in the original agreement.', explanationFr: 'Un avenant est une pièce jointe qui ajoute ou modifie des termes dans l\'accord original.' },
      { id: 7, type: 'fill-blank', question: 'Complete the sentence:', context: 'The Contractor agrees to _____ (WAIVE) any claims arising from delays caused by the Client.', correctAnswer: 'waive', explanation: '"Waive" means to voluntarily give up a right or claim.', explanationFr: '"Waive" signifie renoncer volontairement à un droit ou une réclamation.' },
      { id: 8, type: 'mcq', question: 'What does "notwithstanding" mean in legal documents?', context: 'Notwithstanding any other provision in this Agreement...', options: ['Despite or regardless of', 'Because of', 'In accordance with', 'Subject to'], correctAnswer: 'Despite or regardless of', explanation: '"Notwithstanding" means that what follows applies despite what might be stated elsewhere.', explanationFr: '"Notwithstanding" signifie que ce qui suit s\'applique malgré ce qui pourrait être indiqué ailleurs.' }
    ]
  },
  {
    id: 'cloe-vocab-legal-1',
    title: 'Legal Terminology Essentials',
    titleFr: 'Terminologie juridique essentielle',
    category: 'vocabulary',
    difficulty: 'B2',
    description: 'Master fundamental legal terms used in business contexts.',
    descriptionFr: 'Maîtrisez les termes juridiques fondamentaux utilisés dans les contextes professionnels.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'What is "liability"?', context: '', options: ['Legal responsibility for something', 'A company benefit', 'An asset', 'A tax deduction'], correctAnswer: 'Legal responsibility for something', explanation: 'Liability refers to being legally responsible for something, often relating to debts or damages.', explanationFr: 'La "liability" désigne la responsabilité légale pour quelque chose, souvent liée aux dettes ou dommages.' },
      { id: 2, type: 'mcq', question: 'Choose the correct term:', context: 'The company was found to be in _____ of health and safety regulations.', options: ['violation', 'breach', 'break', 'A and B are both correct'], correctAnswer: 'A and B are both correct', explanation: 'Both "violation" and "breach" can be used when someone fails to comply with rules or regulations.', explanationFr: '"Violation" et "breach" peuvent tous deux être utilisés quand quelqu\'un ne respecte pas les règles.' },
      { id: 3, type: 'fill-blank', question: 'Complete the sentence:', context: 'The court issued an _____ (INJUNCTION) to prevent the company from selling the disputed product.', correctAnswer: 'injunction', explanation: 'An "injunction" is a court order requiring someone to do or stop doing something.', explanationFr: 'Une "injunction" est une ordonnance du tribunal exigeant de faire ou cesser de faire quelque chose.' },
      { id: 4, type: 'mcq', question: 'What does "plaintiff" mean?', context: '', options: ['The person who brings a case against another in court', 'The judge', 'The defendant', 'A witness'], correctAnswer: 'The person who brings a case against another in court', explanation: 'The "plaintiff" initiates the lawsuit; the "defendant" is the person being sued.', explanationFr: 'Le "plaintiff" initie le procès ; le "defendant" est la personne poursuivie.' },
      { id: 5, type: 'mcq', question: 'What is "due diligence"?', context: '', options: ['A thorough investigation before a business decision', 'Late payment fees', 'Regular maintenance', 'Customer service'], correctAnswer: 'A thorough investigation before a business decision', explanation: '"Due diligence" involves careful research and analysis, typically before acquisitions, investments, or partnerships.', explanationFr: 'La "due diligence" implique une recherche et analyse approfondie, typiquement avant acquisitions, investissements ou partenariats.' },
      { id: 6, type: 'mcq', question: 'What does "statute of limitations" mean?', context: '', options: ['The time limit for taking legal action', 'A list of laws', 'A court document', 'A legal fee'], correctAnswer: 'The time limit for taking legal action', explanation: 'The "statute of limitations" sets the maximum time after an event within which legal proceedings may be initiated.', explanationFr: 'Le "délai de prescription" fixe le temps maximum après un événement pour initier une action en justice.' },
      { id: 7, type: 'fill-blank', question: 'Complete with the correct word:', context: 'The witness was asked to provide _____ (TESTIMONY) under oath.', correctAnswer: 'testimony', explanation: '"Testimony" is a formal statement given by a witness in court.', explanationFr: 'Le "témoignage" est une déclaration formelle faite par un témoin au tribunal.' },
      { id: 8, type: 'mcq', question: 'What is an "affidavit"?', context: '', options: ['A written statement confirmed by oath', 'A verbal agreement', 'A court summons', 'A legal bill'], correctAnswer: 'A written statement confirmed by oath', explanation: 'An "affidavit" is a sworn written statement used as evidence in court.', explanationFr: 'Un "affidavit" est une déclaration écrite sous serment utilisée comme preuve au tribunal.' }
    ]
  },
  {
    id: 'cloe-vocab-legal-2',
    title: 'Corporate Legal Terms',
    titleFr: 'Terminologie juridique d\'entreprise',
    category: 'vocabulary',
    difficulty: 'C1',
    description: 'Advanced legal vocabulary for corporate and commercial contexts.',
    descriptionFr: 'Vocabulaire juridique avancé pour les contextes corporatifs et commerciaux.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'What is "intellectual property" (IP)?', context: '', options: ['Creations of the mind protected by law', 'Physical assets of a company', 'Real estate holdings', 'Employee skills'], correctAnswer: 'Creations of the mind protected by law', explanation: 'IP includes patents, trademarks, copyrights, and trade secrets that are legally protected.', explanationFr: 'La PI inclut brevets, marques, droits d\'auteur et secrets commerciaux protégés par la loi.' },
      { id: 2, type: 'mcq', question: 'What does "fiduciary duty" mean?', context: '', options: ['A legal obligation to act in the best interest of another', 'A tax obligation', 'A manufacturing requirement', 'A marketing strategy'], correctAnswer: 'A legal obligation to act in the best interest of another', explanation: 'A "fiduciary duty" requires acting with loyalty and care on behalf of someone else, like a director for shareholders.', explanationFr: 'Un "devoir fiduciaire" exige d\'agir avec loyauté et soin au nom de quelqu\'un d\'autre.' },
      { id: 3, type: 'fill-blank', question: 'Complete the sentence:', context: 'The merger is subject to regulatory _____ (APPROVAL) from the competition authorities.', correctAnswer: 'approval', explanation: 'Major business transactions often require "approval" from regulatory bodies.', explanationFr: 'Les transactions commerciales majeures nécessitent souvent une "approbation" des organismes de réglementation.' },
      { id: 4, type: 'mcq', question: 'What is "arbitration"?', context: '', options: ['A dispute resolution method outside court', 'A type of insurance', 'A banking service', 'An accounting method'], correctAnswer: 'A dispute resolution method outside court', explanation: '"Arbitration" is when an independent third party (arbitrator) makes a binding decision to resolve a dispute.', explanationFr: 'L\'"arbitrage" est quand un tiers indépendant (arbitre) prend une décision contraignante pour résoudre un litige.' },
      { id: 5, type: 'mcq', question: 'What does "litigation" refer to?', context: '', options: ['The process of taking legal action through courts', 'Negotiating a contract', 'Filing taxes', 'Hiring employees'], correctAnswer: 'The process of taking legal action through courts', explanation: '"Litigation" is the formal legal process of resolving disputes in court.', explanationFr: 'Le "contentieux" est le processus légal formel de résolution des litiges au tribunal.' },
      { id: 6, type: 'mcq', question: 'What is a "shareholder derivative action"?', context: '', options: ['A lawsuit brought by shareholders on behalf of the company', 'A dividend payment', 'A stock split', 'An annual meeting'], correctAnswer: 'A lawsuit brought by shareholders on behalf of the company', explanation: 'Shareholders can sue company directors/officers for actions that harm the corporation.', explanationFr: 'Les actionnaires peuvent poursuivre les dirigeants pour des actions qui nuisent à la société.' },
      { id: 7, type: 'fill-blank', question: 'Complete the term:', context: 'The company filed for _____ (BANKRUPTCY) protection after failing to pay its debts.', correctAnswer: 'bankruptcy', explanation: '"Bankruptcy" is a legal process when a company cannot pay its debts.', explanationFr: 'La "faillite" est un processus légal quand une entreprise ne peut pas payer ses dettes.' },
      { id: 8, type: 'mcq', question: 'What does "precedent" mean in legal terms?', context: '', options: ['A previous court decision used as guidance', 'A legal fee', 'A witness statement', 'A contract clause'], correctAnswer: 'A previous court decision used as guidance', explanation: 'Courts often follow "precedent" - decisions from similar past cases - when making rulings.', explanationFr: 'Les tribunaux suivent souvent le "précédent" - décisions de cas passés similaires - dans leurs jugements.' }
    ]
  },
  {
    id: 'cloe-vocab-finance-1',
    title: 'Financial Reporting Basics',
    titleFr: 'Les bases du reporting financier',
    category: 'vocabulary',
    difficulty: 'B1',
    description: 'Essential vocabulary for understanding financial reports and statements.',
    descriptionFr: 'Vocabulaire essentiel pour comprendre les rapports et états financiers.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'What is "revenue"?', context: '', options: ['Total income from sales before expenses', 'Profit after all expenses', 'Money borrowed', 'Tax payments'], correctAnswer: 'Total income from sales before expenses', explanation: '"Revenue" (also called "sales" or "turnover") is the total money earned from selling goods or services.', explanationFr: 'Le "chiffre d\'affaires" est l\'argent total gagné par la vente de biens ou services.' },
      { id: 2, type: 'mcq', question: 'What is the difference between "gross profit" and "net profit"?', context: '', options: ['Gross is before operating expenses; net is after all expenses', 'They are the same thing', 'Gross is yearly; net is monthly', 'Net is before taxes; gross is after taxes'], correctAnswer: 'Gross is before operating expenses; net is after all expenses', explanation: '"Gross profit" = revenue - cost of goods sold. "Net profit" = revenue - all expenses (including taxes, interest, etc.).', explanationFr: 'La "marge brute" = CA - coût des marchandises. Le "bénéfice net" = CA - toutes les charges.' },
      { id: 3, type: 'fill-blank', question: 'Complete the sentence:', context: 'The company reported strong quarterly _____ (EARNINGS) exceeding analyst expectations.', correctAnswer: 'earnings', explanation: '"Earnings" refers to a company\'s profits, often used in financial reports.', explanationFr: 'Les "earnings" désignent les bénéfices d\'une entreprise, souvent utilisés dans les rapports financiers.' },
      { id: 4, type: 'mcq', question: 'What is an "asset"?', context: '', options: ['Something of value owned by the company', 'Money owed by the company', 'An expense', 'A tax payment'], correctAnswer: 'Something of value owned by the company', explanation: '"Assets" include cash, equipment, property, inventory, and receivables - things the company owns.', explanationFr: 'Les "actifs" incluent trésorerie, équipements, propriété, stocks et créances - ce que possède l\'entreprise.' },
      { id: 5, type: 'mcq', question: 'What is a "liability"?', context: '', options: ['A debt or financial obligation', 'Company profits', 'An investment return', 'A cash reserve'], correctAnswer: 'A debt or financial obligation', explanation: '"Liabilities" are what the company owes - loans, accounts payable, mortgages, etc.', explanationFr: 'Les "passifs" sont ce que l\'entreprise doit - emprunts, comptes à payer, hypothèques, etc.' },
      { id: 6, type: 'mcq', question: 'What does "fiscal year" mean?', context: '', options: ['A 12-month period used for accounting', 'A calendar year', 'A tax payment date', 'A quarterly period'], correctAnswer: 'A 12-month period used for accounting', explanation: 'A "fiscal year" is any 12-month period a company uses for financial reporting (may differ from calendar year).', explanationFr: 'L\'"exercice fiscal" est une période de 12 mois utilisée pour le reporting financier.' },
      { id: 7, type: 'fill-blank', question: 'Complete with the correct term:', context: 'The balance _____ (SHEET) shows the company\'s assets, liabilities, and equity.', correctAnswer: 'sheet', explanation: 'A "balance sheet" is a financial statement showing what a company owns and owes at a specific point in time.', explanationFr: 'Le "bilan" est un état financier montrant ce que possède et doit une entreprise à un moment donné.' },
      { id: 8, type: 'mcq', question: 'What is "cash flow"?', context: '', options: ['The movement of money in and out of a business', 'The total cash in the bank', 'A type of investment', 'Monthly revenue'], correctAnswer: 'The movement of money in and out of a business', explanation: '"Cash flow" tracks how much money is coming into and going out of the business over a period.', explanationFr: 'Le "flux de trésorerie" suit combien d\'argent entre et sort de l\'entreprise sur une période.' }
    ]
  },
  {
    id: 'cloe-vocab-finance-2',
    title: 'Advanced Financial Terminology',
    titleFr: 'Terminologie financière avancée',
    category: 'vocabulary',
    difficulty: 'B2',
    description: 'Master sophisticated financial vocabulary for business analysis.',
    descriptionFr: 'Maîtrisez le vocabulaire financier sophistiqué pour l\'analyse commerciale.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'What is "EBITDA"?', context: '', options: ['Earnings Before Interest, Taxes, Depreciation, and Amortization', 'European Business Investment and Trade Development Agency', 'Estimated Business Income Tax Deduction Amount', 'Executive Board Investment and Trade Decision Authority'], correctAnswer: 'Earnings Before Interest, Taxes, Depreciation, and Amortization', explanation: 'EBITDA is a measure of operating performance that excludes certain non-cash expenses.', explanationFr: 'L\'EBITDA est une mesure de performance opérationnelle qui exclut certaines charges non-cash.' },
      { id: 2, type: 'mcq', question: 'What does "year-over-year" (YoY) mean?', context: '', options: ['Comparing results to the same period last year', 'Annual performance targets', 'A 12-month projection', 'Sequential quarterly growth'], correctAnswer: 'Comparing results to the same period last year', explanation: '"Year-over-year" compares current performance to the same time period in the previous year.', explanationFr: '"Year-over-year" compare la performance actuelle à la même période de l\'année précédente.' },
      { id: 3, type: 'fill-blank', question: 'Complete the sentence:', context: 'The company\'s profit _____ (MARGIN) improved to 15% due to cost reductions.', correctAnswer: 'margin', explanation: '"Profit margin" is the percentage of revenue that becomes profit.', explanationFr: 'La "marge bénéficiaire" est le pourcentage du CA qui devient profit.' },
      { id: 4, type: 'mcq', question: 'What is "depreciation"?', context: '', options: ['The decrease in value of an asset over time', 'A currency exchange rate change', 'A tax increase', 'A sales discount'], correctAnswer: 'The decrease in value of an asset over time', explanation: '"Depreciation" spreads the cost of an asset over its useful life (e.g., equipment losing value).', explanationFr: 'L\'"amortissement" répartit le coût d\'un actif sur sa durée de vie utile.' },
      { id: 5, type: 'mcq', question: 'What does "leverage" mean in finance?', context: '', options: ['Using borrowed money to increase investment returns', 'A type of insurance', 'A marketing technique', 'An accounting method'], correctAnswer: 'Using borrowed money to increase investment returns', explanation: '"Leverage" involves using debt to amplify potential returns (and risks) on investments.', explanationFr: 'L\'"effet de levier" implique l\'utilisation de la dette pour amplifier les rendements potentiels.' },
      { id: 6, type: 'mcq', question: 'What is "working capital"?', context: '', options: ['Current assets minus current liabilities', 'Total company value', 'Annual budget', 'Fixed assets'], correctAnswer: 'Current assets minus current liabilities', explanation: '"Working capital" measures short-term liquidity - the money available for day-to-day operations.', explanationFr: 'Le "fonds de roulement" mesure la liquidité à court terme - l\'argent disponible pour les opérations quotidiennes.' },
      { id: 7, type: 'fill-blank', question: 'Complete with the correct word:', context: 'The company announced a 5% dividend _____ (YIELD) for shareholders.', correctAnswer: 'yield', explanation: '"Dividend yield" is the annual dividend payment divided by the stock price, expressed as a percentage.', explanationFr: 'Le "rendement du dividende" est le paiement annuel du dividende divisé par le prix de l\'action.' },
      { id: 8, type: 'mcq', question: 'What is "amortization"?', context: '', options: ['Spreading the cost of intangible assets over time', 'Paying off a loan in installments', 'Both A and B are correct', 'Neither A nor B'], correctAnswer: 'Both A and B are correct', explanation: '"Amortization" can refer to spreading intangible asset costs (like patents) or paying off loans gradually.', explanationFr: 'L\'"amortissement" peut désigner la répartition des coûts d\'actifs incorporels ou le remboursement progressif d\'emprunts.' }
    ]
  },
  {
    id: 'cloe-vocab-finance-3',
    title: 'Financial Statements Analysis',
    titleFr: 'Analyse des états financiers',
    category: 'vocabulary',
    difficulty: 'C1',
    description: 'Expert-level vocabulary for analyzing corporate financial statements.',
    descriptionFr: 'Vocabulaire de niveau expert pour l\'analyse des états financiers d\'entreprise.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'What is "goodwill" in accounting?', context: '', options: ['The intangible value of a company beyond its physical assets', 'A charitable donation', 'A sales discount', 'Employee bonuses'], correctAnswer: 'The intangible value of a company beyond its physical assets', explanation: '"Goodwill" includes brand reputation, customer relationships, and other intangibles that add value.', explanationFr: 'Le "goodwill" inclut la réputation de la marque, les relations clients et autres actifs incorporels.' },
      { id: 2, type: 'mcq', question: 'What does "write-off" mean?', context: '', options: ['Removing a worthless asset from the books', 'A tax refund', 'A bonus payment', 'A price increase'], correctAnswer: 'Removing a worthless asset from the books', explanation: 'A "write-off" occurs when an asset is deemed worthless and is removed from the balance sheet.', explanationFr: 'Une "dépréciation" survient quand un actif est jugé sans valeur et retiré du bilan.' },
      { id: 3, type: 'fill-blank', question: 'Complete the sentence:', context: 'The auditor noted a significant _____ (DISCREPANCY) between reported and actual inventory levels.', correctAnswer: 'discrepancy', explanation: 'A "discrepancy" is a difference between two things that should match.', explanationFr: 'Un "écart" est une différence entre deux choses qui devraient correspondre.' },
      { id: 4, type: 'mcq', question: 'What is "accrual accounting"?', context: '', options: ['Recording revenue/expenses when earned/incurred, not when cash changes hands', 'Recording only cash transactions', 'A tax calculation method', 'A budgeting technique'], correctAnswer: 'Recording revenue/expenses when earned/incurred, not when cash changes hands', explanation: '"Accrual accounting" matches revenues with expenses in the period they occur, regardless of cash timing.', explanationFr: 'La "comptabilité d\'engagement" fait correspondre revenus et dépenses dans la période où ils surviennent.' },
      { id: 5, type: 'mcq', question: 'What is a "contingent liability"?', context: '', options: ['A potential obligation depending on a future event', 'A guaranteed debt', 'A regular expense', 'An asset under construction'], correctAnswer: 'A potential obligation depending on a future event', explanation: '"Contingent liabilities" are possible obligations that may arise (e.g., pending lawsuits).', explanationFr: 'Les "passifs éventuels" sont des obligations possibles qui peuvent survenir (ex: procès en cours).' },
      { id: 6, type: 'mcq', question: 'What does "pro forma" mean in financial reporting?', context: '', options: ['Projected or hypothetical figures', 'Actual historical results', 'Audited numbers', 'Tax calculations'], correctAnswer: 'Projected or hypothetical figures', explanation: '"Pro forma" statements show projections or what results would look like under certain assumptions.', explanationFr: 'Les états "pro forma" montrent des projections ou ce que seraient les résultats sous certaines hypothèses.' },
      { id: 7, type: 'fill-blank', question: 'Complete the term:', context: 'The company maintained adequate liquidity _____ (RATIO) throughout the quarter.', correctAnswer: 'ratio', explanation: 'A "liquidity ratio" measures a company\'s ability to pay short-term obligations.', explanationFr: 'Un "ratio de liquidité" mesure la capacité d\'une entreprise à payer ses obligations à court terme.' },
      { id: 8, type: 'mcq', question: 'What is "equity" in financial terms?', context: '', options: ['Assets minus liabilities (ownership value)', 'Total company debt', 'Annual revenue', 'Operating expenses'], correctAnswer: 'Assets minus liabilities (ownership value)', explanation: '"Equity" represents the owners\' residual interest in the company after all debts are paid.', explanationFr: 'Les "capitaux propres" représentent l\'intérêt résiduel des propriétaires après paiement de toutes les dettes.' }
    ]
  },
  {
    id: 'cloe-reading-contract-1',
    title: 'Reading: Service Agreement Excerpt',
    titleFr: 'Lecture : Extrait de contrat de service',
    category: 'reading',
    difficulty: 'B2',
    description: 'Practice reading and understanding legal contract language.',
    descriptionFr: 'Pratiquez la lecture et la compréhension du langage juridique contractuel.',
    estimatedTime: 15,
    questions: [
      { id: 1, type: 'mcq', question: 'Read the contract excerpt and answer:', context: 'SERVICES AGREEMENT\n\n1. TERM AND TERMINATION\n1.1 This Agreement shall commence on the Effective Date and shall continue for an initial term of twenty-four (24) months ("Initial Term"), unless earlier terminated in accordance with this Section.\n\n1.2 Either party may terminate this Agreement for convenience by providing ninety (90) days prior written notice to the other party.\n\n1.3 Either party may terminate this Agreement immediately upon written notice if the other party: (a) commits a material breach which is not remedied within thirty (30) days after receiving written notice; or (b) becomes insolvent or enters into liquidation.\n\n2. FEES AND PAYMENT\n2.1 In consideration for the Services, the Client shall pay the Service Provider the fees set forth in Schedule A ("Fees").\n\n2.2 Fees shall be invoiced monthly in arrears and are due within thirty (30) days of the invoice date.', options: ['24 months', '12 months', '90 days', '30 days'], correctAnswer: '24 months', explanation: 'Clause 1.1 states the Initial Term is "twenty-four (24) months".', explanationFr: 'La clause 1.1 indique que la Durée Initiale est de "vingt-quatre (24) mois".' },
      { id: 2, type: 'mcq', question: 'How much notice is required to terminate for convenience?', context: '', options: ['90 days written notice', '30 days written notice', 'Immediate notice', '24 months notice'], correctAnswer: '90 days written notice', explanation: 'Clause 1.2 specifies "ninety (90) days prior written notice".', explanationFr: 'La clause 1.2 précise "quatre-vingt-dix (90) jours de préavis écrit".' },
      { id: 3, type: 'mcq', question: 'When can a party terminate immediately?', context: '', options: ['For material breach unremedied after 30 days or insolvency', 'At any time without reason', 'Only at the end of the term', 'With 90 days notice only'], correctAnswer: 'For material breach unremedied after 30 days or insolvency', explanation: 'Clause 1.3 allows immediate termination for unremedied material breach or insolvency.', explanationFr: 'La clause 1.3 permet une résiliation immédiate pour manquement grave non corrigé ou insolvabilité.' },
      { id: 4, type: 'mcq', question: 'What does "in arrears" mean regarding invoicing?', context: '', options: ['Billed after services are provided', 'Billed before services are provided', 'Billed annually', 'Billed upon signing'], correctAnswer: 'Billed after services are provided', explanation: '"In arrears" means payment is made after the service period, not in advance.', explanationFr: '"In arrears" signifie que le paiement est effectué après la période de service, pas à l\'avance.' },
      { id: 5, type: 'fill-blank', question: 'Complete based on the contract:', context: 'Payment is due within _____ days of the invoice date.', correctAnswer: '30', explanation: 'Clause 2.2 states fees "are due within thirty (30) days of the invoice date".', explanationFr: 'La clause 2.2 indique que les frais "sont dus dans les trente (30) jours suivant la date de facturation".' },
      { id: 6, type: 'mcq', question: 'Where are the specific fees detailed?', context: '', options: ['Schedule A', 'Section 1', 'The Initial Term', 'The termination clause'], correctAnswer: 'Schedule A', explanation: 'Clause 2.1 references fees "set forth in Schedule A".', explanationFr: 'La clause 2.1 fait référence aux frais "énoncés à l\'Annexe A".' }
    ]
  },
  {
    id: 'cloe-reading-finance-1',
    title: 'Reading: Quarterly Financial Report',
    titleFr: 'Lecture : Rapport financier trimestriel',
    category: 'reading',
    difficulty: 'B2',
    description: 'Practice analyzing financial reports and understanding key metrics.',
    descriptionFr: 'Pratiquez l\'analyse des rapports financiers et la compréhension des métriques clés.',
    estimatedTime: 15,
    questions: [
      { id: 1, type: 'mcq', question: 'Read the financial report excerpt and answer:', context: 'Q3 2024 FINANCIAL HIGHLIGHTS\n\nDear Shareholders,\n\nWe are pleased to report strong third-quarter results that exceeded market expectations.\n\nKEY METRICS:\n- Revenue: €245.3 million (up 12% YoY)\n- Gross Profit: €98.1 million (gross margin: 40%)\n- Operating Income: €42.7 million (up 18% YoY)\n- Net Income: €31.2 million (up 22% YoY)\n- Earnings Per Share (EPS): €1.56 (up from €1.28)\n\nOPERATIONAL HIGHLIGHTS:\nOur digital transformation initiative delivered €8.5 million in cost savings this quarter. Customer acquisition costs decreased by 15% while customer lifetime value increased by 23%.\n\nOUTLOOK:\nWe are raising our full-year revenue guidance to €940-960 million, reflecting continued strong demand. We expect Q4 operating margins to remain stable at 17-18%.\n\nBest regards,\nMarie Dupont, CFO', options: ['€245.3 million', '€98.1 million', '€42.7 million', '€31.2 million'], correctAnswer: '€245.3 million', explanation: 'The report states "Revenue: €245.3 million".', explanationFr: 'Le rapport indique "Chiffre d\'affaires : 245,3 millions d\'euros".' },
      { id: 2, type: 'mcq', question: 'What is the gross profit margin?', context: '', options: ['40%', '12%', '18%', '22%'], correctAnswer: '40%', explanation: 'The report shows "gross margin: 40%".', explanationFr: 'Le rapport montre "marge brute : 40%".' },
      { id: 3, type: 'mcq', question: 'By how much did net income grow year-over-year?', context: '', options: ['22%', '12%', '18%', '40%'], correctAnswer: '22%', explanation: 'Net Income is shown as "up 22% YoY".', explanationFr: 'Le résultat net est indiqué "en hausse de 22% sur un an".' },
      { id: 4, type: 'fill-blank', question: 'Complete based on the report:', context: 'The digital transformation initiative saved €_____ million this quarter.', correctAnswer: '8.5', explanation: 'The report states the initiative "delivered €8.5 million in cost savings".', explanationFr: 'Le rapport indique que l\'initiative "a généré 8,5 millions d\'euros d\'économies".' },
      { id: 5, type: 'mcq', question: 'What is the new full-year revenue guidance?', context: '', options: ['€940-960 million', '€245.3 million', '€98.1 million', '€31.2 million'], correctAnswer: '€940-960 million', explanation: 'The outlook section states guidance is raised "to €940-960 million".', explanationFr: 'La section perspectives indique que les prévisions sont relevées "à 940-960 millions d\'euros".' },
      { id: 6, type: 'mcq', question: 'What is the expected Q4 operating margin range?', context: '', options: ['17-18%', '40%', '12%', '22%'], correctAnswer: '17-18%', explanation: 'The outlook states "Q4 operating margins to remain stable at 17-18%".', explanationFr: 'Les perspectives indiquent "marges opérationnelles du T4 stables à 17-18%".' }
    ]
  },
  // ============= NEW EXPANDED CLOE EXERCISES 2026 =============
  // A1 Level - Beginner Exercises
  {
    id: 'cloe-vocab-a1-1',
    title: 'Vocabulary: Basic Greetings & Introductions',
    titleFr: 'Vocabulaire : Salutations et présentations de base',
    category: 'vocabulary',
    difficulty: 'A1',
    description: 'Learn essential greetings and how to introduce yourself in English.',
    descriptionFr: 'Apprenez les salutations essentielles et comment vous présenter en anglais.',
    estimatedTime: 6,
    questions: [
      { id: 1, type: 'mcq', question: 'How do you greet someone in the morning?', context: '', options: ['Good morning', 'Good night', 'Good evening', 'Goodbye'], correctAnswer: 'Good morning', explanation: '"Good morning" is used as a greeting before noon.', explanationFr: '"Good morning" est utilisé comme salutation avant midi.' },
      { id: 2, type: 'mcq', question: 'What do you say when you meet someone for the first time?', context: '', options: ['Nice to meet you', 'See you later', 'Take care', 'Goodbye'], correctAnswer: 'Nice to meet you', explanation: '"Nice to meet you" is the standard phrase when meeting someone new.', explanationFr: '"Nice to meet you" est la phrase standard quand on rencontre quelqu\'un pour la première fois.' },
      { id: 3, type: 'fill-blank', question: 'Complete the introduction:', context: 'Hello, my _____ is Sarah.', correctAnswer: 'name', explanation: 'We say "My name is..." to introduce ourselves.', explanationFr: 'On dit "My name is..." pour se présenter.' },
      { id: 4, type: 'mcq', question: 'Which response is polite when someone says "How are you?"', context: '', options: ['I\'m fine, thank you. And you?', 'What?', 'Nothing', 'I don\'t know'], correctAnswer: 'I\'m fine, thank you. And you?', explanation: 'The polite response includes thanking and asking back.', explanationFr: 'La réponse polie inclut un remerciement et une question en retour.' },
      { id: 5, type: 'mcq', question: 'What do you say when leaving?', context: '', options: ['Goodbye', 'Hello', 'Good morning', 'Nice to meet you'], correctAnswer: 'Goodbye', explanation: '"Goodbye" is used when leaving or ending a conversation.', explanationFr: '"Goodbye" est utilisé quand on part ou termine une conversation.' },
      { id: 6, type: 'fill-blank', question: 'Complete:', context: 'I am _____ (FROM) France.', correctAnswer: 'from', explanation: 'We use "from" to indicate our origin country.', explanationFr: 'On utilise "from" pour indiquer notre pays d\'origine.' }
    ]
  },
  {
    id: 'cloe-grammar-a1-1',
    title: 'Grammar: To Be - Present Simple',
    titleFr: 'Grammaire : Le verbe To Be au présent',
    category: 'grammar',
    difficulty: 'A1',
    description: 'Master the verb "to be" in present simple tense.',
    descriptionFr: 'Maîtrisez le verbe "to be" au présent simple.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct form:', context: 'I _____ a student.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'am', explanation: 'With "I", we use "am".', explanationFr: 'Avec "I", on utilise "am".' },
      { id: 2, type: 'mcq', question: 'Select the correct answer:', context: 'She _____ from London.', options: ['is', 'am', 'are', 'be'], correctAnswer: 'is', explanation: 'With he/she/it, we use "is".', explanationFr: 'Avec he/she/it, on utilise "is".' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'We _____ friends.', correctAnswer: 'are', explanation: 'With we/you/they, we use "are".', explanationFr: 'Avec we/you/they, on utilise "are".' },
      { id: 4, type: 'mcq', question: 'Which sentence is correct?', context: '', options: ['They are happy.', 'They is happy.', 'They am happy.', 'They be happy.'], correctAnswer: 'They are happy.', explanation: '"They" takes the verb "are".', explanationFr: '"They" prend le verbe "are".' },
      { id: 5, type: 'mcq', question: 'Choose the negative form:', context: 'He _____ at home.', options: ['is not', 'am not', 'are not', 'not is'], correctAnswer: 'is not', explanation: 'The negative of "is" is "is not" or "isn\'t".', explanationFr: 'La forme négative de "is" est "is not" ou "isn\'t".' },
      { id: 6, type: 'fill-blank', question: 'Complete the question:', context: '_____ you a teacher?', correctAnswer: 'Are', explanation: 'Questions with "you" start with "Are".', explanationFr: 'Les questions avec "you" commencent par "Are".' }
    ]
  },
  {
    id: 'cloe-vocab-a1-2',
    title: 'Vocabulary: Numbers and Days',
    titleFr: 'Vocabulaire : Nombres et jours',
    category: 'vocabulary',
    difficulty: 'A1',
    description: 'Learn numbers and days of the week in English.',
    descriptionFr: 'Apprenez les nombres et les jours de la semaine en anglais.',
    estimatedTime: 6,
    questions: [
      { id: 1, type: 'mcq', question: 'How do you write 15 in letters?', context: '', options: ['fifteen', 'fiveteen', 'fifthteen', 'fithteen'], correctAnswer: 'fifteen', explanation: 'The number 15 is spelled "fifteen".', explanationFr: 'Le nombre 15 s\'écrit "fifteen".' },
      { id: 2, type: 'mcq', question: 'What day comes after Tuesday?', context: '', options: ['Wednesday', 'Monday', 'Thursday', 'Friday'], correctAnswer: 'Wednesday', explanation: 'The order is: Monday, Tuesday, Wednesday...', explanationFr: 'L\'ordre est : Monday, Tuesday, Wednesday...' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'There are _____ days in a week.', correctAnswer: 'seven', explanation: 'A week has 7 days.', explanationFr: 'Une semaine a 7 jours.' },
      { id: 4, type: 'mcq', question: 'Which day starts the work week?', context: '', options: ['Monday', 'Sunday', 'Saturday', 'Friday'], correctAnswer: 'Monday', explanation: 'In most countries, Monday starts the work week.', explanationFr: 'Dans la plupart des pays, lundi commence la semaine de travail.' },
      { id: 5, type: 'mcq', question: 'What is 20 + 30?', context: '', options: ['fifty', 'fourty', 'forty', 'sixty'], correctAnswer: 'fifty', explanation: '20 + 30 = 50, spelled "fifty".', explanationFr: '20 + 30 = 50, qui s\'écrit "fifty".' },
      { id: 6, type: 'fill-blank', question: 'Complete:', context: 'The weekend includes Saturday and _____.', correctAnswer: 'Sunday', explanation: 'The weekend is Saturday and Sunday.', explanationFr: 'Le week-end comprend samedi et dimanche.' }
    ]
  },
  // A2 Level - Elementary Exercises
  {
    id: 'cloe-vocab-a2-1',
    title: 'Vocabulary: Shopping & Prices',
    titleFr: 'Vocabulaire : Achats et prix',
    category: 'vocabulary',
    difficulty: 'A2',
    description: 'Essential vocabulary for shopping situations.',
    descriptionFr: 'Vocabulaire essentiel pour les situations d\'achat.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'What do you say to ask about price?', context: '', options: ['How much does it cost?', 'What is it?', 'Where is it?', 'Why is it?'], correctAnswer: 'How much does it cost?', explanation: 'We ask "How much does it cost?" or "How much is it?" for prices.', explanationFr: 'On demande "How much does it cost?" ou "How much is it?" pour les prix.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'Can I pay by credit _____?', correctAnswer: 'card', explanation: '"Credit card" is a common payment method.', explanationFr: '"Credit card" (carte de crédit) est un mode de paiement courant.' },
      { id: 3, type: 'mcq', question: 'What is a "receipt"?', context: '', options: ['A paper showing what you bought', 'A shopping bag', 'A price tag', 'A credit card'], correctAnswer: 'A paper showing what you bought', explanation: 'A receipt is proof of purchase.', explanationFr: 'Un reçu est une preuve d\'achat.' },
      { id: 4, type: 'mcq', question: 'Choose the correct phrase:', context: 'You want to try on clothes. You say:', options: ['Can I try this on?', 'Can I buy this on?', 'Can I take this on?', 'Can I have this on?'], correctAnswer: 'Can I try this on?', explanation: '"Try on" means to test clothes before buying.', explanationFr: '"Try on" signifie essayer des vêtements avant d\'acheter.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'The item is on _____ (SALE) - 50% off!', correctAnswer: 'sale', explanation: '"On sale" means the price is reduced.', explanationFr: '"On sale" signifie que le prix est réduit.' },
      { id: 6, type: 'mcq', question: 'What does "out of stock" mean?', context: '', options: ['Not available anymore', 'Very expensive', 'New arrival', 'On discount'], correctAnswer: 'Not available anymore', explanation: '"Out of stock" means the item is not available.', explanationFr: '"Out of stock" signifie que l\'article n\'est pas disponible.' }
    ]
  },
  {
    id: 'cloe-grammar-a2-1',
    title: 'Grammar: Past Simple - Regular Verbs',
    titleFr: 'Grammaire : Passé simple - Verbes réguliers',
    category: 'grammar',
    difficulty: 'A2',
    description: 'Practice forming the past simple with regular verbs.',
    descriptionFr: 'Pratiquez la formation du passé simple avec les verbes réguliers.',
    estimatedTime: 8,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct past form:', context: 'I _____ the movie yesterday.', options: ['watched', 'watch', 'watches', 'watching'], correctAnswer: 'watched', explanation: 'Regular past tense adds -ed: watch → watched.', explanationFr: 'Le passé régulier ajoute -ed : watch → watched.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'She _____ (WORK) until 6 PM yesterday.', correctAnswer: 'worked', explanation: 'Past simple of "work" is "worked".', explanationFr: 'Le passé simple de "work" est "worked".' },
      { id: 3, type: 'mcq', question: 'Which sentence is correct?', context: '', options: ['They played tennis last week.', 'They play tennis last week.', 'They plaied tennis last week.', 'They playing tennis last week.'], correctAnswer: 'They played tennis last week.', explanation: '"Last week" requires past simple: played.', explanationFr: '"Last week" exige le passé simple : played.' },
      { id: 4, type: 'mcq', question: 'Select the negative form:', context: 'He _____ the email.', options: ['didn\'t receive', 'doesn\'t receive', 'not received', 'didn\'t received'], correctAnswer: 'didn\'t receive', explanation: 'Negative past: did not (didn\'t) + base form.', explanationFr: 'Passé négatif : did not (didn\'t) + forme de base.' },
      { id: 5, type: 'fill-blank', question: 'Complete the question:', context: '_____ you finish your homework?', correctAnswer: 'Did', explanation: 'Past questions start with "Did".', explanationFr: 'Les questions au passé commencent par "Did".' },
      { id: 6, type: 'mcq', question: 'Choose the correct form:', context: 'The meeting _____ at 2 PM.', options: ['started', 'start', 'starts', 'starting'], correctAnswer: 'started', explanation: 'Past simple of "start" is "started".', explanationFr: 'Le passé simple de "start" est "started".' }
    ]
  },
  // More B1 Level Exercises
  {
    id: 'cloe-vocab-b1-2',
    title: 'Vocabulary: Health & Medical',
    titleFr: 'Vocabulaire : Santé et médical',
    category: 'vocabulary',
    difficulty: 'B1',
    description: 'Medical vocabulary for professional contexts.',
    descriptionFr: 'Vocabulaire médical pour les contextes professionnels.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'What is a "prescription"?', context: '', options: ['A doctor\'s written order for medicine', 'A hospital bill', 'An appointment card', 'A medical test'], correctAnswer: 'A doctor\'s written order for medicine', explanation: 'A prescription is a doctor\'s order for medication.', explanationFr: 'Une ordonnance est un ordre médical pour des médicaments.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'I need to make an _____ with the doctor.', correctAnswer: 'appointment', explanation: 'We make "appointments" to see doctors.', explanationFr: 'On prend des "rendez-vous" pour voir des médecins.' },
      { id: 3, type: 'mcq', question: 'What does "symptoms" mean?', context: '', options: ['Signs of illness', 'Types of medicine', 'Medical equipment', 'Hospital departments'], correctAnswer: 'Signs of illness', explanation: 'Symptoms are physical signs that indicate illness.', explanationFr: 'Les symptômes sont des signes physiques indiquant une maladie.' },
      { id: 4, type: 'mcq', question: 'Choose the correct word:', context: 'The doctor will _____ you now.', options: ['see', 'look', 'watch', 'view'], correctAnswer: 'see', explanation: 'Doctors "see" patients during appointments.', explanationFr: 'Les médecins "voient" les patients pendant les rendez-vous.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'You should take this medicine three times a _____.', correctAnswer: 'day', explanation: 'Medicine dosage is often given per day.', explanationFr: 'La posologie est souvent donnée par jour.' },
      { id: 6, type: 'mcq', question: 'What is an "allergy"?', context: '', options: ['A negative reaction to something', 'A type of medicine', 'A medical test', 'A hospital room'], correctAnswer: 'A negative reaction to something', explanation: 'An allergy is a harmful reaction to foods, medicines, etc.', explanationFr: 'Une allergie est une réaction négative à des aliments, médicaments, etc.' }
    ]
  },
  {
    id: 'cloe-expressions-b1-1',
    title: 'Expressions: Telephone Conversations',
    titleFr: 'Expressions : Conversations téléphoniques',
    category: 'expressions',
    difficulty: 'B1',
    description: 'Essential phrases for professional phone calls.',
    descriptionFr: 'Phrases essentielles pour les appels téléphoniques professionnels.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'How do you answer a business call?', context: '', options: ['Good morning, [Company name], how may I help you?', 'Yeah, what?', 'Hello, it\'s me.', 'Who is this?'], correctAnswer: 'Good morning, [Company name], how may I help you?', explanation: 'Professional call answering includes greeting, company name, and offer to help.', explanationFr: 'Répondre professionnellement inclut salutation, nom de l\'entreprise et offre d\'aide.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'Could you _____ (HOLD) for a moment, please?', correctAnswer: 'hold', explanation: '"Hold" means to wait on the phone.', explanationFr: '"Hold" signifie patienter au téléphone.' },
      { id: 3, type: 'mcq', question: 'What do you say when you can\'t hear well?', context: '', options: ['I\'m sorry, could you repeat that?', 'What did you say?', 'Speak louder!', 'I can\'t hear you!'], correctAnswer: 'I\'m sorry, could you repeat that?', explanation: 'This is the polite way to ask for repetition.', explanationFr: 'C\'est la manière polie de demander une répétition.' },
      { id: 4, type: 'mcq', question: 'How do you transfer a call?', context: '', options: ['Let me put you through to...', 'I\'ll send you to...', 'Go to the other person.', 'Wait, I\'ll find someone.'], correctAnswer: 'Let me put you through to...', explanation: '"Put through" means to connect/transfer a call.', explanationFr: '"Put through" signifie transférer un appel.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'I\'m _____ (CALL) to inquire about your services.', correctAnswer: 'calling', explanation: '"I\'m calling" is the phrase to explain why you\'re phoning.', explanationFr: '"I\'m calling" explique pourquoi vous téléphonez.' },
      { id: 6, type: 'mcq', question: 'How do you end a professional call?', context: '', options: ['Thank you for your time. Goodbye.', 'Bye bye!', 'Okay, that\'s it.', 'I\'m hanging up now.'], correctAnswer: 'Thank you for your time. Goodbye.', explanation: 'Professional calls end with thanks and a formal goodbye.', explanationFr: 'Les appels professionnels se terminent par des remerciements et un au revoir formel.' }
    ]
  },
  // More B2 Level Exercises
  {
    id: 'cloe-grammar-b2-2',
    title: 'Grammar: Conditionals - Mixed',
    titleFr: 'Grammaire : Conditionnels - Mixte',
    category: 'grammar',
    difficulty: 'B2',
    description: 'Practice all types of conditional sentences.',
    descriptionFr: 'Pratiquez tous les types de phrases conditionnelles.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct conditional:', context: 'If I _____ you, I would accept the offer.', options: ['were', 'am', 'would be', 'was being'], correctAnswer: 'were', explanation: 'Second conditional uses "were" for all subjects (formal).', explanationFr: 'Le deuxième conditionnel utilise "were" pour tous les sujets (formel).' },
      { id: 2, type: 'mcq', question: 'Select the correct form:', context: 'If the weather is nice, we _____ to the park.', options: ['will go', 'would go', 'went', 'go'], correctAnswer: 'will go', explanation: 'First conditional: If + present, will + base verb.', explanationFr: 'Premier conditionnel : If + présent, will + verbe de base.' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'If I had known earlier, I _____ (TELL) you.', correctAnswer: 'would have told', explanation: 'Third conditional: would have + past participle.', explanationFr: 'Troisième conditionnel : would have + participe passé.' },
      { id: 4, type: 'mcq', question: 'Which sentence is third conditional?', context: '', options: ['If she had studied, she would have passed.', 'If she studies, she will pass.', 'If she studied, she would pass.', 'If she studies, she passes.'], correctAnswer: 'If she had studied, she would have passed.', explanation: 'Third conditional describes unreal past situations.', explanationFr: 'Le troisième conditionnel décrit des situations passées irréelles.' },
      { id: 5, type: 'mcq', question: 'Choose the zero conditional:', context: '', options: ['If you heat water to 100°C, it boils.', 'If you heated water, it would boil.', 'If you had heated water, it would have boiled.', 'If you will heat water, it boils.'], correctAnswer: 'If you heat water to 100°C, it boils.', explanation: 'Zero conditional expresses general truths: If + present, present.', explanationFr: 'Le conditionnel zéro exprime des vérités générales : If + présent, présent.' },
      { id: 6, type: 'fill-blank', question: 'Complete:', context: 'Unless you _____ (HURRY), you will miss the train.', correctAnswer: 'hurry', explanation: '"Unless" means "if not" and takes present simple.', explanationFr: '"Unless" signifie "si...ne...pas" et prend le présent simple.' },
      { id: 7, type: 'mcq', question: 'Which is a mixed conditional?', context: '', options: ['If I had taken that job, I would be rich now.', 'If I take the job, I will be rich.', 'If I took the job, I would be rich.', 'If I had taken the job, I would have been rich.'], correctAnswer: 'If I had taken that job, I would be rich now.', explanation: 'Mixed conditional: past action affecting present result.', explanationFr: 'Conditionnel mixte : action passée affectant un résultat présent.' },
      { id: 8, type: 'mcq', question: 'Select the correct sentence:', context: '', options: ['Had I known, I would have helped.', 'If had I known, I would have helped.', 'Had I known, I would helped.', 'Had I know, I would have helped.'], correctAnswer: 'Had I known, I would have helped.', explanation: 'Inversion in third conditional: Had + subject + past participle.', explanationFr: 'Inversion au troisième conditionnel : Had + sujet + participe passé.' }
    ]
  },
  {
    id: 'cloe-reading-b2-1',
    title: 'Reading: Job Advertisement',
    titleFr: 'Lecture : Offre d\'emploi',
    category: 'reading',
    difficulty: 'B2',
    description: 'Practice reading and understanding job postings.',
    descriptionFr: 'Pratiquez la lecture et la compréhension des offres d\'emploi.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Read the job ad and answer:', context: 'MARKETING MANAGER\nLocation: Paris, France (Hybrid - 3 days office)\nSalary: €55,000 - €70,000 + bonus\n\nAbout Us:\nTechFlow Solutions is a fast-growing B2B SaaS company serving 500+ clients across Europe. We\'re looking for a creative Marketing Manager to lead our brand strategy.\n\nResponsibilities:\n• Develop and execute marketing campaigns\n• Manage a team of 4 marketing specialists\n• Oversee €200K annual marketing budget\n• Analyze campaign performance and ROI\n• Collaborate with Sales and Product teams\n\nRequirements:\n• 5+ years marketing experience, 2+ in management\n• Fluent English and French (German a plus)\n• Experience with HubSpot and Google Analytics\n• Bachelor\'s degree in Marketing or related field\n\nBenefits:\n• 28 days annual leave\n• Private health insurance\n• €1,500 training budget\n• Stock options after 1 year\n\nApply by: March 30, 2026', options: ['€55,000 - €70,000', '€200,000', '€1,500', '28 days'], correctAnswer: '€55,000 - €70,000', explanation: 'The salary range is listed as "€55,000 - €70,000 + bonus".', explanationFr: 'La fourchette salariale est indiquée "55 000 € - 70 000 € + bonus".' },
      { id: 2, type: 'mcq', question: 'How many people will the Marketing Manager supervise?', context: '', options: ['4', '5', '500', '200'], correctAnswer: '4', explanation: 'The ad states "Manage a team of 4 marketing specialists".', explanationFr: 'L\'annonce indique "Gérer une équipe de 4 spécialistes marketing".' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'The work arrangement is _____ days in the office.', correctAnswer: '3', explanation: 'The location states "Hybrid - 3 days office".', explanationFr: 'Le lieu indique "Hybride - 3 jours au bureau".' },
      { id: 4, type: 'mcq', question: 'What is NOT a requirement?', context: '', options: ['Master\'s degree', '5+ years experience', 'HubSpot experience', 'Fluent English'], correctAnswer: 'Master\'s degree', explanation: 'The requirements list "Bachelor\'s degree", not Master\'s.', explanationFr: 'Les exigences mentionnent "Licence", pas "Master".' },
      { id: 5, type: 'mcq', question: 'When are stock options available?', context: '', options: ['After 1 year', 'Immediately', 'After 2 years', 'After 5 years'], correctAnswer: 'After 1 year', explanation: 'Benefits include "Stock options after 1 year".', explanationFr: 'Les avantages incluent "Stock options après 1 an".' },
      { id: 6, type: 'mcq', question: 'What is TechFlow Solutions?', context: '', options: ['A B2B SaaS company', 'A recruitment agency', 'A training provider', 'A marketing agency'], correctAnswer: 'A B2B SaaS company', explanation: 'The ad describes it as "a fast-growing B2B SaaS company".', explanationFr: 'L\'annonce décrit l\'entreprise comme "une société B2B SaaS en croissance rapide".' }
    ]
  },
  // C1 Level - Advanced Exercises
  {
    id: 'cloe-grammar-c1-1',
    title: 'Grammar: Advanced Subjunctive',
    titleFr: 'Grammaire : Subjonctif avancé',
    category: 'grammar',
    difficulty: 'C1',
    description: 'Master subjunctive mood in formal English.',
    descriptionFr: 'Maîtrisez le subjonctif en anglais formel.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Choose the correct subjunctive:', context: 'It is essential that he _____ on time.', options: ['be', 'is', 'was', 'were'], correctAnswer: 'be', explanation: 'Subjunctive uses base form after "it is essential that".', explanationFr: 'Le subjonctif utilise la forme de base après "it is essential that".' },
      { id: 2, type: 'mcq', question: 'Select the correct form:', context: 'The manager insisted that the report _____ completed today.', options: ['be', 'is', 'was', 'would be'], correctAnswer: 'be', explanation: '"Insist that" is followed by subjunctive (base form).', explanationFr: '"Insist that" est suivi du subjonctif (forme de base).' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'If I _____ (BE) in your position, I would resign.', correctAnswer: 'were', explanation: 'Subjunctive "were" is used for hypothetical situations with all subjects.', explanationFr: 'Le subjonctif "were" est utilisé pour les situations hypothétiques avec tous les sujets.' },
      { id: 4, type: 'mcq', question: 'Which sentence uses correct subjunctive?', context: '', options: ['I recommend that she take the course.', 'I recommend that she takes the course.', 'I recommend that she took the course.', 'I recommend that she will take the course.'], correctAnswer: 'I recommend that she take the course.', explanation: '"Recommend that" requires subjunctive (base form).', explanationFr: '"Recommend that" exige le subjonctif (forme de base).' },
      { id: 5, type: 'mcq', question: 'Choose the correct form:', context: 'It is vital that every employee _____ the training.', options: ['attend', 'attends', 'attended', 'will attend'], correctAnswer: 'attend', explanation: '"It is vital that" triggers subjunctive.', explanationFr: '"It is vital that" déclenche le subjonctif.' },
      { id: 6, type: 'mcq', question: 'Which is correct?', context: '', options: ['The board demanded that the CEO resign.', 'The board demanded that the CEO resigns.', 'The board demanded that the CEO resigned.', 'The board demanded the CEO to resign.'], correctAnswer: 'The board demanded that the CEO resign.', explanation: '"Demand that" is followed by subjunctive.', explanationFr: '"Demand that" est suivi du subjonctif.' },
      { id: 7, type: 'fill-blank', question: 'Complete:', context: 'It is imperative that she _____ (NOT MISS) this opportunity.', correctAnswer: 'not miss', explanation: 'Negative subjunctive: not + base form.', explanationFr: 'Subjonctif négatif : not + forme de base.' },
      { id: 8, type: 'mcq', question: 'Select the correct subjunctive:', context: 'Lest we _____ the deadline, we should start now.', options: ['miss', 'should miss', 'missed', 'will miss'], correctAnswer: 'miss', explanation: '"Lest" is followed by subjunctive base form.', explanationFr: '"Lest" est suivi du subjonctif (forme de base).' }
    ]
  },
  {
    id: 'cloe-vocab-c1-1',
    title: 'Vocabulary: Strategic Business Terms',
    titleFr: 'Vocabulaire : Termes stratégiques d\'entreprise',
    category: 'vocabulary',
    difficulty: 'C1',
    description: 'Advanced vocabulary for corporate strategy discussions.',
    descriptionFr: 'Vocabulaire avancé pour les discussions de stratégie d\'entreprise.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'What is "market penetration"?', context: '', options: ['Strategy to increase market share with existing products', 'Entering a new market', 'Developing new products', 'Acquiring competitors'], correctAnswer: 'Strategy to increase market share with existing products', explanation: 'Market penetration focuses on selling more of current products to current markets.', explanationFr: 'La pénétration de marché consiste à vendre plus de produits actuels sur les marchés actuels.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'The company achieved a competitive _____ through innovation.', correctAnswer: 'advantage', explanation: '"Competitive advantage" is what sets a company apart from rivals.', explanationFr: 'Un "avantage concurrentiel" distingue une entreprise de ses rivaux.' },
      { id: 3, type: 'mcq', question: 'What does "synergy" mean in business?', context: '', options: ['Combined effect greater than individual parts', 'A type of merger', 'Cost reduction', 'Revenue increase'], correctAnswer: 'Combined effect greater than individual parts', explanation: 'Synergy means 2+2=5; combined entities create more value together.', explanationFr: 'La synergie signifie 2+2=5 ; les entités combinées créent plus de valeur ensemble.' },
      { id: 4, type: 'mcq', question: 'What is "due diligence"?', context: '', options: ['Thorough investigation before a business decision', 'Regular audit', 'Daily operations', 'Customer service'], correctAnswer: 'Thorough investigation before a business decision', explanation: 'Due diligence is research done before acquisitions, investments, or partnerships.', explanationFr: 'La due diligence est une recherche effectuée avant acquisitions, investissements ou partenariats.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'The CEO outlined the company\'s five-year _____ plan.', correctAnswer: 'strategic', explanation: 'A "strategic plan" outlines long-term goals and how to achieve them.', explanationFr: 'Un "plan stratégique" définit les objectifs à long terme et comment les atteindre.' },
      { id: 6, type: 'mcq', question: 'What is "vertical integration"?', context: '', options: ['Owning multiple stages of production/distribution', 'Expanding into new markets', 'Launching new products', 'Hiring more staff'], correctAnswer: 'Owning multiple stages of production/distribution', explanation: 'Vertical integration means controlling suppliers or distributors.', explanationFr: 'L\'intégration verticale signifie contrôler fournisseurs ou distributeurs.' },
      { id: 7, type: 'mcq', question: 'What does "scalability" refer to?', context: '', options: ['Ability to grow without proportional cost increase', 'Company size', 'Production capacity', 'Employee count'], correctAnswer: 'Ability to grow without proportional cost increase', explanation: 'A scalable business can grow revenue without equivalent cost increases.', explanationFr: 'Une entreprise évolutive peut augmenter ses revenus sans augmentation proportionnelle des coûts.' },
      { id: 8, type: 'mcq', question: 'What is a "pivot" in business strategy?', context: '', options: ['Fundamental change in business direction', 'Quarterly report', 'Management restructuring', 'Product launch'], correctAnswer: 'Fundamental change in business direction', explanation: 'A pivot is when a company significantly changes its business model or product.', explanationFr: 'Un pivot est quand une entreprise change significativement son modèle d\'affaires ou produit.' }
    ]
  },
  {
    id: 'cloe-expressions-c1-1',
    title: 'Expressions: Negotiation Language',
    titleFr: 'Expressions : Langage de négociation',
    category: 'expressions',
    difficulty: 'C1',
    description: 'Advanced phrases for professional negotiations.',
    descriptionFr: 'Phrases avancées pour les négociations professionnelles.',
    estimatedTime: 12,
    questions: [
      { id: 1, type: 'mcq', question: 'Which phrase opens a negotiation diplomatically?', context: '', options: ['I\'d like to explore the possibility of...', 'Give me a better price.', 'I want...', 'You must accept...'], correctAnswer: 'I\'d like to explore the possibility of...', explanation: 'This phrase is open and non-confrontational.', explanationFr: 'Cette phrase est ouverte et non-confrontationnelle.' },
      { id: 2, type: 'fill-blank', question: 'Complete:', context: 'We\'re willing to meet you _____ (HALFWAY) on the price.', correctAnswer: 'halfway', explanation: '"Meet halfway" means to compromise, each side giving something.', explanationFr: '"Meet halfway" signifie faire un compromis, chaque partie cédant quelque chose.' },
      { id: 3, type: 'mcq', question: 'How do you express flexibility professionally?', context: '', options: ['There\'s room for maneuver on certain points.', 'I can change everything.', 'Do whatever you want.', 'Nothing is fixed.'], correctAnswer: 'There\'s room for maneuver on certain points.', explanation: 'This phrase indicates flexibility while maintaining structure.', explanationFr: 'Cette phrase indique de la flexibilité tout en maintenant une structure.' },
      { id: 4, type: 'mcq', question: 'Which phrase rejects an offer politely?', context: '', options: ['I\'m afraid that\'s not something we can agree to.', 'No way!', 'That\'s ridiculous.', 'Absolutely not.'], correctAnswer: 'I\'m afraid that\'s not something we can agree to.', explanation: 'Softening with "I\'m afraid" makes rejection more diplomatic.', explanationFr: 'Adoucir avec "I\'m afraid" rend le refus plus diplomatique.' },
      { id: 5, type: 'fill-blank', question: 'Complete:', context: 'Let\'s look at the _____ (BIG) picture here.', correctAnswer: 'big', explanation: '"The big picture" means the overall situation, not just details.', explanationFr: '"The big picture" signifie la situation globale, pas seulement les détails.' },
      { id: 6, type: 'mcq', question: 'How do you propose a trade-off?', context: '', options: ['If we agree to X, would you consider Y?', 'You give me X and I\'ll think about Y.', 'Just do X.', 'X or nothing.'], correctAnswer: 'If we agree to X, would you consider Y?', explanation: 'This structure proposes mutual concessions professionally.', explanationFr: 'Cette structure propose des concessions mutuelles de manière professionnelle.' },
      { id: 7, type: 'mcq', question: 'Which phrase closes a deal professionally?', context: '', options: ['I think we\'ve reached an agreement in principle.', 'Done!', 'Okay, whatever.', 'Fine, I accept.'], correctAnswer: 'I think we\'ve reached an agreement in principle.', explanation: '"Agreement in principle" indicates general consensus pending final details.', explanationFr: '"Agreement in principle" indique un consensus général en attendant les détails finaux.' },
      { id: 8, type: 'fill-blank', question: 'Complete:', context: 'We need to find a _____ (WIN-WIN) solution for both parties.', correctAnswer: 'win-win', explanation: 'A "win-win" solution benefits all parties involved.', explanationFr: 'Une solution "win-win" bénéficie à toutes les parties impliquées.' }
    ]
  },
  // Additional Reading Comprehension
  {
    id: 'cloe-reading-b1-2',
    title: 'Reading: Hotel Booking Confirmation',
    titleFr: 'Lecture : Confirmation de réservation d\'hôtel',
    category: 'reading',
    difficulty: 'B1',
    description: 'Practice understanding travel booking documents.',
    descriptionFr: 'Pratiquez la compréhension des documents de réservation de voyage.',
    estimatedTime: 10,
    questions: [
      { id: 1, type: 'mcq', question: 'Read the confirmation and answer:', context: 'BOOKING CONFIRMATION\n\nConfirmation Number: HB-2025-78452\nGuest Name: Mr. David Chen\n\nHotel: Grand Palace Hotel\nAddress: 45 Victoria Street, Manchester, M2 4QR\nCheck-in: Friday, April 11, 2025 (from 3:00 PM)\nCheck-out: Monday, April 14, 2025 (by 11:00 AM)\n\nRoom Type: Executive Double Room\nNumber of Nights: 3\nRate: £145 per night\nTotal: £435 (breakfast included)\n\nPayment: Deposit of £145 charged to credit card ending 4521. Remaining £290 due at check-out.\n\nAmenities: Free WiFi, Gym, 24-hour room service, Parking (£15/day extra)\n\nCancellation Policy: Free cancellation until April 8, 2025. After this date, one night\'s charge applies.\n\nFor inquiries: reservations@grandpalace.co.uk or +44 161 555 0190', options: ['3 nights', '2 nights', '4 nights', '5 nights'], correctAnswer: '3 nights', explanation: 'The booking shows "Number of Nights: 3".', explanationFr: 'La réservation indique "Number of Nights: 3".' },
      { id: 2, type: 'mcq', question: 'What time must the guest leave on April 14?', context: '', options: ['11:00 AM', '3:00 PM', '12:00 PM', '2:00 PM'], correctAnswer: '11:00 AM', explanation: 'Check-out is "by 11:00 AM".', explanationFr: 'Le départ est "avant 11h00".' },
      { id: 3, type: 'fill-blank', question: 'Complete:', context: 'The deposit paid was £_____', correctAnswer: '145', explanation: 'The payment section states "Deposit of £145 charged".', explanationFr: 'La section paiement indique "Dépôt de 145 £ débité".' },
      { id: 4, type: 'mcq', question: 'What is NOT included in the room rate?', context: '', options: ['Parking', 'Breakfast', 'WiFi', 'Gym'], correctAnswer: 'Parking', explanation: 'Parking is listed as "£15/day extra".', explanationFr: 'Le parking est indiqué "15 £/jour en supplément".' },
      { id: 5, type: 'mcq', question: 'Until when can the guest cancel for free?', context: '', options: ['April 8, 2025', 'April 11, 2025', 'April 14, 2025', 'No free cancellation'], correctAnswer: 'April 8, 2025', explanation: 'Free cancellation is available "until April 8, 2025".', explanationFr: 'L\'annulation gratuite est possible "jusqu\'au 8 avril 2025".' },
      { id: 6, type: 'mcq', question: 'How much does the guest still owe?', context: '', options: ['£290', '£145', '£435', '£15'], correctAnswer: '£290', explanation: 'The booking states "Remaining £290 due at check-out".', explanationFr: 'La réservation indique "Restant 290 £ dû au départ".' }
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
