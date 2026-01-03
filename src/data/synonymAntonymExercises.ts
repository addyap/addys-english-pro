export interface SynonymAntonymExercise {
  id: number;
  title: string;
  description: string;
  type: 'synonym' | 'antonym' | 'mixed';
  questions: {
    id: number;
    word: string;
    type: 'synonym' | 'antonym';
    options: string[];
    answer: string;
    explanation: string;
    exampleSentence: string;
    translation: string;
  }[];
}

export const synonymAntonymExercises: SynonymAntonymExercise[] = [
  {
    id: 1,
    title: "Synonymes (1) : Adjectifs courants",
    description: "Trouvez les synonymes des adjectifs fréquemment utilisés.",
    type: 'synonym',
    questions: [
      { id: 1, word: "happy", type: "synonym", options: ["joyful", "sad", "angry", "tired"], answer: "joyful", explanation: "Happy et joyful signifient tous deux 'heureux, joyeux'.", exampleSentence: "She felt happy/joyful about the news.", translation: "Elle était heureuse de la nouvelle." },
      { id: 2, word: "big", type: "synonym", options: ["tiny", "large", "small", "narrow"], answer: "large", explanation: "Big et large signifient tous deux 'grand, gros'.", exampleSentence: "It's a big/large house.", translation: "C'est une grande maison." },
      { id: 3, word: "smart", type: "synonym", options: ["stupid", "intelligent", "slow", "lazy"], answer: "intelligent", explanation: "Smart et intelligent signifient tous deux 'intelligent'.", exampleSentence: "He's a smart/intelligent student.", translation: "C'est un étudiant intelligent." },
      { id: 4, word: "beautiful", type: "synonym", options: ["ugly", "gorgeous", "plain", "ordinary"], answer: "gorgeous", explanation: "Beautiful et gorgeous signifient tous deux 'magnifique, superbe'.", exampleSentence: "The view is beautiful/gorgeous.", translation: "La vue est magnifique." },
      { id: 5, word: "fast", type: "synonym", options: ["slow", "quick", "steady", "careful"], answer: "quick", explanation: "Fast et quick signifient tous deux 'rapide'.", exampleSentence: "He's a fast/quick runner.", translation: "C'est un coureur rapide." },
      { id: 6, word: "difficult", type: "synonym", options: ["easy", "simple", "challenging", "basic"], answer: "challenging", explanation: "Difficult et challenging signifient tous deux 'difficile, exigeant'.", exampleSentence: "It was a difficult/challenging exam.", translation: "C'était un examen difficile." },
      { id: 7, word: "rich", type: "synonym", options: ["poor", "wealthy", "broke", "modest"], answer: "wealthy", explanation: "Rich et wealthy signifient tous deux 'riche'.", exampleSentence: "He became rich/wealthy.", translation: "Il est devenu riche." },
      { id: 8, word: "old", type: "synonym", options: ["young", "ancient", "new", "fresh"], answer: "ancient", explanation: "Old et ancient signifient tous deux 'vieux, ancien'.", exampleSentence: "It's an old/ancient tradition.", translation: "C'est une tradition ancienne." },
      { id: 9, word: "strange", type: "synonym", options: ["normal", "usual", "odd", "common"], answer: "odd", explanation: "Strange et odd signifient tous deux 'étrange, bizarre'.", exampleSentence: "That's a strange/odd behavior.", translation: "C'est un comportement étrange." },
      { id: 10, word: "angry", type: "synonym", options: ["calm", "peaceful", "furious", "relaxed"], answer: "furious", explanation: "Angry et furious signifient tous deux 'en colère, furieux'.", exampleSentence: "She was angry/furious.", translation: "Elle était furieuse." }
    ]
  },
  {
    id: 2,
    title: "Antonymes (1) : Contraires courants",
    description: "Trouvez les antonymes (contraires) des mots proposés.",
    type: 'antonym',
    questions: [
      { id: 1, word: "hot", type: "antonym", options: ["warm", "cold", "cool", "mild"], answer: "cold", explanation: "Hot (chaud) est le contraire de cold (froid).", exampleSentence: "The coffee is hot, but the ice cream is cold.", translation: "Le café est chaud, mais la glace est froide." },
      { id: 2, word: "begin", type: "antonym", options: ["start", "commence", "end", "continue"], answer: "end", explanation: "Begin (commencer) est le contraire de end (terminer).", exampleSentence: "The movie begins at 8 and ends at 10.", translation: "Le film commence à 8h et se termine à 10h." },
      { id: 3, word: "buy", type: "antonym", options: ["purchase", "acquire", "sell", "get"], answer: "sell", explanation: "Buy (acheter) est le contraire de sell (vendre).", exampleSentence: "I buy products and he sells them.", translation: "J'achète des produits et il les vend." },
      { id: 4, word: "win", type: "antonym", options: ["succeed", "triumph", "lose", "gain"], answer: "lose", explanation: "Win (gagner) est le contraire de lose (perdre).", exampleSentence: "You can't always win; sometimes you lose.", translation: "On ne peut pas toujours gagner ; parfois on perd." },
      { id: 5, word: "remember", type: "antonym", options: ["recall", "recollect", "forget", "memorize"], answer: "forget", explanation: "Remember (se souvenir) est le contraire de forget (oublier).", exampleSentence: "I remember his name but I forget her address.", translation: "Je me souviens de son nom mais j'oublie son adresse." },
      { id: 6, word: "love", type: "antonym", options: ["adore", "like", "hate", "enjoy"], answer: "hate", explanation: "Love (aimer) est le contraire de hate (détester).", exampleSentence: "Some people love winter, others hate it.", translation: "Certaines personnes aiment l'hiver, d'autres le détestent." },
      { id: 7, word: "push", type: "antonym", options: ["shove", "press", "pull", "thrust"], answer: "pull", explanation: "Push (pousser) est le contraire de pull (tirer).", exampleSentence: "Push the door to open, pull to close.", translation: "Poussez la porte pour ouvrir, tirez pour fermer." },
      { id: 8, word: "accept", type: "antonym", options: ["receive", "take", "refuse", "agree"], answer: "refuse", explanation: "Accept (accepter) est le contraire de refuse (refuser).", exampleSentence: "She accepted the offer but he refused it.", translation: "Elle a accepté l'offre mais il l'a refusée." },
      { id: 9, word: "arrive", type: "antonym", options: ["come", "reach", "leave", "appear"], answer: "leave", explanation: "Arrive (arriver) est le contraire de leave (partir).", exampleSentence: "Trains arrive and leave every hour.", translation: "Les trains arrivent et partent toutes les heures." },
      { id: 10, word: "borrow", type: "antonym", options: ["take", "use", "lend", "keep"], answer: "lend", explanation: "Borrow (emprunter) est le contraire de lend (prêter).", exampleSentence: "Can I borrow your pen? / Can you lend me your pen?", translation: "Puis-je emprunter ton stylo ? / Peux-tu me prêter ton stylo ?" }
    ]
  },
  {
    id: 3,
    title: "Synonymes (2) : Verbes d'action",
    description: "Trouvez les synonymes des verbes d'action courants.",
    type: 'synonym',
    questions: [
      { id: 1, word: "make", type: "synonym", options: ["destroy", "create", "break", "ruin"], answer: "create", explanation: "Make et create signifient tous deux 'créer, fabriquer'.", exampleSentence: "She makes/creates beautiful art.", translation: "Elle crée de belles œuvres d'art." },
      { id: 2, word: "help", type: "synonym", options: ["hinder", "assist", "block", "prevent"], answer: "assist", explanation: "Help et assist signifient tous deux 'aider'.", exampleSentence: "Can you help/assist me with this?", translation: "Pouvez-vous m'aider avec ceci ?" },
      { id: 3, word: "talk", type: "synonym", options: ["listen", "speak", "hear", "silence"], answer: "speak", explanation: "Talk et speak signifient tous deux 'parler'.", exampleSentence: "They talked/spoke for hours.", translation: "Ils ont parlé pendant des heures." },
      { id: 4, word: "look", type: "synonym", options: ["ignore", "gaze", "overlook", "miss"], answer: "gaze", explanation: "Look et gaze signifient tous deux 'regarder'.", exampleSentence: "She looked/gazed at the stars.", translation: "Elle regardait les étoiles." },
      { id: 5, word: "run", type: "synonym", options: ["walk", "sprint", "crawl", "stroll"], answer: "sprint", explanation: "Run et sprint signifient tous deux 'courir (vite)'.", exampleSentence: "He ran/sprinted to catch the bus.", translation: "Il a couru pour attraper le bus." },
      { id: 6, word: "think", type: "synonym", options: ["ignore", "consider", "forget", "neglect"], answer: "consider", explanation: "Think et consider signifient tous deux 'réfléchir, considérer'.", exampleSentence: "I'll think/consider about it.", translation: "J'y réfléchirai." },
      { id: 7, word: "understand", type: "synonym", options: ["confuse", "comprehend", "misunderstand", "puzzle"], answer: "comprehend", explanation: "Understand et comprehend signifient tous deux 'comprendre'.", exampleSentence: "Do you understand/comprehend the concept?", translation: "Comprenez-vous le concept ?" },
      { id: 8, word: "show", type: "synonym", options: ["hide", "demonstrate", "conceal", "cover"], answer: "demonstrate", explanation: "Show et demonstrate signifient tous deux 'montrer, démontrer'.", exampleSentence: "Let me show/demonstrate how it works.", translation: "Laissez-moi vous montrer comment ça marche." },
      { id: 9, word: "fix", type: "synonym", options: ["break", "repair", "damage", "destroy"], answer: "repair", explanation: "Fix et repair signifient tous deux 'réparer'.", exampleSentence: "I need to fix/repair my car.", translation: "Je dois réparer ma voiture." },
      { id: 10, word: "choose", type: "synonym", options: ["reject", "select", "refuse", "decline"], answer: "select", explanation: "Choose et select signifient tous deux 'choisir, sélectionner'.", exampleSentence: "Please choose/select an option.", translation: "Veuillez choisir une option." }
    ]
  },
  {
    id: 4,
    title: "Antonymes (2) : Adjectifs",
    description: "Trouvez les antonymes des adjectifs proposés.",
    type: 'antonym',
    questions: [
      { id: 1, word: "dark", type: "antonym", options: ["dim", "bright", "gloomy", "shadowy"], answer: "bright", explanation: "Dark (sombre) est le contraire de bright (lumineux).", exampleSentence: "The room was dark, then became bright.", translation: "La pièce était sombre, puis est devenue lumineuse." },
      { id: 2, word: "heavy", type: "antonym", options: ["weighty", "light", "bulky", "massive"], answer: "light", explanation: "Heavy (lourd) est le contraire de light (léger).", exampleSentence: "This bag is too heavy; I need a light one.", translation: "Ce sac est trop lourd ; j'en ai besoin d'un léger." },
      { id: 3, word: "deep", type: "antonym", options: ["profound", "shallow", "vast", "immense"], answer: "shallow", explanation: "Deep (profond) est le contraire de shallow (peu profond).", exampleSentence: "The ocean is deep here but shallow near the shore.", translation: "L'océan est profond ici mais peu profond près du rivage." },
      { id: 4, word: "tight", type: "antonym", options: ["snug", "loose", "firm", "secure"], answer: "loose", explanation: "Tight (serré) est le contraire de loose (lâche, ample).", exampleSentence: "These shoes are too tight; I prefer loose ones.", translation: "Ces chaussures sont trop serrées ; je préfère les amples." },
      { id: 5, word: "empty", type: "antonym", options: ["vacant", "full", "bare", "hollow"], answer: "full", explanation: "Empty (vide) est le contraire de full (plein).", exampleSentence: "The glass was empty, now it's full.", translation: "Le verre était vide, maintenant il est plein." },
      { id: 6, word: "rough", type: "antonym", options: ["coarse", "smooth", "harsh", "rugged"], answer: "smooth", explanation: "Rough (rugueux) est le contraire de smooth (lisse).", exampleSentence: "The road was rough but now it's smooth.", translation: "La route était rugueuse mais maintenant elle est lisse." },
      { id: 7, word: "wet", type: "antonym", options: ["damp", "dry", "moist", "humid"], answer: "dry", explanation: "Wet (mouillé) est le contraire de dry (sec).", exampleSentence: "My clothes are wet; I need dry ones.", translation: "Mes vêtements sont mouillés ; j'ai besoin de vêtements secs." },
      { id: 8, word: "thick", type: "antonym", options: ["dense", "thin", "solid", "compact"], answer: "thin", explanation: "Thick (épais) est le contraire de thin (mince, fin).", exampleSentence: "Cut a thick slice or a thin slice?", translation: "Je coupe une tranche épaisse ou fine ?" },
      { id: 9, word: "soft", type: "antonym", options: ["gentle", "hard", "tender", "delicate"], answer: "hard", explanation: "Soft (mou, doux) est le contraire de hard (dur).", exampleSentence: "The bed is too soft; I prefer hard mattresses.", translation: "Le lit est trop mou ; je préfère les matelas durs." },
      { id: 10, word: "noisy", type: "antonym", options: ["loud", "quiet", "rowdy", "boisterous"], answer: "quiet", explanation: "Noisy (bruyant) est le contraire de quiet (calme, silencieux).", exampleSentence: "The street is noisy; my room is quiet.", translation: "La rue est bruyante ; ma chambre est calme." }
    ]
  },
  {
    id: 5,
    title: "Synonymes & Antonymes : Mélange",
    description: "Exercice mixte : trouvez soit le synonyme, soit l'antonyme selon l'indication.",
    type: 'mixed',
    questions: [
      { id: 1, word: "brave", type: "synonym", options: ["cowardly", "courageous", "timid", "fearful"], answer: "courageous", explanation: "Brave et courageous sont synonymes (courageux).", exampleSentence: "The brave/courageous firefighter saved the child.", translation: "Le courageux pompier a sauvé l'enfant." },
      { id: 2, word: "ancient", type: "antonym", options: ["old", "modern", "antique", "historic"], answer: "modern", explanation: "Ancient (ancien) est le contraire de modern (moderne).", exampleSentence: "Ancient civilizations vs modern technology.", translation: "Les civilisations anciennes vs la technologie moderne." },
      { id: 3, word: "wealthy", type: "synonym", options: ["poor", "affluent", "needy", "broke"], answer: "affluent", explanation: "Wealthy et affluent sont synonymes (riche, aisé).", exampleSentence: "They live in a wealthy/affluent neighborhood.", translation: "Ils vivent dans un quartier aisé." },
      { id: 4, word: "generous", type: "antonym", options: ["giving", "selfish", "kind", "charitable"], answer: "selfish", explanation: "Generous (généreux) est le contraire de selfish (égoïste).", exampleSentence: "He's generous; she's selfish.", translation: "Il est généreux ; elle est égoïste." },
      { id: 5, word: "enormous", type: "synonym", options: ["tiny", "huge", "small", "little"], answer: "huge", explanation: "Enormous et huge sont synonymes (énorme).", exampleSentence: "The elephant is enormous/huge.", translation: "L'éléphant est énorme." },
      { id: 6, word: "simple", type: "antonym", options: ["easy", "complex", "basic", "plain"], answer: "complex", explanation: "Simple est le contraire de complex (complexe).", exampleSentence: "A simple solution vs a complex problem.", translation: "Une solution simple vs un problème complexe." },
      { id: 7, word: "boring", type: "synonym", options: ["exciting", "dull", "thrilling", "fascinating"], answer: "dull", explanation: "Boring et dull sont synonymes (ennuyeux).", exampleSentence: "The lecture was boring/dull.", translation: "Le cours était ennuyeux." },
      { id: 8, word: "expand", type: "antonym", options: ["grow", "shrink", "enlarge", "increase"], answer: "shrink", explanation: "Expand (s'étendre) est le contraire de shrink (rétrécir).", exampleSentence: "The company expanded then shrank.", translation: "L'entreprise s'est développée puis a rétréci." },
      { id: 9, word: "rare", type: "synonym", options: ["common", "uncommon", "frequent", "usual"], answer: "uncommon", explanation: "Rare et uncommon sont synonymes (rare, peu commun).", exampleSentence: "This species is rare/uncommon.", translation: "Cette espèce est rare." },
      { id: 10, word: "admit", type: "antonym", options: ["confess", "deny", "acknowledge", "concede"], answer: "deny", explanation: "Admit (admettre) est le contraire de deny (nier).", exampleSentence: "He admitted the truth, she denied it.", translation: "Il a admis la vérité, elle l'a niée." }
    ]
  },
  {
    id: 6,
    title: "Synonymes & Antonymes : Niveau avancé",
    description: "Vocabulaire plus soutenu pour les apprenants avancés.",
    type: 'mixed',
    questions: [
      { id: 1, word: "meticulous", type: "synonym", options: ["careless", "thorough", "sloppy", "hasty"], answer: "thorough", explanation: "Meticulous et thorough sont synonymes (méticuleux, minutieux).", exampleSentence: "She's meticulous/thorough in her work.", translation: "Elle est minutieuse dans son travail." },
      { id: 2, word: "ambiguous", type: "antonym", options: ["vague", "clear", "unclear", "confusing"], answer: "clear", explanation: "Ambiguous (ambigu) est le contraire de clear (clair).", exampleSentence: "The instructions were ambiguous, not clear.", translation: "Les instructions étaient ambiguës, pas claires." },
      { id: 3, word: "diminish", type: "synonym", options: ["increase", "decrease", "grow", "expand"], answer: "decrease", explanation: "Diminish et decrease sont synonymes (diminuer).", exampleSentence: "Sales diminished/decreased this quarter.", translation: "Les ventes ont diminué ce trimestre." },
      { id: 4, word: "optimistic", type: "antonym", options: ["hopeful", "pessimistic", "positive", "confident"], answer: "pessimistic", explanation: "Optimistic (optimiste) est le contraire de pessimistic (pessimiste).", exampleSentence: "She's optimistic; he's pessimistic.", translation: "Elle est optimiste ; il est pessimiste." },
      { id: 5, word: "inevitable", type: "synonym", options: ["avoidable", "unavoidable", "preventable", "optional"], answer: "unavoidable", explanation: "Inevitable et unavoidable sont synonymes (inévitable).", exampleSentence: "Change is inevitable/unavoidable.", translation: "Le changement est inévitable." },
      { id: 6, word: "temporary", type: "antonym", options: ["brief", "permanent", "short-term", "fleeting"], answer: "permanent", explanation: "Temporary (temporaire) est le contraire de permanent.", exampleSentence: "Is this job temporary or permanent?", translation: "Ce travail est-il temporaire ou permanent ?" },
      { id: 7, word: "contemplate", type: "synonym", options: ["ignore", "ponder", "dismiss", "overlook"], answer: "ponder", explanation: "Contemplate et ponder sont synonymes (contempler, méditer).", exampleSentence: "He contemplated/pondered the decision.", translation: "Il a médité sur la décision." },
      { id: 8, word: "mundane", type: "antonym", options: ["ordinary", "extraordinary", "routine", "regular"], answer: "extraordinary", explanation: "Mundane (banal) est le contraire de extraordinary (extraordinaire).", exampleSentence: "From mundane tasks to extraordinary achievements.", translation: "De tâches banales à des accomplissements extraordinaires." },
      { id: 9, word: "benevolent", type: "synonym", options: ["malicious", "kind-hearted", "cruel", "mean"], answer: "kind-hearted", explanation: "Benevolent et kind-hearted sont synonymes (bienveillant).", exampleSentence: "A benevolent/kind-hearted leader.", translation: "Un dirigeant bienveillant." },
      { id: 10, word: "conceal", type: "antonym", options: ["hide", "reveal", "cover", "mask"], answer: "reveal", explanation: "Conceal (cacher) est le contraire de reveal (révéler).", exampleSentence: "He concealed the truth, then revealed it.", translation: "Il a caché la vérité, puis l'a révélée." }
    ]
  }
];

export const getSynonymAntonymExerciseById = (id: number): SynonymAntonymExercise | undefined => {
  return synonymAntonymExercises.find(ex => ex.id === id);
};
