export interface SentenceFragment {
  id: number;
  words: string[];
  correctOrder: number[];
  correctSentence: string;
  translation: string;
  hint?: string;
}

export interface SentenceBuildingExercise {
  id: number;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  theme: string;
  difficulty: 'easy' | 'medium' | 'hard';
  sentences: SentenceFragment[];
}

export const sentenceBuildingExercises: SentenceBuildingExercise[] = [
  {
    id: 1,
    title: "Basic Word Order",
    titleFr: "Ordre des mots de base",
    description: "Arrange words to form correct sentences",
    descriptionFr: "Arrangez les mots pour former des phrases correctes",
    theme: "Basics",
    difficulty: 'easy',
    sentences: [
      {
        id: 1,
        words: ["likes", "She", "coffee", "morning", "in", "the"],
        correctOrder: [1, 0, 2, 4, 5, 3],
        correctSentence: "She likes coffee in the morning.",
        translation: "Elle aime le café le matin.",
        hint: "Subject + Verb + Object + Time"
      },
      {
        id: 2,
        words: ["is", "The", "beautiful", "today", "weather"],
        correctOrder: [1, 4, 0, 2, 3],
        correctSentence: "The weather is beautiful today.",
        translation: "Le temps est beau aujourd'hui.",
        hint: "Subject + Verb + Adjective + Time"
      },
      {
        id: 3,
        words: ["brother", "My", "in", "lives", "London"],
        correctOrder: [1, 0, 3, 2, 4],
        correctSentence: "My brother lives in London.",
        translation: "Mon frère habite à Londres.",
        hint: "Subject + Verb + Place"
      },
      {
        id: 4,
        words: ["eat", "We", "at", "dinner", "7 PM"],
        correctOrder: [1, 0, 3, 2, 4],
        correctSentence: "We eat dinner at 7 PM.",
        translation: "Nous dînons à 19h.",
        hint: "Subject + Verb + Object + Time"
      },
      {
        id: 5,
        words: ["reading", "am", "I", "book", "a", "interesting"],
        correctOrder: [2, 1, 0, 4, 5, 3],
        correctSentence: "I am reading an interesting book.",
        translation: "Je lis un livre intéressant.",
        hint: "Subject + Verb + Object"
      },
      {
        id: 6,
        words: ["teacher", "a", "is", "good", "She"],
        correctOrder: [4, 2, 1, 3, 0],
        correctSentence: "She is a good teacher.",
        translation: "Elle est une bonne enseignante.",
        hint: "Subject + Verb + Article + Adjective + Noun"
      },
      {
        id: 7,
        words: ["play", "children", "The", "in", "park", "the"],
        correctOrder: [2, 1, 0, 3, 5, 4],
        correctSentence: "The children play in the park.",
        translation: "Les enfants jouent dans le parc.",
        hint: "Subject + Verb + Place"
      },
      {
        id: 8,
        words: ["want", "I", "some", "water", "cold"],
        correctOrder: [1, 0, 2, 4, 3],
        correctSentence: "I want some cold water.",
        translation: "Je veux de l'eau froide.",
        hint: "Subject + Verb + Quantity + Adjective + Noun"
      },
      {
        id: 9,
        words: ["happy", "They", "very", "are", "today"],
        correctOrder: [1, 3, 2, 0, 4],
        correctSentence: "They are very happy today.",
        translation: "Ils sont très heureux aujourd'hui.",
        hint: "Subject + Verb + Adverb + Adjective + Time"
      },
      {
        id: 10,
        words: ["dog", "The", "quickly", "runs", "big"],
        correctOrder: [1, 4, 0, 3, 2],
        correctSentence: "The big dog runs quickly.",
        translation: "Le gros chien court vite.",
        hint: "Subject + Verb + Adverb"
      }
    ]
  },
  {
    id: 2,
    title: "Question Formation",
    titleFr: "Formation des questions",
    description: "Build correct English questions",
    descriptionFr: "Construisez des questions anglaises correctes",
    theme: "Questions",
    difficulty: 'medium',
    sentences: [
      {
        id: 1,
        words: ["you", "Do", "English", "speak", "?"],
        correctOrder: [1, 0, 3, 2, 4],
        correctSentence: "Do you speak English?",
        translation: "Parlez-vous anglais ?",
        hint: "Do + Subject + Verb + Object"
      },
      {
        id: 2,
        words: ["is", "Where", "station", "the", "?"],
        correctOrder: [1, 0, 3, 2, 4],
        correctSentence: "Where is the station?",
        translation: "Où est la gare ?",
        hint: "Question word + Verb + Subject"
      },
      {
        id: 3,
        words: ["like", "you", "Would", "tea", "some", "?"],
        correctOrder: [2, 1, 0, 4, 3, 5],
        correctSentence: "Would you like some tea?",
        translation: "Voudriez-vous du thé ?",
        hint: "Would + Subject + Verb + Object"
      },
      {
        id: 4,
        words: ["time", "What", "it", "is", "?"],
        correctOrder: [1, 0, 3, 2, 4],
        correctSentence: "What time is it?",
        translation: "Quelle heure est-il ?",
        hint: "What time + Verb + Subject"
      },
      {
        id: 5,
        words: ["have", "you", "How", "been", "long", "here", "?"],
        correctOrder: [2, 4, 0, 1, 3, 5, 6],
        correctSentence: "How long have you been here?",
        translation: "Depuis combien de temps êtes-vous ici ?",
        hint: "How long + Have + Subject + Been + Place"
      },
      {
        id: 6,
        words: ["she", "doing", "What", "is", "?"],
        correctOrder: [2, 3, 0, 1, 4],
        correctSentence: "What is she doing?",
        translation: "Que fait-elle ?",
        hint: "What + Verb + Subject + Verb-ing"
      },
      {
        id: 7,
        words: ["this", "does", "How", "work", "much", "cost", "?"],
        correctOrder: [2, 4, 1, 0, 5, 6],
        correctSentence: "How much does this cost?",
        translation: "Combien coûte ceci ?",
        hint: "How much + Does + Subject + Verb"
      },
      {
        id: 8,
        words: ["you", "Can", "me", "help", "?"],
        correctOrder: [1, 0, 3, 2, 4],
        correctSentence: "Can you help me?",
        translation: "Pouvez-vous m'aider ?",
        hint: "Modal + Subject + Verb + Object"
      },
      {
        id: 9,
        words: ["going", "you", "Where", "are", "?"],
        correctOrder: [2, 3, 1, 0, 4],
        correctSentence: "Where are you going?",
        translation: "Où allez-vous ?",
        hint: "Where + Verb + Subject + Verb-ing"
      },
      {
        id: 10,
        words: ["didn't", "come", "you", "Why", "?"],
        correctOrder: [3, 0, 2, 1, 4],
        correctSentence: "Why didn't you come?",
        translation: "Pourquoi n'êtes-vous pas venu ?",
        hint: "Why + Didn't + Subject + Verb"
      }
    ]
  },
  {
    id: 3,
    title: "Negative Sentences",
    titleFr: "Phrases négatives",
    description: "Form correct negative sentences",
    descriptionFr: "Formez des phrases négatives correctes",
    theme: "Negatives",
    difficulty: 'medium',
    sentences: [
      {
        id: 1,
        words: ["like", "I", "don't", "coffee"],
        correctOrder: [1, 2, 0, 3],
        correctSentence: "I don't like coffee.",
        translation: "Je n'aime pas le café.",
        hint: "Subject + Don't + Verb + Object"
      },
      {
        id: 2,
        words: ["isn't", "He", "today", "working"],
        correctOrder: [1, 0, 3, 2],
        correctSentence: "He isn't working today.",
        translation: "Il ne travaille pas aujourd'hui.",
        hint: "Subject + Isn't + Verb-ing + Time"
      },
      {
        id: 3,
        words: ["seen", "haven't", "I", "movie", "that"],
        correctOrder: [2, 1, 0, 4, 3],
        correctSentence: "I haven't seen that movie.",
        translation: "Je n'ai pas vu ce film.",
        hint: "Subject + Haven't + Past participle + Object"
      },
      {
        id: 4,
        words: ["go", "We", "won't", "tomorrow", "there"],
        correctOrder: [1, 2, 0, 4, 3],
        correctSentence: "We won't go there tomorrow.",
        translation: "Nous n'irons pas là-bas demain.",
        hint: "Subject + Won't + Verb + Place + Time"
      },
      {
        id: 5,
        words: ["speak", "She", "French", "doesn't"],
        correctOrder: [1, 3, 0, 2],
        correctSentence: "She doesn't speak French.",
        translation: "Elle ne parle pas français.",
        hint: "Subject + Doesn't + Verb + Object"
      },
      {
        id: 6,
        words: ["weren't", "at", "They", "home", "yesterday"],
        correctOrder: [2, 0, 1, 3, 4],
        correctSentence: "They weren't at home yesterday.",
        translation: "Ils n'étaient pas à la maison hier.",
        hint: "Subject + Weren't + Place + Time"
      },
      {
        id: 7,
        words: ["can't", "swim", "I", "well", "very"],
        correctOrder: [2, 0, 1, 4, 3],
        correctSentence: "I can't swim very well.",
        translation: "Je ne sais pas très bien nager.",
        hint: "Subject + Can't + Verb + Adverb"
      },
      {
        id: 8,
        words: ["never", "He", "late", "is"],
        correctOrder: [1, 3, 2, 0],
        correctSentence: "He is never late.",
        translation: "Il n'est jamais en retard.",
        hint: "Subject + Verb + Never + Adjective"
      },
      {
        id: 9,
        words: ["didn't", "the", "She", "answer", "phone"],
        correctOrder: [2, 0, 3, 1, 4],
        correctSentence: "She didn't answer the phone.",
        translation: "Elle n'a pas répondu au téléphone.",
        hint: "Subject + Didn't + Verb + Object"
      },
      {
        id: 10,
        words: ["must", "You", "not", "here", "smoke"],
        correctOrder: [1, 0, 2, 4, 3],
        correctSentence: "You must not smoke here.",
        translation: "Vous ne devez pas fumer ici.",
        hint: "Subject + Must not + Verb + Place"
      }
    ]
  },
  {
    id: 4,
    title: "Complex Sentences",
    titleFr: "Phrases complexes",
    description: "Build sentences with conjunctions and clauses",
    descriptionFr: "Construisez des phrases avec des conjonctions et propositions",
    theme: "Complex",
    difficulty: 'hard',
    sentences: [
      {
        id: 1,
        words: ["raining", "Although", "was", "it", "went", "we", "out"],
        correctOrder: [1, 3, 2, 0, 5, 4, 6],
        correctSentence: "Although it was raining, we went out.",
        translation: "Bien qu'il pleuvait, nous sommes sortis.",
        hint: "Although + Subject + Verb, Subject + Verb"
      },
      {
        id: 2,
        words: ["if", "call", "I", "late", "you", "will", "I'm"],
        correctOrder: [0, 6, 3, 2, 5, 1, 4],
        correctSentence: "If I'm late, I will call you.",
        translation: "Si je suis en retard, je t'appellerai.",
        hint: "If + Subject + Verb, Subject + Will + Verb"
      },
      {
        id: 3,
        words: ["the", "who", "is", "woman", "there", "standing", "?", "Who"],
        correctOrder: [7, 2, 0, 3, 1, 4, 5, 6],
        correctSentence: "Who is the woman who is standing there?",
        translation: "Qui est la femme qui se tient là ?",
        hint: "Question word + Verb + Subject + Relative clause"
      },
      {
        id: 4,
        words: ["finished", "I", "had", "arrived", "Before", "he", "my", "work"],
        correctOrder: [4, 5, 3, 1, 2, 0, 6, 7],
        correctSentence: "Before he arrived, I had finished my work.",
        translation: "Avant qu'il n'arrive, j'avais terminé mon travail.",
        hint: "Before + Subject + Verb, Subject + Had + Past participle"
      },
      {
        id: 5,
        words: ["so", "tired", "that", "couldn't", "I", "was", "I", "sleep"],
        correctOrder: [6, 5, 0, 1, 2, 4, 3, 7],
        correctSentence: "I was so tired that I couldn't sleep.",
        translation: "J'étais tellement fatigué que je n'arrivais pas à dormir.",
        hint: "Subject + Verb + So + Adjective + That + Subject + Verb"
      },
      {
        id: 6,
        words: ["which", "book", "bought", "was", "The", "I", "interesting"],
        correctOrder: [4, 1, 0, 5, 2, 3, 6],
        correctSentence: "The book which I bought was interesting.",
        translation: "Le livre que j'ai acheté était intéressant.",
        hint: "Subject + Relative pronoun + Subject + Verb + Verb + Adjective"
      },
      {
        id: 7,
        words: ["unless", "leave", "hurry", "we", "miss", "train", "the", "we", "will"],
        correctOrder: [0, 3, 2, 7, 8, 4, 6, 5],
        correctSentence: "Unless we hurry, we will miss the train.",
        translation: "À moins de nous dépêcher, nous raterons le train.",
        hint: "Unless + Subject + Verb, Subject + Will + Verb + Object"
      },
      {
        id: 8,
        words: ["not", "said", "he", "that", "was", "coming", "He"],
        correctOrder: [6, 1, 3, 2, 4, 0, 5],
        correctSentence: "He said that he was not coming.",
        translation: "Il a dit qu'il ne venait pas.",
        hint: "Subject + Said + That + Subject + Verb + Not + Verb-ing"
      },
      {
        id: 9,
        words: ["as", "expected", "as", "wasn't", "it", "good", "I"],
        correctOrder: [4, 3, 0, 5, 2, 6, 1],
        correctSentence: "It wasn't as good as I expected.",
        translation: "Ce n'était pas aussi bien que je m'y attendais.",
        hint: "Subject + Wasn't + As + Adjective + As + Subject + Verb"
      },
      {
        id: 10,
        words: ["had", "would", "If", "known", "come", "I", "I", "have"],
        correctOrder: [2, 5, 0, 3, 6, 1, 7, 4],
        correctSentence: "If I had known, I would have come.",
        translation: "Si j'avais su, je serais venu.",
        hint: "If + Subject + Had + Past participle, Subject + Would have + Past participle"
      }
    ]
  },
  {
    id: 5,
    title: "Passive Voice",
    titleFr: "Voix passive",
    description: "Build sentences in passive voice",
    descriptionFr: "Construisez des phrases à la voix passive",
    theme: "Passive",
    difficulty: 'hard',
    sentences: [
      {
        id: 1,
        words: ["built", "was", "house", "The", "1920", "in"],
        correctOrder: [3, 2, 1, 0, 5, 4],
        correctSentence: "The house was built in 1920.",
        translation: "La maison a été construite en 1920.",
        hint: "Subject + Was + Past participle + Time"
      },
      {
        id: 2,
        words: ["is", "English", "spoken", "here"],
        correctOrder: [1, 0, 2, 3],
        correctSentence: "English is spoken here.",
        translation: "On parle anglais ici.",
        hint: "Subject + Is + Past participle + Place"
      },
      {
        id: 3,
        words: ["was", "by", "stolen", "car", "The", "thieves"],
        correctOrder: [4, 3, 0, 2, 1, 5],
        correctSentence: "The car was stolen by thieves.",
        translation: "La voiture a été volée par des voleurs.",
        hint: "Subject + Was + Past participle + By + Agent"
      },
      {
        id: 4,
        words: ["being", "repaired", "road", "is", "The"],
        correctOrder: [4, 2, 3, 0, 1],
        correctSentence: "The road is being repaired.",
        translation: "La route est en cours de réparation.",
        hint: "Subject + Is being + Past participle"
      },
      {
        id: 5,
        words: ["finished", "been", "has", "work", "The"],
        correctOrder: [4, 3, 2, 1, 0],
        correctSentence: "The work has been finished.",
        translation: "Le travail a été terminé.",
        hint: "Subject + Has been + Past participle"
      },
      {
        id: 6,
        words: ["will", "sent", "letter", "be", "The", "tomorrow"],
        correctOrder: [4, 2, 0, 3, 1, 5],
        correctSentence: "The letter will be sent tomorrow.",
        translation: "La lettre sera envoyée demain.",
        hint: "Subject + Will be + Past participle + Time"
      },
      {
        id: 7,
        words: ["made", "China", "was", "in", "It"],
        correctOrder: [4, 2, 0, 3, 1],
        correctSentence: "It was made in China.",
        translation: "C'était fabriqué en Chine.",
        hint: "Subject + Was + Past participle + Place"
      },
      {
        id: 8,
        words: ["invited", "were", "to", "the", "We", "party"],
        correctOrder: [4, 1, 0, 2, 3, 5],
        correctSentence: "We were invited to the party.",
        translation: "Nous avons été invités à la fête.",
        hint: "Subject + Were + Past participle + To + Object"
      },
      {
        id: 9,
        words: ["Shakespeare", "written", "was", "This", "by", "play"],
        correctOrder: [3, 5, 2, 1, 4, 0],
        correctSentence: "This play was written by Shakespeare.",
        translation: "Cette pièce a été écrite par Shakespeare.",
        hint: "Subject + Was + Past participle + By + Agent"
      },
      {
        id: 10,
        words: ["told", "had", "been", "He", "the", "truth"],
        correctOrder: [3, 1, 2, 0, 4, 5],
        correctSentence: "He had been told the truth.",
        translation: "On lui avait dit la vérité.",
        hint: "Subject + Had been + Past participle + Object"
      }
    ]
  },
  {
    id: 6,
    title: "Reported Speech",
    titleFr: "Discours rapporté",
    description: "Transform direct to indirect speech",
    descriptionFr: "Transformez le discours direct en discours indirect",
    theme: "Reported",
    difficulty: 'hard',
    sentences: [
      {
        id: 1,
        words: ["said", "was", "she", "She", "tired"],
        correctOrder: [3, 0, 2, 1, 4],
        correctSentence: "She said she was tired.",
        translation: "Elle a dit qu'elle était fatiguée.",
        hint: "Subject + Said + Subject + Was + Adjective"
      },
      {
        id: 2,
        words: ["told", "to", "me", "He", "wait"],
        correctOrder: [3, 0, 2, 1, 4],
        correctSentence: "He told me to wait.",
        translation: "Il m'a dit d'attendre.",
        hint: "Subject + Told + Object + To + Verb"
      },
      {
        id: 3,
        words: ["asked", "I", "was", "where", "She", "going"],
        correctOrder: [4, 0, 1, 3, 2, 5],
        correctSentence: "She asked where I was going.",
        translation: "Elle a demandé où j'allais.",
        hint: "Subject + Asked + Where + Subject + Was + Verb-ing"
      },
      {
        id: 4,
        words: ["they", "that", "explained", "help", "couldn't", "He"],
        correctOrder: [5, 2, 1, 0, 4, 3],
        correctSentence: "He explained that they couldn't help.",
        translation: "Il a expliqué qu'ils ne pouvaient pas aider.",
        hint: "Subject + Explained + That + Subject + Couldn't + Verb"
      },
      {
        id: 5,
        words: ["wanted", "if", "She", "asked", "I", "coffee"],
        correctOrder: [2, 3, 1, 4, 0, 5],
        correctSentence: "She asked if I wanted coffee.",
        translation: "Elle a demandé si je voulais du café.",
        hint: "Subject + Asked + If + Subject + Wanted + Object"
      },
      {
        id: 6,
        words: ["would", "They", "come", "said", "they", "back"],
        correctOrder: [1, 3, 4, 0, 2, 5],
        correctSentence: "They said they would come back.",
        translation: "Ils ont dit qu'ils reviendraient.",
        hint: "Subject + Said + Subject + Would + Verb + Adverb"
      },
      {
        id: 7,
        words: ["not", "me", "told", "to", "She", "worry"],
        correctOrder: [4, 2, 1, 0, 3, 5],
        correctSentence: "She told me not to worry.",
        translation: "Elle m'a dit de ne pas m'inquiéter.",
        hint: "Subject + Told + Object + Not + To + Verb"
      },
      {
        id: 8,
        words: ["time", "what", "He", "was", "asked", "it"],
        correctOrder: [2, 4, 1, 0, 5, 3],
        correctSentence: "He asked what time it was.",
        translation: "Il a demandé quelle heure il était.",
        hint: "Subject + Asked + What time + Subject + Was"
      },
      {
        id: 9,
        words: ["had", "that", "finished", "They", "announced", "they"],
        correctOrder: [3, 4, 1, 5, 0, 2],
        correctSentence: "They announced that they had finished.",
        translation: "Ils ont annoncé qu'ils avaient terminé.",
        hint: "Subject + Announced + That + Subject + Had + Past participle"
      },
      {
        id: 10,
        words: ["wondered", "late", "he", "why", "I", "was"],
        correctOrder: [4, 0, 3, 2, 5, 1],
        correctSentence: "I wondered why he was late.",
        translation: "Je me demandais pourquoi il était en retard.",
        hint: "Subject + Wondered + Why + Subject + Was + Adjective"
      }
    ]
  }
];

export const getSentenceBuildingExerciseById = (id: number): SentenceBuildingExercise | undefined => {
  return sentenceBuildingExercises.find(ex => ex.id === id);
};
