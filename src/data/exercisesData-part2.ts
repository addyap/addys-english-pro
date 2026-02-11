import { Exercise } from './exercisesData';

// Exercises 51-100
export const exercisesData51to100: Exercise[] = [
  {
    id: 51,
    title: "IL Y A : AGO ou THERE IS/ARE",
    description: "AGO (il y a - temps écoulé) et THERE IS/ARE (il y a - existence).",
    questions: [
      { id: 1, question: "I saw her two days ___.", options: ["ago", "there is"], correctAnswer: "ago", explanation: "AGO = il y a (temps passé)." },
      { id: 2, question: "___ a problem.", options: ["Ago", "There is"], correctAnswer: "There is", explanation: "THERE IS = il y a (existence)." },
      { id: 3, question: "He left an hour ___.", options: ["ago", "there are"], correctAnswer: "ago", explanation: "AGO après une durée." },
      { id: 4, question: "___ many people here.", options: ["Ago", "There are"], correctAnswer: "There are", explanation: "THERE ARE = il y a (pluriel)." },
      { id: 5, question: "Three years ___ I lived there.", options: ["ago", "there was"], correctAnswer: "ago", explanation: "AGO = il y a (temps écoulé)." },
      { id: 6, question: "___ no time to waste.", options: ["Ago", "There is"], correctAnswer: "There is", explanation: "THERE IS = il y a (existence)." },
      { id: 7, question: "A long time ___ ...", options: ["ago", "there was"], correctAnswer: "ago", explanation: "A long time ago." },
      { id: 8, question: "___ a meeting tomorrow.", options: ["Ago", "There is"], correctAnswer: "There is", explanation: "THERE IS (futur aussi)." },
      { id: 9, question: "She called five minutes ___.", options: ["ago", "there are"], correctAnswer: "ago", explanation: "AGO après une durée." },
      { id: 10, question: "___ some cookies left.", options: ["Ago", "There are"], correctAnswer: "There are", explanation: "THERE ARE (existence)." }
    ]
  },
  {
    id: 52,
    title: "INFINITIF EN FRANÇAIS : BASE VERBALE ou VERBE EN -ING",
    description: "Choisissez entre la base verbale et le verbe en -ING.",
    questions: [
      { id: 1, question: "I want ___ home.", options: ["to go", "going"], correctAnswer: "to go", explanation: "WANT + TO + verbe." },
      { id: 2, question: "I enjoy ___ music.", options: ["to listen", "listening"], correctAnswer: "listening", explanation: "ENJOY + verbe -ING." },
      { id: 3, question: "She decided ___ early.", options: ["to leave", "leaving"], correctAnswer: "to leave", explanation: "DECIDE + TO + verbe." },
      { id: 4, question: "He suggested ___ a break.", options: ["to take", "taking"], correctAnswer: "taking", explanation: "SUGGEST + verbe -ING." },
      { id: 5, question: "They plan ___ tomorrow.", options: ["to arrive", "arriving"], correctAnswer: "to arrive", explanation: "PLAN + TO + verbe." },
      { id: 6, question: "I miss ___ you.", options: ["to see", "seeing"], correctAnswer: "seeing", explanation: "MISS + verbe -ING." },
      { id: 7, question: "We hope ___ soon.", options: ["to meet", "meeting"], correctAnswer: "to meet", explanation: "HOPE + TO + verbe." },
      { id: 8, question: "She avoids ___ late.", options: ["to be", "being"], correctAnswer: "being", explanation: "AVOID + verbe -ING." },
      { id: 9, question: "He promised ___ on time.", options: ["to come", "coming"], correctAnswer: "to come", explanation: "PROMISE + TO + verbe." },
      { id: 10, question: "I finished ___ the book.", options: ["to read", "reading"], correctAnswer: "reading", explanation: "FINISH + verbe -ING." }
    ]
  },
  {
    id: 53,
    title: "JAMAIS : EVER ou NEVER",
    description: "Distinguez EVER (jamais dans les questions) et NEVER (jamais négatif).",
    questions: [
      { id: 1, question: "Have you ___ been to Paris?", options: ["ever", "never"], correctAnswer: "ever", explanation: "EVER dans les questions." },
      { id: 2, question: "I have ___ seen such a thing.", options: ["ever", "never"], correctAnswer: "never", explanation: "NEVER = ne...jamais." },
      { id: 3, question: "She ___ lies.", options: ["ever", "never"], correctAnswer: "never", explanation: "Phrase négative avec NEVER." },
      { id: 4, question: "Did you ___ meet him?", options: ["ever", "never"], correctAnswer: "ever", explanation: "EVER dans les questions." },
      { id: 5, question: "I will ___ forget this.", options: ["ever", "never"], correctAnswer: "never", explanation: "NEVER = jamais (négatif)." },
      { id: 6, question: "Have you ___ tried sushi?", options: ["ever", "never"], correctAnswer: "ever", explanation: "Question avec EVER." },
      { id: 7, question: "He ___ calls me.", options: ["ever", "never"], correctAnswer: "never", explanation: "NEVER = ne...jamais." },
      { id: 8, question: "Is this the best meal you've ___ had?", options: ["ever", "never"], correctAnswer: "ever", explanation: "EVER dans les questions." },
      { id: 9, question: "They ___ arrive on time.", options: ["ever", "never"], correctAnswer: "never", explanation: "Phrase négative." },
      { id: 10, question: "Will you ___ learn?", options: ["ever", "never"], correctAnswer: "ever", explanation: "Question avec EVER." }
    ]
  },
  {
    id: 54,
    title: "JUSQU'À : UNTIL ou UP TO",
    description: "Distinguez UNTIL (temps) et UP TO (limite/quantité).",
    questions: [
      { id: 1, question: "Wait ___ I come back.", options: ["until", "up to"], correctAnswer: "until", explanation: "UNTIL = jusqu'à (temps)." },
      { id: 2, question: "___ 50 people can attend.", options: ["Until", "Up to"], correctAnswer: "Up to", explanation: "UP TO = jusqu'à (quantité)." },
      { id: 3, question: "The shop is open ___ 8 PM.", options: ["until", "up to"], correctAnswer: "until", explanation: "UNTIL pour l'heure limite." },
      { id: 4, question: "You can spend ___ $100.", options: ["until", "up to"], correctAnswer: "up to", explanation: "UP TO = maximum de." },
      { id: 5, question: "I'll stay here ___ tomorrow.", options: ["until", "up to"], correctAnswer: "until", explanation: "UNTIL = jusqu'à (temps)." },
      { id: 6, question: "Children ___ 12 years old get in free.", options: ["until", "up to"], correctAnswer: "up to", explanation: "UP TO = jusqu'à (âge limite)." },
      { id: 7, question: "Don't leave ___ I tell you.", options: ["until", "up to"], correctAnswer: "until", explanation: "UNTIL dans une phrase temporelle." },
      { id: 8, question: "You can invite ___ 10 guests.", options: ["until", "up to"], correctAnswer: "up to", explanation: "UP TO = maximum de." },
      { id: 9, question: "We worked ___ midnight.", options: ["until", "up to"], correctAnswer: "until", explanation: "UNTIL pour le temps." },
      { id: 10, question: "Discounts of ___ 50%!", options: ["until", "up to"], correctAnswer: "up to", explanation: "UP TO = jusqu'à (pourcentage)." }
    ]
  },
  {
    id: 55,
    title: "LAISSER : LEAVE ou LET",
    description: "LEAVE (partir/laisser qqch) et LET (permettre).",
    questions: [
      { id: 1, question: "___ me help you.", options: ["Leave", "Let"], correctAnswer: "Let", explanation: "LET = permettre." },
      { id: 2, question: "I ___ my keys at home.", options: ["left", "let"], correctAnswer: "left", explanation: "LEAVE = laisser quelque chose." },
      { id: 3, question: "Please ___ him in.", options: ["leave", "let"], correctAnswer: "let", explanation: "LET = permettre d'entrer." },
      { id: 4, question: "She ___ early this morning.", options: ["left", "let"], correctAnswer: "left", explanation: "LEAVE = partir." },
      { id: 5, question: "___ her speak!", options: ["Leave", "Let"], correctAnswer: "Let", explanation: "LET = laisser faire." },
      { id: 6, question: "Don't ___ your bag here.", options: ["leave", "let"], correctAnswer: "leave", explanation: "LEAVE = laisser (objet)." },
      { id: 7, question: "They won't ___ us go.", options: ["leave", "let"], correctAnswer: "let", explanation: "LET = permettre." },
      { id: 8, question: "I ___ the window open.", options: ["left", "let"], correctAnswer: "left", explanation: "LEAVE = laisser (état)." },
      { id: 9, question: "___ me know when you're ready.", options: ["Leave", "Let"], correctAnswer: "Let", explanation: "LET ME KNOW = dis-moi." },
      { id: 10, question: "He ___ the company last year.", options: ["left", "let"], correctAnswer: "left", explanation: "LEAVE = quitter." }
    ]
  },
  {
    id: 56,
    title: "LA PLUPART : MOST ou MOST OF",
    description: "MOST (+ nom général) et MOST OF (+ nom spécifique).",
    questions: [
      { id: 1, question: "___ people like chocolate.", options: ["Most", "Most of"], correctAnswer: "Most", explanation: "MOST + nom général (sans article)." },
      { id: 2, question: "___ the students passed.", options: ["Most", "Most of"], correctAnswer: "Most of", explanation: "MOST OF + article + nom." },
      { id: 3, question: "___ children enjoy games.", options: ["Most", "Most of"], correctAnswer: "Most", explanation: "MOST + nom général." },
      { id: 4, question: "___ my friends are here.", options: ["Most", "Most of"], correctAnswer: "Most of", explanation: "MOST OF + possessif." },
      { id: 5, question: "___ time is wasted.", options: ["Most", "Most of"], correctAnswer: "Most", explanation: "MOST + nom indénombrable général." },
      { id: 6, question: "___ this work is done.", options: ["Most", "Most of"], correctAnswer: "Most of", explanation: "MOST OF + démonstratif." },
      { id: 7, question: "___ countries have a flag.", options: ["Most", "Most of"], correctAnswer: "Most", explanation: "MOST + nom pluriel général." },
      { id: 8, question: "___ these books are old.", options: ["Most", "Most of"], correctAnswer: "Most of", explanation: "MOST OF + these." },
      { id: 9, question: "___ water is clean.", options: ["Most", "Most of"], correctAnswer: "Most", explanation: "MOST + nom général." },
      { id: 10, question: "___ the money was spent.", options: ["Most", "Most of"], correctAnswer: "Most of", explanation: "MOST OF + the." }
    ]
  },
  {
    id: 57,
    title: "LOUER : LET ou RENT",
    description: "LET (louer comme propriétaire) et RENT (louer comme locataire).",
    questions: [
      { id: 1, question: "I ___ an apartment in the city.", options: ["let", "rent"], correctAnswer: "rent", explanation: "RENT = louer (locataire)." },
      { id: 2, question: "She ___ her house to students.", options: ["lets", "rents"], correctAnswer: "lets", explanation: "LET = louer (propriétaire)." },
      { id: 3, question: "We ___ a car for the weekend.", options: ["let", "rent"], correctAnswer: "rent", explanation: "RENT = louer (prendre en location)." },
      { id: 4, question: "He ___ rooms to tourists.", options: ["lets", "rents"], correctAnswer: "lets", explanation: "LET = louer (mettre en location)." },
      { id: 5, question: "They ___ a villa in Spain.", options: ["let", "rent"], correctAnswer: "rent", explanation: "RENT = louer (locataire)." },
      { id: 6, question: "Do you ___ your apartment?", options: ["let", "rent"], correctAnswer: "rent", explanation: "RENT = louer (être locataire)." },
      { id: 7, question: "I ___ out my spare room.", options: ["let", "rent"], correctAnswer: "let", explanation: "LET OUT = mettre en location." },
      { id: 8, question: "We ___ a bike for the day.", options: ["let", "rent"], correctAnswer: "rent", explanation: "RENT = louer (prendre)." },
      { id: 9, question: "She ___ her flat furnished.", options: ["lets", "rents"], correctAnswer: "lets", explanation: "LET = louer (propriétaire)." },
      { id: 10, question: "I ___ from a private landlord.", options: ["let", "rent"], correctAnswer: "rent", explanation: "RENT = louer (locataire)." }
    ]
  },
  {
    id: 58,
    title: "MANQUER : LACK ou MISS",
    description: "LACK (manquer de) et MISS (regretter l'absence de).",
    questions: [
      { id: 1, question: "I ___ you so much!", options: ["lack", "miss"], correctAnswer: "miss", explanation: "MISS = tu me manques." },
      { id: 2, question: "He ___ experience.", options: ["lacks", "misses"], correctAnswer: "lacks", explanation: "LACK = manquer de (ne pas avoir)." },
      { id: 3, question: "She ___ her family.", options: ["lacks", "misses"], correctAnswer: "misses", explanation: "MISS = sa famille lui manque." },
      { id: 4, question: "The project ___ funding.", options: ["lacks", "misses"], correctAnswer: "lacks", explanation: "LACK = manquer de." },
      { id: 5, question: "I ___ the old days.", options: ["lack", "miss"], correctAnswer: "miss", explanation: "MISS = regretter." },
      { id: 6, question: "They ___ confidence.", options: ["lack", "miss"], correctAnswer: "lack", explanation: "LACK = manquer de." },
      { id: 7, question: "Do you ___ home?", options: ["lack", "miss"], correctAnswer: "miss", explanation: "MISS = avoir la nostalgie de." },
      { id: 8, question: "This ___ clarity.", options: ["lacks", "misses"], correctAnswer: "lacks", explanation: "LACK = manquer de clarté." },
      { id: 9, question: "I ___ our conversations.", options: ["lack", "miss"], correctAnswer: "miss", explanation: "MISS = regretter." },
      { id: 10, question: "He ___ the necessary skills.", options: ["lacks", "misses"], correctAnswer: "lacks", explanation: "LACK = ne pas avoir." }
    ]
  },
  {
    id: 59,
    title: "MÊME : EVEN ou SAME",
    description: "EVEN (même, y compris) et SAME (même, identique).",
    questions: [
      { id: 1, question: "___ children can do it.", options: ["Even", "Same"], correctAnswer: "Even", explanation: "EVEN = même (y compris)." },
      { id: 2, question: "We have the ___ car.", options: ["even", "same"], correctAnswer: "same", explanation: "SAME = identique." },
      { id: 3, question: "It's ___ better than before.", options: ["even", "same"], correctAnswer: "even", explanation: "EVEN = encore (davantage)." },
      { id: 4, question: "They wear the ___ clothes.", options: ["even", "same"], correctAnswer: "same", explanation: "SAME = les mêmes." },
      { id: 5, question: "___ I can't believe it!", options: ["Even", "Same"], correctAnswer: "Even", explanation: "EVEN = même (intensif)." },
      { id: 6, question: "We live in the ___ street.", options: ["even", "same"], correctAnswer: "same", explanation: "SAME = la même." },
      { id: 7, question: "He doesn't ___ try.", options: ["even", "same"], correctAnswer: "even", explanation: "EVEN = même pas." },
      { id: 8, question: "It's the ___ problem again.", options: ["even", "same"], correctAnswer: "same", explanation: "SAME = le même." },
      { id: 9, question: "___ if it rains, we'll go.", options: ["Even", "Same"], correctAnswer: "Even", explanation: "EVEN IF = même si." },
      { id: 10, question: "She said the ___ thing.", options: ["even", "same"], correctAnswer: "same", explanation: "SAME = la même chose." }
    ]
  },
  {
    id: 60,
    title: "MOINS : LESS ou LEAST",
    description: "LESS (moins, comparatif) et LEAST (le moins, superlatif).",
    questions: [
      { id: 1, question: "This costs ___ than that.", options: ["less", "least"], correctAnswer: "less", explanation: "LESS = moins (comparaison)." },
      { id: 2, question: "This is the ___ expensive.", options: ["less", "least"], correctAnswer: "least", explanation: "LEAST = le moins (superlatif)." },
      { id: 3, question: "I have ___ time now.", options: ["less", "least"], correctAnswer: "less", explanation: "LESS = moins de." },
      { id: 4, question: "That's the ___ I can do.", options: ["less", "least"], correctAnswer: "least", explanation: "THE LEAST = le minimum." },
      { id: 5, question: "She eats ___ than before.", options: ["less", "least"], correctAnswer: "less", explanation: "LESS THAN = moins que." },
      { id: 6, question: "It's the ___ important issue.", options: ["less", "least"], correctAnswer: "least", explanation: "LEAST = le moins (superlatif)." },
      { id: 7, question: "I'm ___ worried now.", options: ["less", "least"], correctAnswer: "less", explanation: "LESS = moins (comparatif)." },
      { id: 8, question: "This is my ___ favorite.", options: ["less", "least"], correctAnswer: "least", explanation: "LEAST = le moins préféré." },
      { id: 9, question: "There's ___ traffic today.", options: ["less", "least"], correctAnswer: "less", explanation: "LESS = moins de." },
      { id: 10, question: "At ___ we tried.", options: ["less", "least"], correctAnswer: "least", explanation: "AT LEAST = au moins." }
    ]
  },
  {
    id: 61,
    title: "MOTS PROCHES (1)",
    description: "Distinguez des mots similaires mais différents.",
    questions: [
      { id: 1, question: "Can you give me some ___? (conseil)", options: ["advice", "advise"], correctAnswer: "advice", explanation: "ADVICE = conseil (nom)." },
      { id: 2, question: "I ___ you to be careful.", options: ["advice", "advise"], correctAnswer: "advise", explanation: "ADVISE = conseiller (verbe)." },
      { id: 3, question: "What's the ___ on this item? (prix)", options: ["price", "prize"], correctAnswer: "price", explanation: "PRICE = prix." },
      { id: 4, question: "She won first ___.", options: ["price", "prize"], correctAnswer: "prize", explanation: "PRIZE = prix (récompense)." },
      { id: 5, question: "The ___ was very loud.", options: ["noise", "sound"], correctAnswer: "noise", explanation: "NOISE = bruit désagréable." },
      { id: 6, question: "I love the ___ of rain.", options: ["noise", "sound"], correctAnswer: "sound", explanation: "SOUND = son." },
      { id: 7, question: "She has long ___.", options: ["hairs", "hair"], correctAnswer: "hair", explanation: "HAIR = cheveux (indénombrable)." },
      { id: 8, question: "There's a ___ in my soup!", options: ["hair", "hairs"], correctAnswer: "hair", explanation: "A HAIR = un cheveu." },
      { id: 9, question: "The ___ is nice today.", options: ["weather", "time"], correctAnswer: "weather", explanation: "WEATHER = temps (météo)." },
      { id: 10, question: "What ___ is it?", options: ["weather", "time"], correctAnswer: "time", explanation: "TIME = heure." }
    ]
  },
  {
    id: 62,
    title: "MOTS PROCHES (2)",
    description: "Continuez à distinguer des mots similaires.",
    questions: [
      { id: 1, question: "This is a very ___ question.", options: ["special", "especial"], correctAnswer: "special", explanation: "SPECIAL = spécial (courant)." },
      { id: 2, question: "Please take ___ care.", options: ["special", "especial"], correctAnswer: "special", explanation: "SPECIAL CARE = soin particulier." },
      { id: 3, question: "I'm ___ tired.", options: ["actual", "actually"], correctAnswer: "actually", explanation: "ACTUALLY = en fait." },
      { id: 4, question: "The ___ cost was higher.", options: ["actual", "actually"], correctAnswer: "actual", explanation: "ACTUAL = réel." },
      { id: 5, question: "She's very ___ and always makes wise decisions.", options: ["sensible", "sensitive"], correctAnswer: "sensible", explanation: "SENSIBLE = raisonnable, qui fait des choix sages." },
      { id: 6, question: "He's ___ to criticism.", options: ["sensible", "sensitive"], correctAnswer: "sensitive", explanation: "SENSITIVE = sensible (émotif)." },
      { id: 7, question: "What's your ___? (travail)", options: ["work", "job"], correctAnswer: "job", explanation: "JOB = emploi, métier." },
      { id: 8, question: "I have a lot of ___.", options: ["work", "job"], correctAnswer: "work", explanation: "WORK = travail (indénombrable)." },
      { id: 9, question: "Can you ___ me some money?", options: ["lend", "borrow"], correctAnswer: "lend", explanation: "LEND = prêter." },
      { id: 10, question: "Can I ___ your pen?", options: ["lend", "borrow"], correctAnswer: "borrow", explanation: "BORROW = emprunter." }
    ]
  },
  {
    id: 63,
    title: "ORTHOGRAPHE",
    description: "Choisissez la bonne orthographe.",
    questions: [
      { id: 1, question: "Which is correct?", options: ["receive", "recieve"], correctAnswer: "receive", explanation: "I before E except after C." },
      { id: 2, question: "Which is correct?", options: ["wich", "which"], correctAnswer: "which", explanation: "WHICH avec H." },
      { id: 3, question: "Which is correct?", options: ["accommodation", "accomodation"], correctAnswer: "accommodation", explanation: "Deux C, deux M." },
      { id: 4, question: "Which is correct?", options: ["definitely", "definately"], correctAnswer: "definitely", explanation: "DEFINITELY avec I." },
      { id: 5, question: "Which is correct?", options: ["occured", "occurred"], correctAnswer: "occurred", explanation: "Double R." },
      { id: 6, question: "Which is correct?", options: ["separate", "seperate"], correctAnswer: "separate", explanation: "SEPARATE avec A." },
      { id: 7, question: "Which is correct?", options: ["necessary", "neccessary"], correctAnswer: "necessary", explanation: "Un C, deux S." },
      { id: 8, question: "Which is correct?", options: ["until", "untill"], correctAnswer: "until", explanation: "Un seul L." },
      { id: 9, question: "Which is correct?", options: ["tomorrow", "tommorow"], correctAnswer: "tomorrow", explanation: "Un M, deux R." },
      { id: 10, question: "Which is correct?", options: ["rhythm", "rythm"], correctAnswer: "rhythm", explanation: "RHYTHM avec H avant le M." }
    ]
  },
  {
    id: 64,
    title: "OÙ : WHERE ou WHEN",
    description: "WHERE (lieu) et WHEN (temps).",
    questions: [
      { id: 1, question: "___ did you go?", options: ["Where", "When"], correctAnswer: "Where", explanation: "WHERE = où (lieu)." },
      { id: 2, question: "___ did you arrive?", options: ["Where", "When"], correctAnswer: "When", explanation: "WHEN = quand." },
      { id: 3, question: "___ is the meeting?", options: ["Where", "When"], correctAnswer: "Where", explanation: "WHERE = dans quel lieu." },
      { id: 4, question: "___ is your birthday?", options: ["Where", "When"], correctAnswer: "When", explanation: "WHEN = quelle date." },
      { id: 5, question: "This is ___ I live.", options: ["where", "when"], correctAnswer: "where", explanation: "WHERE = où (lieu)." },
      { id: 6, question: "I remember ___ we met.", options: ["where", "when"], correctAnswer: "when", explanation: "WHEN = quand." },
      { id: 7, question: "___ are you from?", options: ["Where", "When"], correctAnswer: "Where", explanation: "WHERE = d'où." },
      { id: 8, question: "___ will you be back?", options: ["Where", "When"], correctAnswer: "When", explanation: "WHEN = à quel moment." },
      { id: 9, question: "The place ___ I was born.", options: ["where", "when"], correctAnswer: "where", explanation: "WHERE = où (relatif de lieu)." },
      { id: 10, question: "The day ___ everything changed.", options: ["where", "when"], correctAnswer: "when", explanation: "WHEN = où (relatif de temps)." }
    ]
  },
  {
    id: 65,
    title: "PAR : BY ou THROUGH",
    description: "BY (par, à côté de) et THROUGH (à travers).",
    questions: [
      { id: 1, question: "The book was written ___ her.", options: ["by", "through"], correctAnswer: "by", explanation: "BY = par (agent)." },
      { id: 2, question: "We walked ___ the forest.", options: ["by", "through"], correctAnswer: "through", explanation: "THROUGH = à travers." },
      { id: 3, question: "I sent it ___ email.", options: ["by", "through"], correctAnswer: "by", explanation: "BY = par (moyen)." },
      { id: 4, question: "Light comes ___ the window.", options: ["by", "through"], correctAnswer: "through", explanation: "THROUGH = par (passage)." },
      { id: 5, question: "Come and sit ___ me.", options: ["by", "through"], correctAnswer: "by", explanation: "BY = à côté de." },
      { id: 6, question: "We drove ___ the tunnel.", options: ["by", "through"], correctAnswer: "through", explanation: "THROUGH = à travers." },
      { id: 7, question: "I go to work ___ bus.", options: ["by", "through"], correctAnswer: "by", explanation: "BY = en (transport)." },
      { id: 8, question: "He looked ___ the telescope.", options: ["by", "through"], correctAnswer: "through", explanation: "THROUGH = dans (regarder à travers)." },
      { id: 9, question: "The house ___ the river.", options: ["by", "through"], correctAnswer: "by", explanation: "BY = près de." },
      { id: 10, question: "I learned ___ experience.", options: ["by", "through"], correctAnswer: "through", explanation: "THROUGH = grâce à." }
    ]
  },
  {
    id: 66,
    title: "PARLER : SPEAK ou TALK",
    description: "SPEAK (parler une langue/formel) et TALK (discuter).",
    questions: [
      { id: 1, question: "Do you ___ English?", options: ["speak", "talk"], correctAnswer: "speak", explanation: "SPEAK + langue." },
      { id: 2, question: "Can we ___?", options: ["speak", "talk"], correctAnswer: "talk", explanation: "TALK = discuter." },
      { id: 3, question: "I need to ___ to you.", options: ["speak", "talk"], correctAnswer: "talk", explanation: "TALK TO = parler avec." },
      { id: 4, question: "She ___ three languages.", options: ["speaks", "talks"], correctAnswer: "speaks", explanation: "SPEAK + langues." },
      { id: 5, question: "They're ___ about the project.", options: ["speaking", "talking"], correctAnswer: "talking", explanation: "TALK ABOUT = parler de." },
      { id: 6, question: "May I ___ to the manager?", options: ["speak", "talk"], correctAnswer: "speak", explanation: "SPEAK (formel)." },
      { id: 7, question: "Stop ___!", options: ["speaking", "talking"], correctAnswer: "talking", explanation: "TALK = bavarder." },
      { id: 8, question: "He ___ very clearly.", options: ["speaks", "talks"], correctAnswer: "speaks", explanation: "SPEAK = s'exprimer." },
      { id: 9, question: "What are you ___ about?", options: ["speaking", "talking"], correctAnswer: "talking", explanation: "TALK ABOUT = discuter de." },
      { id: 10, question: "She ___ on the phone.", options: ["speaks", "talks"], correctAnswer: "talks", explanation: "TALK (conversation téléphonique)." }
    ]
  },
  {
    id: 67,
    title: "PASSÉ COMPOSÉ FRANÇAIS : PRESENT PERFECT ou PRETERIT",
    description: "Choisissez entre present perfect et preterit.",
    questions: [
      { id: 1, question: "I ___ him yesterday.", options: ["have seen", "saw"], correctAnswer: "saw", explanation: "Preterit avec YESTERDAY." },
      { id: 2, question: "I ___ him recently.", options: ["have seen", "saw"], correctAnswer: "have seen", explanation: "Present perfect avec RECENTLY." },
      { id: 3, question: "She ___ there last week.", options: ["has been", "was"], correctAnswer: "was", explanation: "Preterit avec LAST WEEK." },
      { id: 4, question: "She ___ there many times.", options: ["has been", "was"], correctAnswer: "has been", explanation: "Present perfect (expérience)." },
      { id: 5, question: "We ___ in 2020.", options: ["have met", "met"], correctAnswer: "met", explanation: "Preterit avec date précise." },
      { id: 6, question: "We ___ before.", options: ["have met", "met"], correctAnswer: "have met", explanation: "Present perfect avec BEFORE." },
      { id: 7, question: "He ___ his keys this morning.", options: ["has lost", "lost"], correctAnswer: "lost", explanation: "Preterit (matin terminé)." },
      { id: 8, question: "He ___ his keys.", options: ["has lost", "lost"], correctAnswer: "has lost", explanation: "Present perfect (résultat présent)." },
      { id: 9, question: "They ___ three years ago.", options: ["have left", "left"], correctAnswer: "left", explanation: "Preterit avec AGO." },
      { id: 10, question: "They ___ already.", options: ["have left", "left"], correctAnswer: "have left", explanation: "Present perfect avec ALREADY." }
    ]
  },
  {
    id: 68,
    title: "PASSER : PASS ou SPEND",
    description: "PASS (passer devant/transmettre) et SPEND (passer du temps).",
    questions: [
      { id: 1, question: "I ___ two hours waiting.", options: ["passed", "spent"], correctAnswer: "spent", explanation: "SPEND + temps." },
      { id: 2, question: "We ___ the church.", options: ["passed", "spent"], correctAnswer: "passed", explanation: "PASS = passer devant." },
      { id: 3, question: "She ___ the summer in France.", options: ["passed", "spent"], correctAnswer: "spent", explanation: "SPEND + période." },
      { id: 4, question: "He ___ me the salt.", options: ["passed", "spent"], correctAnswer: "passed", explanation: "PASS = passer (transmettre)." },
      { id: 5, question: "I ___ a lot of money.", options: ["pass", "spend"], correctAnswer: "spend", explanation: "SPEND + argent." },
      { id: 6, question: "Did you ___ the exam?", options: ["pass", "spend"], correctAnswer: "pass", explanation: "PASS = réussir." },
      { id: 7, question: "They ___ the weekend together.", options: ["passed", "spent"], correctAnswer: "spent", explanation: "SPEND + temps." },
      { id: 8, question: "Time ___.", options: ["passes", "spends"], correctAnswer: "passes", explanation: "Time PASSES = le temps passe." },
      { id: 9, question: "How do you ___ your free time?", options: ["pass", "spend"], correctAnswer: "spend", explanation: "SPEND time = passer du temps." },
      { id: 10, question: "We ___ by the lake.", options: ["passed", "spent"], correctAnswer: "passed", explanation: "PASS BY = passer à côté de." }
    ]
  },
  {
    id: 69,
    title: "PENDANT : FOR ou DURING",
    description: "FOR (+ durée) et DURING (+ nom/période).",
    questions: [
      { id: 1, question: "I waited ___ two hours.", options: ["for", "during"], correctAnswer: "for", explanation: "FOR + durée chiffrée." },
      { id: 2, question: "I slept ___ the film.", options: ["for", "during"], correctAnswer: "during", explanation: "DURING + nom." },
      { id: 3, question: "She lived there ___ five years.", options: ["for", "during"], correctAnswer: "for", explanation: "FOR + période de temps." },
      { id: 4, question: "It happened ___ the night.", options: ["for", "during"], correctAnswer: "during", explanation: "DURING + the night." },
      { id: 5, question: "I studied ___ three months.", options: ["for", "during"], correctAnswer: "for", explanation: "FOR + durée." },
      { id: 6, question: "___ the meeting, he left.", options: ["For", "During"], correctAnswer: "During", explanation: "DURING + événement." },
      { id: 7, question: "We talked ___ hours.", options: ["for", "during"], correctAnswer: "for", explanation: "FOR hours." },
      { id: 8, question: "___ my childhood, I lived there.", options: ["For", "During"], correctAnswer: "During", explanation: "DURING + période de vie." },
      { id: 9, question: "I'll be away ___ a week.", options: ["for", "during"], correctAnswer: "for", explanation: "FOR + durée." },
      { id: 10, question: "___ the summer, we travel.", options: ["For", "During"], correctAnswer: "During", explanation: "DURING + saison." }
    ]
  },
  {
    id: 70,
    title: "PETIT : LITTLE ou SMALL",
    description: "LITTLE (peu de) et SMALL (petit en taille).",
    questions: [
      { id: 1, question: "It's a very ___ house.", options: ["little", "small"], correctAnswer: "small", explanation: "SMALL = petit (taille)." },
      { id: 2, question: "There's ___ time left.", options: ["little", "small"], correctAnswer: "little", explanation: "LITTLE = peu de (quantité)." },
      { id: 3, question: "She's a ___ girl.", options: ["little", "small"], correctAnswer: "little", explanation: "LITTLE = petite (jeune)." },
      { id: 4, question: "I have ___ money.", options: ["little", "small"], correctAnswer: "little", explanation: "LITTLE = peu de." },
      { id: 5, question: "This shirt is too ___.", options: ["little", "small"], correctAnswer: "small", explanation: "SMALL = petit (taille)." },
      { id: 6, question: "There's ___ hope.", options: ["little", "small"], correctAnswer: "little", explanation: "LITTLE = peu de." },
      { id: 7, question: "A ___ baby.", options: ["little", "small"], correctAnswer: "little", explanation: "LITTLE baby (affectif)." },
      { id: 8, question: "The font is too ___.", options: ["little", "small"], correctAnswer: "small", explanation: "SMALL = petit (dimension)." },
      { id: 9, question: "Very ___ information.", options: ["little", "small"], correctAnswer: "little", explanation: "LITTLE = peu de." },
      { id: 10, question: "A ___ town.", options: ["little", "small"], correctAnswer: "small", explanation: "SMALL town = petite ville." }
    ]
  },
  {
    id: 71,
    title: "PEU : FEW ou LITTLE",
    description: "FEW (+ dénombrable) et LITTLE (+ indénombrable).",
    questions: [
      { id: 1, question: "There are ___ people here.", options: ["few", "little"], correctAnswer: "few", explanation: "FEW + pluriel dénombrable." },
      { id: 2, question: "There's ___ water left.", options: ["few", "little"], correctAnswer: "little", explanation: "LITTLE + indénombrable." },
      { id: 3, question: "I have ___ friends.", options: ["few", "little"], correctAnswer: "few", explanation: "FEW + dénombrable." },
      { id: 4, question: "I have ___ time.", options: ["few", "little"], correctAnswer: "little", explanation: "LITTLE + indénombrable." },
      { id: 5, question: "Very ___ students came.", options: ["few", "little"], correctAnswer: "few", explanation: "FEW + pluriel." },
      { id: 6, question: "Very ___ money.", options: ["few", "little"], correctAnswer: "little", explanation: "LITTLE + indénombrable." },
      { id: 7, question: "A ___ books.", options: ["few", "little"], correctAnswer: "few", explanation: "A FEW = quelques." },
      { id: 8, question: "A ___ sugar.", options: ["few", "little"], correctAnswer: "little", explanation: "A LITTLE = un peu de." },
      { id: 9, question: "Too ___ chairs.", options: ["few", "little"], correctAnswer: "few", explanation: "FEW + dénombrable." },
      { id: 10, question: "Too ___ patience.", options: ["few", "little"], correctAnswer: "little", explanation: "LITTLE + indénombrable." }
    ]
  },
  {
    id: 72,
    title: "(LE) PLUS : -ER/-EST ou MORE/MOST",
    description: "Choisissez la forme correcte du comparatif/superlatif.",
    questions: [
      { id: 1, question: "This is ___.", options: ["easier", "more easy"], correctAnswer: "easier", explanation: "Adjectif court : -ER." },
      { id: 2, question: "It's ___.", options: ["more difficult", "difficulter"], correctAnswer: "more difficult", explanation: "Adjectif long : MORE." },
      { id: 3, question: "The ___ book.", options: ["biggest", "most big"], correctAnswer: "biggest", explanation: "Superlatif court : -EST." },
      { id: 4, question: "The ___ city.", options: ["most beautiful", "beautifulest"], correctAnswer: "most beautiful", explanation: "Superlatif long : MOST." },
      { id: 5, question: "It's ___.", options: ["cheaper", "more cheap"], correctAnswer: "cheaper", explanation: "Adjectif court : -ER." },
      { id: 6, question: "The ___ car.", options: ["most expensive", "expensivest"], correctAnswer: "most expensive", explanation: "Superlatif long : MOST." },
      { id: 7, question: "She's ___.", options: ["younger", "more young"], correctAnswer: "younger", explanation: "Comparatif court : -ER." },
      { id: 8, question: "The ___ film.", options: ["most interesting", "interestingest"], correctAnswer: "most interesting", explanation: "Superlatif long : MOST." },
      { id: 9, question: "It's ___.", options: ["faster", "more fast"], correctAnswer: "faster", explanation: "Comparatif court : -ER." },
      { id: 10, question: "The ___ solution.", options: ["simplest", "most simple"], correctAnswer: "simplest", explanation: "Superlatif court : -EST." }
    ]
  },
  {
    id: 73,
    title: "POLITIQUE : POLITICS ou POLICY",
    description: "POLITICS (la politique) et POLICY (une politique/stratégie).",
    questions: [
      { id: 1, question: "She's interested in ___.", options: ["politics", "policy"], correctAnswer: "politics", explanation: "POLITICS = la politique (domaine)." },
      { id: 2, question: "The company's ___ is clear.", options: ["politics", "policy"], correctAnswer: "policy", explanation: "POLICY = politique (stratégie)." },
      { id: 3, question: "___ is a dirty game.", options: ["Politics", "Policy"], correctAnswer: "Politics", explanation: "POLITICS = la politique générale." },
      { id: 4, question: "Our new ___ on refunds.", options: ["politics", "policy"], correctAnswer: "policy", explanation: "POLICY = règlement." },
      { id: 5, question: "He studied ___.", options: ["politics", "policy"], correctAnswer: "politics", explanation: "POLITICS (science politique)." },
      { id: 6, question: "The government's economic ___.", options: ["politics", "policy"], correctAnswer: "policy", explanation: "POLICY = politique (mesures)." },
      { id: 7, question: "I don't discuss ___.", options: ["politics", "policy"], correctAnswer: "politics", explanation: "POLITICS = la politique." },
      { id: 8, question: "Insurance ___.", options: ["politics", "policy"], correctAnswer: "policy", explanation: "POLICY = police d'assurance." },
      { id: 9, question: "Party ___.", options: ["politics", "policy"], correctAnswer: "politics", explanation: "Party POLITICS." },
      { id: 10, question: "Privacy ___.", options: ["politics", "policy"], correctAnswer: "policy", explanation: "POLICY = règles." }
    ]
  },
  {
    id: 74,
    title: "POUR : FOR ou TO",
    description: "FOR (pour, en faveur de) et TO (pour aller vers).",
    questions: [
      { id: 1, question: "This is ___ you.", options: ["for", "to"], correctAnswer: "for", explanation: "FOR = pour (bénéficiaire)." },
      { id: 2, question: "I went ___ the shop.", options: ["for", "to"], correctAnswer: "to", explanation: "TO = vers (direction)." },
      { id: 3, question: "It's good ___ health.", options: ["for", "to"], correctAnswer: "for", explanation: "GOOD FOR." },
      { id: 4, question: "I need ___ study.", options: ["for", "to"], correctAnswer: "to", explanation: "NEED TO + verbe." },
      { id: 5, question: "I work ___ a company.", options: ["for", "to"], correctAnswer: "for", explanation: "WORK FOR." },
      { id: 6, question: "I want ___ go.", options: ["for", "to"], correctAnswer: "to", explanation: "WANT TO + verbe." },
      { id: 7, question: "A present ___ her.", options: ["for", "to"], correctAnswer: "for", explanation: "FOR = pour (destinataire)." },
      { id: 8, question: "Give it ___ me.", options: ["for", "to"], correctAnswer: "to", explanation: "GIVE TO." },
      { id: 9, question: "It's time ___ dinner.", options: ["for", "to"], correctAnswer: "for", explanation: "TIME FOR + nom." },
      { id: 10, question: "It's time ___ eat.", options: ["for", "to"], correctAnswer: "to", explanation: "TIME TO + verbe." }
    ]
  },
  {
    id: 75,
    title: "PRÉFÉRENCE ET CONSEIL : RATHER ET BETTER",
    description: "RATHER (plutôt, de préférence) et BETTER (mieux).",
    questions: [
      { id: 1, question: "I'd ___ stay home.", options: ["rather", "better"], correctAnswer: "rather", explanation: "WOULD RATHER = préférer." },
      { id: 2, question: "You'd ___ hurry.", options: ["rather", "better"], correctAnswer: "better", explanation: "HAD BETTER = conseil." },
      { id: 3, question: "I'd ___ not go.", options: ["rather", "better"], correctAnswer: "rather", explanation: "WOULD RATHER NOT." },
      { id: 4, question: "We'd ___ leave now.", options: ["rather", "better"], correctAnswer: "better", explanation: "HAD BETTER (conseil urgent)." },
      { id: 5, question: "She'd ___ walk.", options: ["rather", "better"], correctAnswer: "rather", explanation: "Préférence avec RATHER." },
      { id: 6, question: "He'd ___ see a doctor.", options: ["rather", "better"], correctAnswer: "better", explanation: "Conseil avec BETTER." },
      { id: 7, question: "I'd ___ tea than coffee.", options: ["rather", "better"], correctAnswer: "rather", explanation: "RATHER...THAN." },
      { id: 8, question: "You'd ___ be careful.", options: ["rather", "better"], correctAnswer: "better", explanation: "Conseil avec BETTER." },
      { id: 9, question: "Would you ___ sit?", options: ["rather", "better"], correctAnswer: "rather", explanation: "Question de préférence." },
      { id: 10, question: "You'd ___ not be late.", options: ["rather", "better"], correctAnswer: "better", explanation: "Conseil négatif avec BETTER." }
    ]
  },
  {
    id: 76,
    title: "PRÉFIXES : IN- ou UN-",
    description: "Choisissez le bon préfixe négatif.",
    questions: [
      { id: 1, question: "It's ___possible.", options: ["in", "un"], correctAnswer: "in", explanation: "IMPOSSIBLE." },
      { id: 2, question: "This is ___fair.", options: ["in", "un"], correctAnswer: "un", explanation: "UNFAIR." },
      { id: 3, question: "That's ___correct.", options: ["in", "un"], correctAnswer: "in", explanation: "INCORRECT." },
      { id: 4, question: "I'm ___happy.", options: ["in", "un"], correctAnswer: "un", explanation: "UNHAPPY." },
      { id: 5, question: "It's ___complete.", options: ["in", "un"], correctAnswer: "in", explanation: "INCOMPLETE." },
      { id: 6, question: "He's ___able to come.", options: ["in", "un"], correctAnswer: "un", explanation: "UNABLE." },
      { id: 7, question: "It's ___visible.", options: ["in", "un"], correctAnswer: "in", explanation: "INVISIBLE." },
      { id: 8, question: "She's ___certain.", options: ["in", "un"], correctAnswer: "un", explanation: "UNCERTAIN." },
      { id: 9, question: "It's ___accurate.", options: ["in", "un"], correctAnswer: "in", explanation: "INACCURATE." },
      { id: 10, question: "He's ___comfortable.", options: ["in", "un"], correctAnswer: "un", explanation: "UNCOMFORTABLE." }
    ]
  },
  {
    id: 77,
    title: "PREMIER : FIRST ou AUTRES MOTS",
    description: "Distinguez les différentes traductions de 'premier'.",
    questions: [
      { id: 1, question: "The ___ of January.", options: ["first", "one"], correctAnswer: "first", explanation: "Date : FIRST." },
      { id: 2, question: "Page ___ hundred.", options: ["first", "one"], correctAnswer: "one", explanation: "Numéro : ONE." },
      { id: 3, question: "It's his ___ time.", options: ["first", "one"], correctAnswer: "first", explanation: "FIRST time." },
      { id: 4, question: "Chapter ___.", options: ["first", "one"], correctAnswer: "one", explanation: "Numéro de chapitre : ONE." },
      { id: 5, question: "At ___ I didn't understand.", options: ["first", "one"], correctAnswer: "first", explanation: "AT FIRST = au début." },
      { id: 6, question: "Room number ___.", options: ["first", "one"], correctAnswer: "one", explanation: "Numéro : ONE." },
      { id: 7, question: "The ___ prize.", options: ["first", "one"], correctAnswer: "first", explanation: "FIRST prize." },
      { id: 8, question: "Volume ___.", options: ["first", "one"], correctAnswer: "one", explanation: "Numéro de volume : ONE." },
      { id: 9, question: "___ thing in the morning.", options: ["First", "One"], correctAnswer: "First", explanation: "FIRST thing." },
      { id: 10, question: "In the ___ place.", options: ["first", "one"], correctAnswer: "first", explanation: "IN THE FIRST PLACE." }
    ]
  },
  {
    id: 78,
    title: "PRÉSENT : SIMPLE ou BE + VERBE EN -ING",
    description: "Choisissez entre present simple et present continuous.",
    questions: [
      { id: 1, question: "She ___ to school every day.", options: ["goes", "is going"], correctAnswer: "goes", explanation: "Habitude : present simple." },
      { id: 2, question: "She ___ to school now.", options: ["goes", "is going"], correctAnswer: "is going", explanation: "Action en cours : present continuous." },
      { id: 3, question: "I ___ coffee.", options: ["like", "am liking"], correctAnswer: "like", explanation: "Verbe d'état : present simple." },
      { id: 4, question: "What ___ you ___?", options: ["do/do", "are/doing"], correctAnswer: "are/doing", explanation: "Action en cours : BE + -ING." },
      { id: 5, question: "The sun ___ in the east.", options: ["rises", "is rising"], correctAnswer: "rises", explanation: "Vérité générale : present simple." },
      { id: 6, question: "Be quiet! The baby ___.", options: ["sleeps", "is sleeping"], correctAnswer: "is sleeping", explanation: "Action en cours : present continuous." },
      { id: 7, question: "I ___ what you mean.", options: ["understand", "am understanding"], correctAnswer: "understand", explanation: "Verbe d'état : present simple." },
      { id: 8, question: "They ___ a new house.", options: ["build", "are building"], correctAnswer: "are building", explanation: "Action temporaire : present continuous." },
      { id: 9, question: "Water ___ at 100°C.", options: ["boils", "is boiling"], correctAnswer: "boils", explanation: "Fait scientifique : present simple." },
      { id: 10, question: "Listen! Someone ___.", options: ["sings", "is singing"], correctAnswer: "is singing", explanation: "Action en cours : present continuous." }
    ]
  },
  {
    id: 79,
    title: "PRÉSENT FRANÇAIS : PRESENT SIMPLE ou PRESENT PERFECT",
    description: "Traduisez le présent français correctement.",
    questions: [
      { id: 1, question: "I ___ here for 5 years. (J'habite ici depuis 5 ans)", options: ["live", "have lived"], correctAnswer: "have lived", explanation: "Durée avec FOR : present perfect." },
      { id: 2, question: "He ___ English. (Il parle anglais)", options: ["speaks", "has spoken"], correctAnswer: "speaks", explanation: "Fait général : present simple." },
      { id: 3, question: "I ___ him since Monday. (Je ne l'ai pas vu depuis lundi)", options: ["don't see", "haven't seen"], correctAnswer: "haven't seen", explanation: "SINCE : present perfect." },
      { id: 4, question: "She ___ every day. (Elle court tous les jours)", options: ["runs", "has run"], correctAnswer: "runs", explanation: "Habitude : present simple." },
      { id: 5, question: "They ___ married for 10 years. (Ils sont mariés depuis 10 ans)", options: ["are", "have been"], correctAnswer: "have been", explanation: "Durée : present perfect." },
      { id: 6, question: "I ___ you. (Je t'aime)", options: ["love", "have loved"], correctAnswer: "love", explanation: "État actuel : present simple." },
      { id: 7, question: "How long ___ you ___ here? (Depuis quand es-tu ici?)", options: ["do/work", "have/worked"], correctAnswer: "have/worked", explanation: "HOW LONG : present perfect." },
      { id: 8, question: "The shop ___ at 9. (Le magasin ouvre à 9h)", options: ["opens", "has opened"], correctAnswer: "opens", explanation: "Horaire : present simple." },
      { id: 9, question: "I ___ three emails today. (J'ai envoyé 3 emails aujourd'hui)", options: ["send", "have sent"], correctAnswer: "have sent", explanation: "TODAY non terminé : present perfect." },
      { id: 10, question: "Birds ___. (Les oiseaux volent)", options: ["fly", "have flown"], correctAnswer: "fly", explanation: "Vérité générale : present simple." }
    ]
  },
  {
    id: 80,
    title: "PRÉSENT et PASSÉ COMPOSÉ FRANÇAIS : HAVE ou BE",
    description: "Choisissez l'auxiliaire correct.",
    questions: [
      { id: 1, question: "I ___ finished.", options: ["have", "am"], correctAnswer: "have", explanation: "HAVE + participe passé." },
      { id: 2, question: "They ___ gone.", options: ["have", "are"], correctAnswer: "have", explanation: "HAVE GONE (parti)." },
      { id: 3, question: "She ___ sleeping.", options: ["has", "is"], correctAnswer: "is", explanation: "BE + -ING (action en cours)." },
      { id: 4, question: "We ___ eaten.", options: ["have", "are"], correctAnswer: "have", explanation: "HAVE + participe passé." },
      { id: 5, question: "He ___ working.", options: ["has", "is"], correctAnswer: "is", explanation: "BE + -ING." },
      { id: 6, question: "I ___ been there.", options: ["have", "am"], correctAnswer: "have", explanation: "HAVE BEEN." },
      { id: 7, question: "They ___ playing.", options: ["have", "are"], correctAnswer: "are", explanation: "BE + -ING." },
      { id: 8, question: "She ___ left.", options: ["has", "is"], correctAnswer: "has", explanation: "HAVE + participe passé." },
      { id: 9, question: "We ___ waiting.", options: ["have", "are"], correctAnswer: "are", explanation: "BE + -ING." },
      { id: 10, question: "You ___ done well.", options: ["have", "are"], correctAnswer: "have", explanation: "HAVE + participe passé." }
    ]
  },
  {
    id: 81,
    title: "QUE : AS ou THAN",
    description: "AS (aussi...que) et THAN (plus/moins...que).",
    questions: [
      { id: 1, question: "She's taller ___ me.", options: ["as", "than"], correctAnswer: "than", explanation: "Comparatif : THAN." },
      { id: 2, question: "He's as tall ___ you.", options: ["as", "than"], correctAnswer: "as", explanation: "AS...AS (égalité)." },
      { id: 3, question: "It's better ___ before.", options: ["as", "than"], correctAnswer: "than", explanation: "BETTER THAN." },
      { id: 4, question: "Not as good ___ expected.", options: ["as", "than"], correctAnswer: "as", explanation: "AS...AS." },
      { id: 5, question: "More expensive ___ that.", options: ["as", "than"], correctAnswer: "than", explanation: "MORE...THAN." },
      { id: 6, question: "The same ___ yesterday.", options: ["as", "than"], correctAnswer: "as", explanation: "THE SAME AS." },
      { id: 7, question: "Less important ___ you think.", options: ["as", "than"], correctAnswer: "than", explanation: "LESS...THAN." },
      { id: 8, question: "As quickly ___ possible.", options: ["as", "than"], correctAnswer: "as", explanation: "AS...AS POSSIBLE." },
      { id: 9, question: "Older ___ his brother.", options: ["as", "than"], correctAnswer: "than", explanation: "Comparatif : THAN." },
      { id: 10, question: "Just as beautiful ___ her.", options: ["as", "than"], correctAnswer: "as", explanation: "AS...AS." }
    ]
  },
  {
    id: 82,
    title: "QUE : VERBE EN -ING ou TO",
    description: "Choisissez entre -ING et TO après certains verbes.",
    questions: [
      { id: 1, question: "I enjoy ___ books.", options: ["reading", "to read"], correctAnswer: "reading", explanation: "ENJOY + -ING." },
      { id: 2, question: "I want ___ books.", options: ["reading", "to read"], correctAnswer: "to read", explanation: "WANT + TO." },
      { id: 3, question: "She finished ___ the report.", options: ["writing", "to write"], correctAnswer: "writing", explanation: "FINISH + -ING." },
      { id: 4, question: "He decided ___ early.", options: ["leaving", "to leave"], correctAnswer: "to leave", explanation: "DECIDE + TO." },
      { id: 5, question: "They keep ___ me.", options: ["calling", "to call"], correctAnswer: "calling", explanation: "KEEP + -ING." },
      { id: 6, question: "I hope ___ you soon.", options: ["seeing", "to see"], correctAnswer: "to see", explanation: "HOPE + TO." },
      { id: 7, question: "Avoid ___ mistakes.", options: ["making", "to make"], correctAnswer: "making", explanation: "AVOID + -ING." },
      { id: 8, question: "We plan ___ tomorrow.", options: ["going", "to go"], correctAnswer: "to go", explanation: "PLAN + TO." },
      { id: 9, question: "I don't mind ___.", options: ["waiting", "to wait"], correctAnswer: "waiting", explanation: "MIND + -ING." },
      { id: 10, question: "She promised ___ on time.", options: ["being", "to be"], correctAnswer: "to be", explanation: "PROMISE + TO." }
    ]
  },
  {
    id: 83,
    title: "QUE : THAT ou WHAT",
    description: "THAT (que, subordonnée) et WHAT (ce que).",
    questions: [
      { id: 1, question: "I know ___ he said.", options: ["that", "what"], correctAnswer: "what", explanation: "WHAT = ce que (objet)." },
      { id: 2, question: "I know ___ he's right.", options: ["that", "what"], correctAnswer: "that", explanation: "THAT = que (conjonction)." },
      { id: 3, question: "Tell me ___ happened.", options: ["that", "what"], correctAnswer: "what", explanation: "WHAT = ce qui." },
      { id: 4, question: "I think ___ it's good.", options: ["that", "what"], correctAnswer: "that", explanation: "THINK THAT." },
      { id: 5, question: "___ you need is rest.", options: ["That", "What"], correctAnswer: "What", explanation: "WHAT = ce dont (sujet)." },
      { id: 6, question: "The book ___ I read.", options: ["that", "what"], correctAnswer: "that", explanation: "THAT (pronom relatif)." },
      { id: 7, question: "I don't know ___ to do.", options: ["that", "what"], correctAnswer: "what", explanation: "WHAT + TO." },
      { id: 8, question: "She said ___ she would come.", options: ["that", "what"], correctAnswer: "that", explanation: "SAY THAT." },
      { id: 9, question: "Show me ___ you bought.", options: ["that", "what"], correctAnswer: "what", explanation: "WHAT = ce que." },
      { id: 10, question: "Is it true ___ he left?", options: ["that", "what"], correctAnswer: "that", explanation: "TRUE THAT." }
    ]
  },
  {
    id: 84,
    title: "QUESTIONS EN HOW",
    description: "Choisissez la bonne expression avec HOW.",
    questions: [
      { id: 1, question: "___ are you?", options: ["How", "How old"], correctAnswer: "How", explanation: "HOW = comment (état)." },
      { id: 2, question: "___ is she?", options: ["How", "How old"], correctAnswer: "How old", explanation: "HOW OLD = quel âge." },
      { id: 3, question: "___ is it?", options: ["How far", "How long"], correctAnswer: "How far", explanation: "HOW FAR = à quelle distance." },
      { id: 4, question: "___ does it take?", options: ["How far", "How long"], correctAnswer: "How long", explanation: "HOW LONG = combien de temps." },
      { id: 5, question: "___ is this?", options: ["How much", "How many"], correctAnswer: "How much", explanation: "HOW MUCH = combien (prix)." },
      { id: 6, question: "___ people?", options: ["How much", "How many"], correctAnswer: "How many", explanation: "HOW MANY + dénombrable." },
      { id: 7, question: "___ do you go?", options: ["How often", "How long"], correctAnswer: "How often", explanation: "HOW OFTEN = à quelle fréquence." },
      { id: 8, question: "___ is the river?", options: ["How deep", "How long"], correctAnswer: "How deep", explanation: "HOW DEEP = quelle profondeur." },
      { id: 9, question: "___ is the building?", options: ["How high", "How long"], correctAnswer: "How high", explanation: "HOW HIGH = quelle hauteur." },
      { id: 10, question: "___ is the table?", options: ["How wide", "How tall"], correctAnswer: "How wide", explanation: "HOW WIDE = quelle largeur." }
    ]
  },
  {
    id: 85,
    title: "QUESTIONS EN WH-",
    description: "Choisissez le bon mot interrogatif.",
    questions: [
      { id: 1, question: "___ is your name?", options: ["What", "Who"], correctAnswer: "What", explanation: "WHAT = quel/quoi." },
      { id: 2, question: "___ is calling?", options: ["What", "Who"], correctAnswer: "Who", explanation: "WHO = qui (personne)." },
      { id: 3, question: "___ are you from?", options: ["Where", "When"], correctAnswer: "Where", explanation: "WHERE = d'où." },
      { id: 4, question: "___ is your birthday?", options: ["Where", "When"], correctAnswer: "When", explanation: "WHEN = quand." },
      { id: 5, question: "___ did you do that?", options: ["Why", "How"], correctAnswer: "Why", explanation: "WHY = pourquoi." },
      { id: 6, question: "___ did you do it?", options: ["Why", "How"], correctAnswer: "How", explanation: "HOW = comment." },
      { id: 7, question: "___ book is this?", options: ["Which", "Whose"], correctAnswer: "Whose", explanation: "WHOSE = à qui." },
      { id: 8, question: "___ one do you prefer?", options: ["Which", "Whose"], correctAnswer: "Which", explanation: "WHICH = lequel." },
      { id: 9, question: "___ time is it?", options: ["What", "Which"], correctAnswer: "What", explanation: "WHAT TIME." },
      { id: 10, question: "___ color do you like?", options: ["What", "Which"], correctAnswer: "What", explanation: "WHAT COLOR." }
    ]
  },
  {
    id: 86,
    title: "QUI : WHO ou WHICH",
    description: "WHO (personnes) et WHICH (choses/animaux).",
    questions: [
      { id: 1, question: "The man ___ lives here.", options: ["who", "which"], correctAnswer: "who", explanation: "WHO = qui (personne)." },
      { id: 2, question: "The book ___ I read.", options: ["who", "which"], correctAnswer: "which", explanation: "WHICH = qui/que (chose)." },
      { id: 3, question: "People ___ work hard.", options: ["who", "which"], correctAnswer: "who", explanation: "WHO pour les personnes." },
      { id: 4, question: "The car ___ is red.", options: ["who", "which"], correctAnswer: "which", explanation: "WHICH pour les choses." },
      { id: 5, question: "The woman ___ called.", options: ["who", "which"], correctAnswer: "who", explanation: "WHO pour une personne." },
      { id: 6, question: "The film ___ won.", options: ["who", "which"], correctAnswer: "which", explanation: "WHICH pour un film." },
      { id: 7, question: "Anyone ___ wants.", options: ["who", "which"], correctAnswer: "who", explanation: "WHO pour les personnes." },
      { id: 8, question: "The house ___ we bought.", options: ["who", "which"], correctAnswer: "which", explanation: "WHICH pour une maison." },
      { id: 9, question: "The teacher ___ taught us.", options: ["who", "which"], correctAnswer: "who", explanation: "WHO pour une personne." },
      { id: 10, question: "The problem ___ we face.", options: ["who", "which"], correctAnswer: "which", explanation: "WHICH pour une chose." }
    ]
  },
  {
    id: 87,
    title: "RAPPELER : REMEMBER ou REMIND",
    description: "REMEMBER (se souvenir) et REMIND (rappeler à quelqu'un).",
    questions: [
      { id: 1, question: "I can't ___ his name.", options: ["remember", "remind"], correctAnswer: "remember", explanation: "REMEMBER = se souvenir." },
      { id: 2, question: "Please ___ me to call.", options: ["remember", "remind"], correctAnswer: "remind", explanation: "REMIND = rappeler à quelqu'un." },
      { id: 3, question: "Do you ___ me?", options: ["remember", "remind"], correctAnswer: "remember", explanation: "REMEMBER = se souvenir de." },
      { id: 4, question: "This ___ me of home.", options: ["remembers", "reminds"], correctAnswer: "reminds", explanation: "REMIND OF = rappeler (évoquer)." },
      { id: 5, question: "I ___ meeting you.", options: ["remember", "remind"], correctAnswer: "remember", explanation: "REMEMBER + -ING." },
      { id: 6, question: "___ her to bring the key.", options: ["Remember", "Remind"], correctAnswer: "Remind", explanation: "REMIND somebody TO." },
      { id: 7, question: "I don't ___ that.", options: ["remember", "remind"], correctAnswer: "remember", explanation: "REMEMBER = se souvenir." },
      { id: 8, question: "You ___ me of someone.", options: ["remember", "remind"], correctAnswer: "remind", explanation: "REMIND OF." },
      { id: 9, question: "___ to lock the door.", options: ["Remember", "Remind"], correctAnswer: "Remember", explanation: "REMEMBER TO (rappel à soi-même)." },
      { id: 10, question: "Let me ___ you.", options: ["remember", "remind"], correctAnswer: "remind", explanation: "REMIND = rappeler à." }
    ]
  },
  {
    id: 88,
    title: "SE (1) : -SELF/-SELVES ou EACH OTHER",
    description: "Pronoms réfléchis vs réciproques.",
    questions: [
      { id: 1, question: "He hurt ___.", options: ["himself", "each other"], correctAnswer: "himself", explanation: "Réfléchi (se blesser soi-même)." },
      { id: 2, question: "They love ___.", options: ["themselves", "each other"], correctAnswer: "each other", explanation: "Réciproque (s'aimer l'un l'autre)." },
      { id: 3, question: "I can do it ___.", options: ["myself", "each other"], correctAnswer: "myself", explanation: "Réfléchi (moi-même)." },
      { id: 4, question: "We know ___.", options: ["ourselves", "each other"], correctAnswer: "each other", explanation: "Réciproque (se connaître)." },
      { id: 5, question: "She looked at ___.", options: ["herself", "each other"], correctAnswer: "herself", explanation: "Réfléchi (se regarder)." },
      { id: 6, question: "They helped ___.", options: ["themselves", "each other"], correctAnswer: "each other", explanation: "Réciproque (s'entraider)." },
      { id: 7, question: "Make ___ comfortable.", options: ["yourself", "each other"], correctAnswer: "yourself", explanation: "Réfléchi." },
      { id: 8, question: "We see ___ often.", options: ["ourselves", "each other"], correctAnswer: "each other", explanation: "Réciproque." },
      { id: 9, question: "He taught ___.", options: ["himself", "each other"], correctAnswer: "himself", explanation: "Réfléchi (autodidacte)." },
      { id: 10, question: "They respect ___.", options: ["themselves", "each other"], correctAnswer: "each other", explanation: "Réciproque." }
    ]
  },
  {
    id: 89,
    title: "SE (2) : -SELF ou Ø",
    description: "Pronom réfléchi ou pas de pronom.",
    questions: [
      { id: 1, question: "I washed ___.", options: ["myself", "Ø"], correctAnswer: "myself", explanation: "SE laver = wash oneself." },
      { id: 2, question: "I washed the car ___.", options: ["myself", "Ø"], correctAnswer: "Ø", explanation: "Laver qqch (pas réfléchi)." },
      { id: 3, question: "She dressed ___.", options: ["herself", "Ø"], correctAnswer: "herself", explanation: "S'habiller = dress oneself." },
      { id: 4, question: "He shaved ___.", options: ["himself", "Ø"], correctAnswer: "himself", explanation: "Se raser = shave oneself." },
      { id: 5, question: "We enjoyed ___.", options: ["ourselves", "Ø"], correctAnswer: "ourselves", explanation: "S'amuser = enjoy oneself." },
      { id: 6, question: "I feel ___ better.", options: ["myself", "Ø"], correctAnswer: "Ø", explanation: "FEEL (pas réfléchi)." },
      { id: 7, question: "She introduced ___.", options: ["herself", "Ø"], correctAnswer: "herself", explanation: "Se présenter = introduce oneself." },
      { id: 8, question: "I remember ___ well.", options: ["myself", "Ø"], correctAnswer: "Ø", explanation: "REMEMBER (pas réfléchi)." },
      { id: 9, question: "They behaved ___.", options: ["themselves", "Ø"], correctAnswer: "themselves", explanation: "Se comporter = behave oneself." },
      { id: 10, question: "I concentrate ___ better.", options: ["myself", "Ø"], correctAnswer: "Ø", explanation: "CONCENTRATE (pas réfléchi)." }
    ]
  },
  {
    id: 90,
    title: "SENTIR : FEEL ou SMELL",
    description: "FEEL (sentir par le toucher/ressentir) et SMELL (sentir par l'odorat).",
    questions: [
      { id: 1, question: "I ___ happy.", options: ["feel", "smell"], correctAnswer: "feel", explanation: "FEEL = se sentir (ressentir)." },
      { id: 2, question: "This ___ good!", options: ["feels", "smells"], correctAnswer: "smells", explanation: "SMELL = sentir bon (odeur)." },
      { id: 3, question: "I can ___ smoke.", options: ["feel", "smell"], correctAnswer: "smell", explanation: "SMELL = sentir (odorat)." },
      { id: 4, question: "This fabric ___ soft.", options: ["feels", "smells"], correctAnswer: "feels", explanation: "FEEL = être doux au toucher." },
      { id: 5, question: "I ___ tired.", options: ["feel", "smell"], correctAnswer: "feel", explanation: "FEEL = se sentir." },
      { id: 6, question: "The flowers ___ beautiful.", options: ["feel", "smell"], correctAnswer: "smell", explanation: "SMELL = sentir (parfum)." },
      { id: 7, question: "I ___ a pain in my leg.", options: ["feel", "smell"], correctAnswer: "feel", explanation: "FEEL = ressentir (douleur)." },
      { id: 8, question: "Something ___ bad.", options: ["feels", "smells"], correctAnswer: "smells", explanation: "SMELL = sentir mauvais." },
      { id: 9, question: "I ___ the warmth.", options: ["feel", "smell"], correctAnswer: "feel", explanation: "FEEL = sentir (toucher)." },
      { id: 10, question: "I ___ gas!", options: ["feel", "smell"], correctAnswer: "smell", explanation: "SMELL = sentir (odorat)." }
    ]
  },
  {
    id: 91,
    title: "SEUL : ALONE/LONELY ou ONLY",
    description: "ALONE (seul physiquement), LONELY (solitaire), ONLY (seulement).",
    questions: [
      { id: 1, question: "I live ___.", options: ["alone", "only"], correctAnswer: "alone", explanation: "ALONE = seul (sans compagnie)." },
      { id: 2, question: "I have ___ one.", options: ["alone", "only"], correctAnswer: "only", explanation: "ONLY = seulement." },
      { id: 3, question: "She feels ___.", options: ["lonely", "only"], correctAnswer: "lonely", explanation: "LONELY = solitaire (triste)." },
      { id: 4, question: "He's the ___ one.", options: ["alone", "only"], correctAnswer: "only", explanation: "ONLY = seul (unique)." },
      { id: 5, question: "I was all ___.", options: ["alone", "only"], correctAnswer: "alone", explanation: "ALL ALONE = tout seul." },
      { id: 6, question: "It's ___ a game.", options: ["alone", "only"], correctAnswer: "only", explanation: "ONLY = seulement." },
      { id: 7, question: "Do you feel ___?", options: ["lonely", "only"], correctAnswer: "lonely", explanation: "LONELY = sentiment de solitude." },
      { id: 8, question: "Leave me ___!", options: ["alone", "only"], correctAnswer: "alone", explanation: "LEAVE ALONE = laisser tranquille." },
      { id: 9, question: "It costs ___ $5.", options: ["alone", "only"], correctAnswer: "only", explanation: "ONLY = seulement." },
      { id: 10, question: "A ___ child.", options: ["lonely", "only"], correctAnswer: "lonely", explanation: "LONELY child = enfant solitaire." }
    ]
  },
  {
    id: 92,
    title: "SINGULIER ou PLURIEL",
    description: "Choisissez la forme correcte (singulier/pluriel).",
    questions: [
      { id: 1, question: "The news ___ good.", options: ["is", "are"], correctAnswer: "is", explanation: "NEWS est singulier." },
      { id: 2, question: "These scissors ___ sharp.", options: ["is", "are"], correctAnswer: "are", explanation: "SCISSORS est pluriel." },
      { id: 3, question: "Mathematics ___ difficult.", options: ["is", "are"], correctAnswer: "is", explanation: "MATHEMATICS est singulier." },
      { id: 4, question: "My trousers ___ dirty.", options: ["is", "are"], correctAnswer: "are", explanation: "TROUSERS est pluriel." },
      { id: 5, question: "The police ___ coming.", options: ["is", "are"], correctAnswer: "are", explanation: "POLICE est pluriel." },
      { id: 6, question: "Physics ___ my favorite.", options: ["is", "are"], correctAnswer: "is", explanation: "PHYSICS est singulier." },
      { id: 7, question: "These glasses ___ broken.", options: ["is", "are"], correctAnswer: "are", explanation: "GLASSES (lunettes) est pluriel." },
      { id: 8, question: "The information ___ useful.", options: ["is", "are"], correctAnswer: "is", explanation: "INFORMATION est singulier." },
      { id: 9, question: "People ___ waiting.", options: ["is", "are"], correctAnswer: "are", explanation: "PEOPLE est pluriel." },
      { id: 10, question: "Advice ___ needed.", options: ["is", "are"], correctAnswer: "is", explanation: "ADVICE est singulier." }
    ]
  },
  {
    id: 93,
    title: "SUFFIXES : -ABLE ou -IBLE",
    description: "Choisissez le bon suffixe.",
    questions: [
      { id: 1, question: "It's unbeliev___.", options: ["able", "ible"], correctAnswer: "able", explanation: "UNBELIEVABLE." },
      { id: 2, question: "It's poss___.", options: ["able", "ible"], correctAnswer: "ible", explanation: "POSSIBLE." },
      { id: 3, question: "Very comfort___.", options: ["able", "ible"], correctAnswer: "able", explanation: "COMFORTABLE." },
      { id: 4, question: "He's respons___.", options: ["able", "ible"], correctAnswer: "ible", explanation: "RESPONSIBLE." },
      { id: 5, question: "It's remark___.", options: ["able", "ible"], correctAnswer: "able", explanation: "REMARKABLE." },
      { id: 6, question: "Barely vis___.", options: ["able", "ible"], correctAnswer: "ible", explanation: "VISIBLE." },
      { id: 7, question: "Very enjoy___.", options: ["able", "ible"], correctAnswer: "able", explanation: "ENJOYABLE." },
      { id: 8, question: "It's terr___.", options: ["able", "ible"], correctAnswer: "ible", explanation: "TERRIBLE." },
      { id: 9, question: "Quite reason___.", options: ["able", "ible"], correctAnswer: "able", explanation: "REASONABLE." },
      { id: 10, question: "Completely access___.", options: ["able", "ible"], correctAnswer: "ible", explanation: "ACCESSIBLE." }
    ]
  },
  {
    id: 94,
    title: "TOUJOURS : ALWAYS ou STILL",
    description: "ALWAYS (toujours, répétition) et STILL (encore, continuation).",
    questions: [
      { id: 1, question: "He ___ arrives late.", options: ["always", "still"], correctAnswer: "always", explanation: "ALWAYS = toujours (habitude)." },
      { id: 2, question: "Is he ___ here?", options: ["always", "still"], correctAnswer: "still", explanation: "STILL = encore (présent)." },
      { id: 3, question: "I ___ love you.", options: ["always", "still"], correctAnswer: "always", explanation: "ALWAYS = toujours." },
      { id: 4, question: "I ___ live there.", options: ["always", "still"], correctAnswer: "still", explanation: "STILL = encore (continuation)." },
      { id: 5, question: "She's ___ complaining.", options: ["always", "still"], correctAnswer: "always", explanation: "ALWAYS (fréquence)." },
      { id: 6, question: "Are you ___ waiting?", options: ["always", "still"], correctAnswer: "still", explanation: "STILL = toujours (en ce moment)." },
      { id: 7, question: "I will ___ remember.", options: ["always", "still"], correctAnswer: "always", explanation: "ALWAYS (pour toujours)." },
      { id: 8, question: "He's ___ working.", options: ["always", "still"], correctAnswer: "still", explanation: "STILL = encore (action continue)." },
      { id: 9, question: "It's ___ the same.", options: ["always", "still"], correctAnswer: "always", explanation: "ALWAYS (invariablement)." },
      { id: 10, question: "I ___ haven't finished.", options: ["always", "still"], correctAnswer: "still", explanation: "STILL = toujours pas." }
    ]
  },
  {
    id: 95,
    title: "TOUT : ALL ou WHOLE",
    description: "ALL (tout, totalité) et WHOLE (entier, complet).",
    questions: [
      { id: 1, question: "___ day long.", options: ["All", "Whole"], correctAnswer: "All", explanation: "ALL day = toute la journée." },
      { id: 2, question: "The ___ day.", options: ["all", "whole"], correctAnswer: "whole", explanation: "WHOLE = entier." },
      { id: 3, question: "___ students passed.", options: ["All", "Whole"], correctAnswer: "All", explanation: "ALL + pluriel." },
      { id: 4, question: "The ___ class.", options: ["all", "whole"], correctAnswer: "whole", explanation: "WHOLE = toute la classe." },
      { id: 5, question: "___ of us.", options: ["All", "Whole"], correctAnswer: "All", explanation: "ALL OF." },
      { id: 6, question: "The ___ world.", options: ["all", "whole"], correctAnswer: "whole", explanation: "WHOLE world = monde entier." },
      { id: 7, question: "___ I know.", options: ["All", "Whole"], correctAnswer: "All", explanation: "ALL (tout ce que)." },
      { id: 8, question: "A ___ year.", options: ["all", "whole"], correctAnswer: "whole", explanation: "WHOLE year = année entière." },
      { id: 9, question: "___ night.", options: ["All", "Whole"], correctAnswer: "All", explanation: "ALL night." },
      { id: 10, question: "The ___ story.", options: ["all", "whole"], correctAnswer: "whole", explanation: "WHOLE story = histoire complète." }
    ]
  },
  {
    id: 96,
    title: "TROP : TOO, TOO MUCH ou TOO MANY",
    description: "TOO (trop + adjectif), TOO MUCH (indénombrable), TOO MANY (dénombrable).",
    questions: [
      { id: 1, question: "It's ___ expensive.", options: ["too", "too much"], correctAnswer: "too", explanation: "TOO + adjectif." },
      { id: 2, question: "There's ___ water.", options: ["too", "too much"], correctAnswer: "too much", explanation: "TOO MUCH + indénombrable." },
      { id: 3, question: "___ people.", options: ["Too much", "Too many"], correctAnswer: "Too many", explanation: "TOO MANY + pluriel." },
      { id: 4, question: "It's ___ late.", options: ["too", "too much"], correctAnswer: "too", explanation: "TOO + adjectif." },
      { id: 5, question: "I ate ___.", options: ["too", "too much"], correctAnswer: "too much", explanation: "ATE TOO MUCH." },
      { id: 6, question: "___ cars.", options: ["Too much", "Too many"], correctAnswer: "Too many", explanation: "TOO MANY + dénombrable." },
      { id: 7, question: "You work ___.", options: ["too", "too much"], correctAnswer: "too much", explanation: "WORK TOO MUCH." },
      { id: 8, question: "___ difficult.", options: ["Too", "Too much"], correctAnswer: "Too", explanation: "TOO + adjectif." },
      { id: 9, question: "___ noise.", options: ["Too much", "Too many"], correctAnswer: "Too much", explanation: "TOO MUCH + indénombrable." },
      { id: 10, question: "___ mistakes.", options: ["Too much", "Too many"], correctAnswer: "Too many", explanation: "TOO MANY + pluriel." }
    ]
  },
  {
    id: 97,
    title: "UN/UNE : A ou AN",
    description: "A (devant consonne) et AN (devant voyelle).",
    questions: [
      { id: 1, question: "___ book.", options: ["a", "an"], correctAnswer: "a", explanation: "A devant consonne." },
      { id: 2, question: "___ apple.", options: ["a", "an"], correctAnswer: "an", explanation: "AN devant voyelle." },
      { id: 3, question: "___ hour.", options: ["a", "an"], correctAnswer: "an", explanation: "AN (H muet)." },
      { id: 4, question: "___ university.", options: ["a", "an"], correctAnswer: "a", explanation: "A (son YOU)." },
      { id: 5, question: "___ elephant.", options: ["a", "an"], correctAnswer: "an", explanation: "AN devant voyelle." },
      { id: 6, question: "___ European country.", options: ["a", "an"], correctAnswer: "a", explanation: "A (son YOU)." },
      { id: 7, question: "___ honest man.", options: ["a", "an"], correctAnswer: "an", explanation: "AN (H muet)." },
      { id: 8, question: "___ umbrella.", options: ["a", "an"], correctAnswer: "an", explanation: "AN devant voyelle." },
      { id: 9, question: "___ one-way street.", options: ["a", "an"], correctAnswer: "a", explanation: "A (son W)." },
      { id: 10, question: "___ MP.", options: ["a", "an"], correctAnswer: "an", explanation: "AN (M se prononce EM)." }
    ]
  },
  {
    id: 98,
    title: "UN/UNE : A/AN ou ONE",
    description: "A/AN (article) et ONE (chiffre).",
    questions: [
      { id: 1, question: "I have ___ dog.", options: ["a", "one"], correctAnswer: "a", explanation: "Article (un parmi d'autres)." },
      { id: 2, question: "I have only ___ dog.", options: ["a", "one"], correctAnswer: "one", explanation: "ONE (chiffre, insistance)." },
      { id: 3, question: "She's ___ teacher.", options: ["a", "one"], correctAnswer: "a", explanation: "Article (métier)." },
      { id: 4, question: "Wait ___ minute.", options: ["a", "one"], correctAnswer: "one", explanation: "ONE minute (précis)." },
      { id: 5, question: "It costs ___ euro.", options: ["a", "one"], correctAnswer: "one", explanation: "ONE (chiffre précis)." },
      { id: 6, question: "What ___ lovely day!", options: ["a", "one"], correctAnswer: "a", explanation: "Article exclamatif." },
      { id: 7, question: "Not ___ single person.", options: ["a", "one"], correctAnswer: "one", explanation: "ONE (emphase)." },
      { id: 8, question: "He's ___ doctor.", options: ["a", "one"], correctAnswer: "a", explanation: "Article (profession)." },
      { id: 9, question: "I need ___ more.", options: ["a", "one"], correctAnswer: "one", explanation: "ONE more (nombre)." },
      { id: 10, question: "___ hundred people.", options: ["A", "One"], correctAnswer: "One", explanation: "ONE hundred (chiffre)." }
    ]
  },
  {
    id: 99,
    title: "VERBES RÉGULIERS ou IRRÉGULIERS",
    description: "Choisissez la forme correcte du passé.",
    questions: [
      { id: 1, question: "I ___ there yesterday.", options: ["goed", "went"], correctAnswer: "went", explanation: "GO-WENT-GONE (irrégulier)." },
      { id: 2, question: "She ___ the door.", options: ["opened", "opent"], correctAnswer: "opened", explanation: "OPEN-OPENED (régulier)." },
      { id: 3, question: "We ___ a lot.", options: ["learnt", "learned"], correctAnswer: "learned", explanation: "LEARN-LEARNED (régulier, US)." },
      { id: 4, question: "He ___ me.", options: ["telled", "told"], correctAnswer: "told", explanation: "TELL-TOLD-TOLD (irrégulier)." },
      { id: 5, question: "They ___ hard.", options: ["worked", "wrought"], correctAnswer: "worked", explanation: "WORK-WORKED (régulier)." },
      { id: 6, question: "I ___ my keys.", options: ["losed", "lost"], correctAnswer: "lost", explanation: "LOSE-LOST-LOST (irrégulier)." },
      { id: 7, question: "She ___ beautifully.", options: ["sang", "singed"], correctAnswer: "sang", explanation: "SING-SANG-SUNG (irrégulier)." },
      { id: 8, question: "We ___ at home.", options: ["stayed", "staid"], correctAnswer: "stayed", explanation: "STAY-STAYED (régulier)." },
      { id: 9, question: "He ___ the ball.", options: ["catched", "caught"], correctAnswer: "caught", explanation: "CATCH-CAUGHT-CAUGHT (irrégulier)." },
      { id: 10, question: "I ___ the game.", options: ["enjoyed", "enjoied"], correctAnswer: "enjoyed", explanation: "ENJOY-ENJOYED (régulier)." }
    ]
  },
  {
    id: 100,
    title: "VOLER : ROB ou STEAL",
    description: "ROB (voler une personne/lieu) et STEAL (voler un objet).",
    questions: [
      { id: 1, question: "They ___ the bank.", options: ["robbed", "stole"], correctAnswer: "robbed", explanation: "ROB + lieu/personne." },
      { id: 2, question: "He ___ my wallet.", options: ["robbed", "stole"], correctAnswer: "stole", explanation: "STEAL + objet." },
      { id: 3, question: "Someone ___ me!", options: ["robbed", "stole"], correctAnswer: "robbed", explanation: "ROB + personne." },
      { id: 4, question: "They ___ the money.", options: ["robbed", "stole"], correctAnswer: "stole", explanation: "STEAL + objet." },
      { id: 5, question: "The house was ___.", options: ["robbed", "stolen"], correctAnswer: "robbed", explanation: "ROB + lieu." },
      { id: 6, question: "My car was ___.", options: ["robbed", "stolen"], correctAnswer: "stolen", explanation: "STEAL + objet." },
      { id: 7, question: "He ___ an old lady.", options: ["robbed", "stole"], correctAnswer: "robbed", explanation: "ROB + personne." },
      { id: 8, question: "She ___ a ring.", options: ["robbed", "stole"], correctAnswer: "stole", explanation: "STEAL + objet." },
      { id: 9, question: "The shop was ___.", options: ["robbed", "stolen"], correctAnswer: "robbed", explanation: "ROB + lieu." },
      { id: 10, question: "Someone ___ my bike.", options: ["robbed", "stole"], correctAnswer: "stole", explanation: "STEAL + objet." }
    ]
  }
];
