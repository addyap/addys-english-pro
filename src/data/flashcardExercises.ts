export interface Flashcard {
  id: number;
  front: string;
  back: string;
  example: string;
  exampleTranslation: string;
  category: 'vocabulary' | 'idiom' | 'phrasal-verb' | 'grammar';
}

export interface FlashcardSet {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cards: Flashcard[];
}

export const flashcardSets: FlashcardSet[] = [
  {
    id: 'essential-vocab-1',
    title: 'Essential Vocabulary 1',
    titleFr: 'Vocabulaire Essentiel 1',
    description: 'Common everyday words and their meanings',
    descriptionFr: 'Mots courants du quotidien et leurs significations',
    difficulty: 'easy',
    cards: [
      { id: 1, front: 'Actually', back: 'En fait / Vraiment', example: 'Actually, I prefer tea to coffee.', exampleTranslation: 'En fait, je préfère le thé au café.', category: 'vocabulary' },
      { id: 2, front: 'Eventually', back: 'Finalement / Au bout du compte', example: 'Eventually, she passed her exam.', exampleTranslation: 'Finalement, elle a réussi son examen.', category: 'vocabulary' },
      { id: 3, front: 'Currently', back: 'Actuellement / En ce moment', example: 'I am currently working from home.', exampleTranslation: 'Je travaille actuellement depuis chez moi.', category: 'vocabulary' },
      { id: 4, front: 'Sensible', back: 'Raisonnable / Sensé', example: 'That seems like a sensible decision.', exampleTranslation: 'Cela semble être une décision sensée.', category: 'vocabulary' },
      { id: 5, front: 'Sensitive', back: 'Sensible / Susceptible', example: 'She is very sensitive to criticism.', exampleTranslation: 'Elle est très sensible aux critiques.', category: 'vocabulary' },
      { id: 6, front: 'Comprehensive', back: 'Complet / Exhaustif', example: 'This is a comprehensive guide.', exampleTranslation: "C'est un guide complet.", category: 'vocabulary' },
      { id: 7, front: 'Eventually', back: 'Finalement', example: 'He eventually found his keys.', exampleTranslation: 'Il a finalement trouvé ses clés.', category: 'vocabulary' },
      { id: 8, front: 'Barely', back: 'À peine', example: 'I barely finished on time.', exampleTranslation: "J'ai à peine terminé à temps.", category: 'vocabulary' },
      { id: 9, front: 'Quite', back: 'Assez / Plutôt', example: "It's quite cold today.", exampleTranslation: "Il fait assez froid aujourd'hui.", category: 'vocabulary' },
      { id: 10, front: 'Rather', back: 'Plutôt / Assez', example: "I'd rather stay home.", exampleTranslation: 'Je préférerais rester à la maison.', category: 'vocabulary' }
    ]
  },
  {
    id: 'essential-vocab-2',
    title: 'Essential Vocabulary 2',
    titleFr: 'Vocabulaire Essentiel 2',
    description: 'More common words and expressions',
    descriptionFr: 'Plus de mots et expressions courants',
    difficulty: 'easy',
    cards: [
      { id: 1, front: 'Although', back: 'Bien que / Même si', example: 'Although it was raining, we went out.', exampleTranslation: "Bien qu'il pleuvait, nous sommes sortis.", category: 'vocabulary' },
      { id: 2, front: 'However', back: 'Cependant / Toutefois', example: 'However, I disagree with you.', exampleTranslation: "Cependant, je ne suis pas d'accord avec vous.", category: 'vocabulary' },
      { id: 3, front: 'Therefore', back: 'Par conséquent / Donc', example: 'Therefore, we need to act now.', exampleTranslation: 'Par conséquent, nous devons agir maintenant.', category: 'vocabulary' },
      { id: 4, front: 'Furthermore', back: 'De plus / En outre', example: 'Furthermore, the price is too high.', exampleTranslation: 'De plus, le prix est trop élevé.', category: 'vocabulary' },
      { id: 5, front: 'Nevertheless', back: 'Néanmoins / Toutefois', example: 'Nevertheless, she succeeded.', exampleTranslation: 'Néanmoins, elle a réussi.', category: 'vocabulary' },
      { id: 6, front: 'Whereas', back: 'Tandis que / Alors que', example: 'He is tall, whereas she is short.', exampleTranslation: 'Il est grand, tandis qu\'elle est petite.', category: 'vocabulary' },
      { id: 7, front: 'Meanwhile', back: 'Pendant ce temps', example: 'Meanwhile, I was waiting outside.', exampleTranslation: "Pendant ce temps, j'attendais dehors.", category: 'vocabulary' },
      { id: 8, front: 'Otherwise', back: 'Sinon / Autrement', example: 'Hurry up, otherwise we\'ll be late.', exampleTranslation: 'Dépêche-toi, sinon nous serons en retard.', category: 'vocabulary' },
      { id: 9, front: 'Somehow', back: 'D\'une façon ou d\'une autre', example: 'Somehow, he managed to escape.', exampleTranslation: "D'une façon ou d'une autre, il a réussi à s'échapper.", category: 'vocabulary' },
      { id: 10, front: 'Somewhat', back: 'Quelque peu / Un peu', example: 'I was somewhat surprised.', exampleTranslation: "J'étais quelque peu surpris.", category: 'vocabulary' }
    ]
  },
  {
    id: 'false-friends-1',
    title: 'False Friends 1',
    titleFr: 'Faux Amis 1',
    description: 'Words that look similar in French but have different meanings',
    descriptionFr: 'Mots qui ressemblent au français mais ont des sens différents',
    difficulty: 'medium',
    cards: [
      { id: 1, front: 'Library', back: 'Bibliothèque (NOT librairie)', example: 'I borrowed this book from the library.', exampleTranslation: "J'ai emprunté ce livre à la bibliothèque.", category: 'vocabulary' },
      { id: 2, front: 'Attend', back: 'Assister à (NOT attendre)', example: 'I will attend the meeting.', exampleTranslation: "J'assisterai à la réunion.", category: 'vocabulary' },
      { id: 3, front: 'Actually', back: 'En fait (NOT actuellement)', example: 'Actually, I changed my mind.', exampleTranslation: "En fait, j'ai changé d'avis.", category: 'vocabulary' },
      { id: 4, front: 'Eventually', back: 'Finalement (NOT éventuellement)', example: 'Eventually, they arrived.', exampleTranslation: 'Finalement, ils sont arrivés.', category: 'vocabulary' },
      { id: 5, front: 'Sympathetic', back: 'Compatissant (NOT sympathique)', example: 'She was very sympathetic when I told her.', exampleTranslation: "Elle était très compatissante quand je lui ai dit.", category: 'vocabulary' },
      { id: 6, front: 'Comprehensive', back: 'Complet (NOT compréhensif)', example: 'This is a comprehensive report.', exampleTranslation: "C'est un rapport complet.", category: 'vocabulary' },
      { id: 7, front: 'Delay', back: 'Retard (NOT délai)', example: 'The flight has a two-hour delay.', exampleTranslation: 'Le vol a deux heures de retard.', category: 'vocabulary' },
      { id: 8, front: 'Resume', back: 'Reprendre (NOT résumer)', example: 'We will resume after lunch.', exampleTranslation: 'Nous reprendrons après le déjeuner.', category: 'vocabulary' },
      { id: 9, front: 'Achieve', back: 'Accomplir/Réussir (NOT achever)', example: 'She achieved her goals.', exampleTranslation: 'Elle a atteint ses objectifs.', category: 'vocabulary' },
      { id: 10, front: 'Pretend', back: 'Faire semblant (NOT prétendre)', example: 'He pretended to be asleep.', exampleTranslation: 'Il faisait semblant de dormir.', category: 'vocabulary' }
    ]
  },
  {
    id: 'false-friends-2',
    title: 'False Friends 2',
    titleFr: 'Faux Amis 2',
    description: 'More tricky false cognates',
    descriptionFr: 'Plus de faux amis difficiles',
    difficulty: 'medium',
    cards: [
      { id: 1, front: 'Coin', back: 'Pièce de monnaie (NOT coin)', example: 'I found a coin on the ground.', exampleTranslation: 'J\'ai trouvé une pièce par terre.', category: 'vocabulary' },
      { id: 2, front: 'Location', back: 'Emplacement (NOT location)', example: 'This is a great location for a shop.', exampleTranslation: "C'est un excellent emplacement pour un magasin.", category: 'vocabulary' },
      { id: 3, front: 'Figure', back: 'Chiffre/Silhouette (NOT figure)', example: 'The sales figures are good.', exampleTranslation: 'Les chiffres de ventes sont bons.', category: 'vocabulary' },
      { id: 4, front: 'Degree', back: 'Diplôme/Degré (NOT dégré)', example: 'She has a degree in economics.', exampleTranslation: "Elle a un diplôme en économie.", category: 'vocabulary' },
      { id: 5, front: 'Abuse', back: 'Mauvais traitement (NOT abus)', example: 'Child abuse is a serious crime.', exampleTranslation: 'La maltraitance des enfants est un crime grave.', category: 'vocabulary' },
      { id: 6, front: 'Bless', back: 'Bénir (NOT blesser)', example: 'May God bless you.', exampleTranslation: 'Que Dieu vous bénisse.', category: 'vocabulary' },
      { id: 7, front: 'Journey', back: 'Voyage/Trajet (NOT journée)', example: 'The journey takes two hours.', exampleTranslation: 'Le trajet dure deux heures.', category: 'vocabulary' },
      { id: 8, front: 'Affair', back: 'Aventure/Liaison (NOT affaire)', example: 'He had an affair with his colleague.', exampleTranslation: 'Il a eu une liaison avec sa collègue.', category: 'vocabulary' },
      { id: 9, front: 'Store', back: 'Magasin (NOT store)', example: 'There\'s a store on the corner.', exampleTranslation: 'Il y a un magasin au coin.', category: 'vocabulary' },
      { id: 10, front: 'Character', back: 'Personnage (NOT caractère)', example: 'She played the main character.', exampleTranslation: 'Elle jouait le personnage principal.', category: 'vocabulary' }
    ]
  },
  {
    id: 'business-english-1',
    title: 'Business English',
    titleFr: 'Anglais des Affaires',
    description: 'Essential business vocabulary',
    descriptionFr: 'Vocabulaire essentiel des affaires',
    difficulty: 'hard',
    cards: [
      { id: 1, front: 'Revenue', back: 'Chiffre d\'affaires / Revenus', example: 'The company\'s revenue increased by 20%.', exampleTranslation: "Le chiffre d'affaires de l'entreprise a augmenté de 20%.", category: 'vocabulary' },
      { id: 2, front: 'Turnover', back: 'Rotation / Chiffre d\'affaires', example: 'Staff turnover is high in this industry.', exampleTranslation: 'La rotation du personnel est élevée dans ce secteur.', category: 'vocabulary' },
      { id: 3, front: 'Stakeholder', back: 'Partie prenante', example: 'We must consider all stakeholders.', exampleTranslation: 'Nous devons considérer toutes les parties prenantes.', category: 'vocabulary' },
      { id: 4, front: 'Leverage', back: 'Effet de levier / Exploiter', example: 'We need to leverage our strengths.', exampleTranslation: 'Nous devons exploiter nos forces.', category: 'vocabulary' },
      { id: 5, front: 'Benchmark', back: 'Référence / Point de comparaison', example: 'This is the industry benchmark.', exampleTranslation: "C'est la référence du secteur.", category: 'vocabulary' },
      { id: 6, front: 'Deadline', back: 'Date limite / Échéance', example: 'The deadline is next Friday.', exampleTranslation: "La date limite est vendredi prochain.", category: 'vocabulary' },
      { id: 7, front: 'Feedback', back: 'Retour / Commentaires', example: 'Can you give me some feedback?', exampleTranslation: 'Peux-tu me donner ton avis?', category: 'vocabulary' },
      { id: 8, front: 'Scalable', back: 'Évolutif / Adaptable', example: 'We need a scalable solution.', exampleTranslation: 'Nous avons besoin d\'une solution évolutive.', category: 'vocabulary' },
      { id: 9, front: 'Streamline', back: 'Rationaliser / Simplifier', example: 'We need to streamline our processes.', exampleTranslation: 'Nous devons rationaliser nos processus.', category: 'vocabulary' },
      { id: 10, front: 'Bottom line', back: 'Résultat net / L\'essentiel', example: 'The bottom line is we need more sales.', exampleTranslation: "L'essentiel est que nous avons besoin de plus de ventes.", category: 'vocabulary' }
    ]
  },
  {
    id: 'advanced-vocab-1',
    title: 'Advanced Vocabulary',
    titleFr: 'Vocabulaire Avancé',
    description: 'Sophisticated words for fluent speakers',
    descriptionFr: 'Mots sophistiqués pour locuteurs avancés',
    difficulty: 'hard',
    cards: [
      { id: 1, front: 'Ubiquitous', back: 'Omniprésent', example: 'Smartphones are now ubiquitous.', exampleTranslation: 'Les smartphones sont maintenant omniprésents.', category: 'vocabulary' },
      { id: 2, front: 'Serendipity', back: 'Hasard heureux / Sérendipité', example: 'It was pure serendipity.', exampleTranslation: "C'était un pur hasard heureux.", category: 'vocabulary' },
      { id: 3, front: 'Ephemeral', back: 'Éphémère', example: 'Fame can be ephemeral.', exampleTranslation: 'La gloire peut être éphémère.', category: 'vocabulary' },
      { id: 4, front: 'Meticulous', back: 'Méticuleux', example: 'She is meticulous about details.', exampleTranslation: 'Elle est méticuleuse dans les détails.', category: 'vocabulary' },
      { id: 5, front: 'Eloquent', back: 'Éloquent', example: 'He gave an eloquent speech.', exampleTranslation: 'Il a prononcé un discours éloquent.', category: 'vocabulary' },
      { id: 6, front: 'Pragmatic', back: 'Pragmatique', example: 'We need a pragmatic approach.', exampleTranslation: 'Nous avons besoin d\'une approche pragmatique.', category: 'vocabulary' },
      { id: 7, front: 'Resilient', back: 'Résilient', example: 'Children are often resilient.', exampleTranslation: 'Les enfants sont souvent résilients.', category: 'vocabulary' },
      { id: 8, front: 'Nuance', back: 'Nuance', example: 'There are many nuances to consider.', exampleTranslation: 'Il y a de nombreuses nuances à considérer.', category: 'vocabulary' },
      { id: 9, front: 'Ambiguous', back: 'Ambigu', example: 'The instructions are ambiguous.', exampleTranslation: 'Les instructions sont ambiguës.', category: 'vocabulary' },
      { id: 10, front: 'Conundrum', back: 'Énigme / Dilemme', example: 'This is quite a conundrum.', exampleTranslation: "C'est un vrai dilemme.", category: 'vocabulary' }
    ]
  }
];
