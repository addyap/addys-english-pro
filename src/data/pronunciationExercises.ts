export interface PronunciationExercise {
  id: number;
  title: string;
  description: string;
  pairs: {
    id: number;
    word1: string;
    word2: string;
    phonetic1: string;
    phonetic2: string;
    soundDifference: string;
    example1: string;
    example2: string;
    translation1: string;
    translation2: string;
  }[];
  questions: {
    id: number;
    sentence: string;
    correctWord: string;
    options: string[];
    explanation: string;
    translation: string;
  }[];
}

export const pronunciationExercises: PronunciationExercise[] = [
  {
    id: 1,
    title: "Minimal Pairs (1) : /ɪ/ vs /iː/ (ship vs sheep)",
    description: "Distinguez les sons courts et longs : /ɪ/ (bit) vs /iː/ (beat).",
    pairs: [
      { id: 1, word1: "ship", word2: "sheep", phonetic1: "/ʃɪp/", phonetic2: "/ʃiːp/", soundDifference: "/ɪ/ vs /iː/", example1: "The ship sailed across the ocean.", example2: "The sheep is eating grass.", translation1: "Le navire a traversé l'océan.", translation2: "Le mouton mange de l'herbe." },
      { id: 2, word1: "bit", word2: "beat", phonetic1: "/bɪt/", phonetic2: "/biːt/", soundDifference: "/ɪ/ vs /iː/", example1: "I bit into the apple.", example2: "They beat the other team.", translation1: "J'ai mordu dans la pomme.", translation2: "Ils ont battu l'autre équipe." },
      { id: 3, word1: "sit", word2: "seat", phonetic1: "/sɪt/", phonetic2: "/siːt/", soundDifference: "/ɪ/ vs /iː/", example1: "Please sit down.", example2: "This is my seat.", translation1: "Veuillez vous asseoir.", translation2: "C'est ma place." },
      { id: 4, word1: "hit", word2: "heat", phonetic1: "/hɪt/", phonetic2: "/hiːt/", soundDifference: "/ɪ/ vs /iː/", example1: "He hit the ball.", example2: "The heat is intense.", translation1: "Il a frappé la balle.", translation2: "La chaleur est intense." },
      { id: 5, word1: "fill", word2: "feel", phonetic1: "/fɪl/", phonetic2: "/fiːl/", soundDifference: "/ɪ/ vs /iː/", example1: "Fill the glass with water.", example2: "I feel tired today.", translation1: "Remplis le verre d'eau.", translation2: "Je me sens fatigué aujourd'hui." }
    ],
    questions: [
      { id: 1, sentence: "The ___ crossed the Atlantic in two weeks.", correctWord: "ship", options: ["ship", "sheep"], explanation: "Ship (navire) - /ʃɪp/ with short vowel.", translation: "Le navire a traversé l'Atlantique en deux semaines." },
      { id: 2, sentence: "I can ___ the music from here.", correctWord: "hear", options: ["hear", "here"], explanation: "Hear (entendre) - /hɪə/ - to perceive sound.", translation: "Je peux entendre la musique d'ici." },
      { id: 3, sentence: "Please take a ___ in the waiting room.", correctWord: "seat", options: ["sit", "seat"], explanation: "Seat (siège) - /siːt/ with long vowel - noun.", translation: "Veuillez prendre un siège dans la salle d'attente." },
      { id: 4, sentence: "The farmer has twenty ___ on his farm.", correctWord: "sheep", options: ["ship", "sheep"], explanation: "Sheep (mouton) - /ʃiːp/ with long vowel.", translation: "Le fermier a vingt moutons dans sa ferme." },
      { id: 5, sentence: "How do you ___ about the decision?", correctWord: "feel", options: ["fill", "feel"], explanation: "Feel (ressentir) - /fiːl/ with long vowel - emotion verb.", translation: "Que ressentez-vous par rapport à la décision ?" },
      { id: 6, sentence: "The dog ___ the mailman yesterday.", correctWord: "bit", options: ["bit", "beat"], explanation: "Bit (mordu) - /bɪt/ - past of bite.", translation: "Le chien a mordu le facteur hier." },
      { id: 7, sentence: "Please ___ down on the chair.", correctWord: "sit", options: ["sit", "seat"], explanation: "Sit (s'asseoir) - /sɪt/ with short vowel - verb.", translation: "Veuillez vous asseoir sur la chaise." },
      { id: 8, sentence: "The summer ___ is unbearable.", correctWord: "heat", options: ["hit", "heat"], explanation: "Heat (chaleur) - /hiːt/ with long vowel.", translation: "La chaleur estivale est insupportable." },
      { id: 9, sentence: "Can you ___ this form for me?", correctWord: "fill", options: ["fill", "feel"], explanation: "Fill (remplir) - /fɪl/ with short vowel.", translation: "Peux-tu remplir ce formulaire pour moi ?" },
      { id: 10, sentence: "Our team ___ them 3-0.", correctWord: "beat", options: ["bit", "beat"], explanation: "Beat (battre) - /biːt/ - past tense of beat (irregular).", translation: "Notre équipe les a battus 3-0." }
    ]
  },
  {
    id: 2,
    title: "Minimal Pairs (2) : /e/ vs /æ/ (bed vs bad)",
    description: "Distinguez les sons /e/ (pen) vs /æ/ (pan).",
    pairs: [
      { id: 1, word1: "bed", word2: "bad", phonetic1: "/bed/", phonetic2: "/bæd/", soundDifference: "/e/ vs /æ/", example1: "I sleep in my bed.", example2: "That's a bad idea.", translation1: "Je dors dans mon lit.", translation2: "C'est une mauvaise idée." },
      { id: 2, word1: "pen", word2: "pan", phonetic1: "/pen/", phonetic2: "/pæn/", soundDifference: "/e/ vs /æ/", example1: "Write with a pen.", example2: "Cook in a pan.", translation1: "Écris avec un stylo.", translation2: "Cuisine dans une poêle." },
      { id: 3, word1: "men", word2: "man", phonetic1: "/men/", phonetic2: "/mæn/", soundDifference: "/e/ vs /æ/", example1: "The men are working.", example2: "The man is reading.", translation1: "Les hommes travaillent.", translation2: "L'homme lit." },
      { id: 4, word1: "set", word2: "sat", phonetic1: "/set/", phonetic2: "/sæt/", soundDifference: "/e/ vs /æ/", example1: "Set the table.", example2: "He sat down.", translation1: "Mets la table.", translation2: "Il s'est assis." },
      { id: 5, word1: "left", word2: "laughed", phonetic1: "/left/", phonetic2: "/lɑːft/", soundDifference: "/e/ vs /ɑː/", example1: "Turn left.", example2: "She laughed loudly.", translation1: "Tournez à gauche.", translation2: "Elle a ri bruyamment." }
    ],
    questions: [
      { id: 1, sentence: "I need to go to ___ early tonight.", correctWord: "bed", options: ["bed", "bad"], explanation: "Bed (lit) - /bed/ - where you sleep.", translation: "Je dois aller au lit tôt ce soir." },
      { id: 2, sentence: "That was a really ___ movie.", correctWord: "bad", options: ["bed", "bad"], explanation: "Bad (mauvais) - /bæd/ - adjective.", translation: "C'était un très mauvais film." },
      { id: 3, sentence: "Can I borrow your ___?", correctWord: "pen", options: ["pen", "pan"], explanation: "Pen (stylo) - /pen/ - writing instrument.", translation: "Puis-je emprunter ton stylo ?" },
      { id: 4, sentence: "Heat the oil in the ___.", correctWord: "pan", options: ["pen", "pan"], explanation: "Pan (poêle) - /pæn/ - cooking utensil.", translation: "Chauffez l'huile dans la poêle." },
      { id: 5, sentence: "Three ___ entered the room.", correctWord: "men", options: ["men", "man"], explanation: "Men (hommes) - /men/ - plural of man.", translation: "Trois hommes sont entrés dans la pièce." },
      { id: 6, sentence: "The ___ is wearing a blue suit.", correctWord: "man", options: ["men", "man"], explanation: "Man (homme) - /mæn/ - singular.", translation: "L'homme porte un costume bleu." },
      { id: 7, sentence: "She ___ the alarm for 7 AM.", correctWord: "set", options: ["set", "sat"], explanation: "Set (régler) - /set/ - to adjust or configure.", translation: "Elle a réglé l'alarme pour 7h." },
      { id: 8, sentence: "He ___ on the bench for an hour.", correctWord: "sat", options: ["set", "sat"], explanation: "Sat (s'est assis) - /sæt/ - past of sit.", translation: "Il s'est assis sur le banc pendant une heure." },
      { id: 9, sentence: "Turn ___ at the traffic lights.", correctWord: "left", options: ["left", "laughed"], explanation: "Left (gauche) - /left/ - direction.", translation: "Tournez à gauche aux feux." },
      { id: 10, sentence: "Everyone ___ at his joke.", correctWord: "laughed", options: ["left", "laughed"], explanation: "Laughed (ri) - /lɑːft/ - past of laugh.", translation: "Tout le monde a ri de sa blague." }
    ]
  },
  {
    id: 3,
    title: "Minimal Pairs (3) : /ʌ/ vs /ɑː/ (cup vs car)",
    description: "Distinguez les sons /ʌ/ (cut) vs /ɑː/ (cart).",
    pairs: [
      { id: 1, word1: "cup", word2: "carp", phonetic1: "/kʌp/", phonetic2: "/kɑːp/", soundDifference: "/ʌ/ vs /ɑː/", example1: "A cup of tea.", example2: "A carp is a fish.", translation1: "Une tasse de thé.", translation2: "Une carpe est un poisson." },
      { id: 2, word1: "cut", word2: "cart", phonetic1: "/kʌt/", phonetic2: "/kɑːt/", soundDifference: "/ʌ/ vs /ɑː/", example1: "Cut the bread.", example2: "Push the cart.", translation1: "Coupe le pain.", translation2: "Pousse le chariot." },
      { id: 3, word1: "hut", word2: "heart", phonetic1: "/hʌt/", phonetic2: "/hɑːt/", soundDifference: "/ʌ/ vs /ɑː/", example1: "A wooden hut.", example2: "My heart beats fast.", translation1: "Une cabane en bois.", translation2: "Mon cœur bat vite." },
      { id: 4, word1: "luck", word2: "lark", phonetic1: "/lʌk/", phonetic2: "/lɑːk/", soundDifference: "/ʌ/ vs /ɑː/", example1: "Good luck!", example2: "The lark is singing.", translation1: "Bonne chance !", translation2: "L'alouette chante." },
      { id: 5, word1: "duck", word2: "dark", phonetic1: "/dʌk/", phonetic2: "/dɑːk/", soundDifference: "/ʌ/ vs /ɑː/", example1: "Feed the duck.", example2: "It's getting dark.", translation1: "Nourris le canard.", translation2: "Il commence à faire nuit." }
    ],
    questions: [
      { id: 1, sentence: "Would you like a ___ of coffee?", correctWord: "cup", options: ["cup", "cap"], explanation: "Cup (tasse) - /kʌp/ - container for drinks.", translation: "Voudriez-vous une tasse de café ?" },
      { id: 2, sentence: "Please ___ the paper in half.", correctWord: "cut", options: ["cut", "cart"], explanation: "Cut (couper) - /kʌt/ - verb.", translation: "Veuillez couper le papier en deux." },
      { id: 3, sentence: "The shopping ___ is full.", correctWord: "cart", options: ["cut", "cart"], explanation: "Cart (chariot) - /kɑːt/ - wheeled vehicle.", translation: "Le chariot de courses est plein." },
      { id: 4, sentence: "I love you with all my ___.", correctWord: "heart", options: ["hut", "heart"], explanation: "Heart (cœur) - /hɑːt/ - organ or symbol of love.", translation: "Je t'aime de tout mon cœur." },
      { id: 5, sentence: "They stayed in a small ___ by the lake.", correctWord: "hut", options: ["hut", "heart"], explanation: "Hut (cabane) - /hʌt/ - small dwelling.", translation: "Ils ont séjourné dans une petite cabane au bord du lac." },
      { id: 6, sentence: "Good ___ with your exam!", correctWord: "luck", options: ["luck", "lock"], explanation: "Luck (chance) - /lʌk/ - fortune.", translation: "Bonne chance pour ton examen !" },
      { id: 7, sentence: "Don't forget to ___ the door.", correctWord: "lock", options: ["luck", "lock"], explanation: "Lock (fermer à clé) - /lɒk/ - to secure.", translation: "N'oublie pas de fermer la porte à clé." },
      { id: 8, sentence: "The ___ swam in the pond.", correctWord: "duck", options: ["duck", "dark"], explanation: "Duck (canard) - /dʌk/ - water bird.", translation: "Le canard nageait dans l'étang." },
      { id: 9, sentence: "It's too ___ to see anything.", correctWord: "dark", options: ["duck", "dark"], explanation: "Dark (sombre) - /dɑːk/ - absence of light.", translation: "Il fait trop sombre pour voir quoi que ce soit." },
      { id: 10, sentence: "She has a beautiful ___.", correctWord: "heart", options: ["heart", "hurt"], explanation: "Heart (cœur) - metaphor for kindness.", translation: "Elle a un beau cœur." }
    ]
  },
  {
    id: 4,
    title: "Minimal Pairs (4) : /θ/ vs /ð/ (think vs this)",
    description: "Distinguez les sons 'th' : /θ/ (thing) vs /ð/ (that).",
    pairs: [
      { id: 1, word1: "think", word2: "this", phonetic1: "/θɪŋk/", phonetic2: "/ðɪs/", soundDifference: "/θ/ vs /ð/", example1: "I think so.", example2: "This is nice.", translation1: "Je pense que oui.", translation2: "C'est bien." },
      { id: 2, word1: "three", word2: "there", phonetic1: "/θriː/", phonetic2: "/ðeə/", soundDifference: "/θ/ vs /ð/", example1: "Three cats.", example2: "Over there.", translation1: "Trois chats.", translation2: "Là-bas." },
      { id: 3, word1: "mouth", word2: "smooth", phonetic1: "/maʊθ/", phonetic2: "/smuːð/", soundDifference: "/θ/ vs /ð/", example1: "Open your mouth.", example2: "A smooth surface.", translation1: "Ouvre la bouche.", translation2: "Une surface lisse." },
      { id: 4, word1: "bath", word2: "bathe", phonetic1: "/bɑːθ/", phonetic2: "/beɪð/", soundDifference: "/θ/ vs /ð/", example1: "Take a bath.", example2: "Bathe in the sun.", translation1: "Prends un bain.", translation2: "Se baigner au soleil." },
      { id: 5, word1: "cloth", word2: "clothe", phonetic1: "/klɒθ/", phonetic2: "/kləʊð/", soundDifference: "/θ/ vs /ð/", example1: "A piece of cloth.", example2: "Clothe the children.", translation1: "Un morceau de tissu.", translation2: "Habille les enfants." }
    ],
    questions: [
      { id: 1, sentence: "What do you ___ about the idea?", correctWord: "think", options: ["think", "thing"], explanation: "Think (penser) - /θɪŋk/ - verb.", translation: "Que penses-tu de cette idée ?" },
      { id: 2, sentence: "___ is my favorite book.", correctWord: "This", options: ["This", "Think"], explanation: "This (ceci) - /ðɪs/ - demonstrative.", translation: "Ceci est mon livre préféré." },
      { id: 3, sentence: "I have ___ brothers.", correctWord: "three", options: ["three", "there"], explanation: "Three (trois) - /θriː/ - number.", translation: "J'ai trois frères." },
      { id: 4, sentence: "The restaurant is over ___.", correctWord: "there", options: ["three", "there"], explanation: "There (là-bas) - /ðeə/ - location.", translation: "Le restaurant est là-bas." },
      { id: 5, sentence: "Please open your ___ and say 'ah'.", correctWord: "mouth", options: ["mouth", "mouse"], explanation: "Mouth (bouche) - /maʊθ/ - body part.", translation: "Veuillez ouvrir la bouche et dire 'ah'." },
      { id: 6, sentence: "The baby's skin is so ___.", correctWord: "smooth", options: ["smooth", "south"], explanation: "Smooth (lisse) - /smuːð/ - adjective.", translation: "La peau du bébé est si douce." },
      { id: 7, sentence: "Take a hot ___ before bed.", correctWord: "bath", options: ["bath", "bathe"], explanation: "Bath (bain) - /bɑːθ/ - noun.", translation: "Prends un bain chaud avant de te coucher." },
      { id: 8, sentence: "She likes to ___ in the sun.", correctWord: "bathe", options: ["bath", "bathe"], explanation: "Bathe (se baigner) - /beɪð/ - verb.", translation: "Elle aime se baigner au soleil." },
      { id: 9, sentence: "Use a clean ___ to wipe the table.", correctWord: "cloth", options: ["cloth", "close"], explanation: "Cloth (tissu) - /klɒθ/ - fabric.", translation: "Utilise un chiffon propre pour essuyer la table." },
      { id: 10, sentence: "___ weather conditions are expected.", correctWord: "These", options: ["These", "Theme"], explanation: "These (ces) - /ðiːz/ - plural demonstrative.", translation: "Ces conditions météorologiques sont attendues." }
    ]
  },
  {
    id: 5,
    title: "Minimal Pairs (5) : /v/ vs /w/ (vine vs wine)",
    description: "Distinguez les sons /v/ (vet) vs /w/ (wet).",
    pairs: [
      { id: 1, word1: "vine", word2: "wine", phonetic1: "/vaɪn/", phonetic2: "/waɪn/", soundDifference: "/v/ vs /w/", example1: "Grapes grow on a vine.", example2: "A glass of wine.", translation1: "Les raisins poussent sur une vigne.", translation2: "Un verre de vin." },
      { id: 2, word1: "vest", word2: "west", phonetic1: "/vest/", phonetic2: "/west/", soundDifference: "/v/ vs /w/", example1: "Wear a vest.", example2: "Go west.", translation1: "Porte un gilet.", translation2: "Va vers l'ouest." },
      { id: 3, word1: "vet", word2: "wet", phonetic1: "/vet/", phonetic2: "/wet/", soundDifference: "/v/ vs /w/", example1: "Take the cat to the vet.", example2: "The grass is wet.", translation1: "Emmène le chat chez le vétérinaire.", translation2: "L'herbe est mouillée." },
      { id: 4, word1: "vow", word2: "wow", phonetic1: "/vaʊ/", phonetic2: "/waʊ/", soundDifference: "/v/ vs /w/", example1: "Marriage vows.", example2: "Wow, that's amazing!", translation1: "Les vœux de mariage.", translation2: "Wow, c'est incroyable !" },
      { id: 5, word1: "verse", word2: "worse", phonetic1: "/vɜːs/", phonetic2: "/wɜːs/", soundDifference: "/v/ vs /w/", example1: "Read the first verse.", example2: "It could be worse.", translation1: "Lis le premier vers.", translation2: "Ça pourrait être pire." }
    ],
    questions: [
      { id: 1, sentence: "Would you like a glass of ___?", correctWord: "wine", options: ["vine", "wine"], explanation: "Wine (vin) - /waɪn/ - alcoholic drink.", translation: "Voulez-vous un verre de vin ?" },
      { id: 2, sentence: "Grapes grow on a ___.", correctWord: "vine", options: ["vine", "wine"], explanation: "Vine (vigne) - /vaɪn/ - plant.", translation: "Les raisins poussent sur une vigne." },
      { id: 3, sentence: "The sun sets in the ___.", correctWord: "west", options: ["vest", "west"], explanation: "West (ouest) - /west/ - direction.", translation: "Le soleil se couche à l'ouest." },
      { id: 4, sentence: "He wore a ___ under his jacket.", correctWord: "vest", options: ["vest", "west"], explanation: "Vest (gilet) - /vest/ - clothing.", translation: "Il portait un gilet sous sa veste." },
      { id: 5, sentence: "The dog is at the ___.", correctWord: "vet", options: ["vet", "wet"], explanation: "Vet (vétérinaire) - /vet/ - animal doctor.", translation: "Le chien est chez le vétérinaire." },
      { id: 6, sentence: "My shoes got ___ in the rain.", correctWord: "wet", options: ["vet", "wet"], explanation: "Wet (mouillé) - /wet/ - adjective.", translation: "Mes chaussures se sont mouillées sous la pluie." },
      { id: 7, sentence: "They exchanged their wedding ___s.", correctWord: "vows", options: ["vows", "wows"], explanation: "Vows (vœux) - /vaʊz/ - promises.", translation: "Ils ont échangé leurs vœux de mariage." },
      { id: 8, sentence: "___! That's impressive!", correctWord: "Wow", options: ["Vow", "Wow"], explanation: "Wow (exclamation) - /waʊ/ - surprise.", translation: "Wow ! C'est impressionnant !" },
      { id: 9, sentence: "Read the first ___ of the poem.", correctWord: "verse", options: ["verse", "worse"], explanation: "Verse (vers) - /vɜːs/ - line of poetry.", translation: "Lis le premier vers du poème." },
      { id: 10, sentence: "Things could be ___.", correctWord: "worse", options: ["verse", "worse"], explanation: "Worse (pire) - /wɜːs/ - comparative of bad.", translation: "Les choses pourraient être pires." }
    ]
  },
  {
    id: 6,
    title: "Minimal Pairs (6) : /l/ vs /r/ (light vs right)",
    description: "Distinguez les sons /l/ (law) vs /r/ (raw).",
    pairs: [
      { id: 1, word1: "light", word2: "right", phonetic1: "/laɪt/", phonetic2: "/raɪt/", soundDifference: "/l/ vs /r/", example1: "Turn on the light.", example2: "Turn right.", translation1: "Allume la lumière.", translation2: "Tourne à droite." },
      { id: 2, word1: "lead", word2: "read", phonetic1: "/liːd/", phonetic2: "/riːd/", soundDifference: "/l/ vs /r/", example1: "Lead the way.", example2: "Read the book.", translation1: "Montre le chemin.", translation2: "Lis le livre." },
      { id: 3, word1: "long", word2: "wrong", phonetic1: "/lɒŋ/", phonetic2: "/rɒŋ/", soundDifference: "/l/ vs /r/", example1: "A long day.", example2: "The wrong answer.", translation1: "Une longue journée.", translation2: "La mauvaise réponse." },
      { id: 4, word1: "play", word2: "pray", phonetic1: "/pleɪ/", phonetic2: "/preɪ/", soundDifference: "/l/ vs /r/", example1: "Play the game.", example2: "Pray for peace.", translation1: "Joue au jeu.", translation2: "Prie pour la paix." },
      { id: 5, word1: "glass", word2: "grass", phonetic1: "/ɡlɑːs/", phonetic2: "/ɡrɑːs/", soundDifference: "/l/ vs /r/", example1: "A glass of water.", example2: "The green grass.", translation1: "Un verre d'eau.", translation2: "L'herbe verte." }
    ],
    questions: [
      { id: 1, sentence: "Turn on the ___, please.", correctWord: "light", options: ["light", "right"], explanation: "Light (lumière) - /laɪt/ - noun.", translation: "Allume la lumière, s'il te plaît." },
      { id: 2, sentence: "That answer is ___.", correctWord: "right", options: ["light", "right"], explanation: "Right (correct) - /raɪt/ - adjective.", translation: "Cette réponse est correcte." },
      { id: 3, sentence: "Can you ___ this book aloud?", correctWord: "read", options: ["lead", "read"], explanation: "Read (lire) - /riːd/ - verb.", translation: "Peux-tu lire ce livre à voix haute ?" },
      { id: 4, sentence: "She will ___ the team to victory.", correctWord: "lead", options: ["lead", "read"], explanation: "Lead (mener) - /liːd/ - verb.", translation: "Elle mènera l'équipe à la victoire." },
      { id: 5, sentence: "That's the ___ answer.", correctWord: "wrong", options: ["long", "wrong"], explanation: "Wrong (faux) - /rɒŋ/ - adjective.", translation: "C'est la mauvaise réponse." },
      { id: 6, sentence: "It's been a ___ day.", correctWord: "long", options: ["long", "wrong"], explanation: "Long (long) - /lɒŋ/ - adjective.", translation: "Ça a été une longue journée." },
      { id: 7, sentence: "The children ___ in the garden.", correctWord: "play", options: ["play", "pray"], explanation: "Play (jouer) - /pleɪ/ - verb.", translation: "Les enfants jouent dans le jardin." },
      { id: 8, sentence: "Many people ___ for world peace.", correctWord: "pray", options: ["play", "pray"], explanation: "Pray (prier) - /preɪ/ - verb.", translation: "Beaucoup de gens prient pour la paix mondiale." },
      { id: 9, sentence: "The ___ is green in summer.", correctWord: "grass", options: ["glass", "grass"], explanation: "Grass (herbe) - /ɡrɑːs/ - noun.", translation: "L'herbe est verte en été." },
      { id: 10, sentence: "Fill the ___ with water.", correctWord: "glass", options: ["glass", "grass"], explanation: "Glass (verre) - /ɡlɑːs/ - container.", translation: "Remplis le verre d'eau." }
    ]
  }
];

export const getPronunciationExerciseById = (id: number): PronunciationExercise | undefined => {
  return pronunciationExercises.find(ex => ex.id === id);
};
