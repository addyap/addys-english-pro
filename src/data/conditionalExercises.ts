export interface ConditionalExercise {
  id: number;
  title: string;
  description: string;
  conditionalType: 'zero' | 'first' | 'second' | 'third' | 'mixed';
  explanation: {
    en: string;
    fr: string;
    structure: string;
    example: string;
  };
  questions: {
    id: number;
    sentence: string; // Sentence with blank(s)
    options: string[];
    answer: string;
    explanation: string;
    translation: string;
  }[];
}

export const conditionalExercises: ConditionalExercise[] = [
  {
    id: 1,
    title: "Conditionnel Zéro : Vérités générales",
    description: "Le conditionnel zéro pour les faits et vérités universelles.",
    conditionalType: 'zero',
    explanation: {
      en: "Zero conditional is used for facts, general truths, and things that are always true.",
      fr: "Le conditionnel zéro est utilisé pour les faits, les vérités générales et les choses qui sont toujours vraies.",
      structure: "If + present simple, present simple",
      example: "If you heat water to 100°C, it boils."
    },
    questions: [
      { id: 1, sentence: "If you ___ (heat) ice, it ___ (melt).", options: ["heat / melts", "heated / melted", "heat / will melt", "will heat / melts"], answer: "heat / melts", explanation: "Zero conditional: both verbs in present simple for facts.", translation: "Si tu chauffes de la glace, elle fond." },
      { id: 2, sentence: "If it ___ (rain), the ground ___ (get) wet.", options: ["rains / gets", "rained / got", "rains / will get", "will rain / gets"], answer: "rains / gets", explanation: "Zero conditional for a general truth.", translation: "S'il pleut, le sol devient mouillé." },
      { id: 3, sentence: "Plants ___ (die) if they ___ (not get) enough water.", options: ["die / don't get", "will die / don't get", "died / didn't get", "die / won't get"], answer: "die / don't get", explanation: "Zero conditional with negative.", translation: "Les plantes meurent si elles n'ont pas assez d'eau." },
      { id: 4, sentence: "If you ___ (mix) blue and yellow, you ___ (get) green.", options: ["mix / get", "mixed / got", "mix / will get", "will mix / get"], answer: "mix / get", explanation: "Scientific fact using zero conditional.", translation: "Si tu mélanges du bleu et du jaune, tu obtiens du vert." },
      { id: 5, sentence: "Water ___ (freeze) if the temperature ___ (drop) below zero.", options: ["freezes / drops", "will freeze / drops", "freezes / will drop", "froze / dropped"], answer: "freezes / drops", explanation: "Zero conditional for scientific facts.", translation: "L'eau gèle si la température descend en dessous de zéro." },
      { id: 6, sentence: "If you ___ (press) this button, the machine ___ (start).", options: ["press / starts", "pressed / started", "press / will start", "will press / starts"], answer: "press / starts", explanation: "Zero conditional for instructions/rules.", translation: "Si tu appuies sur ce bouton, la machine démarre." },
      { id: 7, sentence: "If people ___ (not eat), they ___ (become) hungry.", options: ["don't eat / become", "won't eat / become", "don't eat / will become", "didn't eat / became"], answer: "don't eat / become", explanation: "Zero conditional for general truths.", translation: "Si les gens ne mangent pas, ils ont faim." },
      { id: 8, sentence: "You ___ (get) burned if you ___ (touch) fire.", options: ["get / touch", "will get / touch", "got / touched", "get / will touch"], answer: "get / touch", explanation: "Zero conditional for warnings/facts.", translation: "Tu te brûles si tu touches le feu." },
      { id: 9, sentence: "If you ___ (add) sugar to coffee, it ___ (taste) sweeter.", options: ["add / tastes", "added / tasted", "add / will taste", "will add / tastes"], answer: "add / tastes", explanation: "Zero conditional for obvious results.", translation: "Si tu ajoutes du sucre au café, il a un goût plus sucré." },
      { id: 10, sentence: "Metal ___ (expand) if it ___ (be) heated.", options: ["expands / is", "will expand / is", "expanded / was", "expands / will be"], answer: "expands / is", explanation: "Zero conditional for scientific principles.", translation: "Le métal se dilate s'il est chauffé." }
    ]
  },
  {
    id: 2,
    title: "Conditionnel Premier : Situations probables",
    description: "Le premier conditionnel pour les situations réelles et probables du futur.",
    conditionalType: 'first',
    explanation: {
      en: "First conditional is used for real and possible situations in the future.",
      fr: "Le premier conditionnel est utilisé pour des situations réelles et possibles dans le futur.",
      structure: "If + present simple, will + infinitive",
      example: "If it rains tomorrow, I will take an umbrella."
    },
    questions: [
      { id: 1, sentence: "If it ___ (rain) tomorrow, we ___ (stay) at home.", options: ["rains / will stay", "will rain / stay", "rained / would stay", "rains / stay"], answer: "rains / will stay", explanation: "First conditional: if + present, will + infinitive.", translation: "S'il pleut demain, nous resterons à la maison." },
      { id: 2, sentence: "I ___ (help) you if you ___ (ask) me.", options: ["will help / ask", "help / will ask", "would help / asked", "will help / will ask"], answer: "will help / ask", explanation: "First conditional for offers.", translation: "Je t'aiderai si tu me le demandes." },
      { id: 3, sentence: "If she ___ (not hurry), she ___ (miss) the train.", options: ["doesn't hurry / will miss", "won't hurry / misses", "didn't hurry / would miss", "doesn't hurry / misses"], answer: "doesn't hurry / will miss", explanation: "First conditional with negative.", translation: "Si elle ne se dépêche pas, elle ratera le train." },
      { id: 4, sentence: "You ___ (pass) the exam if you ___ (study) hard.", options: ["will pass / study", "pass / will study", "would pass / studied", "will pass / will study"], answer: "will pass / study", explanation: "First conditional for likely outcomes.", translation: "Tu réussiras l'examen si tu études dur." },
      { id: 5, sentence: "If we ___ (leave) now, we ___ (arrive) on time.", options: ["leave / will arrive", "will leave / arrive", "left / would arrive", "leave / arrive"], answer: "leave / will arrive", explanation: "First conditional for real possibilities.", translation: "Si nous partons maintenant, nous arriverons à l'heure." },
      { id: 6, sentence: "She ___ (be) angry if you ___ (tell) her the truth.", options: ["will be / tell", "is / will tell", "would be / told", "will be / will tell"], answer: "will be / tell", explanation: "First conditional for predicted reactions.", translation: "Elle sera en colère si tu lui dis la vérité." },
      { id: 7, sentence: "If the weather ___ (be) nice, we ___ (go) to the beach.", options: ["is / will go", "will be / go", "was / would go", "is / go"], answer: "is / will go", explanation: "First conditional for plans.", translation: "Si le temps est beau, nous irons à la plage." },
      { id: 8, sentence: "I ___ (not go) to the party if you ___ (not come) with me.", options: ["won't go / don't come", "don't go / won't come", "wouldn't go / didn't come", "won't go / won't come"], answer: "won't go / don't come", explanation: "First conditional with double negative.", translation: "Je n'irai pas à la fête si tu ne viens pas avec moi." },
      { id: 9, sentence: "If he ___ (get) the job, he ___ (move) to London.", options: ["gets / will move", "will get / moves", "got / would move", "gets / moves"], answer: "gets / will move", explanation: "First conditional for consequences.", translation: "S'il obtient le travail, il déménagera à Londres." },
      { id: 10, sentence: "What ___ you ___ (do) if you ___ (win) the lottery?", options: ["will / do / win", "would / do / won", "do / do / will win", "will / do / will win"], answer: "will / do / win", explanation: "First conditional in questions.", translation: "Que feras-tu si tu gagnes à la loterie ?" }
    ]
  },
  {
    id: 3,
    title: "Conditionnel Deuxième : Situations hypothétiques",
    description: "Le deuxième conditionnel pour les situations irréelles ou peu probables.",
    conditionalType: 'second',
    explanation: {
      en: "Second conditional is used for unreal or hypothetical situations in the present or future.",
      fr: "Le deuxième conditionnel est utilisé pour des situations irréelles ou hypothétiques dans le présent ou le futur.",
      structure: "If + past simple, would + infinitive",
      example: "If I won the lottery, I would travel the world."
    },
    questions: [
      { id: 1, sentence: "If I ___ (be) rich, I ___ (buy) a big house.", options: ["was / would buy", "am / will buy", "were / would buy", "was / will buy"], answer: "were / would buy", explanation: "Second conditional: if + past, would + infinitive. Note: 'were' is preferred for all persons in formal English.", translation: "Si j'étais riche, j'achèterais une grande maison." },
      { id: 2, sentence: "She ___ (travel) more if she ___ (have) more time.", options: ["would travel / had", "will travel / has", "traveled / would have", "would travel / would have"], answer: "would travel / had", explanation: "Second conditional for hypothetical situations.", translation: "Elle voyagerait plus si elle avait plus de temps." },
      { id: 3, sentence: "If I ___ (know) the answer, I ___ (tell) you.", options: ["knew / would tell", "know / will tell", "knew / told", "would know / told"], answer: "knew / would tell", explanation: "Second conditional for imaginary situations.", translation: "Si je connaissais la réponse, je te le dirais." },
      { id: 4, sentence: "What ___ you ___ (do) if you ___ (see) a ghost?", options: ["would / do / saw", "will / do / see", "did / do / saw", "would / do / would see"], answer: "would / do / saw", explanation: "Second conditional for hypothetical questions.", translation: "Que ferais-tu si tu voyais un fantôme ?" },
      { id: 5, sentence: "If he ___ (speak) English, he ___ (get) the job.", options: ["spoke / would get", "speaks / will get", "spoke / got", "would speak / got"], answer: "spoke / would get", explanation: "Second conditional for unlikely conditions.", translation: "S'il parlait anglais, il obtiendrait le travail." },
      { id: 6, sentence: "I ___ (help) you if I ___ (can), but I'm too busy.", options: ["would help / could", "will help / can", "helped / could", "would help / would can"], answer: "would help / could", explanation: "Second conditional with modal verb 'could'.", translation: "Je t'aiderais si je pouvais, mais je suis trop occupé." },
      { id: 7, sentence: "If I ___ (be) you, I ___ (not accept) that offer.", options: ["were / wouldn't accept", "was / won't accept", "am / wouldn't accept", "were / didn't accept"], answer: "were / wouldn't accept", explanation: "Second conditional for advice: 'If I were you...'", translation: "Si j'étais toi, je n'accepterais pas cette offre." },
      { id: 8, sentence: "They ___ (move) abroad if they ___ (not have) children.", options: ["would move / didn't have", "will move / don't have", "moved / didn't have", "would move / wouldn't have"], answer: "would move / didn't have", explanation: "Second conditional with negative.", translation: "Ils déménageraient à l'étranger s'ils n'avaient pas d'enfants." },
      { id: 9, sentence: "If the weather ___ (be) better, we ___ (go) for a walk.", options: ["were / would go", "is / will go", "was / went", "were / went"], answer: "were / would go", explanation: "Second conditional for current unreal situations.", translation: "Si le temps était meilleur, nous irions nous promener." },
      { id: 10, sentence: "I ___ (not do) that if I ___ (be) in your position.", options: ["wouldn't do / were", "won't do / am", "didn't do / was", "wouldn't do / would be"], answer: "wouldn't do / were", explanation: "Second conditional for giving advice.", translation: "Je ne ferais pas ça si j'étais à ta place." }
    ]
  },
  {
    id: 4,
    title: "Conditionnel Troisième : Situations passées irréelles",
    description: "Le troisième conditionnel pour les situations passées qui ne se sont pas produites.",
    conditionalType: 'third',
    explanation: {
      en: "Third conditional is used for unreal past situations - things that didn't happen.",
      fr: "Le troisième conditionnel est utilisé pour des situations passées irréelles - des choses qui ne se sont pas produites.",
      structure: "If + past perfect, would have + past participle",
      example: "If I had studied harder, I would have passed the exam."
    },
    questions: [
      { id: 1, sentence: "If I ___ (study) harder, I ___ (pass) the exam.", options: ["had studied / would have passed", "studied / would pass", "had studied / passed", "would study / had passed"], answer: "had studied / would have passed", explanation: "Third conditional: if + past perfect, would have + past participle.", translation: "Si j'avais étudié plus dur, j'aurais réussi l'examen." },
      { id: 2, sentence: "She ___ (arrive) on time if she ___ (leave) earlier.", options: ["would have arrived / had left", "arrived / left", "would arrive / had left", "would have arrived / would leave"], answer: "would have arrived / had left", explanation: "Third conditional for past regrets.", translation: "Elle serait arrivée à l'heure si elle était partie plus tôt." },
      { id: 3, sentence: "If we ___ (know) about the party, we ___ (come).", options: ["had known / would have come", "knew / would come", "had known / came", "would know / had come"], answer: "had known / would have come", explanation: "Third conditional for missed opportunities.", translation: "Si nous avions su pour la fête, nous serions venus." },
      { id: 4, sentence: "I ___ (not make) that mistake if I ___ (be) more careful.", options: ["wouldn't have made / had been", "didn't make / was", "wouldn't make / had been", "wouldn't have made / was"], answer: "wouldn't have made / had been", explanation: "Third conditional with negative.", translation: "Je n'aurais pas fait cette erreur si j'avais été plus prudent." },
      { id: 5, sentence: "If they ___ (take) my advice, they ___ (not lose) money.", options: ["had taken / wouldn't have lost", "took / wouldn't lose", "had taken / didn't lose", "would take / hadn't lost"], answer: "had taken / wouldn't have lost", explanation: "Third conditional for past consequences.", translation: "S'ils avaient suivi mon conseil, ils n'auraient pas perdu d'argent." },
      { id: 6, sentence: "What ___ you ___ (do) if you ___ (be) there?", options: ["would / have done / had been", "did / do / were", "would / do / had been", "would / have done / were"], answer: "would / have done / had been", explanation: "Third conditional question form.", translation: "Qu'aurais-tu fait si tu avais été là ?" },
      { id: 7, sentence: "He ___ (become) a doctor if he ___ (finish) his studies.", options: ["would have become / had finished", "became / finished", "would become / had finished", "would have become / finished"], answer: "would have become / had finished", explanation: "Third conditional for unrealized potential.", translation: "Il serait devenu médecin s'il avait terminé ses études." },
      { id: 8, sentence: "If the weather ___ (be) better, we ___ (go) to the beach.", options: ["had been / would have gone", "was / would go", "had been / went", "were / would have gone"], answer: "had been / would have gone", explanation: "Third conditional for past events that didn't happen.", translation: "Si le temps avait été meilleur, nous serions allés à la plage." },
      { id: 9, sentence: "I ___ (tell) you if I ___ (know) the truth.", options: ["would have told / had known", "told / knew", "would tell / had known", "would have told / knew"], answer: "would have told / had known", explanation: "Third conditional for hypothetical past actions.", translation: "Je te l'aurais dit si j'avais connu la vérité." },
      { id: 10, sentence: "If she ___ (not miss) the bus, she ___ (not be) late.", options: ["hadn't missed / wouldn't have been", "didn't miss / wasn't", "hadn't missed / wasn't", "wouldn't miss / hadn't been"], answer: "hadn't missed / wouldn't have been", explanation: "Third conditional with double negative.", translation: "Si elle n'avait pas raté le bus, elle n'aurait pas été en retard." }
    ]
  },
  {
    id: 5,
    title: "Conditionnels mixtes : Combinaisons",
    description: "Exercice combinant différents types de conditionnels.",
    conditionalType: 'mixed',
    explanation: {
      en: "Mixed conditionals combine different conditional types, often linking past and present.",
      fr: "Les conditionnels mixtes combinent différents types de conditionnels, souvent en liant le passé et le présent.",
      structure: "Various combinations possible",
      example: "If I had studied medicine, I would be a doctor now. (3rd + 2nd)"
    },
    questions: [
      { id: 1, sentence: "If water ___ (reach) 100°C, it ___ (boil). [Fact]", options: ["reaches / boils", "reached / would boil", "reaches / will boil", "had reached / would boil"], answer: "reaches / boils", explanation: "Zero conditional for scientific facts.", translation: "Si l'eau atteint 100°C, elle bout." },
      { id: 2, sentence: "If you ___ (come) to the party tomorrow, you ___ (meet) Sarah. [Likely future]", options: ["come / will meet", "came / would meet", "had come / would have met", "come / meet"], answer: "come / will meet", explanation: "First conditional for real future possibility.", translation: "Si tu viens à la fête demain, tu rencontreras Sarah." },
      { id: 3, sentence: "If I ___ (be) taller, I ___ (play) basketball. [Hypothetical present]", options: ["were / would play", "am / will play", "had been / would have played", "were / played"], answer: "were / would play", explanation: "Second conditional for unreal present.", translation: "Si j'étais plus grand, je jouerais au basket." },
      { id: 4, sentence: "If she ___ (accept) the job offer, she ___ (not be) unemployed now. [Past affecting present]", options: ["had accepted / wouldn't be", "accepted / wouldn't be", "had accepted / wouldn't have been", "accepts / won't be"], answer: "had accepted / wouldn't be", explanation: "Mixed conditional: past cause → present result.", translation: "Si elle avait accepté l'offre d'emploi, elle ne serait pas au chômage maintenant." },
      { id: 5, sentence: "If I ___ (not oversleep), I ___ (not miss) the train. [Past]", options: ["hadn't overslept / wouldn't have missed", "didn't oversleep / wouldn't miss", "hadn't overslept / didn't miss", "wouldn't oversleep / hadn't missed"], answer: "hadn't overslept / wouldn't have missed", explanation: "Third conditional for past regret.", translation: "Si je ne m'étais pas réveillé en retard, je n'aurais pas raté le train." },
      { id: 6, sentence: "Ice ___ (melt) if you ___ (leave) it in the sun. [General truth]", options: ["melts / leave", "will melt / leave", "melted / left", "would melt / left"], answer: "melts / leave", explanation: "Zero conditional for facts.", translation: "La glace fond si tu la laisses au soleil." },
      { id: 7, sentence: "If I ___ (have) your number, I ___ (call) you. [Hypothetical present]", options: ["had / would call", "have / will call", "had had / would have called", "had / called"], answer: "had / would call", explanation: "Second conditional for current unreal situation.", translation: "Si j'avais ton numéro, je t'appellerais." },
      { id: 8, sentence: "If we ___ (save) more money, we ___ (buy) a house by now. [Past affecting present]", options: ["had saved / would have bought", "saved / would buy", "had saved / would buy", "save / will buy"], answer: "had saved / would have bought", explanation: "Third conditional or mixed for past impact.", translation: "Si nous avions économisé plus d'argent, nous aurions acheté une maison maintenant." },
      { id: 9, sentence: "If it ___ (rain) this afternoon, the match ___ (be) cancelled. [Possible future]", options: ["rains / will be", "rained / would be", "rains / is", "had rained / would have been"], answer: "rains / will be", explanation: "First conditional for likely future.", translation: "S'il pleut cet après-midi, le match sera annulé." },
      { id: 10, sentence: "If I ___ (be) a better cook, I ___ (not burn) the dinner yesterday. [Present affecting past]", options: ["were / wouldn't have burned", "was / didn't burn", "had been / wouldn't have burned", "am / won't burn"], answer: "were / wouldn't have burned", explanation: "Mixed conditional: present state → past result.", translation: "Si j'étais un meilleur cuisinier, je n'aurais pas brûlé le dîner hier." }
    ]
  }
];

export const getConditionalExerciseById = (id: number): ConditionalExercise | undefined => {
  return conditionalExercises.find(ex => ex.id === id);
};
