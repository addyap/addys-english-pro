export interface DragDropExercise {
  id: number;
  title: string;
  description: string;
  sentences: {
    id: number;
    words: string[];
    correctOrder: number[];
    translation: string;
  }[];
}

export const dragDropExercises: DragDropExercise[] = [
  {
    id: 1,
    title: "Ordre des mots (1) : Questions",
    description: "Remettez les mots dans le bon ordre pour former des questions correctes en anglais.",
    sentences: [
      { id: 1, words: ["you", "do", "where", "live", "?"], correctOrder: [2, 1, 0, 3, 4], translation: "Où habitez-vous ?" },
      { id: 2, words: ["is", "what", "name", "your", "?"], correctOrder: [1, 0, 3, 2, 4], translation: "Quel est votre nom ?" },
      { id: 3, words: ["she", "does", "work", "where", "?"], correctOrder: [3, 1, 0, 2, 4], translation: "Où travaille-t-elle ?" },
      { id: 4, words: ["you", "can", "me", "help", "?"], correctOrder: [1, 0, 3, 2, 4], translation: "Pouvez-vous m'aider ?" },
      { id: 5, words: ["time", "what", "it", "is", "?"], correctOrder: [1, 0, 3, 2, 4], translation: "Quelle heure est-il ?" },
      { id: 6, words: ["many", "how", "people", "are", "there", "?"], correctOrder: [1, 0, 2, 3, 4, 5], translation: "Combien de personnes y a-t-il ?" },
      { id: 7, words: ["you", "have", "been", "Paris", "to", "?"], correctOrder: [1, 0, 2, 4, 3, 5], translation: "Êtes-vous allé à Paris ?" },
      { id: 8, words: ["dinner", "would", "like", "you", "for", "what", "?"], correctOrder: [5, 1, 3, 2, 4, 0, 6], translation: "Que voudriez-vous pour le dîner ?" },
    ]
  },
  {
    id: 2,
    title: "Ordre des mots (2) : Adverbes de fréquence",
    description: "Placez les mots dans le bon ordre. Attention à la position des adverbes de fréquence !",
    sentences: [
      { id: 1, words: ["always", "I", "breakfast", "eat"], correctOrder: [1, 0, 3, 2], translation: "Je prends toujours le petit-déjeuner." },
      { id: 2, words: ["late", "never", "is", "she"], correctOrder: [3, 2, 1, 0], translation: "Elle n'est jamais en retard." },
      { id: 3, words: ["usually", "we", "at", "home", "dinner", "have"], correctOrder: [1, 0, 5, 4, 2, 3], translation: "Nous dînons habituellement à la maison." },
      { id: 4, words: ["often", "they", "cinema", "the", "go", "to"], correctOrder: [1, 0, 4, 5, 3, 2], translation: "Ils vont souvent au cinéma." },
      { id: 5, words: ["sometimes", "he", "guitar", "the", "plays"], correctOrder: [1, 0, 4, 3, 2], translation: "Il joue parfois de la guitare." },
      { id: 6, words: ["rarely", "it", "here", "snows"], correctOrder: [1, 0, 3, 2], translation: "Il neige rarement ici." },
      { id: 7, words: ["happy", "am", "always", "I"], correctOrder: [3, 1, 2, 0], translation: "Je suis toujours heureux." },
      { id: 8, words: ["hardly", "ever", "he", "complains"], correctOrder: [2, 0, 1, 3], translation: "Il ne se plaint presque jamais." },
    ]
  },
  {
    id: 3,
    title: "Ordre des mots (3) : Phrases complexes",
    description: "Reconstruisez ces phrases plus longues en plaçant les mots dans le bon ordre.",
    sentences: [
      { id: 1, words: ["yesterday", "I", "interesting", "an", "met", "person"], correctOrder: [1, 4, 3, 2, 5, 0], translation: "J'ai rencontré une personne intéressante hier." },
      { id: 2, words: ["quickly", "ran", "he", "the", "to", "station"], correctOrder: [2, 1, 0, 4, 3, 5], translation: "Il a couru rapidement à la gare." },
      { id: 3, words: ["carefully", "the", "read", "she", "letter"], correctOrder: [3, 2, 1, 4, 0], translation: "Elle a lu la lettre attentivement." },
      { id: 4, words: ["been", "has", "she", "for", "waiting", "hours", "two"], correctOrder: [2, 1, 0, 4, 3, 6, 5], translation: "Elle attend depuis deux heures." },
      { id: 5, words: ["the", "beautiful", "is", "really", "garden"], correctOrder: [0, 4, 2, 3, 1], translation: "Le jardin est vraiment beau." },
      { id: 6, words: ["every", "goes", "he", "swimming", "Saturday"], correctOrder: [2, 1, 3, 0, 4], translation: "Il va nager tous les samedis." },
      { id: 7, words: ["just", "finished", "I", "have", "homework", "my"], correctOrder: [2, 3, 0, 1, 5, 4], translation: "Je viens de finir mes devoirs." },
      { id: 8, words: ["give", "could", "you", "me", "information", "some", "?"], correctOrder: [1, 2, 0, 3, 5, 4, 6], translation: "Pourriez-vous me donner des informations ?" },
    ]
  },
  {
    id: 4,
    title: "CLOE : Emails professionnels",
    description: "Reconstruisez ces phrases typiques d'emails professionnels en contexte d'entreprise.",
    sentences: [
      { id: 1, words: ["forward", "I", "to", "look", "hearing", "from", "you"], correctOrder: [1, 3, 0, 2, 4, 5, 6], translation: "J'attends avec impatience de vos nouvelles." },
      { id: 2, words: ["attached", "please", "the", "find", "report", "quarterly"], correctOrder: [1, 3, 0, 2, 5, 4], translation: "Veuillez trouver ci-joint le rapport trimestriel." },
      { id: 3, words: ["hesitate", "do", "not", "to", "contact", "me"], correctOrder: [1, 2, 0, 3, 4, 5], translation: "N'hésitez pas à me contacter." },
      { id: 4, words: ["regarding", "am", "I", "writing", "your", "inquiry"], correctOrder: [2, 1, 3, 0, 4, 5], translation: "Je vous écris concernant votre demande." },
      { id: 5, words: ["earliest", "at", "your", "convenience", "reply", "please"], correctOrder: [5, 4, 1, 2, 0, 3], translation: "Veuillez répondre à votre plus proche convenance." },
      { id: 6, words: ["apologize", "I", "for", "the", "delay", "in", "responding"], correctOrder: [1, 0, 2, 3, 4, 5, 6], translation: "Je m'excuse pour le retard dans ma réponse." },
      { id: 7, words: ["would", "appreciate", "I", "your", "feedback", "on", "this"], correctOrder: [2, 0, 1, 3, 4, 5, 6], translation: "J'apprécierais votre retour à ce sujet." },
      { id: 8, words: ["confirm", "could", "you", "the", "meeting", "date", "please", "?"], correctOrder: [1, 2, 0, 3, 4, 5, 6, 7], translation: "Pourriez-vous confirmer la date de la réunion s'il vous plaît ?" },
    ]
  },
  {
    id: 5,
    title: "CLOE : Réunions d'affaires",
    description: "Remettez en ordre ces phrases utilisées lors de réunions professionnelles.",
    sentences: [
      { id: 1, words: ["agenda", "the", "for", "today", "is", "as", "follows"], correctOrder: [1, 0, 2, 3, 4, 5, 6], translation: "L'ordre du jour pour aujourd'hui est le suivant." },
      { id: 2, words: ["move", "shall", "we", "on", "to", "the", "next", "point", "?"], correctOrder: [1, 2, 0, 3, 4, 5, 6, 7, 8], translation: "Passons-nous au point suivant ?" },
      { id: 3, words: ["like", "would", "I", "to", "raise", "a", "concern"], correctOrder: [2, 1, 0, 3, 4, 5, 6], translation: "Je voudrais soulever une préoccupation." },
      { id: 4, words: ["deadline", "the", "has", "been", "extended", "to", "Friday"], correctOrder: [1, 0, 2, 3, 4, 5, 6], translation: "La date limite a été prolongée jusqu'à vendredi." },
      { id: 5, words: ["summarize", "let", "me", "the", "main", "points"], correctOrder: [1, 2, 0, 3, 4, 5], translation: "Permettez-moi de résumer les points principaux." },
      { id: 6, words: ["minutes", "the", "will", "be", "circulated", "tomorrow"], correctOrder: [1, 0, 2, 3, 4, 5], translation: "Le compte-rendu sera distribué demain." },
      { id: 7, words: ["any", "are", "there", "other", "business", "matters", "?"], correctOrder: [1, 2, 0, 3, 4, 5, 6], translation: "Y a-t-il d'autres points à aborder ?" },
      { id: 8, words: ["budget", "the", "approved", "has", "been", "by", "management"], correctOrder: [1, 0, 3, 4, 2, 5, 6], translation: "Le budget a été approuvé par la direction." },
    ]
  },
  {
    id: 6,
    title: "CLOE : Négociations commerciales",
    description: "Reconstruisez ces phrases clés utilisées dans les négociations d'affaires.",
    sentences: [
      { id: 1, words: ["offer", "we", "can", "a", "discount", "10%", "of"], correctOrder: [1, 2, 0, 3, 4, 6, 5], translation: "Nous pouvons offrir une remise de 10%." },
      { id: 2, words: ["terms", "the", "are", "negotiable", "payment"], correctOrder: [1, 4, 0, 2, 3], translation: "Les conditions de paiement sont négociables." },
      { id: 3, words: ["proposal", "consider", "we", "will", "your", "carefully"], correctOrder: [2, 3, 1, 4, 0, 5], translation: "Nous examinerons attentivement votre proposition." },
      { id: 4, words: ["deal", "this", "is", "acceptable", "to", "both", "parties"], correctOrder: [1, 0, 2, 3, 4, 5, 6], translation: "Cet accord est acceptable pour les deux parties." },
      { id: 5, words: ["contract", "the", "includes", "a", "warranty", "two-year"], correctOrder: [1, 0, 2, 3, 5, 4], translation: "Le contrat inclut une garantie de deux ans." },
      { id: 6, words: ["price", "what", "is", "your", "best", "?"], correctOrder: [1, 2, 3, 4, 0, 5], translation: "Quel est votre meilleur prix ?" },
      { id: 7, words: ["delivery", "we", "guarantee", "within", "five", "days", "working"], correctOrder: [1, 2, 0, 3, 4, 6, 5], translation: "Nous garantissons la livraison sous cinq jours ouvrables." },
      { id: 8, words: ["partnership", "a", "long-term", "interested", "in", "we", "are"], correctOrder: [5, 6, 3, 4, 1, 2, 0], translation: "Nous sommes intéressés par un partenariat à long terme." },
    ]
  },
  {
    id: 7,
    title: "CLOE : Rapports et présentations",
    description: "Remettez en ordre ces phrases utilisées dans les rapports et présentations professionnels.",
    sentences: [
      { id: 1, words: ["results", "the", "show", "significant", "a", "improvement"], correctOrder: [1, 0, 2, 4, 3, 5], translation: "Les résultats montrent une amélioration significative." },
      { id: 2, words: ["chart", "this", "illustrates", "the", "sales", "growth"], correctOrder: [1, 0, 2, 3, 4, 5], translation: "Ce graphique illustre la croissance des ventes." },
      { id: 3, words: ["now", "turn", "let", "us", "to", "the", "next", "slide"], correctOrder: [2, 3, 1, 0, 4, 5, 6, 7], translation: "Passons maintenant à la diapositive suivante." },
      { id: 4, words: ["conclusion", "in", ",", "targets", "we", "met", "all", "our"], correctOrder: [1, 0, 2, 4, 5, 6, 7, 3], translation: "En conclusion, nous avons atteint tous nos objectifs." },
      { id: 5, words: ["data", "the", "suggests", "positive", "a", "trend"], correctOrder: [1, 0, 2, 4, 3, 5], translation: "Les données suggèrent une tendance positive." },
      { id: 6, words: ["questions", "any", "are", "there", "so", "far", "?"], correctOrder: [3, 2, 1, 0, 4, 5, 6], translation: "Y a-t-il des questions jusqu'ici ?" },
      { id: 7, words: ["strategy", "recommend", "we", "a", "new", "marketing"], correctOrder: [2, 1, 3, 4, 5, 0], translation: "Nous recommandons une nouvelle stratégie marketing." },
      { id: 8, words: ["figures", "the", "exceeded", "our", "expectations", "quarterly"], correctOrder: [1, 5, 0, 2, 3, 4], translation: "Les chiffres trimestriels ont dépassé nos attentes." },
    ]
  },
  {
    id: 8,
    title: "CLOE : Service client",
    description: "Reconstruisez ces phrases typiques du service client en entreprise.",
    sentences: [
      { id: 1, words: ["help", "how", "may", "I", "you", "today", "?"], correctOrder: [1, 2, 3, 0, 4, 5, 6], translation: "Comment puis-je vous aider aujourd'hui ?" },
      { id: 2, words: ["inconvenience", "apologize", "I", "for", "the", "caused"], correctOrder: [2, 1, 3, 4, 0, 5], translation: "Je m'excuse pour la gêne occasionnée." },
      { id: 3, words: ["issue", "the", "resolved", "will", "be", "within", "24", "hours"], correctOrder: [1, 0, 3, 4, 2, 5, 6, 7], translation: "Le problème sera résolu sous 24 heures." },
      { id: 4, words: ["refund", "a", "full", "will", "you", "receive"], correctOrder: [4, 3, 5, 1, 2, 0], translation: "Vous recevrez un remboursement intégral." },
      { id: 5, words: ["concern", "your", "seriously", "we", "take", "very"], correctOrder: [3, 4, 1, 0, 5, 2], translation: "Nous prenons votre préoccupation très au sérieux." },
      { id: 6, words: ["assist", "is", "there", "anything", "else", "I", "can", "with", "?"], correctOrder: [2, 1, 3, 4, 5, 6, 0, 7, 8], translation: "Y a-t-il autre chose avec laquelle je peux vous aider ?" },
      { id: 7, words: ["supervisor", "a", "speak", "to", "would", "you", "like", "?"], correctOrder: [4, 5, 6, 2, 3, 1, 0, 7], translation: "Souhaitez-vous parler à un superviseur ?" },
      { id: 8, words: ["feedback", "thank", "you", "for", "your", "valuable"], correctOrder: [1, 2, 3, 4, 5, 0], translation: "Merci pour vos précieux commentaires." },
    ]
  },
  {
    id: 9,
    title: "CLOE : Ressources humaines",
    description: "Remettez en ordre ces phrases utilisées dans le contexte RH.",
    sentences: [
      { id: 1, words: ["interview", "your", "scheduled", "is", "for", "Monday"], correctOrder: [1, 0, 3, 2, 4, 5], translation: "Votre entretien est prévu pour lundi." },
      { id: 2, words: ["candidate", "the", "ideal", "have", "experience", "should", "relevant"], correctOrder: [1, 2, 0, 5, 3, 6, 4], translation: "Le candidat idéal devrait avoir une expérience pertinente." },
      { id: 3, words: ["benefits", "the", "include", "insurance", "health", "and", "pension"], correctOrder: [1, 0, 2, 4, 3, 5, 6], translation: "Les avantages incluent l'assurance maladie et la retraite." },
      { id: 4, words: ["probation", "the", "period", "lasts", "three", "months"], correctOrder: [1, 0, 2, 3, 4, 5], translation: "La période d'essai dure trois mois." },
      { id: 5, words: ["CV", "please", "your", "updated", "submit", "an"], correctOrder: [1, 4, 5, 3, 2, 0], translation: "Veuillez soumettre un CV actualisé." },
      { id: 6, words: ["position", "the", "requires", "fluent", "English", "and", "French"], correctOrder: [1, 0, 2, 3, 4, 5, 6], translation: "Le poste exige la maîtrise de l'anglais et du français." },
      { id: 7, words: ["training", "the", "program", "begins", "next", "week"], correctOrder: [1, 0, 2, 3, 4, 5], translation: "Le programme de formation commence la semaine prochaine." },
      { id: 8, words: ["performance", "your", "review", "will", "take", "place", "quarterly"], correctOrder: [1, 0, 2, 3, 4, 5, 6], translation: "Votre évaluation de performance aura lieu chaque trimestre." },
    ]
  },
  {
    id: 10,
    title: "CLOE : Expressions formelles",
    description: "Reconstruisez ces expressions formelles courantes en milieu professionnel.",
    sentences: [
      { id: 1, words: ["earliest", "at", "your", "convenience", "get", "please", "back", "to", "me"], correctOrder: [5, 4, 6, 7, 8, 1, 2, 0, 3], translation: "Veuillez me recontacter dès que possible." },
      { id: 2, words: ["matter", "this", "urgently", "requires", "your", "attention"], correctOrder: [1, 0, 3, 4, 5, 2], translation: "Cette affaire requiert urgemment votre attention." },
      { id: 3, words: ["grateful", "would", "I", "be", "if", "you", "could", "assist"], correctOrder: [2, 1, 3, 0, 4, 5, 6, 7], translation: "Je vous serais reconnaissant si vous pouviez aider." },
      { id: 4, words: ["further", "please", "do", "not", "hesitate", "to", "contact", "us", "for", "information"], correctOrder: [1, 2, 3, 4, 5, 6, 7, 8, 0, 9], translation: "N'hésitez pas à nous contacter pour plus d'informations." },
      { id: 5, words: ["inconvenience", "we", "apologize", "any", "for", "caused"], correctOrder: [1, 2, 4, 3, 0, 5], translation: "Nous nous excusons pour tout inconvénient causé." },
      { id: 6, words: ["opportunity", "thank", "you", "for", "the", "to", "present", "our", "proposal"], correctOrder: [1, 2, 3, 4, 0, 5, 6, 7, 8], translation: "Merci de nous donner l'opportunité de présenter notre proposition." },
      { id: 7, words: ["accordance", "in", "with", "your", "request", ",", "enclosed", "please", "find"], correctOrder: [1, 0, 2, 3, 4, 5, 7, 8, 6], translation: "Conformément à votre demande, veuillez trouver ci-joint." },
      { id: 8, words: ["consideration", "look", "we", "forward", "to", "your", "favorable"], correctOrder: [2, 1, 3, 4, 5, 6, 0], translation: "Nous attendons avec impatience votre considération favorable." },
    ]
  }
];
