export interface DictationExercise {
  id: number;
  title: string;
  description: string;
  level: 'easy' | 'medium' | 'hard';
  sentences: {
    id: number;
    text: string;
    audioText: string; // Text to be spoken (same as text, but could differ for variations)
    translation: string;
    hints?: string[];
  }[];
}

export const dictationExercises: DictationExercise[] = [
  {
    id: 1,
    title: "Dictée (1) : Phrases simples du quotidien",
    description: "Écoutez et tapez des phrases simples utilisées dans la vie quotidienne.",
    level: 'easy',
    sentences: [
      { id: 1, text: "I would like a cup of coffee, please.", audioText: "I would like a cup of coffee, please.", translation: "Je voudrais une tasse de café, s'il vous plaît.", hints: ["cup", "coffee"] },
      { id: 2, text: "The weather is beautiful today.", audioText: "The weather is beautiful today.", translation: "Le temps est magnifique aujourd'hui.", hints: ["weather", "beautiful"] },
      { id: 3, text: "Can you help me find the station?", audioText: "Can you help me find the station?", translation: "Pouvez-vous m'aider à trouver la gare ?", hints: ["help", "station"] },
      { id: 4, text: "I have been living here for three years.", audioText: "I have been living here for three years.", translation: "J'habite ici depuis trois ans.", hints: ["living", "years"] },
      { id: 5, text: "She always takes the bus to work.", audioText: "She always takes the bus to work.", translation: "Elle prend toujours le bus pour aller au travail.", hints: ["always", "bus"] },
      { id: 6, text: "We need to buy some milk and bread.", audioText: "We need to buy some milk and bread.", translation: "Nous devons acheter du lait et du pain.", hints: ["buy", "milk"] },
      { id: 7, text: "My brother works in a hospital.", audioText: "My brother works in a hospital.", translation: "Mon frère travaille dans un hôpital.", hints: ["brother", "hospital"] },
      { id: 8, text: "The restaurant closes at ten o'clock.", audioText: "The restaurant closes at ten o'clock.", translation: "Le restaurant ferme à dix heures.", hints: ["closes", "ten"] }
    ]
  },
  {
    id: 2,
    title: "Dictée (2) : Au travail",
    description: "Phrases courantes dans un contexte professionnel.",
    level: 'easy',
    sentences: [
      { id: 1, text: "The meeting will start at nine o'clock.", audioText: "The meeting will start at nine o'clock.", translation: "La réunion commencera à neuf heures.", hints: ["meeting", "nine"] },
      { id: 2, text: "Please send me the report by Friday.", audioText: "Please send me the report by Friday.", translation: "Veuillez m'envoyer le rapport avant vendredi.", hints: ["send", "report"] },
      { id: 3, text: "I need to finish this project today.", audioText: "I need to finish this project today.", translation: "Je dois terminer ce projet aujourd'hui.", hints: ["finish", "project"] },
      { id: 4, text: "Could you check my email, please?", audioText: "Could you check my email, please?", translation: "Pourriez-vous vérifier mon email, s'il vous plaît ?", hints: ["check", "email"] },
      { id: 5, text: "The deadline has been extended.", audioText: "The deadline has been extended.", translation: "La date limite a été prolongée.", hints: ["deadline", "extended"] },
      { id: 6, text: "We should discuss this with the team.", audioText: "We should discuss this with the team.", translation: "Nous devrions en discuter avec l'équipe.", hints: ["discuss", "team"] },
      { id: 7, text: "My colleague is on holiday this week.", audioText: "My colleague is on holiday this week.", translation: "Mon collègue est en vacances cette semaine.", hints: ["colleague", "holiday"] },
      { id: 8, text: "The boss wants to see you in his office.", audioText: "The boss wants to see you in his office.", translation: "Le patron veut vous voir dans son bureau.", hints: ["boss", "office"] }
    ]
  },
  {
    id: 3,
    title: "Dictée (3) : Voyages et transports",
    description: "Vocabulaire et expressions liés aux voyages.",
    level: 'medium',
    sentences: [
      { id: 1, text: "The flight has been delayed by two hours.", audioText: "The flight has been delayed by two hours.", translation: "Le vol a été retardé de deux heures.", hints: ["flight", "delayed"] },
      { id: 2, text: "I would like to book a room for tonight.", audioText: "I would like to book a room for tonight.", translation: "Je voudrais réserver une chambre pour ce soir.", hints: ["book", "room"] },
      { id: 3, text: "Where is the nearest underground station?", audioText: "Where is the nearest underground station?", translation: "Où est la station de métro la plus proche ?", hints: ["nearest", "underground"] },
      { id: 4, text: "The train leaves from platform three.", audioText: "The train leaves from platform three.", translation: "Le train part du quai numéro trois.", hints: ["train", "platform"] },
      { id: 5, text: "I need to pick up my luggage at the carousel.", audioText: "I need to pick up my luggage at the carousel.", translation: "Je dois récupérer mes bagages au carrousel.", hints: ["luggage", "carousel"] },
      { id: 6, text: "Could you recommend a good restaurant nearby?", audioText: "Could you recommend a good restaurant nearby?", translation: "Pourriez-vous recommander un bon restaurant à proximité ?", hints: ["recommend", "nearby"] },
      { id: 7, text: "The journey takes approximately four hours.", audioText: "The journey takes approximately four hours.", translation: "Le voyage dure environ quatre heures.", hints: ["journey", "approximately"] },
      { id: 8, text: "You should arrive at the airport two hours early.", audioText: "You should arrive at the airport two hours early.", translation: "Vous devriez arriver à l'aéroport deux heures à l'avance.", hints: ["arrive", "airport"] }
    ]
  },
  {
    id: 4,
    title: "Dictée (4) : Descriptions et opinions",
    description: "Exprimer des opinions et décrire des situations.",
    level: 'medium',
    sentences: [
      { id: 1, text: "I think this movie is absolutely brilliant.", audioText: "I think this movie is absolutely brilliant.", translation: "Je pense que ce film est absolument génial.", hints: ["think", "brilliant"] },
      { id: 2, text: "The exhibition was more interesting than I expected.", audioText: "The exhibition was more interesting than I expected.", translation: "L'exposition était plus intéressante que je ne m'y attendais.", hints: ["exhibition", "expected"] },
      { id: 3, text: "In my opinion, we should reconsider our approach.", audioText: "In my opinion, we should reconsider our approach.", translation: "À mon avis, nous devrions reconsidérer notre approche.", hints: ["opinion", "reconsider"] },
      { id: 4, text: "The scenery here is breathtakingly beautiful.", audioText: "The scenery here is breathtakingly beautiful.", translation: "Le paysage ici est d'une beauté à couper le souffle.", hints: ["scenery", "breathtakingly"] },
      { id: 5, text: "I completely agree with your point of view.", audioText: "I completely agree with your point of view.", translation: "Je suis entièrement d'accord avec votre point de vue.", hints: ["completely", "agree"] },
      { id: 6, text: "This is the most challenging task I have ever faced.", audioText: "This is the most challenging task I have ever faced.", translation: "C'est la tâche la plus difficile que j'aie jamais affrontée.", hints: ["challenging", "faced"] },
      { id: 7, text: "The atmosphere in this café is very relaxing.", audioText: "The atmosphere in this café is very relaxing.", translation: "L'atmosphère dans ce café est très relaxante.", hints: ["atmosphere", "relaxing"] },
      { id: 8, text: "I would rather stay at home than go out tonight.", audioText: "I would rather stay at home than go out tonight.", translation: "Je préférerais rester à la maison plutôt que sortir ce soir.", hints: ["rather", "stay"] }
    ]
  },
  {
    id: 5,
    title: "Dictée (5) : Actualités et société",
    description: "Phrases complexes sur des sujets d'actualité.",
    level: 'hard',
    sentences: [
      { id: 1, text: "The government has announced new environmental policies.", audioText: "The government has announced new environmental policies.", translation: "Le gouvernement a annoncé de nouvelles politiques environnementales.", hints: ["government", "environmental"] },
      { id: 2, text: "Climate change is affecting communities worldwide.", audioText: "Climate change is affecting communities worldwide.", translation: "Le changement climatique affecte les communautés du monde entier.", hints: ["climate", "worldwide"] },
      { id: 3, text: "The unemployment rate has decreased significantly this quarter.", audioText: "The unemployment rate has decreased significantly this quarter.", translation: "Le taux de chômage a diminué de manière significative ce trimestre.", hints: ["unemployment", "significantly"] },
      { id: 4, text: "Scientists have discovered a breakthrough in renewable energy.", audioText: "Scientists have discovered a breakthrough in renewable energy.", translation: "Les scientifiques ont fait une percée dans les énergies renouvelables.", hints: ["breakthrough", "renewable"] },
      { id: 5, text: "The economy is expected to recover by the end of the year.", audioText: "The economy is expected to recover by the end of the year.", translation: "L'économie devrait se rétablir d'ici la fin de l'année.", hints: ["economy", "recover"] },
      { id: 6, text: "Healthcare reforms have been debated in parliament.", audioText: "Healthcare reforms have been debated in parliament.", translation: "Les réformes de santé ont été débattues au parlement.", hints: ["healthcare", "parliament"] },
      { id: 7, text: "Technology continues to transform the way we communicate.", audioText: "Technology continues to transform the way we communicate.", translation: "La technologie continue de transformer notre façon de communiquer.", hints: ["technology", "communicate"] },
      { id: 8, text: "International cooperation is essential for addressing global challenges.", audioText: "International cooperation is essential for addressing global challenges.", translation: "La coopération internationale est essentielle pour relever les défis mondiaux.", hints: ["cooperation", "challenges"] }
    ]
  },
  {
    id: 6,
    title: "Dictée (6) : Expressions idiomatiques",
    description: "Phrases contenant des expressions idiomatiques courantes.",
    level: 'hard',
    sentences: [
      { id: 1, text: "He decided to bite the bullet and ask for a raise.", audioText: "He decided to bite the bullet and ask for a raise.", translation: "Il a décidé de prendre son courage à deux mains et demander une augmentation.", hints: ["bite", "bullet"] },
      { id: 2, text: "The project was a piece of cake for our experienced team.", audioText: "The project was a piece of cake for our experienced team.", translation: "Le projet était un jeu d'enfant pour notre équipe expérimentée.", hints: ["piece", "cake"] },
      { id: 3, text: "Let's not beat around the bush and get straight to the point.", audioText: "Let's not beat around the bush and get straight to the point.", translation: "Ne tournons pas autour du pot et allons droit au but.", hints: ["beat", "bush"] },
      { id: 4, text: "She has been burning the candle at both ends lately.", audioText: "She has been burning the candle at both ends lately.", translation: "Elle brûle la chandelle par les deux bouts ces derniers temps.", hints: ["burning", "candle"] },
      { id: 5, text: "The news came out of the blue and surprised everyone.", audioText: "The news came out of the blue and surprised everyone.", translation: "La nouvelle est tombée du ciel et a surpris tout le monde.", hints: ["blue", "surprised"] },
      { id: 6, text: "We need to think outside the box to solve this problem.", audioText: "We need to think outside the box to solve this problem.", translation: "Nous devons sortir des sentiers battus pour résoudre ce problème.", hints: ["outside", "box"] },
      { id: 7, text: "He was caught red-handed stealing from the office.", audioText: "He was caught red-handed stealing from the office.", translation: "Il a été pris la main dans le sac en train de voler au bureau.", hints: ["caught", "red-handed"] },
      { id: 8, text: "It's time to face the music and accept responsibility.", audioText: "It's time to face the music and accept responsibility.", translation: "Il est temps d'assumer les conséquences et d'accepter la responsabilité.", hints: ["face", "music"] }
    ]
  }
];

export const getDictationExerciseById = (id: number): DictationExercise | undefined => {
  return dictationExercises.find(ex => ex.id === id);
};
