export interface DialogueLine {
  speaker: string;
  text: string;
  isBlank?: boolean;
  options?: string[];
  correctAnswer?: string;
  translationFr?: string;
}

export interface DialogueExercise {
  id: number;
  title: string;
  description: string;
  context: string;
  contextFr: string;
  difficulty: 'easy' | 'medium' | 'hard';
  dialogue: DialogueLine[];
}

export const dialogueExercises: DialogueExercise[] = [
  {
    id: 1,
    title: "At the Coffee Shop",
    description: "Complete a conversation ordering coffee",
    context: "A customer is ordering at a coffee shop.",
    contextFr: "Un client commande dans un café.",
    difficulty: 'easy',
    dialogue: [
      { speaker: "Barista", text: "Good morning! What can I get for you today?", translationFr: "Bonjour ! Que puis-je vous servir aujourd'hui ?" },
      { speaker: "Customer", text: "", isBlank: true, options: ["I'd like a coffee, please.", "I'm looking for a book.", "What time is it?", "I don't speak English."], correctAnswer: "I'd like a coffee, please.", translationFr: "Je voudrais un café, s'il vous plaît." },
      { speaker: "Barista", text: "Sure! Would you like that hot or iced?", translationFr: "Bien sûr ! Vous le voulez chaud ou glacé ?" },
      { speaker: "Customer", text: "", isBlank: true, options: ["Hot, please.", "I'll take the large one.", "How much is it?", "No sugar for me."], correctAnswer: "Hot, please.", translationFr: "Chaud, s'il vous plaît." },
      { speaker: "Barista", text: "Small, medium, or large?", translationFr: "Petit, moyen ou grand ?" },
      { speaker: "Customer", text: "", isBlank: true, options: ["Medium sounds good.", "It's very cold today.", "I prefer tea usually.", "Can I sit here?"], correctAnswer: "Medium sounds good.", translationFr: "Moyen, ça me va." },
      { speaker: "Barista", text: "That'll be €3.50. Would you like anything else?", translationFr: "Ça fera 3,50 €. Voulez-vous autre chose ?" },
      { speaker: "Customer", text: "", isBlank: true, options: ["No, that's all, thank you.", "I forgot my wallet.", "The coffee is cold.", "I'll come back tomorrow."], correctAnswer: "No, that's all, thank you.", translationFr: "Non, ce sera tout, merci." },
    ]
  },
  {
    id: 2,
    title: "Making a Hotel Reservation",
    description: "Complete a phone conversation booking a hotel room",
    context: "A guest is calling to book a hotel room.",
    contextFr: "Un client appelle pour réserver une chambre d'hôtel.",
    difficulty: 'easy',
    dialogue: [
      { speaker: "Receptionist", text: "Good afternoon, Grand Hotel. How may I help you?", translationFr: "Bonjour, Grand Hôtel. Comment puis-je vous aider ?" },
      { speaker: "Guest", text: "", isBlank: true, options: ["I'd like to book a room, please.", "What's the weather like?", "I need to cancel my flight.", "Where is the restaurant?"], correctAnswer: "I'd like to book a room, please.", translationFr: "Je voudrais réserver une chambre, s'il vous plaît." },
      { speaker: "Receptionist", text: "Certainly! For which dates?", translationFr: "Certainement ! Pour quelles dates ?" },
      { speaker: "Guest", text: "", isBlank: true, options: ["From March 15th to March 18th.", "I prefer a window seat.", "The room was dirty.", "I lost my key."], correctAnswer: "From March 15th to March 18th.", translationFr: "Du 15 au 18 mars." },
      { speaker: "Receptionist", text: "Would you prefer a single or double room?", translationFr: "Préférez-vous une chambre simple ou double ?" },
      { speaker: "Guest", text: "", isBlank: true, options: ["A double room, please.", "I need extra towels.", "Breakfast is included.", "Check-out is at 11."], correctAnswer: "A double room, please.", translationFr: "Une chambre double, s'il vous plaît." },
      { speaker: "Receptionist", text: "Perfect. That's €120 per night. May I have your name?", translationFr: "Parfait. C'est 120 € par nuit. Puis-je avoir votre nom ?" },
      { speaker: "Guest", text: "", isBlank: true, options: ["Yes, it's Sarah Johnson.", "I'll pay by card.", "Is breakfast included?", "Where is the elevator?"], correctAnswer: "Yes, it's Sarah Johnson.", translationFr: "Oui, c'est Sarah Johnson." },
    ]
  },
  {
    id: 3,
    title: "Job Interview - Introduction",
    description: "Complete a job interview conversation",
    context: "A candidate is having a job interview.",
    contextFr: "Un candidat passe un entretien d'embauche.",
    difficulty: 'medium',
    dialogue: [
      { speaker: "Interviewer", text: "Please have a seat. Thank you for coming in today.", translationFr: "Veuillez vous asseoir. Merci d'être venu aujourd'hui." },
      { speaker: "Candidate", text: "", isBlank: true, options: ["Thank you for having me. I'm very excited about this opportunity.", "I'm sorry I'm late.", "How long will this take?", "I have another interview later."], correctAnswer: "Thank you for having me. I'm very excited about this opportunity.", translationFr: "Merci de me recevoir. Je suis très enthousiaste à propos de cette opportunité." },
      { speaker: "Interviewer", text: "Can you tell me a bit about your previous experience?", translationFr: "Pouvez-vous me parler un peu de votre expérience précédente ?" },
      { speaker: "Candidate", text: "", isBlank: true, options: ["I worked for three years as a project manager, where I led a team of five people.", "I don't have any experience.", "My previous job was boring.", "I quit because I didn't like my boss."], correctAnswer: "I worked for three years as a project manager, where I led a team of five people.", translationFr: "J'ai travaillé pendant trois ans en tant que chef de projet, où j'ai dirigé une équipe de cinq personnes." },
      { speaker: "Interviewer", text: "What would you say is your greatest strength?", translationFr: "Quelle serait votre plus grande force ?" },
      { speaker: "Candidate", text: "", isBlank: true, options: ["I'm very organized and can manage multiple projects effectively.", "I don't know, really.", "I never make mistakes.", "I work faster than everyone."], correctAnswer: "I'm very organized and can manage multiple projects effectively.", translationFr: "Je suis très organisé et je peux gérer plusieurs projets efficacement." },
      { speaker: "Interviewer", text: "Where do you see yourself in five years?", translationFr: "Où vous voyez-vous dans cinq ans ?" },
      { speaker: "Candidate", text: "", isBlank: true, options: ["I hope to grow within the company and take on more leadership responsibilities.", "I'll probably be doing something else.", "In your position, hopefully.", "I haven't thought about it."], correctAnswer: "I hope to grow within the company and take on more leadership responsibilities.", translationFr: "J'espère évoluer au sein de l'entreprise et assumer plus de responsabilités de leadership." },
    ]
  },
  {
    id: 4,
    title: "At the Doctor's Office",
    description: "Complete a conversation with a doctor",
    context: "A patient is describing symptoms to a doctor.",
    contextFr: "Un patient décrit ses symptômes à un médecin.",
    difficulty: 'medium',
    dialogue: [
      { speaker: "Doctor", text: "Hello, what brings you in today?", translationFr: "Bonjour, qu'est-ce qui vous amène aujourd'hui ?" },
      { speaker: "Patient", text: "", isBlank: true, options: ["I've been having headaches and feeling tired for the past week.", "I'm here for my dog.", "The waiting room is crowded.", "I don't have insurance."], correctAnswer: "I've been having headaches and feeling tired for the past week.", translationFr: "J'ai des maux de tête et je me sens fatigué depuis une semaine." },
      { speaker: "Doctor", text: "I see. Have you had any other symptoms, like fever or nausea?", translationFr: "Je vois. Avez-vous eu d'autres symptômes, comme de la fièvre ou des nausées ?" },
      { speaker: "Patient", text: "", isBlank: true, options: ["Yes, I've had a slight fever, but no nausea.", "I took some aspirin yesterday.", "I don't like hospitals.", "When will I feel better?"], correctAnswer: "Yes, I've had a slight fever, but no nausea.", translationFr: "Oui, j'ai eu un peu de fièvre, mais pas de nausées." },
      { speaker: "Doctor", text: "Are you taking any medications currently?", translationFr: "Prenez-vous actuellement des médicaments ?" },
      { speaker: "Patient", text: "", isBlank: true, options: ["Just some vitamins and occasionally ibuprofen.", "I hate taking pills.", "My pharmacy is nearby.", "I finished my prescription."], correctAnswer: "Just some vitamins and occasionally ibuprofen.", translationFr: "Juste des vitamines et occasionnellement de l'ibuprofène." },
      { speaker: "Doctor", text: "I'd recommend some rest and plenty of fluids. I'll prescribe something for the headaches.", translationFr: "Je vous recommande du repos et beaucoup de liquides. Je vais vous prescrire quelque chose pour les maux de tête." },
      { speaker: "Patient", text: "", isBlank: true, options: ["Thank you, Doctor. Should I come back if it doesn't improve?", "I prefer natural remedies.", "Okay, goodbye.", "How much does this cost?"], correctAnswer: "Thank you, Doctor. Should I come back if it doesn't improve?", translationFr: "Merci, Docteur. Dois-je revenir si ça ne s'améliore pas ?" },
    ]
  },
  {
    id: 5,
    title: "Business Meeting - Project Discussion",
    description: "Complete a professional meeting dialogue",
    context: "Colleagues are discussing a project in a meeting.",
    contextFr: "Des collègues discutent d'un projet lors d'une réunion.",
    difficulty: 'hard',
    dialogue: [
      { speaker: "Manager", text: "Let's discuss the timeline for the new product launch. Sarah, can you give us an update?", translationFr: "Discutons du calendrier du lancement du nouveau produit. Sarah, peux-tu nous donner une mise à jour ?" },
      { speaker: "Sarah", text: "", isBlank: true, options: ["Certainly. We're on track to complete the development phase by the end of this month.", "I think we should postpone everything.", "I wasn't involved in this project.", "The budget is insufficient."], correctAnswer: "Certainly. We're on track to complete the development phase by the end of this month.", translationFr: "Certainement. Nous sommes en bonne voie pour terminer la phase de développement d'ici la fin du mois." },
      { speaker: "Manager", text: "Excellent. And what about the marketing strategy?", translationFr: "Excellent. Et qu'en est-il de la stratégie marketing ?" },
      { speaker: "Tom", text: "", isBlank: true, options: ["We've prepared a comprehensive campaign focusing on social media and email marketing.", "Marketing isn't my department.", "I haven't had time to work on it.", "We don't need marketing."], correctAnswer: "We've prepared a comprehensive campaign focusing on social media and email marketing.", translationFr: "Nous avons préparé une campagne complète axée sur les réseaux sociaux et le marketing par email." },
      { speaker: "Manager", text: "I'm concerned about the budget constraints. How are we managing costs?", translationFr: "Je suis préoccupé par les contraintes budgétaires. Comment gérons-nous les coûts ?" },
      { speaker: "Sarah", text: "", isBlank: true, options: ["We've identified areas where we can reduce expenses without compromising quality.", "We need more money.", "That's not my responsibility.", "I'll look into it later."], correctAnswer: "We've identified areas where we can reduce expenses without compromising quality.", translationFr: "Nous avons identifié des domaines où nous pouvons réduire les dépenses sans compromettre la qualité." },
      { speaker: "Manager", text: "Good thinking. Any potential risks we should be aware of?", translationFr: "Bien pensé. Y a-t-il des risques potentiels dont nous devrions être conscients ?" },
      { speaker: "Tom", text: "", isBlank: true, options: ["The main risk is supply chain delays, but we've established backup suppliers.", "Everything is perfect, no risks.", "I'm not sure, actually.", "Risks are inevitable."], correctAnswer: "The main risk is supply chain delays, but we've established backup suppliers.", translationFr: "Le principal risque est les retards de la chaîne d'approvisionnement, mais nous avons établi des fournisseurs de secours." },
    ]
  },
  {
    id: 6,
    title: "Negotiating a Contract",
    description: "Complete a business negotiation dialogue",
    context: "Two business partners are negotiating terms.",
    contextFr: "Deux partenaires commerciaux négocient les termes.",
    difficulty: 'hard',
    dialogue: [
      { speaker: "Mr. Chen", text: "Thank you for meeting with us today. We're interested in your proposal, but we have some concerns about the pricing.", translationFr: "Merci de nous rencontrer aujourd'hui. Nous sommes intéressés par votre proposition, mais nous avons quelques préoccupations concernant le prix." },
      { speaker: "Ms. Williams", text: "", isBlank: true, options: ["I understand your concerns. We're open to discussing flexible pricing options that work for both parties.", "Our price is final and non-negotiable.", "You can take it or leave it.", "I'll have to check with my boss."], correctAnswer: "I understand your concerns. We're open to discussing flexible pricing options that work for both parties.", translationFr: "Je comprends vos préoccupations. Nous sommes ouverts à discuter d'options de prix flexibles qui conviennent aux deux parties." },
      { speaker: "Mr. Chen", text: "We were hoping for a 15% discount on the bulk order.", translationFr: "Nous espérions une réduction de 15% sur la commande en gros." },
      { speaker: "Ms. Williams", text: "", isBlank: true, options: ["A 15% discount is significant. However, if you commit to a longer contract, we could offer 10% with additional benefits.", "That's impossible.", "Let me think about it.", "We never give discounts."], correctAnswer: "A 15% discount is significant. However, if you commit to a longer contract, we could offer 10% with additional benefits.", translationFr: "Une réduction de 15% est importante. Cependant, si vous vous engagez sur un contrat plus long, nous pourrions offrir 10% avec des avantages supplémentaires." },
      { speaker: "Mr. Chen", text: "What kind of additional benefits are you proposing?", translationFr: "Quel type d'avantages supplémentaires proposez-vous ?" },
      { speaker: "Ms. Williams", text: "", isBlank: true, options: ["We can include priority shipping and extended warranty at no extra cost.", "Nothing special, just the discount.", "I haven't thought about that.", "Whatever you want."], correctAnswer: "We can include priority shipping and extended warranty at no extra cost.", translationFr: "Nous pouvons inclure la livraison prioritaire et une garantie étendue sans frais supplémentaires." },
      { speaker: "Mr. Chen", text: "That sounds reasonable. Can we also discuss the payment terms?", translationFr: "Cela semble raisonnable. Pouvons-nous également discuter des conditions de paiement ?" },
      { speaker: "Ms. Williams", text: "", isBlank: true, options: ["Absolutely. We can offer net-60 terms with the option to pay in installments.", "Payment is due immediately.", "I can't change the terms.", "We only accept cash."], correctAnswer: "Absolutely. We can offer net-60 terms with the option to pay in installments.", translationFr: "Absolument. Nous pouvons offrir des conditions à 60 jours avec la possibilité de payer en plusieurs fois." },
    ]
  }
];

export const getDialogueExerciseById = (id: number): DialogueExercise | undefined => {
  return dialogueExercises.find(ex => ex.id === id);
};
