export interface StoryNode {
  id: string;
  text: string;
  textFr: string;
  choices?: {
    text: string;
    textFr: string;
    nextId: string;
  }[];
  isEnding?: boolean;
  endingType?: 'good' | 'neutral' | 'bad';
}

export interface InteractiveStory {
  id: number;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  difficulty: 'easy' | 'medium' | 'hard';
  theme: string;
  themeFr: string;
  estimatedTime: number; // minutes
  totalEndings: number;
  nodes: Record<string, StoryNode>;
  startNodeId: string;
}

export const interactiveStories: InteractiveStory[] = [
  {
    id: 1,
    title: "A Weekend in London",
    titleFr: "Un week-end à Londres",
    description: "You arrive in London for a weekend trip. Make choices to explore the city and have an adventure!",
    descriptionFr: "Vous arrivez à Londres pour un week-end. Faites des choix pour explorer la ville et vivre une aventure !",
    difficulty: 'easy',
    theme: "Travel",
    themeFr: "Voyage",
    estimatedTime: 10,
    totalEndings: 5,
    startNodeId: "start",
    nodes: {
      "start": {
        id: "start",
        text: "You arrive at London Heathrow Airport on a sunny Friday morning. You have two days to explore the city. Outside the airport, you see a taxi stand and signs for the Underground (the metro).",
        textFr: "Vous arrivez à l'aéroport de Londres Heathrow par un vendredi matin ensoleillé. Vous avez deux jours pour explorer la ville. À l'extérieur de l'aéroport, vous voyez une station de taxis et des panneaux pour le métro (Underground).",
        choices: [
          { text: "Take a taxi to the hotel", textFr: "Prendre un taxi pour l'hôtel", nextId: "taxi" },
          { text: "Take the Underground", textFr: "Prendre le métro", nextId: "underground" }
        ]
      },
      "taxi": {
        id: "taxi",
        text: "You get into a black London taxi. The driver is very friendly. \"First time in London?\" he asks. He offers to show you some sights on the way to your hotel.",
        textFr: "Vous montez dans un taxi noir londonien. Le chauffeur est très sympathique. « C'est votre première fois à Londres ? » demande-t-il. Il propose de vous montrer quelques sites sur le chemin de votre hôtel.",
        choices: [
          { text: "\"Yes please! Show me around.\"", textFr: "« Oui s'il vous plaît ! Faites-moi visiter. »", nextId: "taxi_tour" },
          { text: "\"No thanks, I'm tired. Straight to the hotel please.\"", textFr: "« Non merci, je suis fatigué. Directement à l'hôtel s'il vous plaît. »", nextId: "hotel_rest" }
        ]
      },
      "underground": {
        id: "underground",
        text: "You go down to the Underground station. It's very busy with many people. You need to buy an Oyster card for the trains. A young woman sees you looking confused at the ticket machine.",
        textFr: "Vous descendez à la station de métro. C'est très animé avec beaucoup de monde. Vous devez acheter une carte Oyster pour les trains. Une jeune femme vous voit l'air confus devant le distributeur de billets.",
        choices: [
          { text: "Ask her for help", textFr: "Lui demander de l'aide", nextId: "help_woman" },
          { text: "Try to figure it out yourself", textFr: "Essayer de comprendre par vous-même", nextId: "figure_out" }
        ]
      },
      "taxi_tour": {
        id: "taxi_tour",
        text: "The taxi driver takes you past Big Ben, Westminster Abbey, and Buckingham Palace. \"Look! The guards are changing!\" he says. You take many photos. At the hotel, he gives you his card. \"Call me if you need a tour guide!\"",
        textFr: "Le chauffeur de taxi vous fait passer devant Big Ben, l'abbaye de Westminster et le palais de Buckingham. « Regardez ! La relève de la garde ! » dit-il. Vous prenez beaucoup de photos. À l'hôtel, il vous donne sa carte. « Appelez-moi si vous avez besoin d'un guide ! »",
        choices: [
          { text: "Rest at the hotel, then explore alone", textFr: "Se reposer à l'hôtel, puis explorer seul", nextId: "explore_alone" },
          { text: "Call the taxi driver for a tour tomorrow", textFr: "Appeler le chauffeur de taxi pour une visite demain", nextId: "guided_tour" }
        ]
      },
      "hotel_rest": {
        id: "hotel_rest",
        text: "You arrive at your hotel and take a long nap. When you wake up, it's late afternoon. You're hungry and want to explore.",
        textFr: "Vous arrivez à votre hôtel et faites une longue sieste. Quand vous vous réveillez, c'est la fin de l'après-midi. Vous avez faim et voulez explorer.",
        choices: [
          { text: "Go to a famous fish and chips restaurant nearby", textFr: "Aller dans un célèbre restaurant de fish and chips à proximité", nextId: "fish_chips" },
          { text: "Ask the hotel receptionist for recommendations", textFr: "Demander des recommandations au réceptionniste de l'hôtel", nextId: "receptionist" }
        ]
      },
      "help_woman": {
        id: "help_woman",
        text: "\"Excuse me, can you help me?\" The woman smiles. \"Of course! First time in London? I'm Sarah.\" She helps you buy an Oyster card and you start talking. She's a student and knows the city well.",
        textFr: "« Excusez-moi, pouvez-vous m'aider ? » La femme sourit. « Bien sûr ! C'est votre première fois à Londres ? Je suis Sarah. » Elle vous aide à acheter une carte Oyster et vous commencez à parler. C'est une étudiante et elle connaît bien la ville.",
        choices: [
          { text: "Ask Sarah to show you around", textFr: "Demander à Sarah de vous faire visiter", nextId: "sarah_guide" },
          { text: "Thank her and go alone", textFr: "La remercier et y aller seul", nextId: "explore_alone" }
        ]
      },
      "figure_out": {
        id: "figure_out",
        text: "After 15 minutes, you finally understand the machine. You buy an Oyster card and take the Piccadilly Line to central London. You're proud of yourself!",
        textFr: "Après 15 minutes, vous comprenez enfin la machine. Vous achetez une carte Oyster et prenez la ligne Piccadilly vers le centre de Londres. Vous êtes fier de vous !",
        choices: [
          { text: "Go directly to your hotel", textFr: "Aller directement à votre hôtel", nextId: "hotel_rest" },
          { text: "Stop at Covent Garden first", textFr: "S'arrêter d'abord à Covent Garden", nextId: "covent_garden" }
        ]
      },
      "explore_alone": {
        id: "explore_alone",
        text: "You walk along the Thames River. The sunset is beautiful. You see the London Eye, a giant Ferris wheel. There's a long queue but it looks amazing.",
        textFr: "Vous marchez le long de la Tamise. Le coucher de soleil est magnifique. Vous voyez le London Eye, une grande roue géante. Il y a une longue file d'attente mais ça a l'air incroyable.",
        choices: [
          { text: "Queue for the London Eye", textFr: "Faire la queue pour le London Eye", nextId: "london_eye" },
          { text: "Find a pub by the river instead", textFr: "Trouver un pub au bord de la rivière plutôt", nextId: "river_pub" }
        ]
      },
      "guided_tour": {
        id: "guided_tour",
        text: "The next day, the taxi driver Mike takes you everywhere: the Tower of London, Tower Bridge, and a hidden market that only locals know. At the end of the day, you feel like you've really discovered London.",
        textFr: "Le lendemain, le chauffeur de taxi Mike vous emmène partout : la Tour de Londres, Tower Bridge, et un marché caché que seuls les locaux connaissent. À la fin de la journée, vous avez l'impression d'avoir vraiment découvert Londres.",
        isEnding: true,
        endingType: 'good'
      },
      "fish_chips": {
        id: "fish_chips",
        text: "The fish and chips are delicious! You sit outside and watch people walk by. A street musician plays guitar nearby. This is the real London experience.",
        textFr: "Le fish and chips est délicieux ! Vous vous asseyez dehors et regardez les gens passer. Un musicien de rue joue de la guitare à proximité. C'est la vraie expérience londonienne.",
        choices: [
          { text: "Give some money to the musician", textFr: "Donner de l'argent au musicien", nextId: "musician" },
          { text: "Walk to see Big Ben", textFr: "Marcher pour voir Big Ben", nextId: "big_ben" }
        ]
      },
      "receptionist": {
        id: "receptionist",
        text: "The receptionist, James, suggests a small Italian restaurant around the corner. \"It's not traditional British food, but it's the best in the area!\" He also gives you a map with his favorite places marked.",
        textFr: "Le réceptionniste, James, vous suggère un petit restaurant italien au coin de la rue. « Ce n'est pas de la cuisine britannique traditionnelle, mais c'est le meilleur du quartier ! » Il vous donne aussi une carte avec ses endroits préférés marqués.",
        choices: [
          { text: "Follow his map tomorrow", textFr: "Suivre sa carte demain", nextId: "james_map" },
          { text: "Go to the Italian restaurant now", textFr: "Aller au restaurant italien maintenant", nextId: "italian_food" }
        ]
      },
      "sarah_guide": {
        id: "sarah_guide",
        text: "Sarah takes you to places tourists never find: a secret bookshop, a rooftop garden, and her favorite café. You exchange phone numbers. \"If you ever come back to London, call me!\" she says. You've made a new friend.",
        textFr: "Sarah vous emmène dans des endroits que les touristes ne trouvent jamais : une librairie secrète, un jardin sur le toit, et son café préféré. Vous échangez vos numéros de téléphone. « Si tu reviens un jour à Londres, appelle-moi ! » dit-elle. Vous vous êtes fait un nouvel ami.",
        isEnding: true,
        endingType: 'good'
      },
      "covent_garden": {
        id: "covent_garden",
        text: "Covent Garden is full of life! Street performers, beautiful shops, and the smell of fresh coffee. You watch a magician do amazing tricks. A couple next to you starts talking to you.",
        textFr: "Covent Garden est plein de vie ! Des artistes de rue, de belles boutiques, et l'odeur du café frais. Vous regardez un magicien faire des tours incroyables. Un couple à côté de vous commence à vous parler.",
        choices: [
          { text: "Have a drink with the couple", textFr: "Prendre un verre avec le couple", nextId: "couple_drink" },
          { text: "Continue exploring alone", textFr: "Continuer à explorer seul", nextId: "explore_alone" }
        ]
      },
      "london_eye": {
        id: "london_eye",
        text: "The wait was worth it! From the top of the London Eye, you can see all of London. The city lights begin to turn on. It's magical. You take the best photos of your trip.",
        textFr: "L'attente en valait la peine ! Du haut du London Eye, vous pouvez voir tout Londres. Les lumières de la ville commencent à s'allumer. C'est magique. Vous prenez les meilleures photos de votre voyage.",
        isEnding: true,
        endingType: 'good'
      },
      "river_pub": {
        id: "river_pub",
        text: "You find a cozy pub with a view of Tower Bridge. You order a pint of British ale and chat with the friendly bartender. The bridge lights up as the sun sets. Perfect ending to a perfect day.",
        textFr: "Vous trouvez un pub confortable avec vue sur Tower Bridge. Vous commandez une pinte de bière anglaise et discutez avec le sympathique barman. Le pont s'illumine au coucher du soleil. Fin parfaite d'une journée parfaite.",
        isEnding: true,
        endingType: 'good'
      },
      "musician": {
        id: "musician",
        text: "The musician thanks you and plays your favorite song when you tell him what it is. Other people stop to listen. It becomes a small street concert! Everyone claps and laughs together.",
        textFr: "Le musicien vous remercie et joue votre chanson préférée quand vous lui dites ce que c'est. D'autres personnes s'arrêtent pour écouter. Ça devient un petit concert de rue ! Tout le monde applaudit et rit ensemble.",
        choices: [
          { text: "Stay and listen more", textFr: "Rester et écouter plus", nextId: "street_concert" },
          { text: "Continue your walk", textFr: "Continuer votre promenade", nextId: "big_ben" }
        ]
      },
      "big_ben": {
        id: "big_ben",
        text: "Big Ben is even more impressive in person. You stand there for a long time, just looking. A Japanese tourist asks you to take his photo. He takes yours in return. \"Have a good trip!\" he says.",
        textFr: "Big Ben est encore plus impressionnant en personne. Vous restez là longtemps, à regarder. Un touriste japonais vous demande de le prendre en photo. Il prend la vôtre en retour. « Bon voyage ! » dit-il.",
        isEnding: true,
        endingType: 'neutral'
      },
      "james_map": {
        id: "james_map",
        text: "Following James's map, you discover the real London: a vintage market, street art in Shoreditch, and the most amazing Sunday roast dinner. When you leave, you feel like you know the city like a local.",
        textFr: "En suivant la carte de James, vous découvrez le vrai Londres : un marché vintage, du street art à Shoreditch, et le plus incroyable dîner de Sunday roast. Quand vous partez, vous avez l'impression de connaître la ville comme un local.",
        isEnding: true,
        endingType: 'good'
      },
      "italian_food": {
        id: "italian_food",
        text: "The Italian restaurant is wonderful. The owner, Marco, came to London from Naples 20 years ago. He tells you stories about the city while you eat the best pasta of your life.",
        textFr: "Le restaurant italien est merveilleux. Le propriétaire, Marco, est venu à Londres depuis Naples il y a 20 ans. Il vous raconte des histoires sur la ville pendant que vous mangez les meilleures pâtes de votre vie.",
        choices: [
          { text: "Come back tomorrow for dinner again", textFr: "Revenir demain pour dîner à nouveau", nextId: "marco_friend" },
          { text: "Ask Marco for recommendations", textFr: "Demander des recommandations à Marco", nextId: "james_map" }
        ]
      },
      "couple_drink": {
        id: "couple_drink",
        text: "Tom and Lisa are from Australia, also tourists. You spend the evening together, sharing travel stories and laughing. You plan to meet them tomorrow at a famous market.",
        textFr: "Tom et Lisa viennent d'Australie, aussi touristes. Vous passez la soirée ensemble, partageant des histoires de voyage et riant. Vous prévoyez de les retrouver demain dans un célèbre marché.",
        isEnding: true,
        endingType: 'good'
      },
      "street_concert": {
        id: "street_concert",
        text: "The concert continues until late. You dance with strangers who become friends for the night. When the musician packs up, everyone exchanges social media. It's the most unexpected and wonderful evening!",
        textFr: "Le concert continue jusqu'à tard. Vous dansez avec des inconnus qui deviennent des amis pour la soirée. Quand le musicien remballe, tout le monde échange ses réseaux sociaux. C'est la soirée la plus inattendue et merveilleuse !",
        isEnding: true,
        endingType: 'good'
      },
      "marco_friend": {
        id: "marco_friend",
        text: "You become a regular at Marco's restaurant during your short trip. On your last night, he doesn't let you pay. \"You're not a customer anymore,\" he says, \"you're family.\" You promise to return next year.",
        textFr: "Vous devenez un habitué du restaurant de Marco pendant votre court séjour. La dernière nuit, il ne vous laisse pas payer. « Tu n'es plus un client, » dit-il, « tu fais partie de la famille. » Vous promettez de revenir l'année prochaine.",
        isEnding: true,
        endingType: 'good'
      }
    }
  }
];
