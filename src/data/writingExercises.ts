export interface SentenceTransformExercise {
  id: number;
  title: string;
  description: string;
  sentences: {
    id: number;
    original: string;
    instruction: string;
    answer: string;
    hint?: string;
    explanation: string;
  }[];
}

export interface ErrorCorrectionExercise {
  id: number;
  title: string;
  description: string;
  sentences: {
    id: number;
    incorrect: string;
    correct: string;
    errorType: string;
    explanation: string;
  }[];
}

export interface FillParagraphExercise {
  id: number;
  title: string;
  description: string;
  paragraph: string;
  blanks: {
    id: number;
    answer: string;
    alternatives?: string[];
    hint?: string;
  }[];
  translation: string;
}

export const sentenceTransformExercises: SentenceTransformExercise[] = [
  {
    id: 1,
    title: "Transformation de phrases (1) : Actif → Passif",
    description: "Transformez ces phrases de la voix active à la voix passive.",
    sentences: [
      { id: 1, original: "The cat ate the fish.", instruction: "Passif", answer: "The fish was eaten by the cat.", explanation: "Objet devient sujet + was/were + participe passé + by + agent." },
      { id: 2, original: "Someone stole my bike.", instruction: "Passif", answer: "My bike was stolen.", explanation: "Quand l'agent est inconnu (someone), on l'omet." },
      { id: 3, original: "They are building a new hospital.", instruction: "Passif", answer: "A new hospital is being built.", explanation: "Present continuous passif : is/are + being + participe passé." },
      { id: 4, original: "The company will launch the product next month.", instruction: "Passif", answer: "The product will be launched next month.", explanation: "Future passif : will + be + participe passé." },
      { id: 5, original: "People speak English all over the world.", instruction: "Passif", answer: "English is spoken all over the world.", explanation: "Present simple passif : is/are + participe passé." },
      { id: 6, original: "She has written three novels.", instruction: "Passif", answer: "Three novels have been written by her.", explanation: "Present perfect passif : have/has + been + participe passé." },
      { id: 7, original: "The mechanic is repairing my car.", instruction: "Passif", answer: "My car is being repaired.", explanation: "On omet souvent l'agent quand c'est évident (by the mechanic)." },
      { id: 8, original: "They had finished the work before noon.", instruction: "Passif", answer: "The work had been finished before noon.", explanation: "Past perfect passif : had + been + participe passé." },
    ]
  },
  {
    id: 2,
    title: "Transformation de phrases (2) : Direct → Indirect",
    description: "Transformez ces phrases du discours direct au discours indirect.",
    sentences: [
      { id: 1, original: "She said, \"I am tired.\"", instruction: "Discours indirect", answer: "She said (that) she was tired.", explanation: "am → was (backshift d'un temps)." },
      { id: 2, original: "He said, \"I will call you tomorrow.\"", instruction: "Discours indirect", answer: "He said (that) he would call me the next day.", explanation: "will → would, tomorrow → the next day." },
      { id: 3, original: "They said, \"We have finished.\"", instruction: "Discours indirect", answer: "They said (that) they had finished.", explanation: "have finished → had finished (present perfect → past perfect)." },
      { id: 4, original: "She asked, \"Where do you live?\"", instruction: "Discours indirect", answer: "She asked where I lived.", explanation: "Question → ordre des mots normal, do disparaît." },
      { id: 5, original: "He asked, \"Are you coming?\"", instruction: "Discours indirect", answer: "He asked if/whether I was coming.", explanation: "Question oui/non → if/whether + ordre normal." },
      { id: 6, original: "The teacher said, \"Open your books.\"", instruction: "Discours indirect", answer: "The teacher told us to open our books.", explanation: "Impératif → told + to + infinitif." },
      { id: 7, original: "She said, \"I saw him yesterday.\"", instruction: "Discours indirect", answer: "She said (that) she had seen him the day before.", explanation: "saw → had seen, yesterday → the day before." },
      { id: 8, original: "He asked, \"What time does the train leave?\"", instruction: "Discours indirect", answer: "He asked what time the train left.", explanation: "does leave → left, ordre des mots normal." },
    ]
  },
  {
    id: 3,
    title: "Transformation de phrases (3) : Changement de temps",
    description: "Transformez ces phrases selon le temps indiqué.",
    sentences: [
      { id: 1, original: "I eat breakfast at 7am.", instruction: "Past Simple", answer: "I ate breakfast at 7am.", explanation: "eat → ate (verbe irrégulier)." },
      { id: 2, original: "She is working in the garden.", instruction: "Past Continuous", answer: "She was working in the garden.", explanation: "is working → was working." },
      { id: 3, original: "They have lived here for 10 years.", instruction: "Past Perfect", answer: "They had lived there for 10 years.", explanation: "have lived → had lived, here → there (contexte passé)." },
      { id: 4, original: "He will finish the project tomorrow.", instruction: "Past (would)", answer: "He would finish the project the next day.", explanation: "will → would, tomorrow → the next day." },
      { id: 5, original: "We went to Paris last year.", instruction: "Present Perfect", answer: "We have been to Paris.", explanation: "went → have been (expérience, sans marqueur de temps spécifique)." },
      { id: 6, original: "She was reading when I arrived.", instruction: "Present", answer: "She is reading.", explanation: "was reading → is reading (action en cours maintenant)." },
      { id: 7, original: "I have just finished my homework.", instruction: "Past Simple", answer: "I just finished my homework.", explanation: "have finished → finished (anglais américain accepte just + past simple)." },
      { id: 8, original: "They are going to travel next summer.", instruction: "Past (was going to)", answer: "They were going to travel the following summer.", explanation: "are going to → were going to." },
    ]
  }
];

