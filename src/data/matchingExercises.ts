export interface MatchingPair {
  id: number;
  word: string;
  definition: string;
  translationFr?: string;
}

export interface MatchingExercise {
  id: number;
  title: string;
  description: string;
  theme: string;
  difficulty: 'easy' | 'medium' | 'hard';
  pairs: MatchingPair[];
}

export const matchingExercises: MatchingExercise[] = [
  {
    id: 1,
    title: "Common Adjectives",
    description: "Match adjectives to their definitions",
    theme: "Adjectives",
    difficulty: 'easy',
    pairs: [
      { id: 1, word: "Happy", definition: "Feeling or showing pleasure and contentment", translationFr: "Heureux" },
      { id: 2, word: "Angry", definition: "Feeling strong displeasure or hostility", translationFr: "En colère" },
      { id: 3, word: "Tired", definition: "In need of sleep or rest", translationFr: "Fatigué" },
      { id: 4, word: "Hungry", definition: "Feeling a need to eat", translationFr: "Affamé" },
      { id: 5, word: "Scared", definition: "Feeling fear or fright", translationFr: "Effrayé" },
      { id: 6, word: "Excited", definition: "Very enthusiastic and eager", translationFr: "Excité" },
      { id: 7, word: "Bored", definition: "Feeling weary from lack of interest", translationFr: "Ennuyé" },
      { id: 8, word: "Surprised", definition: "Feeling amazement at something unexpected", translationFr: "Surpris" },
    ]
  },
  {
    id: 2,
    title: "Verb & Noun Pairs",
    description: "Match verbs to their related nouns",
    theme: "Word Forms",
    difficulty: 'easy',
    pairs: [
      { id: 1, word: "Decide", definition: "Decision", translationFr: "Décider → Décision" },
      { id: 2, word: "Explain", definition: "Explanation", translationFr: "Expliquer → Explication" },
      { id: 3, word: "Create", definition: "Creation", translationFr: "Créer → Création" },
      { id: 4, word: "Arrive", definition: "Arrival", translationFr: "Arriver → Arrivée" },
      { id: 5, word: "Succeed", definition: "Success", translationFr: "Réussir → Succès" },
      { id: 6, word: "Fail", definition: "Failure", translationFr: "Échouer → Échec" },
      { id: 7, word: "Choose", definition: "Choice", translationFr: "Choisir → Choix" },
      { id: 8, word: "Grow", definition: "Growth", translationFr: "Grandir → Croissance" },
    ]
  },
  {
    id: 3,
    title: "Synonyms - Common Words",
    description: "Match words with similar meanings",
    theme: "Synonyms",
    difficulty: 'medium',
    pairs: [
      { id: 1, word: "Big", definition: "Large", translationFr: "Grand" },
      { id: 2, word: "Small", definition: "Tiny", translationFr: "Petit" },
      { id: 3, word: "Fast", definition: "Quick", translationFr: "Rapide" },
      { id: 4, word: "Smart", definition: "Intelligent", translationFr: "Intelligent" },
      { id: 5, word: "Beautiful", definition: "Gorgeous", translationFr: "Beau/Belle" },
      { id: 6, word: "Angry", definition: "Furious", translationFr: "En colère" },
      { id: 7, word: "Rich", definition: "Wealthy", translationFr: "Riche" },
      { id: 8, word: "Old", definition: "Ancient", translationFr: "Vieux/Ancien" },
      { id: 9, word: "Start", definition: "Begin", translationFr: "Commencer" },
      { id: 10, word: "End", definition: "Finish", translationFr: "Finir" },
    ]
  },
  {
    id: 4,
    title: "Antonyms - Opposites",
    description: "Match words with their opposites",
    theme: "Antonyms",
    difficulty: 'medium',
    pairs: [
      { id: 1, word: "Hot", definition: "Cold", translationFr: "Chaud ↔ Froid" },
      { id: 2, word: "Light", definition: "Dark", translationFr: "Clair ↔ Sombre" },
      { id: 3, word: "Full", definition: "Empty", translationFr: "Plein ↔ Vide" },
      { id: 4, word: "Open", definition: "Closed", translationFr: "Ouvert ↔ Fermé" },
      { id: 5, word: "Easy", definition: "Difficult", translationFr: "Facile ↔ Difficile" },
      { id: 6, word: "Young", definition: "Old", translationFr: "Jeune ↔ Vieux" },
      { id: 7, word: "Loud", definition: "Quiet", translationFr: "Bruyant ↔ Silencieux" },
      { id: 8, word: "High", definition: "Low", translationFr: "Haut ↔ Bas" },
      { id: 9, word: "Strong", definition: "Weak", translationFr: "Fort ↔ Faible" },
      { id: 10, word: "Fast", definition: "Slow", translationFr: "Rapide ↔ Lent" },
    ]
  },
  {
    id: 5,
    title: "Business Vocabulary",
    description: "Match business terms to their definitions",
    theme: "Business",
    difficulty: 'hard',
    pairs: [
      { id: 1, word: "Revenue", definition: "Income generated from business activities", translationFr: "Chiffre d'affaires" },
      { id: 2, word: "Profit", definition: "Financial gain after expenses", translationFr: "Bénéfice" },
      { id: 3, word: "Budget", definition: "Estimated income and expenses plan", translationFr: "Budget" },
      { id: 4, word: "Invoice", definition: "Document requesting payment for goods/services", translationFr: "Facture" },
      { id: 5, word: "Deadline", definition: "Final date for completing a task", translationFr: "Date limite" },
      { id: 6, word: "Contract", definition: "Legal binding agreement between parties", translationFr: "Contrat" },
      { id: 7, word: "Stakeholder", definition: "Person with interest in a business", translationFr: "Partie prenante" },
      { id: 8, word: "Asset", definition: "Valuable item owned by a company", translationFr: "Actif" },
      { id: 9, word: "Liability", definition: "Company's debts or obligations", translationFr: "Passif" },
      { id: 10, word: "ROI", definition: "Return on Investment - profit ratio", translationFr: "Retour sur investissement" },
    ]
  },
  {
    id: 6,
    title: "Academic Vocabulary",
    description: "Match academic terms with their meanings",
    theme: "Academic",
    difficulty: 'hard',
    pairs: [
      { id: 1, word: "Hypothesis", definition: "A proposed explanation for a phenomenon", translationFr: "Hypothèse" },
      { id: 2, word: "Thesis", definition: "A statement to be proved or defended", translationFr: "Thèse" },
      { id: 3, word: "Analysis", definition: "Detailed examination of elements", translationFr: "Analyse" },
      { id: 4, word: "Synthesis", definition: "Combining ideas into a coherent whole", translationFr: "Synthèse" },
      { id: 5, word: "Criteria", definition: "Standards for judging or deciding", translationFr: "Critères" },
      { id: 6, word: "Evidence", definition: "Facts supporting a conclusion", translationFr: "Preuves" },
      { id: 7, word: "Methodology", definition: "System of methods used in research", translationFr: "Méthodologie" },
      { id: 8, word: "Paradigm", definition: "A typical example or pattern", translationFr: "Paradigme" },
      { id: 9, word: "Abstract", definition: "Summary of a research paper", translationFr: "Résumé" },
      { id: 10, word: "Citation", definition: "Reference to a source", translationFr: "Citation" },
    ]
  }
];

export const getMatchingExerciseById = (id: number): MatchingExercise | undefined => {
  return matchingExercises.find(ex => ex.id === id);
};
