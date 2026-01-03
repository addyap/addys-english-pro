export interface ParagraphOrderingExercise {
  id: number;
  title: string;
  description: string;
  level: 'easy' | 'medium' | 'hard';
  paragraphs: {
    id: string;
    text: string;
    translation: string;
  }[];
  correctOrder: string[];
  hints?: string[];
  fullTextTranslation: string;
}

export const paragraphOrderingExercises: ParagraphOrderingExercise[] = [
  {
    id: 1,
    title: "Ordonnez le paragraphe (1) : Une recette simple",
    description: "Remettez les étapes de cette recette dans le bon ordre.",
    level: 'easy',
    paragraphs: [
      { id: "A", text: "Finally, serve the pancakes hot with maple syrup and fresh berries.", translation: "Enfin, servez les crêpes chaudes avec du sirop d'érable et des baies fraîches." },
      { id: "B", text: "First, mix the flour, eggs, milk, and a pinch of salt in a large bowl.", translation: "D'abord, mélangez la farine, les œufs, le lait et une pincée de sel dans un grand bol." },
      { id: "C", text: "Then, heat a non-stick pan over medium heat and add a little butter.", translation: "Ensuite, faites chauffer une poêle antiadhésive à feu moyen et ajoutez un peu de beurre." },
      { id: "D", text: "Next, pour a small amount of batter into the pan and cook until bubbles form.", translation: "Puis, versez une petite quantité de pâte dans la poêle et cuisez jusqu'à ce que des bulles se forment." },
      { id: "E", text: "After that, flip the pancake and cook for another minute until golden brown.", translation: "Après cela, retournez la crêpe et cuisez encore une minute jusqu'à ce qu'elle soit dorée." }
    ],
    correctOrder: ["B", "C", "D", "E", "A"],
    hints: ["Look for sequence words: First, Then, Next, After that, Finally"],
    fullTextTranslation: "D'abord, mélangez la farine, les œufs, le lait et une pincée de sel dans un grand bol. Ensuite, faites chauffer une poêle antiadhésive à feu moyen et ajoutez un peu de beurre. Puis, versez une petite quantité de pâte dans la poêle et cuisez jusqu'à ce que des bulles se forment. Après cela, retournez la crêpe et cuisez encore une minute jusqu'à ce qu'elle soit dorée. Enfin, servez les crêpes chaudes avec du sirop d'érable et des baies fraîches."
  },
  {
    id: 2,
    title: "Ordonnez le paragraphe (2) : Ma routine matinale",
    description: "Mettez les étapes de cette routine quotidienne dans l'ordre logique.",
    level: 'easy',
    paragraphs: [
      { id: "A", text: "After getting dressed, I have breakfast in the kitchen.", translation: "Après m'être habillé, je prends mon petit-déjeuner dans la cuisine." },
      { id: "B", text: "When I wake up, the first thing I do is turn off my alarm clock.", translation: "Quand je me réveille, la première chose que je fais est d'éteindre mon réveil." },
      { id: "C", text: "Before leaving the house, I check my bag to make sure I have everything.", translation: "Avant de quitter la maison, je vérifie mon sac pour m'assurer que j'ai tout." },
      { id: "D", text: "Then I take a quick shower and brush my teeth.", translation: "Ensuite, je prends une douche rapide et je me brosse les dents." },
      { id: "E", text: "Finally, I leave for work at around 8 o'clock.", translation: "Finalement, je pars au travail vers 8 heures." }
    ],
    correctOrder: ["B", "D", "A", "C", "E"],
    hints: ["Think about the logical sequence of morning activities"],
    fullTextTranslation: "Quand je me réveille, la première chose que je fais est d'éteindre mon réveil. Ensuite, je prends une douche rapide et je me brosse les dents. Après m'être habillé, je prends mon petit-déjeuner dans la cuisine. Avant de quitter la maison, je vérifie mon sac pour m'assurer que j'ai tout. Finalement, je pars au travail vers 8 heures."
  },
  {
    id: 3,
    title: "Ordonnez le paragraphe (3) : Comment faire du café",
    description: "Remettez les instructions pour faire du café dans le bon ordre.",
    level: 'easy',
    paragraphs: [
      { id: "A", text: "Pour the hot water slowly over the coffee grounds.", translation: "Versez l'eau chaude lentement sur le café moulu." },
      { id: "B", text: "Start by boiling fresh water in a kettle.", translation: "Commencez par faire bouillir de l'eau fraîche dans une bouilloire." },
      { id: "C", text: "Enjoy your freshly brewed coffee!", translation: "Savourez votre café fraîchement préparé !" },
      { id: "D", text: "While the water is heating, measure out two tablespoons of ground coffee.", translation: "Pendant que l'eau chauffe, mesurez deux cuillères à soupe de café moulu." },
      { id: "E", text: "Wait for about four minutes, then press down the plunger.", translation: "Attendez environ quatre minutes, puis appuyez sur le piston." }
    ],
    correctOrder: ["B", "D", "A", "E", "C"],
    hints: ["Follow the logical cooking sequence"],
    fullTextTranslation: "Commencez par faire bouillir de l'eau fraîche dans une bouilloire. Pendant que l'eau chauffe, mesurez deux cuillères à soupe de café moulu. Versez l'eau chaude lentement sur le café moulu. Attendez environ quatre minutes, puis appuyez sur le piston. Savourez votre café fraîchement préparé !"
  },
  {
    id: 4,
    title: "Ordonnez le paragraphe (4) : Une histoire courte",
    description: "Reconstruisez cette histoire en mettant les paragraphes dans l'ordre.",
    level: 'medium',
    paragraphs: [
      { id: "A", text: "The next morning, she woke up to find the cat had disappeared, leaving only muddy paw prints leading to the window.", translation: "Le lendemain matin, elle se réveilla et découvrit que le chat avait disparu, ne laissant que des empreintes de pattes boueuses menant à la fenêtre." },
      { id: "B", text: "Sarah had always loved cats, so when she heard a meowing sound outside her door one rainy evening, she immediately opened it.", translation: "Sarah avait toujours aimé les chats, alors quand elle entendit un miaulement devant sa porte un soir pluvieux, elle l'ouvrit immédiatement." },
      { id: "C", text: "Years later, Sarah still wondered about the mysterious cat that had appeared and vanished so suddenly.", translation: "Des années plus tard, Sarah se demandait encore qui était ce chat mystérieux qui était apparu et avait disparu si soudainement." },
      { id: "D", text: "Standing there was a beautiful grey cat with bright green eyes, soaking wet from the rain.", translation: "Là se tenait un magnifique chat gris aux yeux verts brillants, trempé par la pluie." },
      { id: "E", text: "She brought the cat inside, dried it with a towel, and gave it some warm milk before they both fell asleep by the fire.", translation: "Elle fit entrer le chat, le sécha avec une serviette et lui donna du lait chaud avant qu'ils ne s'endorment tous les deux près du feu." }
    ],
    correctOrder: ["B", "D", "E", "A", "C"],
    hints: ["Look for narrative progression and time markers"],
    fullTextTranslation: "Sarah avait toujours aimé les chats, alors quand elle entendit un miaulement devant sa porte un soir pluvieux, elle l'ouvrit immédiatement. Là se tenait un magnifique chat gris aux yeux verts brillants, trempé par la pluie. Elle fit entrer le chat, le sécha avec une serviette et lui donna du lait chaud avant qu'ils ne s'endorment tous les deux près du feu. Le lendemain matin, elle se réveilla et découvrit que le chat avait disparu, ne laissant que des empreintes de pattes boueuses menant à la fenêtre. Des années plus tard, Sarah se demandait encore qui était ce chat mystérieux qui était apparu et avait disparu si soudainement."
  },
  {
    id: 5,
    title: "Ordonnez le paragraphe (5) : Le processus de candidature",
    description: "Mettez les étapes d'une candidature d'emploi dans l'ordre.",
    level: 'medium',
    paragraphs: [
      { id: "A", text: "If the interview goes well, you may receive a job offer, which you can accept or negotiate.", translation: "Si l'entretien se passe bien, vous pouvez recevoir une offre d'emploi que vous pouvez accepter ou négocier." },
      { id: "B", text: "Begin by searching for job openings that match your skills and experience.", translation: "Commencez par rechercher des offres d'emploi qui correspondent à vos compétences et votre expérience." },
      { id: "C", text: "Once you've identified a suitable position, tailor your CV and cover letter to the specific role.", translation: "Une fois que vous avez identifié un poste approprié, adaptez votre CV et lettre de motivation au rôle spécifique." },
      { id: "D", text: "Submit your application before the deadline and wait for a response from the employer.", translation: "Soumettez votre candidature avant la date limite et attendez une réponse de l'employeur." },
      { id: "E", text: "If shortlisted, you'll be invited for an interview where you'll need to demonstrate your qualifications.", translation: "Si vous êtes présélectionné, vous serez invité à un entretien où vous devrez démontrer vos qualifications." }
    ],
    correctOrder: ["B", "C", "D", "E", "A"],
    hints: ["Follow the chronological order of a job application process"],
    fullTextTranslation: "Commencez par rechercher des offres d'emploi qui correspondent à vos compétences et votre expérience. Une fois que vous avez identifié un poste approprié, adaptez votre CV et lettre de motivation au rôle spécifique. Soumettez votre candidature avant la date limite et attendez une réponse de l'employeur. Si vous êtes présélectionné, vous serez invité à un entretien où vous devrez démontrer vos qualifications. Si l'entretien se passe bien, vous pouvez recevoir une offre d'emploi que vous pouvez accepter ou négocier."
  },
  {
    id: 6,
    title: "Ordonnez le paragraphe (6) : L'évolution du téléphone",
    description: "Reconstruisez ce texte sur l'histoire du téléphone.",
    level: 'hard',
    paragraphs: [
      { id: "A", text: "Today, smartphones have become essential tools that combine communication, entertainment, and productivity in one device.", translation: "Aujourd'hui, les smartphones sont devenus des outils essentiels qui combinent communication, divertissement et productivité en un seul appareil." },
      { id: "B", text: "The invention of the telephone in 1876 by Alexander Graham Bell revolutionized human communication.", translation: "L'invention du téléphone en 1876 par Alexander Graham Bell a révolutionné la communication humaine." },
      { id: "C", text: "For decades, telephones remained stationary devices connected by wires, limiting their use to homes and offices.", translation: "Pendant des décennies, les téléphones sont restés des appareils fixes connectés par des fils, limitant leur utilisation aux maisons et bureaux." },
      { id: "D", text: "The introduction of mobile phones in the 1980s brought unprecedented freedom, allowing people to communicate from anywhere.", translation: "L'introduction des téléphones mobiles dans les années 1980 a apporté une liberté sans précédent, permettant aux gens de communiquer de n'importe où." },
      { id: "E", text: "In 2007, the launch of the iPhone marked the beginning of the smartphone era, transforming phones into powerful computers.", translation: "En 2007, le lancement de l'iPhone a marqué le début de l'ère des smartphones, transformant les téléphones en ordinateurs puissants." }
    ],
    correctOrder: ["B", "C", "D", "E", "A"],
    hints: ["Follow the chronological development from 1876 to today"],
    fullTextTranslation: "L'invention du téléphone en 1876 par Alexander Graham Bell a révolutionné la communication humaine. Pendant des décennies, les téléphones sont restés des appareils fixes connectés par des fils, limitant leur utilisation aux maisons et bureaux. L'introduction des téléphones mobiles dans les années 1980 a apporté une liberté sans précédent, permettant aux gens de communiquer de n'importe où. En 2007, le lancement de l'iPhone a marqué le début de l'ère des smartphones, transformant les téléphones en ordinateurs puissants. Aujourd'hui, les smartphones sont devenus des outils essentiels qui combinent communication, divertissement et productivité en un seul appareil."
  }
];

export const getParagraphOrderingExerciseById = (id: number): ParagraphOrderingExercise | undefined => {
  return paragraphOrderingExercises.find(ex => ex.id === id);
};
