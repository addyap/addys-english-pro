export interface CrosswordClue {
  id: number;
  direction: 'across' | 'down';
  clue: string;
  answer: string;
  startRow: number;
  startCol: number;
  hint?: string;
  translationFr?: string;
}

export interface CrosswordExercise {
  id: number;
  title: string;
  description: string;
  theme: string;
  difficulty: 'easy' | 'medium' | 'hard';
  gridSize: number;
  clues: CrosswordClue[];
}

export const crosswordExercises: CrosswordExercise[] = [
  {
    id: 1,
    title: "Daily Life Vocabulary",
    description: "Common words used in everyday situations",
    theme: "Daily Life",
    difficulty: 'easy',
    gridSize: 10,
    clues: [
      { id: 1, direction: 'across', clue: "The first meal of the day", answer: "BREAKFAST", startRow: 0, startCol: 0, hint: "Morning meal", translationFr: "Petit-déjeuner" },
      { id: 2, direction: 'down', clue: "A room for cooking", answer: "KITCHEN", startRow: 0, startCol: 0, hint: "Where you prepare food", translationFr: "Cuisine" },
      { id: 3, direction: 'across', clue: "You sleep on this", answer: "BED", startRow: 2, startCol: 3, hint: "Furniture for sleeping", translationFr: "Lit" },
      { id: 4, direction: 'down', clue: "A container for drinking", answer: "CUP", startRow: 2, startCol: 3, hint: "For tea or coffee", translationFr: "Tasse" },
      { id: 5, direction: 'across', clue: "The opposite of night", answer: "DAY", startRow: 4, startCol: 1, hint: "When the sun shines", translationFr: "Jour" },
      { id: 6, direction: 'down', clue: "Water falling from clouds", answer: "RAIN", startRow: 4, startCol: 1, hint: "Wet weather", translationFr: "Pluie" },
      { id: 7, direction: 'across', clue: "A building where you live", answer: "HOUSE", startRow: 6, startCol: 0, hint: "Your home", translationFr: "Maison" },
      { id: 8, direction: 'down', clue: "You use this to see", answer: "EYE", startRow: 6, startCol: 4, hint: "Part of your face", translationFr: "Œil" },
    ]
  },
  {
    id: 2,
    title: "Travel & Transportation",
    description: "Words related to traveling and getting around",
    theme: "Travel",
    difficulty: 'easy',
    gridSize: 10,
    clues: [
      { id: 1, direction: 'across', clue: "A large vehicle that flies", answer: "AIRPLANE", startRow: 0, startCol: 0, hint: "In the sky", translationFr: "Avion" },
      { id: 2, direction: 'down', clue: "Where planes land", answer: "AIRPORT", startRow: 0, startCol: 0, hint: "Travel hub", translationFr: "Aéroport" },
      { id: 3, direction: 'across', clue: "A vehicle on rails", answer: "TRAIN", startRow: 2, startCol: 2, hint: "Choo choo!", translationFr: "Train" },
      { id: 4, direction: 'down', clue: "You need this to travel abroad", answer: "PASSPORT", startRow: 2, startCol: 2, hint: "Travel document", translationFr: "Passeport" },
      { id: 5, direction: 'across', clue: "A place to stay when traveling", answer: "HOTEL", startRow: 4, startCol: 4, hint: "Accommodation", translationFr: "Hôtel" },
      { id: 6, direction: 'down', clue: "Bags for traveling", answer: "LUGGAGE", startRow: 4, startCol: 5, hint: "Suitcases", translationFr: "Bagages" },
      { id: 7, direction: 'across', clue: "Document for a flight", answer: "TICKET", startRow: 6, startCol: 0, hint: "Boarding pass", translationFr: "Billet" },
      { id: 8, direction: 'down', clue: "A two-wheeled vehicle", answer: "BIKE", startRow: 6, startCol: 0, hint: "Pedal power", translationFr: "Vélo" },
    ]
  },
  {
    id: 3,
    title: "Food & Cooking",
    description: "Vocabulary about food preparation and ingredients",
    theme: "Food",
    difficulty: 'medium',
    gridSize: 12,
    clues: [
      { id: 1, direction: 'across', clue: "A red fruit used in salads and sauce", answer: "TOMATO", startRow: 0, startCol: 0, hint: "Ketchup ingredient", translationFr: "Tomate" },
      { id: 2, direction: 'down', clue: "A spicy root vegetable", answer: "ONION", startRow: 0, startCol: 0, hint: "Makes you cry", translationFr: "Oignon" },
      { id: 3, direction: 'across', clue: "Made from flour and water, often Italian", answer: "PASTA", startRow: 2, startCol: 3, hint: "Spaghetti is one type", translationFr: "Pâtes" },
      { id: 4, direction: 'down', clue: "A hot beverage from beans", answer: "COFFEE", startRow: 2, startCol: 3, hint: "Morning drink", translationFr: "Café" },
      { id: 5, direction: 'across', clue: "A sweet dessert with frosting", answer: "CAKE", startRow: 4, startCol: 5, hint: "Birthday treat", translationFr: "Gâteau" },
      { id: 6, direction: 'down', clue: "Cooking in hot oil", answer: "FRY", startRow: 4, startCol: 7, hint: "Crispy method", translationFr: "Frire" },
      { id: 7, direction: 'across', clue: "A dairy product, often yellow", answer: "CHEESE", startRow: 6, startCol: 1, hint: "Goes on pizza", translationFr: "Fromage" },
      { id: 8, direction: 'down', clue: "A green leafy vegetable", answer: "LETTUCE", startRow: 6, startCol: 4, hint: "Salad base", translationFr: "Laitue" },
    ]
  },
  {
    id: 4,
    title: "Business & Work",
    description: "Professional vocabulary for the workplace",
    theme: "Business",
    difficulty: 'medium',
    gridSize: 12,
    clues: [
      { id: 1, direction: 'across', clue: "A formal meeting to discuss work", answer: "MEETING", startRow: 0, startCol: 0, hint: "Conference room event", translationFr: "Réunion" },
      { id: 2, direction: 'down', clue: "The person in charge", answer: "MANAGER", startRow: 0, startCol: 0, hint: "Your supervisor", translationFr: "Manager" },
      { id: 3, direction: 'across', clue: "Money paid for work", answer: "SALARY", startRow: 2, startCol: 3, hint: "Monthly payment", translationFr: "Salaire" },
      { id: 4, direction: 'down', clue: "A written message at work", answer: "EMAIL", startRow: 2, startCol: 3, hint: "@ symbol", translationFr: "Email" },
      { id: 5, direction: 'across', clue: "A place where you work", answer: "OFFICE", startRow: 4, startCol: 2, hint: "Desk location", translationFr: "Bureau" },
      { id: 6, direction: 'down', clue: "A group working together", answer: "TEAM", startRow: 4, startCol: 5, hint: "Colleagues", translationFr: "Équipe" },
      { id: 7, direction: 'across', clue: "A document showing work history", answer: "RESUME", startRow: 6, startCol: 0, hint: "CV", translationFr: "CV" },
      { id: 8, direction: 'down', clue: "Time away from work", answer: "VACATION", startRow: 6, startCol: 0, hint: "Holiday", translationFr: "Vacances" },
    ]
  },
  {
    id: 5,
    title: "Nature & Environment",
    description: "Words about the natural world",
    theme: "Nature",
    difficulty: 'hard',
    gridSize: 14,
    clues: [
      { id: 1, direction: 'across', clue: "A large body of salt water", answer: "OCEAN", startRow: 0, startCol: 0, hint: "Pacific, Atlantic...", translationFr: "Océan" },
      { id: 2, direction: 'down', clue: "A very tall plant with a trunk", answer: "TREE", startRow: 0, startCol: 0, hint: "Has leaves", translationFr: "Arbre" },
      { id: 3, direction: 'across', clue: "A natural stream of water", answer: "RIVER", startRow: 2, startCol: 2, hint: "Flows to the sea", translationFr: "Rivière" },
      { id: 4, direction: 'down', clue: "A large area of trees", answer: "FOREST", startRow: 2, startCol: 2, hint: "Woods", translationFr: "Forêt" },
      { id: 5, direction: 'across', clue: "The star at the center of our solar system", answer: "SUN", startRow: 4, startCol: 5, hint: "Gives us light", translationFr: "Soleil" },
      { id: 6, direction: 'down', clue: "Earth's natural satellite", answer: "MOON", startRow: 4, startCol: 5, hint: "Visible at night", translationFr: "Lune" },
      { id: 7, direction: 'across', clue: "A very high landform", answer: "MOUNTAIN", startRow: 6, startCol: 0, hint: "Climbers go here", translationFr: "Montagne" },
      { id: 8, direction: 'down', clue: "The air around us", answer: "ATMOSPHERE", startRow: 6, startCol: 4, hint: "Protects Earth", translationFr: "Atmosphère" },
      { id: 9, direction: 'across', clue: "Animals in their natural habitat", answer: "WILDLIFE", startRow: 8, startCol: 2, hint: "Safari viewing", translationFr: "Faune sauvage" },
      { id: 10, direction: 'down', clue: "The changing of seasons phenomenon", answer: "CLIMATE", startRow: 8, startCol: 6, hint: "Weather patterns", translationFr: "Climat" },
    ]
  },
  {
    id: 6,
    title: "Health & Body",
    description: "Medical and body-related vocabulary",
    theme: "Health",
    difficulty: 'hard',
    gridSize: 14,
    clues: [
      { id: 1, direction: 'across', clue: "A medical professional", answer: "DOCTOR", startRow: 0, startCol: 0, hint: "Treats patients", translationFr: "Médecin" },
      { id: 2, direction: 'down', clue: "Where sick people go", answer: "HOSPITAL", startRow: 0, startCol: 0, hint: "Medical facility", translationFr: "Hôpital" },
      { id: 3, direction: 'across', clue: "Medicine in tablet form", answer: "PILL", startRow: 2, startCol: 3, hint: "Swallow with water", translationFr: "Pilule" },
      { id: 4, direction: 'down', clue: "Physical activity for health", answer: "EXERCISE", startRow: 2, startCol: 3, hint: "Gym activity", translationFr: "Exercice" },
      { id: 5, direction: 'across', clue: "The organ that pumps blood", answer: "HEART", startRow: 4, startCol: 5, hint: "Beats in your chest", translationFr: "Cœur" },
      { id: 6, direction: 'down', clue: "The framework of bones", answer: "SKELETON", startRow: 4, startCol: 6, hint: "206 bones", translationFr: "Squelette" },
      { id: 7, direction: 'across', clue: "A person who helps doctors", answer: "NURSE", startRow: 6, startCol: 0, hint: "Hospital staff", translationFr: "Infirmier(ère)" },
      { id: 8, direction: 'down', clue: "The organ used for breathing", answer: "LUNG", startRow: 6, startCol: 2, hint: "In your chest", translationFr: "Poumon" },
      { id: 9, direction: 'across', clue: "Protection against disease", answer: "VACCINE", startRow: 8, startCol: 3, hint: "Injection", translationFr: "Vaccin" },
      { id: 10, direction: 'down', clue: "Feeling unwell", answer: "SICK", startRow: 8, startCol: 7, hint: "Not healthy", translationFr: "Malade" },
    ]
  }
];

export const getCrosswordExerciseById = (id: number): CrosswordExercise | undefined => {
  return crosswordExercises.find(ex => ex.id === id);
};
