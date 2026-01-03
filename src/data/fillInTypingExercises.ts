export interface FillInTypingSentence {
  id: number;
  sentence: string; // Use ___ for the blank
  answer: string;
  acceptableAnswers?: string[]; // Alternative acceptable answers
  hint: string;
  hintFr: string;
  translation: string;
}

export interface FillInTypingExercise {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  difficulty: 'easy' | 'medium' | 'hard';
  sentences: FillInTypingSentence[];
}

export const fillInTypingExercises: FillInTypingExercise[] = [
  {
    id: 'prepositions-1',
    title: 'Prepositions of Time',
    titleFr: 'Prépositions de Temps',
    description: 'Fill in the correct preposition: in, on, at',
    descriptionFr: 'Complétez avec la bonne préposition : in, on, at',
    difficulty: 'easy',
    sentences: [
      { id: 1, sentence: 'I wake up ___ 7 o\'clock every morning.', answer: 'at', hint: 'Used for specific times', hintFr: 'Utilisé pour les heures précises', translation: 'Je me réveille à 7 heures chaque matin.' },
      { id: 2, sentence: 'My birthday is ___ March.', answer: 'in', hint: 'Used for months', hintFr: 'Utilisé pour les mois', translation: 'Mon anniversaire est en mars.' },
      { id: 3, sentence: 'The meeting is ___ Monday.', answer: 'on', hint: 'Used for days', hintFr: 'Utilisé pour les jours', translation: 'La réunion est lundi.' },
      { id: 4, sentence: 'We go skiing ___ winter.', answer: 'in', hint: 'Used for seasons', hintFr: 'Utilisé pour les saisons', translation: 'Nous allons skier en hiver.' },
      { id: 5, sentence: 'The shop closes ___ midnight.', answer: 'at', hint: 'Used for specific times', hintFr: 'Utilisé pour les heures précises', translation: 'Le magasin ferme à minuit.' },
      { id: 6, sentence: 'I was born ___ 1990.', answer: 'in', hint: 'Used for years', hintFr: 'Utilisé pour les années', translation: 'Je suis né en 1990.' },
      { id: 7, sentence: 'We have a party ___ New Year\'s Eve.', answer: 'on', hint: 'Used for specific dates', hintFr: 'Utilisé pour les dates précises', translation: 'Nous avons une fête le soir du Nouvel An.' },
      { id: 8, sentence: 'The train leaves ___ noon.', answer: 'at', hint: 'Used for specific times', hintFr: 'Utilisé pour les heures précises', translation: 'Le train part à midi.' },
      { id: 9, sentence: 'It gets dark early ___ December.', answer: 'in', hint: 'Used for months', hintFr: 'Utilisé pour les mois', translation: 'Il fait nuit tôt en décembre.' },
      { id: 10, sentence: 'I\'ll see you ___ Friday afternoon.', answer: 'on', hint: 'Used for day + part of day', hintFr: 'Utilisé pour jour + partie de la journée', translation: 'Je te verrai vendredi après-midi.' }
    ]
  },
  {
    id: 'prepositions-2',
    title: 'Prepositions of Place',
    titleFr: 'Prépositions de Lieu',
    description: 'Fill in the correct preposition: in, on, at',
    descriptionFr: 'Complétez avec la bonne préposition : in, on, at',
    difficulty: 'easy',
    sentences: [
      { id: 1, sentence: 'The book is ___ the table.', answer: 'on', hint: 'On a surface', hintFr: 'Sur une surface', translation: 'Le livre est sur la table.' },
      { id: 2, sentence: 'She lives ___ Paris.', answer: 'in', hint: 'Inside a city', hintFr: 'Dans une ville', translation: 'Elle vit à Paris.' },
      { id: 3, sentence: 'I\'ll meet you ___ the bus stop.', answer: 'at', hint: 'At a point/location', hintFr: 'À un point/endroit', translation: 'Je te retrouverai à l\'arrêt de bus.' },
      { id: 4, sentence: 'The cat is ___ the box.', answer: 'in', hint: 'Inside something', hintFr: 'À l\'intérieur de quelque chose', translation: 'Le chat est dans la boîte.' },
      { id: 5, sentence: 'There\'s a picture ___ the wall.', answer: 'on', hint: 'On a vertical surface', hintFr: 'Sur une surface verticale', translation: 'Il y a une photo sur le mur.' },
      { id: 6, sentence: 'He works ___ a bank.', answer: 'at', acceptableAnswers: ['in'], hint: 'At/in a workplace', hintFr: 'Dans un lieu de travail', translation: 'Il travaille dans une banque.' },
      { id: 7, sentence: 'The keys are ___ my pocket.', answer: 'in', hint: 'Inside something', hintFr: 'À l\'intérieur de quelque chose', translation: 'Les clés sont dans ma poche.' },
      { id: 8, sentence: 'I\'m waiting ___ the door.', answer: 'at', hint: 'At a point', hintFr: 'À un point', translation: 'J\'attends à la porte.' },
      { id: 9, sentence: 'She\'s sitting ___ the sofa.', answer: 'on', hint: 'On a surface', hintFr: 'Sur une surface', translation: 'Elle est assise sur le canapé.' },
      { id: 10, sentence: 'They live ___ the third floor.', answer: 'on', hint: 'On a floor level', hintFr: 'À un étage', translation: 'Ils vivent au troisième étage.' }
    ]
  },
  {
    id: 'articles-1',
    title: 'Articles: A, An, The',
    titleFr: 'Articles : A, An, The',
    description: 'Fill in the correct article',
    descriptionFr: 'Complétez avec le bon article',
    difficulty: 'medium',
    sentences: [
      { id: 1, sentence: 'I saw ___ elephant at the zoo.', answer: 'an', hint: 'Before a vowel sound', hintFr: 'Devant un son voyelle', translation: 'J\'ai vu un éléphant au zoo.' },
      { id: 2, sentence: '___ sun rises in the east.', answer: 'The', acceptableAnswers: ['the'], hint: 'Unique thing', hintFr: 'Chose unique', translation: 'Le soleil se lève à l\'est.' },
      { id: 3, sentence: 'She is ___ honest person.', answer: 'an', hint: 'Silent H = vowel sound', hintFr: 'H muet = son voyelle', translation: 'Elle est une personne honnête.' },
      { id: 4, sentence: 'I need ___ new computer.', answer: 'a', hint: 'Before a consonant sound', hintFr: 'Devant un son consonne', translation: 'J\'ai besoin d\'un nouvel ordinateur.' },
      { id: 5, sentence: 'Can you pass me ___ salt?', answer: 'the', hint: 'Specific item we both know', hintFr: 'Article spécifique que nous connaissons', translation: 'Peux-tu me passer le sel ?' },
      { id: 6, sentence: 'He plays ___ guitar very well.', answer: 'the', hint: 'Musical instruments use "the"', hintFr: 'Les instruments de musique utilisent "the"', translation: 'Il joue très bien de la guitare.' },
      { id: 7, sentence: 'I\'d like ___ cup of coffee.', answer: 'a', hint: 'One of many', hintFr: 'Un parmi plusieurs', translation: 'J\'aimerais une tasse de café.' },
      { id: 8, sentence: '___ Eiffel Tower is in Paris.', answer: 'The', acceptableAnswers: ['the'], hint: 'Famous landmark', hintFr: 'Monument célèbre', translation: 'La Tour Eiffel est à Paris.' },
      { id: 9, sentence: 'She works as ___ engineer.', answer: 'an', hint: 'Before vowel sound', hintFr: 'Devant son voyelle', translation: 'Elle travaille comme ingénieure.' },
      { id: 10, sentence: 'I saw ___ movie you recommended.', answer: 'the', hint: 'Specific movie mentioned', hintFr: 'Film spécifique mentionné', translation: 'J\'ai vu le film que tu as recommandé.' }
    ]
  },
  {
    id: 'verb-tenses-1',
    title: 'Present Simple vs Present Continuous',
    titleFr: 'Présent Simple vs Présent Continu',
    description: 'Complete with the correct verb form',
    descriptionFr: 'Complétez avec la forme verbale correcte',
    difficulty: 'medium',
    sentences: [
      { id: 1, sentence: 'She ___ (work) from home today.', answer: 'is working', hint: 'Happening now', hintFr: 'Se passe maintenant', translation: 'Elle travaille de chez elle aujourd\'hui.' },
      { id: 2, sentence: 'I ___ (go) to the gym every Monday.', answer: 'go', hint: 'Regular habit', hintFr: 'Habitude régulière', translation: 'Je vais à la salle de sport tous les lundis.' },
      { id: 3, sentence: 'Listen! Someone ___ (knock) at the door.', answer: 'is knocking', hint: 'Happening right now', hintFr: 'Se passe en ce moment', translation: 'Écoute ! Quelqu\'un frappe à la porte.' },
      { id: 4, sentence: 'Water ___ (boil) at 100 degrees.', answer: 'boils', hint: 'Scientific fact', hintFr: 'Fait scientifique', translation: 'L\'eau bout à 100 degrés.' },
      { id: 5, sentence: 'They ___ (watch) TV right now.', answer: 'are watching', hint: 'At this moment', hintFr: 'En ce moment', translation: 'Ils regardent la télé en ce moment.' },
      { id: 6, sentence: 'He always ___ (arrive) late.', answer: 'arrives', hint: 'Regular behavior', hintFr: 'Comportement régulier', translation: 'Il arrive toujours en retard.' },
      { id: 7, sentence: 'I ___ (read) a great book at the moment.', answer: 'am reading', acceptableAnswers: ["'m reading"], hint: 'Temporary situation', hintFr: 'Situation temporaire', translation: 'Je lis un super livre en ce moment.' },
      { id: 8, sentence: 'The sun ___ (rise) in the east.', answer: 'rises', hint: 'General truth', hintFr: 'Vérité générale', translation: 'Le soleil se lève à l\'est.' },
      { id: 9, sentence: 'Why ___ you ___ (cry)?', answer: 'are crying', acceptableAnswers: ['are you crying'], hint: 'Happening now', hintFr: 'Se passe maintenant', translation: 'Pourquoi pleures-tu ?' },
      { id: 10, sentence: 'She ___ (not/like) coffee.', answer: "doesn't like", acceptableAnswers: ['does not like'], hint: 'Permanent preference', hintFr: 'Préférence permanente', translation: 'Elle n\'aime pas le café.' }
    ]
  },
  {
    id: 'irregular-verbs-1',
    title: 'Irregular Verbs: Past Simple',
    titleFr: 'Verbes Irréguliers : Passé Simple',
    description: 'Write the past simple form of the verb',
    descriptionFr: 'Écrivez la forme passée du verbe',
    difficulty: 'medium',
    sentences: [
      { id: 1, sentence: 'I ___ (go) to the cinema yesterday.', answer: 'went', hint: 'go → went → gone', hintFr: 'go → went → gone', translation: 'Je suis allé au cinéma hier.' },
      { id: 2, sentence: 'She ___ (buy) a new dress.', answer: 'bought', hint: 'buy → bought → bought', hintFr: 'buy → bought → bought', translation: 'Elle a acheté une nouvelle robe.' },
      { id: 3, sentence: 'They ___ (eat) pizza for dinner.', answer: 'ate', hint: 'eat → ate → eaten', hintFr: 'eat → ate → eaten', translation: 'Ils ont mangé une pizza pour le dîner.' },
      { id: 4, sentence: 'He ___ (write) a letter to his mother.', answer: 'wrote', hint: 'write → wrote → written', hintFr: 'write → wrote → written', translation: 'Il a écrit une lettre à sa mère.' },
      { id: 5, sentence: 'We ___ (see) a beautiful sunset.', answer: 'saw', hint: 'see → saw → seen', hintFr: 'see → saw → seen', translation: 'Nous avons vu un beau coucher de soleil.' },
      { id: 6, sentence: 'The dog ___ (run) away.', answer: 'ran', hint: 'run → ran → run', hintFr: 'run → ran → run', translation: 'Le chien s\'est enfui.' },
      { id: 7, sentence: 'I ___ (think) it was a great idea.', answer: 'thought', hint: 'think → thought → thought', hintFr: 'think → thought → thought', translation: 'Je pensais que c\'était une super idée.' },
      { id: 8, sentence: 'She ___ (take) the bus to work.', answer: 'took', hint: 'take → took → taken', hintFr: 'take → took → taken', translation: 'Elle a pris le bus pour aller au travail.' },
      { id: 9, sentence: 'They ___ (speak) French fluently.', answer: 'spoke', hint: 'speak → spoke → spoken', hintFr: 'speak → spoke → spoken', translation: 'Ils parlaient français couramment.' },
      { id: 10, sentence: 'He ___ (make) a delicious cake.', answer: 'made', hint: 'make → made → made', hintFr: 'make → made → made', translation: 'Il a fait un gâteau délicieux.' }
    ]
  },
  {
    id: 'modals-1',
    title: 'Modal Verbs',
    titleFr: 'Verbes Modaux',
    description: 'Choose the correct modal verb',
    descriptionFr: 'Choisissez le bon verbe modal',
    difficulty: 'hard',
    sentences: [
      { id: 1, sentence: 'You ___ smoke here. It\'s forbidden.', answer: "can't", acceptableAnswers: ['cannot', "mustn't", 'must not'], hint: 'Prohibition', hintFr: 'Interdiction', translation: 'Tu ne peux pas fumer ici. C\'est interdit.' },
      { id: 2, sentence: 'I ___ speak three languages.', answer: 'can', hint: 'Ability', hintFr: 'Capacité', translation: 'Je peux parler trois langues.' },
      { id: 3, sentence: 'You ___ see a doctor. That cough sounds bad.', answer: 'should', acceptableAnswers: ['ought to', 'must'], hint: 'Advice', hintFr: 'Conseil', translation: 'Tu devrais voir un médecin. Cette toux a l\'air mauvaise.' },
      { id: 4, sentence: 'It ___ rain tomorrow. Look at those clouds.', answer: 'might', acceptableAnswers: ['may', 'could'], hint: 'Possibility', hintFr: 'Possibilité', translation: 'Il pourrait pleuvoir demain. Regarde ces nuages.' },
      { id: 5, sentence: 'You ___ wear a seatbelt. It\'s the law.', answer: 'must', acceptableAnswers: ['have to'], hint: 'Obligation', hintFr: 'Obligation', translation: 'Tu dois porter une ceinture. C\'est la loi.' },
      { id: 6, sentence: '___ I use your phone?', answer: 'Can', acceptableAnswers: ['Could', 'May'], hint: 'Permission', hintFr: 'Permission', translation: 'Puis-je utiliser ton téléphone ?' },
      { id: 7, sentence: 'She ___ be at home. Her car is in the driveway.', answer: 'must', hint: 'Logical deduction', hintFr: 'Déduction logique', translation: 'Elle doit être à la maison. Sa voiture est dans l\'allée.' },
      { id: 8, sentence: 'You ___ have told me earlier!', answer: 'should', acceptableAnswers: ['could'], hint: 'Past criticism', hintFr: 'Critique passée', translation: 'Tu aurais dû me le dire plus tôt !' },
      { id: 9, sentence: 'I ___ swim when I was five.', answer: 'could', acceptableAnswers: ["couldn't"], hint: 'Past ability', hintFr: 'Capacité passée', translation: 'Je savais nager quand j\'avais cinq ans.' },
      { id: 10, sentence: 'You ___ be joking! That\'s impossible.', answer: 'must', hint: 'Logical conclusion', hintFr: 'Conclusion logique', translation: 'Tu dois plaisanter ! C\'est impossible.' }
    ]
  }
];
