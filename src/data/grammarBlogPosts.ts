export interface GrammarBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  description: string;
  ogImage: string;
  relatedExerciseId?: string;
}

export const grammarBlogPosts: GrammarBlogPost[] = [
  {
    id: 'email-professionnel-en-anglais',
    title: 'Email professionnel en anglais',
    excerpt: "Salutations, formules de politesse, relances, pièces jointes : le guide complet pour écrire des emails professionnels en anglais clairs et crédibles — avec des formules prêtes à l'emploi et les erreurs de francophone à éviter.",
    content: `
      <p>Un email mal tourné coûte cher : un client qui trouve le ton sec, un collègue étranger qui ne comprend pas la demande, une candidature qui passe à la trappe. Pour un francophone, l'email professionnel en anglais est un exercice piégeux — non pas à cause de la grammaire, mais parce que les codes ne sont pas les mêmes qu'en français. Voici comment écrire des emails clairs, polis et efficaces, avec des formules prêtes à l'emploi.</p>

      <h2>La structure d'un email professionnel</h2>
      <p>Un email professionnel anglais suit presque toujours la même ossature. La respecter, c'est gagner en clarté et en crédibilité :</p>
      <ul>
        <li><strong>Subject line</strong> (objet) : court, précis, informatif</li>
        <li><strong>Greeting</strong> (salutation) : "Dear..." ou "Hi..."</li>
        <li><strong>Opening line</strong> : une phrase d'accroche avant d'entrer dans le vif</li>
        <li><strong>Body</strong> (corps) : votre message, droit au but</li>
        <li><strong>Closing line</strong> : ce que vous attendez pour la suite</li>
        <li><strong>Sign-off</strong> (formule de politesse) : "Kind regards", etc.</li>
        <li><strong>Signature</strong> : nom, fonction, coordonnées</li>
      </ul>

      <h2>L'objet (subject line) : précis et concret</h2>
      <p>L'objet décide si votre email est ouvert. Restez informatif et évitez les objets vagues comme "Question" ou "Hello".</p>
      <ul>
        <li>✅ "Meeting request: Q3 budget review"</li>
        <li>✅ "Follow-up: invoice #2041"</li>
        <li>✅ "Quick question about the Nice project"</li>
        <li>❌ "Important!!!" (agressif et peu informatif)</li>
      </ul>

      <h2>Les formules d'ouverture (greetings)</h2>
      <p>Le choix dépend de votre relation avec le destinataire et du degré de formalité attendu.</p>
      <p><strong>Formel</strong> (premier contact, client, hiérarchie) :</p>
      <ul>
        <li>"Dear Mr Smith," / "Dear Ms Jones," — nom connu (notez <strong>Ms</strong>, pas Mrs, sauf certitude du statut marital)</li>
        <li>"Dear Sir or Madam," — nom inconnu (de plus en plus rare)</li>
        <li>"Dear Hiring Manager," — destinataire fonctionnel</li>
      </ul>
      <p><strong>Courant</strong> (collègues, échanges réguliers) :</p>
      <ul>
        <li>"Hi Sarah," — le standard dans la plupart des entreprises anglophones</li>
        <li>"Hello team," — pour un groupe</li>
      </ul>
      <p><strong>À éviter :</strong></p>
      <ul>
        <li>❌ "Dear Madam Jones," — calque du français ; on ne met pas le nom après "Madam"</li>
        <li>❌ "Hello Mr Smith," — mélange maladroit ; choisissez "Dear Mr Smith" ou "Hi John"</li>
      </ul>

      <h2>La phrase d'ouverture (opening line)</h2>
      <p>En anglais professionnel, on place souvent une phrase courtoise avant la demande — mais brève, à l'opposé des longues formules françaises.</p>
      <ul>
        <li>"I hope you're well." — passe-partout, sincère</li>
        <li>"Thank you for your email." / "Thanks for getting back to me."</li>
        <li>"I'm writing to..." — annonce directe de l'objet</li>
        <li>"Following up on our call earlier,..." — relance après un échange</li>
      </ul>

      <h2>Le corps : aller droit au but</h2>
      <p>La culture email anglophone valorise la concision : une idée par paragraphe, des phrases courtes, et la demande clairement formulée. Voici des formules classées par intention.</p>
      <p><strong>Demander quelque chose (poliment) :</strong></p>
      <ul>
        <li>"Could you please send me...?" — standard, poli</li>
        <li>"Would you be able to...?" — un cran plus prudent</li>
        <li>"I'd appreciate it if you could..." — formel</li>
      </ul>
      <p><strong>Informer / transmettre :</strong></p>
      <ul>
        <li>"Just to let you know that..." — informel</li>
        <li>"I wanted to update you on..."</li>
        <li>"Please note that..." — attirer l'attention sur un point</li>
      </ul>
      <p><strong>Relancer sans agacer :</strong></p>
      <ul>
        <li>"I wanted to follow up on my previous email."</li>
        <li>"Just a gentle reminder about..."</li>
        <li>"Could you let me know where we stand on...?"</li>
      </ul>
      <p><strong>S'excuser :</strong></p>
      <ul>
        <li>"Apologies for the delay in getting back to you." (britannique : <strong>apologise</strong>, pas apologize)</li>
        <li>"Sorry for the confusion — let me clarify."</li>
      </ul>

      <h2>La pièce jointe : la bonne formule</h2>
      <p>C'est l'une des erreurs les plus fréquentes chez les francophones.</p>
      <ul>
        <li>✅ "Please find attached my CV." / "I've attached the invoice."</li>
        <li>❌ "Please find enclosed..." — "enclosed" désigne un document joint à un <em>courrier papier</em>, pas à un email</li>
        <li>❌ "Please find in attachment..." — calque qui n'existe pas en anglais</li>
        <li>❌ "I join the document." — "join" ne signifie pas joindre un fichier</li>
      </ul>

      <h2>Les formules de clôture (sign-offs)</h2>
      <p>La formule finale reflète le registre. En anglais britannique :</p>
      <ul>
        <li><strong>"Kind regards,"</strong> — le passe-partout professionnel par excellence</li>
        <li><strong>"Best regards,"</strong> / "Regards," — courant, légèrement plus neutre</li>
        <li><strong>"Many thanks,"</strong> — lorsque vous demandez un service</li>
        <li><strong>"Best wishes,"</strong> — chaleureux, pour une relation établie</li>
      </ul>
      <p><strong>Règle formelle historique :</strong> "Yours sincerely" si vous connaissez le nom du destinataire, "Yours faithfully" si vous avez ouvert par "Dear Sir or Madam". Réservé aujourd'hui aux courriers très formels (candidatures, juridique).</p>
      <p><strong>À éviter :</strong></p>
      <ul>
        <li>❌ "Cordially," — calque de "Cordialement" ; sonne étrange en anglais</li>
        <li>❌ "Waiting for your answer." — abrupt ; préférez "I look forward to hearing from you."</li>
      </ul>

      <h2>Les erreurs de francophone les plus courantes</h2>
      <ul>
        <li>❌ "I wait your answer." → ✅ "I look forward to your reply."</li>
        <li>❌ "I ask you to..." (sonne comme un ordre) → ✅ "Could you please..."</li>
        <li>❌ "Actually, I work in finance." ("actually" = en réalité, pas actuellement) → ✅ "Currently, I work in finance."</li>
        <li>❌ "I have a doubt." → ✅ "I have a question." / "I'm not sure about..."</li>
        <li>❌ "Do you have news?" → ✅ "Do you have any updates?"</li>
        <li>❌ Trop de formalité : les longues formules à la française ("Je vous prie d'agréer...") n'ont pas d'équivalent — un simple "Kind regards" suffit.</li>
      </ul>

      <h2>Un modèle complet</h2>
      <p>Voici un email de relance client, prêt à adapter :</p>
      <p>
        <em>Subject: Follow-up: proposal for the March campaign</em><br><br>
        Dear Ms Laurent,<br><br>
        I hope you're well. I'm following up on the proposal I sent last week regarding the March campaign.<br><br>
        Please let me know if you have any questions, or if you'd like to arrange a quick call to discuss the details. I'd be happy to adjust the scope to fit your budget.<br><br>
        I look forward to hearing from you.<br><br>
        Kind regards,<br>
        Antony Addy
      </p>

      <h2>En résumé</h2>
      <p>Un bon email professionnel en anglais est <strong>clair, concis et cohérent dans son registre</strong>. Retenez trois réflexes : allez droit au but, choisissez une salutation et une formule de clôture assorties, et méfiez-vous des calques du français ("enclosed", "actually", "I wait"). Avec quelques formules solides en tête, vous gagnez immédiatement en aisance et en crédibilité à l'écrit.</p>
    `,
    date: '2026-07-13',
    author: 'Antony Addy',
    category: 'Communication',
    readTime: '8 min',
    description: "Rédiger un email professionnel en anglais : structure, formules d'ouverture et de clôture, phrases utiles et erreurs à éviter.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  },
  {
    id: 'presentation-en-anglais',
    title: 'Présentation en anglais : le guide',
    excerpt: "Introduction, transitions, mise en valeur des points clés, gestion des questions : les phrases et la structure pour présenter en anglais avec aisance — et les erreurs de francophone à éviter.",
    content: `
      <p>Présenter en anglais devant un comité, un client ou une conférence est l'une des situations les plus redoutées par les professionnels francophones. La difficulté n'est presque jamais le vocabulaire technique — c'est la fluidité, les transitions et les codes de la prise de parole anglophone. Bonne nouvelle : une présentation repose sur des formules réutilisables. Une fois que vous les maîtrisez, vous pouvez vous concentrer sur le fond.</p>

      <h2>La structure : dites ce que vous allez dire</h2>
      <p>La présentation anglophone suit un principe simple : <em>"Tell them what you're going to tell them, tell them, then tell them what you told them."</em> Trois temps :</p>
      <ul>
        <li><strong>Introduction</strong> : qui vous êtes, votre sujet, votre plan, la durée</li>
        <li><strong>Body</strong> : deux à quatre points clés, clairement séparés</li>
        <li><strong>Conclusion</strong> : récapitulatif, message à retenir, remerciements</li>
      </ul>

      <h2>L'introduction : poser le cadre</h2>
      <ul>
        <li>"Good morning everyone, and thank you for coming."</li>
        <li>"For those who don't know me, I'm Antony, and I lead the training team."</li>
        <li>"Today I'd like to talk about..." / "The aim of this presentation is to..."</li>
        <li>"I've divided my talk into three parts." (annoncer le plan)</li>
        <li>"This should take around fifteen minutes. Feel free to ask questions as we go." (ou : "...at the end.")</li>
      </ul>

      <h2>Les transitions (signposting) : guider l'auditoire</h2>
      <p>Les transitions sont ce qui distingue une présentation fluide d'une suite de diapos. Annoncez chaque changement :</p>
      <ul>
        <li>"Let's start with..." (premier point)</li>
        <li>"Let's move on to..." / "Turning to..." (point suivant)</li>
        <li>"This brings me to my next point,..."</li>
        <li>"Going back to what I said earlier,..."</li>
        <li>"So, to summarise this section,..."</li>
      </ul>

      <h2>Mettre en valeur un point clé</h2>
      <ul>
        <li>"The key takeaway here is..."</li>
        <li>"I'd like to highlight..." / "What's really important is..."</li>
        <li>"If you remember one thing from today, it's this:..."</li>
      </ul>

      <h2>Présenter des chiffres et des visuels</h2>
      <ul>
        <li>"As you can see on this slide,..."</li>
        <li>"This chart shows..." / "These figures highlight..."</li>
        <li>"There's been a sharp increase in..." / "...a steady decline in..."</li>
        <li>"Let me draw your attention to the figure on the right."</li>
      </ul>

      <h2>Gérer les questions</h2>
      <ul>
        <li>"That's a great question." (gagner une seconde pour réfléchir)</li>
        <li>"If I understand correctly, you're asking about..." (reformuler)</li>
        <li>"That's a good point — let me get back to you on that." (quand vous ne savez pas)</li>
        <li>"Does that answer your question?"</li>
      </ul>

      <h2>Conclure avec impact</h2>
      <ul>
        <li>"To sum up,..." / "To wrap up,..."</li>
        <li>"So, where does this leave us?" (avant la recommandation finale)</li>
        <li>"Thank you for your attention. I'm happy to take any questions."</li>
      </ul>

      <h2>Les erreurs de francophone les plus courantes</h2>
      <ul>
        <li>❌ "I will explain you the results." → ✅ "I will explain the results to you." ("explain" ne se construit pas avec un complément direct de personne)</li>
        <li>❌ "We work on this project since three years." → ✅ "We've been working on this project for three years."</li>
        <li>❌ "I'm going to present you our new strategy." → ✅ "I'm going to present our new strategy." / "...to talk you through our new strategy."</li>
        <li>❌ "In this slide..." → ✅ "On this slide..."</li>
        <li>❌ "As well" en début de phrase (calque de "aussi") → ✅ "Also,..." / "In addition,..."</li>
      </ul>

      <h2>Un modèle d'ouverture</h2>
      <p>Voici une ouverture prête à adapter :</p>
      <p>
        <em>"Good morning everyone, and thank you for being here. I'm Antony Addy, and I work with companies on professional English. Today, I'd like to talk about how to improve your team's communication in English. I've divided my talk into three parts: first the challenges, then a practical method, and finally some results. This should take about ten minutes — please feel free to ask questions at the end. Let's start with the challenges."</em>
      </p>

      <h2>En résumé</h2>
      <p>Une présentation réussie en anglais tient à trois choses : une <strong>structure claire</strong> annoncée dès le départ, des <strong>transitions explicites</strong> entre les parties, et quelques <strong>formules de prise de parole</strong> pour ouvrir, mettre en valeur et conclure. Le contenu, vous le connaissez déjà — ces repères vous libèrent pour le transmettre avec assurance.</p>
    `,
    date: '2026-07-13',
    author: 'Antony Addy',
    category: 'Communication',
    readTime: '8 min',
    description: "Réussir une présentation en anglais : structure, transitions, points clés, gestion des questions et erreurs courantes.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  },
  {
    id: 'entretien-embauche-en-anglais',
    title: "Entretien d'embauche en anglais",
    excerpt: "\"Tell me about yourself\", forces et faiblesses, la méthode STAR : comment préparer et réussir un entretien d'embauche en anglais, avec des réponses modèles et les erreurs de francophone à éviter.",
    content: `
      <p>Un entretien d'embauche en anglais ajoute une couche de difficulté à un exercice déjà stressant. La clé n'est pas d'improviser en espérant que ça passe, mais de <strong>préparer les questions récurrentes</strong> : elles sont presque toujours les mêmes. Voici comment structurer vos réponses, avec les formules et la méthode qui font la différence.</p>

      <h2>"Tell me about yourself" : la question d'ouverture</h2>
      <p>C'est presque toujours la première question, et c'est un piège si vous récitez votre CV. La bonne structure est <strong>présent → passé → futur</strong> :</p>
      <ul>
        <li><strong>Présent</strong> : "I'm currently a project manager at..." (votre rôle actuel)</li>
        <li><strong>Passé</strong> : "Before that, I spent five years in..." (comment vous en êtes arrivé là)</li>
        <li><strong>Futur</strong> : "Now I'm looking to..." (pourquoi ce poste vous intéresse)</li>
      </ul>

      <h2>Parler de son parcours : les bons temps</h2>
      <p>Pour une expérience toujours en cours ou dont le résultat compte aujourd'hui, utilisez le <strong>present perfect</strong> :</p>
      <ul>
        <li>"I've worked with international teams for most of my career."</li>
        <li>"I've managed budgets of up to two million euros."</li>
        <li>Pour une expérience datée et terminée, le past simple : "In 2020, I led the launch of..."</li>
      </ul>

      <h2>Forces et faiblesses</h2>
      <ul>
        <li>"One of my main strengths is..." / "I'd say I'm particularly good at..."</li>
        <li>Faiblesse (choisissez-en une réelle mais gérable) : "Something I've been working on is... and I've improved by..."</li>
        <li>❌ Évitez le classique "I'm a perfectionist" — les recruteurs anglophones le repèrent immédiatement.</li>
      </ul>

      <h2>"Why do you want this job?"</h2>
      <ul>
        <li>"I'm really drawn to..." / "What appeals to me about this role is..."</li>
        <li>"Your company's approach to... really resonates with me."</li>
        <li>Reliez toujours à ce que vous apportez : "...and I believe my experience in X would add real value."</li>
      </ul>

      <h2>La méthode STAR pour les questions de mise en situation</h2>
      <p>Pour "Tell me about a time when..." (une situation difficile, un conflit, un succès), structurez avec <strong>STAR</strong> :</p>
      <ul>
        <li><strong>S</strong>ituation : "We were behind on a key deadline..."</li>
        <li><strong>T</strong>ask : "My job was to get the project back on track."</li>
        <li><strong>A</strong>ction : "I reorganised the team and prioritised..."</li>
        <li><strong>R</strong>esult : "As a result, we delivered on time and the client renewed."</li>
      </ul>

      <h2>Poser vos propres questions</h2>
      <p>"Do you have any questions for us?" n'est pas une formalité — préparez-en deux ou trois :</p>
      <ul>
        <li>"What does success look like in this role in the first year?"</li>
        <li>"How would you describe the team culture?"</li>
        <li>"What are the main challenges the team is facing right now?"</li>
      </ul>

      <h2>Les erreurs de francophone les plus courantes</h2>
      <ul>
        <li>❌ "I have 35 years." → ✅ "I'm 35." (l'âge se dit avec "to be")</li>
        <li>❌ "I'm agree with that approach." → ✅ "I agree with that approach."</li>
        <li>❌ "I assist to a lot of meetings." → ✅ "I attend a lot of meetings." ("assist" = aider)</li>
        <li>❌ "Actually, I'm looking for a new challenge." (si vous voulez dire "en ce moment") → ✅ "Currently, I'm looking for..."</li>
        <li>❌ "I have a good experience." → ✅ "I have solid experience." ("experience" au sens de savoir-faire est indénombrable)</li>
      </ul>

      <h2>Un modèle de réponse</h2>
      <p>Réponse à "Tell me about yourself", prête à adapter :</p>
      <p>
        <em>"Sure. I'm currently a marketing manager at a mid-sized tech company, where I lead a team of four. Before that, I spent six years in agencies, working with international clients across Europe. Over the years, I've developed real strength in cross-cultural communication and campaign strategy. I'm now looking to bring that experience to a company with a stronger international focus — which is exactly why this role caught my attention."</em>
      </p>

      <h2>En résumé</h2>
      <p>Un entretien en anglais se gagne à la <strong>préparation</strong>, pas à l'improvisation. Structurez votre présentation en présent-passé-futur, appuyez vos exemples sur la méthode STAR, préparez vos propres questions, et surveillez les faux-amis classiques ("assist", "actually", "I'm agree"). Vous n'avez pas besoin d'un anglais parfait — d'un anglais clair, structuré et confiant.</p>
    `,
    date: '2026-07-13',
    author: 'Antony Addy',
    category: 'Communication',
    readTime: '8 min',
    description: "Réussir un entretien d'embauche en anglais : répondre à \"Tell me about yourself\", méthode STAR et erreurs à éviter.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  },
  {
    id: 'anglais-telephone-visio',
    title: "Anglais au téléphone et en visio",
    excerpt: "Se présenter, faire répéter poliment, gérer les problèmes techniques en visio, laisser un message : les formules essentielles pour gérer un appel professionnel en anglais avec assurance.",
    content: `
      <p>Le téléphone et la visioconférence sont, de loin, les situations les plus stressantes en anglais professionnel : pas de langage corporel pour vous aider, des accents variés, un débit rapide, et parfois une mauvaise connexion. La parade est d'avoir en tête un répertoire de formules pour chaque moment de l'appel — vous n'improvisez plus, vous pilotez.</p>

      <h2>Décrocher et se présenter</h2>
      <ul>
        <li>"Hello, this is Antony speaking." (notez : <strong>this is</strong>, pas "I am" ni "here is")</li>
        <li>"Good morning, Antony Addy speaking. How can I help?"</li>
        <li>Pour un appel sortant : "Hello, this is Antony from [company]. Am I speaking to Ms Laurent?"</li>
      </ul>

      <h2>Demander à parler à quelqu'un</h2>
      <ul>
        <li>"Could I speak to Sarah, please?"</li>
        <li>"I'm calling about..." (annoncer l'objet tout de suite)</li>
        <li>Filtrer un appel : "May I ask who's calling?" / "Could I ask what it's regarding?"</li>
        <li>Faire patienter : "Could you hold on a moment, please? I'll put you through."</li>
      </ul>

      <h2>Faire répéter — poliment</h2>
      <p>Demander de répéter n'est pas une faiblesse ; c'est professionnel. Ayez plusieurs formules pour ne pas répéter "Can you repeat?" à chaque fois :</p>
      <ul>
        <li>"Sorry, could you repeat that, please?"</li>
        <li>"I didn't quite catch that."</li>
        <li>"Could you speak up a little? The line isn't great."</li>
        <li>"Would you mind spelling that for me?" (pour un nom ou un email)</li>
        <li>"Just to make sure I've understood — you'd like..." (reformuler pour confirmer)</li>
      </ul>

      <h2>La visioconférence : gérer la technique</h2>
      <p>Les problèmes techniques ont leur propre vocabulaire, qu'il vaut mieux connaître avant d'en avoir besoin :</p>
      <ul>
        <li>"You're on mute." (l'erreur numéro un — personne ne vous entend)</li>
        <li>"Sorry, you're breaking up." (la connexion coupe)</li>
        <li>"I think there's a bit of a delay / lag."</li>
        <li>"Could you turn your camera on?" / "Would you mind sharing your screen?"</li>
        <li>"Can everyone see my screen?"</li>
      </ul>

      <h2>Structurer l'appel</h2>
      <ul>
        <li>Ouvrir : "Thanks for taking the time. I'd like to go over three things today."</li>
        <li>Enchaîner : "Right, moving on to the next point..."</li>
        <li>Vérifier : "Does that make sense?" / "Are we all on the same page?"</li>
        <li>Conclure : "So, to recap the next steps:..." / "I'll follow up with an email to confirm."</li>
      </ul>

      <h2>Prendre et laisser un message</h2>
      <ul>
        <li>"I'm afraid she's not available right now. Can I take a message?"</li>
        <li>"Could you ask her to call me back on...?"</li>
        <li>"Let me leave you my number, just in case."</li>
      </ul>

      <h2>Les erreurs de francophone les plus courantes</h2>
      <ul>
        <li>❌ "Here is Antony." (calque de "c'est Antony à l'appareil") → ✅ "This is Antony."</li>
        <li>❌ "How do you call this in English?" → ✅ "What do you call this in English?" / "What's this called?"</li>
        <li>❌ "I call you back later." (pour une décision immédiate) → ✅ "I'll call you back later." (le futur avec "will")</li>
        <li>❌ "Wait, please." (sonne comme un ordre) → ✅ "Could you hold on a moment, please?"</li>
        <li>❌ "I don't understand you." (abrupt) → ✅ "Sorry, I didn't quite catch that."</li>
      </ul>

      <h2>Un modèle d'ouverture d'appel</h2>
      <p>
        <em>"Hello, this is Antony Addy from [company]. Thanks for taking my call. I'm calling about the proposal I sent last week — is now a good time to talk it through? ... Great. I'd like to cover three quick points, and then I'm happy to answer any questions."</em>
      </p>

      <h2>En résumé</h2>
      <p>Au téléphone et en visio, la confiance vient de la <strong>préparation des formules</strong>, pas d'un accent parfait. Sachez vous présenter ("This is..."), faire répéter poliment sans vous excuser à l'excès, gérer les aléas techniques ("You're on mute", "You're breaking up"), et structurer l'échange du début à la fin. Ces réflexes transforment l'appel le plus stressant en routine maîtrisée.</p>
    `,
    date: '2026-07-13',
    author: 'Antony Addy',
    category: 'Communication',
    readTime: '7 min',
    description: "Anglais au téléphone et en visio : se présenter, faire répéter poliment, gérer la technique et éviter les erreurs courantes.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  },
];

// Get all grammar blog post IDs
export const grammarBlogPostIds = grammarBlogPosts.map(post => post.id);

// Get grammar blog posts as articles format for Blog.tsx
export const grammarArticles = grammarBlogPosts.map(post => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  author: post.author,
  category: post.category,
  readTime: post.readTime
}));