export const errorCorrectionExercises: ErrorCorrectionExercise[] = [
  {
    id: 1,
    title: "Correction d'erreurs (1) : Erreurs courantes",
    description: "Trouvez et corrigez l'erreur dans chaque phrase.",
    sentences: [
      { id: 1, incorrect: "She don't like coffee.", correct: "She doesn't like coffee.", errorType: "Subject-verb agreement", explanation: "3ème personne singulier → doesn't, pas don't." },
      { id: 2, incorrect: "I have been to Paris last year.", correct: "I went to Paris last year.", errorType: "Tense", explanation: "Avec 'last year' (temps spécifique) → Past Simple, pas Present Perfect." },
      { id: 3, incorrect: "He is more taller than me.", correct: "He is taller than me.", errorType: "Comparative", explanation: "Adjectifs courts : -er, pas more + -er." },
      { id: 4, incorrect: "I am agree with you.", correct: "I agree with you.", errorType: "Verb form", explanation: "Agree est un verbe, pas un adjectif. Pas de 'am' devant." },
      { id: 5, incorrect: "She suggested me to go.", correct: "She suggested (that) I go.", errorType: "Verb pattern", explanation: "Suggest + that + sujet + base verbale (subjonctif)." },
      { id: 6, incorrect: "I look forward to hear from you.", correct: "I look forward to hearing from you.", errorType: "Gerund", explanation: "Look forward to + -ing (to est préposition ici)." },
      { id: 7, incorrect: "The informations are useful.", correct: "The information is useful.", errorType: "Uncountable noun", explanation: "Information est indénombrable → singulier, pas de 's'." },
      { id: 8, incorrect: "I went to home.", correct: "I went home.", errorType: "Preposition", explanation: "Home s'utilise sans préposition après go/come/get." },
      { id: 9, incorrect: "He made me to wait.", correct: "He made me wait.", errorType: "Causative", explanation: "Make + objet + infinitif sans to." },
      { id: 10, incorrect: "I'm used to get up early.", correct: "I'm used to getting up early.", errorType: "Used to", explanation: "Be used to + -ing (habitude présente)." },
    ]
  },
  {
    id: 2,
    title: "Correction d'erreurs (2) : Prépositions et articles",
    description: "Corrigez les erreurs de prépositions et d'articles.",
    sentences: [
      { id: 1, incorrect: "I arrived to Paris at midnight.", correct: "I arrived in Paris at midnight.", errorType: "Preposition", explanation: "Arrive IN (ville/pays), pas TO." },
      { id: 2, incorrect: "She plays the piano and guitar.", correct: "She plays the piano and the guitar.", errorType: "Article", explanation: "Instruments de musique → the devant chaque instrument." },
      { id: 3, incorrect: "He is interested for music.", correct: "He is interested in music.", errorType: "Preposition", explanation: "Interested IN, pas FOR." },
      { id: 4, incorrect: "I go to the work by bus.", correct: "I go to work by bus.", errorType: "Article", explanation: "Work (lieu de travail) s'utilise sans article." },
      { id: 5, incorrect: "She is good in mathematics.", correct: "She is good at mathematics.", errorType: "Preposition", explanation: "Good AT (compétence), pas IN." },
      { id: 6, incorrect: "I depend of my parents.", correct: "I depend on my parents.", errorType: "Preposition", explanation: "Depend ON, pas OF." },
      { id: 7, incorrect: "He married with her last year.", correct: "He married her last year.", errorType: "Preposition", explanation: "Marry + objet direct, sans préposition (ou: got married TO)." },
      { id: 8, incorrect: "I have the headache.", correct: "I have a headache.", errorType: "Article", explanation: "Have A headache (article indéfini)." },
      { id: 9, incorrect: "She explained me the problem.", correct: "She explained the problem to me.", errorType: "Word order", explanation: "Explain + objet + TO + personne." },
      { id: 10, incorrect: "I listen music every day.", correct: "I listen to music every day.", errorType: "Preposition", explanation: "Listen TO, jamais sans préposition." },
    ]
  },
  {
    id: 3,
    title: "Correction d'erreurs (3) : Temps et aspects",
    description: "Corrigez les erreurs de temps verbaux.",
    sentences: [
      { id: 1, incorrect: "I live here since 2010.", correct: "I have lived here since 2010.", errorType: "Tense", explanation: "Since + Present Perfect (durée jusqu'à maintenant)." },
      { id: 2, incorrect: "When I will arrive, I will call you.", correct: "When I arrive, I will call you.", errorType: "Future in time clause", explanation: "Après when/if/as soon as → Present, pas will." },
      { id: 3, incorrect: "I am knowing the answer.", correct: "I know the answer.", errorType: "Stative verb", explanation: "Know = verbe d'état, pas de forme continue." },
      { id: 4, incorrect: "She has gone to Paris yesterday.", correct: "She went to Paris yesterday.", errorType: "Tense", explanation: "Yesterday = temps spécifique → Past Simple." },
      { id: 5, incorrect: "I didn't saw him.", correct: "I didn't see him.", errorType: "Past Simple negative", explanation: "Après didn't → infinitif (see), pas prétérit." },
      { id: 6, incorrect: "He works here since January.", correct: "He has been working here since January.", errorType: "Tense", explanation: "Since + Present Perfect (Continuous pour action en cours)." },
      { id: 7, incorrect: "I have seen that movie last week.", correct: "I saw that movie last week.", errorType: "Tense", explanation: "Last week = temps passé spécifique → Past Simple." },
      { id: 8, incorrect: "She told me she will come.", correct: "She told me she would come.", errorType: "Sequence of tenses", explanation: "Après told (passé) → would, pas will (concordance)." },
      { id: 9, incorrect: "I am here since 3 o'clock.", correct: "I have been here since 3 o'clock.", errorType: "Tense", explanation: "Since → Present Perfect (not Present Simple)." },
      { id: 10, incorrect: "Did you ever been to London?", correct: "Have you ever been to London?", errorType: "Question form", explanation: "Ever + Present Perfect (expérience de vie)." },
    ]
  }
];

