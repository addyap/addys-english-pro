export interface ErrorCorrectionSentence {
  id: number;
  incorrectSentence: string;
  correctSentence: string;
  errorType: string;
  explanation: string;
  explanationFr: string;
}

export interface ErrorCorrectionExercise {
  id: number;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  theme: string;
  difficulty: 'easy' | 'medium' | 'hard';
  sentences: ErrorCorrectionSentence[];
}

export const errorCorrectionExercises: ErrorCorrectionExercise[] = [
  {
    id: 1,
    title: "Common Verb Errors",
    titleFr: "Erreurs courantes avec les verbes",
    description: "Find and correct verb tense and agreement errors",
    descriptionFr: "Trouvez et corrigez les erreurs de temps et d'accord des verbes",
    theme: "Verbs",
    difficulty: 'easy',
    sentences: [
      {
        id: 1,
        incorrectSentence: "She go to work every day.",
        correctSentence: "She goes to work every day.",
        errorType: "Subject-verb agreement",
        explanation: "Third person singular (she/he/it) requires -s/-es ending in present simple.",
        explanationFr: "La troisième personne du singulier (she/he/it) nécessite la terminaison -s/-es au présent simple."
      },
      {
        id: 2,
        incorrectSentence: "I have saw that movie yesterday.",
        correctSentence: "I saw that movie yesterday.",
        errorType: "Tense confusion",
        explanation: "Use past simple (saw) with 'yesterday', not present perfect.",
        explanationFr: "Utilisez le passé simple (saw) avec 'yesterday', pas le present perfect."
      },
      {
        id: 3,
        incorrectSentence: "They was very happy about the news.",
        correctSentence: "They were very happy about the news.",
        errorType: "Subject-verb agreement",
        explanation: "'They' requires 'were', not 'was'.",
        explanationFr: "'They' nécessite 'were', pas 'was'."
      },
      {
        id: 4,
        incorrectSentence: "He don't like coffee.",
        correctSentence: "He doesn't like coffee.",
        errorType: "Auxiliary verb",
        explanation: "Third person singular uses 'doesn't', not 'don't'.",
        explanationFr: "La troisième personne du singulier utilise 'doesn't', pas 'don't'."
      },
      {
        id: 5,
        incorrectSentence: "We have been waiting since two hours.",
        correctSentence: "We have been waiting for two hours.",
        errorType: "Preposition with time",
        explanation: "Use 'for' with duration, 'since' with a point in time.",
        explanationFr: "Utilisez 'for' pour une durée, 'since' pour un moment précis."
      },
      {
        id: 6,
        incorrectSentence: "The children plays in the garden.",
        correctSentence: "The children play in the garden.",
        errorType: "Subject-verb agreement",
        explanation: "'Children' is plural, so the verb doesn't take -s.",
        explanationFr: "'Children' est pluriel, donc le verbe ne prend pas de -s."
      },
      {
        id: 7,
        incorrectSentence: "I am agree with you.",
        correctSentence: "I agree with you.",
        errorType: "State verb",
        explanation: "'Agree' is a state verb and doesn't use continuous form in this context.",
        explanationFr: "'Agree' est un verbe d'état et ne s'utilise pas à la forme continue dans ce contexte."
      },
      {
        id: 8,
        incorrectSentence: "She has been to Paris last year.",
        correctSentence: "She went to Paris last year.",
        errorType: "Tense confusion",
        explanation: "Use past simple with specific past time ('last year').",
        explanationFr: "Utilisez le passé simple avec un moment passé précis ('last year')."
      },
      {
        id: 9,
        incorrectSentence: "I didn't went to the party.",
        correctSentence: "I didn't go to the party.",
        errorType: "Double past marking",
        explanation: "After 'didn't', use the base form of the verb.",
        explanationFr: "Après 'didn't', utilisez la forme de base du verbe."
      },
      {
        id: 10,
        incorrectSentence: "He will calls you tomorrow.",
        correctSentence: "He will call you tomorrow.",
        errorType: "Modal verb",
        explanation: "After modal verbs (will, can, must, etc.), use the base form.",
        explanationFr: "Après les verbes modaux (will, can, must, etc.), utilisez la forme de base."
      }
    ]
  },
  {
    id: 2,
    title: "Article Mistakes",
    titleFr: "Erreurs d'articles",
    description: "Identify and fix errors with a, an, the, or zero article",
    descriptionFr: "Identifiez et corrigez les erreurs avec a, an, the, ou l'absence d'article",
    theme: "Articles",
    difficulty: 'medium',
    sentences: [
      {
        id: 1,
        incorrectSentence: "I bought a umbrella because it was raining.",
        correctSentence: "I bought an umbrella because it was raining.",
        errorType: "Article choice",
        explanation: "Use 'an' before vowel sounds (umbrella starts with a vowel sound).",
        explanationFr: "Utilisez 'an' devant les sons voyelles (umbrella commence par un son voyelle)."
      },
      {
        id: 2,
        incorrectSentence: "The life is beautiful.",
        correctSentence: "Life is beautiful.",
        errorType: "Zero article",
        explanation: "General concepts (life, love, happiness) don't need 'the'.",
        explanationFr: "Les concepts généraux (la vie, l'amour, le bonheur) ne prennent pas 'the'."
      },
      {
        id: 3,
        incorrectSentence: "She is an European citizen.",
        correctSentence: "She is a European citizen.",
        errorType: "Article choice",
        explanation: "'European' starts with a /j/ consonant sound, so use 'a'.",
        explanationFr: "'European' commence par un son consonne /j/, donc utilisez 'a'."
      },
      {
        id: 4,
        incorrectSentence: "I go to the work by bus.",
        correctSentence: "I go to work by bus.",
        errorType: "Zero article",
        explanation: "Fixed expressions: go to work, go to school, go to bed (no article).",
        explanationFr: "Expressions figées : go to work, go to school, go to bed (sans article)."
      },
      {
        id: 5,
        incorrectSentence: "Sun rises in the east.",
        correctSentence: "The sun rises in the east.",
        errorType: "Definite article",
        explanation: "Unique things (the sun, the moon, the earth) need 'the'.",
        explanationFr: "Les choses uniques (le soleil, la lune, la terre) nécessitent 'the'."
      },
      {
        id: 6,
        incorrectSentence: "I have a headache and the fever.",
        correctSentence: "I have a headache and a fever.",
        errorType: "Article consistency",
        explanation: "Both are indefinite illnesses you're experiencing now; use 'a' for both.",
        explanationFr: "Les deux sont des maladies indéfinies que vous avez maintenant ; utilisez 'a' pour les deux."
      },
      {
        id: 7,
        incorrectSentence: "She plays piano very well.",
        correctSentence: "She plays the piano very well.",
        errorType: "Definite article",
        explanation: "Musical instruments typically take 'the' when referring to playing them.",
        explanationFr: "Les instruments de musique prennent généralement 'the' quand on en joue."
      },
      {
        id: 8,
        incorrectSentence: "I love the Italian food.",
        correctSentence: "I love Italian food.",
        errorType: "Zero article",
        explanation: "General categories (Italian food, Chinese culture) don't need 'the'.",
        explanationFr: "Les catégories générales (la cuisine italienne, la culture chinoise) ne prennent pas 'the'."
      },
      {
        id: 9,
        incorrectSentence: "He is honest man.",
        correctSentence: "He is an honest man.",
        errorType: "Missing article",
        explanation: "'Honest' starts with a silent 'h', so use 'an'. Also, singular countable nouns need an article.",
        explanationFr: "'Honest' commence par un 'h' muet, donc utilisez 'an'. De plus, les noms dénombrables singuliers ont besoin d'un article."
      },
      {
        id: 10,
        incorrectSentence: "I saw a interesting documentary about the nature.",
        correctSentence: "I saw an interesting documentary about nature.",
        errorType: "Multiple errors",
        explanation: "Use 'an' before vowel sounds; 'nature' as a general concept doesn't need 'the'.",
        explanationFr: "Utilisez 'an' devant les sons voyelles ; 'nature' comme concept général ne prend pas 'the'."
      }
    ]
  },
  {
    id: 3,
    title: "Preposition Errors",
    titleFr: "Erreurs de prépositions",
    description: "Correct common preposition mistakes",
    descriptionFr: "Corrigez les erreurs de prépositions courantes",
    theme: "Prepositions",
    difficulty: 'medium',
    sentences: [
      {
        id: 1,
        incorrectSentence: "I arrived to London at 6 PM.",
        correctSentence: "I arrived in London at 6 PM.",
        errorType: "Wrong preposition",
        explanation: "We arrive IN cities/countries, AT buildings/addresses.",
        explanationFr: "On arrive IN dans les villes/pays, AT dans les bâtiments/adresses."
      },
      {
        id: 2,
        incorrectSentence: "She is married with a doctor.",
        correctSentence: "She is married to a doctor.",
        errorType: "Wrong preposition",
        explanation: "The correct collocation is 'married to', not 'married with'.",
        explanationFr: "La collocation correcte est 'married to', pas 'married with'."
      },
      {
        id: 3,
        incorrectSentence: "I'm waiting you outside.",
        correctSentence: "I'm waiting for you outside.",
        errorType: "Missing preposition",
        explanation: "'Wait' requires 'for' before the object.",
        explanationFr: "'Wait' nécessite 'for' avant le complément."
      },
      {
        id: 4,
        incorrectSentence: "He is good in mathematics.",
        correctSentence: "He is good at mathematics.",
        errorType: "Wrong preposition",
        explanation: "We say 'good at' a subject or skill.",
        explanationFr: "On dit 'good at' pour une matière ou une compétence."
      },
      {
        id: 5,
        incorrectSentence: "The meeting is in Monday.",
        correctSentence: "The meeting is on Monday.",
        errorType: "Wrong preposition",
        explanation: "Use 'on' with days of the week.",
        explanationFr: "Utilisez 'on' avec les jours de la semaine."
      },
      {
        id: 6,
        incorrectSentence: "I depend of my parents financially.",
        correctSentence: "I depend on my parents financially.",
        errorType: "Wrong preposition",
        explanation: "The correct phrase is 'depend on', not 'depend of'.",
        explanationFr: "L'expression correcte est 'depend on', pas 'depend of'."
      },
      {
        id: 7,
        incorrectSentence: "She's been living here since three years.",
        correctSentence: "She's been living here for three years.",
        errorType: "Since vs For",
        explanation: "'For' is used with duration; 'since' with a starting point.",
        explanationFr: "'For' s'utilise avec une durée ; 'since' avec un point de départ."
      },
      {
        id: 8,
        incorrectSentence: "I'm interested for learning French.",
        correctSentence: "I'm interested in learning French.",
        errorType: "Wrong preposition",
        explanation: "We are 'interested in' something, not 'interested for'.",
        explanationFr: "On est 'interested in' quelque chose, pas 'interested for'."
      },
      {
        id: 9,
        incorrectSentence: "He apologized for being late at me.",
        correctSentence: "He apologized to me for being late.",
        errorType: "Preposition order",
        explanation: "The structure is 'apologize to someone for something'.",
        explanationFr: "La structure est 'apologize to someone for something'."
      },
      {
        id: 10,
        incorrectSentence: "We discussed about the problem.",
        correctSentence: "We discussed the problem.",
        errorType: "Unnecessary preposition",
        explanation: "'Discuss' is transitive and doesn't need a preposition.",
        explanationFr: "'Discuss' est transitif et ne nécessite pas de préposition."
      }
    ]
  },
  {
    id: 4,
    title: "Word Order Errors",
    titleFr: "Erreurs d'ordre des mots",
    description: "Fix sentences with incorrect word order",
    descriptionFr: "Corrigez les phrases avec un ordre des mots incorrect",
    theme: "Word Order",
    difficulty: 'medium',
    sentences: [
      {
        id: 1,
        incorrectSentence: "I like very much chocolate.",
        correctSentence: "I like chocolate very much.",
        errorType: "Adverb position",
        explanation: "In English, the object comes directly after the verb.",
        explanationFr: "En anglais, le complément d'objet vient directement après le verbe."
      },
      {
        id: 2,
        incorrectSentence: "She speaks English very well fluently.",
        correctSentence: "She speaks English very fluently.",
        errorType: "Redundant adverbs",
        explanation: "'Very well' and 'fluently' are redundant; choose one modifier.",
        explanationFr: "'Very well' et 'fluently' sont redondants ; choisissez un seul modificateur."
      },
      {
        id: 3,
        incorrectSentence: "Always I wake up at 7 AM.",
        correctSentence: "I always wake up at 7 AM.",
        errorType: "Adverb of frequency",
        explanation: "Frequency adverbs go before the main verb (or after 'be').",
        explanationFr: "Les adverbes de fréquence se placent avant le verbe principal (ou après 'be')."
      },
      {
        id: 4,
        incorrectSentence: "What means this word?",
        correctSentence: "What does this word mean?",
        errorType: "Question formation",
        explanation: "Questions need auxiliary verb: What + does + subject + base verb.",
        explanationFr: "Les questions nécessitent un auxiliaire : What + does + sujet + verbe de base."
      },
      {
        id: 5,
        incorrectSentence: "She gave to me a present.",
        correctSentence: "She gave me a present.",
        errorType: "Indirect object",
        explanation: "With give + indirect object + direct object, no 'to' is needed.",
        explanationFr: "Avec give + complément indirect + complément direct, pas besoin de 'to'."
      },
      {
        id: 6,
        incorrectSentence: "I have a blue beautiful big car.",
        correctSentence: "I have a beautiful big blue car.",
        errorType: "Adjective order",
        explanation: "Adjective order: opinion + size + color. (OSASCOMP rule)",
        explanationFr: "Ordre des adjectifs : opinion + taille + couleur. (règle OSASCOMP)"
      },
      {
        id: 7,
        incorrectSentence: "He told me that where was he going.",
        correctSentence: "He told me where he was going.",
        errorType: "Indirect question",
        explanation: "Indirect questions use statement word order, no 'that'.",
        explanationFr: "Les questions indirectes utilisent l'ordre affirmatif, sans 'that'."
      },
      {
        id: 8,
        incorrectSentence: "Never I have seen such a thing!",
        correctSentence: "Never have I seen such a thing!",
        errorType: "Inversion",
        explanation: "Negative adverbs at start require inversion (Never have I...).",
        explanationFr: "Les adverbes négatifs en début de phrase nécessitent une inversion."
      },
      {
        id: 9,
        incorrectSentence: "I don't know what is his name.",
        correctSentence: "I don't know what his name is.",
        errorType: "Embedded question",
        explanation: "Embedded questions use normal word order (subject + verb).",
        explanationFr: "Les questions enchâssées utilisent l'ordre normal (sujet + verbe)."
      },
      {
        id: 10,
        incorrectSentence: "She enough old is to vote.",
        correctSentence: "She is old enough to vote.",
        errorType: "Enough position",
        explanation: "'Enough' comes after adjectives but before nouns.",
        explanationFr: "'Enough' vient après les adjectifs mais avant les noms."
      }
    ]
  },
  {
    id: 5,
    title: "Pronoun Mistakes",
    titleFr: "Erreurs de pronoms",
    description: "Correct errors with pronouns and possessives",
    descriptionFr: "Corrigez les erreurs de pronoms et possessifs",
    theme: "Pronouns",
    difficulty: 'easy',
    sentences: [
      {
        id: 1,
        incorrectSentence: "Me and my friend went to the cinema.",
        correctSentence: "My friend and I went to the cinema.",
        errorType: "Subject pronoun",
        explanation: "Use 'I' (not 'me') as subject. Put yourself last for politeness.",
        explanationFr: "Utilisez 'I' (pas 'me') comme sujet. Mettez-vous en dernier par politesse."
      },
      {
        id: 2,
        incorrectSentence: "The dog wagged it's tail.",
        correctSentence: "The dog wagged its tail.",
        errorType: "Its vs It's",
        explanation: "'Its' (possessive) vs 'it's' (it is). No apostrophe for possession.",
        explanationFr: "'Its' (possessif) vs 'it's' (it is). Pas d'apostrophe pour la possession."
      },
      {
        id: 3,
        incorrectSentence: "Everyone should bring lunch with themselves.",
        correctSentence: "Everyone should bring their own lunch.",
        errorType: "Reflexive pronoun error",
        explanation: "'Themselves' is incorrect here; 'their own' correctly shows possession. Singular 'they/their' is now standard.",
        explanationFr: "'Everyone' est singulier ; traditionnellement utilisez 'his or her' (bien que 'their' soit de plus en plus accepté)."
      },
      {
        id: 4,
        incorrectSentence: "Between you and I, this is a secret.",
        correctSentence: "Between you and me, this is a secret.",
        errorType: "Object pronoun",
        explanation: "After prepositions, use object pronouns (me, him, her, us, them).",
        explanationFr: "Après les prépositions, utilisez les pronoms objets (me, him, her, us, them)."
      },
      {
        id: 5,
        incorrectSentence: "This book is more interesting than that who I read last week.",
        correctSentence: "This book is more interesting than the one I read last week.",
        errorType: "Relative pronoun",
        explanation: "Use 'the one' or 'that' for things, 'who' only for people.",
        explanationFr: "Utilisez 'the one' ou 'that' pour les choses, 'who' uniquement pour les personnes."
      },
      {
        id: 6,
        incorrectSentence: "Him and her are getting married.",
        correctSentence: "He and she are getting married.",
        errorType: "Subject pronoun",
        explanation: "Subjects of a sentence use subject pronouns (I, he, she, we, they).",
        explanationFr: "Les sujets d'une phrase utilisent les pronoms sujets (I, he, she, we, they)."
      },
      {
        id: 7,
        incorrectSentence: "I hurt me when I fell.",
        correctSentence: "I hurt myself when I fell.",
        errorType: "Reflexive pronoun",
        explanation: "When subject and object are the same person, use reflexive pronouns.",
        explanationFr: "Quand le sujet et l'objet sont la même personne, utilisez les pronoms réfléchis."
      },
      {
        id: 8,
        incorrectSentence: "Each of the students have their own desk.",
        correctSentence: "Each of the students has his or her own desk.",
        errorType: "Agreement",
        explanation: "'Each' is singular, requiring 'has' and singular possessive.",
        explanationFr: "'Each' est singulier, nécessitant 'has' et un possessif singulier."
      },
      {
        id: 9,
        incorrectSentence: "The person which called didn't leave a message.",
        correctSentence: "The person who called didn't leave a message.",
        errorType: "Relative pronoun",
        explanation: "Use 'who' for people, 'which' for things.",
        explanationFr: "Utilisez 'who' pour les personnes, 'which' pour les choses."
      },
      {
        id: 10,
        incorrectSentence: "Your's is the red jacket, right?",
        correctSentence: "Yours is the red jacket, right?",
        errorType: "Possessive pronoun",
        explanation: "Possessive pronouns don't have apostrophes: yours, hers, ours, theirs.",
        explanationFr: "Les pronoms possessifs n'ont pas d'apostrophe : yours, hers, ours, theirs."
      }
    ]
  },
  {
    id: 6,
    title: "Mixed Advanced Errors",
    titleFr: "Erreurs avancées mixtes",
    description: "Challenge yourself with complex grammatical errors",
    descriptionFr: "Mettez-vous au défi avec des erreurs grammaticales complexes",
    theme: "Mixed",
    difficulty: 'hard',
    sentences: [
      {
        id: 1,
        incorrectSentence: "If I would have known, I would have come earlier.",
        correctSentence: "If I had known, I would have come earlier.",
        errorType: "Third conditional",
        explanation: "In third conditional, use 'had + past participle' in the if-clause.",
        explanationFr: "Au troisième conditionnel, utilisez 'had + participe passé' dans la proposition conditionnelle."
      },
      {
        id: 2,
        incorrectSentence: "I suggest him to apply for the job.",
        correctSentence: "I suggest he apply for the job.",
        errorType: "Subjunctive",
        explanation: "After 'suggest', use subjunctive (base form without 'to').",
        explanationFr: "Après 'suggest', utilisez le subjonctif (forme de base sans 'to')."
      },
      {
        id: 3,
        incorrectSentence: "The more you practice, the more better you become.",
        correctSentence: "The more you practice, the better you become.",
        errorType: "Double comparative",
        explanation: "Don't combine 'more' with comparative forms (-er).",
        explanationFr: "Ne combinez pas 'more' avec les formes comparatives (-er)."
      },
      {
        id: 4,
        incorrectSentence: "Despite of the rain, we went hiking.",
        correctSentence: "Despite the rain, we went hiking.",
        errorType: "Despite vs Despite of",
        explanation: "'Despite' is never followed by 'of'. Use 'in spite of' if you want 'of'.",
        explanationFr: "'Despite' n'est jamais suivi de 'of'. Utilisez 'in spite of' si vous voulez 'of'."
      },
      {
        id: 5,
        incorrectSentence: "I've been knowing her for ten years.",
        correctSentence: "I've known her for ten years.",
        errorType: "State verb",
        explanation: "'Know' is a state verb and doesn't use continuous forms.",
        explanationFr: "'Know' est un verbe d'état et ne s'utilise pas aux formes continues."
      },
      {
        id: 6,
        incorrectSentence: "Hardly I had arrived when the phone rang.",
        correctSentence: "Hardly had I arrived when the phone rang.",
        errorType: "Inversion",
        explanation: "Negative adverbs (hardly, scarcely, no sooner) require subject-verb inversion.",
        explanationFr: "Les adverbes négatifs (hardly, scarcely, no sooner) nécessitent une inversion sujet-verbe."
      },
      {
        id: 7,
        incorrectSentence: "I wish I can speak Japanese.",
        correctSentence: "I wish I could speak Japanese.",
        errorType: "Wish + past",
        explanation: "'Wish' for present situations uses past tense (could, were, had).",
        explanationFr: "'Wish' pour les situations présentes utilise le passé (could, were, had)."
      },
      {
        id: 8,
        incorrectSentence: "Not only she is intelligent but also hardworking.",
        correctSentence: "Not only is she intelligent but also hardworking.",
        errorType: "Inversion",
        explanation: "'Not only' at the start requires inversion of subject and auxiliary.",
        explanationFr: "'Not only' en début de phrase nécessite l'inversion du sujet et de l'auxiliaire."
      },
      {
        id: 9,
        incorrectSentence: "He insisted on to pay the bill.",
        correctSentence: "He insisted on paying the bill.",
        errorType: "Gerund after preposition",
        explanation: "After prepositions, use gerund (-ing form), not infinitive.",
        explanationFr: "Après les prépositions, utilisez le gérondif (forme -ing), pas l'infinitif."
      },
      {
        id: 10,
        incorrectSentence: "It's high time we leave.",
        correctSentence: "It's high time we left.",
        errorType: "High time + past",
        explanation: "'It's (high) time' is followed by past tense for present meaning.",
        explanationFr: "'It's (high) time' est suivi du passé pour un sens présent."
      }
    ]
  }
];

export const getErrorCorrectionExerciseById = (id: number): ErrorCorrectionExercise | undefined => {
  return errorCorrectionExercises.find(ex => ex.id === id);
};
