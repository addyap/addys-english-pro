export interface ReadingPassage {
  id: number;
  title: string;
  titleFr: string;
  difficulty: 'easy' | 'medium' | 'hard';
  readingTime: number; // in minutes
  content: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export const readingPassages: ReadingPassage[] = [
  {
    id: 1,
    title: "A Day at the Beach",
    titleFr: "Une journée à la plage",
    difficulty: 'easy',
    readingTime: 2,
    content: `Last summer, my family and I went to the beach. We left early in the morning because we wanted to find a good spot. The weather was perfect - sunny but not too hot.

My sister and I built a sandcastle near the water. It took us two hours to finish it. Our parents sat under an umbrella and read their books. 

At lunchtime, we ate sandwiches and drank lemonade. In the afternoon, we went swimming. The water was cold at first, but we got used to it quickly.

Before we left, we watched the sunset. The sky turned orange and pink. It was a beautiful end to a wonderful day. We promised to come back next year.`,
    questions: [
      {
        question: "When did the family go to the beach?",
        options: ["Last winter", "Last summer", "Last spring", "Yesterday"],
        correctAnswer: 1,
        explanation: "The text says 'Last summer, my family and I went to the beach.'"
      },
      {
        question: "Why did they leave early?",
        options: ["To avoid traffic", "To find a good spot", "To see the sunrise", "Because they were excited"],
        correctAnswer: 1,
        explanation: "The text states 'We left early in the morning because we wanted to find a good spot.'"
      },
      {
        question: "How long did it take to build the sandcastle?",
        options: ["One hour", "Two hours", "Three hours", "All day"],
        correctAnswer: 1,
        explanation: "The text says 'It took us two hours to finish it.'"
      },
      {
        question: "What did the parents do at the beach?",
        options: ["Built sandcastles", "Went swimming", "Read books", "Played volleyball"],
        correctAnswer: 2,
        explanation: "The text mentions 'Our parents sat under an umbrella and read their books.'"
      },
      {
        question: "What colors was the sky at sunset?",
        options: ["Red and blue", "Orange and pink", "Yellow and purple", "Blue and white"],
        correctAnswer: 1,
        explanation: "The text says 'The sky turned orange and pink.'"
      }
    ]
  },
  {
    id: 2,
    title: "The New Employee",
    titleFr: "Le nouvel employé",
    difficulty: 'medium',
    readingTime: 3,
    content: `Sarah had been working at the marketing company for five years when she was asked to train the new employee, James. She wasn't sure how she felt about this responsibility at first.

James arrived on Monday morning looking nervous. Sarah remembered feeling the same way on her first day. She decided to make him feel welcome by showing him around the office and introducing him to the team.

During the first week, Sarah noticed that James was a quick learner. He asked thoughtful questions and took detailed notes. However, he sometimes struggled with the company's software system, which was quite complex.

By the end of the month, James had become confident in his role. He even suggested improvements to some of their marketing strategies. Sarah realized that training him had actually helped her see things from a fresh perspective.

The experience taught Sarah that being a mentor could be just as rewarding as being a student. She was grateful for the opportunity and looked forward to helping other new employees in the future.`,
    questions: [
      {
        question: "How long had Sarah been working at the company?",
        options: ["Three years", "Four years", "Five years", "Six years"],
        correctAnswer: 2,
        explanation: "The text states 'Sarah had been working at the marketing company for five years.'"
      },
      {
        question: "How did James feel on his first day?",
        options: ["Confident", "Excited", "Nervous", "Bored"],
        correctAnswer: 2,
        explanation: "The text says 'James arrived on Monday morning looking nervous.'"
      },
      {
        question: "What did James struggle with?",
        options: ["Taking notes", "Asking questions", "The software system", "Meeting colleagues"],
        correctAnswer: 2,
        explanation: "The text mentions 'he sometimes struggled with the company's software system.'"
      },
      {
        question: "What did James do by the end of the month?",
        options: ["Quit his job", "Asked for a raise", "Suggested improvements", "Changed departments"],
        correctAnswer: 2,
        explanation: "The text says 'He even suggested improvements to some of their marketing strategies.'"
      },
      {
        question: "What did Sarah learn from the experience?",
        options: ["That training is difficult", "That being a mentor is rewarding", "That James was not a good fit", "That she needed a new job"],
        correctAnswer: 1,
        explanation: "The text concludes that 'being a mentor could be just as rewarding as being a student.'"
      }
    ]
  },
  {
    id: 3,
    title: "The Environmental Challenge",
    titleFr: "Le défi environnemental",
    difficulty: 'hard',
    readingTime: 4,
    content: `The relationship between economic development and environmental sustainability has long been a subject of intense debate among policymakers, economists, and environmentalists. While traditional economic models often prioritized growth at any cost, contemporary approaches increasingly recognize the necessity of balancing prosperity with ecological preservation.

One of the most significant shifts in recent decades has been the emergence of the circular economy concept. Unlike the linear "take-make-dispose" model that dominated industrial production throughout the twentieth century, circular economy principles emphasize the continuous use of resources through recycling, refurbishment, and regeneration. Companies that have adopted these principles report not only environmental benefits but also substantial cost savings.

However, implementing sustainable practices on a global scale presents considerable challenges. Developing nations argue, not without justification, that wealthy countries achieved their current prosperity precisely by exploiting natural resources without restriction. Asking these nations to limit their development seems, to many, fundamentally unfair.

Nevertheless, the consequences of inaction are becoming increasingly apparent. Climate scientists warn that without significant reductions in carbon emissions, global temperatures could rise by more than two degrees Celsius by the end of the century, leading to catastrophic changes in weather patterns, sea levels, and biodiversity.

The solution may lie in innovative technologies and international cooperation. Renewable energy sources have become dramatically more affordable, and green hydrogen shows promise as a clean fuel alternative. Perhaps most importantly, younger generations worldwide are demanding environmental action, suggesting that the political will for change may finally be materializing.`,
    questions: [
      {
        question: "What has been the traditional approach to economic development?",
        options: ["Balancing growth with ecology", "Prioritizing growth at any cost", "Focusing on sustainability", "Limiting industrial production"],
        correctAnswer: 1,
        explanation: "The text states that 'traditional economic models often prioritized growth at any cost.'"
      },
      {
        question: "What is the circular economy concept based on?",
        options: ["Increased production", "Continuous use of resources", "Linear manufacturing", "Disposing of waste efficiently"],
        correctAnswer: 1,
        explanation: "The text explains that 'circular economy principles emphasize the continuous use of resources through recycling, refurbishment, and regeneration.'"
      },
      {
        question: "Why do developing nations resist environmental restrictions?",
        options: ["They don't believe in climate change", "Rich countries developed without restrictions", "They lack technology", "Environmental laws are too complex"],
        correctAnswer: 1,
        explanation: "The text mentions that 'wealthy countries achieved their current prosperity precisely by exploiting natural resources without restriction.'"
      },
      {
        question: "What could happen if carbon emissions are not reduced?",
        options: ["Economic growth will slow", "Temperatures could rise over 2°C", "Renewable energy will fail", "International cooperation will end"],
        correctAnswer: 1,
        explanation: "The text warns that 'global temperatures could rise by more than two degrees Celsius by the end of the century.'"
      },
      {
        question: "According to the text, what gives hope for environmental action?",
        options: ["Government regulations", "Corporate profits", "Younger generations demanding change", "Unlimited natural resources"],
        correctAnswer: 2,
        explanation: "The text concludes that 'younger generations worldwide are demanding environmental action.'"
      }
    ]
  },
  {
    id: 4,
    title: "My Morning Routine",
    titleFr: "Ma routine matinale",
    difficulty: 'easy',
    readingTime: 2,
    content: `Every morning, I wake up at 7 o'clock. The first thing I do is turn off my alarm clock. Then I get out of bed and open the curtains. I like to see the sunlight.

After that, I go to the bathroom. I brush my teeth for two minutes and wash my face with cold water. Cold water helps me feel awake.

Next, I go to the kitchen to make breakfast. I usually have toast with butter and jam. I also drink a cup of coffee with milk. Sometimes, when I have more time, I make scrambled eggs.

While I eat breakfast, I check my phone for messages. I also look at the weather forecast to decide what to wear.

Finally, I get dressed, pack my bag, and leave the house at 8:30. The bus stop is only five minutes away. I try to arrive at work before 9 o'clock.`,
    questions: [
      {
        question: "What time does the writer wake up?",
        options: ["6 o'clock", "7 o'clock", "8 o'clock", "9 o'clock"],
        correctAnswer: 1,
        explanation: "The text says 'Every morning, I wake up at 7 o'clock.'"
      },
      {
        question: "How long does the writer brush their teeth?",
        options: ["One minute", "Two minutes", "Three minutes", "Five minutes"],
        correctAnswer: 1,
        explanation: "The text states 'I brush my teeth for two minutes.'"
      },
      {
        question: "What does the writer usually have for breakfast?",
        options: ["Cereal", "Toast with butter and jam", "Pancakes", "Fruit"],
        correctAnswer: 1,
        explanation: "The text mentions 'I usually have toast with butter and jam.'"
      },
      {
        question: "Why does the writer check the weather?",
        options: ["To plan activities", "To decide what to wear", "To see if it will rain", "To plan the weekend"],
        correctAnswer: 1,
        explanation: "The text says 'I also look at the weather forecast to decide what to wear.'"
      },
      {
        question: "How far is the bus stop from the writer's house?",
        options: ["Two minutes away", "Five minutes away", "Ten minutes away", "Fifteen minutes away"],
        correctAnswer: 1,
        explanation: "The text states 'The bus stop is only five minutes away.'"
      }
    ]
  },
  {
    id: 5,
    title: "The Art of Negotiation",
    titleFr: "L'art de la négociation",
    difficulty: 'medium',
    readingTime: 3,
    content: `Negotiation is a skill that everyone uses, whether they realize it or not. From deciding where to have dinner with friends to closing major business deals, the ability to negotiate effectively can significantly impact both personal and professional success.

The most common mistake in negotiation is viewing it as a competition where one side must win and the other must lose. Research has shown that the most successful negotiations result in outcomes where both parties feel satisfied. This is known as a "win-win" approach.

Preparation is crucial before entering any negotiation. Understanding your own goals, knowing your limits, and researching the other party's interests can give you a significant advantage. Equally important is being willing to listen actively and ask questions rather than simply stating demands.

Emotions can be both helpful and harmful in negotiations. While passion and enthusiasm can be persuasive, anger and frustration often lead to poor decisions. Skilled negotiators learn to manage their emotions and read the emotional states of others.

Finally, patience is perhaps the most underrated negotiation skill. Rushing to reach an agreement often results in accepting terms that could have been improved with more discussion. Taking time to consider options and alternatives usually leads to better outcomes for everyone involved.`,
    questions: [
      {
        question: "According to the text, who uses negotiation skills?",
        options: ["Only business people", "Only diplomats", "Everyone", "Only salespeople"],
        correctAnswer: 2,
        explanation: "The text states 'Negotiation is a skill that everyone uses.'"
      },
      {
        question: "What is the most common mistake in negotiation?",
        options: ["Being too patient", "Viewing it as a competition", "Preparing too much", "Asking too many questions"],
        correctAnswer: 1,
        explanation: "The text says 'The most common mistake in negotiation is viewing it as a competition.'"
      },
      {
        question: "What does 'win-win' mean in negotiation?",
        options: ["One side wins twice", "Both parties feel satisfied", "The negotiation happens quickly", "No compromise is needed"],
        correctAnswer: 1,
        explanation: "The text explains that 'the most successful negotiations result in outcomes where both parties feel satisfied. This is known as a \"win-win\" approach.'"
      },
      {
        question: "What emotions can harm negotiations?",
        options: ["Enthusiasm", "Patience", "Anger and frustration", "Curiosity"],
        correctAnswer: 2,
        explanation: "The text states that 'anger and frustration often lead to poor decisions.'"
      },
      {
        question: "What is described as the most underrated negotiation skill?",
        options: ["Active listening", "Research", "Patience", "Enthusiasm"],
        correctAnswer: 2,
        explanation: "The text says 'patience is perhaps the most underrated negotiation skill.'"
      }
    ]
  },
  {
    id: 6,
    title: "Artificial Intelligence in Healthcare",
    titleFr: "L'intelligence artificielle dans la santé",
    difficulty: 'hard',
    readingTime: 5,
    content: `The integration of artificial intelligence into healthcare systems represents one of the most promising yet controversial developments in modern medicine. Proponents argue that AI has the potential to revolutionize diagnosis, treatment planning, and drug discovery, while critics raise concerns about data privacy, algorithmic bias, and the fundamental nature of the doctor-patient relationship.

In diagnostic applications, AI systems have demonstrated remarkable capabilities. Machine learning algorithms can now analyze medical images—including X-rays, MRIs, and pathology slides—with accuracy that rivals or exceeds that of trained specialists in certain specific tasks. For instance, AI models have shown success in detecting early-stage cancers that might be missed by human observers.

However, these technological achievements must be contextualized within broader healthcare realities. AI systems are trained on historical data, which often reflects existing disparities in healthcare access and outcomes. If an algorithm learns from data that underrepresents certain demographic groups, it may perform less accurately for those populations, potentially exacerbating health inequities rather than reducing them.

The question of accountability adds another layer of complexity. When an AI system contributes to a diagnostic error, determining responsibility becomes challenging. Is the fault with the algorithm's designers, the healthcare institution that deployed it, or the physician who relied upon its recommendations? Legal and ethical frameworks are still evolving to address these questions.

Perhaps most fundamentally, the role of AI forces us to reconsider what we value in healthcare beyond mere accuracy. The therapeutic relationship between healthcare providers and patients encompasses trust, empathy, and shared decision-making—qualities that, at least currently, remain distinctly human. Finding the appropriate balance between technological efficiency and humanistic care will likely define healthcare's trajectory in the coming decades.`,
    questions: [
      {
        question: "What concerns do critics raise about AI in healthcare?",
        options: ["Cost of implementation", "Data privacy and algorithmic bias", "Slow processing speed", "Lack of accuracy"],
        correctAnswer: 1,
        explanation: "The text mentions that 'critics raise concerns about data privacy, algorithmic bias, and the fundamental nature of the doctor-patient relationship.'"
      },
      {
        question: "What can AI systems now analyze with high accuracy?",
        options: ["Patient emotions", "Medical images", "Insurance claims", "Hospital schedules"],
        correctAnswer: 1,
        explanation: "The text states that 'Machine learning algorithms can now analyze medical images—including X-rays, MRIs, and pathology slides.'"
      },
      {
        question: "Why might AI systems perform less accurately for certain populations?",
        options: ["Technical limitations", "Training data underrepresents them", "They refuse AI care", "Different diseases affect them"],
        correctAnswer: 1,
        explanation: "The text explains that 'If an algorithm learns from data that underrepresents certain demographic groups, it may perform less accurately for those populations.'"
      },
      {
        question: "What challenge does AI create regarding diagnostic errors?",
        options: ["Errors are more frequent", "Determining accountability is difficult", "Errors cannot be corrected", "Insurance doesn't cover them"],
        correctAnswer: 1,
        explanation: "The text notes that 'When an AI system contributes to a diagnostic error, determining responsibility becomes challenging.'"
      },
      {
        question: "What human qualities in healthcare does the text emphasize?",
        options: ["Speed and efficiency", "Trust, empathy, and shared decision-making", "Technical knowledge", "Research capabilities"],
        correctAnswer: 1,
        explanation: "The text states that 'The therapeutic relationship between healthcare providers and patients encompasses trust, empathy, and shared decision-making.'"
      }
    ]
  }
];