export const fillParagraphExercises: FillParagraphExercise[] = [
  {
    id: 1,
    title: "Texte à trous (1) : Une journée typique",
    description: "Complétez ce paragraphe avec les mots appropriés.",
    paragraph: "Every morning, I [1] up at 7 o'clock. First, I [2] a shower and then I [3] breakfast. I usually [4] coffee and toast. After that, I [5] to work by bus. It [6] about 30 minutes. I [7] work at 9 am and [8] at 6 pm. In the evening, I [9] dinner and [10] TV before going to bed.",
    blanks: [
      { id: 1, answer: "get", alternatives: ["wake"], hint: "se lever" },
      { id: 2, answer: "have", alternatives: ["take"], hint: "prendre (douche)" },
      { id: 3, answer: "have", alternatives: ["eat"], hint: "prendre (repas)" },
      { id: 4, answer: "have", alternatives: ["drink"], hint: "prendre/boire" },
      { id: 5, answer: "go", alternatives: ["travel"], hint: "aller" },
      { id: 6, answer: "takes", alternatives: ["lasts"], hint: "prendre (durée)" },
      { id: 7, answer: "start", alternatives: ["begin"], hint: "commencer" },
      { id: 8, answer: "finish", alternatives: ["leave"], hint: "finir" },
      { id: 9, answer: "have", alternatives: ["cook", "make"], hint: "prendre (repas)" },
      { id: 10, answer: "watch", hint: "regarder" },
    ],
    translation: "Chaque matin, je me lève à 7 heures. D'abord, je prends une douche puis je prends le petit-déjeuner. Je prends habituellement du café et des toasts. Après cela, je vais au travail en bus. Cela prend environ 30 minutes. Je commence le travail à 9h et je finis à 18h. Le soir, je dîne et je regarde la télé avant d'aller me coucher."
  },
  {
    id: 2,
    title: "Texte à trous (2) : Mes dernières vacances",
    description: "Complétez ce paragraphe au passé (Past Simple).",
    paragraph: "Last summer, I [1] to Spain with my family. We [2] in a beautiful hotel near the beach. Every day, we [3] in the sea and [4] on the sand. The weather [5] fantastic - it [6] sunny every day. We [7] delicious Spanish food and [8] sangria. I [9] some souvenirs for my friends. It [10] the best holiday ever!",
    blanks: [
      { id: 1, answer: "went", hint: "aller (passé)" },
      { id: 2, answer: "stayed", hint: "rester (passé)" },
      { id: 3, answer: "swam", hint: "nager (passé)" },
      { id: 4, answer: "relaxed", alternatives: ["lay"], hint: "se détendre (passé)" },
      { id: 5, answer: "was", hint: "être (passé)" },
      { id: 6, answer: "was", hint: "être (passé)" },
      { id: 7, answer: "ate", alternatives: ["had"], hint: "manger (passé)" },
      { id: 8, answer: "drank", alternatives: ["had"], hint: "boire (passé)" },
      { id: 9, answer: "bought", hint: "acheter (passé)" },
      { id: 10, answer: "was", hint: "être (passé)" },
    ],
    translation: "L'été dernier, je suis allé en Espagne avec ma famille. Nous avons séjourné dans un bel hôtel près de la plage. Chaque jour, nous nagions dans la mer et nous nous détendions sur le sable. Le temps était fantastique - il faisait beau tous les jours. Nous avons mangé de délicieux plats espagnols et bu de la sangria. J'ai acheté des souvenirs pour mes amis. C'étaient les meilleures vacances !"
  },
  {
    id: 3,
    title: "Texte à trous (3) : Projets futurs",
    description: "Complétez ce paragraphe avec will, going to ou le present continuous pour le futur.",
    paragraph: "Next year, I [1] (study) abroad - I've already applied to a university in London. My flight [2] (leave) on September 1st - I've booked it. I think I [3] (enjoy) the experience a lot. My parents [4] (visit) me at Christmas - they've already bought their tickets. I [5] (probably/miss) my friends, but I [6] (make) new ones. The course [7] (start) on September 15th. I [8] (live) in student accommodation - I've received the confirmation. I'm sure it [9] (be) an amazing adventure. I [10] (definitely/learn) a lot!",
    blanks: [
      { id: 1, answer: "am going to study", alternatives: ["'m going to study"], hint: "intention/décision prise" },
      { id: 2, answer: "leaves", alternatives: ["is leaving"], hint: "horaire fixé ou plan organisé" },
      { id: 3, answer: "will enjoy", alternatives: ["'ll enjoy"], hint: "I think + prédiction" },
      { id: 4, answer: "are going to visit", alternatives: ["are visiting"], hint: "plan avec tickets achetés" },
      { id: 5, answer: "will probably miss", alternatives: ["'ll probably miss"], hint: "prédiction avec probably" },
      { id: 6, answer: "will make", alternatives: ["'ll make"], hint: "prédiction" },
      { id: 7, answer: "starts", hint: "horaire officiel" },
      { id: 8, answer: "am going to live", alternatives: ["'m going to live"], hint: "plan confirmé" },
      { id: 9, answer: "will be", alternatives: ["'ll be"], hint: "I'm sure + prédiction" },
      { id: 10, answer: "will definitely learn", alternatives: ["'ll definitely learn"], hint: "prédiction avec definitely" },
    ],
    translation: "L'année prochaine, je vais étudier à l'étranger - j'ai déjà postulé dans une université à Londres. Mon vol part le 1er septembre - je l'ai réservé. Je pense que je vais apprécier l'expérience. Mes parents vont me rendre visite à Noël - ils ont déjà acheté leurs billets. Mes amis vont probablement me manquer, mais je m'en ferai de nouveaux. Le cours commence le 15 septembre. Je vais vivre en résidence étudiante - j'ai reçu la confirmation. Je suis sûr que ce sera une aventure incroyable. Je vais certainement apprendre beaucoup !"
  }
];
