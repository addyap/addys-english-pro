import { InteractiveStory } from './interactiveStories';

export const interactiveStoriesPart2: InteractiveStory[] = [
  {
    id: 2,
    title: "The Lost Dog",
    titleFr: "Le chien perdu",
    description: "You find a lost dog in the park. Help reunite it with its owner!",
    descriptionFr: "Vous trouvez un chien perdu dans le parc. Aidez-le à retrouver son propriétaire !",
    difficulty: 'easy',
    theme: "Daily Life",
    themeFr: "Vie quotidienne",
    estimatedTime: 8,
    totalEndings: 4,
    startNodeId: "start",
    nodes: {
      "start": {
        id: "start",
        text: "You are walking in the park on a beautiful Saturday morning. Suddenly, you see a small brown dog running alone. It looks lost and scared. The dog has a collar but no owner in sight.",
        textFr: "Vous vous promenez dans le parc par un beau samedi matin. Soudain, vous voyez un petit chien marron courir seul. Il a l'air perdu et effrayé. Le chien a un collier mais aucun propriétaire en vue.",
        choices: [
          { text: "Approach the dog slowly", textFr: "S'approcher doucement du chien", nextId: "approach" },
          { text: "Ask people nearby if they know the dog", textFr: "Demander aux gens autour s'ils connaissent le chien", nextId: "ask_people" }
        ]
      },
      "approach": {
        id: "approach",
        text: "You kneel down and speak softly. \"Hello little one, are you lost?\" The dog stops running and looks at you. Its tail starts to wag slowly. You can now read the collar tag.",
        textFr: "Vous vous agenouillez et parlez doucement. « Bonjour petit, tu es perdu ? » Le chien arrête de courir et vous regarde. Sa queue commence à remuer lentement. Vous pouvez maintenant lire l'étiquette du collier.",
        choices: [
          { text: "Read the tag and call the phone number", textFr: "Lire l'étiquette et appeler le numéro de téléphone", nextId: "call_owner" },
          { text: "Take the dog to the nearby café to wait", textFr: "Emmener le chien au café à proximité pour attendre", nextId: "cafe" }
        ]
      },
      "ask_people": {
        id: "ask_people",
        text: "You ask a woman sitting on a bench. \"Excuse me, do you know this dog?\" She shakes her head but points to an elderly man walking towards you. \"He looks worried. Maybe it's his dog?\"",
        textFr: "Vous demandez à une femme assise sur un banc. « Excusez-moi, connaissez-vous ce chien ? » Elle fait non de la tête mais montre un homme âgé qui marche vers vous. « Il a l'air inquiet. C'est peut-être son chien ? »",
        choices: [
          { text: "Wait for the elderly man to arrive", textFr: "Attendre que l'homme âgé arrive", nextId: "elderly_man" },
          { text: "Try to catch the dog first", textFr: "Essayer d'attraper le chien d'abord", nextId: "approach" }
        ]
      },
      "call_owner": {
        id: "call_owner",
        text: "The tag says \"Max\" and has a phone number. You call and a worried voice answers. \"Max! You found him? Thank you so much! I'm in the park, near the fountain. Please don't let him go!\"",
        textFr: "L'étiquette dit « Max » et a un numéro de téléphone. Vous appelez et une voix inquiète répond. « Max ! Vous l'avez trouvé ? Merci infiniment ! Je suis dans le parc, près de la fontaine. S'il vous plaît, ne le laissez pas partir ! »",
        choices: [
          { text: "Walk to the fountain with Max", textFr: "Marcher jusqu'à la fontaine avec Max", nextId: "reunion" },
          { text: "Wait where you are for the owner", textFr: "Attendre où vous êtes que le propriétaire arrive", nextId: "wait_owner" }
        ]
      },
      "cafe": {
        id: "cafe",
        text: "The café owner is very kind. \"Poor thing! Let me give him some water.\" She puts up a photo of the dog on social media. Within 30 minutes, a young girl comes running in. \"Buddy! There you are!\"",
        textFr: "Le propriétaire du café est très gentil. « Pauvre petit ! Laissez-moi lui donner de l'eau. » Elle met une photo du chien sur les réseaux sociaux. En 30 minutes, une jeune fille arrive en courant. « Buddy ! Te voilà ! »",
        isEnding: true,
        endingType: 'good'
      },
      "elderly_man": {
        id: "elderly_man",
        text: "The elderly man's face lights up when he sees the dog. \"Biscuit! My dear Biscuit!\" The dog runs to him happily. \"Thank you for watching him. He escaped when I opened the gate. Can I buy you a coffee to say thank you?\"",
        textFr: "Le visage de l'homme âgé s'illumine quand il voit le chien. « Biscuit ! Mon cher Biscuit ! » Le chien court vers lui joyeusement. « Merci de l'avoir surveillé. Il s'est échappé quand j'ai ouvert le portail. Puis-je vous offrir un café pour vous remercier ? »",
        choices: [
          { text: "Accept and chat with him", textFr: "Accepter et discuter avec lui", nextId: "coffee_chat" },
          { text: "Politely decline and continue your walk", textFr: "Refuser poliment et continuer votre promenade", nextId: "decline_polite" }
        ]
      },
      "reunion": {
        id: "reunion",
        text: "At the fountain, a young woman with tears in her eyes hugs Max. \"I was so scared! He ran after a squirrel and I couldn't catch him. Thank you so much!\" She insists on giving you her bakery's address for free pastries.",
        textFr: "À la fontaine, une jeune femme les larmes aux yeux serre Max dans ses bras. « J'avais tellement peur ! Il a couru après un écureuil et je n'ai pas pu l'attraper. Merci infiniment ! » Elle insiste pour vous donner l'adresse de sa boulangerie pour des pâtisseries gratuites.",
        isEnding: true,
        endingType: 'good'
      },
      "wait_owner": {
        id: "wait_owner",
        text: "While you wait, Max falls asleep in your arms. When his owner arrives, she takes a photo of you both. \"This is so sweet! I want to remember the kind stranger who saved Max.\" You exchange numbers and become friends.",
        textFr: "Pendant que vous attendez, Max s'endort dans vos bras. Quand sa propriétaire arrive, elle prend une photo de vous deux. « C'est tellement mignon ! Je veux me souvenir de l'étranger gentil qui a sauvé Max. » Vous échangez vos numéros et devenez amis.",
        isEnding: true,
        endingType: 'good'
      },
      "coffee_chat": {
        id: "coffee_chat",
        text: "Over coffee, you learn that Mr. Thompson is a retired teacher. He tells you fascinating stories about his travels. \"You remind me of my grandson. He's also kind to animals.\" You've made a wonderful new friend in your neighbourhood.",
        textFr: "Autour d'un café, vous apprenez que M. Thompson est un professeur à la retraite. Il vous raconte des histoires fascinantes sur ses voyages. « Vous me rappelez mon petit-fils. Il est aussi gentil avec les animaux. » Vous vous êtes fait un merveilleux nouvel ami dans votre quartier.",
        isEnding: true,
        endingType: 'good'
      },
      "decline_polite": {
        id: "decline_polite",
        text: "\"That's very kind, but I should continue my walk. I'm happy Biscuit is safe!\" Mr. Thompson smiles warmly. \"Thank you again. Have a lovely day!\" You walk away feeling good about your morning adventure.",
        textFr: "« C'est très gentil, mais je dois continuer ma promenade. Je suis content que Biscuit soit en sécurité ! » M. Thompson sourit chaleureusement. « Merci encore. Passez une belle journée ! » Vous partez en vous sentant bien après votre aventure du matin.",
        isEnding: true,
        endingType: 'neutral'
      }
    }
  },
  {
    id: 3,
    title: "The Job Interview",
    titleFr: "L'entretien d'embauche",
    description: "Navigate a challenging job interview at an international company. Your choices determine your success!",
    descriptionFr: "Naviguez dans un entretien d'embauche difficile dans une entreprise internationale. Vos choix déterminent votre succès !",
    difficulty: 'medium',
    theme: "Professional",
    themeFr: "Professionnel",
    estimatedTime: 12,
    totalEndings: 5,
    startNodeId: "start",
    nodes: {
      "start": {
        id: "start",
        text: "You arrive at GlobalTech's headquarters for your job interview. The receptionist smiles and says, \"Mr. Davies will see you in ten minutes. Would you like some water or coffee while you wait?\"",
        textFr: "Vous arrivez au siège de GlobalTech pour votre entretien d'embauche. La réceptionniste sourit et dit : « M. Davies vous recevra dans dix minutes. Voulez-vous de l'eau ou du café pendant que vous attendez ? »",
        choices: [
          { text: "\"Yes, water please. Thank you.\"", textFr: "« Oui, de l'eau s'il vous plaît. Merci. »", nextId: "water_wait" },
          { text: "\"No thank you, I'm fine.\"", textFr: "« Non merci, ça va. »", nextId: "no_drink" },
          { text: "\"Actually, may I use the restroom first?\"", textFr: "« En fait, puis-je aller aux toilettes d'abord ? »", nextId: "restroom" }
        ]
      },
      "water_wait": {
        id: "water_wait",
        text: "While drinking water, a young employee sits next to you. \"Here for the marketing position? I started here last year. The trick is to be yourself - Mr. Davies values authenticity over rehearsed answers.\"",
        textFr: "En buvant de l'eau, un jeune employé s'assoit à côté de vous. « Vous êtes là pour le poste en marketing ? J'ai commencé ici l'année dernière. L'astuce est d'être vous-même - M. Davies valorise l'authenticité plus que les réponses préparées. »",
        choices: [
          { text: "Ask them more about the company culture", textFr: "Lui demander plus sur la culture d'entreprise", nextId: "culture_chat" },
          { text: "Thank them and review your notes", textFr: "Le remercier et revoir vos notes", nextId: "review_notes" }
        ]
      },
      "no_drink": {
        id: "no_drink",
        text: "You sit quietly, observing the modern office. Employees seem happy, chatting in different languages. A notice board shows \"Employee of the Month\" and team photos from various company events.",
        textFr: "Vous êtes assis tranquillement, observant le bureau moderne. Les employés ont l'air contents, discutant dans différentes langues. Un panneau d'affichage montre « Employé du mois » et des photos d'équipe de différents événements d'entreprise.",
        choices: [
          { text: "Look at the photos more closely", textFr: "Regarder les photos de plus près", nextId: "photos" },
          { text: "Review your CV one more time", textFr: "Relire votre CV une dernière fois", nextId: "review_notes" }
        ]
      },
      "restroom": {
        id: "restroom",
        text: "In the restroom mirror, you take a deep breath and adjust your appearance. When you return, Mr. Davies is already waiting. \"Ah, there you are! Ready to begin?\"",
        textFr: "Dans le miroir des toilettes, vous prenez une grande respiration et ajustez votre apparence. Quand vous revenez, M. Davies vous attend déjà. « Ah, vous voilà ! Prêt à commencer ? »",
        choices: [
          { text: "\"Absolutely, I'm excited to be here!\"", textFr: "« Absolument, je suis ravi d'être ici ! »", nextId: "interview_start" },
          { text: "\"Yes, thank you for this opportunity.\"", textFr: "« Oui, merci pour cette opportunité. »", nextId: "interview_start" }
        ]
      },
      "culture_chat": {
        id: "culture_chat",
        text: "\"It's collaborative,\" they explain. \"We work in international teams. Oh, and mention you speak other languages if you do - that's a big plus here.\" This inside knowledge could be valuable.",
        textFr: "« C'est collaboratif, » expliquent-ils. « Nous travaillons en équipes internationales. Oh, et mentionnez si vous parlez d'autres langues - c'est un grand plus ici. » Cette information privilégiée pourrait être précieuse.",
        choices: [
          { text: "Remember this advice for the interview", textFr: "Se souvenir de ce conseil pour l'entretien", nextId: "interview_start" }
        ]
      },
      "review_notes": {
        id: "review_notes",
        text: "You quickly review your main talking points: your experience, your achievements, and why you want this job. You feel prepared. Then the receptionist calls your name.",
        textFr: "Vous passez rapidement en revue vos points principaux : votre expérience, vos réalisations, et pourquoi vous voulez ce travail. Vous vous sentez préparé. Puis la réceptionniste appelle votre nom.",
        choices: [
          { text: "Walk confidently to the interview room", textFr: "Marcher avec confiance vers la salle d'entretien", nextId: "interview_start" }
        ]
      },
      "photos": {
        id: "photos",
        text: "You notice photos from a charity event where employees built houses. Also, there's a \"Diversity & Inclusion\" award. These details might be useful to mention in your interview.",
        textFr: "Vous remarquez des photos d'un événement caritatif où les employés ont construit des maisons. Il y a aussi un prix « Diversité & Inclusion ». Ces détails pourraient être utiles à mentionner dans votre entretien.",
        choices: [
          { text: "Keep these observations in mind", textFr: "Garder ces observations en tête", nextId: "interview_start" }
        ]
      },
      "interview_start": {
        id: "interview_start",
        text: "Mr. Davies shakes your hand firmly. \"Tell me, why do you want to work at GlobalTech specifically? What makes us different from our competitors?\"",
        textFr: "M. Davies vous serre fermement la main. « Dites-moi, pourquoi voulez-vous travailler chez GlobalTech spécifiquement ? Qu'est-ce qui nous différencie de nos concurrents ? »",
        choices: [
          { text: "Talk about the company's innovation and global reach", textFr: "Parler de l'innovation et de la portée mondiale de l'entreprise", nextId: "good_answer" },
          { text: "Mention the company values you observed in the lobby", textFr: "Mentionner les valeurs de l'entreprise observées dans le hall", nextId: "great_answer" },
          { text: "Say it's a great career opportunity for you", textFr: "Dire que c'est une excellente opportunité de carrière pour vous", nextId: "weak_answer" }
        ]
      },
      "good_answer": {
        id: "good_answer",
        text: "\"Excellent points,\" Mr. Davies nods. \"Now, tell me about a time when you had to work with a difficult colleague. How did you handle it?\"",
        textFr: "« Excellents points, » M. Davies hoche la tête. « Maintenant, parlez-moi d'une fois où vous avez dû travailler avec un collègue difficile. Comment avez-vous géré cela ? »",
        choices: [
          { text: "Share a real story about conflict resolution", textFr: "Partager une histoire vraie sur la résolution de conflit", nextId: "conflict_story" },
          { text: "Explain you've never had that problem", textFr: "Expliquer que vous n'avez jamais eu ce problème", nextId: "no_conflict" }
        ]
      },
      "great_answer": {
        id: "great_answer",
        text: "Mr. Davies looks impressed. \"You've done your homework. I appreciate candidates who understand our culture, not just our products. Let's discuss the role in more detail.\"",
        textFr: "M. Davies a l'air impressionné. « Vous avez fait vos recherches. J'apprécie les candidats qui comprennent notre culture, pas seulement nos produits. Discutons du poste plus en détail. »",
        choices: [
          { text: "Ask thoughtful questions about the team", textFr: "Poser des questions réfléchies sur l'équipe", nextId: "team_questions" },
          { text: "Ask about growth opportunities", textFr: "Poser des questions sur les opportunités de croissance", nextId: "growth_questions" }
        ]
      },
      "weak_answer": {
        id: "weak_answer",
        text: "Mr. Davies pauses. \"I see. And what specifically about GlobalTech attracted you?\" He seems to want more depth. This is your chance to recover.",
        textFr: "M. Davies fait une pause. « Je vois. Et qu'est-ce qui vous a spécifiquement attiré chez GlobalTech ? » Il semble vouloir plus de profondeur. C'est votre chance de vous rattraper.",
        choices: [
          { text: "Mention specific projects or innovations", textFr: "Mentionner des projets ou innovations spécifiques", nextId: "good_answer" },
          { text: "Admit you should have researched more", textFr: "Admettre que vous auriez dû faire plus de recherches", nextId: "honest_admit" }
        ]
      },
      "conflict_story": {
        id: "conflict_story",
        text: "You share how you resolved a misunderstanding with a teammate through direct communication. Mr. Davies smiles. \"That's exactly the approach we value here. One final question: where do you see yourself in five years?\"",
        textFr: "Vous partagez comment vous avez résolu un malentendu avec un coéquipier par la communication directe. M. Davies sourit. « C'est exactement l'approche que nous valorisons ici. Une dernière question : où vous voyez-vous dans cinq ans ? »",
        choices: [
          { text: "Express ambition to grow within the company", textFr: "Exprimer l'ambition de grandir au sein de l'entreprise", nextId: "hired" },
          { text: "Say you're focused on the present moment", textFr: "Dire que vous êtes concentré sur le moment présent", nextId: "maybe_hired" }
        ]
      },
      "no_conflict": {
        id: "no_conflict",
        text: "\"Really? Never?\" Mr. Davies raises an eyebrow. \"In my experience, workplace challenges are inevitable. Perhaps think of a hypothetical situation?\" He seems skeptical.",
        textFr: "« Vraiment ? Jamais ? » M. Davies hausse un sourcil. « D'après mon expérience, les défis au travail sont inévitables. Peut-être pensez à une situation hypothétique ? » Il semble sceptique.",
        choices: [
          { text: "Think of a minor disagreement and share it", textFr: "Penser à un désaccord mineur et le partager", nextId: "conflict_story" },
          { text: "Maintain that you haven't faced this", textFr: "Maintenir que vous n'avez pas fait face à cela", nextId: "not_hired" }
        ]
      },
      "team_questions": {
        id: "team_questions",
        text: "You ask about team dynamics and collaboration. Mr. Davies explains the diverse, international team. \"Your curiosity about the people, not just the position, tells me you understand what makes teams successful.\"",
        textFr: "Vous posez des questions sur la dynamique d'équipe et la collaboration. M. Davies explique l'équipe diverse et internationale. « Votre curiosité envers les gens, pas seulement le poste, me dit que vous comprenez ce qui fait le succès des équipes. »",
        choices: [
          { text: "Share your teamwork philosophy", textFr: "Partager votre philosophie du travail d'équipe", nextId: "hired" }
        ]
      },
      "growth_questions": {
        id: "growth_questions",
        text: "Mr. Davies describes career paths, mentoring programs, and international assignments. \"We invest heavily in our people. Those who show initiative often advance quickly here.\"",
        textFr: "M. Davies décrit les parcours de carrière, les programmes de mentorat et les missions internationales. « Nous investissons beaucoup dans nos employés. Ceux qui montrent de l'initiative progressent souvent rapidement ici. »",
        choices: [
          { text: "Express enthusiasm for long-term growth", textFr: "Exprimer l'enthousiasme pour une croissance à long terme", nextId: "hired" }
        ]
      },
      "honest_admit": {
        id: "honest_admit",
        text: "\"I appreciate your honesty,\" says Mr. Davies. \"Not many candidates would admit that. It shows self-awareness.\" He pauses. \"Let me tell you more about what we do here...\" The interview continues positively.",
        textFr: "« J'apprécie votre honnêteté, » dit M. Davies. « Peu de candidats admettraient cela. Cela montre une conscience de soi. » Il fait une pause. « Laissez-moi vous en dire plus sur ce que nous faisons ici... » L'entretien continue positivement.",
        choices: [
          { text: "Listen carefully and engage with questions", textFr: "Écouter attentivement et poser des questions", nextId: "maybe_hired" }
        ]
      },
      "hired": {
        id: "hired",
        text: "A week later, you receive a call. \"Congratulations! We'd like to offer you the position. Mr. Davies was very impressed by your authenticity and clear thinking. Welcome to GlobalTech!\" Your career is about to begin!",
        textFr: "Une semaine plus tard, vous recevez un appel. « Félicitations ! Nous aimerions vous offrir le poste. M. Davies a été très impressionné par votre authenticité et votre clarté d'esprit. Bienvenue chez GlobalTech ! » Votre carrière est sur le point de commencer !",
        isEnding: true,
        endingType: 'good'
      },
      "maybe_hired": {
        id: "maybe_hired",
        text: "Two weeks later, you receive an email. \"Thank you for interviewing with us. While we've selected another candidate for this position, we were impressed by you and will keep your CV on file for future opportunities.\" Not the ideal outcome, but the door remains open.",
        textFr: "Deux semaines plus tard, vous recevez un email. « Merci d'avoir passé un entretien avec nous. Bien que nous ayons sélectionné un autre candidat pour ce poste, nous avons été impressionnés par vous et garderons votre CV pour de futures opportunités. » Pas le résultat idéal, mais la porte reste ouverte.",
        isEnding: true,
        endingType: 'neutral'
      },
      "not_hired": {
        id: "not_hired",
        text: "The interview ends politely but you sense Mr. Davies has doubts. A week later, you receive a standard rejection email. Perhaps being more open about challenges would have helped. Lesson learned for next time.",
        textFr: "L'entretien se termine poliment mais vous sentez que M. Davies a des doutes. Une semaine plus tard, vous recevez un email de refus standard. Peut-être qu'être plus ouvert sur les défis aurait aidé. Leçon apprise pour la prochaine fois.",
        isEnding: true,
        endingType: 'bad'
      }
    }
  },
  {
    id: 4,
    title: "Mystery at the Museum",
    titleFr: "Mystère au musée",
    description: "A valuable painting has disappeared! Use your detective skills to solve the mystery.",
    descriptionFr: "Un tableau précieux a disparu ! Utilisez vos talents de détective pour résoudre le mystère.",
    difficulty: 'hard',
    theme: "Mystery",
    themeFr: "Mystère",
    estimatedTime: 15,
    totalEndings: 6,
    startNodeId: "start",
    nodes: {
      "start": {
        id: "start",
        text: "You are a detective called to the National Art Museum. The director, Mrs. Whitmore, meets you at the entrance. \"Thank you for coming so quickly. The Van Gogh painting disappeared between 2 and 3 AM. The security footage shows nothing unusual. I'm at a loss.\"",
        textFr: "Vous êtes un détective appelé au Musée National d'Art. La directrice, Mme Whitmore, vous accueille à l'entrée. « Merci d'être venu si vite. Le tableau de Van Gogh a disparu entre 2h et 3h du matin. Les caméras de sécurité ne montrent rien d'inhabituel. Je suis perdue. »",
        choices: [
          { text: "Ask to see the security footage", textFr: "Demander à voir les images de sécurité", nextId: "security_footage" },
          { text: "Examine the crime scene first", textFr: "Examiner d'abord la scène de crime", nextId: "crime_scene" },
          { text: "Request a list of all staff on duty last night", textFr: "Demander une liste de tout le personnel de service hier soir", nextId: "staff_list" }
        ]
      },
      "security_footage": {
        id: "security_footage",
        text: "The security guard, Tom, shows you the footage. \"See? Nothing happens. The painting is there at 2:00, gone at 3:00.\" You notice the timestamp jumps oddly from 2:15 to 2:45. Thirty minutes are missing.",
        textFr: "Le garde de sécurité, Tom, vous montre les images. « Vous voyez ? Il ne se passe rien. Le tableau est là à 2h00, disparu à 3h00. » Vous remarquez que l'horodatage saute étrangement de 2h15 à 2h45. Trente minutes manquent.",
        choices: [
          { text: "Question Tom about the missing footage", textFr: "Interroger Tom sur les images manquantes", nextId: "question_tom" },
          { text: "Ask who has access to edit the recordings", textFr: "Demander qui a accès pour modifier les enregistrements", nextId: "recording_access" }
        ]
      },
      "crime_scene": {
        id: "crime_scene",
        text: "The gallery where the painting hung is pristine. Too pristine. No fingerprints, no marks on the wall, even the alarm wires are perfectly intact. This wasn't a break-in—it was an inside job. You also notice a faint smell of fresh paint.",
        textFr: "La galerie où le tableau était accroché est impeccable. Trop impeccable. Pas d'empreintes, pas de marques sur le mur, même les fils d'alarme sont parfaitement intacts. Ce n'était pas un cambriolage - c'était un coup monté de l'intérieur. Vous remarquez aussi une légère odeur de peinture fraîche.",
        choices: [
          { text: "Follow the paint smell", textFr: "Suivre l'odeur de peinture", nextId: "paint_smell" },
          { text: "Check the ventilation system", textFr: "Vérifier le système de ventilation", nextId: "ventilation" },
          { text: "Interview the cleaning staff", textFr: "Interroger le personnel de nettoyage", nextId: "cleaning_staff" }
        ]
      },
      "staff_list": {
        id: "staff_list",
        text: "Mrs. Whitmore provides the list: Tom (security), Maria (cleaning), Dr. Chen (art restoration), and Mrs. Whitmore herself, who was in her office until midnight. \"Dr. Chen was working late on a restoration project,\" she mentions.",
        textFr: "Mme Whitmore fournit la liste : Tom (sécurité), Maria (nettoyage), Dr. Chen (restauration d'art), et Mme Whitmore elle-même, qui était dans son bureau jusqu'à minuit. « Dr. Chen travaillait tard sur un projet de restauration, » mentionne-t-elle.",
        choices: [
          { text: "Interview Dr. Chen about last night", textFr: "Interroger Dr. Chen sur hier soir", nextId: "interview_chen" },
          { text: "Ask more about Mrs. Whitmore's activities", textFr: "Poser plus de questions sur les activités de Mme Whitmore", nextId: "whitmore_alibi" }
        ]
      },
      "question_tom": {
        id: "question_tom",
        text: "Tom becomes nervous. \"I... I don't know about that. Maybe a system glitch?\" His hands are shaking. \"Look, I didn't steal anything! But...\" He hesitates. \"Someone paid me to look away. I never saw who took it. Please, I have a family.\"",
        textFr: "Tom devient nerveux. « Je... je ne sais pas pour ça. Peut-être un problème système ? » Ses mains tremblent. « Écoutez, je n'ai rien volé ! Mais... » Il hésite. « Quelqu'un m'a payé pour détourner le regard. Je n'ai jamais vu qui l'a pris. S'il vous plaît, j'ai une famille. »",
        choices: [
          { text: "Promise leniency if he cooperates fully", textFr: "Promettre l'indulgence s'il coopère pleinement", nextId: "tom_cooperates" },
          { text: "Arrest Tom immediately", textFr: "Arrêter Tom immédiatement", nextId: "arrest_tom" }
        ]
      },
      "recording_access": {
        id: "recording_access",
        text: "\"Only three people: myself, Tom, and our IT manager who is on vacation this week,\" Mrs. Whitmore says. You notice she seems uncomfortable discussing this topic.",
        textFr: "« Seulement trois personnes : moi-même, Tom, et notre responsable informatique qui est en vacances cette semaine, » dit Mme Whitmore. Vous remarquez qu'elle semble mal à l'aise en discutant de ce sujet.",
        choices: [
          { text: "Press Mrs. Whitmore about her access", textFr: "Insister auprès de Mme Whitmore sur son accès", nextId: "whitmore_suspect" },
          { text: "Question Tom instead", textFr: "Interroger Tom à la place", nextId: "question_tom" }
        ]
      },
      "paint_smell": {
        id: "paint_smell",
        text: "You follow the smell to the restoration laboratory. Dr. Chen is there, working intensely. On his easel is a painting that looks remarkably similar to the stolen Van Gogh. He freezes when he sees you.",
        textFr: "Vous suivez l'odeur jusqu'au laboratoire de restauration. Dr. Chen est là, travaillant intensément. Sur son chevalet se trouve un tableau qui ressemble remarquablement au Van Gogh volé. Il se fige quand il vous voit.",
        choices: [
          { text: "\"Dr. Chen, what are you working on?\"", textFr: "« Dr. Chen, sur quoi travaillez-vous ? »", nextId: "chen_caught" },
          { text: "Pretend you're just looking around", textFr: "Faire semblant de juste regarder autour", nextId: "chen_observe" }
        ]
      },
      "ventilation": {
        id: "ventilation",
        text: "The ventilation shaft above where the painting hung has been recently accessed—there are fresh scratches around the screws. But the shaft is too small for a person. However, it could fit a small robot or a carefully rolled canvas...",
        textFr: "La gaine de ventilation au-dessus de l'emplacement du tableau a été récemment ouverte—il y a des rayures fraîches autour des vis. Mais la gaine est trop petite pour une personne. Cependant, elle pourrait contenir un petit robot ou une toile soigneusement roulée...",
        choices: [
          { text: "Search the entire ventilation system", textFr: "Fouiller tout le système de ventilation", nextId: "find_painting" },
          { text: "Ask who has technical expertise", textFr: "Demander qui a une expertise technique", nextId: "tech_expert" }
        ]
      },
      "cleaning_staff": {
        id: "cleaning_staff",
        text: "Maria, the cleaner, is frightened. \"I didn't do anything! But... I did see Dr. Chen leaving very late, around 2:30 AM. He was carrying something wrapped in cloth. I thought it was restoration materials.\"",
        textFr: "Maria, la femme de ménage, est effrayée. « Je n'ai rien fait ! Mais... j'ai bien vu Dr. Chen partir très tard, vers 2h30 du matin. Il portait quelque chose enveloppé dans un tissu. Je pensais que c'était du matériel de restauration. »",
        choices: [
          { text: "Confront Dr. Chen with this information", textFr: "Confronter Dr. Chen avec cette information", nextId: "chen_caught" },
          { text: "Search Dr. Chen's locker", textFr: "Fouiller le casier de Dr. Chen", nextId: "chen_locker" }
        ]
      },
      "interview_chen": {
        id: "interview_chen",
        text: "Dr. Chen, a distinguished older man, seems calm. \"I was restoring a Monet until about 1 AM, then went home. Terrible news about the Van Gogh.\" However, you notice paint on his sleeve that matches the stolen painting's distinctive yellow.",
        textFr: "Dr. Chen, un homme âgé distingué, semble calme. « Je restaurais un Monet jusqu'à environ 1h du matin, puis je suis rentré chez moi. Terrible nouvelle pour le Van Gogh. » Cependant, vous remarquez de la peinture sur sa manche qui correspond au jaune distinctif du tableau volé.",
        choices: [
          { text: "Point out the paint on his sleeve", textFr: "Faire remarquer la peinture sur sa manche", nextId: "chen_caught" },
          { text: "Ask to see his restoration work", textFr: "Demander à voir son travail de restauration", nextId: "chen_lab" }
        ]
      },
      "whitmore_alibi": {
        id: "whitmore_alibi",
        text: "\"I was finalizing the insurance documents for our collection,\" she says, then realizes what she's implied. \"The painting is insured for £5 million. But surely you don't think...\" She looks genuinely shocked at the suggestion.",
        textFr: "« Je finalisais les documents d'assurance pour notre collection, » dit-elle, puis réalise ce qu'elle a impliqué. « Le tableau est assuré pour 5 millions de livres. Mais vous ne pensez quand même pas... » Elle a l'air sincèrement choquée par la suggestion.",
        choices: [
          { text: "Investigate the insurance angle", textFr: "Enquêter sur la piste de l'assurance", nextId: "insurance_fraud" },
          { text: "Focus on other suspects", textFr: "Se concentrer sur d'autres suspects", nextId: "crime_scene" }
        ]
      },
      "tom_cooperates": {
        id: "tom_cooperates",
        text: "Tom reveals he was paid £10,000 in cash to disable the cameras for 30 minutes. \"The envelope was slipped under my door. No name. But I heard them mention something about 'the collector in Monaco' during a phone call I overheard.\"",
        textFr: "Tom révèle qu'il a été payé 10 000 livres en liquide pour désactiver les caméras pendant 30 minutes. « L'enveloppe a été glissée sous ma porte. Pas de nom. Mais je les ai entendus mentionner quelque chose à propos du 'collectionneur à Monaco' pendant un appel téléphonique que j'ai surpris. »",
        choices: [
          { text: "Trace the Monaco connection", textFr: "Suivre la piste de Monaco", nextId: "monaco_lead" },
          { text: "Search for more physical evidence", textFr: "Chercher plus de preuves physiques", nextId: "find_painting" }
        ]
      },
      "arrest_tom": {
        id: "arrest_tom",
        text: "Tom is arrested, but he's just a pawn. Without his cooperation, you lose valuable leads. The investigation stalls, and the painting is never recovered. Sometimes, catching the small fish means losing the big ones.",
        textFr: "Tom est arrêté, mais il n'est qu'un pion. Sans sa coopération, vous perdez des pistes précieuses. L'enquête stagne, et le tableau n'est jamais retrouvé. Parfois, attraper les petits poissons signifie perdre les gros.",
        isEnding: true,
        endingType: 'bad'
      },
      "whitmore_suspect": {
        id: "whitmore_suspect",
        text: "Under pressure, Mrs. Whitmore breaks down. \"The museum is in financial trouble. I thought... the insurance money... I hired someone, but I swear I don't know where the painting is now!\" She reveals her contact was Dr. Chen.",
        textFr: "Sous la pression, Mme Whitmore craque. « Le musée a des problèmes financiers. Je pensais... l'argent de l'assurance... J'ai engagé quelqu'un, mais je jure que je ne sais pas où est le tableau maintenant ! » Elle révèle que son contact était Dr. Chen.",
        choices: [
          { text: "Arrest Mrs. Whitmore and search for Dr. Chen", textFr: "Arrêter Mme Whitmore et rechercher Dr. Chen", nextId: "partial_solve" },
          { text: "Use this to pressure Dr. Chen", textFr: "Utiliser cela pour faire pression sur Dr. Chen", nextId: "chen_caught" }
        ]
      },
      "chen_caught": {
        id: "chen_caught",
        text: "Confronted with evidence, Dr. Chen's facade crumbles. \"Mrs. Whitmore asked me to create a forgery and hide the original. It's in a storage unit across town. I was going to sell it to a collector in Monaco next month.\"",
        textFr: "Confronté aux preuves, la façade de Dr. Chen s'effondre. « Mme Whitmore m'a demandé de créer un faux et de cacher l'original. Il est dans un garde-meuble de l'autre côté de la ville. J'allais le vendre à un collectionneur à Monaco le mois prochain. »",
        choices: [
          { text: "Recover the painting and arrest both conspirators", textFr: "Récupérer le tableau et arrêter les deux conspirateurs", nextId: "full_solve" }
        ]
      },
      "chen_observe": {
        id: "chen_observe",
        text: "You pretend to browse, but Dr. Chen becomes increasingly anxious. When you step out, he makes a phone call. Following discreetly, you hear him say, \"The detective knows. We need to move it tonight.\"",
        textFr: "Vous faites semblant de regarder autour, mais Dr. Chen devient de plus en plus anxieux. Quand vous sortez, il passe un appel. En le suivant discrètement, vous l'entendez dire : « Le détective sait. Nous devons le déplacer ce soir. »",
        choices: [
          { text: "Follow Dr. Chen to the painting's location", textFr: "Suivre Dr. Chen jusqu'à l'emplacement du tableau", nextId: "follow_chen" },
          { text: "Arrest him now before he escapes", textFr: "L'arrêter maintenant avant qu'il ne s'échappe", nextId: "chen_caught" }
        ]
      },
      "chen_lab": {
        id: "chen_lab",
        text: "In the lab, you see his \"Monet restoration.\" But your trained eye notices something: the brushwork on a canvas in the corner matches Van Gogh's style perfectly. It's a forgery, ready to replace the stolen original.",
        textFr: "Dans le laboratoire, vous voyez sa « restauration de Monet ». Mais votre œil exercé remarque quelque chose : le coup de pinceau sur une toile dans le coin correspond parfaitement au style de Van Gogh. C'est un faux, prêt à remplacer l'original volé.",
        choices: [
          { text: "Confront Dr. Chen with the forgery", textFr: "Confronter Dr. Chen avec le faux", nextId: "chen_caught" }
        ]
      },
      "chen_locker": {
        id: "chen_locker",
        text: "In Dr. Chen's locker, you find sketches of the stolen painting, museum blueprints with the ventilation system marked, and a business card from a Monaco art dealer. The evidence is overwhelming.",
        textFr: "Dans le casier de Dr. Chen, vous trouvez des croquis du tableau volé, des plans du musée avec le système de ventilation marqué, et une carte de visite d'un marchand d'art de Monaco. Les preuves sont accablantes.",
        choices: [
          { text: "Arrest Dr. Chen immediately", textFr: "Arrêter Dr. Chen immédiatement", nextId: "chen_caught" }
        ]
      },
      "tech_expert": {
        id: "tech_expert",
        text: "Mrs. Whitmore mentions that Dr. Chen has a background in engineering before he became an art restorer. \"He's always tinkering with gadgets in his lab.\" This technical knowledge could have been used to execute the theft.",
        textFr: "Mme Whitmore mentionne que Dr. Chen a une formation en ingénierie avant de devenir restaurateur d'art. « Il bricole toujours des gadgets dans son laboratoire. » Cette connaissance technique aurait pu être utilisée pour exécuter le vol.",
        choices: [
          { text: "Search Dr. Chen's lab", textFr: "Fouiller le laboratoire de Dr. Chen", nextId: "chen_lab" }
        ]
      },
      "insurance_fraud": {
        id: "insurance_fraud",
        text: "You discover the museum filed for a significant insurance claim increase just three months ago. Combined with Mrs. Whitmore's late-night presence and access to security systems, a pattern emerges. But you need more evidence.",
        textFr: "Vous découvrez que le musée a déposé une demande d'augmentation significative de l'assurance il y a seulement trois mois. Combiné avec la présence nocturne de Mme Whitmore et son accès aux systèmes de sécurité, un schéma se dessine. Mais vous avez besoin de plus de preuves.",
        choices: [
          { text: "Confront Mrs. Whitmore with the insurance evidence", textFr: "Confronter Mme Whitmore avec les preuves d'assurance", nextId: "whitmore_suspect" }
        ]
      },
      "find_painting": {
        id: "find_painting",
        text: "A thorough search of the ventilation system reveals the painting, carefully hidden in a waterproof tube! But who put it there? You set up surveillance and catch Dr. Chen returning to retrieve it that night.",
        textFr: "Une fouille approfondie du système de ventilation révèle le tableau, soigneusement caché dans un tube étanche ! Mais qui l'a mis là ? Vous installez une surveillance et attrapez Dr. Chen revenant le récupérer cette nuit-là.",
        choices: [
          { text: "Arrest Dr. Chen and investigate further", textFr: "Arrêter Dr. Chen et enquêter davantage", nextId: "chen_caught" }
        ]
      },
      "monaco_lead": {
        id: "monaco_lead",
        text: "Working with Interpol, you trace the Monaco collector—a wealthy businessman who has purchased stolen art before. His recent communications with someone at the museum lead you directly to Dr. Chen.",
        textFr: "En travaillant avec Interpol, vous identifiez le collectionneur de Monaco—un homme d'affaires riche qui a déjà acheté des œuvres d'art volées. Ses communications récentes avec quelqu'un au musée vous mènent directement à Dr. Chen.",
        choices: [
          { text: "Coordinate an international arrest", textFr: "Coordonner une arrestation internationale", nextId: "international_success" }
        ]
      },
      "follow_chen": {
        id: "follow_chen",
        text: "You follow Dr. Chen to a storage facility where he's keeping the painting. He leads you directly to the evidence. Police backup arrives, and you catch him red-handed with the Van Gogh in his arms.",
        textFr: "Vous suivez Dr. Chen jusqu'à un garde-meuble où il garde le tableau. Il vous mène directement aux preuves. Les renforts de police arrivent, et vous l'attrapez en flagrant délit avec le Van Gogh dans les bras.",
        choices: [
          { text: "Make the arrest", textFr: "Procéder à l'arrestation", nextId: "full_solve" }
        ]
      },
      "partial_solve": {
        id: "partial_solve",
        text: "Mrs. Whitmore is arrested, but Dr. Chen has fled the country. The painting is recovered from his storage unit, and the museum's reputation is saved. However, the mastermind of the forgery scheme remains at large.",
        textFr: "Mme Whitmore est arrêtée, mais Dr. Chen a fui le pays. Le tableau est récupéré dans son garde-meuble, et la réputation du musée est sauvée. Cependant, le cerveau du stratagème de faux reste en liberté.",
        isEnding: true,
        endingType: 'neutral'
      },
      "full_solve": {
        id: "full_solve",
        text: "Both Mrs. Whitmore and Dr. Chen are arrested. The Van Gogh is returned to the museum. The Monaco collector is also arrested by Interpol. Your thorough investigation has dismantled an international art theft ring. The museum board thanks you personally.",
        textFr: "Mme Whitmore et Dr. Chen sont tous deux arrêtés. Le Van Gogh est rendu au musée. Le collectionneur de Monaco est également arrêté par Interpol. Votre enquête approfondie a démantelé un réseau international de vol d'art. Le conseil d'administration du musée vous remercie personnellement.",
        isEnding: true,
        endingType: 'good'
      },
      "international_success": {
        id: "international_success",
        text: "In a coordinated operation across three countries, you arrest Dr. Chen, Mrs. Whitmore, the Monaco collector, and two other members of the art theft network. The Van Gogh is recovered, along with three other stolen paintings. You make headlines worldwide as the detective who broke the biggest art theft ring in decades.",
        textFr: "Dans une opération coordonnée à travers trois pays, vous arrêtez Dr. Chen, Mme Whitmore, le collectionneur de Monaco, et deux autres membres du réseau de vol d'art. Le Van Gogh est récupéré, ainsi que trois autres tableaux volés. Vous faites la une dans le monde entier comme le détective qui a démantelé le plus grand réseau de vol d'art depuis des décennies.",
        isEnding: true,
        endingType: 'good'
      }
    }
  },
  {
    id: 5,
    title: "The Coffee Shop",
    titleFr: "Le café",
    description: "A simple trip to a coffee shop leads to unexpected encounters. Practice everyday English conversations!",
    descriptionFr: "Un simple passage au café mène à des rencontres inattendues. Pratiquez les conversations anglaises du quotidien !",
    difficulty: 'easy',
    theme: "Daily Life",
    themeFr: "Vie quotidienne",
    estimatedTime: 7,
    totalEndings: 4,
    startNodeId: "start",
    nodes: {
      "start": {
        id: "start",
        text: "You enter your favourite coffee shop on a rainy Saturday afternoon. The shop is quite busy, and there's only one free table—next to the window. The queue at the counter is short.",
        textFr: "Vous entrez dans votre café préféré par un samedi après-midi pluvieux. Le café est assez plein, et il n'y a qu'une seule table libre—à côté de la fenêtre. La file au comptoir est courte.",
        choices: [
          { text: "Sit down first, then order later", textFr: "S'asseoir d'abord, commander plus tard", nextId: "sit_first" },
          { text: "Order your drink first", textFr: "Commander d'abord sa boisson", nextId: "order_first" }
        ]
      },
      "sit_first": {
        id: "sit_first",
        text: "You sit at the window table. The rain creates beautiful patterns on the glass. A moment later, someone approaches. \"Excuse me, is this seat taken?\" It's a friendly-looking person with a book in hand.",
        textFr: "Vous vous asseyez à la table près de la fenêtre. La pluie crée de beaux motifs sur la vitre. Un moment plus tard, quelqu'un s'approche. « Excusez-moi, cette place est prise ? » C'est une personne à l'air sympathique avec un livre à la main.",
        choices: [
          { text: "\"No, please sit down!\"", textFr: "« Non, asseyez-vous je vous en prie ! »", nextId: "share_table" },
          { text: "\"Sorry, I'm expecting someone.\"", textFr: "« Désolé, j'attends quelqu'un. »", nextId: "alone_time" }
        ]
      },
      "order_first": {
        id: "order_first",
        text: "At the counter, the barista smiles. \"What can I get for you today?\" The menu board shows many options. Behind you, someone says, \"The caramel latte is excellent here.\"",
        textFr: "Au comptoir, le barista sourit. « Qu'est-ce que je vous sers aujourd'hui ? » Le tableau du menu montre beaucoup d'options. Derrière vous, quelqu'un dit : « Le latte au caramel est excellent ici. »",
        choices: [
          { text: "\"Thanks! I'll try that.\"", textFr: "« Merci ! Je vais essayer ça. »", nextId: "caramel_latte" },
          { text: "\"I'll have a regular black coffee, please.\"", textFr: "« Je prendrai un café noir classique, s'il vous plaît. »", nextId: "black_coffee" }
        ]
      },
      "share_table": {
        id: "share_table",
        text: "The person sits down and introduces themselves. \"I'm Alex. Terrible weather, isn't it? But perfect for reading.\" They show you the book—it's a mystery novel you've been wanting to read!",
        textFr: "La personne s'assoit et se présente. « Je suis Alex. Temps terrible, n'est-ce pas ? Mais parfait pour lire. » Elle vous montre le livre—c'est un roman policier que vous vouliez lire !",
        choices: [
          { text: "\"I love that author! Is the book good?\"", textFr: "« J'adore cet auteur ! Le livre est bien ? »", nextId: "book_chat" },
          { text: "\"Enjoy your book. I should get my coffee.\"", textFr: "« Bonne lecture. Je devrais aller chercher mon café. »", nextId: "polite_end" }
        ]
      },
      "alone_time": {
        id: "alone_time",
        text: "\"No problem!\" The person walks away. You enjoy your quiet time, watching the rain and thinking. Sometimes, solitude is exactly what we need. After an hour of peaceful reflection, you feel refreshed.",
        textFr: "« Pas de problème ! » La personne s'éloigne. Vous appréciez votre moment de tranquillité, regardant la pluie et réfléchissant. Parfois, la solitude est exactement ce dont nous avons besoin. Après une heure de réflexion paisible, vous vous sentez ressourcé.",
        isEnding: true,
        endingType: 'neutral'
      },
      "caramel_latte": {
        id: "caramel_latte",
        text: "The person behind you laughs. \"Good choice! I'm Emma, by the way. I'm here almost every Saturday.\" She seems friendly and you notice she's holding a camera. \"I take photos of the neighbourhood. Want to see some?\"",
        textFr: "La personne derrière vous rit. « Bon choix ! Je suis Emma, au fait. Je suis ici presque tous les samedis. » Elle a l'air sympathique et vous remarquez qu'elle tient un appareil photo. « Je prends des photos du quartier. Vous voulez en voir ? »",
        choices: [
          { text: "\"I'd love to see them!\"", textFr: "« J'adorerais les voir ! »", nextId: "photo_chat" },
          { text: "\"Thanks, but I need to work today.\"", textFr: "« Merci, mais je dois travailler aujourd'hui. »", nextId: "work_alone" }
        ]
      },
      "black_coffee": {
        id: "black_coffee",
        text: "\"A classic choice!\" says the barista. \"That's £2.80, please.\" As you wait for your coffee, you notice a poster on the wall: \"Open Mic Night - Every Thursday! Share your talents!\"",
        textFr: "« Un choix classique ! » dit le barista. « Ça fait 2,80 £, s'il vous plaît. » En attendant votre café, vous remarquez une affiche sur le mur : « Soirée Micro Ouvert - Tous les jeudis ! Partagez vos talents ! »",
        choices: [
          { text: "Ask the barista about Open Mic Night", textFr: "Demander au barista au sujet de la soirée Micro Ouvert", nextId: "open_mic" },
          { text: "Take your coffee and find a seat", textFr: "Prendre votre café et trouver une place", nextId: "sit_first" }
        ]
      },
      "book_chat": {
        id: "book_chat",
        text: "\"It's amazing!\" Alex says enthusiastically. You spend the next two hours talking about books, movies, and life. Before leaving, Alex suggests, \"We should start a book club! There's a good group that meets here every month.\"",
        textFr: "« C'est incroyable ! » dit Alex avec enthousiasme. Vous passez les deux prochaines heures à parler de livres, de films et de la vie. Avant de partir, Alex suggère : « On devrait créer un club de lecture ! Il y a un bon groupe qui se réunit ici tous les mois. »",
        choices: [
          { text: "\"That sounds wonderful! Count me in!\"", textFr: "« Ça a l'air merveilleux ! Comptez sur moi ! »", nextId: "book_club" }
        ]
      },
      "polite_end": {
        id: "polite_end",
        text: "You get your coffee and enjoy a peaceful afternoon. Sometimes the best conversations are the ones we have with ourselves. The rain eventually stops, and a beautiful rainbow appears outside the window.",
        textFr: "Vous allez chercher votre café et profitez d'un après-midi paisible. Parfois, les meilleures conversations sont celles que nous avons avec nous-mêmes. La pluie finit par s'arrêter, et un bel arc-en-ciel apparaît à l'extérieur de la fenêtre.",
        isEnding: true,
        endingType: 'neutral'
      },
      "photo_chat": {
        id: "photo_chat",
        text: "Emma's photos are stunning—hidden gardens, street art, interesting faces. \"I'm putting together an exhibition next month,\" she says. \"Would you like to come to the opening? I could use some friendly faces in the crowd!\"",
        textFr: "Les photos d'Emma sont magnifiques—des jardins cachés, du street art, des visages intéressants. « Je prépare une exposition le mois prochain, » dit-elle. « Vous aimeriez venir au vernissage ? J'aurais besoin de quelques visages amicaux dans la foule ! »",
        choices: [
          { text: "\"Absolutely! I wouldn't miss it!\"", textFr: "« Absolument ! Je ne manquerais ça pour rien au monde ! »", nextId: "new_friend" }
        ]
      },
      "work_alone": {
        id: "work_alone",
        text: "You find a quiet corner and open your laptop. The coffee is good, the wifi is fast, and you're incredibly productive. By evening, you've finished all your work and feel accomplished.",
        textFr: "Vous trouvez un coin tranquille et ouvrez votre ordinateur portable. Le café est bon, le wifi est rapide, et vous êtes incroyablement productif. En soirée, vous avez terminé tout votre travail et vous vous sentez accompli.",
        isEnding: true,
        endingType: 'good'
      },
      "open_mic": {
        id: "open_mic",
        text: "\"Oh, it's great fun!\" the barista says. \"People sing, read poetry, tell jokes. Are you thinking of performing?\" You remember how much you used to love singing.",
        textFr: "« Oh, c'est très amusant ! » dit le barista. « Les gens chantent, lisent de la poésie, racontent des blagues. Vous pensez vous produire ? » Vous vous souvenez combien vous aimiez chanter.",
        choices: [
          { text: "\"Maybe I'll try it next Thursday!\"", textFr: "« Peut-être que j'essaierai jeudi prochain ! »", nextId: "open_mic_ending" },
          { text: "\"I'll come and watch first.\"", textFr: "« Je viendrai d'abord regarder. »", nextId: "open_mic_ending" }
        ]
      },
      "book_club": {
        id: "book_club",
        text: "You exchange numbers with Alex. The following month, you join the book club. It becomes the highlight of your month—good books, great discussions, and new friends. All because you chose to share a table on a rainy day.",
        textFr: "Vous échangez vos numéros avec Alex. Le mois suivant, vous rejoignez le club de lecture. Cela devient le meilleur moment de votre mois—de bons livres, de grandes discussions, et de nouveaux amis. Tout ça parce que vous avez choisi de partager une table par un jour de pluie.",
        isEnding: true,
        endingType: 'good'
      },
      "new_friend": {
        id: "new_friend",
        text: "You attend Emma's exhibition opening. Her photos are even more beautiful in large prints. She introduces you to her artist friends. Before long, you're part of a creative community you never knew existed. Sometimes the best adventures start with a simple \"hello.\"",
        textFr: "Vous assistez au vernissage de l'exposition d'Emma. Ses photos sont encore plus belles en grands formats. Elle vous présente à ses amis artistes. Bientôt, vous faites partie d'une communauté créative dont vous ignoriez l'existence. Parfois, les meilleures aventures commencent par un simple « bonjour ».",
        isEnding: true,
        endingType: 'good'
      },
      "open_mic_ending": {
        id: "open_mic_ending",
        text: "Thursday arrives. You nervously take the stage and sing an old favourite song. The audience claps warmly. A musician approaches after. \"You have a lovely voice! We're looking for a singer for our band. Interested?\" A new chapter in your life begins.",
        textFr: "Jeudi arrive. Vous montez nerveusement sur scène et chantez une vieille chanson préférée. Le public applaudit chaleureusement. Un musicien s'approche après. « Vous avez une belle voix ! Nous cherchons un chanteur pour notre groupe. Intéressé ? » Un nouveau chapitre de votre vie commence.",
        isEnding: true,
        endingType: 'good'
      }
    }
  }
];
