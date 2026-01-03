export interface TranslationExercise {
  id: number;
  title: string;
  description: string;
  direction: 'fr-en' | 'en-fr';
  level: 'easy' | 'medium' | 'hard';
  sentences: {
    id: number;
    source: string;
    answer: string;
    alternatives?: string[];
    hints?: string[];
    explanation?: string;
  }[];
}

export const translationExercises: TranslationExercise[] = [
  {
    id: 1,
    title: "Traduction (1) : Français → Anglais (Facile)",
    description: "Traduisez ces phrases simples du français vers l'anglais.",
    direction: 'fr-en',
    level: 'easy',
    sentences: [
      { id: 1, source: "Je m'appelle Marie.", answer: "My name is Marie.", alternatives: ["I am called Marie.", "I'm Marie."], hints: ["My name is..."], explanation: "En anglais, on dit 'My name is' plutôt que la traduction littérale." },
      { id: 2, source: "J'ai vingt ans.", answer: "I am twenty years old.", alternatives: ["I'm twenty years old.", "I'm 20 years old."], hints: ["I am... years old"], explanation: "En anglais on utilise 'to be' (être) et non 'to have' (avoir) pour l'âge." },
      { id: 3, source: "Il fait beau aujourd'hui.", answer: "It is nice today.", alternatives: ["The weather is nice today.", "It's sunny today.", "It's beautiful today."], hints: ["It is... / The weather is..."], explanation: "Pour parler du temps, on utilise 'It is' + adjectif." },
      { id: 4, source: "J'aime le chocolat.", answer: "I like chocolate.", alternatives: ["I love chocolate."], hints: ["I like..."], explanation: "Notez l'absence d'article avant 'chocolate' en anglais (sens général)." },
      { id: 5, source: "Elle habite à Paris.", answer: "She lives in Paris.", alternatives: ["She is living in Paris."], hints: ["She lives in..."], explanation: "'Habiter' se traduit par 'to live' + 'in' + ville." },
      { id: 6, source: "Nous allons à l'école.", answer: "We go to school.", alternatives: ["We are going to school."], hints: ["We go to..."], explanation: "Pas d'article devant 'school' quand on y va en tant qu'élève." },
      { id: 7, source: "Il y a un chat dans le jardin.", answer: "There is a cat in the garden.", alternatives: ["There's a cat in the garden."], hints: ["There is..."], explanation: "'Il y a' se traduit par 'There is' (singulier) ou 'There are' (pluriel)." },
      { id: 8, source: "Je parle français et anglais.", answer: "I speak French and English.", alternatives: ["I can speak French and English."], hints: ["I speak..."], explanation: "Les langues prennent une majuscule en anglais." },
      { id: 9, source: "Quelle heure est-il ?", answer: "What time is it?", alternatives: ["What's the time?"], hints: ["What time..."], explanation: "Question courante pour demander l'heure." },
      { id: 10, source: "J'ai faim.", answer: "I am hungry.", alternatives: ["I'm hungry."], hints: ["I am..."], explanation: "En anglais, on utilise 'to be' et non 'to have' pour la faim et la soif." }
    ]
  },
  {
    id: 2,
    title: "Traduction (2) : Anglais → Français (Facile)",
    description: "Traduisez ces phrases simples de l'anglais vers le français.",
    direction: 'en-fr',
    level: 'easy',
    sentences: [
      { id: 1, source: "How are you?", answer: "Comment allez-vous ?", alternatives: ["Comment vas-tu ?", "Ça va ?"], hints: ["Comment..."], explanation: "Forme polie vs familière." },
      { id: 2, source: "I would like a coffee, please.", answer: "Je voudrais un café, s'il vous plaît.", alternatives: ["J'aimerais un café, s'il vous plaît."], hints: ["Je voudrais..."], explanation: "'Would like' = conditionnel de politesse." },
      { id: 3, source: "Where is the train station?", answer: "Où est la gare ?", alternatives: ["Où se trouve la gare ?"], hints: ["Où est..."], explanation: "'Train station' = 'gare' en français." },
      { id: 4, source: "I don't understand.", answer: "Je ne comprends pas.", alternatives: ["Je comprends pas."], hints: ["Je ne... pas"], explanation: "Négation avec 'ne...pas' en français." },
      { id: 5, source: "She is my sister.", answer: "C'est ma sœur.", alternatives: ["Elle est ma sœur."], hints: ["C'est... / Elle est..."], explanation: "Les deux formulations sont acceptées." },
      { id: 6, source: "The weather is cold.", answer: "Il fait froid.", alternatives: ["Le temps est froid."], hints: ["Il fait..."], explanation: "En français, on utilise 'Il fait' pour le temps." },
      { id: 7, source: "I am learning English.", answer: "J'apprends l'anglais.", alternatives: ["Je suis en train d'apprendre l'anglais."], hints: ["J'apprends..."], explanation: "Le présent progressif anglais se traduit souvent par le présent simple." },
      { id: 8, source: "What is your name?", answer: "Comment vous appelez-vous ?", alternatives: ["Comment tu t'appelles ?", "Quel est votre nom ?"], hints: ["Comment..."], explanation: "Plusieurs façons de demander le nom." },
      { id: 9, source: "I am tired.", answer: "Je suis fatigué.", alternatives: ["Je suis fatiguée."], hints: ["Je suis..."], explanation: "L'accord dépend du genre du locuteur." },
      { id: 10, source: "See you tomorrow!", answer: "À demain !", alternatives: ["On se voit demain !"], hints: ["À..."], explanation: "Expression idiomatique pour se dire au revoir." }
    ]
  },
  {
    id: 3,
    title: "Traduction (3) : Français → Anglais (Intermédiaire)",
    description: "Traduisez ces phrases de niveau intermédiaire du français vers l'anglais.",
    direction: 'fr-en',
    level: 'medium',
    sentences: [
      { id: 1, source: "Je travaille ici depuis cinq ans.", answer: "I have been working here for five years.", alternatives: ["I have worked here for five years.", "I've been working here for five years."], hints: ["since/for + present perfect"], explanation: "'Depuis' + durée = 'for' + present perfect (continuous)." },
      { id: 2, source: "Si j'avais de l'argent, j'achèterais une voiture.", answer: "If I had money, I would buy a car.", alternatives: ["If I had the money, I would buy a car."], hints: ["If + past, would + infinitive"], explanation: "Conditionnel irréel présent = 2nd conditional." },
      { id: 3, source: "Elle m'a dit qu'elle viendrait demain.", answer: "She told me she would come tomorrow.", alternatives: ["She told me that she would come tomorrow."], hints: ["told me (that) she would..."], explanation: "Discours indirect avec concordance des temps." },
      { id: 4, source: "J'aurais dû étudier davantage.", answer: "I should have studied more.", alternatives: ["I ought to have studied more."], hints: ["should have + past participle"], explanation: "Regret passé = 'should have' + participe passé." },
      { id: 5, source: "Il pleut depuis ce matin.", answer: "It has been raining since this morning.", alternatives: ["It's been raining since this morning."], hints: ["has been + -ing"], explanation: "Action commencée dans le passé qui continue = present perfect continuous." },
      { id: 6, source: "Je me suis fait couper les cheveux.", answer: "I had my hair cut.", alternatives: ["I got my hair cut."], hints: ["have/get something done"], explanation: "Structure causative : 'have/get + object + past participle'." },
      { id: 7, source: "Plus je travaille, plus je suis fatigué.", answer: "The more I work, the more tired I am.", alternatives: ["The more I work, the tireder I get."], hints: ["The more..., the more..."], explanation: "Comparatif progressif double." },
      { id: 8, source: "Il vaut mieux que tu partes maintenant.", answer: "You had better leave now.", alternatives: ["It would be better if you left now."], hints: ["had better + infinitive"], explanation: "'Il vaut mieux' = 'had better' (conseil fort)." },
      { id: 9, source: "J'ai l'habitude de me lever tôt.", answer: "I am used to getting up early.", alternatives: ["I'm used to waking up early."], hints: ["be used to + -ing"], explanation: "'Avoir l'habitude de' = 'be used to' + gérondif." },
      { id: 10, source: "On m'a volé mon portefeuille.", answer: "My wallet was stolen.", alternatives: ["Someone stole my wallet.", "I had my wallet stolen."], hints: ["passive voice"], explanation: "Tournure passive quand l'agent est inconnu ou non important." }
    ]
  },
  {
    id: 4,
    title: "Traduction (4) : Anglais → Français (Intermédiaire)",
    description: "Traduisez ces phrases de niveau intermédiaire de l'anglais vers le français.",
    direction: 'en-fr',
    level: 'medium',
    sentences: [
      { id: 1, source: "I wish I could speak Japanese.", answer: "J'aimerais pouvoir parler japonais.", alternatives: ["Je souhaiterais savoir parler japonais.", "Si seulement je pouvais parler japonais."], hints: ["J'aimerais... / Si seulement..."], explanation: "'I wish' exprime un souhait irréel." },
      { id: 2, source: "By the time you arrive, I will have finished.", answer: "Quand tu arriveras, j'aurai fini.", alternatives: ["D'ici à ton arrivée, j'aurai terminé."], hints: ["Quand... futur antérieur"], explanation: "'By the time' + présent, 'will have' + participe passé." },
      { id: 3, source: "He denied having taken the money.", answer: "Il a nié avoir pris l'argent.", alternatives: ["Il a nié qu'il avait pris l'argent."], hints: ["nié avoir..."], explanation: "'Deny + -ing' = 'nier avoir' + participe passé." },
      { id: 4, source: "If only I had listened to you!", answer: "Si seulement je t'avais écouté !", alternatives: ["Si seulement j'avais écouté tes conseils !"], hints: ["Si seulement..."], explanation: "'If only' + past perfect exprime un regret." },
      { id: 5, source: "I'm not used to driving on the left.", answer: "Je n'ai pas l'habitude de conduire à gauche.", alternatives: ["Je ne suis pas habitué à conduire à gauche."], hints: ["ne pas avoir l'habitude de..."], explanation: "'Not used to' = 'ne pas avoir l'habitude de'." },
      { id: 6, source: "The sooner, the better.", answer: "Le plus tôt sera le mieux.", alternatives: ["Plus tôt ce sera, mieux ce sera."], hints: ["Le plus tôt..."], explanation: "Expression comparative idiomatique." },
      { id: 7, source: "I would rather stay at home.", answer: "Je préférerais rester à la maison.", alternatives: ["J'aimerais mieux rester à la maison."], hints: ["Je préférerais..."], explanation: "'Would rather' = 'préférer' au conditionnel." },
      { id: 8, source: "She is said to be very talented.", answer: "On dit qu'elle est très talentueuse.", alternatives: ["Elle est réputée être très talentueuse.", "Il paraît qu'elle est très talentueuse."], hints: ["On dit que..."], explanation: "Structure passive impersonnelle." },
      { id: 9, source: "It's high time you found a job.", answer: "Il est grand temps que tu trouves un travail.", alternatives: ["Il serait temps que tu trouves du travail."], hints: ["Il est grand temps que..."], explanation: "'It's high time' + prétérit = subjonctif en français." },
      { id: 10, source: "No matter what happens, I'll support you.", answer: "Quoi qu'il arrive, je te soutiendrai.", alternatives: ["Peu importe ce qui arrive, je te soutiendrai."], hints: ["Quoi qu'il arrive..."], explanation: "'No matter what' = 'quoi que' + subjonctif." }
    ]
  },
  {
    id: 5,
    title: "Traduction (5) : Expressions idiomatiques FR → EN",
    description: "Traduisez ces expressions idiomatiques françaises en anglais.",
    direction: 'fr-en',
    level: 'hard',
    sentences: [
      { id: 1, source: "Il pleut des cordes.", answer: "It's raining cats and dogs.", alternatives: ["It's pouring.", "It's bucketing down."], hints: ["cats and dogs"], explanation: "Expression idiomatique pour une pluie très forte." },
      { id: 2, source: "Ce n'est pas la mer à boire.", answer: "It's not rocket science.", alternatives: ["It's no big deal.", "It's not that hard."], hints: ["not rocket science"], explanation: "Expression pour dire que quelque chose n'est pas si difficile." },
      { id: 3, source: "Avoir le cafard.", answer: "To feel blue.", alternatives: ["To feel down.", "To be in low spirits."], hints: ["feel blue"], explanation: "Expression pour être déprimé ou triste." },
      { id: 4, source: "Coûter les yeux de la tête.", answer: "To cost an arm and a leg.", alternatives: ["To cost a fortune."], hints: ["arm and a leg"], explanation: "Expression pour quelque chose de très cher." },
      { id: 5, source: "Mettre les pieds dans le plat.", answer: "To put one's foot in it.", alternatives: ["To put one's foot in one's mouth."], hints: ["put one's foot"], explanation: "Faire une gaffe, dire quelque chose de maladroit." },
      { id: 6, source: "Avoir un chat dans la gorge.", answer: "To have a frog in one's throat.", alternatives: ["To have something stuck in one's throat."], hints: ["frog in throat"], explanation: "Avoir la voix enrouée, difficulté à parler." },
      { id: 7, source: "Quand les poules auront des dents.", answer: "When pigs fly.", alternatives: ["When hell freezes over."], hints: ["pigs fly"], explanation: "Expression pour dire 'jamais'." },
      { id: 8, source: "C'est la goutte d'eau qui fait déborder le vase.", answer: "It's the straw that broke the camel's back.", alternatives: ["It's the last straw."], hints: ["straw... camel's back"], explanation: "Le dernier petit problème qui cause une réaction excessive." },
      { id: 9, source: "Avoir d'autres chats à fouetter.", answer: "To have bigger fish to fry.", alternatives: ["To have other things to do."], hints: ["fish to fry"], explanation: "Avoir des choses plus importantes à faire." },
      { id: 10, source: "Tourner autour du pot.", answer: "To beat around the bush.", alternatives: ["To avoid getting to the point."], hints: ["beat around"], explanation: "Éviter de dire directement ce qu'on pense." }
    ]
  },
  {
    id: 6,
    title: "Traduction (6) : Expressions idiomatiques EN → FR",
    description: "Traduisez ces expressions idiomatiques anglaises en français.",
    direction: 'en-fr',
    level: 'hard',
    sentences: [
      { id: 1, source: "It's a piece of cake.", answer: "C'est du gâteau.", alternatives: ["C'est facile comme tout.", "C'est un jeu d'enfant."], hints: ["du gâteau"], explanation: "Expression pour quelque chose de facile." },
      { id: 2, source: "To kill two birds with one stone.", answer: "Faire d'une pierre deux coups.", alternatives: ["Joindre l'utile à l'agréable."], hints: ["pierre... coups"], explanation: "Accomplir deux choses en une seule action." },
      { id: 3, source: "To be on cloud nine.", answer: "Être au septième ciel.", alternatives: ["Être aux anges.", "Nager dans le bonheur."], hints: ["septième ciel"], explanation: "Être extrêmement heureux." },
      { id: 4, source: "Break a leg!", answer: "Merde !", alternatives: ["Bonne chance !"], hints: ["(expression théâtrale)"], explanation: "Expression pour souhaiter bonne chance, surtout au théâtre." },
      { id: 5, source: "To let the cat out of the bag.", answer: "Vendre la mèche.", alternatives: ["Révéler un secret."], hints: ["vendre la mèche"], explanation: "Révéler un secret par inadvertance." },
      { id: 6, source: "It's not my cup of tea.", answer: "Ce n'est pas ma tasse de thé.", alternatives: ["Ce n'est pas mon truc."], hints: ["tasse de thé"], explanation: "Ce n'est pas quelque chose que j'apprécie." },
      { id: 7, source: "To be in hot water.", answer: "Être dans de beaux draps.", alternatives: ["Avoir des ennuis.", "Être dans le pétrin."], hints: ["beaux draps"], explanation: "Être dans une situation difficile." },
      { id: 8, source: "Once in a blue moon.", answer: "Tous les trente-six du mois.", alternatives: ["Très rarement.", "Une fois tous les cent ans."], hints: ["trente-six"], explanation: "Très rarement, presque jamais." },
      { id: 9, source: "To hit the nail on the head.", answer: "Mettre le doigt dessus.", alternatives: ["Taper dans le mille.", "Toucher juste."], hints: ["doigt dessus / mille"], explanation: "Avoir parfaitement raison, toucher le point exact." },
      { id: 10, source: "The ball is in your court.", answer: "La balle est dans ton camp.", alternatives: ["C'est à toi de jouer."], hints: ["balle... camp"], explanation: "C'est à vous de prendre une décision ou d'agir." }
    ]
  }
];

export const getTranslationExerciseById = (id: number): TranslationExercise | undefined => {
  return translationExercises.find(ex => ex.id === id);
};
