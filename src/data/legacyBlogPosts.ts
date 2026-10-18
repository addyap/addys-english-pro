/**
 * The three original blog articles, written before the grammar series moved to
 * src/data/grammarBlogPosts.ts. They used to live inside the BlogArticle
 * component, where routes.tsx could not reach them, so `getStaticPaths` never
 * emitted static HTML for them: /blog/<id> 404'd on direct access and to
 * crawlers, while in-app navigation worked because the client router rendered
 * them from memory.
 *
 * They live here so routes.tsx and scripts/generate-sitemap.mjs can see them.
 */

export interface ArticleData {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  description: string;
  ogImage: string;
}

// Mirror of EXPERIENCE_FLOOR in src/lib/utils.ts, computed locally rather than
// imported: scripts/generate-sitemap.mjs loads this file under Node's native TS
// type-stripping, which can't resolve the '@/' alias. Keep the 2005 start year
// in sync with src/lib/utils.ts.
const EXPERIENCE_FLOOR = Math.floor((new Date().getFullYear() - 2005) / 10) * 10;

export const legacyBlogPosts: Record<string, ArticleData> = {
  'anglais-professionnel-competence-cle': {
    title: "L'anglais professionnel, une compétence clé",
    content: `
      <p>Dans un monde professionnel de plus en plus globalisé, maîtriser l'anglais n'est plus un simple atout sur le CV : c'est devenu une nécessité pour évoluer dans sa carrière et rester compétitif. Mais « anglais professionnel » recouvre des réalités très concrètes. Savoir lesquelles vous concernent est la première étape pour progresser vite.</p>

      <h2>Ce que « anglais professionnel » veut vraiment dire</h2>
      <p>On ne vous demandera pas de commenter Shakespeare. On vous demandera de vous débrouiller dans quatre grandes situations :</p>
      <ul>
        <li><strong>Les réunions</strong> : suivre la discussion, donner votre avis, poser une question, demander une précision.</li>
        <li><strong>Les emails et messages</strong> : écrire vite, clairement et au bon niveau de politesse.</li>
        <li><strong>Le téléphone et la visio</strong> : comprendre sans le langage corporel, faire répéter, confirmer un accord.</li>
        <li><strong>Les présentations et négociations</strong> : structurer un message, convaincre, répondre aux objections.</li>
      </ul>
      <p>La plupart des professionnels n'ont pas besoin des quatre au même niveau. Un technicien lira surtout de la documentation et écrira des emails ; un commercial passera ses journées au téléphone. Votre formation doit suivre votre réalité, pas un manuel générique.</p>

      <h2>L'anglais : langue universelle des affaires</h2>
      <p>L'anglais s'impose comme la langue commune des échanges internationaux. Clients étrangers, réunions avec des équipes dispersées, documentation technique, logiciels, normes de votre secteur : il est partout. Et le plus souvent, vous échangerez avec d'autres non-natifs. L'objectif n'est donc pas un accent parfait, mais un anglais <strong>clair, précis et compréhensible</strong> par tous.</p>

      <h2>Les secteurs les plus demandeurs</h2>
      <p>Certains domaines sont particulièrement exigeants :</p>
      <ul>
        <li><strong>Le commerce international</strong> : négociation, relation client, présentation de produits.</li>
        <li><strong>Les technologies et l'industrie</strong> : documentation, support, collaboration avec des équipes internationales.</li>
        <li><strong>Le tourisme et l'hôtellerie</strong> : accueil d'une clientèle internationale, gestion des réclamations.</li>
        <li><strong>La finance et le conseil</strong> : rapports, analyses, échanges avec des partenaires étrangers.</li>
        <li><strong>La santé et la recherche</strong> : publications, congrès, essais et partenariats internationaux.</li>
      </ul>

      <h2>Quel niveau viser ?</h2>
      <p>Le Cadre européen commun de référence (CECRL) donne des repères utiles :</p>
      <ul>
        <li><strong>B1</strong> : vous gérez les situations courantes et prévisibles (emails simples, échanges de routine), avec des hésitations.</li>
        <li><strong>B2</strong> : vous participez activement à une réunion, défendez un point de vue et comprenez l'essentiel d'un échange rapide. C'est le niveau attendu dans la plupart des postes à dimension internationale.</li>
        <li><strong>C1</strong> : vous menez une réunion ou une négociation avec aisance et nuance, et vous adaptez votre registre sans effort.</li>
      </ul>
      <p>À titre indicatif, Cambridge English estime à environ 200 heures d'apprentissage guidé le passage d'un niveau au suivant. D'où l'intérêt de cibler vos situations prioritaires plutôt que tout l'anglais à la fois.</p>

      <h2>Les blocages les plus fréquents</h2>
      <ul>
        <li><strong>La compréhension orale</strong> : on comprend un texte écrit, mais on décroche face à un débit rapide ou à un accent inhabituel.</li>
        <li><strong>La peur de l'erreur</strong> : on préfère se taire en réunion plutôt que risquer une faute. Or une phrase imparfaite mais claire vaut mieux qu'un silence.</li>
        <li><strong>Un vocabulaire passif</strong> : on reconnaît les mots, mais ils ne viennent pas au moment de parler.</li>
      </ul>

      <h2>Comment développer son anglais professionnel : une méthode en 5 étapes</h2>
      <ol>
        <li><strong>Faites un diagnostic</strong> : situez votre niveau à l'oral comme à l'écrit, compétence par compétence.</li>
        <li><strong>Partez de vos situations réelles</strong> : listez les réunions, appels et documents de votre semaine type.</li>
        <li><strong>Constituez un répertoire de phrases-clés</strong> pour chacune : ouvrir une réunion, relancer un client, exprimer un désaccord poliment.</li>
        <li><strong>Pratiquez peu mais souvent</strong> : 15 à 20 minutes par jour valent mieux qu'une longue séance par semaine.</li>
        <li><strong>Mettez-vous en situation avec un retour</strong> : jeux de rôle, simulations d'appel, relecture de vos vrais emails par un formateur.</li>
      </ol>
      <p>Pour aller plus loin sur une situation précise, consultez nos guides sur l'<a href="/blog/email-professionnel-en-anglais">email professionnel</a>, le <a href="/blog/anglais-telephone-visio">téléphone et la visio</a> et la <a href="/blog/presentation-en-anglais">présentation en anglais</a>.</p>

      <h2>En résumé</h2>
      <p>L'anglais professionnel n'est pas un niveau abstrait : c'est la capacité à gérer vos réunions, emails, appels et présentations avec clarté. Visez le niveau dont votre poste a besoin (souvent B2), concentrez-vous sur vos situations réelles et pratiquez régulièrement avec un retour. Pour savoir où vous en êtes, faites le <a href="/test-de-positionnement">test de positionnement gratuit</a>, puis découvrez les <a href="/offres-de-formation">formations proposées</a>.</p>
    `,
    date: '2026-01-15',
    author: 'Antony Addy',
    category: 'Conseils carrière',
    readTime: '3 min',
    description: "Pourquoi l'anglais professionnel est devenu une compétence indispensable au travail, et comment la développer efficacement.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  },
  'erreurs-francophones': {
    title: 'Erreurs des francophones en anglais',
    content: `
      <p>En tant que formateur d'anglais pour francophones depuis plus de ${EXPERIENCE_FLOOR} ans, j'ai identifié les erreurs les plus récurrentes. Bonne nouvelle : elles sont prévisibles, car elles viennent presque toutes du français. Une fois qu'on les connaît, on les évite. Voici les principales, avec la version correcte à retenir.</p>

      <h2>Les faux-amis : ces mots qui nous trompent</h2>
      <p>Ils ressemblent à un mot français mais n'ont pas le même sens. Les plus fréquents au travail :</p>
      <ul>
        <li><strong>"Actually"</strong> ne signifie pas "actuellement" mais "en fait, en réalité". Actuellement = <em>currently</em>.</li>
        <li><strong>"Eventually"</strong> ne veut pas dire "éventuellement" mais "finalement". Éventuellement = <em>possibly</em>.</li>
        <li><strong>"Sensible"</strong> signifie "sensé, raisonnable". Sensible = <em>sensitive</em>.</li>
        <li><strong>"To assist"</strong> veut dire "aider". Assister à une réunion = <em>to attend a meeting</em>.</li>
        <li><strong>"Formation"</strong> ne désigne pas une formation professionnelle : on dit <em>training</em> ou <em>course</em>.</li>
        <li><strong>"Agenda"</strong> est l'ordre du jour d'une réunion. Votre agenda personnel = <em>diary</em> ou <em>calendar</em>.</li>
        <li><strong>"Library"</strong> est une bibliothèque. Une librairie = <em>bookshop</em>.</li>
        <li><strong>"To pretend"</strong> signifie "faire semblant". Prétendre = <em>to claim</em>.</li>
      </ul>

      <h2>Les temps : le piège du passé composé</h2>
      <p>Le present perfect ne se traduit pas automatiquement par le passé composé. Dès qu'il y a un moment précis et terminé, on utilise le prétérit :</p>
      <p>❌ "I have seen him yesterday."<br>
      ✅ "I saw him yesterday."</p>
      <p>À l'inverse, pour une action qui dure jusqu'à maintenant, le français utilise le présent, l'anglais le present perfect :</p>
      <p>❌ "I am since 10 years in this company."<br>
      ✅ "I have been in this company for 10 years."</p>
      <p>Retenez : <strong>for</strong> + une durée (for 10 years), <strong>since</strong> + un point de départ (since 2016).</p>

      <h2>Les structures calquées sur le français</h2>

      <h3>Les verbes et leurs prépositions</h3>
      <p>❌ "I am interested by this project." → ✅ "I am interested <strong>in</strong> this project."<br>
      ❌ "It depends of the budget." → ✅ "It depends <strong>on</strong> the budget."<br>
      ❌ "Can you explain me the process?" → ✅ "Can you explain the process <strong>to me</strong>?"</p>

      <h3>"Être d'accord"</h3>
      <p>❌ "I am agree." → ✅ "I agree." En anglais, <em>agree</em> est un verbe, pas un adjectif.</p>

      <h3>Les noms indénombrables</h3>
      <p><em>Information</em>, <em>advice</em>, <em>feedback</em>, <em>equipment</em> ne prennent pas de "s" :</p>
      <p>❌ "Thank you for the informations." → ✅ "Thank you for the information."<br>
      ❌ "Can you give me some advices?" → ✅ "Can you give me some advice?" (ou "a piece of advice")</p>

      <h3>L'ordre des mots</h3>
      <p>On ne place pas l'adverbe entre le verbe et son complément :</p>
      <p>❌ "I speak very well English." → ✅ "I speak English very well."</p>
      <p>Et une question a besoin de son auxiliaire :</p>
      <p>❌ "Where you work?" → ✅ "Where <strong>do</strong> you work?"</p>

      <h3>Make ou do ?</h3>
      <p>On <em>make</em> a decision, a mistake, a phone call, an appointment ; on <em>do</em> business, a task, your job, some research. Apprenez-les par groupes plutôt que par règle.</p>

      <h2>Les erreurs de prononciation typiques</h2>
      <p>Certains sons n'existent pas en français :</p>
      <ul>
        <li><strong>Le "th"</strong> : think, this, although. Placez la langue entre les dents.</li>
        <li><strong>Le "h" aspiré</strong> : house, hotel, hospital. Il se prononce, sauf dans quelques mots comme <em>hour</em> et <em>honest</em>.</li>
        <li><strong>Les voyelles courtes et longues</strong> : ship / sheep, bit / beat, full / fool. Elles changent le sens du mot.</li>
        <li><strong>La terminaison -ed</strong> : elle ne forme une syllabe qu'après t ou d (wanted, needed). Sinon, on dit "workt" et "playd", pas "work-ed".</li>
        <li><strong>L'accent tonique</strong> : il se déplace selon le mot (PHOtograph, phoTOgraphy, photoGRAphic). Un accent mal placé gêne plus la compréhension qu'un son imparfait.</li>
      </ul>

      <h2>Comment éviter ces erreurs durablement ?</h2>
      <ol>
        <li><strong>Tenez un carnet d'erreurs</strong> : notez la phrase fautive et sa correction, pas seulement la règle.</li>
        <li><strong>Travaillez trois erreurs à la fois</strong> : c'est assez pour progresser, assez peu pour vous en souvenir en situation.</li>
        <li><strong>Enregistrez-vous</strong> : une minute de présentation par jour, réécoutée, révèle vos automatismes.</li>
        <li><strong>Faites-vous corriger régulièrement</strong> : un formateur repère vos erreurs récurrentes et propose des exercices ciblés.</li>
      </ol>

      <h2>En résumé</h2>
      <p>Les erreurs des francophones viennent presque toutes du français : faux-amis, passé composé traduit en present perfect, prépositions calquées, noms indénombrables au pluriel, adverbe mal placé. Corrigez-les une à une, en situation, et votre anglais gagnera nettement en clarté. Pour identifier vos propres points faibles, commencez par le <a href="/test-de-positionnement">test de positionnement gratuit</a>, et découvrez les <a href="/offres-de-formation">formations</a> qui travaillent précisément ces automatismes.</p>
    `,
    date: '2026-01-10',
    author: 'Antony Addy',
    category: 'Grammaire & Vocabulaire',
    readTime: '4 min',
    description: "Identifiez et corrigez les erreurs les plus communes des francophones en anglais avec les conseils d'un formateur expérimenté.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  },
  'oral-vs-ecrit': {
    title: 'Anglais oral vs écrit au travail',
    content: `
      <p>Dans le monde professionnel, votre anglais doit s'adapter au canal de communication. Un email, une réunion, une présentation et un appel téléphonique n'obéissent pas aux mêmes règles. Ce qui est naturel à l'oral peut paraître négligé à l'écrit, et ce qui est élégant à l'écrit peut sonner raide à l'oral. Voici comment ajuster votre registre à chaque situation.</p>

      <h2>L'anglais écrit professionnel</h2>

      <h3>Les emails</h3>
      <p>L'email reste le canal le plus utilisé. Les règles d'or :</p>
      <ul>
        <li><strong>Un objet clair</strong> : "Meeting request – Q1 budget review" plutôt que "Question".</li>
        <li><strong>Une formule d'appel adaptée</strong> : "Dear Ms Smith," pour un premier contact formel, "Hi Tom," avec un collègue ou un client que vous connaissez.</li>
        <li><strong>Une structure logique</strong> : contexte, demande, action attendue et échéance.</li>
        <li><strong>Une seule demande principale par email</strong> : vous obtiendrez une réponse plus vite.</li>
        <li><strong>Une formule de clôture</strong> : "Kind regards," ou "Best regards," conviennent presque partout ; "Best," ou "Thanks," entre collègues.</li>
      </ul>
      <p>Pour relancer sans paraître insistant : "Just following up on my email of 12 March regarding..." Nos <a href="/blog/email-professionnel-en-anglais">modèles d'emails professionnels</a> détaillent chaque cas.</p>

      <h3>Les messageries instantanées</h3>
      <p>Sur Teams ou Slack, on écrit plus court et plus direct : "Quick question: are we still on for 3pm?" Évitez cependant les abréviations (ASAP, FYI, BTW) avec un client ou un interlocuteur que vous connaissez peu.</p>

      <h3>Les rapports et documents</h3>
      <p>Plus formels, ils demandent :</p>
      <ul>
        <li>un vocabulaire précis et technique ;</li>
        <li>des phrases bien structurées, sans contractions (<em>do not</em> plutôt que <em>don't</em>) ;</li>
        <li>une argumentation logique, avec une conclusion ou une recommandation claire ;</li>
        <li>des connecteurs logiques : <em>however</em>, <em>furthermore</em>, <em>consequently</em>, <em>as a result</em>.</li>
      </ul>

      <h2>L'anglais oral professionnel</h2>

      <h3>Les réunions</h3>
      <p>En réunion, l'enjeu est de prendre la parole au bon moment, sans brusquer personne :</p>
      <ul>
        <li><strong>Intervenir</strong> : "Sorry to interrupt, but could I add something here?"</li>
        <li><strong>Donner son avis</strong> : "From my point of view..." / "I'd suggest that we..."</li>
        <li><strong>Exprimer un désaccord poliment</strong> : "I see your point, but I'm not sure that's the best option."</li>
        <li><strong>Demander une précision</strong> : "Could you clarify what you mean by...?"</li>
      </ul>

      <h3>Les présentations</h3>
      <p>L'oral permet plus de flexibilité, mais demande d'aider votre auditoire à suivre :</p>
      <ul>
        <li><strong>Des phrases plus courtes</strong> pour maintenir l'attention.</li>
        <li><strong>Des annonces de plan</strong> : "First, I'll... Then, I'll... Finally..."</li>
        <li><strong>Des renvois aux supports</strong> : "As you can see on this slide..."</li>
        <li><strong>Des récapitulatifs fréquents</strong> : "So, to summarize..."</li>
        <li><strong>Des interactions avec l'audience</strong> : "Any questions so far?"</li>
      </ul>
      <p>Notre <a href="/blog/presentation-en-anglais">guide de la présentation en anglais</a> propose un plan complet et les formules de chaque étape.</p>

      <h3>Les appels téléphoniques et la visio</h3>
      <p>Le défi, c'est l'absence de langage corporel :</p>
      <ul>
        <li><strong>Une articulation claire</strong> et un débit maîtrisé.</li>
        <li><strong>Faire répéter sans gêne</strong> : "Sorry, I didn't quite catch that."</li>
        <li><strong>Reformuler</strong> : "Let me rephrase that..."</li>
        <li><strong>Confirmer</strong> : "Just to make sure I've understood: you'd like...?"</li>
        <li><strong>Épeler</strong> les noms et adresses email avec l'alphabet anglais (A /eɪ/, E /iː/, I /aɪ/).</li>
      </ul>
      <p>Les formules complètes sont dans notre article <a href="/blog/anglais-telephone-visio">anglais au téléphone et en visio</a>.</p>

      <h2>Ce qui change vraiment entre l'oral et l'écrit</h2>
      <ul>
        <li><strong>Les contractions</strong> (<em>I'm, we'll, it's</em>) sont naturelles à l'oral et dans un email courant, à éviter dans un rapport formel.</li>
        <li><strong>Les phrasal verbs</strong> dominent à l'oral : on dit plus volontiers "put off the meeting" que "postpone the meeting", et "find out" que "discover".</li>
        <li><strong>Le piège des mots d'origine latine</strong> : pour un francophone, <em>postpone</em>, <em>commence</em> ou <em>request</em> viennent spontanément. Ils sont corrects, mais sonnent souvent très formels à l'oral.</li>
        <li><strong>La longueur des phrases</strong> : à l'écrit, une phrase peut porter plusieurs idées ; à l'oral, mieux vaut une idée par phrase.</li>
      </ul>

      <h2>Adapter son registre</h2>
      <p>Le niveau de formalité varie selon votre interlocuteur (hiérarchie, client, collègue), le contexte (réunion formelle ou échange informel) et l'objectif (informer, convaincre, négocier). La même demande peut se dire de plusieurs façons :</p>
      <ul>
        <li>Très formel : "I would be grateful if you could send me the report."</li>
        <li>Neutre et poli : "Could you send me the report, please?"</li>
        <li>Informel, entre collègues : "Can you send me the report?"</li>
      </ul>
      <p>Dans le doute, choisissez le registre neutre : il convient à la grande majorité des situations professionnelles.</p>

      <h2>En résumé</h2>
      <p>À l'écrit, soyez clair, structuré et un peu plus formel ; à l'oral, privilégiez des phrases courtes, des phrasal verbs et des formules pour intervenir, reformuler et confirmer. Ajuster son registre à son interlocuteur est une compétence qui s'entraîne, idéalement en situation réelle avec un retour. Faites le point avec le <a href="/test-de-positionnement">test de positionnement gratuit</a> ou découvrez les <a href="/offres-de-formation">formations proposées</a>.</p>
    `,
    date: '2026-01-05',
    author: 'Antony Addy',
    category: 'Communication',
    readTime: '4 min',
    description: "Apprenez à adapter votre style de communication en anglais selon le canal : emails, présentations orales, appels téléphoniques.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  }
};
