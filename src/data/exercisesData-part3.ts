import { Exercise } from './exercisesData';

// Exercises 101-150
export const exercisesData101to150: Exercise[] = [
  {
    id: 101,
    title: "MAKE vs DO",
    description: "Distinguez MAKE (créer/fabriquer) et DO (effectuer une action).",
    questions: [
      { id: 1, question: "Can you ___ me a favor?", options: ["make", "do"], correctAnswer: "do", explanation: "DO a favor = rendre service." },
      { id: 2, question: "She ___ a lot of money.", options: ["makes", "does"], correctAnswer: "makes", explanation: "MAKE money = gagner de l'argent." },
      { id: 3, question: "I need to ___ my homework.", options: ["make", "do"], correctAnswer: "do", explanation: "DO homework = faire ses devoirs." },
      { id: 4, question: "Let's ___ a decision.", options: ["make", "do"], correctAnswer: "make", explanation: "MAKE a decision = prendre une décision." },
      { id: 5, question: "Who ___ the housework?", options: ["makes", "does"], correctAnswer: "does", explanation: "DO the housework = faire le ménage." },
      { id: 6, question: "Don't ___ noise!", options: ["make", "do"], correctAnswer: "make", explanation: "MAKE noise = faire du bruit." },
      { id: 7, question: "She ___ her best.", options: ["made", "did"], correctAnswer: "did", explanation: "DO your best = faire de son mieux." },
      { id: 8, question: "They ___ a mistake.", options: ["made", "did"], correctAnswer: "made", explanation: "MAKE a mistake = faire une erreur." },
      { id: 9, question: "I'm ___ the dishes.", options: ["making", "doing"], correctAnswer: "doing", explanation: "DO the dishes = faire la vaisselle." },
      { id: 10, question: "Can you ___ an appointment?", options: ["make", "do"], correctAnswer: "make", explanation: "MAKE an appointment = prendre RDV." }
    ]
  },
  {
    id: 102,
    title: "SAY vs TELL",
    description: "SAY (dire quelque chose) vs TELL (dire à quelqu'un).",
    questions: [
      { id: 1, question: "She ___ me the truth.", options: ["said", "told"], correctAnswer: "told", explanation: "TELL someone = dire à quelqu'un." },
      { id: 2, question: "What did you ___?", options: ["say", "tell"], correctAnswer: "say", explanation: "SAY = dire (sans complément de personne)." },
      { id: 3, question: "He ___ a lie.", options: ["said", "told"], correctAnswer: "told", explanation: "TELL a lie = mentir." },
      { id: 4, question: "She ___ goodbye.", options: ["said", "told"], correctAnswer: "said", explanation: "SAY goodbye = dire au revoir." },
      { id: 5, question: "Can you ___ me the time?", options: ["say", "tell"], correctAnswer: "tell", explanation: "TELL someone something." },
      { id: 6, question: "He ___ that he was tired.", options: ["said", "told"], correctAnswer: "said", explanation: "SAY that = dire que." },
      { id: 7, question: "Don't ___ her the secret.", options: ["say", "tell"], correctAnswer: "tell", explanation: "TELL someone = révéler à qqn." },
      { id: 8, question: "What did she ___ to you?", options: ["say", "tell"], correctAnswer: "say", explanation: "SAY to someone = dire à qqn." },
      { id: 9, question: "He ___ me a story.", options: ["said", "told"], correctAnswer: "told", explanation: "TELL a story = raconter." },
      { id: 10, question: "I ___ nothing.", options: ["said", "told"], correctAnswer: "said", explanation: "SAY nothing = ne rien dire." }
    ]
  },
  {
    id: 103,
    title: "SPEAK vs TALK",
    description: "SPEAK (plus formel) vs TALK (conversation).",
    questions: [
      { id: 1, question: "Can I ___ to you for a minute?", options: ["speak", "talk"], correctAnswer: "speak", explanation: "SPEAK to = parler à (formel)." },
      { id: 2, question: "We were ___ about the weather.", options: ["speaking", "talking"], correctAnswer: "talking", explanation: "TALK about = discuter de." },
      { id: 3, question: "She ___ three languages.", options: ["speaks", "talks"], correctAnswer: "speaks", explanation: "SPEAK a language." },
      { id: 4, question: "Stop ___ and listen!", options: ["speaking", "talking"], correctAnswer: "talking", explanation: "TALK = bavarder." },
      { id: 5, question: "May I ___ with the manager?", options: ["speak", "talk"], correctAnswer: "speak", explanation: "SPEAK with = formel." },
      { id: 6, question: "They were ___ loudly.", options: ["speaking", "talking"], correctAnswer: "talking", explanation: "TALK = converser." },
      { id: 7, question: "He ___ in public very well.", options: ["speaks", "talks"], correctAnswer: "speaks", explanation: "SPEAK in public = discours." },
      { id: 8, question: "We need to ___.", options: ["speak", "talk"], correctAnswer: "talk", explanation: "TALK = avoir une conversation." },
      { id: 9, question: "She ___ English fluently.", options: ["speaks", "talks"], correctAnswer: "speaks", explanation: "SPEAK a language fluently." },
      { id: 10, question: "Don't ___ to strangers.", options: ["speak", "talk"], correctAnswer: "talk", explanation: "TALK to = conversation." }
    ]
  },
  {
    id: 104,
    title: "WATCH vs LOOK vs SEE",
    description: "WATCH (regarder attentivement), LOOK (diriger le regard), SEE (percevoir).",
    questions: [
      { id: 1, question: "Did you ___ the movie last night?", options: ["watch", "look", "see"], correctAnswer: "see", explanation: "SEE a movie = aller voir un film." },
      { id: 2, question: "I like to ___ TV.", options: ["watch", "look", "see"], correctAnswer: "watch", explanation: "WATCH TV = regarder la télé." },
      { id: 3, question: "___ at this photo!", options: ["Watch", "Look", "See"], correctAnswer: "Look", explanation: "LOOK at = regarder (direction)." },
      { id: 4, question: "I can't ___ without my glasses.", options: ["watch", "look", "see"], correctAnswer: "see", explanation: "SEE = percevoir visuellement." },
      { id: 5, question: "She ___ the children playing.", options: ["watched", "looked", "saw"], correctAnswer: "watched", explanation: "WATCH = observer attentivement." },
      { id: 6, question: "___ out! There's a car!", options: ["Watch", "Look", "See"], correctAnswer: "Watch", explanation: "WATCH OUT = attention!" },
      { id: 7, question: "I ___ a strange man yesterday.", options: ["watched", "looked", "saw"], correctAnswer: "saw", explanation: "SAW = aperçu (passé de SEE)." },
      { id: 8, question: "Don't ___ at the sun.", options: ["watch", "look", "see"], correctAnswer: "look", explanation: "LOOK at = fixer du regard." },
      { id: 9, question: "I'm ___ a football match.", options: ["watching", "looking", "seeing"], correctAnswer: "watching", explanation: "WATCH = suivre un événement." },
      { id: 10, question: "Can you ___ the difference?", options: ["watch", "look", "see"], correctAnswer: "see", explanation: "SEE = percevoir/comprendre." }
    ]
  },
  {
    id: 105,
    title: "BRING vs TAKE",
    description: "BRING (vers le locuteur) vs TAKE (loin du locuteur).",
    questions: [
      { id: 1, question: "Can you ___ me a glass of water?", options: ["bring", "take"], correctAnswer: "bring", explanation: "BRING = apporter (vers soi)." },
      { id: 2, question: "Don't forget to ___ your umbrella.", options: ["bring", "take"], correctAnswer: "take", explanation: "TAKE = emporter (en partant)." },
      { id: 3, question: "She ___ her friend to the party.", options: ["brought", "took"], correctAnswer: "brought", explanation: "BRING = amener (vers l'événement)." },
      { id: 4, question: "I'll ___ the kids to school.", options: ["bring", "take"], correctAnswer: "take", explanation: "TAKE = emmener (loin de soi)." },
      { id: 5, question: "___ me the book, please.", options: ["Bring", "Take"], correctAnswer: "Bring", explanation: "BRING = apporter vers moi." },
      { id: 6, question: "Can I ___ you home?", options: ["bring", "take"], correctAnswer: "take", explanation: "TAKE = emmener ailleurs." },
      { id: 7, question: "He ___ his laptop to work.", options: ["brings", "takes"], correctAnswer: "takes", explanation: "TAKE = emporter avec soi." },
      { id: 8, question: "Please ___ some wine when you come.", options: ["bring", "take"], correctAnswer: "bring", explanation: "BRING = apporter en venant." },
      { id: 9, question: "They ___ the dog for a walk.", options: ["bring", "take"], correctAnswer: "take", explanation: "TAKE for a walk." },
      { id: 10, question: "She ___ flowers for her mother.", options: ["brought", "took"], correctAnswer: "brought", explanation: "BRING = apporter en cadeau." }
    ]
  },
  {
    id: 106,
    title: "BORROW vs LEND",
    description: "BORROW (emprunter) vs LEND (prêter).",
    questions: [
      { id: 1, question: "Can I ___ your pen?", options: ["borrow", "lend"], correctAnswer: "borrow", explanation: "BORROW = emprunter." },
      { id: 2, question: "Could you ___ me some money?", options: ["borrow", "lend"], correctAnswer: "lend", explanation: "LEND = prêter." },
      { id: 3, question: "She ___ my book last week.", options: ["borrowed", "lent"], correctAnswer: "borrowed", explanation: "BORROW = prendre en prêt." },
      { id: 4, question: "I ___ him €50.", options: ["borrowed", "lent"], correctAnswer: "lent", explanation: "LEND = donner en prêt." },
      { id: 5, question: "Can you ___ me your car?", options: ["borrow", "lend"], correctAnswer: "lend", explanation: "LEND = prêter à quelqu'un." },
      { id: 6, question: "I need to ___ a dictionary.", options: ["borrow", "lend"], correctAnswer: "borrow", explanation: "BORROW = emprunter." },
      { id: 7, question: "He won't ___ his tools.", options: ["borrow", "lend"], correctAnswer: "lend", explanation: "LEND = prêter ses affaires." },
      { id: 8, question: "Don't ___ money from strangers.", options: ["borrow", "lend"], correctAnswer: "borrow", explanation: "BORROW from = emprunter à." },
      { id: 9, question: "She ___ her notes to me.", options: ["borrowed", "lent"], correctAnswer: "lent", explanation: "LEND to = prêter à." },
      { id: 10, question: "May I ___ this book?", options: ["borrow", "lend"], correctAnswer: "borrow", explanation: "BORROW = emprunter." }
    ]
  },
  {
    id: 107,
    title: "COME vs GO",
    description: "COME (vers le locuteur/destination) vs GO (s'éloigner).",
    questions: [
      { id: 1, question: "___ here, please!", options: ["Come", "Go"], correctAnswer: "Come", explanation: "COME = venir (vers moi)." },
      { id: 2, question: "I have to ___ to work.", options: ["come", "go"], correctAnswer: "go", explanation: "GO = aller (ailleurs)." },
      { id: 3, question: "Can you ___ to my party?", options: ["come", "go"], correctAnswer: "come", explanation: "COME = venir (vers moi)." },
      { id: 4, question: "She ___ home early yesterday.", options: ["came", "went"], correctAnswer: "went", explanation: "GO home = rentrer chez soi." },
      { id: 5, question: "I'm ___! See you soon!", options: ["coming", "going"], correctAnswer: "going", explanation: "GOING = je pars." },
      { id: 6, question: "He ___ to see me yesterday.", options: ["came", "went"], correctAnswer: "came", explanation: "COME = il est venu me voir." },
      { id: 7, question: "Let's ___ to the cinema.", options: ["come", "go"], correctAnswer: "go", explanation: "GO = aller quelque part." },
      { id: 8, question: "Are you ___ to the meeting?", options: ["coming", "going"], correctAnswer: "coming", explanation: "COME = y assister." },
      { id: 9, question: "She ___ from France.", options: ["comes", "goes"], correctAnswer: "comes", explanation: "COME from = venir de." },
      { id: 10, question: "Time to ___!", options: ["come", "go"], correctAnswer: "go", explanation: "GO = partir." }
    ]
  },
  {
    id: 108,
    title: "HEAR vs LISTEN",
    description: "HEAR (entendre involontairement) vs LISTEN (écouter volontairement).",
    questions: [
      { id: 1, question: "Did you ___ that noise?", options: ["hear", "listen"], correctAnswer: "hear", explanation: "HEAR = entendre (perception)." },
      { id: 2, question: "I love to ___ to music.", options: ["hear", "listen"], correctAnswer: "listen", explanation: "LISTEN TO = écouter (attention)." },
      { id: 3, question: "Can you ___ me?", options: ["hear", "listen"], correctAnswer: "hear", explanation: "HEAR = m'entendre." },
      { id: 4, question: "___ to your teacher!", options: ["Hear", "Listen"], correctAnswer: "Listen", explanation: "LISTEN = écouter attentivement." },
      { id: 5, question: "I ___ a strange sound.", options: ["heard", "listened"], correctAnswer: "heard", explanation: "HEAR = percevoir un son." },
      { id: 6, question: "Are you ___ to me?", options: ["hearing", "listening"], correctAnswer: "listening", explanation: "LISTEN = prêter attention." },
      { id: 7, question: "She ___ about the accident.", options: ["heard", "listened"], correctAnswer: "heard", explanation: "HEAR about = apprendre (nouvelle)." },
      { id: 8, question: "Let's ___ to some jazz.", options: ["hear", "listen"], correctAnswer: "listen", explanation: "LISTEN TO = écouter (volontaire)." },
      { id: 9, question: "I can't ___ anything.", options: ["hear", "listen"], correctAnswer: "hear", explanation: "HEAR = percevoir des sons." },
      { id: 10, question: "___ carefully!", options: ["Hear", "Listen"], correctAnswer: "Listen", explanation: "LISTEN = écouter avec attention." }
    ]
  },
  {
    id: 109,
    title: "LEARN vs TEACH",
    description: "LEARN (apprendre) vs TEACH (enseigner).",
    questions: [
      { id: 1, question: "Can you ___ me how to swim?", options: ["learn", "teach"], correctAnswer: "teach", explanation: "TEACH = enseigner à quelqu'un." },
      { id: 2, question: "I want to ___ French.", options: ["learn", "teach"], correctAnswer: "learn", explanation: "LEARN = apprendre (acquérir)." },
      { id: 3, question: "She ___ English at university.", options: ["learns", "teaches"], correctAnswer: "teaches", explanation: "TEACH = donner des cours." },
      { id: 4, question: "Children ___ quickly.", options: ["learn", "teach"], correctAnswer: "learn", explanation: "LEARN = apprendre." },
      { id: 5, question: "Who ___ you to drive?", options: ["learned", "taught"], correctAnswer: "taught", explanation: "TEACH = apprendre à qqn." },
      { id: 6, question: "I ___ a lot from this book.", options: ["learned", "taught"], correctAnswer: "learned", explanation: "LEARN from = apprendre de." },
      { id: 7, question: "He ___ mathematics.", options: ["learns", "teaches"], correctAnswer: "teaches", explanation: "TEACH = profession d'enseignant." },
      { id: 8, question: "You'll ___ from your mistakes.", options: ["learn", "teach"], correctAnswer: "learn", explanation: "LEARN = tirer une leçon." },
      { id: 9, question: "Experience ___ us many things.", options: ["learns", "teaches"], correctAnswer: "teaches", explanation: "TEACH = enseigner/montrer." },
      { id: 10, question: "I'm ___ to play guitar.", options: ["learning", "teaching"], correctAnswer: "learning", explanation: "LEARN to = apprendre à." }
    ]
  },
  {
    id: 110,
    title: "WIN vs BEAT vs EARN",
    description: "WIN (gagner un prix/match), BEAT (battre un adversaire), EARN (gagner de l'argent).",
    questions: [
      { id: 1, question: "She ___ the competition.", options: ["won", "beat", "earned"], correctAnswer: "won", explanation: "WIN = remporter une compétition." },
      { id: 2, question: "France ___ Germany 2-1.", options: ["won", "beat", "earned"], correctAnswer: "beat", explanation: "BEAT = battre un adversaire." },
      { id: 3, question: "How much do you ___?", options: ["win", "beat", "earn"], correctAnswer: "earn", explanation: "EARN = gagner (salaire)." },
      { id: 4, question: "He ___ the lottery.", options: ["won", "beat", "earned"], correctAnswer: "won", explanation: "WIN = gagner (loterie)." },
      { id: 5, question: "We ___ them at chess.", options: ["won", "beat", "earned"], correctAnswer: "beat", explanation: "BEAT someone = battre qqn." },
      { id: 6, question: "She ___ a good salary.", options: ["wins", "beats", "earns"], correctAnswer: "earns", explanation: "EARN = percevoir un salaire." },
      { id: 7, question: "Who ___ the game?", options: ["won", "beat", "earned"], correctAnswer: "won", explanation: "WIN = gagner (match)." },
      { id: 8, question: "I can't ___ him at tennis.", options: ["win", "beat", "earn"], correctAnswer: "beat", explanation: "BEAT = vaincre quelqu'un." },
      { id: 9, question: "He ___ his respect.", options: ["won", "beat", "earned"], correctAnswer: "earned", explanation: "EARN respect = mériter le respect." },
      { id: 10, question: "They ___ the championship.", options: ["won", "beat", "earned"], correctAnswer: "won", explanation: "WIN = remporter un titre." }
    ]
  },
  {
    id: 111,
    title: "RISE vs RAISE",
    description: "RISE (s'élever - intransitif) vs RAISE (élever - transitif).",
    questions: [
      { id: 1, question: "The sun ___ in the east.", options: ["rises", "raises"], correctAnswer: "rises", explanation: "RISE = se lever (intransitif)." },
      { id: 2, question: "___ your hand if you know.", options: ["Rise", "Raise"], correctAnswer: "Raise", explanation: "RAISE = lever (transitif)." },
      { id: 3, question: "Prices ___ every year.", options: ["rise", "raise"], correctAnswer: "rise", explanation: "RISE = augmenter (intransitif)." },
      { id: 4, question: "They ___ their children well.", options: ["rose", "raised"], correctAnswer: "raised", explanation: "RAISE children = élever des enfants." },
      { id: 5, question: "He ___ early every morning.", options: ["rises", "raises"], correctAnswer: "rises", explanation: "RISE = se lever (du lit)." },
      { id: 6, question: "The company ___ salaries.", options: ["rose", "raised"], correctAnswer: "raised", explanation: "RAISE = augmenter (transitif)." },
      { id: 7, question: "Smoke ___ into the air.", options: ["rises", "raises"], correctAnswer: "rises", explanation: "RISE = s'élever (fumée)." },
      { id: 8, question: "Don't ___ your voice!", options: ["rise", "raise"], correctAnswer: "raise", explanation: "RAISE = élever (la voix)." },
      { id: 9, question: "The balloon ___ slowly.", options: ["rose", "raised"], correctAnswer: "rose", explanation: "RISE = s'élever (passé)." },
      { id: 10, question: "She ___ money for charity.", options: ["rose", "raised"], correctAnswer: "raised", explanation: "RAISE money = collecter des fonds." }
    ]
  },
  {
    id: 112,
    title: "LIE vs LAY",
    description: "LIE (être allongé - intransitif) vs LAY (poser - transitif).",
    questions: [
      { id: 1, question: "I want to ___ down.", options: ["lie", "lay"], correctAnswer: "lie", explanation: "LIE down = s'allonger." },
      { id: 2, question: "Please ___ the book on the table.", options: ["lie", "lay"], correctAnswer: "lay", explanation: "LAY = poser (transitif)." },
      { id: 3, question: "She was ___ on the beach.", options: ["lying", "laying"], correctAnswer: "lying", explanation: "LIE = être allongé." },
      { id: 4, question: "The hen ___ eggs.", options: ["lies", "lays"], correctAnswer: "lays", explanation: "LAY eggs = pondre des œufs." },
      { id: 5, question: "He ___ in bed all day.", options: ["lay", "laid"], correctAnswer: "lay", explanation: "LAY = passé de LIE." },
      { id: 6, question: "Can you ___ the baby down?", options: ["lie", "lay"], correctAnswer: "lay", explanation: "LAY = poser quelqu'un." },
      { id: 7, question: "The book ___ on the floor.", options: ["lies", "lays"], correctAnswer: "lies", explanation: "LIE = être posé." },
      { id: 8, question: "They ___ the foundation.", options: ["lay", "laid"], correctAnswer: "laid", explanation: "LAY = poser (passé: laid)." },
      { id: 9, question: "Don't just ___ there!", options: ["lie", "lay"], correctAnswer: "lie", explanation: "LIE = être allongé." },
      { id: 10, question: "She ___ the table for dinner.", options: ["lay", "laid"], correctAnswer: "laid", explanation: "LAY the table = mettre la table." }
    ]
  },
  {
    id: 113,
    title: "HOPE vs WISH vs EXPECT",
    description: "HOPE (espérer - réaliste), WISH (souhaiter - irréel), EXPECT (s'attendre à).",
    questions: [
      { id: 1, question: "I ___ you have a good trip!", options: ["hope", "wish", "expect"], correctAnswer: "hope", explanation: "HOPE = j'espère (possible)." },
      { id: 2, question: "I ___ I were taller.", options: ["hope", "wish", "expect"], correctAnswer: "wish", explanation: "WISH + past = irréel présent." },
      { id: 3, question: "I ___ him to arrive at 5.", options: ["hope", "wish", "expect"], correctAnswer: "expect", explanation: "EXPECT = s'attendre à." },
      { id: 4, question: "I ___ you a happy birthday!", options: ["hope", "wish", "expect"], correctAnswer: "wish", explanation: "WISH someone = souhaiter à qqn." },
      { id: 5, question: "I ___ the weather will be nice.", options: ["hope", "wish", "expect"], correctAnswer: "hope", explanation: "HOPE = espérer (futur possible)." },
      { id: 6, question: "I ___ I could fly.", options: ["hope", "wish", "expect"], correctAnswer: "wish", explanation: "WISH = si seulement (impossible)." },
      { id: 7, question: "What do you ___ to happen?", options: ["hope", "wish", "expect"], correctAnswer: "expect", explanation: "EXPECT = anticiper." },
      { id: 8, question: "I ___ to see you soon.", options: ["hope", "wish", "expect"], correctAnswer: "hope", explanation: "HOPE = espérer." },
      { id: 9, question: "I ___ I hadn't said that.", options: ["hope", "wish", "expect"], correctAnswer: "wish", explanation: "WISH + past perfect = regret." },
      { id: 10, question: "She ___ everyone to work hard.", options: ["hopes", "wishes", "expects"], correctAnswer: "expects", explanation: "EXPECT = exiger/attendre." }
    ]
  },
  {
    id: 114,
    title: "REMEMBER vs REMIND",
    description: "REMEMBER (se souvenir) vs REMIND (rappeler à quelqu'un).",
    questions: [
      { id: 1, question: "I ___ meeting her.", options: ["remember", "remind"], correctAnswer: "remember", explanation: "REMEMBER = se souvenir de." },
      { id: 2, question: "Please ___ me to call her.", options: ["remember", "remind"], correctAnswer: "remind", explanation: "REMIND = rappeler à qqn." },
      { id: 3, question: "Do you ___ his name?", options: ["remember", "remind"], correctAnswer: "remember", explanation: "REMEMBER = se rappeler." },
      { id: 4, question: "This song ___ me of you.", options: ["remembers", "reminds"], correctAnswer: "reminds", explanation: "REMIND of = faire penser à." },
      { id: 5, question: "I can't ___ where I put it.", options: ["remember", "remind"], correctAnswer: "remember", explanation: "REMEMBER = se souvenir." },
      { id: 6, question: "She ___ me of my mother.", options: ["remembers", "reminds"], correctAnswer: "reminds", explanation: "REMIND of = ressembler à." },
      { id: 7, question: "___ to lock the door.", options: ["Remember", "Remind"], correctAnswer: "Remember", explanation: "REMEMBER to = ne pas oublier de." },
      { id: 8, question: "Can you ___ me about the meeting?", options: ["remember", "remind"], correctAnswer: "remind", explanation: "REMIND about = rappeler." },
      { id: 9, question: "I ___ my childhood fondly.", options: ["remember", "remind"], correctAnswer: "remember", explanation: "REMEMBER = garder en mémoire." },
      { id: 10, question: "Let me ___ you of the rules.", options: ["remember", "remind"], correctAnswer: "remind", explanation: "REMIND of = rappeler les règles." }
    ]
  },
  {
    id: 115,
    title: "ACTUALLY vs CURRENTLY",
    description: "ACTUALLY (en fait) vs CURRENTLY (actuellement).",
    questions: [
      { id: 1, question: "I'm ___ working on a project.", options: ["actually", "currently"], correctAnswer: "currently", explanation: "CURRENTLY = en ce moment." },
      { id: 2, question: "___, I disagree.", options: ["Actually", "Currently"], correctAnswer: "Actually", explanation: "ACTUALLY = en fait." },
      { id: 3, question: "She's ___ living in Paris.", options: ["actually", "currently"], correctAnswer: "currently", explanation: "CURRENTLY = à l'heure actuelle." },
      { id: 4, question: "___, it was his idea.", options: ["Actually", "Currently"], correctAnswer: "Actually", explanation: "ACTUALLY = en réalité." },
      { id: 5, question: "He's ___ unemployed.", options: ["actually", "currently"], correctAnswer: "currently", explanation: "CURRENTLY = présentement." },
      { id: 6, question: "I ___ enjoyed the movie.", options: ["actually", "currently"], correctAnswer: "actually", explanation: "ACTUALLY = vraiment/en fait." },
      { id: 7, question: "The position is ___ filled.", options: ["actually", "currently"], correctAnswer: "currently", explanation: "CURRENTLY = pour le moment." },
      { id: 8, question: "___, she's not coming.", options: ["Actually", "Currently"], correctAnswer: "Actually", explanation: "ACTUALLY = en fait." },
      { id: 9, question: "I'm ___ reading three books.", options: ["actually", "currently"], correctAnswer: "currently", explanation: "CURRENTLY = en ce moment." },
      { id: 10, question: "That's not ___ true.", options: ["actually", "currently"], correctAnswer: "actually", explanation: "ACTUALLY = vraiment." }
    ]
  },
  {
    id: 116,
    title: "SENSIBLE vs SENSITIVE",
    description: "SENSIBLE (raisonnable) vs SENSITIVE (sensible).",
    questions: [
      { id: 1, question: "Be ___! Don't spend all your money.", options: ["sensible", "sensitive"], correctAnswer: "sensible", explanation: "SENSIBLE = raisonnable." },
      { id: 2, question: "She's very ___ about her weight.", options: ["sensible", "sensitive"], correctAnswer: "sensitive", explanation: "SENSITIVE = susceptible." },
      { id: 3, question: "That's a ___ decision.", options: ["sensible", "sensitive"], correctAnswer: "sensible", explanation: "SENSIBLE = sage/prudent." },
      { id: 4, question: "My skin is ___ to the sun.", options: ["sensible", "sensitive"], correctAnswer: "sensitive", explanation: "SENSITIVE = réactif." },
      { id: 5, question: "Wear ___ shoes for hiking.", options: ["sensible", "sensitive"], correctAnswer: "sensible", explanation: "SENSIBLE = pratique." },
      { id: 6, question: "This is a ___ subject.", options: ["sensible", "sensitive"], correctAnswer: "sensitive", explanation: "SENSITIVE = délicat." },
      { id: 7, question: "A ___ person wouldn't do that.", options: ["sensible", "sensitive"], correctAnswer: "sensible", explanation: "SENSIBLE = sensé." },
      { id: 8, question: "He's emotionally ___.", options: ["sensible", "sensitive"], correctAnswer: "sensitive", explanation: "SENSITIVE = émotif." },
      { id: 9, question: "It's ___ to save money.", options: ["sensible", "sensitive"], correctAnswer: "sensible", explanation: "SENSIBLE = judicieux." },
      { id: 10, question: "Handle this ___ information carefully.", options: ["sensible", "sensitive"], correctAnswer: "sensitive", explanation: "SENSITIVE = confidentiel." }
    ]
  },
  {
    id: 117,
    title: "ALREADY vs YET vs STILL",
    description: "ALREADY (déjà - affirmatif), YET (déjà/encore - négatif/question), STILL (encore).",
    questions: [
      { id: 1, question: "I've ___ finished.", options: ["already", "yet", "still"], correctAnswer: "already", explanation: "ALREADY = déjà (accompli)." },
      { id: 2, question: "Have you eaten ___?", options: ["already", "yet", "still"], correctAnswer: "yet", explanation: "YET = déjà (question)." },
      { id: 3, question: "He's ___ sleeping.", options: ["already", "yet", "still"], correctAnswer: "still", explanation: "STILL = encore (continue)." },
      { id: 4, question: "I haven't seen it ___.", options: ["already", "yet", "still"], correctAnswer: "yet", explanation: "YET = pas encore (négatif)." },
      { id: 5, question: "She's ___ here? I thought she left.", options: ["already", "yet", "still"], correctAnswer: "still", explanation: "STILL = toujours là." },
      { id: 6, question: "It's ___ 10 AM and I'm tired.", options: ["already", "yet", "still"], correctAnswer: "already", explanation: "ALREADY = déjà (surprise)." },
      { id: 7, question: "Is she ___ working there?", options: ["already", "yet", "still"], correctAnswer: "still", explanation: "STILL = toujours." },
      { id: 8, question: "They haven't arrived ___.", options: ["already", "yet", "still"], correctAnswer: "yet", explanation: "YET = pas encore." },
      { id: 9, question: "He's ___ young.", options: ["already", "yet", "still"], correctAnswer: "still", explanation: "STILL = encore (état)." },
      { id: 10, question: "You're ___ here!", options: ["already", "yet", "still"], correctAnswer: "already", explanation: "ALREADY = déjà (surprise)." }
    ]
  },
  {
    id: 118,
    title: "HARD vs HARDLY",
    description: "HARD (dur/fort) vs HARDLY (à peine).",
    questions: [
      { id: 1, question: "She works very ___.", options: ["hard", "hardly"], correctAnswer: "hard", explanation: "HARD = beaucoup/dur." },
      { id: 2, question: "I can ___ hear you.", options: ["hard", "hardly"], correctAnswer: "hardly", explanation: "HARDLY = à peine." },
      { id: 3, question: "Study ___ for the exam.", options: ["hard", "hardly"], correctAnswer: "hard", explanation: "HARD = avec effort." },
      { id: 4, question: "There's ___ any milk left.", options: ["hard", "hardly"], correctAnswer: "hardly", explanation: "HARDLY = presque pas." },
      { id: 5, question: "It's raining ___.", options: ["hard", "hardly"], correctAnswer: "hard", explanation: "HARD = fort/beaucoup." },
      { id: 6, question: "I ___ know him.", options: ["hard", "hardly"], correctAnswer: "hardly", explanation: "HARDLY = à peine." },
      { id: 7, question: "Push ___!", options: ["hard", "hardly"], correctAnswer: "hard", explanation: "HARD = fort." },
      { id: 8, question: "She ___ ever goes out.", options: ["hard", "hardly"], correctAnswer: "hardly", explanation: "HARDLY ever = presque jamais." },
      { id: 9, question: "This is a ___ question.", options: ["hard", "hardly"], correctAnswer: "hard", explanation: "HARD = difficile." },
      { id: 10, question: "I ___ had time to eat.", options: ["hard", "hardly"], correctAnswer: "hardly", explanation: "HARDLY = à peine eu le temps." }
    ]
  },
  {
    id: 119,
    title: "LATE vs LATELY",
    description: "LATE (en retard/tard) vs LATELY (récemment).",
    questions: [
      { id: 1, question: "Have you seen her ___?", options: ["late", "lately"], correctAnswer: "lately", explanation: "LATELY = récemment." },
      { id: 2, question: "Don't be ___!", options: ["late", "lately"], correctAnswer: "late", explanation: "LATE = en retard." },
      { id: 3, question: "I've been busy ___.", options: ["late", "lately"], correctAnswer: "lately", explanation: "LATELY = ces derniers temps." },
      { id: 4, question: "The train arrived ___.", options: ["late", "lately"], correctAnswer: "late", explanation: "LATE = en retard/tard." },
      { id: 5, question: "I haven't slept well ___.", options: ["late", "lately"], correctAnswer: "lately", explanation: "LATELY = dernièrement." },
      { id: 6, question: "He came home ___.", options: ["late", "lately"], correctAnswer: "late", explanation: "LATE = tard." },
      { id: 7, question: "What have you been doing ___?", options: ["late", "lately"], correctAnswer: "lately", explanation: "LATELY = récemment." },
      { id: 8, question: "Better ___ than never.", options: ["late", "lately"], correctAnswer: "late", explanation: "LATE = en retard." },
      { id: 9, question: "She's been sad ___.", options: ["late", "lately"], correctAnswer: "lately", explanation: "LATELY = ces temps-ci." },
      { id: 10, question: "I stayed up ___ last night.", options: ["late", "lately"], correctAnswer: "late", explanation: "LATE = tard." }
    ]
  },
  {
    id: 120,
    title: "HIGH vs HIGHLY",
    description: "HIGH (haut - position) vs HIGHLY (hautement - degré).",
    questions: [
      { id: 1, question: "The plane flew ___.", options: ["high", "highly"], correctAnswer: "high", explanation: "HIGH = haut (altitude)." },
      { id: 2, question: "She's ___ qualified.", options: ["high", "highly"], correctAnswer: "highly", explanation: "HIGHLY = très/hautement." },
      { id: 3, question: "Jump as ___ as you can.", options: ["high", "highly"], correctAnswer: "high", explanation: "HIGH = haut (mouvement)." },
      { id: 4, question: "I ___ recommend this book.", options: ["high", "highly"], correctAnswer: "highly", explanation: "HIGHLY = fortement." },
      { id: 5, question: "The temperature is ___.", options: ["high", "highly"], correctAnswer: "high", explanation: "HIGH = élevé." },
      { id: 6, question: "He's a ___ paid executive.", options: ["high", "highly"], correctAnswer: "highly", explanation: "HIGHLY paid = très bien payé." },
      { id: 7, question: "Aim ___!", options: ["high", "highly"], correctAnswer: "high", explanation: "HIGH = haut (objectif)." },
      { id: 8, question: "This is ___ unlikely.", options: ["high", "highly"], correctAnswer: "highly", explanation: "HIGHLY = très (probabilité)." },
      { id: 9, question: "The bird flew ___ in the sky.", options: ["high", "highly"], correctAnswer: "high", explanation: "HIGH = position élevée." },
      { id: 10, question: "She's ___ respected.", options: ["high", "highly"], correctAnswer: "highly", explanation: "HIGHLY = grandement." }
    ]
  },
  {
    id: 121,
    title: "BESIDE vs BESIDES",
    description: "BESIDE (à côté de) vs BESIDES (en plus de).",
    questions: [
      { id: 1, question: "Sit ___ me.", options: ["beside", "besides"], correctAnswer: "beside", explanation: "BESIDE = à côté de." },
      { id: 2, question: "___ English, she speaks French.", options: ["Beside", "Besides"], correctAnswer: "Besides", explanation: "BESIDES = en plus de." },
      { id: 3, question: "The dog sat ___ its owner.", options: ["beside", "besides"], correctAnswer: "beside", explanation: "BESIDE = à côté de." },
      { id: 4, question: "Who was there ___ you?", options: ["beside", "besides"], correctAnswer: "besides", explanation: "BESIDES = en dehors de." },
      { id: 5, question: "She stood ___ the window.", options: ["beside", "besides"], correctAnswer: "beside", explanation: "BESIDE = près de." },
      { id: 6, question: "___, I don't have time.", options: ["Beside", "Besides"], correctAnswer: "Besides", explanation: "BESIDES = de plus." },
      { id: 7, question: "He was ___ himself with joy.", options: ["beside", "besides"], correctAnswer: "beside", explanation: "BESIDE oneself = hors de soi." },
      { id: 8, question: "What else ___ that?", options: ["beside", "besides"], correctAnswer: "besides", explanation: "BESIDES = à part ça." },
      { id: 9, question: "Park ___ the building.", options: ["beside", "besides"], correctAnswer: "beside", explanation: "BESIDE = à côté de." },
      { id: 10, question: "___ the cost, it's too far.", options: ["Beside", "Besides"], correctAnswer: "Besides", explanation: "BESIDES = outre." }
    ]
  },
  {
    id: 122,
    title: "BETWEEN vs AMONG",
    description: "BETWEEN (entre deux) vs AMONG (parmi plusieurs).",
    questions: [
      { id: 1, question: "Choose ___ A and B.", options: ["between", "among"], correctAnswer: "between", explanation: "BETWEEN = entre deux options." },
      { id: 2, question: "She's popular ___ students.", options: ["between", "among"], correctAnswer: "among", explanation: "AMONG = parmi un groupe." },
      { id: 3, question: "What's the difference ___ them?", options: ["between", "among"], correctAnswer: "between", explanation: "BETWEEN = entre (deux éléments)." },
      { id: 4, question: "Share it ___ the children.", options: ["between", "among"], correctAnswer: "among", explanation: "AMONG = parmi plusieurs." },
      { id: 5, question: "___ you and me...", options: ["Between", "Among"], correctAnswer: "Between", explanation: "BETWEEN = entre nous deux." },
      { id: 6, question: "He was walking ___ the trees.", options: ["between", "among"], correctAnswer: "among", explanation: "AMONG = au milieu de." },
      { id: 7, question: "The meeting is ___ 2 and 3 PM.", options: ["between", "among"], correctAnswer: "between", explanation: "BETWEEN = entre (temps)." },
      { id: 8, question: "He's ___ the best in his field.", options: ["between", "among"], correctAnswer: "among", explanation: "AMONG = parmi les meilleurs." },
      { id: 9, question: "There's a problem ___ them.", options: ["between", "among"], correctAnswer: "between", explanation: "BETWEEN = entre (personnes)." },
      { id: 10, question: "Divide the money ___ everyone.", options: ["between", "among"], correctAnswer: "among", explanation: "AMONG = parmi tous." }
    ]
  },
  {
    id: 123,
    title: "DURING vs WHILE",
    description: "DURING (+ nom) vs WHILE (+ verbe/proposition).",
    questions: [
      { id: 1, question: "___ the meeting, he fell asleep.", options: ["During", "While"], correctAnswer: "During", explanation: "DURING + nom." },
      { id: 2, question: "___ I was cooking, he watched TV.", options: ["During", "While"], correctAnswer: "While", explanation: "WHILE + proposition." },
      { id: 3, question: "She called ___ the movie.", options: ["during", "while"], correctAnswer: "during", explanation: "DURING + nom." },
      { id: 4, question: "___ working, I listen to music.", options: ["During", "While"], correctAnswer: "While", explanation: "WHILE + -ING." },
      { id: 5, question: "It happened ___ the war.", options: ["during", "while"], correctAnswer: "during", explanation: "DURING + période." },
      { id: 6, question: "___ she was away, I cleaned.", options: ["During", "While"], correctAnswer: "While", explanation: "WHILE + sujet + verbe." },
      { id: 7, question: "I met her ___ my trip.", options: ["during", "while"], correctAnswer: "during", explanation: "DURING + nom." },
      { id: 8, question: "___ eating, don't talk.", options: ["During", "While"], correctAnswer: "While", explanation: "WHILE + -ING." },
      { id: 9, question: "___ the summer, we travel.", options: ["During", "While"], correctAnswer: "During", explanation: "DURING + saison." },
      { id: 10, question: "___ I read, she slept.", options: ["During", "While"], correctAnswer: "While", explanation: "WHILE = pendant que." }
    ]
  },
  {
    id: 124,
    title: "AFRAID vs SCARED vs FRIGHTENED",
    description: "Nuances entre AFRAID (inquiet), SCARED (effrayé), FRIGHTENED (épouvanté).",
    questions: [
      { id: 1, question: "I'm ___ of spiders.", options: ["afraid", "scared", "frightened"], correctAnswer: "afraid", explanation: "AFRAID of = avoir peur de." },
      { id: 2, question: "The loud noise ___ me.", options: ["afraid", "scared", "frightened"], correctAnswer: "scared", explanation: "SCARED = effrayé soudainement." },
      { id: 3, question: "I'm ___ to tell you the truth.", options: ["afraid", "scared", "frightened"], correctAnswer: "afraid", explanation: "AFRAID = hésitant à dire." },
      { id: 4, question: "She was ___ by the ghost story.", options: ["afraid", "scared", "frightened"], correctAnswer: "frightened", explanation: "FRIGHTENED = très effrayé." },
      { id: 5, question: "Don't be ___. It's just a movie.", options: ["afraid", "scared", "frightened"], correctAnswer: "scared", explanation: "SCARED = ayant peur." },
      { id: 6, question: "I'm ___ he won't come.", options: ["afraid", "scared", "frightened"], correctAnswer: "afraid", explanation: "AFRAID = craindre que." },
      { id: 7, question: "The children were ___ of the dog.", options: ["afraid", "scared", "frightened"], correctAnswer: "frightened", explanation: "FRIGHTENED = apeuré." },
      { id: 8, question: "You ___ me!", options: ["afraid", "scared", "frightened"], correctAnswer: "scared", explanation: "SCARED = faire peur à." },
      { id: 9, question: "I'm ___ so.", options: ["afraid", "scared", "frightened"], correctAnswer: "afraid", explanation: "I'm afraid so = malheureusement." },
      { id: 10, question: "He looked ___ when he saw her.", options: ["afraid", "scared", "frightened"], correctAnswer: "frightened", explanation: "FRIGHTENED = expression de peur." }
    ]
  },
  {
    id: 125,
    title: "POSSIBILITY vs OPPORTUNITY",
    description: "POSSIBILITY (possibilité - peut arriver) vs OPPORTUNITY (opportunité - chance à saisir).",
    questions: [
      { id: 1, question: "There's a ___ of rain.", options: ["possibility", "opportunity"], correctAnswer: "possibility", explanation: "POSSIBILITY = éventualité." },
      { id: 2, question: "This is a great ___ to learn.", options: ["possibility", "opportunity"], correctAnswer: "opportunity", explanation: "OPPORTUNITY = occasion." },
      { id: 3, question: "Is there any ___ of success?", options: ["possibility", "opportunity"], correctAnswer: "possibility", explanation: "POSSIBILITY = chance/probabilité." },
      { id: 4, question: "Don't miss this ___!", options: ["possibility", "opportunity"], correctAnswer: "opportunity", explanation: "OPPORTUNITY = chance à saisir." },
      { id: 5, question: "I see no ___ of that happening.", options: ["possibility", "opportunity"], correctAnswer: "possibility", explanation: "POSSIBILITY = éventualité." },
      { id: 6, question: "Job ___ available.", options: ["possibilities", "opportunities"], correctAnswer: "opportunities", explanation: "OPPORTUNITY = offre d'emploi." },
      { id: 7, question: "Consider all ___.", options: ["possibilities", "opportunities"], correctAnswer: "possibilities", explanation: "POSSIBILITIES = options possibles." },
      { id: 8, question: "I had the ___ to travel.", options: ["possibility", "opportunity"], correctAnswer: "opportunity", explanation: "OPPORTUNITY = occasion de." },
      { id: 9, question: "There's a ___ he's right.", options: ["possibility", "opportunity"], correctAnswer: "possibility", explanation: "POSSIBILITY = il se peut que." },
      { id: 10, question: "Seize every ___!", options: ["possibility", "opportunity"], correctAnswer: "opportunity", explanation: "OPPORTUNITY = occasion favorable." }
    ]
  },
  {
    id: 126,
    title: "FUN vs FUNNY",
    description: "FUN (amusant - plaisir) vs FUNNY (drôle - qui fait rire).",
    questions: [
      { id: 1, question: "The party was ___.", options: ["fun", "funny"], correctAnswer: "fun", explanation: "FUN = amusant (plaisir)." },
      { id: 2, question: "That joke was ___.", options: ["fun", "funny"], correctAnswer: "funny", explanation: "FUNNY = drôle (rire)." },
      { id: 3, question: "We had ___ at the beach.", options: ["fun", "funny"], correctAnswer: "fun", explanation: "HAVE FUN = s'amuser." },
      { id: 4, question: "He's a ___ guy.", options: ["fun", "funny"], correctAnswer: "funny", explanation: "FUNNY = comique." },
      { id: 5, question: "Learning can be ___.", options: ["fun", "funny"], correctAnswer: "fun", explanation: "FUN = plaisant." },
      { id: 6, question: "That's not ___!", options: ["fun", "funny"], correctAnswer: "funny", explanation: "FUNNY = pas drôle." },
      { id: 7, question: "It's ___ to play games.", options: ["fun", "funny"], correctAnswer: "fun", explanation: "FUN = agréable." },
      { id: 8, question: "She tells ___ stories.", options: ["fun", "funny"], correctAnswer: "funny", explanation: "FUNNY = histoires drôles." },
      { id: 9, question: "This looks like ___.", options: ["fun", "funny"], correctAnswer: "fun", explanation: "LIKE FUN = amusant." },
      { id: 10, question: "There's something ___ about him.", options: ["fun", "funny"], correctAnswer: "funny", explanation: "FUNNY = bizarre/étrange." }
    ]
  },
  {
    id: 127,
    title: "TRAVEL vs TRIP vs JOURNEY vs VOYAGE",
    description: "Distinguez ces mots pour parler de voyage.",
    questions: [
      { id: 1, question: "I love to ___.", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "travel", explanation: "TRAVEL = voyager (verbe)." },
      { id: 2, question: "Have a nice ___!", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "trip", explanation: "TRIP = voyage court." },
      { id: 3, question: "The ___ took 3 hours.", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "journey", explanation: "JOURNEY = trajet." },
      { id: 4, question: "Columbus's ___ to America.", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "voyage", explanation: "VOYAGE = long voyage en mer." },
      { id: 5, question: "A business ___.", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "trip", explanation: "TRIP = déplacement." },
      { id: 6, question: "The train ___ was pleasant.", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "journey", explanation: "JOURNEY = parcours." },
      { id: 7, question: "___ broadens the mind.", options: ["Travel", "Trip", "Journey", "Voyage"], correctAnswer: "Travel", explanation: "TRAVEL = les voyages (concept)." },
      { id: 8, question: "A school ___ to the museum.", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "trip", explanation: "TRIP = excursion." },
      { id: 9, question: "A spiritual ___.", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "journey", explanation: "JOURNEY = parcours métaphorique." },
      { id: 10, question: "A maiden ___.", options: ["travel", "trip", "journey", "voyage"], correctAnswer: "voyage", explanation: "VOYAGE = traversée maritime." }
    ]
  },
  {
    id: 128,
    title: "HOUSE vs HOME",
    description: "HOUSE (bâtiment) vs HOME (foyer/chez soi).",
    questions: [
      { id: 1, question: "I'm going ___.", options: ["house", "home"], correctAnswer: "home", explanation: "HOME = chez moi." },
      { id: 2, question: "They bought a new ___.", options: ["house", "home"], correctAnswer: "house", explanation: "HOUSE = maison (bâtiment)." },
      { id: 3, question: "There's no place like ___.", options: ["house", "home"], correctAnswer: "home", explanation: "HOME = son foyer." },
      { id: 4, question: "It's a three-bedroom ___.", options: ["house", "home"], correctAnswer: "house", explanation: "HOUSE = structure." },
      { id: 5, question: "Welcome ___!", options: ["house", "home"], correctAnswer: "home", explanation: "HOME = retour chez soi." },
      { id: 6, question: "The ___ is on fire.", options: ["house", "home"], correctAnswer: "house", explanation: "HOUSE = bâtiment physique." },
      { id: 7, question: "I feel at ___ here.", options: ["house", "home"], correctAnswer: "home", explanation: "AT HOME = à l'aise." },
      { id: 8, question: "A ___ for sale.", options: ["house", "home"], correctAnswer: "house", explanation: "HOUSE = propriété." },
      { id: 9, question: "___ sweet ___.", options: ["House", "Home"], correctAnswer: "Home", explanation: "HOME = foyer (sentiment)." },
      { id: 10, question: "Is anyone ___?", options: ["house", "home"], correctAnswer: "home", explanation: "HOME = chez soi." }
    ]
  },
  {
    id: 129,
    title: "JOB vs WORK",
    description: "JOB (emploi - comptable) vs WORK (travail - général).",
    questions: [
      { id: 1, question: "I need to find a ___.", options: ["job", "work"], correctAnswer: "job", explanation: "JOB = un emploi." },
      { id: 2, question: "I have a lot of ___ to do.", options: ["job", "work"], correctAnswer: "work", explanation: "WORK = travail (non comptable)." },
      { id: 3, question: "She got a new ___.", options: ["job", "work"], correctAnswer: "job", explanation: "JOB = poste/emploi." },
      { id: 4, question: "I start ___ at 9.", options: ["job", "work"], correctAnswer: "work", explanation: "WORK = le travail." },
      { id: 5, question: "It's a difficult ___.", options: ["job", "work"], correctAnswer: "job", explanation: "JOB = tâche spécifique." },
      { id: 6, question: "How's ___?", options: ["job", "work"], correctAnswer: "work", explanation: "WORK = le boulot (général)." },
      { id: 7, question: "I applied for three ___s.", options: ["job", "work"], correctAnswer: "job", explanation: "JOBS = emplois (pluriel)." },
      { id: 8, question: "Good ___!", options: ["job", "work"], correctAnswer: "job", explanation: "GOOD JOB = bien fait!" },
      { id: 9, question: "Where do you ___?", options: ["job", "work"], correctAnswer: "work", explanation: "WORK = travailler (verbe)." },
      { id: 10, question: "He lost his ___.", options: ["job", "work"], correctAnswer: "job", explanation: "JOB = emploi." }
    ]
  },
  {
    id: 130,
    title: "HISTORIC vs HISTORICAL",
    description: "HISTORIC (important dans l'histoire) vs HISTORICAL (relatif à l'histoire).",
    questions: [
      { id: 1, question: "It was a ___ moment.", options: ["historic", "historical"], correctAnswer: "historic", explanation: "HISTORIC = moment marquant." },
      { id: 2, question: "A ___ novel about WWII.", options: ["historic", "historical"], correctAnswer: "historical", explanation: "HISTORICAL = roman historique." },
      { id: 3, question: "This is a ___ event.", options: ["historic", "historical"], correctAnswer: "historic", explanation: "HISTORIC = événement important." },
      { id: 4, question: "___ documents.", options: ["Historic", "Historical"], correctAnswer: "Historical", explanation: "HISTORICAL = documents du passé." },
      { id: 5, question: "A ___ victory.", options: ["historic", "historical"], correctAnswer: "historic", explanation: "HISTORIC = victoire mémorable." },
      { id: 6, question: "___ research.", options: ["Historic", "Historical"], correctAnswer: "Historical", explanation: "HISTORICAL = recherche en histoire." },
      { id: 7, question: "A ___ building.", options: ["historic", "historical"], correctAnswer: "historic", explanation: "HISTORIC = bâtiment classé." },
      { id: 8, question: "A ___ figure.", options: ["historic", "historical"], correctAnswer: "historical", explanation: "HISTORICAL = personnage de l'histoire." },
      { id: 9, question: "The ___ landing on the moon.", options: ["historic", "historical"], correctAnswer: "historic", explanation: "HISTORIC = atterrissage historique." },
      { id: 10, question: "___ accuracy.", options: ["Historic", "Historical"], correctAnswer: "Historical", explanation: "HISTORICAL = précision historique." }
    ]
  },
  {
    id: 131,
    title: "ECONOMIC vs ECONOMICAL",
    description: "ECONOMIC (lié à l'économie) vs ECONOMICAL (qui fait des économies).",
    questions: [
      { id: 1, question: "The ___ crisis affected everyone.", options: ["economic", "economical"], correctAnswer: "economic", explanation: "ECONOMIC = crise économique." },
      { id: 2, question: "This car is very ___.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = économique (peu coûteux)." },
      { id: 3, question: "___ growth is slow.", options: ["Economic", "Economical"], correctAnswer: "Economic", explanation: "ECONOMIC = croissance économique." },
      { id: 4, question: "It's more ___ to buy in bulk.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = avantageux." },
      { id: 5, question: "___ policy.", options: ["Economic", "Economical"], correctAnswer: "Economic", explanation: "ECONOMIC = politique économique." },
      { id: 6, question: "She's very ___ with money.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = économe." },
      { id: 7, question: "___ development.", options: ["Economic", "Economical"], correctAnswer: "Economic", explanation: "ECONOMIC = développement économique." },
      { id: 8, question: "An ___ solution.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = solution économique." },
      { id: 9, question: "___ indicators.", options: ["Economic", "Economical"], correctAnswer: "Economic", explanation: "ECONOMIC = indicateurs économiques." },
      { id: 10, question: "It's not ___ to drive.", options: ["economic", "economical"], correctAnswer: "economical", explanation: "ECONOMICAL = pas rentable." }
    ]
  },
  {
    id: 132,
    title: "CLASSIC vs CLASSICAL",
    description: "CLASSIC (typique/de haute qualité) vs CLASSICAL (classique - art/musique).",
    questions: [
      { id: 1, question: "That's a ___ mistake.", options: ["classic", "classical"], correctAnswer: "classic", explanation: "CLASSIC = erreur typique." },
      { id: 2, question: "She studies ___ music.", options: ["classic", "classical"], correctAnswer: "classical", explanation: "CLASSICAL = musique classique." },
      { id: 3, question: "A ___ car from the 1960s.", options: ["classic", "classical"], correctAnswer: "classic", explanation: "CLASSIC = voiture de collection." },
      { id: 4, question: "___ Greek architecture.", options: ["Classic", "Classical"], correctAnswer: "Classical", explanation: "CLASSICAL = grec ancien." },
      { id: 5, question: "A ___ example.", options: ["classic", "classical"], correctAnswer: "classic", explanation: "CLASSIC = exemple parfait." },
      { id: 6, question: "A ___ ballet.", options: ["classic", "classical"], correctAnswer: "classical", explanation: "CLASSICAL = ballet classique." },
      { id: 7, question: "A ___ movie.", options: ["classic", "classical"], correctAnswer: "classic", explanation: "CLASSIC = film culte." },
      { id: 8, question: "___ literature.", options: ["Classic", "Classical"], correctAnswer: "Classical", explanation: "CLASSICAL = littérature classique." },
      { id: 9, question: "That was ___ comedy.", options: ["classic", "classical"], correctAnswer: "classic", explanation: "CLASSIC = comédie excellente." },
      { id: 10, question: "A ___ education.", options: ["classic", "classical"], correctAnswer: "classical", explanation: "CLASSICAL = éducation classique." }
    ]
  },
  {
    id: 133,
    title: "ELECTRIC vs ELECTRICAL",
    description: "ELECTRIC (alimenté à l'électricité) vs ELECTRICAL (lié à l'électricité).",
    questions: [
      { id: 1, question: "An ___ car.", options: ["electric", "electrical"], correctAnswer: "electric", explanation: "ELECTRIC = voiture électrique." },
      { id: 2, question: "___ engineering.", options: ["Electric", "Electrical"], correctAnswer: "Electrical", explanation: "ELECTRICAL = génie électrique." },
      { id: 3, question: "An ___ guitar.", options: ["electric", "electrical"], correctAnswer: "electric", explanation: "ELECTRIC = guitare électrique." },
      { id: 4, question: "___ appliances.", options: ["Electric", "Electrical"], correctAnswer: "Electrical", explanation: "ELECTRICAL = appareils électriques." },
      { id: 5, question: "The atmosphere was ___.", options: ["electric", "electrical"], correctAnswer: "electric", explanation: "ELECTRIC = électrique (figuré)." },
      { id: 6, question: "___ wiring.", options: ["Electric", "Electrical"], correctAnswer: "Electrical", explanation: "ELECTRICAL = câblage électrique." },
      { id: 7, question: "An ___ shock.", options: ["electric", "electrical"], correctAnswer: "electric", explanation: "ELECTRIC = choc électrique." },
      { id: 8, question: "___ systems.", options: ["Electric", "Electrical"], correctAnswer: "Electrical", explanation: "ELECTRICAL = systèmes électriques." },
      { id: 9, question: "An ___ blanket.", options: ["electric", "electrical"], correctAnswer: "electric", explanation: "ELECTRIC = couverture électrique." },
      { id: 10, question: "___ components.", options: ["Electric", "Electrical"], correctAnswer: "Electrical", explanation: "ELECTRICAL = composants électriques." }
    ]
  },
  {
    id: 134,
    title: "AGREE vs ACCEPT",
    description: "AGREE (être d'accord) vs ACCEPT (accepter).",
    questions: [
      { id: 1, question: "I ___ with you.", options: ["agree", "accept"], correctAnswer: "agree", explanation: "AGREE with = être d'accord." },
      { id: 2, question: "Please ___ my apology.", options: ["agree", "accept"], correctAnswer: "accept", explanation: "ACCEPT = accepter." },
      { id: 3, question: "They ___ to help.", options: ["agreed", "accepted"], correctAnswer: "agreed", explanation: "AGREE to = consentir à." },
      { id: 4, question: "I can't ___ this behavior.", options: ["agree", "accept"], correctAnswer: "accept", explanation: "ACCEPT = tolérer." },
      { id: 5, question: "We ___ on the price.", options: ["agreed", "accepted"], correctAnswer: "agreed", explanation: "AGREE on = convenir de." },
      { id: 6, question: "She ___ the job offer.", options: ["agreed", "accepted"], correctAnswer: "accepted", explanation: "ACCEPT = accepter une offre." },
      { id: 7, question: "I don't ___ that it's true.", options: ["agree", "accept"], correctAnswer: "agree", explanation: "AGREE that = penser que." },
      { id: 8, question: "Do you ___ credit cards?", options: ["agree", "accept"], correctAnswer: "accept", explanation: "ACCEPT = prendre/recevoir." },
      { id: 9, question: "We all ___ it was wrong.", options: ["agreed", "accepted"], correctAnswer: "agreed", explanation: "AGREE = être d'accord." },
      { id: 10, question: "I ___ your terms.", options: ["agree to", "accept"], correctAnswer: "accept", explanation: "ACCEPT = accepter des conditions." }
    ]
  },
  {
    id: 135,
    title: "ALLOW vs LET vs PERMIT",
    description: "ALLOW/PERMIT (+ to - formel) vs LET (+ base verbale - informel).",
    questions: [
      { id: 1, question: "___ me help you.", options: ["Allow", "Let", "Permit"], correctAnswer: "Let", explanation: "LET + base verbale." },
      { id: 2, question: "Smoking is not ___.", options: ["allowed", "let", "permitted"], correctAnswer: "permitted", explanation: "PERMIT = autoriser (formel)." },
      { id: 3, question: "They don't ___ dogs here.", options: ["allow", "let", "permit"], correctAnswer: "allow", explanation: "ALLOW = autoriser." },
      { id: 4, question: "Please ___ me explain.", options: ["allow", "let", "permit"], correctAnswer: "let", explanation: "LET = laisser faire." },
      { id: 5, question: "Are we ___ to leave?", options: ["allowed", "let", "permitted"], correctAnswer: "allowed", explanation: "BE ALLOWED TO = être autorisé." },
      { id: 6, question: "I won't ___ you go.", options: ["allow", "let", "permit"], correctAnswer: "let", explanation: "LET + complément + verbe." },
      { id: 7, question: "Photography is not ___.", options: ["allowed", "let", "permitted"], correctAnswer: "permitted", explanation: "PERMIT = permettre (formel)." },
      { id: 8, question: "___ me know when you arrive.", options: ["Allow", "Let", "Permit"], correctAnswer: "Let", explanation: "LET ME KNOW = informer." },
      { id: 9, question: "She ___ him to stay.", options: ["allowed", "let", "permitted"], correctAnswer: "allowed", explanation: "ALLOW + to = permettre à." },
      { id: 10, question: "Please ___ me to finish.", options: ["allow", "let", "permit"], correctAnswer: "allow", explanation: "ALLOW = laisser (formel)." }
    ]
  },
  {
    id: 136,
    title: "DOUBT vs SUSPECT",
    description: "DOUBT (douter - penser que non) vs SUSPECT (soupçonner - penser que oui).",
    questions: [
      { id: 1, question: "I ___ he's telling the truth.", options: ["doubt", "suspect"], correctAnswer: "doubt", explanation: "DOUBT = je doute (je pense que non)." },
      { id: 2, question: "I ___ he's lying.", options: ["doubt", "suspect"], correctAnswer: "suspect", explanation: "SUSPECT = je soupçonne (je pense que oui)." },
      { id: 3, question: "I ___ she will come.", options: ["doubt", "suspect"], correctAnswer: "doubt", explanation: "DOUBT = je doute qu'elle vienne." },
      { id: 4, question: "I ___ something's wrong.", options: ["doubt", "suspect"], correctAnswer: "suspect", explanation: "SUSPECT = je soupçonne un problème." },
      { id: 5, question: "No one ___ her innocence.", options: ["doubts", "suspects"], correctAnswer: "doubts", explanation: "DOUBT = mettre en doute." },
      { id: 6, question: "Police ___ foul play.", options: ["doubt", "suspect"], correctAnswer: "suspect", explanation: "SUSPECT = soupçonner." },
      { id: 7, question: "I ___ we'll finish on time.", options: ["doubt", "suspect"], correctAnswer: "doubt", explanation: "DOUBT = je doute que." },
      { id: 8, question: "I ___ there's more to the story.", options: ["doubt", "suspect"], correctAnswer: "suspect", explanation: "SUSPECT = je pense qu'il y a plus." },
      { id: 9, question: "Don't ___ yourself.", options: ["doubt", "suspect"], correctAnswer: "doubt", explanation: "DOUBT yourself = douter de soi." },
      { id: 10, question: "I ___ it's a trap.", options: ["doubt", "suspect"], correctAnswer: "suspect", explanation: "SUSPECT = je soupçonne que." }
    ]
  },
  {
    id: 137,
    title: "REACH vs ARRIVE vs GET",
    description: "REACH (atteindre - transitif), ARRIVE (arriver - in/at), GET (arriver - to).",
    questions: [
      { id: 1, question: "We ___ Paris at noon.", options: ["reached", "arrived", "got"], correctAnswer: "reached", explanation: "REACH + lieu (transitif)." },
      { id: 2, question: "They ___ at the station.", options: ["reached", "arrived", "got"], correctAnswer: "arrived", explanation: "ARRIVE at = arriver à." },
      { id: 3, question: "How do I ___ to the museum?", options: ["reach", "arrive", "get"], correctAnswer: "get", explanation: "GET to = comment aller à." },
      { id: 4, question: "Call me when you ___.", options: ["reach", "arrive", "get"], correctAnswer: "arrive", explanation: "ARRIVE = arriver (sans complément)." },
      { id: 5, question: "We finally ___ our destination.", options: ["reached", "arrived", "got"], correctAnswer: "reached", explanation: "REACH = atteindre." },
      { id: 6, question: "She ___ in London yesterday.", options: ["reached", "arrived", "got"], correctAnswer: "arrived", explanation: "ARRIVE in = arriver dans (ville)." },
      { id: 7, question: "I ___ home late.", options: ["reached", "arrived", "got"], correctAnswer: "got", explanation: "GET home = rentrer chez soi." },
      { id: 8, question: "Can you ___ the top shelf?", options: ["reach", "arrive", "get"], correctAnswer: "reach", explanation: "REACH = atteindre (physiquement)." },
      { id: 9, question: "They ___ to the hotel at 8.", options: ["reached", "arrived", "got"], correctAnswer: "got", explanation: "GET to = arriver à." },
      { id: 10, question: "We ___ an agreement.", options: ["reached", "arrived", "got"], correctAnswer: "reached", explanation: "REACH an agreement = parvenir à." }
    ]
  },
  {
    id: 138,
    title: "PREVENT vs AVOID",
    description: "PREVENT (empêcher qqch d'arriver) vs AVOID (éviter).",
    questions: [
      { id: 1, question: "How can we ___ accidents?", options: ["prevent", "avoid"], correctAnswer: "prevent", explanation: "PREVENT = empêcher." },
      { id: 2, question: "I ___ eating fast food.", options: ["prevent", "avoid"], correctAnswer: "avoid", explanation: "AVOID = éviter de faire." },
      { id: 3, question: "We must ___ this from happening.", options: ["prevent", "avoid"], correctAnswer: "prevent", explanation: "PREVENT from = empêcher de." },
      { id: 4, question: "She ___ answering the question.", options: ["prevented", "avoided"], correctAnswer: "avoided", explanation: "AVOID + -ING = éviter de." },
      { id: 5, question: "Vaccines ___ diseases.", options: ["prevent", "avoid"], correctAnswer: "prevent", explanation: "PREVENT = prévenir/empêcher." },
      { id: 6, question: "He ___ my calls.", options: ["prevents", "avoids"], correctAnswer: "avoids", explanation: "AVOID = éviter (ignorer)." },
      { id: 7, question: "Nothing can ___ me from going.", options: ["prevent", "avoid"], correctAnswer: "prevent", explanation: "PREVENT someone from = empêcher qqn de." },
      { id: 8, question: "Try to ___ making mistakes.", options: ["prevent", "avoid"], correctAnswer: "avoid", explanation: "AVOID + -ING = éviter de." },
      { id: 9, question: "___ him from leaving!", options: ["Prevent", "Avoid"], correctAnswer: "Prevent", explanation: "PREVENT = empêcher." },
      { id: 10, question: "I want to ___ the crowd.", options: ["prevent", "avoid"], correctAnswer: "avoid", explanation: "AVOID = éviter." }
    ]
  },
  {
    id: 139,
    title: "DENY vs REFUSE vs REJECT",
    description: "DENY (nier), REFUSE (refuser de faire), REJECT (rejeter).",
    questions: [
      { id: 1, question: "He ___ stealing the money.", options: ["denied", "refused", "rejected"], correctAnswer: "denied", explanation: "DENY = nier avoir fait." },
      { id: 2, question: "She ___ to help me.", options: ["denied", "refused", "rejected"], correctAnswer: "refused", explanation: "REFUSE to = refuser de." },
      { id: 3, question: "They ___ my application.", options: ["denied", "refused", "rejected"], correctAnswer: "rejected", explanation: "REJECT = rejeter (candidature)." },
      { id: 4, question: "I can't ___ it's true.", options: ["deny", "refuse", "reject"], correctAnswer: "deny", explanation: "DENY = nier." },
      { id: 5, question: "He ___ to comment.", options: ["denied", "refused", "rejected"], correctAnswer: "refused", explanation: "REFUSE = refuser de." },
      { id: 6, question: "The proposal was ___.", options: ["denied", "refused", "rejected"], correctAnswer: "rejected", explanation: "REJECT = rejeter (proposition)." },
      { id: 7, question: "They ___ any wrongdoing.", options: ["denied", "refused", "rejected"], correctAnswer: "denied", explanation: "DENY wrongdoing = nier toute faute." },
      { id: 8, question: "She ___ his marriage proposal.", options: ["denied", "refused", "rejected"], correctAnswer: "rejected", explanation: "REJECT = repousser." },
      { id: 9, question: "I ___ to believe it.", options: ["deny", "refuse", "reject"], correctAnswer: "refuse", explanation: "REFUSE to = refuser de." },
      { id: 10, question: "He ___ access.", options: ["denied", "refused", "rejected"], correctAnswer: "denied", explanation: "DENY access = refuser l'accès." }
    ]
  },
  {
    id: 140,
    title: "GROW vs GROW UP",
    description: "GROW (pousser/grandir) vs GROW UP (devenir adulte).",
    questions: [
      { id: 1, question: "Where did you ___?", options: ["grow", "grow up"], correctAnswer: "grow up", explanation: "GROW UP = grandir (enfance)." },
      { id: 2, question: "Plants ___ fast in spring.", options: ["grow", "grow up"], correctAnswer: "grow", explanation: "GROW = pousser." },
      { id: 3, question: "I ___ in Paris.", options: ["grew", "grew up"], correctAnswer: "grew up", explanation: "GROW UP = passer son enfance." },
      { id: 4, question: "She wants to ___ flowers.", options: ["grow", "grow up"], correctAnswer: "grow", explanation: "GROW = cultiver." },
      { id: 5, question: "When I ___, I want to be a doctor.", options: ["grow", "grow up"], correctAnswer: "grow up", explanation: "GROW UP = devenir adulte." },
      { id: 6, question: "My hair ___ quickly.", options: ["grows", "grows up"], correctAnswer: "grows", explanation: "GROW = pousser (cheveux)." },
      { id: 7, question: "___! Stop being childish.", options: ["Grow", "Grow up"], correctAnswer: "Grow up", explanation: "GROW UP = mûrir." },
      { id: 8, question: "The economy is ___.", options: ["growing", "growing up"], correctAnswer: "growing", explanation: "GROW = croître." },
      { id: 9, question: "They ___ together.", options: ["grew", "grew up"], correctAnswer: "grew up", explanation: "GROW UP = grandir ensemble." },
      { id: 10, question: "He ___ a beard.", options: ["grew", "grew up"], correctAnswer: "grew", explanation: "GROW a beard = se laisser pousser." }
    ]
  },
  {
    id: 141,
    title: "MISS vs LOSE",
    description: "MISS (rater/manquer) vs LOSE (perdre).",
    questions: [
      { id: 1, question: "I ___ my keys.", options: ["missed", "lost"], correctAnswer: "lost", explanation: "LOSE = perdre (objet)." },
      { id: 2, question: "Don't ___ the bus!", options: ["miss", "lose"], correctAnswer: "miss", explanation: "MISS = rater (transport)." },
      { id: 3, question: "I ___ you!", options: ["miss", "lose"], correctAnswer: "miss", explanation: "MISS = tu me manques." },
      { id: 4, question: "We ___ the game.", options: ["missed", "lost"], correctAnswer: "lost", explanation: "LOSE = perdre (match)." },
      { id: 5, question: "She ___ the meeting.", options: ["missed", "lost"], correctAnswer: "missed", explanation: "MISS = manquer (réunion)." },
      { id: 6, question: "I ___ my wallet.", options: ["missed", "lost"], correctAnswer: "lost", explanation: "LOSE = égarer." },
      { id: 7, question: "You ___ a great opportunity.", options: ["missed", "lost"], correctAnswer: "missed", explanation: "MISS = rater (occasion)." },
      { id: 8, question: "Don't ___ hope!", options: ["miss", "lose"], correctAnswer: "lose", explanation: "LOSE hope = perdre espoir." },
      { id: 9, question: "I ___ my flight.", options: ["missed", "lost"], correctAnswer: "missed", explanation: "MISS = rater (vol)." },
      { id: 10, question: "He ___ weight.", options: ["missed", "lost"], correctAnswer: "lost", explanation: "LOSE weight = perdre du poids." }
    ]
  },
  {
    id: 142,
    title: "WEAR vs CARRY vs DRESS",
    description: "WEAR (porter sur soi), CARRY (porter dans les mains), DRESS (s'habiller).",
    questions: [
      { id: 1, question: "She ___ a red dress.", options: ["wears", "carries", "dresses"], correctAnswer: "wears", explanation: "WEAR = porter (vêtement)." },
      { id: 2, question: "He ___ a heavy bag.", options: ["wears", "carries", "dresses"], correctAnswer: "carries", explanation: "CARRY = porter (objet)." },
      { id: 3, question: "I ___ quickly every morning.", options: ["wear", "carry", "dress"], correctAnswer: "dress", explanation: "DRESS = s'habiller." },
      { id: 4, question: "Do you ___ glasses?", options: ["wear", "carry", "dress"], correctAnswer: "wear", explanation: "WEAR glasses = porter des lunettes." },
      { id: 5, question: "She ___ her baby.", options: ["wears", "carries", "dresses"], correctAnswer: "carries", explanation: "CARRY = porter (dans les bras)." },
      { id: 6, question: "___ warmly, it's cold.", options: ["Wear", "Carry", "Dress"], correctAnswer: "Dress", explanation: "DRESS warmly = s'habiller chaudement." },
      { id: 7, question: "I always ___ a watch.", options: ["wear", "carry", "dress"], correctAnswer: "wear", explanation: "WEAR = porter (accessoire)." },
      { id: 8, question: "Can you ___ this for me?", options: ["wear", "carry", "dress"], correctAnswer: "carry", explanation: "CARRY = transporter." },
      { id: 9, question: "She ___ in black.", options: ["wears", "carries", "dresses"], correctAnswer: "dresses", explanation: "DRESS in = s'habiller en." },
      { id: 10, question: "He ___ perfume.", options: ["wears", "carries", "dresses"], correctAnswer: "wears", explanation: "WEAR perfume = porter du parfum." }
    ]
  },
  {
    id: 143,
    title: "CLOSE vs SHUT",
    description: "CLOSE (fermer - plus doux) vs SHUT (fermer - plus abrupt).",
    questions: [
      { id: 1, question: "___ the door quietly.", options: ["Close", "Shut"], correctAnswer: "Close", explanation: "CLOSE = fermer doucement." },
      { id: 2, question: "___ up! I'm trying to think.", options: ["Close", "Shut"], correctAnswer: "Shut", explanation: "SHUT UP = tais-toi! (abrupt)." },
      { id: 3, question: "The shop ___ at 6 PM.", options: ["closes", "shuts"], correctAnswer: "closes", explanation: "CLOSE = fermer (horaires)." },
      { id: 4, question: "She ___ the window.", options: ["closed", "shut"], correctAnswer: "closed", explanation: "CLOSE = fermer (neutre)." },
      { id: 5, question: "___ your eyes.", options: ["Close", "Shut"], correctAnswer: "Close", explanation: "CLOSE = fermer (yeux)." },
      { id: 6, question: "The door ___ loudly.", options: ["closed", "shut"], correctAnswer: "shut", explanation: "SHUT = claquer (bruit)." },
      { id: 7, question: "Banks ___ early on Saturdays.", options: ["close", "shut"], correctAnswer: "close", explanation: "CLOSE = fermer (standard)." },
      { id: 8, question: "He ___ the book angrily.", options: ["closed", "shut"], correctAnswer: "shut", explanation: "SHUT = fermer brusquement." },
      { id: 9, question: "___ your mouth!", options: ["Close", "Shut"], correctAnswer: "Shut", explanation: "SHUT = expression forte." },
      { id: 10, question: "Please ___ the gate.", options: ["close", "shut"], correctAnswer: "close", explanation: "CLOSE = fermer (poli)." }
    ]
  },
  {
    id: 144,
    title: "BEGIN vs START",
    description: "BEGIN (commencer - plus formel) vs START (commencer/démarrer).",
    questions: [
      { id: 1, question: "Let's ___ the meeting.", options: ["begin", "start"], correctAnswer: "begin", explanation: "BEGIN = commencer (formel)." },
      { id: 2, question: "The car won't ___.", options: ["begin", "start"], correctAnswer: "start", explanation: "START = démarrer (machine)." },
      { id: 3, question: "She ___ to cry.", options: ["began", "started"], correctAnswer: "began", explanation: "BEGIN = commencer à." },
      { id: 4, question: "___ a new business.", options: ["Begin", "Start"], correctAnswer: "Start", explanation: "START = lancer (entreprise)." },
      { id: 5, question: "The concert ___ at 8.", options: ["begins", "starts"], correctAnswer: "begins", explanation: "BEGIN = commencer (événement)." },
      { id: 6, question: "I ___ working here in 2020.", options: ["began", "started"], correctAnswer: "started", explanation: "START = commencer (informel)." },
      { id: 7, question: "Let the show ___!", options: ["begin", "start"], correctAnswer: "begin", explanation: "BEGIN = expression formelle." },
      { id: 8, question: "He ___ his career as a teacher.", options: ["began", "started"], correctAnswer: "started", explanation: "START = débuter." },
      { id: 9, question: "We'll ___ with chapter one.", options: ["begin", "start"], correctAnswer: "begin", explanation: "BEGIN with = commencer par." },
      { id: 10, question: "___ the engine.", options: ["Begin", "Start"], correctAnswer: "Start", explanation: "START = mettre en marche." }
    ]
  },
  {
    id: 145,
    title: "FINISH vs END",
    description: "FINISH (finir une tâche) vs END (se terminer).",
    questions: [
      { id: 1, question: "I need to ___ my homework.", options: ["finish", "end"], correctAnswer: "finish", explanation: "FINISH = terminer (tâche)." },
      { id: 2, question: "The movie ___ at 10.", options: ["finishes", "ends"], correctAnswer: "ends", explanation: "END = se terminer." },
      { id: 3, question: "Have you ___ yet?", options: ["finished", "ended"], correctAnswer: "finished", explanation: "FINISH = avoir terminé." },
      { id: 4, question: "The war ___ in 1945.", options: ["finished", "ended"], correctAnswer: "ended", explanation: "END = prendre fin." },
      { id: 5, question: "Let me ___ speaking.", options: ["finish", "end"], correctAnswer: "finish", explanation: "FINISH = finir de parler." },
      { id: 6, question: "Their relationship ___.", options: ["finished", "ended"], correctAnswer: "ended", explanation: "END = se terminer." },
      { id: 7, question: "I ___ my meal.", options: ["finished", "ended"], correctAnswer: "finished", explanation: "FINISH = finir (repas)." },
      { id: 8, question: "The road ___ here.", options: ["finishes", "ends"], correctAnswer: "ends", explanation: "END = s'arrêter là." },
      { id: 9, question: "___ what you started.", options: ["Finish", "End"], correctAnswer: "Finish", explanation: "FINISH = achever." },
      { id: 10, question: "How does the story ___?", options: ["finish", "end"], correctAnswer: "end", explanation: "END = comment ça se termine." }
    ]
  },
  {
    id: 146,
    title: "DISCOVER vs INVENT vs FIND OUT",
    description: "DISCOVER (découvrir qqch d'existant), INVENT (inventer qqch de nouveau), FIND OUT (apprendre/découvrir une info).",
    questions: [
      { id: 1, question: "Who ___ America?", options: ["discovered", "invented", "found out"], correctAnswer: "discovered", explanation: "DISCOVER = découvrir (existant)." },
      { id: 2, question: "Edison ___ the light bulb.", options: ["discovered", "invented", "found out"], correctAnswer: "invented", explanation: "INVENT = créer qqch de nouveau." },
      { id: 3, question: "I ___ the truth.", options: ["discovered", "invented", "found out"], correctAnswer: "found out", explanation: "FIND OUT = apprendre." },
      { id: 4, question: "Scientists ___ a new species.", options: ["discovered", "invented", "found out"], correctAnswer: "discovered", explanation: "DISCOVER = trouver (existant)." },
      { id: 5, question: "Who ___ the telephone?", options: ["discovered", "invented", "found out"], correctAnswer: "invented", explanation: "INVENT = inventer." },
      { id: 6, question: "How did you ___?", options: ["discover", "invent", "find out"], correctAnswer: "find out", explanation: "FIND OUT = apprendre comment." },
      { id: 7, question: "Penicillin was ___ by Fleming.", options: ["discovered", "invented", "found out"], correctAnswer: "discovered", explanation: "DISCOVER = découvrir." },
      { id: 8, question: "She ___ he was lying.", options: ["discovered", "invented", "found out"], correctAnswer: "found out", explanation: "FIND OUT = découvrir (info)." },
      { id: 9, question: "They ___ a cure.", options: ["discovered", "invented", "found out"], correctAnswer: "discovered", explanation: "DISCOVER = trouver (science)." },
      { id: 10, question: "He ___ a new game.", options: ["discovered", "invented", "found out"], correctAnswer: "invented", explanation: "INVENT = créer." }
    ]
  },
  {
    id: 147,
    title: "LOOK FORWARD TO vs EXPECT",
    description: "LOOK FORWARD TO (attendre avec impatience) vs EXPECT (s'attendre à).",
    questions: [
      { id: 1, question: "I ___ seeing you!", options: ["look forward to", "expect"], correctAnswer: "look forward to", explanation: "LOOK FORWARD TO = j'ai hâte de." },
      { id: 2, question: "I ___ him to call.", options: ["look forward to", "expect"], correctAnswer: "expect", explanation: "EXPECT = je m'attends à." },
      { id: 3, question: "We ___ the holiday.", options: ["are looking forward to", "expect"], correctAnswer: "are looking forward to", explanation: "LOOK FORWARD TO = impatience." },
      { id: 4, question: "What do you ___?", options: ["look forward to", "expect"], correctAnswer: "expect", explanation: "EXPECT = anticiper." },
      { id: 5, question: "I ___ your reply.", options: ["look forward to", "expect"], correctAnswer: "look forward to", explanation: "LOOK FORWARD TO = attendre (positive)." },
      { id: 6, question: "She ___ to fail.", options: ["looks forward to", "expects"], correctAnswer: "expects", explanation: "EXPECT = prévoir." },
      { id: 7, question: "They ___ the wedding.", options: ["are looking forward to", "expect"], correctAnswer: "are looking forward to", explanation: "LOOK FORWARD TO = hâte." },
      { id: 8, question: "I didn't ___ that!", options: ["look forward to", "expect"], correctAnswer: "expect", explanation: "EXPECT = s'attendre à." },
      { id: 9, question: "We ___ hearing from you.", options: ["look forward to", "expect"], correctAnswer: "look forward to", explanation: "LOOK FORWARD TO + -ING." },
      { id: 10, question: "As ___.", options: ["looked forward to", "expected"], correctAnswer: "expected", explanation: "AS EXPECTED = comme prévu." }
    ]
  },
  {
    id: 148,
    title: "AFFECT vs EFFECT",
    description: "AFFECT (verbe - influencer) vs EFFECT (nom - résultat).",
    questions: [
      { id: 1, question: "How did it ___ you?", options: ["affect", "effect"], correctAnswer: "affect", explanation: "AFFECT = influencer (verbe)." },
      { id: 2, question: "The ___ was immediate.", options: ["affect", "effect"], correctAnswer: "effect", explanation: "EFFECT = effet (nom)." },
      { id: 3, question: "Stress can ___ your health.", options: ["affect", "effect"], correctAnswer: "affect", explanation: "AFFECT = impacter." },
      { id: 4, question: "Side ___s may occur.", options: ["affect", "effect"], correctAnswer: "effect", explanation: "EFFECT = effet secondaire." },
      { id: 5, question: "Don't let it ___ you.", options: ["affect", "effect"], correctAnswer: "affect", explanation: "AFFECT = toucher." },
      { id: 6, question: "The ___ of the drug.", options: ["affect", "effect"], correctAnswer: "effect", explanation: "EFFECT = l'effet de." },
      { id: 7, question: "Weather ___ my mood.", options: ["affects", "effects"], correctAnswer: "affects", explanation: "AFFECT = influencer." },
      { id: 8, question: "Cause and ___.", options: ["affect", "effect"], correctAnswer: "effect", explanation: "EFFECT = effet (conséquence)." },
      { id: 9, question: "How does this ___ me?", options: ["affect", "effect"], correctAnswer: "affect", explanation: "AFFECT = concerner." },
      { id: 10, question: "Take ___ immediately.", options: ["affect", "effect"], correctAnswer: "effect", explanation: "EFFECT = entrer en vigueur." }
    ]
  },
  {
    id: 149,
    title: "ADVICE vs ADVISE",
    description: "ADVICE (nom - conseil) vs ADVISE (verbe - conseiller).",
    questions: [
      { id: 1, question: "Can you give me some ___?", options: ["advice", "advise"], correctAnswer: "advice", explanation: "ADVICE = conseil (nom)." },
      { id: 2, question: "I ___ you to wait.", options: ["advice", "advise"], correctAnswer: "advise", explanation: "ADVISE = conseiller (verbe)." },
      { id: 3, question: "Her ___ was helpful.", options: ["advice", "advise"], correctAnswer: "advice", explanation: "ADVICE = le conseil." },
      { id: 4, question: "What do you ___?", options: ["advice", "advise"], correctAnswer: "advise", explanation: "ADVISE = conseiller." },
      { id: 5, question: "I need your ___.", options: ["advice", "advise"], correctAnswer: "advice", explanation: "ADVICE = conseil (nom)." },
      { id: 6, question: "I would ___ against it.", options: ["advice", "advise"], correctAnswer: "advise", explanation: "ADVISE against = déconseiller." },
      { id: 7, question: "Take my ___.", options: ["advice", "advise"], correctAnswer: "advice", explanation: "ADVICE = conseil." },
      { id: 8, question: "Let me ___ you.", options: ["advice", "advise"], correctAnswer: "advise", explanation: "ADVISE = donner un conseil." },
      { id: 9, question: "Good ___!", options: ["advice", "advise"], correctAnswer: "advice", explanation: "ADVICE = bon conseil." },
      { id: 10, question: "Please ___ me.", options: ["advice", "advise"], correctAnswer: "advise", explanation: "ADVISE = me conseiller." }
    ]
  },
  {
    id: 150,
    title: "PRACTICE vs PRACTISE",
    description: "PRACTICE (nom US/UK) vs PRACTISE (verbe UK).",
    questions: [
      { id: 1, question: "I need more ___.", options: ["practice", "practise"], correctAnswer: "practice", explanation: "PRACTICE = pratique (nom)." },
      { id: 2, question: "You should ___ every day.", options: ["practice", "practise"], correctAnswer: "practise", explanation: "PRACTISE = s'entraîner (UK verbe)." },
      { id: 3, question: "It takes ___.", options: ["practice", "practise"], correctAnswer: "practice", explanation: "PRACTICE = entraînement (nom)." },
      { id: 4, question: "Let's ___ together.", options: ["practice", "practise"], correctAnswer: "practise", explanation: "PRACTISE = pratiquer (verbe UK)." },
      { id: 5, question: "___ makes perfect.", options: ["Practice", "Practise"], correctAnswer: "Practice", explanation: "PRACTICE = la pratique (nom)." },
      { id: 6, question: "She ___ piano daily.", options: ["practices", "practises"], correctAnswer: "practises", explanation: "PRACTISE = elle pratique (UK)." },
      { id: 7, question: "A medical ___.", options: ["practice", "practise"], correctAnswer: "practice", explanation: "PRACTICE = cabinet (nom)." },
      { id: 8, question: "I ___ speaking English.", options: ["practice", "practise"], correctAnswer: "practise", explanation: "PRACTISE = je pratique (UK)." },
      { id: 9, question: "Good ___!", options: ["practice", "practise"], correctAnswer: "practice", explanation: "PRACTICE = bonne pratique." },
      { id: 10, question: "Keep ___!", options: ["practicing", "practising"], correctAnswer: "practising", explanation: "PRACTISE = continuer à s'entraîner (UK)." }
    ]
  }
];
