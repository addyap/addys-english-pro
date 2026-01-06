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
