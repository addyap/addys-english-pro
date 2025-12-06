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
      { id: 5, words: ["time", "what", "it", "is", "?"], correctOrder: [1, 4, 3, 2, 0], translation: "Quelle heure est-il ?" },
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
      { id: 2, words: ["quickly", "ran", "he", "the", "to", "station"], correctOrder: [2, 1, 0, 4, 5, 3], translation: "Il a couru rapidement à la gare." },
      { id: 3, words: ["carefully", "the", "read", "she", "letter"], correctOrder: [3, 2, 1, 4, 0], translation: "Elle a lu la lettre attentivement." },
      { id: 4, words: ["been", "has", "she", "for", "waiting", "hours", "two"], correctOrder: [2, 1, 0, 4, 3, 6, 5], translation: "Elle attend depuis deux heures." },
      { id: 5, words: ["the", "beautiful", "is", "really", "garden"], correctOrder: [0, 4, 2, 3, 1], translation: "Le jardin est vraiment beau." },
      { id: 6, words: ["every", "goes", "he", "swimming", "Saturday"], correctOrder: [2, 1, 3, 0, 4], translation: "Il va nager tous les samedis." },
      { id: 7, words: ["just", "finished", "I", "have", "homework", "my"], correctOrder: [2, 3, 0, 1, 5, 4], translation: "Je viens de finir mes devoirs." },
      { id: 8, words: ["give", "could", "you", "me", "information", "some", "?"], correctOrder: [1, 2, 0, 3, 5, 4, 6], translation: "Pourriez-vous me donner des informations ?" },
    ]
  }
];
