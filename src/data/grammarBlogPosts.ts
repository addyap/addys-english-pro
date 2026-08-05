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
  {
    id: 'present-simple-vs-present-continuous',
    title: 'Present Simple vs Present Continuous',
    excerpt: 'Comprendre quand utiliser le Present Simple et le Present Continuous est essentiel pour parler anglais correctement. Découvrez les règles et exemples pratiques.',
    content: `
      <p>La distinction entre le <strong>Present Simple</strong> et le <strong>Present Continuous</strong> est l'une des premières difficultés rencontrées par les francophones. Ces deux temps expriment le présent mais dans des contextes très différents.</p>

      <h2>Le Present Simple : habitudes et vérités générales</h2>
      <p>Le Present Simple s'utilise pour :</p>
      <ul>
        <li><strong>Les habitudes et routines</strong> : "I wake up at 7 AM every day"</li>
        <li><strong>Les vérités générales</strong> : "Water boils at 100°C"</li>
        <li><strong>Les situations permanentes</strong> : "She lives in Paris"</li>
      </ul>
      <p><strong>Mots-clés indicateurs :</strong> always, usually, often, sometimes, never, every day/week/month</p>

      <h2>Le Present Continuous : actions en cours</h2>
      <p>Le Present Continuous s'utilise pour :</p>
      <ul>
        <li><strong>Actions en cours</strong> : "I am reading a book right now"</li>
        <li><strong>Situations temporaires</strong> : "He is staying with us this week"</li>
        <li><strong>Arrangements futurs</strong> : "We are meeting tomorrow"</li>
      </ul>
      <p><strong>Mots-clés indicateurs :</strong> now, at the moment, currently, right now, today</p>

      <h2>Exemples comparatifs</h2>
      <ul>
        <li>"I <strong>work</strong> in a bank." (emploi permanent) vs "I <strong>am working</strong> on a project." (en ce moment)</li>
        <li>"She <strong>speaks</strong> three languages." (capacité permanente) vs "She <strong>is speaking</strong> to her boss right now." (action en cours)</li>
      </ul>

      <h2>Attention aux verbes d'état</h2>
      <p>Certains verbes ne s'utilisent généralement pas au Present Continuous : know, understand, believe, love, hate, want, need, prefer.</p>
      <p>❌ "I am understanding" → ✅ "I understand"</p>
    `,
    date: '2025-01-20',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '5 min',
    description: 'Maîtrisez la différence entre Present Simple et Present Continuous avec des explications claires et des exemples pratiques.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'present-simple-continuous'
  },
  {
    id: 'past-simple-vs-present-perfect',
    title: 'Past Simple vs Present Perfect',
    excerpt: 'Le Past Simple et le Present Perfect sont souvent confondus par les francophones. Apprenez à les distinguer avec des règles simples.',
    content: `
      <p>La distinction entre <strong>Past Simple</strong> et <strong>Present Perfect</strong> est cruciale en anglais. Ces deux temps parlent du passé mais avec des perspectives différentes.</p>

      <h2>Le Past Simple : passé terminé et daté</h2>
      <p>Le Past Simple s'utilise pour :</p>
      <ul>
        <li><strong>Actions terminées à un moment précis</strong> : "I visited Paris in 2019"</li>
        <li><strong>Séquences d'événements</strong> : "I got up, had breakfast, and left"</li>
        <li><strong>Habitudes passées</strong> : "She always walked to school"</li>
      </ul>
      <p><strong>Mots-clés :</strong> yesterday, last week/month/year, in 2019, ago, when</p>

      <h2>Le Present Perfect : lien avec le présent</h2>
      <p>Le Present Perfect s'utilise pour :</p>
      <ul>
        <li><strong>Expériences de vie</strong> (sans moment précis) : "I have visited Paris"</li>
        <li><strong>Actions commencées dans le passé qui continuent</strong> : "I have lived here for 5 years"</li>
        <li><strong>Actions récentes avec impact présent</strong> : "I have just finished my work"</li>
      </ul>
      <p><strong>Mots-clés :</strong> ever, never, already, yet, just, since, for, recently</p>

      <h2>La clé : le moment est-il précisé ?</h2>
      <ul>
        <li>"I <strong>went</strong> to Rome last summer." (moment précis → Past Simple)</li>
        <li>"I <strong>have been</strong> to Rome." (expérience de vie → Present Perfect)</li>
        <li>"She <strong>worked</strong> here for 5 years." (elle n'y travaille plus)</li>
        <li>"She <strong>has worked</strong> here for 5 years." (elle y travaille encore)</li>
      </ul>
    `,
    date: '2025-01-19',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '6 min',
    description: 'Comprenez enfin la différence entre Past Simple et Present Perfect avec des règles claires et des exemples concrets.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'past-simple-present-perfect'
  },
  {
    id: 'past-simple-vs-past-continuous',
    title: 'Past Simple vs Past Continuous',
    excerpt: 'Découvrez comment utiliser le Past Simple et le Past Continuous pour raconter des histoires et décrire des situations passées.',
    content: `
      <p>Le <strong>Past Simple</strong> et le <strong>Past Continuous</strong> travaillent souvent ensemble pour raconter des histoires, créant un effet de "scène" et "action".</p>

      <h2>Le Past Simple : actions complètes</h2>
      <ul>
        <li><strong>Actions terminées</strong> : "I finished my work"</li>
        <li><strong>Actions courtes</strong> : "She opened the door"</li>
        <li><strong>Séquences</strong> : "He arrived, sat down, and ordered a coffee"</li>
      </ul>

      <h2>Le Past Continuous : actions en cours (décor)</h2>
      <ul>
        <li><strong>Actions en cours à un moment précis</strong> : "I was reading at 8 PM"</li>
        <li><strong>Actions interrompues</strong> : "I was cooking when he called"</li>
        <li><strong>Actions simultanées</strong> : "While I was reading, she was watching TV"</li>
      </ul>

      <h2>Le schéma classique : When + Past Simple + Past Continuous</h2>
      <p>L'action courte (Past Simple) interrompt l'action longue (Past Continuous) :</p>
      <ul>
        <li>"When the phone <strong>rang</strong>, I <strong>was having</strong> a shower."</li>
        <li>"I <strong>was walking</strong> home when I <strong>met</strong> John."</li>
        <li>"He <strong>fell</strong> asleep while he <strong>was watching</strong> the film."</li>
      </ul>

      <h2>Astuce visuelle</h2>
      <p>Imaginez une scène de film : le Past Continuous est le décor (ce qui se passe en arrière-plan), le Past Simple est l'action principale qui se produit.</p>
    `,
    date: '2025-01-18',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '5 min',
    description: 'Apprenez à combiner Past Simple et Past Continuous pour raconter des histoires en anglais de manière naturelle.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'past-simple-continuous'
  },
  {
    id: 'past-simple-vs-past-perfect',
    title: 'Past Simple vs Past Perfect',
    excerpt: 'Le Past Perfect permet de parler d\'une action antérieure à une autre action passée. Découvrez comment l\'utiliser correctement.',
    content: `
      <p>Le <strong>Past Perfect</strong> est le "passé du passé". Il permet de clarifier l'ordre chronologique de deux événements passés.</p>

      <h2>Quand utiliser le Past Perfect ?</h2>
      <p>Utilisez le Past Perfect pour une action qui s'est produite <strong>AVANT</strong> une autre action passée :</p>
      <ul>
        <li>"When I <strong>arrived</strong>, she <strong>had</strong> already <strong>left</strong>." (Elle est partie d'abord, puis je suis arrivé)</li>
        <li>"I didn't recognize him because he <strong>had changed</strong> so much."</li>
      </ul>

      <h2>Structure</h2>
      <p><strong>Had + participe passé</strong></p>
      <ul>
        <li>I had finished / She had gone / They had eaten</li>
      </ul>

      <h2>Mots-clés associés</h2>
      <p>after, before, when, by the time, already, just, never... before</p>
      <ul>
        <li>"<strong>After</strong> I <strong>had finished</strong> dinner, I watched TV."</li>
        <li>"<strong>By the time</strong> we got there, the film <strong>had started</strong>."</li>
        <li>"I <strong>had never seen</strong> such a beautiful sunset <strong>before</strong> that day."</li>
      </ul>

      <h2>Quand NE PAS l'utiliser</h2>
      <p>Si les événements sont racontés dans l'ordre chronologique, le Past Simple suffit :</p>
      <p>"I finished my homework and then watched TV." (ordre chronologique clair)</p>
    `,
    date: '2025-01-17',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '5 min',
    description: 'Maîtrisez le Past Perfect pour exprimer l\'antériorité dans le passé et raconter des événements dans le bon ordre.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'past-simple-perfect'
  },
  {
    id: 'past-perfect-continuous',
    title: 'Le Past Perfect Continuous',
    excerpt: 'Le Past Perfect Continuous combine durée et antériorité. Apprenez à l\'utiliser pour décrire des actions continues avant un moment passé.',
    content: `
      <p>Le <strong>Past Perfect Continuous</strong> décrit une action qui était <strong>en cours pendant une durée</strong> avant un autre événement passé.</p>

      <h2>Structure</h2>
      <p><strong>Had been + verbe-ing</strong></p>
      <ul>
        <li>I had been waiting / She had been working / They had been studying</li>
      </ul>

      <h2>Utilisations principales</h2>
      <ul>
        <li><strong>Durée avant un événement passé</strong> : "I <strong>had been waiting</strong> for 2 hours when she finally arrived."</li>
        <li><strong>Cause d'une situation passée</strong> : "He was tired because he <strong>had been working</strong> all night."</li>
        <li><strong>Action récemment terminée avec effet visible</strong> : "Her eyes were red. She <strong>had been crying</strong>."</li>
      </ul>

      <h2>Mots-clés</h2>
      <p>for, since, all day/night/week, how long</p>

      <h2>Past Perfect Simple vs Continuous</h2>
      <ul>
        <li><strong>Simple</strong> (résultat) : "I <strong>had written</strong> three emails." (3 emails terminés)</li>
        <li><strong>Continuous</strong> (durée/processus) : "I <strong>had been writing</strong> emails all morning." (focus sur la durée)</li>
      </ul>
    `,
    date: '2025-01-16',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '4 min',
    description: 'Comprenez le Past Perfect Continuous pour exprimer la durée d\'une action avant un moment passé.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'past-perfect-continuous'
  },
  {
    id: 'future-continuous',
    title: 'Le Future Continuous en anglais',
    excerpt: 'Le Future Continuous permet de parler d\'actions qui seront en cours à un moment précis du futur.',
    content: `
      <p>Le <strong>Future Continuous</strong> décrit une action qui sera <strong>en cours</strong> à un moment spécifique dans le futur.</p>

      <h2>Structure</h2>
      <p><strong>Will be + verbe-ing</strong></p>
      <ul>
        <li>I will be working / She will be traveling / They will be sleeping</li>
      </ul>

      <h2>Utilisations</h2>
      <ul>
        <li><strong>Action en cours à un moment futur</strong> : "This time tomorrow, I <strong>will be flying</strong> to New York."</li>
        <li><strong>Événements prévus/normaux</strong> : "Don't call at 8 PM. I <strong>will be having</strong> dinner."</li>
        <li><strong>Questions polies sur les plans</strong> : "<strong>Will you be using</strong> the car tonight?"</li>
      </ul>

      <h2>Expressions temporelles</h2>
      <p>this time tomorrow, at 3 PM, in an hour, when you arrive, all day tomorrow</p>

      <h2>Future Simple vs Future Continuous</h2>
      <ul>
        <li><strong>Simple</strong> : "I <strong>will work</strong> tomorrow." (fait/décision)</li>
        <li><strong>Continuous</strong> : "I <strong>will be working</strong> at 9 AM tomorrow." (en cours à ce moment)</li>
      </ul>
    `,
    date: '2025-01-15',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '4 min',
    description: 'Apprenez à utiliser le Future Continuous pour décrire des actions en cours à un moment précis du futur.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'future-continuous'
  },
  {
    id: 'future-perfect-continuous',
    title: 'Le Future Perfect Continuous',
    excerpt: 'Le Future Perfect Continuous exprime la durée d\'une action jusqu\'à un point dans le futur. Un temps avancé expliqué simplement.',
    content: `
      <p>Le <strong>Future Perfect Continuous</strong> décrit la <strong>durée</strong> d'une action qui sera en cours jusqu'à un moment futur.</p>

      <h2>Structure</h2>
      <p><strong>Will have been + verbe-ing</strong></p>

      <h2>Utilisation principale</h2>
      <p>Souligner <strong>combien de temps</strong> une action aura duré à un moment futur :</p>
      <ul>
        <li>"By December, I <strong>will have been working</strong> here <strong>for 10 years</strong>."</li>
        <li>"Next month, they <strong>will have been living</strong> in Paris <strong>for 5 years</strong>."</li>
      </ul>

      <h2>Future Perfect Simple vs Continuous</h2>
      <ul>
        <li><strong>Simple</strong> (résultat) : "By 6 PM, I <strong>will have finished</strong> the report." (terminé)</li>
        <li><strong>Continuous</strong> (durée) : "By 6 PM, I <strong>will have been working</strong> on this report for 8 hours." (focus sur le temps passé)</li>
      </ul>

      <h2>Expressions clés</h2>
      <p>by + moment futur, for + durée, when + événement futur</p>
    `,
    date: '2025-01-14',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '4 min',
    description: 'Maîtrisez le Future Perfect Continuous pour exprimer la durée d\'une action jusqu\'à un point futur.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'future-perfect-continuous'
  },
  {
    id: 'prepositions-de-lieu',
    title: 'Prépositions de lieu : in, on, at',
    excerpt: 'Maîtrisez les prépositions de lieu anglaises avec des règles claires et des exemples concrets pour ne plus jamais vous tromper.',
    content: `
      <p>Les <strong>prépositions de lieu</strong> indiquent la position d'une personne ou d'un objet. Voici les principales à maîtriser.</p>

      <h2>IN - à l'intérieur</h2>
      <ul>
        <li>in the box, in the room, in the car</li>
        <li>in Paris, in France (villes, pays)</li>
        <li>in the water, in the sky</li>
      </ul>

      <h2>ON - sur une surface</h2>
      <ul>
        <li>on the table, on the wall, on the floor</li>
        <li>on the bus/train/plane (transports publics)</li>
        <li>on the left/right, on the corner</li>
      </ul>

      <h2>AT - point précis</h2>
      <ul>
        <li>at the door, at the bus stop, at the corner</li>
        <li>at home, at work, at school</li>
        <li>at the top/bottom</li>
      </ul>

      <h2>Autres prépositions essentielles</h2>
      <ul>
        <li><strong>under</strong> : under the table (sous)</li>
        <li><strong>above/over</strong> : above the door (au-dessus)</li>
        <li><strong>between</strong> : between the two buildings (entre)</li>
        <li><strong>next to/beside</strong> : next to the bank (à côté de)</li>
        <li><strong>in front of/behind</strong> : in front of the house (devant/derrière)</li>
      </ul>
    `,
    date: '2025-01-13',
    author: 'Antony Addy',
    category: 'Grammaire - Prépositions',
    readTime: '5 min',
    description: 'Guide complet des prépositions de lieu en anglais : in, on, at, under, above et plus encore.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'prepositions-place'
  },
  {
    id: 'prepositions-de-temps',
    title: 'Prépositions de temps : in, on, at',
    excerpt: 'In, on, at pour le temps : découvrez les règles simples pour ne plus confondre ces prépositions temporelles.',
    content: `
      <p>Les prépositions <strong>in, on, at</strong> s'utilisent aussi pour le temps, avec des règles précises à connaître.</p>

      <h2>AT - moments précis</h2>
      <ul>
        <li><strong>Heures</strong> : at 3 o'clock, at noon, at midnight</li>
        <li><strong>Moments de la journée</strong> : at night, at lunchtime</li>
        <li><strong>Fêtes</strong> : at Christmas, at Easter</li>
        <li><strong>Expressions</strong> : at the moment, at the weekend (UK)</li>
      </ul>

      <h2>ON - jours et dates</h2>
      <ul>
        <li><strong>Jours</strong> : on Monday, on weekdays</li>
        <li><strong>Dates</strong> : on 15th January, on my birthday</li>
        <li><strong>Jours spéciaux</strong> : on Christmas Day, on New Year's Eve</li>
      </ul>

      <h2>IN - périodes plus longues</h2>
      <ul>
        <li><strong>Parties du jour</strong> : in the morning/afternoon/evening</li>
        <li><strong>Mois</strong> : in January, in December</li>
        <li><strong>Saisons</strong> : in summer, in winter</li>
        <li><strong>Années/siècles</strong> : in 2025, in the 21st century</li>
        <li><strong>Durée future</strong> : in 5 minutes, in 2 weeks</li>
      </ul>

      <h2>Astuce mnémotechnique</h2>
      <p>Du plus petit au plus grand : AT (point) → ON (jour) → IN (période)</p>
    `,
    date: '2025-01-12',
    author: 'Antony Addy',
    category: 'Grammaire - Prépositions',
    readTime: '5 min',
    description: 'Maîtrisez les prépositions de temps in, on, at avec des règles claires et des exemples pratiques.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'prepositions-time'
  },
  {
    id: 'comparatifs-en-anglais',
    title: 'Les comparatifs en anglais',
    excerpt: 'Comment comparer deux éléments en anglais ? Découvrez les règles des comparatifs avec des exemples clairs.',
    content: `
      <p>Les <strong>comparatifs</strong> permettent de comparer deux éléments. La formation dépend de la longueur de l'adjectif.</p>

      <h2>Adjectifs courts (1 syllabe) : -er + than</h2>
      <ul>
        <li>tall → <strong>taller</strong> than : "He is taller than me."</li>
        <li>old → <strong>older</strong> than : "This car is older than that one."</li>
        <li>fast → <strong>faster</strong> than</li>
      </ul>

      <h2>Adjectifs longs (2+ syllabes) : more + adj + than</h2>
      <ul>
        <li>expensive → <strong>more expensive</strong> than</li>
        <li>interesting → <strong>more interesting</strong> than</li>
        <li>beautiful → <strong>more beautiful</strong> than</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li>Adjectifs en -y : happy → happ<strong>ier</strong>, easy → eas<strong>ier</strong></li>
        <li>Doublement de la consonne : big → bi<strong>gger</strong>, hot → ho<strong>tter</strong></li>
      </ul>

      <h2>Comparatifs irréguliers</h2>
      <ul>
        <li>good → <strong>better</strong> than</li>
        <li>bad → <strong>worse</strong> than</li>
        <li>far → <strong>farther/further</strong> than</li>
      </ul>

      <h2>Égalité : as...as</h2>
      <p>"She is <strong>as tall as</strong> her brother." (aussi grand que)</p>
      <p>"It's not <strong>as expensive as</strong> I thought." (pas aussi cher que)</p>
    `,
    date: '2025-01-11',
    author: 'Antony Addy',
    category: 'Grammaire - Adjectifs',
    readTime: '5 min',
    description: 'Guide complet des comparatifs en anglais : formation, exceptions et exemples pratiques.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'comparatives'
  },
  {
    id: 'superlatifs-en-anglais',
    title: 'Les superlatifs en anglais',
    excerpt: 'Comment exprimer le plus haut degré en anglais ? Maîtrisez les superlatifs avec des règles simples.',
    content: `
      <p>Les <strong>superlatifs</strong> expriment le degré le plus élevé d'une qualité parmi trois éléments ou plus.</p>

      <h2>Adjectifs courts : the + -est</h2>
      <ul>
        <li>tall → <strong>the tallest</strong> : "He is the tallest in the class."</li>
        <li>old → <strong>the oldest</strong> : "This is the oldest building in town."</li>
        <li>fast → <strong>the fastest</strong></li>
      </ul>

      <h2>Adjectifs longs : the most + adj</h2>
      <ul>
        <li>expensive → <strong>the most expensive</strong></li>
        <li>interesting → <strong>the most interesting</strong></li>
        <li>beautiful → <strong>the most beautiful</strong></li>
      </ul>

      <h2>Superlatifs irréguliers</h2>
      <ul>
        <li>good → <strong>the best</strong></li>
        <li>bad → <strong>the worst</strong></li>
        <li>far → <strong>the farthest/furthest</strong></li>
      </ul>

      <h2>Structures courantes</h2>
      <ul>
        <li>"It's <strong>the best</strong> film I've ever seen."</li>
        <li>"She's <strong>one of the most talented</strong> singers in the world."</li>
        <li>"This is <strong>by far the most difficult</strong> exam."</li>
      </ul>
    `,
    date: '2025-01-10',
    author: 'Antony Addy',
    category: 'Grammaire - Adjectifs',
    readTime: '4 min',
    description: 'Maîtrisez les superlatifs en anglais : formation, irréguliers et expressions courantes.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'superlatives'
  },
  {
    id: 'countable-uncountable-nouns',
    title: 'Dénombrables et indénombrables',
    excerpt: 'Some ou any ? Much ou many ? Comprenez la différence entre noms dénombrables et indénombrables.',
    content: `
      <p>En anglais, les noms sont soit <strong>dénombrables</strong> (countable) soit <strong>indénombrables</strong> (uncountable). Cette distinction affecte le vocabulaire utilisé.</p>

      <h2>Noms dénombrables</h2>
      <p>On peut les compter : a book, two books, three books</p>
      <ul>
        <li>Singulier + pluriel : apple/apples, car/cars, idea/ideas</li>
        <li>Quantificateurs : many, few, a few, several, a number of</li>
      </ul>

      <h2>Noms indénombrables</h2>
      <p>On ne peut pas les compter directement : water, music, information</p>
      <ul>
        <li>Pas de pluriel : ❌ waters, musics, informations</li>
        <li>Quantificateurs : much, little, a little, a great deal of</li>
        <li>Pour quantifier : a piece of advice, a glass of water, a slice of bread</li>
      </ul>

      <h2>Catégories d'indénombrables</h2>
      <ul>
        <li><strong>Liquides</strong> : water, milk, coffee, wine</li>
        <li><strong>Matières</strong> : wood, gold, paper, glass</li>
        <li><strong>Concepts abstraits</strong> : advice, information, news, knowledge</li>
        <li><strong>Activités</strong> : homework, work, research</li>
      </ul>

      <h2>Some/Any - How much/How many</h2>
      <ul>
        <li>"<strong>How much</strong> water?" vs "<strong>How many</strong> bottles?"</li>
        <li>"There isn't <strong>much</strong> time." vs "There aren't <strong>many</strong> people."</li>
      </ul>
    `,
    date: '2025-01-09',
    author: 'Antony Addy',
    category: 'Grammaire - Noms',
    readTime: '6 min',
    description: 'Comprenez la différence entre noms dénombrables et indénombrables pour utiliser les bons quantificateurs.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'countable-uncountable'
  },
  {
    id: 'demonstratives-this-that-these-those',
    title: 'This, That, These, Those',
    excerpt: 'Quand utiliser this, that, these ou those ? Maîtrisez les démonstratifs anglais avec des règles simples.',
    content: `
      <p>Les <strong>démonstratifs</strong> permettent de désigner des personnes ou des objets selon leur distance (proche ou éloigné) et leur nombre (singulier ou pluriel).</p>

      <h2>Tableau récapitulatif</h2>
      <table>
        <tr><th></th><th>Proche</th><th>Éloigné</th></tr>
        <tr><td><strong>Singulier</strong></td><td>this</td><td>that</td></tr>
        <tr><td><strong>Pluriel</strong></td><td>these</td><td>those</td></tr>
      </table>

      <h2>THIS / THESE - Proche</h2>
      <ul>
        <li>"<strong>This</strong> book is interesting." (ce livre-ci)</li>
        <li>"<strong>These</strong> shoes are comfortable." (ces chaussures-ci)</li>
        <li>Aussi pour : le présent, ce qui vient d'être mentionné, les présentations téléphoniques</li>
      </ul>

      <h2>THAT / THOSE - Éloigné</h2>
      <ul>
        <li>"<strong>That</strong> building is very old." (ce bâtiment là-bas)</li>
        <li>"<strong>Those</strong> people are waiting for the bus." (ces gens là-bas)</li>
        <li>Aussi pour : le passé, ce qui a été mentionné plus tôt</li>
      </ul>

      <h2>Usages particuliers</h2>
      <ul>
        <li><strong>Au téléphone</strong> : "Hello, <strong>this</strong> is John." (pas "I am")</li>
        <li><strong>Présentations</strong> : "<strong>This</strong> is my colleague, Sarah."</li>
        <li><strong>Référence au temps</strong> : "<strong>This</strong> morning" (aujourd'hui) vs "<strong>That</strong> morning" (ce jour-là, passé)</li>
      </ul>
    `,
    date: '2025-01-08',
    author: 'Antony Addy',
    category: 'Grammaire - Déterminants',
    readTime: '4 min',
    description: 'Guide complet des démonstratifs anglais : this, that, these, those avec exemples et règles.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'demonstratives'
  },
  {
    id: 'conditionals-zero-first-second-third',
    title: 'Les conditionnels en anglais',
    excerpt: 'Maîtrisez les quatre types de conditionnels anglais avec des explications claires et des exemples pratiques.',
    content: `
      <p>L'anglais possède plusieurs types de <strong>conditionnels</strong> selon le degré de probabilité ou de réalité de la situation.</p>

      <h2>Zero Conditional - Vérités générales</h2>
      <p><strong>If + present simple, present simple</strong></p>
      <p>"If you heat water to 100°C, it boils." (toujours vrai)</p>

      <h2>First Conditional - Situations réelles/probables</h2>
      <p><strong>If + present simple, will + infinitif</strong></p>
      <p>"If it rains tomorrow, I will stay home." (possible)</p>

      <h2>Second Conditional - Situations hypothétiques</h2>
      <p><strong>If + past simple, would + infinitif</strong></p>
      <p>"If I won the lottery, I would travel the world." (peu probable/imaginaire)</p>
      <p>Note : "If I <strong>were</strong> you..." (formel, pour les conseils)</p>

      <h2>Third Conditional - Passé irréel (regrets)</h2>
      <p><strong>If + past perfect, would have + participe passé</strong></p>
      <p>"If I had studied harder, I would have passed the exam." (mais je n'ai pas étudié)</p>

      <h2>Résumé visuel</h2>
      <ul>
        <li><strong>Zero</strong> : fait scientifique → présent + présent</li>
        <li><strong>First</strong> : futur probable → présent + will</li>
        <li><strong>Second</strong> : hypothèse présente → passé + would</li>
        <li><strong>Third</strong> : passé irréel → past perfect + would have</li>
      </ul>
    `,
    date: '2025-01-07',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '7 min',
    description: 'Guide complet des conditionnels anglais : Zero, First, Second et Third conditional expliqués.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'conditionals'
  },
  {
    id: 'passive-voice',
    title: 'La voix passive en anglais',
    excerpt: 'Quand et comment utiliser la voix passive en anglais ? Découvrez les règles et transformez vos phrases actives.',
    content: `
      <p>La <strong>voix passive</strong> met l'accent sur l'action ou l'objet plutôt que sur l'auteur de l'action.</p>

      <h2>Formation</h2>
      <p><strong>Sujet + BE (conjugué) + participe passé (+ by + agent)</strong></p>
      <ul>
        <li>Active : "Someone stole my car."</li>
        <li>Passive : "My car <strong>was stolen</strong>."</li>
      </ul>

      <h2>À tous les temps</h2>
      <ul>
        <li>Present Simple : "The office <strong>is cleaned</strong> every day."</li>
        <li>Past Simple : "The letter <strong>was sent</strong> yesterday."</li>
        <li>Present Perfect : "The work <strong>has been completed</strong>."</li>
        <li>Future : "The results <strong>will be announced</strong> tomorrow."</li>
        <li>Modal : "This <strong>can be done</strong> easily."</li>
      </ul>

      <h2>Quand utiliser le passif ?</h2>
      <ul>
        <li><strong>L'auteur est inconnu</strong> : "My bike was stolen."</li>
        <li><strong>L'auteur n'est pas important</strong> : "English is spoken worldwide."</li>
        <li><strong>Contexte formel/scientifique</strong> : "The experiment was conducted..."</li>
        <li><strong>Pour éviter de blâmer</strong> : "Mistakes were made."</li>
      </ul>

      <h2>By + agent</h2>
      <p>On mentionne l'agent seulement s'il apporte une information importante :</p>
      <p>"The Mona Lisa was painted <strong>by Leonardo da Vinci</strong>."</p>
    `,
    date: '2025-01-06',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '6 min',
    description: 'Maîtrisez la voix passive anglaise : formation, usages et transformation de phrases actives.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'passive-voice'
  },
  {
    id: 'phrasal-verbs',
    title: 'Les Phrasal Verbs en anglais',
    excerpt: 'Les phrasal verbs sont incontournables en anglais. Découvrez comment ils fonctionnent et apprenez les plus courants.',
    content: `
      <p>Les <strong>phrasal verbs</strong> sont des verbes composés d'un verbe + une particule (préposition ou adverbe) qui change le sens du verbe.</p>

      <h2>Pourquoi sont-ils difficiles ?</h2>
      <p>Le sens n'est souvent pas déductible des éléments séparés :</p>
      <ul>
        <li>"give up" ≠ "donner vers le haut" → signifie "abandonner"</li>
        <li>"look after" ≠ "regarder après" → signifie "s'occuper de"</li>
      </ul>

      <h2>Séparables vs Inséparables</h2>
      <p><strong>Séparables</strong> - l'objet peut aller au milieu ou après :</p>
      <ul>
        <li>"Turn off the light" = "Turn the light off" ✓</li>
        <li>Avec pronom : "Turn <strong>it</strong> off" (obligatoire au milieu)</li>
      </ul>
      <p><strong>Inséparables</strong> - l'objet va toujours après :</p>
      <ul>
        <li>"Look after the children" ✓</li>
        <li>❌ "Look the children after"</li>
      </ul>

      <h2>Phrasal verbs courants</h2>
      <ul>
        <li><strong>get up</strong> : se lever</li>
        <li><strong>wake up</strong> : se réveiller</li>
        <li><strong>turn on/off</strong> : allumer/éteindre</li>
        <li><strong>look for</strong> : chercher</li>
        <li><strong>find out</strong> : découvrir</li>
        <li><strong>give up</strong> : abandonner</li>
        <li><strong>put off</strong> : reporter</li>
        <li><strong>carry on</strong> : continuer</li>
      </ul>
    `,
    date: '2025-01-05',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '6 min',
    description: 'Guide complet des phrasal verbs anglais : séparables, inséparables et les plus courants à connaître.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'phrasal-verbs'
  },
  {
    id: 'articles-a-an-the',
    title: 'Les articles : A, An, The',
    excerpt: 'Quand utiliser a, an, the ou pas d\'article ? Les règles essentielles pour ne plus hésiter.',
    content: `
      <p>Les <strong>articles</strong> sont l'une des difficultés majeures pour les francophones. Voici les règles essentielles.</p>

      <h2>A / AN - Articles indéfinis</h2>
      <p>Pour quelque chose de <strong>non spécifique</strong>, mentionné pour la première fois :</p>
      <ul>
        <li><strong>A</strong> devant consonne : a book, a house, a university (son "yu")</li>
        <li><strong>AN</strong> devant voyelle (son) : an apple, an hour (h muet), an MBA</li>
      </ul>

      <h2>THE - Article défini</h2>
      <p>Pour quelque chose de <strong>spécifique</strong>, déjà connu ou unique :</p>
      <ul>
        <li>"I saw <strong>a</strong> dog. <strong>The</strong> dog was brown." (déjà mentionné)</li>
        <li>"<strong>The</strong> sun, <strong>the</strong> moon, <strong>the</strong> president" (unique)</li>
        <li>"<strong>The</strong> book you lent me" (spécifié par contexte)</li>
      </ul>

      <h2>Pas d'article (Ø)</h2>
      <ul>
        <li><strong>Généralisations</strong> : "Ø Dogs are loyal." (les chiens en général)</li>
        <li><strong>Noms propres</strong> : Ø France, Ø London, Ø Mount Everest</li>
        <li><strong>Repas, sports, langues</strong> : Ø breakfast, Ø tennis, Ø English</li>
        <li><strong>Certaines expressions</strong> : at Ø work, at Ø home, go to Ø bed</li>
      </ul>

      <h2>Exceptions avec THE</h2>
      <p>the United States, the Netherlands, the Alps, the Pacific Ocean</p>
    `,
    date: '2025-01-04',
    author: 'Antony Addy',
    category: 'Grammaire - Déterminants',
    readTime: '6 min',
    description: 'Maîtrisez les articles anglais a, an, the et l\'article zéro avec des règles claires.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'articles'
  },
  {
    id: 'modal-verbs',
    title: 'Les verbes modaux en anglais',
    excerpt: 'Les modaux expriment la capacité, l\'obligation, la probabilité et plus. Guide complet avec exemples.',
    content: `
      <p>Les <strong>verbes modaux</strong> sont des auxiliaires qui expriment la capacité, la permission, l'obligation, la probabilité, etc.</p>

      <h2>Caractéristiques des modaux</h2>
      <ul>
        <li>Pas de -s à la 3e personne : "He <strong>can</strong> swim" (pas "cans")</li>
        <li>Suivis de l'infinitif sans TO : "You <strong>must go</strong>" (pas "must to go")</li>
        <li>Questions par inversion : "<strong>Can</strong> you help me?"</li>
      </ul>

      <h2>CAN / COULD - Capacité et permission</h2>
      <ul>
        <li><strong>Can</strong> : capacité présente, permission → "I can swim."</li>
        <li><strong>Could</strong> : capacité passée, demande polie → "Could you help me?"</li>
      </ul>

      <h2>MUST / HAVE TO - Obligation</h2>
      <ul>
        <li><strong>Must</strong> : obligation forte/personnelle → "I must study tonight."</li>
        <li><strong>Have to</strong> : obligation externe → "I have to wear a uniform."</li>
        <li><strong>Mustn't</strong> : interdiction ≠ <strong>Don't have to</strong> : pas nécessaire</li>
      </ul>

      <h2>SHOULD / OUGHT TO - Conseil</h2>
      <p>"You <strong>should</strong> see a doctor." (conseil)</p>

      <h2>MAY / MIGHT - Probabilité</h2>
      <ul>
        <li><strong>May</strong> : possibilité (~50%) → "It may rain."</li>
        <li><strong>Might</strong> : possibilité plus faible → "It might rain."</li>
      </ul>

      <h2>WILL / WOULD</h2>
      <ul>
        <li><strong>Will</strong> : futur, volonté → "I will help you."</li>
        <li><strong>Would</strong> : conditionnel, demande polie → "Would you like some tea?"</li>
      </ul>
    `,
    date: '2025-01-03',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '7 min',
    description: 'Guide complet des verbes modaux anglais : can, could, must, should, may, might, will, would.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'modal-verbs'
  },
  {
    id: 'reported-speech',
    title: 'Le discours indirect en anglais',
    excerpt: 'Comment rapporter les paroles de quelqu\'un en anglais ? Les règles du discours indirect expliquées.',
    content: `
      <p>Le <strong>discours indirect</strong> (reported speech) permet de rapporter ce que quelqu'un a dit sans citer ses paroles exactes.</p>

      <h2>Changement de temps (backshift)</h2>
      <p>Quand le verbe introducteur est au passé, les temps reculent :</p>
      <ul>
        <li>Present Simple → Past Simple : "I <strong>am</strong> tired" → He said he <strong>was</strong> tired.</li>
        <li>Present Continuous → Past Continuous : "I <strong>am working</strong>" → She said she <strong>was working</strong>.</li>
        <li>Past Simple → Past Perfect : "I <strong>saw</strong> him" → He said he <strong>had seen</strong> him.</li>
        <li>Will → Would : "I <strong>will</strong> call" → She said she <strong>would</strong> call.</li>
      </ul>

      <h2>Changement de pronoms et références</h2>
      <ul>
        <li>I → he/she : "I am happy" → He said <strong>he</strong> was happy.</li>
        <li>today → that day</li>
        <li>tomorrow → the next day / the following day</li>
        <li>yesterday → the day before / the previous day</li>
        <li>here → there</li>
        <li>this → that</li>
      </ul>

      <h2>Verbes introducteurs</h2>
      <ul>
        <li><strong>say</strong> (sans objet) : He <strong>said</strong> (that) he was tired.</li>
        <li><strong>tell</strong> (+ objet) : He <strong>told me</strong> (that) he was tired.</li>
        <li><strong>ask</strong> (questions) : She <strong>asked</strong> if I was coming.</li>
      </ul>

      <h2>Questions indirectes</h2>
      <ul>
        <li>Yes/No : "Are you coming?" → She asked <strong>if/whether</strong> I was coming.</li>
        <li>Wh- : "Where do you live?" → He asked <strong>where</strong> I lived.</li>
      </ul>
    `,
    date: '2025-01-02',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '7 min',
    description: 'Maîtrisez le discours indirect en anglais : backshift, pronoms et verbes introducteurs.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'reported-speech'
  },
  {
    id: 'relative-clauses',
    title: 'Propositions relatives en anglais',
    excerpt: 'Comment utiliser who, which, that, whose et where pour relier des phrases ? Guide complet des relatives.',
    content: `
      <p>Les <strong>propositions relatives</strong> donnent des informations supplémentaires sur un nom en utilisant un pronom relatif.</p>

      <h2>Les pronoms relatifs</h2>
      <ul>
        <li><strong>WHO</strong> : pour les personnes → "The man <strong>who</strong> called you..."</li>
        <li><strong>WHICH</strong> : pour les choses/animaux → "The book <strong>which</strong> I bought..."</li>
        <li><strong>THAT</strong> : pour les deux (informel) → "The woman <strong>that</strong> works here..."</li>
        <li><strong>WHOSE</strong> : possession → "The girl <strong>whose</strong> father is a doctor..."</li>
        <li><strong>WHERE</strong> : lieu → "The restaurant <strong>where</strong> we met..."</li>
        <li><strong>WHEN</strong> : temps → "The day <strong>when</strong> I arrived..."</li>
      </ul>

      <h2>Relatives définissantes vs non-définissantes</h2>
      <p><strong>Définissantes</strong> (essentielles, pas de virgules) :</p>
      <p>"The woman <strong>who lives next door</strong> is a doctor." (quelle femme ? celle qui habite à côté)</p>
      
      <p><strong>Non-définissantes</strong> (info supplémentaire, avec virgules) :</p>
      <p>"My mother<strong>, who is 65,</strong> still works." (info en plus, pas essentielle)</p>

      <h2>Omission du pronom relatif</h2>
      <p>On peut omettre who/which/that quand c'est l'<strong>objet</strong> de la relative :</p>
      <ul>
        <li>"The book (which/that) I read was great." ✓</li>
        <li>"The man (who/that) I met was nice." ✓</li>
      </ul>
      <p>Mais PAS quand c'est le sujet :</p>
      <p>"The man <strong>who</strong> called is here." (obligatoire)</p>
    `,
    date: '2025-01-01',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '6 min',
    description: 'Guide complet des propositions relatives en anglais : who, which, that, whose et quand les omettre.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'relative-clauses'
  },
  {
    id: 'gerunds-vs-infinitives',
    title: 'Gérondif ou infinitif en anglais',
    excerpt: 'Quand utiliser -ing et quand utiliser to + verbe ? Les règles et listes de verbes à connaître.',
    content: `
      <p>Certains verbes sont suivis du <strong>gérondif</strong> (-ing), d'autres de l'<strong>infinitif</strong> (to + verbe). Comment s'y retrouver ?</p>

      <h2>Verbes + GÉRONDIF (-ing)</h2>
      <p>enjoy, finish, avoid, consider, deny, imagine, mind, practise, suggest, risk, keep, miss</p>
      <ul>
        <li>"I <strong>enjoy reading</strong>."</li>
        <li>"She <strong>finished working</strong> at 6 PM."</li>
        <li>"He <strong>avoids eating</strong> sugar."</li>
      </ul>

      <h2>Verbes + INFINITIF (to + verbe)</h2>
      <p>want, need, decide, hope, expect, plan, promise, refuse, seem, learn, agree, offer</p>
      <ul>
        <li>"I <strong>want to learn</strong> English."</li>
        <li>"She <strong>decided to leave</strong>."</li>
        <li>"He <strong>promised to help</strong>."</li>
      </ul>

      <h2>Verbes + les deux (avec changement de sens)</h2>
      <ul>
        <li><strong>STOP</strong> : "Stop smoking" (arrêter de fumer) vs "Stop to smoke" (s'arrêter pour fumer)</li>
        <li><strong>REMEMBER</strong> : "Remember locking" (se souvenir d'avoir fermé) vs "Remember to lock" (ne pas oublier de fermer)</li>
        <li><strong>TRY</strong> : "Try opening" (essayer comme solution) vs "Try to open" (faire un effort pour)</li>
      </ul>

      <h2>Après les prépositions : toujours -ING</h2>
      <ul>
        <li>"I'm interested <strong>in learning</strong>."</li>
        <li>"She's good <strong>at cooking</strong>."</li>
        <li>"I'm tired <strong>of waiting</strong>."</li>
      </ul>
    `,
    date: '2024-12-31',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '6 min',
    description: 'Maîtrisez le choix entre gérondif (-ing) et infinitif (to) après les verbes anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'gerunds-infinitives'
  },
  {
    id: 'question-tags',
    title: 'Les question tags en anglais',
    excerpt: 'You speak English, don\'t you? Apprenez à former ces petites questions de confirmation en anglais.',
    content: `
      <p>Les <strong>question tags</strong> sont des mini-questions ajoutées en fin de phrase pour demander confirmation ou encourager une réponse.</p>

      <h2>Règle de base</h2>
      <p><strong>Phrase positive → tag négatif</strong> : "You speak English, <strong>don't you</strong>?"</p>
      <p><strong>Phrase négative → tag positif</strong> : "You don't speak French, <strong>do you</strong>?"</p>

      <h2>Formation</h2>
      <p>Reprendre l'auxiliaire de la phrase principale :</p>
      <ul>
        <li>BE : "She is French, <strong>isn't she</strong>?"</li>
        <li>HAVE (auxiliaire) : "You have finished, <strong>haven't you</strong>?"</li>
        <li>Modaux : "He can swim, <strong>can't he</strong>?"</li>
        <li>DO (si pas d'auxiliaire) : "You like coffee, <strong>don't you</strong>?"</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li><strong>I am</strong> → <strong>aren't I</strong> : "I'm late, aren't I?"</li>
        <li><strong>Let's</strong> → <strong>shall we</strong> : "Let's go, shall we?"</li>
        <li><strong>Impératif</strong> → <strong>will you / won't you</strong> : "Open the door, will you?"</li>
        <li><strong>There is</strong> → <strong>isn't there</strong> : "There's a problem, isn't there?"</li>
      </ul>

      <h2>Intonation</h2>
      <ul>
        <li><strong>Intonation descendante</strong> : on attend confirmation (on est sûr)</li>
        <li><strong>Intonation montante</strong> : vraie question (on n'est pas sûr)</li>
      </ul>
    `,
    date: '2024-12-30',
    author: 'Antony Addy',
    category: 'Grammaire - Questions',
    readTime: '5 min',
    description: 'Apprenez à former les question tags en anglais : règles, exceptions et intonation.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'question-tags'
  },
  {
    id: 'so-and-such',
    title: 'So vs Such : quelle différence ?',
    excerpt: 'So ou such pour intensifier ? Découvrez les règles pour exprimer "tellement" en anglais.',
    content: `
      <p><strong>SO</strong> et <strong>SUCH</strong> servent tous deux à intensifier, mais avec des structures différentes.</p>

      <h2>SO + adjectif/adverbe</h2>
      <ul>
        <li>"It was <strong>so hot</strong>!" (tellement chaud)</li>
        <li>"She speaks <strong>so quickly</strong>!" (tellement vite)</li>
        <li>"I'm <strong>so tired</strong>!" (tellement fatigué)</li>
      </ul>

      <h2>SUCH + (a/an) + (adjectif) + nom</h2>
      <ul>
        <li>"It was <strong>such a hot day</strong>!" (une journée tellement chaude)</li>
        <li>"She is <strong>such a nice person</strong>!" (une personne tellement gentille)</li>
        <li>"They are <strong>such good friends</strong>!" (de tellement bons amis)</li>
      </ul>

      <h2>Structures de conséquence</h2>
      <ul>
        <li><strong>SO...THAT</strong> : "It was <strong>so</strong> hot <strong>that</strong> we stayed inside."</li>
        <li><strong>SUCH...THAT</strong> : "It was <strong>such</strong> a hot day <strong>that</strong> we stayed inside."</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li><strong>SO + much/many/little/few</strong> : "There were <strong>so many</strong> people!"</li>
        <li><strong>SUCH + a lot of</strong> : "There was <strong>such a lot of</strong> noise!"</li>
      </ul>

      <h2>Résumé</h2>
      <p><strong>SO</strong> = seul avec adjectif/adverbe</p>
      <p><strong>SUCH</strong> = avec un nom (même modifié par un adjectif)</p>
    `,
    date: '2024-12-29',
    author: 'Antony Addy',
    category: 'Grammaire - Intensifieurs',
    readTime: '4 min',
    description: 'Maîtrisez la différence entre so et such pour exprimer l\'intensité en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'so-such'
  },
  {
    id: 'too-and-enough',
    title: 'Too et Enough en anglais',
    excerpt: 'Too much ou enough ? Apprenez à exprimer ce qui est excessif ou suffisant en anglais.',
    content: `
      <p><strong>TOO</strong> exprime l'excès (trop), <strong>ENOUGH</strong> exprime la suffisance (assez).</p>

      <h2>TOO - Excès (négatif)</h2>
      <p><strong>TOO + adjectif/adverbe</strong> (avant) :</p>
      <ul>
        <li>"It's <strong>too hot</strong>." (trop chaud)</li>
        <li>"You're driving <strong>too fast</strong>." (trop vite)</li>
      </ul>
      <p><strong>TOO MUCH + nom indénombrable</strong> :</p>
      <ul><li>"There's <strong>too much</strong> sugar." (trop de sucre)</li></ul>
      <p><strong>TOO MANY + nom dénombrable pluriel</strong> :</p>
      <ul><li>"There are <strong>too many</strong> people." (trop de gens)</li></ul>

      <h2>ENOUGH - Suffisance</h2>
      <p><strong>Adjectif/adverbe + ENOUGH</strong> (après) :</p>
      <ul>
        <li>"It's warm <strong>enough</strong>." (assez chaud)</li>
        <li>"She speaks clearly <strong>enough</strong>." (assez clairement)</li>
      </ul>
      <p><strong>ENOUGH + nom</strong> (avant) :</p>
      <ul>
        <li>"We have <strong>enough</strong> time." (assez de temps)</li>
        <li>"There aren't <strong>enough</strong> chairs." (pas assez de chaises)</li>
      </ul>

      <h2>Structures avec TO + infinitif</h2>
      <ul>
        <li>"It's <strong>too cold to swim</strong>." (trop froid pour nager)</li>
        <li>"She's <strong>old enough to drive</strong>." (assez âgée pour conduire)</li>
        <li>"I don't have <strong>enough money to buy</strong> it." (pas assez d'argent pour acheter)</li>
      </ul>
    `,
    date: '2024-12-28',
    author: 'Antony Addy',
    category: 'Grammaire - Intensifieurs',
    readTime: '5 min',
    description: 'Apprenez à utiliser too et enough pour exprimer l\'excès et la suffisance en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'too-enough'
  },
  {
    id: 'some-and-any',
    title: 'Some ou Any : les règles clés',
    excerpt: 'Quand utiliser some et quand utiliser any ? Les règles essentielles avec exemples.',
    content: `
      <p><strong>SOME</strong> et <strong>ANY</strong> expriment une quantité indéfinie, mais s'utilisent dans des contextes différents.</p>

      <h2>SOME - Phrases affirmatives</h2>
      <ul>
        <li>"I have <strong>some</strong> money."</li>
        <li>"There are <strong>some</strong> apples in the fridge."</li>
        <li>"I need <strong>some</strong> help."</li>
      </ul>

      <h2>ANY - Questions et négations</h2>
      <ul>
        <li>"Do you have <strong>any</strong> money?"</li>
        <li>"I don't have <strong>any</strong> money."</li>
        <li>"Is there <strong>any</strong> milk left?"</li>
      </ul>

      <h2>Exceptions importantes</h2>
      <p><strong>SOME dans les questions</strong> quand on attend/espère OUI :</p>
      <ul>
        <li>Offres : "Would you like <strong>some</strong> coffee?" (offre polie)</li>
        <li>Demandes : "Can I have <strong>some</strong> water?" (demande polie)</li>
        <li>Suggestions : "Shall we buy <strong>some</strong> flowers?"</li>
      </ul>

      <p><strong>ANY dans les affirmatives</strong> = "n'importe quel" :</p>
      <ul>
        <li>"You can call me <strong>any</strong> time." (à n'importe quel moment)</li>
        <li>"<strong>Any</strong> doctor will tell you the same thing."</li>
      </ul>

      <h2>Composés</h2>
      <ul>
        <li>something/anything, someone/anyone, somewhere/anywhere</li>
        <li>Mêmes règles : "I saw <strong>something</strong>." / "Did you see <strong>anything</strong>?"</li>
      </ul>
    `,
    date: '2024-12-27',
    author: 'Antony Addy',
    category: 'Grammaire - Quantifieurs',
    readTime: '5 min',
    description: 'Maîtrisez l\'utilisation de some et any avec les règles et exceptions essentielles.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'some-any'
  },
  {
    id: 'wish-and-if-only',
    title: 'Wish et If Only en anglais',
    excerpt: 'Comment exprimer des souhaits présents et des regrets passés avec wish et if only.',
    content: `
      <p><strong>WISH</strong> et <strong>IF ONLY</strong> expriment le regret ou le désir que quelque chose soit différent. "If only" est plus emphatique.</p>

      <h2>Souhaits présents (le présent serait différent)</h2>
      <p><strong>WISH/IF ONLY + prétérit</strong></p>
      <ul>
        <li>"I <strong>wish</strong> I <strong>had</strong> more money." (mais je n'en ai pas)</li>
        <li>"<strong>If only</strong> I <strong>were</strong> taller!" (mais je ne le suis pas)</li>
        <li>"I <strong>wish</strong> I <strong>could</strong> speak French." (mais je ne peux pas)</li>
      </ul>

      <h2>Regrets passés (le passé aurait été différent)</h2>
      <p><strong>WISH/IF ONLY + past perfect</strong></p>
      <ul>
        <li>"I <strong>wish</strong> I <strong>had studied</strong> harder." (mais je n'ai pas étudié)</li>
        <li>"<strong>If only</strong> I <strong>hadn't said</strong> that!" (mais je l'ai dit)</li>
      </ul>

      <h2>Habitudes agaçantes (pour les autres)</h2>
      <p><strong>WISH + would + infinitif</strong></p>
      <ul>
        <li>"I <strong>wish</strong> you <strong>would</strong> stop smoking."</li>
        <li>"I <strong>wish</strong> it <strong>would</strong> stop raining."</li>
      </ul>
      <p>⚠️ PAS : "I wish I would..." → utiliser "I wish I could"</p>

      <h2>Were vs Was</h2>
      <ul>
        <li>Formel : "I wish I <strong>were</strong>..."</li>
        <li>Informel : "I wish I <strong>was</strong>..."</li>
      </ul>
    `,
    date: '2024-12-26',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '5 min',
    description: 'Apprenez à exprimer les souhaits et regrets avec wish et if only en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'wish-if-only'
  },
  {
    id: 'make-vs-do',
    title: 'Make vs Do : Les règles pour ne plus confondre',
    excerpt: 'Make a decision ou do a decision ? Apprenez à distinguer make et do avec des listes pratiques.',
    content: `
      <p><strong>MAKE</strong> et <strong>DO</strong> signifient tous deux "faire" mais s'utilisent dans des contextes différents.</p>

      <h2>DO - Tâches et activités générales</h2>
      <ul>
        <li><strong>Tâches domestiques</strong> : do the housework, do the dishes, do the laundry</li>
        <li><strong>Travail/études</strong> : do homework, do a job, do research</li>
        <li><strong>Activités en -ing</strong> : do the shopping, do the cooking, do the cleaning</li>
        <li><strong>Soins personnels</strong> : do your hair, do your nails, do exercise</li>
        <li><strong>Expressions</strong> : do your best, do a favor, do business, do well/badly</li>
      </ul>

      <h2>MAKE - Création et résultats</h2>
      <ul>
        <li><strong>Créer/produire</strong> : make a cake, make coffee, make dinner</li>
        <li><strong>Causer</strong> : make a mistake, make noise, make someone happy</li>
        <li><strong>Plans/décisions</strong> : make a decision, make plans, make an appointment</li>
        <li><strong>Communication</strong> : make a phone call, make a speech, make a comment</li>
        <li><strong>Argent</strong> : make money, make a profit, make a fortune</li>
        <li><strong>Expressions</strong> : make friends, make progress, make an effort, make sense</li>
      </ul>

      <h2>Astuce</h2>
      <p><strong>DO</strong> = activité sans objet concret créé</p>
      <p><strong>MAKE</strong> = quelque chose est créé ou produit</p>
    `,
    date: '2024-12-25',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '5 min',
    description: 'Maîtrisez la différence entre make et do avec des listes d\'expressions courantes.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'make-vs-do'
  },
  {
    id: 'say-vs-tell',
    title: 'Say vs Tell : Comment choisir le bon verbe',
    excerpt: 'He said ou he told me ? Découvrez les règles pour utiliser say et tell correctement.',
    content: `
      <p><strong>SAY</strong> et <strong>TELL</strong> impliquent tous deux de communiquer avec des mots, mais avec des structures différentes.</p>

      <h2>SAY - Focus sur les mots</h2>
      <p>Say + ce qui est dit (pas de complément personne obligatoire)</p>
      <ul>
        <li>"He <strong>said</strong> (that) he was tired."</li>
        <li>"She <strong>said</strong> hello."</li>
        <li>"He <strong>said</strong> to me that..." (avec "to")</li>
      </ul>
      <p><strong>Expressions avec SAY</strong> : say hello/goodbye, say please/thank you, say sorry, say a prayer, say yes/no</p>

      <h2>TELL - Focus sur la personne</h2>
      <p>Tell + personne + ce qui est dit (complément personne obligatoire)</p>
      <ul>
        <li>"He <strong>told me</strong> (that) he was tired."</li>
        <li>"She <strong>told them</strong> to wait."</li>
        <li>"<strong>Tell me</strong> the truth."</li>
      </ul>
      <p><strong>Expressions avec TELL</strong> : tell the truth, tell a lie, tell a story, tell a joke, tell the time, tell the difference</p>

      <h2>Résumé</h2>
      <ul>
        <li><strong>SAY</strong> something (to someone)</li>
        <li><strong>TELL</strong> someone something</li>
      </ul>

      <h2>Erreurs courantes</h2>
      <ul>
        <li>❌ "He said me..." → ✅ "He <strong>told</strong> me..." ou "He <strong>said to</strong> me..."</li>
        <li>❌ "He told that..." → ✅ "He <strong>said</strong> that..."</li>
      </ul>
    `,
    date: '2024-12-24',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '4 min',
    description: 'Apprenez à distinguer say et tell avec les règles et expressions essentielles.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'say-vs-tell'
  },
  {
    id: 'reflexive-pronouns',
    title: 'Les pronoms réfléchis en anglais',
    excerpt: 'Quand utiliser myself, yourself, himself ? Guide complet des pronoms réfléchis anglais.',
    content: `
      <p>Les <strong>pronoms réfléchis</strong> se terminent en -self (singulier) ou -selves (pluriel) et renvoient au sujet.</p>

      <h2>Les formes</h2>
      <ul>
        <li>I → <strong>myself</strong></li>
        <li>you (singulier) → <strong>yourself</strong></li>
        <li>he → <strong>himself</strong></li>
        <li>she → <strong>herself</strong></li>
        <li>it → <strong>itself</strong></li>
        <li>we → <strong>ourselves</strong></li>
        <li>you (pluriel) → <strong>yourselves</strong></li>
        <li>they → <strong>themselves</strong></li>
      </ul>

      <h2>Utilisations</h2>
      <p><strong>1. Sujet et objet identiques</strong></p>
      <ul>
        <li>"I hurt <strong>myself</strong>." (je me suis blessé)</li>
        <li>"She taught <strong>herself</strong> to play piano."</li>
      </ul>

      <p><strong>2. Emphase (pronoms emphatiques)</strong></p>
      <ul>
        <li>"I'll do it <strong>myself</strong>!" (moi-même, pas quelqu'un d'autre)</li>
        <li>"The president <strong>himself</strong> came."</li>
      </ul>

      <p><strong>3. Avec "by" = seul</strong></p>
      <ul>
        <li>"He lives by <strong>himself</strong>." (seul)</li>
        <li>"Did you make this by <strong>yourself</strong>?" (tout seul)</li>
      </ul>

      <h2>Expressions courantes</h2>
      <p>enjoy yourself, behave yourself, help yourself, make yourself at home, introduce yourself</p>
    `,
    date: '2024-12-23',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '5 min',
    description: 'Guide complet des pronoms réfléchis en anglais : formes, utilisations et expressions.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'reflexive-pronouns'
  },
  {
    id: 'subject-object-pronouns',
    title: 'Pronoms sujets et compléments',
    excerpt: 'Quand utiliser I ou me ? He ou him ? Maîtrisez les pronoms sujets et compléments.',
    content: `
      <p>Les <strong>pronoms sujets</strong> font l'action, les <strong>pronoms compléments</strong> reçoivent l'action.</p>

      <h2>Les formes</h2>
      <table>
        <tr><th>Sujet</th><th>Complément</th></tr>
        <tr><td>I</td><td>me</td></tr>
        <tr><td>you</td><td>you</td></tr>
        <tr><td>he</td><td>him</td></tr>
        <tr><td>she</td><td>her</td></tr>
        <tr><td>it</td><td>it</td></tr>
        <tr><td>we</td><td>us</td></tr>
        <tr><td>they</td><td>them</td></tr>
      </table>

      <h2>Pronoms sujets - AVANT le verbe</h2>
      <ul>
        <li>"<strong>I</strong> love chocolate."</li>
        <li>"<strong>She</strong> is my sister."</li>
        <li>"<strong>They</strong> work here."</li>
      </ul>

      <h2>Pronoms compléments - APRÈS le verbe ou préposition</h2>
      <ul>
        <li>"Call <strong>me</strong> later."</li>
        <li>"I saw <strong>him</strong> yesterday."</li>
        <li>"This is for <strong>you</strong>."</li>
      </ul>

      <h2>Erreurs courantes</h2>
      <ul>
        <li>❌ "Me and John went..." → ✅ "<strong>John and I</strong> went..."</li>
        <li>❌ "Between you and I" → ✅ "Between you and <strong>me</strong>"</li>
      </ul>

      <h2>Astuce</h2>
      <p>Pour "X and I" vs "X and me", enlevez "X and" et testez :</p>
      <p>"John and I/me went..." → "I went" ✓ / "Me went" ✗ → <strong>"John and I"</strong></p>
    `,
    date: '2024-12-22',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '5 min',
    description: 'Maîtrisez les pronoms sujets et compléments en anglais avec des règles claires.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'subject-object-pronouns'
  },
  {
    id: 'possessive-adjectives',
    title: 'Les adjectifs possessifs en anglais',
    excerpt: 'My, your, his, her, its, our, their : maîtrisez les adjectifs possessifs anglais.',
    content: `
      <p>Les <strong>adjectifs possessifs</strong> indiquent la possession et viennent AVANT un nom.</p>

      <h2>Les formes</h2>
      <ul>
        <li>I → <strong>my</strong></li>
        <li>you → <strong>your</strong></li>
        <li>he → <strong>his</strong></li>
        <li>she → <strong>her</strong></li>
        <li>it → <strong>its</strong></li>
        <li>we → <strong>our</strong></li>
        <li>they → <strong>their</strong></li>
      </ul>

      <h2>Règles importantes</h2>
      <p><strong>1. Toujours suivis d'un nom</strong></p>
      <ul>
        <li>"This is <strong>my</strong> book." ✓</li>
        <li>"This is <strong>my</strong>." ✗ (utiliser "mine")</li>
      </ul>

      <p><strong>2. Invariables</strong></p>
      <p><strong>my</strong> book / <strong>my</strong> books (pas de changement singulier/pluriel)</p>

      <h2>Pièges courants</h2>
      <p><strong>ITS vs IT'S</strong></p>
      <ul>
        <li><strong>its</strong> = possessif : "The dog wagged <strong>its</strong> tail."</li>
        <li><strong>it's</strong> = it is/has : "<strong>It's</strong> raining."</li>
      </ul>

      <p><strong>THEIR vs THERE vs THEY'RE</strong></p>
      <ul>
        <li><strong>their</strong> = possessif : "<strong>Their</strong> house is big."</li>
        <li><strong>there</strong> = lieu : "over <strong>there</strong>"</li>
        <li><strong>they're</strong> = they are : "<strong>They're</strong> happy."</li>
      </ul>
    `,
    date: '2024-12-21',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '4 min',
    description: 'Guide complet des adjectifs possessifs en anglais : formes et pièges à éviter.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'possessive-adjectives'
  },
  {
    id: 'possessive-pronouns',
    title: 'Les pronoms possessifs en anglais',
    excerpt: 'Mine, yours, his, hers, ours, theirs : utilisez les pronoms possessifs sans nom.',
    content: `
      <p>Les <strong>pronoms possessifs</strong> remplacent "adjectif possessif + nom" et s'utilisent SEULS.</p>

      <h2>Les formes</h2>
      <ul>
        <li>my → <strong>mine</strong></li>
        <li>your → <strong>yours</strong></li>
        <li>his → <strong>his</strong> (même forme)</li>
        <li>her → <strong>hers</strong></li>
        <li>our → <strong>ours</strong></li>
        <li>their → <strong>theirs</strong></li>
      </ul>
      <p>Note : pas de pronom possessif pour "it".</p>

      <h2>Différence clé</h2>
      <ul>
        <li><strong>Adjectif + nom</strong> : "This is <strong>my</strong> book."</li>
        <li><strong>Pronom seul</strong> : "This book is <strong>mine</strong>."</li>
      </ul>

      <h2>Exemples</h2>
      <ul>
        <li>"Is this phone <strong>yours</strong>?" (= your phone)</li>
        <li>"Her car is red. <strong>Mine</strong> is blue." (= my car)</li>
        <li>"Their house is big, but <strong>ours</strong> is bigger." (= our house)</li>
      </ul>

      <h2>Structure "a friend of mine"</h2>
      <ul>
        <li>"A friend of <strong>mine</strong>" = un de mes amis</li>
        <li>"A colleague of <strong>his</strong>" = un de ses collègues</li>
      </ul>

      <h2>Questions courantes</h2>
      <ul>
        <li>"Whose is this?" - "It's <strong>mine</strong>."</li>
        <li>"Is this yours or hers?" - "It's <strong>hers</strong>."</li>
      </ul>
    `,
    date: '2024-12-20',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '4 min',
    description: 'Maîtrisez les pronoms possessifs anglais pour remplacer les groupes nominaux.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'possessive-pronouns'
  },
  {
    id: 'either-neither',
    title: 'Either et Neither en anglais',
    excerpt: 'Either...or, neither...nor, me neither : maîtrisez ces structures de choix et d\'accord.',
    content: `
      <p><strong>EITHER</strong> et <strong>NEITHER</strong> s'utilisent pour parler de deux choses ou personnes.</p>

      <h2>EITHER - L'un ou l'autre</h2>
      <ul>
        <li>"<strong>Either</strong> answer is acceptable." (l'une ou l'autre)</li>
        <li>"Would you like tea or coffee?" - "<strong>Either</strong> is fine." (les deux me vont)</li>
      </ul>

      <h2>NEITHER - Ni l'un ni l'autre</h2>
      <ul>
        <li>"<strong>Neither</strong> of them speaks French." (aucun des deux)</li>
        <li>"Do you want tea or coffee?" - "<strong>Neither</strong>, thanks." (aucun)</li>
      </ul>

      <h2>Either...or / Neither...nor</h2>
      <ul>
        <li>"You can choose <strong>either</strong> the red one <strong>or</strong> the blue one."</li>
        <li>"<strong>Neither</strong> John <strong>nor</strong> Mary came to the party."</li>
      </ul>

      <h2>Expressions d'accord</h2>
      <p><strong>Pour les phrases positives :</strong></p>
      <ul>
        <li>"I love pizza." - "<strong>Me too</strong>!" / "<strong>So do I</strong>!"</li>
      </ul>
      <p><strong>Pour les phrases négatives :</strong></p>
      <ul>
        <li>"I don't like spiders." - "<strong>Me neither</strong>!" / "<strong>Neither do I</strong>!"</li>
        <li>"I can't swim." - "<strong>Neither can</strong> my brother."</li>
      </ul>

      <h2>Accord du verbe</h2>
      <p>Formellement, either/neither + of prend un verbe singulier :</p>
      <p>"<strong>Neither</strong> of them <strong>has</strong> arrived." (formel)</p>
    `,
    date: '2024-12-19',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '5 min',
    description: 'Maîtrisez either et neither pour exprimer le choix et l\'accord en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'either-neither'
  },
  // HIGH PRIORITY LESSONS
  {
    id: 'will-vs-going-to',
    title: 'Will vs Going To en anglais',
    excerpt: 'Will et Going to expriment tous deux le futur mais dans des contextes différents. Découvrez quand utiliser chacun.',
    content: `
      <p>Les deux formes <strong>Will</strong> et <strong>Going to</strong> parlent du futur, mais avec des nuances importantes que tout apprenant doit maîtriser.</p>

      <h2>WILL - Décisions spontanées et prédictions</h2>
      <p>Utilisez <strong>will</strong> pour :</p>
      <ul>
        <li><strong>Décisions prises sur le moment</strong> : "The phone is ringing. I'll answer it."</li>
        <li><strong>Prédictions basées sur une opinion</strong> : "I think it will rain tomorrow."</li>
        <li><strong>Promesses et offres</strong> : "I'll help you with that."</li>
        <li><strong>Faits futurs certains</strong> : "She will be 30 next year."</li>
      </ul>

      <h2>GOING TO - Plans et intentions</h2>
      <p>Utilisez <strong>going to</strong> pour :</p>
      <ul>
        <li><strong>Plans déjà décidés</strong> : "I'm going to visit my parents this weekend." (décidé avant)</li>
        <li><strong>Prédictions basées sur des preuves visibles</strong> : "Look at those clouds! It's going to rain."</li>
        <li><strong>Intentions fermes</strong> : "I'm going to learn Japanese this year."</li>
      </ul>

      <h2>Comparaison directe</h2>
      <ul>
        <li>"I <strong>will</strong> have a coffee." (je viens de décider)</li>
        <li>"I <strong>am going to</strong> have a coffee." (j'avais prévu)</li>
        <li>"It <strong>will</strong> probably snow." (opinion/supposition)</li>
        <li>"Look at the sky! It <strong>is going to</strong> snow." (preuve visible)</li>
      </ul>

      <h2>Astuce mémo</h2>
      <p><strong>Going to</strong> = vous y "allez" déjà mentalement (plan préexistant)<br/>
      <strong>Will</strong> = décision ou prédiction faite maintenant</p>
    `,
    date: '2025-01-25',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '5 min',
    description: 'Comprenez la différence entre Will et Going To pour exprimer le futur en anglais avec des exemples clairs.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'will-going-to'
  },
  {
    id: 'much-many-a-lot-of',
    title: 'Much, Many, A lot of en anglais',
    excerpt: 'Much, many et a lot of expriment tous la quantité mais ne s\'utilisent pas avec les mêmes noms. Voici les règles.',
    content: `
      <p>Exprimer la quantité en anglais nécessite de distinguer les noms <strong>dénombrables</strong> (countable) des noms <strong>indénombrables</strong> (uncountable).</p>

      <h2>MANY - Noms dénombrables (pluriel)</h2>
      <p>Utilisez <strong>many</strong> avec les noms qu'on peut compter :</p>
      <ul>
        <li>"How <strong>many</strong> books do you have?"</li>
        <li>"There aren't <strong>many</strong> students today."</li>
        <li>"She has <strong>many</strong> friends."</li>
      </ul>

      <h2>MUCH - Noms indénombrables (singulier)</h2>
      <p>Utilisez <strong>much</strong> avec les noms qu'on ne peut pas compter :</p>
      <ul>
        <li>"How <strong>much</strong> water do you drink?"</li>
        <li>"I don't have <strong>much</strong> time."</li>
        <li>"There isn't <strong>much</strong> traffic today."</li>
      </ul>

      <h2>A LOT OF - Les deux types</h2>
      <p><strong>A lot of</strong> fonctionne avec les deux types, surtout dans les phrases affirmatives :</p>
      <ul>
        <li>"I have <strong>a lot of</strong> books." (dénombrable)</li>
        <li>"I have <strong>a lot of</strong> work." (indénombrable)</li>
        <li>"She drinks <strong>a lot of</strong> coffee."</li>
      </ul>

      <h2>Règle d'usage</h2>
      <ul>
        <li><strong>Questions et négations</strong> : préférez much/many</li>
        <li><strong>Phrases affirmatives</strong> : préférez a lot of</li>
        <li>❌ "I have much money." → ✅ "I have a lot of money."</li>
      </ul>

      <h2>Noms indénombrables courants</h2>
      <p>water, money, information, advice, news, furniture, luggage, traffic, work, homework, research</p>
    `,
    date: '2025-01-24',
    author: 'Antony Addy',
    category: 'Grammaire - Quantifieurs',
    readTime: '5 min',
    description: 'Maîtrisez much, many et a lot of pour exprimer les quantités correctement en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'much-many-lot'
  },
  {
    id: 'since-vs-for',
    title: 'Since vs For : Exprimer la durée en anglais',
    excerpt: 'Since et For indiquent tous deux la durée mais s\'utilisent différemment. Apprenez à ne plus les confondre.',
    content: `
      <p>La confusion entre <strong>since</strong> et <strong>for</strong> est très courante. Ces deux mots expriment la durée mais de manière différente.</p>

      <h2>FOR - Une durée (combien de temps)</h2>
      <p>Utilisez <strong>for</strong> suivi d'une <strong>période de temps</strong> :</p>
      <ul>
        <li>"I have lived here <strong>for</strong> 5 years."</li>
        <li>"She has been waiting <strong>for</strong> 30 minutes."</li>
        <li>"They worked together <strong>for</strong> a long time."</li>
      </ul>
      <p><strong>Expressions avec for :</strong> for 2 hours, for a week, for months, for ages, for a long time</p>

      <h2>SINCE - Un point de départ (depuis quand)</h2>
      <p>Utilisez <strong>since</strong> suivi d'un <strong>moment précis</strong> :</p>
      <ul>
        <li>"I have lived here <strong>since</strong> 2019."</li>
        <li>"She has been waiting <strong>since</strong> 3 o'clock."</li>
        <li>"I haven't seen him <strong>since</strong> Monday."</li>
      </ul>
      <p><strong>Expressions avec since :</strong> since January, since 2020, since last week, since I was a child, since then</p>

      <h2>Astuce mémo</h2>
      <ul>
        <li><strong>FOR</strong> = "pendant" (durée) → répond à "combien de temps ?"</li>
        <li><strong>SINCE</strong> = "depuis" (point de départ) → répond à "depuis quand ?"</li>
      </ul>

      <h2>Exemples comparés</h2>
      <ul>
        <li>"I've known her <strong>for</strong> 10 years." (10 ans = durée)</li>
        <li>"I've known her <strong>since</strong> 2014." (2014 = moment précis)</li>
      </ul>
    `,
    date: '2025-01-23',
    author: 'Antony Addy',
    category: 'Grammaire - Prépositions',
    readTime: '4 min',
    description: 'Apprenez à distinguer since et for pour exprimer correctement la durée en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'since-for'
  },
  {
    id: 'been-vs-gone',
    title: 'Been vs Gone : Une nuance essentielle',
    excerpt: 'Been et Gone sont les participes passés de "go" mais avec des sens très différents. Voici comment les distinguer.',
    content: `
      <p>La différence entre <strong>been</strong> et <strong>gone</strong> est subtile mais importante. Elle concerne la <strong>localisation actuelle</strong> de la personne.</p>

      <h2>BEEN - Aller et revenir (expérience)</h2>
      <p>Utilisez <strong>has/have been</strong> quand la personne est <strong>revenue</strong> :</p>
      <ul>
        <li>"She <strong>has been</strong> to Paris." (elle y est allée et elle est revenue)</li>
        <li>"I <strong>have been</strong> to the supermarket." (j'en suis revenu)</li>
        <li>"Have you ever <strong>been</strong> to Japan?" (expérience de vie)</li>
      </ul>

      <h2>GONE - Parti (pas encore revenu)</h2>
      <p>Utilisez <strong>has/have gone</strong> quand la personne est <strong>encore là-bas</strong> :</p>
      <ul>
        <li>"She <strong>has gone</strong> to Paris." (elle y est encore)</li>
        <li>"Where is John? He <strong>has gone</strong> to the shops." (il n'est pas là)</li>
        <li>"They <strong>have gone</strong> on holiday." (ils sont partis en vacances)</li>
      </ul>

      <h2>Comparaison directe</h2>
      <ul>
        <li>"Tom <strong>has been</strong> to the bank." → Tom est revenu (il est ici)</li>
        <li>"Tom <strong>has gone</strong> to the bank." → Tom est à la banque (il n'est pas ici)</li>
      </ul>

      <h2>Astuce mémo</h2>
      <p><strong>Been</strong> = aller-retour (B comme "Back")<br/>
      <strong>Gone</strong> = parti (G comme "Got away")</p>

      <h2>Attention</h2>
      <p>On ne peut pas dire "I have gone to Paris" pour parler de soi-même au présent (car si on parle, on est forcément revenu !). On dit "I have been to Paris".</p>
    `,
    date: '2025-01-22',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '4 min',
    description: 'Comprenez la différence essentielle entre been et gone pour ne plus jamais les confondre.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'been-gone'
  },
  {
    id: 'few-a-few-little-a-little',
    title: 'Few/A few vs Little/A little',
    excerpt: 'Few et little expriment une petite quantité, mais avec ou sans "a", le sens change complètement. Découvrez ces nuances.',
    content: `
      <p>La présence ou l'absence de <strong>"a"</strong> devant few et little change le <strong>ton</strong> du message : positif ou négatif.</p>

      <h2>FEW vs A FEW (noms dénombrables)</h2>
      <ul>
        <li><strong>Few</strong> = pas beaucoup, presque pas (négatif)
          <br/>"<strong>Few</strong> people came to the party." (presque personne - décevant)</li>
        <li><strong>A few</strong> = quelques, un petit nombre (positif)
          <br/>"<strong>A few</strong> people came to the party." (quelques personnes - c'est bien)</li>
      </ul>

      <h2>LITTLE vs A LITTLE (noms indénombrables)</h2>
      <ul>
        <li><strong>Little</strong> = pas beaucoup, presque pas (négatif)
          <br/>"I have <strong>little</strong> time." (presque pas de temps - problématique)</li>
        <li><strong>A little</strong> = un peu (positif)
          <br/>"I have <strong>a little</strong> time." (un peu de temps - ça va)</li>
      </ul>

      <h2>Résumé visuel</h2>
      <table>
        <tr><td></td><td><strong>Dénombrable</strong></td><td><strong>Indénombrable</strong></td></tr>
        <tr><td>Positif (+)</td><td>a few</td><td>a little</td></tr>
        <tr><td>Négatif (-)</td><td>few</td><td>little</td></tr>
      </table>

      <h2>Exemples comparés</h2>
      <ul>
        <li>"There is <strong>little</strong> hope." (presque pas d'espoir)</li>
        <li>"There is <strong>a little</strong> hope." (un peu d'espoir)</li>
        <li>"<strong>Few</strong> students passed." (très peu - mauvais résultat)</li>
        <li>"<strong>A few</strong> students passed." (quelques-uns - acceptable)</li>
      </ul>

      <h2>Astuce</h2>
      <p>"A" = une attitude positive (suffisant)<br/>
      Sans "a" = une attitude négative (insuffisant)</p>
    `,
    date: '2025-01-21',
    author: 'Antony Addy',
    category: 'Grammaire - Quantifieurs',
    readTime: '5 min',
    description: 'Maîtrisez les nuances entre few/a few et little/a little pour exprimer la quantité avec précision.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'few-little'
  },
  // MEDIUM PRIORITY LESSONS
  {
    id: 'possessive-adjectives-pronouns',
    title: 'Adjectifs vs pronoms possessifs',
    excerpt: 'My/mine, your/yours, his/his... Apprenez à distinguer les adjectifs possessifs des pronoms possessifs.',
    content: `
      <p>Les <strong>adjectifs possessifs</strong> et les <strong>pronoms possessifs</strong> expriment tous deux la possession, mais ils s'utilisent différemment dans la phrase.</p>

      <h2>Adjectifs possessifs (+ nom)</h2>
      <p>Les adjectifs possessifs sont <strong>toujours suivis d'un nom</strong> :</p>
      <ul>
        <li><strong>my</strong> book, <strong>your</strong> car, <strong>his</strong> phone</li>
        <li><strong>her</strong> bag, <strong>its</strong> tail, <strong>our</strong> house</li>
        <li><strong>their</strong> children</li>
      </ul>
      <p>"This is <strong>my</strong> pen." (adjectif + nom)</p>

      <h2>Pronoms possessifs (remplacent nom)</h2>
      <p>Les pronoms possessifs <strong>remplacent le nom</strong> (pas de nom après) :</p>
      <ul>
        <li><strong>mine</strong>, <strong>yours</strong>, <strong>his</strong></li>
        <li><strong>hers</strong>, <strong>its</strong> (rare), <strong>ours</strong></li>
        <li><strong>theirs</strong></li>
      </ul>
      <p>"This pen is <strong>mine</strong>." (pronom seul)</p>

      <h2>Tableau récapitulatif</h2>
      <table>
        <tr><td>Sujet</td><td>Adj. possessif</td><td>Pronom possessif</td></tr>
        <tr><td>I</td><td>my</td><td>mine</td></tr>
        <tr><td>you</td><td>your</td><td>yours</td></tr>
        <tr><td>he</td><td>his</td><td>his</td></tr>
        <tr><td>she</td><td>her</td><td>hers</td></tr>
        <tr><td>it</td><td>its</td><td>its</td></tr>
        <tr><td>we</td><td>our</td><td>ours</td></tr>
        <tr><td>they</td><td>their</td><td>theirs</td></tr>
      </table>

      <h2>Exemples d'usage</h2>
      <ul>
        <li>"Is this <strong>your</strong> bag?" / "Yes, it's <strong>mine</strong>."</li>
        <li>"<strong>Her</strong> car is red. <strong>Mine</strong> is blue."</li>
        <li>"<strong>Their</strong> house is bigger than <strong>ours</strong>."</li>
      </ul>
    `,
    date: '2025-01-20',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '4 min',
    description: 'Apprenez à distinguer les adjectifs possessifs des pronoms possessifs en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'possessive-adjectives-pronouns'
  },
  {
    id: 'adverbs-of-frequency',
    title: 'Les adverbes de fréquence',
    excerpt: 'Où placer les adverbes de fréquence dans la phrase anglaise ? Découvrez les règles et exceptions.',
    content: `
      <p>Les <strong>adverbes de fréquence</strong> indiquent à quelle fréquence une action se produit. Leur <strong>position</strong> dans la phrase suit des règles précises.</p>

      <h2>Les principaux adverbes de fréquence</h2>
      <p>Du plus fréquent au moins fréquent :</p>
      <ul>
        <li><strong>always</strong> (100%) - toujours</li>
        <li><strong>usually</strong> (80%) - d'habitude</li>
        <li><strong>often</strong> (70%) - souvent</li>
        <li><strong>sometimes</strong> (50%) - parfois</li>
        <li><strong>rarely/seldom</strong> (10%) - rarement</li>
        <li><strong>never</strong> (0%) - jamais</li>
      </ul>

      <h2>Position dans la phrase</h2>
      <p><strong>Règle générale :</strong> AVANT le verbe principal</p>
      <ul>
        <li>"I <strong>always</strong> drink coffee in the morning."</li>
        <li>"She <strong>usually</strong> arrives on time."</li>
        <li>"They <strong>never</strong> eat meat."</li>
      </ul>

      <h2>Exception avec BE</h2>
      <p>Avec le verbe <strong>BE</strong> : APRÈS le verbe</p>
      <ul>
        <li>"He <strong>is always</strong> late."</li>
        <li>"I <strong>am usually</strong> tired on Mondays."</li>
        <li>"They <strong>are never</strong> home."</li>
      </ul>

      <h2>Sometimes : plus flexible</h2>
      <p><strong>Sometimes</strong> peut aller en début ou fin de phrase :</p>
      <ul>
        <li>"<strong>Sometimes</strong> I go to the gym."</li>
        <li>"I go to the gym <strong>sometimes</strong>."</li>
        <li>"I <strong>sometimes</strong> go to the gym."</li>
      </ul>

      <h2>Avec les auxiliaires</h2>
      <p>L'adverbe se place entre l'auxiliaire et le verbe principal :</p>
      <ul>
        <li>"I have <strong>never</strong> been to Japan."</li>
        <li>"She can <strong>always</strong> help you."</li>
      </ul>
    `,
    date: '2025-01-19',
    author: 'Antony Addy',
    category: 'Grammaire - Adverbes',
    readTime: '5 min',
    description: 'Maîtrisez la position des adverbes de fréquence en anglais avec des règles claires.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'adverbs-frequency'
  },
  {
    id: 'causative-have-get',
    title: 'Le causatif : Have et Get',
    excerpt: 'Comment dire "faire faire" en anglais ? Découvrez les structures causatives avec have et get.',
    content: `
      <p>Les structures <strong>causatives</strong> permettent d'exprimer qu'on fait faire une action par quelqu'un d'autre.</p>

      <h2>HAVE something done</h2>
      <p>Structure : <strong>have + objet + participe passé</strong></p>
      <ul>
        <li>"I <strong>had</strong> my car <strong>repaired</strong>." (J'ai fait réparer ma voiture)</li>
        <li>"She <strong>has</strong> her hair <strong>cut</strong> every month." (Elle se fait couper les cheveux)</li>
        <li>"We <strong>had</strong> our house <strong>painted</strong>." (Nous avons fait peindre notre maison)</li>
      </ul>

      <h2>GET something done</h2>
      <p>Structure : <strong>get + objet + participe passé</strong></p>
      <ul>
        <li>"I need to <strong>get</strong> my phone <strong>fixed</strong>."</li>
        <li>"Where can I <strong>get</strong> this document <strong>translated</strong>?"</li>
        <li>"You should <strong>get</strong> your eyes <strong>tested</strong>."</li>
      </ul>

      <h2>Différence have vs get</h2>
      <ul>
        <li><strong>Have</strong> : plus formel, neutre</li>
        <li><strong>Get</strong> : plus informel, implique parfois plus d'effort</li>
      </ul>

      <h2>Faire faire PAR quelqu'un</h2>
      <p>Pour préciser qui fait l'action :</p>
      <ul>
        <li><strong>Have someone do</strong> : "I'll <strong>have</strong> the mechanic <strong>check</strong> the brakes."</li>
        <li><strong>Get someone to do</strong> : "I'll <strong>get</strong> him <strong>to help</strong> us."</li>
      </ul>

      <h2>Expériences négatives</h2>
      <p>Le causatif peut aussi exprimer une expérience subie :</p>
      <ul>
        <li>"I <strong>had</strong> my wallet <strong>stolen</strong>." (On m'a volé mon portefeuille)</li>
        <li>"She <strong>got</strong> her phone <strong>broken</strong>." (Son téléphone a été cassé)</li>
      </ul>
    `,
    date: '2025-01-18',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '5 min',
    description: 'Apprenez à utiliser les structures causatives have et get pour exprimer "faire faire" en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'causative-have-get'
  },
  {
    id: 'order-of-adjectives',
    title: "L'ordre des adjectifs en anglais",
    excerpt: 'En anglais, les adjectifs suivent un ordre précis. Découvrez la règle OSASCOMP pour ne plus vous tromper.',
    content: `
      <p>Quand plusieurs adjectifs décrivent un nom, ils suivent un <strong>ordre spécifique</strong> en anglais. Cet ordre est naturel pour les natifs mais doit être appris.</p>

      <h2>La règle OSASCOMP</h2>
      <ul>
        <li><strong>O</strong>pinion (beautiful, lovely, awful)</li>
        <li><strong>S</strong>ize (big, small, tiny)</li>
        <li><strong>A</strong>ge (old, new, young)</li>
        <li><strong>S</strong>hape (round, square, long)</li>
        <li><strong>C</strong>olor (red, blue, green)</li>
        <li><strong>O</strong>rigin (French, Japanese, Italian)</li>
        <li><strong>M</strong>aterial (wooden, metal, cotton)</li>
        <li><strong>P</strong>urpose (sleeping [bag], running [shoes])</li>
      </ul>

      <h2>Exemples</h2>
      <ul>
        <li>"A <strong>beautiful</strong> <strong>big</strong> <strong>old</strong> house" (opinion + size + age)</li>
        <li>"A <strong>small</strong> <strong>round</strong> <strong>wooden</strong> table" (size + shape + material)</li>
        <li>"An <strong>expensive</strong> <strong>new</strong> <strong>Italian</strong> car" (opinion + age + origin)</li>
        <li>"<strong>Lovely</strong> <strong>long</strong> <strong>black</strong> hair" (opinion + shape + color)</li>
      </ul>

      <h2>En pratique</h2>
      <p>On utilise rarement plus de 3 adjectifs. Voici les combinaisons courantes :</p>
      <ul>
        <li>Opinion + autre : "a <strong>nice</strong> <strong>big</strong> garden"</li>
        <li>Size + age : "a <strong>small</strong> <strong>old</strong> cottage"</li>
        <li>Color + origin : "<strong>red</strong> <strong>Italian</strong> wine"</li>
      </ul>

      <h2>Ce qui sonne faux</h2>
      <ul>
        <li>❌ "A wooden big table"</li>
        <li>✅ "A big wooden table"</li>
        <li>❌ "A French old lovely cheese"</li>
        <li>✅ "A lovely old French cheese"</li>
      </ul>
    `,
    date: '2025-01-17',
    author: 'Antony Addy',
    category: 'Grammaire - Adjectifs',
    readTime: '5 min',
    description: "Maîtrisez l'ordre des adjectifs en anglais avec la règle OSASCOMP et des exemples pratiques.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'order-adjectives'
  },
  {
    id: 'determiners',
    title: 'Les déterminants : all, both, each, every, no',
    excerpt: 'All, both, each, every, no : ces déterminants ont des usages précis. Apprenez à les utiliser correctement.',
    content: `
      <p>Les <strong>déterminants</strong> précisent de quels éléments on parle. Voici les règles pour les plus courants.</p>

      <h2>ALL - Tous (3+)</h2>
      <ul>
        <li><strong>All</strong> + nom pluriel : "<strong>All</strong> students must attend."</li>
        <li><strong>All</strong> + the/my/etc. + nom : "<strong>All</strong> the books are here."</li>
        <li><strong>All of</strong> + pronom : "<strong>All of</strong> them passed."</li>
      </ul>

      <h2>BOTH - Les deux (exactement 2)</h2>
      <ul>
        <li>"<strong>Both</strong> options are good." (2 options)</li>
        <li>"<strong>Both of</strong> my parents work."</li>
        <li>"They <strong>both</strong> speak French." (position après le sujet)</li>
      </ul>

      <h2>EACH - Chacun (individuellement)</h2>
      <ul>
        <li>"<strong>Each</strong> student has a book." (chaque élève, un par un)</li>
        <li>"<strong>Each of</strong> the rooms is different."</li>
        <li>Verbe au <strong>singulier</strong> : "<strong>Each</strong> person <strong>is</strong> responsible."</li>
      </ul>

      <h2>EVERY - Chaque (ensemble)</h2>
      <ul>
        <li>"<strong>Every</strong> student passed." (tous les étudiants comme groupe)</li>
        <li>"I go there <strong>every</strong> day."</li>
        <li>Verbe au <strong>singulier</strong> : "<strong>Every</strong> child <strong>needs</strong> love."</li>
        <li>❌ "<strong>Every of</strong>" n'existe pas</li>
      </ul>

      <h2>NO - Aucun</h2>
      <ul>
        <li>"<strong>No</strong> students came." = "Not any students came."</li>
        <li>"There is <strong>no</strong> time."</li>
        <li>"<strong>No one</strong> knows." / "<strong>Nobody</strong> knows."</li>
      </ul>

      <h2>Each vs Every</h2>
      <ul>
        <li><strong>Each</strong> : focus sur l'individu (peut être 2+)</li>
        <li><strong>Every</strong> : focus sur le groupe (3+)</li>
        <li>"<strong>Each</strong> twin has their own room." (2 jumeaux, individuellement)</li>
        <li>"<strong>Every</strong> employee received a bonus." (tous ensemble)</li>
      </ul>
    `,
    date: '2025-01-16',
    author: 'Antony Addy',
    category: 'Grammaire - Déterminants',
    readTime: '5 min',
    description: 'Maîtrisez les déterminants all, both, each, every et no en anglais avec des exemples.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'determiners'
  },
  // LOWER PRIORITY LESSONS
  {
    id: 'had-better-would-rather',
    title: 'Had Better vs Would Rather',
    excerpt: "Had better exprime un conseil fort, would rather une préférence. Découvrez comment les utiliser.",
    content: `
      <p><strong>Had better</strong> et <strong>would rather</strong> sont deux expressions utiles pour donner des conseils et exprimer des préférences.</p>

      <h2>HAD BETTER - Conseil fort / Avertissement</h2>
      <p>Structure : <strong>had better + verbe base</strong> (sans "to")</p>
      <ul>
        <li>"You <strong>had better</strong> hurry or you'll miss the train."</li>
        <li>"We <strong>had better</strong> leave now."</li>
        <li>"You <strong>had better not</strong> be late." (forme négative)</li>
      </ul>
      <p><strong>Sens :</strong> conseil avec conséquence négative implicite si non suivi.</p>
      <p><strong>Contraction :</strong> "You'd better go."</p>

      <h2>WOULD RATHER - Préférence</h2>
      <p>Structure : <strong>would rather + verbe base</strong> (sans "to")</p>
      <ul>
        <li>"I <strong>would rather</strong> stay home tonight."</li>
        <li>"She <strong>would rather not</strong> talk about it."</li>
        <li>"<strong>Would</strong> you <strong>rather</strong> have tea or coffee?"</li>
      </ul>
      <p><strong>Contraction :</strong> "I'd rather go."</p>

      <h2>Would rather + proposition</h2>
      <p>Quand on préfère que quelqu'un d'autre fasse quelque chose :</p>
      <p>Structure : <strong>would rather + sujet + past simple</strong></p>
      <ul>
        <li>"I'd rather <strong>you didn't</strong> smoke here."</li>
        <li>"She'd rather <strong>he came</strong> tomorrow."</li>
      </ul>

      <h2>Comparaison</h2>
      <ul>
        <li><strong>Had better</strong> = conseil/avertissement (tu ferais mieux)</li>
        <li><strong>Would rather</strong> = préférence personnelle (je préférerais)</li>
      </ul>
    `,
    date: '2025-01-15',
    author: 'Antony Addy',
    category: 'Grammaire - Expressions',
    readTime: '5 min',
    description: "Apprenez à utiliser had better et would rather pour donner des conseils et exprimer des préférences.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'had-better-would-rather'
  },
  {
    id: 'although-despite-however',
    title: 'Although, Despite, However',
    excerpt: 'Ces trois mots expriment tous un contraste, mais avec des structures différentes. Voici comment les utiliser.',
    content: `
      <p><strong>Although</strong>, <strong>despite</strong> et <strong>however</strong> expriment tous un <strong>contraste</strong> ou une concession, mais leur utilisation grammaticale diffère.</p>

      <h2>ALTHOUGH - Bien que (+ proposition)</h2>
      <p>Structure : <strong>although + sujet + verbe</strong></p>
      <ul>
        <li>"<strong>Although</strong> it was raining, we went out."</li>
        <li>"I enjoyed the film <strong>although</strong> it was long."</li>
        <li>"<strong>Although</strong> she's young, she's very mature."</li>
      </ul>
      <p>Synonymes : <strong>though</strong>, <strong>even though</strong></p>

      <h2>DESPITE / IN SPITE OF - Malgré (+ nom/gérondif)</h2>
      <p>Structure : <strong>despite + nom / -ing</strong></p>
      <ul>
        <li>"<strong>Despite</strong> the rain, we went out."</li>
        <li>"<strong>Despite</strong> being tired, she kept working."</li>
        <li>"He passed <strong>in spite of</strong> the difficulties."</li>
      </ul>
      <p>⚠️ Jamais suivi directement d'un verbe conjugué</p>

      <h2>HOWEVER - Cependant (connecteur)</h2>
      <p>Relie deux phrases indépendantes :</p>
      <ul>
        <li>"It was raining. <strong>However</strong>, we went out."</li>
        <li>"The test was hard. <strong>However</strong>, most students passed."</li>
      </ul>
      <p><strong>Ponctuation :</strong> virgule après however</p>

      <h2>Récapitulatif</h2>
      <ul>
        <li><strong>Although</strong> it rained... (+ phrase complète)</li>
        <li><strong>Despite</strong> the rain... (+ nom)</li>
        <li><strong>Despite</strong> raining... (+ -ing)</li>
        <li>It rained. <strong>However</strong>, we... (nouvelle phrase)</li>
      </ul>

      <h2>Conversions</h2>
      <p>"<strong>Although</strong> he was sick, he came to work."<br/>
      = "<strong>Despite</strong> being sick, he came to work."<br/>
      = "He was sick. <strong>However</strong>, he came to work."</p>
    `,
    date: '2025-01-14',
    author: 'Antony Addy',
    category: 'Grammaire - Connecteurs',
    readTime: '5 min',
    description: 'Maîtrisez although, despite et however pour exprimer le contraste en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'although-despite-however'
  },
  {
    id: 'still-yet-already',
    title: 'Still, Yet, Already : Le timing des actions',
    excerpt: 'Still, yet et already parlent tous du temps, mais dans des contextes différents. Apprenez à les distinguer.',
    content: `
      <p><strong>Still</strong>, <strong>yet</strong> et <strong>already</strong> sont souvent confondus. Ils parlent tous du <strong>timing</strong> d'une action mais avec des nuances importantes.</p>

      <h2>STILL - Toujours / Encore (action continue)</h2>
      <p>L'action <strong>continue</strong> alors qu'on pourrait s'attendre à ce qu'elle soit terminée :</p>
      <ul>
        <li>"He's <strong>still</strong> sleeping." (il dort encore)</li>
        <li>"I <strong>still</strong> live with my parents." (toujours)</li>
        <li>"Do you <strong>still</strong> work there?"</li>
      </ul>
      <p><strong>Position :</strong> avant le verbe principal / après BE</p>

      <h2>YET - Déjà / Encore (questions et négations)</h2>
      <p>Pour demander si quelque chose s'est passé ou dire que non :</p>
      <ul>
        <li>"Have you finished <strong>yet</strong>?" (déjà terminé ?)</li>
        <li>"I haven't eaten <strong>yet</strong>." (pas encore)</li>
        <li>"She hasn't called <strong>yet</strong>."</li>
      </ul>
      <p><strong>Position :</strong> en fin de phrase</p>

      <h2>ALREADY - Déjà (plus tôt que prévu)</h2>
      <p>L'action s'est produite <strong>plus tôt qu'attendu</strong> :</p>
      <ul>
        <li>"I've <strong>already</strong> finished." (c'est fait)</li>
        <li>"She's <strong>already</strong> here!" (déjà là, surprise)</li>
        <li>"Have you <strong>already</strong> seen this film?" (si vite ?)</li>
      </ul>
      <p><strong>Position :</strong> avant le participe passé / en fin de phrase</p>

      <h2>Comparaison</h2>
      <ul>
        <li>"He's <strong>still</strong> working." (il travaille toujours)</li>
        <li>"He hasn't finished <strong>yet</strong>." (il n'a pas encore fini)</li>
        <li>"He's <strong>already</strong> finished!" (il a déjà fini !)</li>
      </ul>

      <h2>Still + négatif (surprise/irritation)</h2>
      <p>"He <strong>still</strong> hasn't called me." (toujours pas - frustration)</p>
    `,
    date: '2025-01-13',
    author: 'Antony Addy',
    category: 'Grammaire - Adverbes',
    readTime: '5 min',
    description: 'Comprenez la différence entre still, yet et already pour parler du timing en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'still-yet-already'
  },
  {
    id: 'unless-as-long-as-provided',
    title: 'Unless, As long as, Provided : Les conditions',
    excerpt: 'Ces expressions introduisent des conditions de différentes manières. Découvrez leurs nuances.',
    content: `
      <p><strong>Unless</strong>, <strong>as long as</strong> et <strong>provided</strong> introduisent tous des <strong>conditions</strong>, mais avec des nuances différentes.</p>

      <h2>UNLESS - Sauf si / À moins que</h2>
      <p>Condition <strong>négative</strong> : = "if... not"</p>
      <ul>
        <li>"I'll go <strong>unless</strong> it rains." (= if it doesn't rain)</li>
        <li>"<strong>Unless</strong> you hurry, you'll be late."</li>
        <li>"Don't call me <strong>unless</strong> it's urgent."</li>
      </ul>
      <p>⚠️ Ne pas utiliser "not" après unless (double négation)</p>

      <h2>AS LONG AS - Tant que / À condition que</h2>
      <p>Condition <strong>nécessaire</strong> pour que quelque chose se produise :</p>
      <ul>
        <li>"You can go <strong>as long as</strong> you finish your homework."</li>
        <li>"I'll help you <strong>as long as</strong> you listen."</li>
        <li>"<strong>As long as</strong> you're happy, I'm happy."</li>
      </ul>
      <p>Synonyme : <strong>so long as</strong></p>

      <h2>PROVIDED (THAT) - À condition que (formel)</h2>
      <p>Condition <strong>formelle</strong>, souvent écrite :</p>
      <ul>
        <li>"You can leave early <strong>provided</strong> you finish your work."</li>
        <li>"<strong>Provided that</strong> everyone agrees, we'll proceed."</li>
        <li>"The event will happen <strong>providing</strong> the weather is good."</li>
      </ul>
      <p>Variantes : <strong>provided that</strong>, <strong>providing</strong></p>

      <h2>Comparaison</h2>
      <ul>
        <li><strong>Unless</strong> = condition négative (sauf si)</li>
        <li><strong>As long as</strong> = condition positive (tant que)</li>
        <li><strong>Provided</strong> = condition formelle (à condition que)</li>
      </ul>

      <h2>Exemples équivalents</h2>
      <p>"I'll come <strong>unless</strong> I'm busy." (sauf si je suis occupé)<br/>
      "I'll come <strong>as long as</strong> I'm free." (tant que je suis libre)<br/>
      "I'll come <strong>provided</strong> I have time." (à condition d'avoir le temps)</p>
    `,
    date: '2025-01-12',
    author: 'Antony Addy',
    category: 'Grammaire - Connecteurs',
    readTime: '5 min',
    description: 'Maîtrisez unless, as long as et provided pour exprimer des conditions en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'unless-as-long-as-provided'
  },
  {
    id: 'bring-vs-take',
    title: 'Bring vs Take : Une question de direction',
    excerpt: 'Bring et Take dépendent de la direction du mouvement. Apprenez à choisir le bon verbe selon le contexte.',
    content: `
      <p>La distinction entre <strong>BRING</strong> et <strong>TAKE</strong> repose sur la direction du mouvement par rapport au locuteur.</p>

      <h2>La règle de base</h2>
      <ul>
        <li><strong>BRING</strong> : mouvement VERS le locuteur ou le lieu de référence</li>
        <li><strong>TAKE</strong> : mouvement LOIN du locuteur ou du lieu de référence</li>
      </ul>

      <h2>Exemples avec BRING (vers moi)</h2>
      <ul>
        <li>"<strong>Bring</strong> me a glass of water, please." (apporte vers moi)</li>
        <li>"Can you <strong>bring</strong> your notes to the meeting?" (vers le lieu de la réunion)</li>
        <li>"Don't forget to <strong>bring</strong> your passport." (ici, où je suis)</li>
      </ul>

      <h2>Exemples avec TAKE (loin de moi)</h2>
      <ul>
        <li>"<strong>Take</strong> this book to the library." (emmène loin d'ici)</li>
        <li>"I'll <strong>take</strong> you to the airport." (emmener vers un autre lieu)</li>
        <li>"Don't forget to <strong>take</strong> your umbrella." (emporter en partant)</li>
      </ul>

      <h2>Astuce visuelle</h2>
      <p>Imaginez une flèche :</p>
      <ul>
        <li>→ vers vous = BRING</li>
        <li>← loin de vous = TAKE</li>
      </ul>

      <h2>Attention au contexte</h2>
      <p>"Can I <strong>bring</strong> a friend to the party?" (le locuteur sera à la fête)<br/>
      "Can I <strong>take</strong> a friend to the party?" (le locuteur parle depuis un autre lieu)</p>
    `,
    date: '2026-01-02',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Comprenez la différence entre Bring et Take selon la direction du mouvement.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'bring-vs-take'
  },
  {
    id: 'lend-vs-borrow',
    title: 'Lend vs Borrow : Qui donne et qui reçoit ?',
    excerpt: 'Lend et Borrow sont souvent inversés. Découvrez la différence simple entre ces deux verbes.',
    content: `
      <p>La confusion entre <strong>LEND</strong> et <strong>BORROW</strong> vient du fait qu'ils décrivent la même action mais de perspectives opposées.</p>

      <h2>La différence fondamentale</h2>
      <ul>
        <li><strong>LEND</strong> = prêter (je donne temporairement)</li>
        <li><strong>BORROW</strong> = emprunter (je reçois temporairement)</li>
      </ul>

      <h2>Exemples avec LEND</h2>
      <ul>
        <li>"Can you <strong>lend</strong> me £20?" (peux-tu me prêter)</li>
        <li>"I <strong>lent</strong> him my car." (je lui ai prêté)</li>
        <li>"The bank <strong>lends</strong> money." (la banque prête)</li>
      </ul>

      <h2>Exemples avec BORROW</h2>
      <ul>
        <li>"Can I <strong>borrow</strong> your pen?" (puis-je emprunter)</li>
        <li>"She <strong>borrowed</strong> a book from the library." (elle a emprunté)</li>
        <li>"He always <strong>borrows</strong> money from his friends." (il emprunte toujours)</li>
      </ul>

      <h2>Structure importante</h2>
      <ul>
        <li><strong>LEND</strong> something <strong>TO</strong> someone</li>
        <li><strong>BORROW</strong> something <strong>FROM</strong> someone</li>
      </ul>

      <h2>Astuce mémorisation</h2>
      <p>Pensez à la direction de l'objet :<br/>
      <strong>LEND</strong> → l'objet part de moi<br/>
      <strong>BORROW</strong> → l'objet vient vers moi</p>
    `,
    date: '2026-01-01',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Ne confondez plus Lend et Borrow grâce à cette explication claire avec des exemples.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'lend-vs-borrow'
  },
  {
    id: 'learn-vs-teach',
    title: 'Learn vs Teach : Apprendre ou enseigner ?',
    excerpt: 'Learn et Teach sont parfois confondus. Découvrez comment les utiliser correctement.',
    content: `
      <p>En français, "apprendre" peut signifier à la fois "learn" et "teach". En anglais, ces deux verbes sont bien distincts.</p>

      <h2>La différence</h2>
      <ul>
        <li><strong>LEARN</strong> = apprendre (acquérir des connaissances)</li>
        <li><strong>TEACH</strong> = enseigner/apprendre à quelqu'un (transmettre des connaissances)</li>
      </ul>

      <h2>Exemples avec LEARN</h2>
      <ul>
        <li>"I'm <strong>learning</strong> English." (J'apprends l'anglais)</li>
        <li>"She <strong>learned</strong> to drive last year." (Elle a appris à conduire)</li>
        <li>"We <strong>learn</strong> from our mistakes." (On apprend de nos erreurs)</li>
      </ul>

      <h2>Exemples avec TEACH</h2>
      <ul>
        <li>"She <strong>teaches</strong> English." (Elle enseigne l'anglais)</li>
        <li>"My father <strong>taught</strong> me to swim." (Mon père m'a appris à nager)</li>
        <li>"Can you <strong>teach</strong> me how to do this?" (Peux-tu m'apprendre ?)</li>
      </ul>

      <h2>Erreur fréquente</h2>
      <p>❌ "He learned me English." → ✅ "He taught me English."<br/>
      ❌ "I will teach to drive." → ✅ "I will learn to drive."</p>

      <h2>Astuce</h2>
      <p>Si vous êtes l'élève → LEARN<br/>
      Si vous êtes le professeur → TEACH</p>
    `,
    date: '2025-12-31',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Maîtrisez la différence entre Learn et Teach pour ne plus les confondre.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'learn-vs-teach'
  },
  {
    id: 'look-see-watch',
    title: 'Look, See, Watch : Trois façons de regarder',
    excerpt: 'Ces trois verbes signifient "regarder" mais s\'utilisent dans des contextes différents. Découvrez leurs nuances.',
    content: `
      <p>En anglais, <strong>LOOK</strong>, <strong>SEE</strong> et <strong>WATCH</strong> expriment l'action de voir mais avec des nuances importantes.</p>

      <h2>SEE : perception passive</h2>
      <p><strong>SEE</strong> = voir (sans effort particulier, involontairement)</p>
      <ul>
        <li>"I can <strong>see</strong> the mountains from here." (Je vois)</li>
        <li>"Did you <strong>see</strong> that car?" (As-tu vu)</li>
        <li>"I <strong>saw</strong> him at the supermarket." (Je l'ai vu par hasard)</li>
      </ul>

      <h2>LOOK : regarder activement</h2>
      <p><strong>LOOK</strong> = regarder (effort volontaire, attention dirigée)</p>
      <ul>
        <li>"<strong>Look</strong> at this photo!" (Regarde cette photo !)</li>
        <li>"She <strong>looked</strong> out of the window." (Elle a regardé par la fenêtre)</li>
        <li>"I'm <strong>looking</strong> for my keys." (Je cherche)</li>
      </ul>

      <h2>WATCH : observer avec attention</h2>
      <p><strong>WATCH</strong> = regarder quelque chose qui bouge ou change</p>
      <ul>
        <li>"We <strong>watched</strong> a film last night." (Nous avons regardé un film)</li>
        <li>"I love <strong>watching</strong> football." (J'aime regarder le foot)</li>
        <li>"<strong>Watch</strong> the children while I'm out." (Surveille les enfants)</li>
      </ul>

      <h2>Résumé</h2>
      <ul>
        <li><strong>SEE</strong> = perception involontaire</li>
        <li><strong>LOOK</strong> = diriger son regard (moment bref)</li>
        <li><strong>WATCH</strong> = observer avec attention (durée)</li>
      </ul>
    `,
    date: '2025-12-30',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '5 min',
    description: 'Apprenez à différencier Look, See et Watch selon le contexte et l\'intention.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'look-see-watch'
  },
  {
    id: 'hear-vs-listen',
    title: 'Hear vs Listen : Entendre ou écouter ?',
    excerpt: 'La différence entre Hear et Listen est simple mais essentielle. Découvrez comment les utiliser.',
    content: `
      <p>Comme pour Look/See/Watch, la différence entre <strong>HEAR</strong> et <strong>LISTEN</strong> repose sur l'intention et l'attention.</p>

      <h2>HEAR : perception passive</h2>
      <p><strong>HEAR</strong> = entendre (perception automatique, sans effort)</p>
      <ul>
        <li>"I can <strong>hear</strong> music." (J'entends de la musique)</li>
        <li>"Did you <strong>hear</strong> that noise?" (As-tu entendu ce bruit ?)</li>
        <li>"I <strong>heard</strong> someone calling my name." (J'ai entendu quelqu'un)</li>
      </ul>

      <h2>LISTEN : attention active</h2>
      <p><strong>LISTEN (TO)</strong> = écouter (effort conscient, attention dirigée)</p>
      <ul>
        <li>"I'm <strong>listening to</strong> music." (J'écoute de la musique)</li>
        <li>"<strong>Listen</strong> carefully!" (Écoute bien !)</li>
        <li>"She never <strong>listens to</strong> my advice." (Elle n'écoute jamais mes conseils)</li>
      </ul>

      <h2>Structure importante</h2>
      <ul>
        <li>HEAR + objet direct : "I hear music."</li>
        <li>LISTEN + TO + objet : "I listen to music."</li>
      </ul>

      <h2>Exemples comparatifs</h2>
      <ul>
        <li>"I <strong>heard</strong> the doorbell ring." (perception involontaire)</li>
        <li>"Were you <strong>listening</strong>?" (Est-ce que tu écoutais attentivement ?)</li>
        <li>"I <strong>heard</strong> what you said, but I wasn't really <strong>listening</strong>." (J'ai entendu, mais je n'écoutais pas vraiment)</li>
      </ul>
    `,
    date: '2025-12-29',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Comprenez la différence entre Hear et Listen selon l\'intention et l\'attention.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'hear-vs-listen'
  },
  {
    id: 'speak-vs-talk',
    title: 'Speak vs Talk : Quand les utiliser ?',
    excerpt: 'Speak et Talk sont proches mais pas interchangeables. Découvrez leurs différences subtiles.',
    content: `
      <p><strong>SPEAK</strong> et <strong>TALK</strong> signifient tous deux "parler" mais ont des nuances d'usage importantes.</p>

      <h2>SPEAK : plus formel</h2>
      <p><strong>SPEAK</strong> est souvent plus formel et utilisé pour :</p>
      <ul>
        <li><strong>Les langues</strong> : "I speak French and English."</li>
        <li><strong>Discours officiels</strong> : "The CEO spoke at the conference."</li>
        <li><strong>Au téléphone</strong> : "May I speak to Mr. Smith?"</li>
        <li><strong>Capacité générale</strong> : "She can speak three languages."</li>
      </ul>

      <h2>TALK : plus informel</h2>
      <p><strong>TALK</strong> implique généralement une conversation :</p>
      <ul>
        <li><strong>Conversations</strong> : "We talked for hours."</li>
        <li><strong>Sujets spécifiques</strong> : "Let's talk about the project."</li>
        <li><strong>Discussions</strong> : "I need to talk to you."</li>
        <li><strong>Bavardage</strong> : "They were talking during the film."</li>
      </ul>

      <h2>Expressions figées</h2>
      <ul>
        <li><strong>SPEAK</strong> : speak your mind, speak up, speak volumes</li>
        <li><strong>TALK</strong> : talk nonsense, talk sense, talk shop, small talk</li>
      </ul>

      <h2>Résumé</h2>
      <p><strong>SPEAK</strong> = acte de parler (unilatéral ou formel)<br/>
      <strong>TALK</strong> = échanger (bilatéral, conversation)</p>
    `,
    date: '2025-12-28',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Maîtrisez les nuances entre Speak et Talk pour parler anglais naturellement.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'speak-vs-talk'
  },
  {
    id: 'rise-vs-raise',
    title: 'Rise vs Raise : Transitif ou intransitif ?',
    excerpt: 'Rise et Raise sont souvent confondus. La clé est de comprendre si le verbe a un objet direct ou non.',
    content: `
      <p>La différence entre <strong>RISE</strong> et <strong>RAISE</strong> repose sur une règle grammaticale simple.</p>

      <h2>La règle fondamentale</h2>
      <ul>
        <li><strong>RISE</strong> (intransitif) = monter/s'élever (PAS d'objet direct)</li>
        <li><strong>RAISE</strong> (transitif) = lever/augmenter (AVEC objet direct)</li>
      </ul>

      <h2>RISE : le sujet monte lui-même</h2>
      <ul>
        <li>"The sun <strong>rises</strong> in the east." (Le soleil se lève)</li>
        <li>"Prices are <strong>rising</strong>." (Les prix augmentent)</li>
        <li>"She <strong>rose</strong> from her chair." (Elle s'est levée)</li>
        <li>Conjugaison : rise - rose - risen</li>
      </ul>

      <h2>RAISE : le sujet fait monter quelque chose</h2>
      <ul>
        <li>"<strong>Raise</strong> your hand." (Lève ta main)</li>
        <li>"They <strong>raised</strong> prices." (Ils ont augmenté les prix)</li>
        <li>"He <strong>raised</strong> the flag." (Il a hissé le drapeau)</li>
        <li>Conjugaison : raise - raised - raised</li>
      </ul>

      <h2>Autres sens de RAISE</h2>
      <ul>
        <li>Élever des enfants : "She raised three children."</li>
        <li>Collecter des fonds : "We raised £5000 for charity."</li>
        <li>Soulever une question : "He raised an important issue."</li>
      </ul>
    `,
    date: '2025-12-27',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Apprenez à distinguer Rise (intransitif) et Raise (transitif) facilement.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'rise-vs-raise'
  },
  {
    id: 'lie-vs-lay',
    title: 'Lie vs Lay : Le piège grammatical classique',
    excerpt: 'Même les anglophones natifs confondent Lie et Lay. Voici comment ne plus faire cette erreur.',
    content: `
      <p>La confusion entre <strong>LIE</strong> et <strong>LAY</strong> est si courante qu'elle pose problème même aux anglophones natifs.</p>

      <h2>La règle</h2>
      <ul>
        <li><strong>LIE</strong> (intransitif) = être allongé (PAS d'objet)</li>
        <li><strong>LAY</strong> (transitif) = poser/déposer (AVEC objet)</li>
      </ul>

      <h2>LIE : s'allonger, être couché</h2>
      <ul>
        <li>"I need to <strong>lie</strong> down." (Je dois m'allonger)</li>
        <li>"The book <strong>lies</strong> on the table." (Le livre est posé sur)</li>
        <li>"She was <strong>lying</strong> on the sofa." (Elle était allongée)</li>
        <li>Conjugaison : lie - lay - lain (attention au passé !)</li>
      </ul>

      <h2>LAY : poser quelque chose</h2>
      <ul>
        <li>"<strong>Lay</strong> the book on the table." (Pose le livre)</li>
        <li>"She <strong>laid</strong> the baby in the crib." (Elle a posé le bébé)</li>
        <li>"Hens <strong>lay</strong> eggs." (Les poules pondent des œufs)</li>
        <li>Conjugaison : lay - laid - laid</li>
      </ul>

      <h2>La source de confusion</h2>
      <p>Le passé de LIE (lay) est identique au présent de LAY !</p>
      <ul>
        <li>"I <strong>lay</strong> on the beach yesterday." (passé de lie = j'étais allongé)</li>
        <li>"I <strong>lay</strong> the towel on the sand." (présent de lay = je pose)</li>
      </ul>
    `,
    date: '2025-12-26',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '5 min',
    description: 'Maîtrisez enfin la différence entre Lie et Lay avec cette explication détaillée.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'lie-vs-lay'
  },
  {
    id: 'fun-vs-funny',
    title: 'Fun vs Funny : Amusant ou drôle ?',
    excerpt: 'Fun et Funny sont souvent confondus. Découvrez leurs différences de sens et d\'usage.',
    content: `
      <p>Bien que <strong>FUN</strong> et <strong>FUNNY</strong> se traduisent souvent par "amusant", ils ont des sens distincts.</p>

      <h2>FUN : agréable, divertissant</h2>
      <p><strong>FUN</strong> décrit quelque chose d'agréable et plaisant :</p>
      <ul>
        <li>"The party was <strong>fun</strong>." (La fête était amusante)</li>
        <li>"We had <strong>fun</strong> at the beach." (On s'est bien amusés)</li>
        <li>"It's <strong>fun</strong> to play video games." (C'est amusant de jouer)</li>
        <li>FUN est souvent un nom : "Have fun!" (Amuse-toi !)</li>
      </ul>

      <h2>FUNNY : qui fait rire / étrange</h2>
      <p><strong>FUNNY</strong> a deux sens :</p>
      <ul>
        <li><strong>Drôle, comique</strong> : "He told a <strong>funny</strong> joke." (une blague drôle)</li>
        <li><strong>Bizarre, étrange</strong> : "There's something <strong>funny</strong> about him." (quelque chose de bizarre)</li>
        <li>"That's <strong>funny</strong>!" peut signifier "C'est drôle !" ou "C'est bizarre !"</li>
      </ul>

      <h2>Comparaison</h2>
      <ul>
        <li>"The film was <strong>fun</strong>." (agréable à regarder, divertissant)</li>
        <li>"The film was <strong>funny</strong>." (il m'a fait rire)</li>
        <li>"It was <strong>fun</strong> to be with him." (agréable)</li>
        <li>"He's very <strong>funny</strong>." (il me fait rire / il est bizarre)</li>
      </ul>
    `,
    date: '2025-12-25',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Comprenez la différence entre Fun (agréable) et Funny (drôle/bizarre).',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'fun-vs-funny'
  },
  {
    id: 'actually-currently',
    title: 'Actually vs Currently : Les faux amis à éviter',
    excerpt: 'Actually ne signifie pas "actuellement" ! Découvrez ce faux ami classique et comment l\'éviter.',
    content: `
      <p><strong>ACTUALLY</strong> est l'un des faux amis les plus courants entre le français et l'anglais.</p>

      <h2>ACTUALLY ≠ Actuellement</h2>
      <p><strong>ACTUALLY</strong> = en fait, vraiment, à vrai dire</p>
      <ul>
        <li>"<strong>Actually</strong>, I don't agree." (En fait, je ne suis pas d'accord)</li>
        <li>"It was <strong>actually</strong> quite good." (C'était vraiment assez bien)</li>
        <li>"What <strong>actually</strong> happened?" (Que s'est-il vraiment passé ?)</li>
      </ul>

      <h2>CURRENTLY = Actuellement</h2>
      <p><strong>CURRENTLY</strong> = en ce moment, actuellement</p>
      <ul>
        <li>"I'm <strong>currently</strong> working on a project." (Je travaille actuellement sur un projet)</li>
        <li>"She's <strong>currently</strong> in London." (Elle est actuellement à Londres)</li>
        <li>"We <strong>currently</strong> have 50 employees." (Nous avons actuellement 50 employés)</li>
      </ul>

      <h2>Autres équivalents de "actuellement"</h2>
      <ul>
        <li><strong>At the moment</strong> : "I'm busy at the moment."</li>
        <li><strong>Right now</strong> : "I can't talk right now."</li>
        <li><strong>Presently</strong> (formel) : "The CEO is presently unavailable."</li>
      </ul>

      <h2>Erreur classique</h2>
      <p>❌ "I'm actually living in Paris." (ça veut dire "en fait, je vis à Paris")<br/>
      ✅ "I'm currently living in Paris." (actuellement)</p>
    `,
    date: '2025-12-23',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Évitez le faux ami Actually vs Currently et parlez anglais plus naturellement.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'actually-currently'
  },
  {
    id: 'fairly-quite-rather',
    title: 'Fairly, Quite, Rather : Nuances d\'intensité',
    excerpt: 'Ces trois adverbes modifient l\'intensité des adjectifs. Découvrez leurs différences subtiles.',
    content: `
      <p><strong>FAIRLY</strong>, <strong>QUITE</strong> et <strong>RATHER</strong> sont des modificateurs d'intensité souvent mal utilisés.</p>

      <h2>FAIRLY : assez (modéré)</h2>
      <p><strong>FAIRLY</strong> exprime une intensité modérée, neutre :</p>
      <ul>
        <li>"The film was <strong>fairly</strong> good." (Le film était assez bien)</li>
        <li>"It's <strong>fairly</strong> easy." (C'est assez facile)</li>
        <li>"She's <strong>fairly</strong> tall." (Elle est assez grande)</li>
        <li>Intensité : environ 60-70%</li>
      </ul>

      <h2>QUITE : plutôt / assez (peut être fort)</h2>
      <p><strong>QUITE</strong> peut avoir deux sens selon le contexte :</p>
      <ul>
        <li>Avec adjectifs gradables : "It's <strong>quite</strong> good." (assez bien)</li>
        <li>Avec adjectifs absolus : "It's <strong>quite</strong> amazing!" (vraiment incroyable)</li>
        <li>Intensité variable : 70-90%</li>
      </ul>

      <h2>RATHER : plutôt (plus fort, parfois négatif)</h2>
      <p><strong>RATHER</strong> est plus fort et peut exprimer une surprise ou une nuance négative :</p>
      <ul>
        <li>"It was <strong>rather</strong> expensive." (C'était plutôt cher - un peu trop)</li>
        <li>"I'm <strong>rather</strong> tired." (Je suis plutôt fatigué)</li>
        <li>"The book was <strong>rather</strong> boring." (Le livre était plutôt ennuyeux)</li>
        <li>Intensité : 75-85%</li>
      </ul>

      <h2>Échelle d'intensité</h2>
      <p>FAIRLY < QUITE < RATHER < VERY</p>
    `,
    date: '2025-12-22',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '5 min',
    description: 'Maîtrisez Fairly, Quite et Rather pour nuancer vos descriptions en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'fairly-quite-rather'
  },
  {
    id: 'classic-vs-classical',
    title: 'Classic vs Classical en anglais',
    excerpt: 'Classic et Classical ne sont pas interchangeables. Découvrez quand utiliser chacun.',
    content: `
      <p><strong>CLASSIC</strong> et <strong>CLASSICAL</strong> ont des sens distincts malgré leur apparence similaire.</p>

      <h2>CLASSIC : typique, emblématique, intemporel</h2>
      <p>Quelque chose de reconnu comme excellent ou typique :</p>
      <ul>
        <li>"It's a <strong>classic</strong> mistake." (une erreur typique/classique)</li>
        <li>"Casablanca is a <strong>classic</strong> film." (un film emblématique)</li>
        <li>"That's <strong>classic</strong> John!" (C'est bien John !)</li>
        <li>"<strong>Classic</strong> car" (voiture de collection, emblématique)</li>
      </ul>

      <h2>CLASSICAL : lié à l'Antiquité ou à la tradition formelle</h2>
      <p>Se réfère à une tradition formelle ou à l'Antiquité :</p>
      <ul>
        <li>"<strong>Classical</strong> music" (musique classique - Mozart, Beethoven)</li>
        <li>"<strong>Classical</strong> architecture" (architecture gréco-romaine)</li>
        <li>"<strong>Classical</strong> languages" (grec et latin)</li>
        <li>"<strong>Classical</strong> ballet" (ballet classique traditionnel)</li>
      </ul>

      <h2>Comparaison directe</h2>
      <ul>
        <li>"<strong>Classic</strong> rock" (rock emblématique des années 70-80)</li>
        <li>"<strong>Classical</strong> music" (musique savante occidentale)</li>
        <li>"A <strong>classic</strong> example" (un exemple typique)</li>
        <li>"<strong>Classical</strong> studies" (études des civilisations antiques)</li>
      </ul>
    `,
    date: '2025-12-21',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Comprenez la différence entre Classic (typique) et Classical (traditionnel/antique).',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'classic-vs-classical'
  },
  {
    id: 'economic-vs-economical',
    title: 'Economic vs Economical : Ne les confondez plus',
    excerpt: 'Ces deux adjectifs ont des sens très différents. Découvrez comment les distinguer.',
    content: `
      <p><strong>ECONOMIC</strong> et <strong>ECONOMICAL</strong> sont souvent confondus mais ont des sens bien distincts.</p>

      <h2>ECONOMIC : lié à l'économie</h2>
      <p>Relatif à l'économie, aux finances, au système économique :</p>
      <ul>
        <li>"The <strong>economic</strong> crisis" (la crise économique)</li>
        <li>"<strong>Economic</strong> growth" (la croissance économique)</li>
        <li>"<strong>Economic</strong> policy" (la politique économique)</li>
        <li>"<strong>Economic</strong> forecast" (prévisions économiques)</li>
      </ul>

      <h2>ECONOMICAL : rentable, qui fait des économies</h2>
      <p>Qui permet d'économiser de l'argent ou des ressources :</p>
      <ul>
        <li>"This car is very <strong>economical</strong>." (cette voiture est économique/consomme peu)</li>
        <li>"An <strong>economical</strong> solution" (une solution rentable)</li>
        <li>"It's more <strong>economical</strong> to buy in bulk." (plus économique d'acheter en gros)</li>
        <li>"She's very <strong>economical</strong> with her money." (elle est économe)</li>
      </ul>

      <h2>Astuce mémorisation</h2>
      <p><strong>ECONOMIC</strong> = "of the economy" (de l'économie)<br/>
      <strong>ECONOMICAL</strong> = "saves money" (qui économise)</p>

      <h2>Expressions courantes</h2>
      <ul>
        <li>"<strong>Economic</strong> development" (développement économique)</li>
        <li>"<strong>Economical</strong> with the truth" (qui enjolive la vérité)</li>
      </ul>
    `,
    date: '2025-12-20',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Maîtrisez la différence entre Economic (économie) et Economical (économique/rentable).',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'economic-vs-economical'
  },
  {
    id: 'historic-vs-historical',
    title: 'Historic vs Historical : Quelle différence ?',
    excerpt: 'Historic et Historical ne sont pas synonymes. Apprenez à les utiliser correctement.',
    content: `
      <p><strong>HISTORIC</strong> et <strong>HISTORICAL</strong> sont souvent interchangés à tort.</p>

      <h2>HISTORIC : important dans l'histoire</h2>
      <p>Quelque chose qui a marqué l'histoire, qui est mémorable :</p>
      <ul>
        <li>"A <strong>historic</strong> moment" (un moment historique, mémorable)</li>
        <li>"The <strong>historic</strong> moon landing" (l'alunissage historique)</li>
        <li>"A <strong>historic</strong> victory" (une victoire historique)</li>
        <li>"This is a <strong>historic</strong> occasion." (une occasion mémorable)</li>
      </ul>

      <h2>HISTORICAL : relatif à l'histoire</h2>
      <p>Qui concerne l'histoire comme discipline ou le passé :</p>
      <ul>
        <li>"<strong>Historical</strong> documents" (documents historiques)</li>
        <li>"A <strong>historical</strong> novel" (un roman historique)</li>
        <li>"<strong>Historical</strong> accuracy" (exactitude historique)</li>
        <li>"<strong>Historical</strong> research" (recherche historique)</li>
      </ul>

      <h2>Comparaison</h2>
      <ul>
        <li>"A <strong>historic</strong> building" (bâtiment qui a marqué l'histoire)</li>
        <li>"A <strong>historical</strong> building" (bâtiment ancien, du passé)</li>
        <li>"<strong>Historic</strong> speech" (discours mémorable)</li>
        <li>"<strong>Historical</strong> speech" (discours du passé, dans un contexte historique)</li>
      </ul>

      <h2>Astuce</h2>
      <p><strong>HISTORIC</strong> = "made history" (a fait l'histoire)<br/>
      <strong>HISTORICAL</strong> = "about history" (à propos de l'histoire)</p>
    `,
    date: '2025-12-19',
    author: 'Antony Addy',
    category: 'Vocabulaire',
    readTime: '4 min',
    description: 'Distinguez Historic (mémorable) et Historical (relatif à l\'histoire) avec des exemples clairs.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'historic-vs-historical'
  },
  {
    id: 'used-to-be-used-to',
    title: 'Used to vs Be used to',
    excerpt: 'Ces deux expressions sont souvent confondues. Découvrez leurs différences de sens et de structure.',
    content: `
      <p><strong>USED TO</strong> et <strong>BE USED TO</strong> expriment des concepts différents liés aux habitudes.</p>

      <h2>USED TO : habitude passée (qui n'existe plus)</h2>
      <p>Structure : <strong>used to + infinitif</strong></p>
      <ul>
        <li>"I <strong>used to</strong> smoke." (Je fumais - je ne fume plus)</li>
        <li>"She <strong>used to</strong> live in Paris." (Elle vivait à Paris)</li>
        <li>"We <strong>used to</strong> play together." (On jouait ensemble)</li>
        <li>Négation : "I didn't use to like coffee."</li>
        <li>Question : "Did you use to work here?"</li>
      </ul>

      <h2>BE USED TO : être habitué à</h2>
      <p>Structure : <strong>be used to + nom/gérondif (-ing)</strong></p>
      <ul>
        <li>"I <strong>am used to</strong> the noise." (Je suis habitué au bruit)</li>
        <li>"She <strong>is used to</strong> working late." (Elle est habituée à travailler tard)</li>
        <li>"I'm not <strong>used to</strong> driving on the left." (Je ne suis pas habitué à...)</li>
      </ul>

      <h2>GET USED TO : s'habituer à</h2>
      <p>Pour exprimer le processus d'habituation :</p>
      <ul>
        <li>"I'm <strong>getting used to</strong> my new job." (Je m'habitue à...)</li>
        <li>"You'll <strong>get used to</strong> it." (Tu t'y habitueras)</li>
      </ul>

      <h2>Résumé</h2>
      <p><strong>USED TO</strong> + infinitif = habitude passée<br/>
      <strong>BE USED TO</strong> + -ing/nom = être habitué<br/>
      <strong>GET USED TO</strong> + -ing/nom = s'habituer</p>
    `,
    date: '2025-12-18',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '5 min',
    description: 'Maîtrisez Used to et Be used to pour parler des habitudes passées et présentes en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'used-to-be-used-to'
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
