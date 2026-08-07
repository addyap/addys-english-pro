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
  'anglais-professionnel-2025': {
    title: "L'anglais pro : compétence clé en 2025",
    content: `
      <p>Dans un monde professionnel de plus en plus globalisé, maîtriser l'anglais n'est plus un simple atout sur le CV : c'est devenu une nécessité absolue pour évoluer dans sa carrière et rester compétitif sur le marché du travail.</p>

      <h2>L'anglais : langue universelle des affaires</h2>
      <p>Aujourd'hui, l'anglais s'impose comme la lingua franca des échanges commerciaux internationaux. Que ce soit pour communiquer avec des clients étrangers, participer à des réunions virtuelles avec des équipes dispersées géographiquement, ou simplement comprendre la documentation technique de votre secteur, l'anglais est omniprésent.</p>

      <h2>Les secteurs les plus demandeurs</h2>
      <p>Certains domaines d'activité sont particulièrement exigeants en matière d'anglais professionnel :</p>
      <ul>
        <li><strong>Le commerce international</strong> : négociation, relation client, présentation de produits</li>
        <li><strong>Les technologies</strong> : documentation, collaboration avec des équipes internationales</li>
        <li><strong>Le tourisme et l'hôtellerie</strong> : accueil de la clientèle internationale</li>
        <li><strong>La finance</strong> : rapports, analyses, échanges avec les marchés mondiaux</li>
      </ul>

      <h2>Comment développer son anglais professionnel ?</h2>
      <p>L'anglais professionnel diffère de l'anglais général par sa spécificité sectorielle et sa formalité. Il est essentiel de :</p>
      <ul>
        <li>Identifier le vocabulaire spécifique à votre domaine</li>
        <li>Maîtriser les codes de communication écrite (emails, rapports)</li>
        <li>Développer l'aisance orale pour les réunions et présentations</li>
        <li>Comprendre les nuances culturelles dans la communication</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Investir dans sa formation en anglais professionnel, c'est investir dans son avenir professionnel. Les opportunités s'ouvrent à ceux qui maîtrisent cette compétence devenue incontournable.</p>
    `,
    date: '2026-01-15',
    author: 'Antony Addy',
    category: 'Conseils carrière',
    readTime: '5 min',
    description: "Découvrez pourquoi l'anglais professionnel est devenu une compétence indispensable en 2025 et comment la développer efficacement.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  },
  'erreurs-francophones': {
    title: 'Erreurs des francophones en anglais',
    content: `
      <p>En tant que formateur d'anglais pour francophones depuis plus de ${EXPERIENCE_FLOOR} ans, j'ai identifié les erreurs les plus récurrentes. Bonne nouvelle : elles sont prévisibles et donc évitables !</p>

      <h2>Les faux-amis : ces mots qui nous trompent</h2>
      <p>Les faux-amis sont probablement le piège le plus courant. Voici quelques exemples classiques :</p>
      <ul>
        <li><strong>"Actually"</strong> ne signifie pas "actuellement" mais "en réalité"</li>
        <li><strong>"Eventually"</strong> ne veut pas dire "éventuellement" mais "finalement"</li>
        <li><strong>"Sensible"</strong> ne signifie pas "sensible" mais "sensé, raisonnable"</li>
      </ul>

      <h2>Les structures grammaticales problématiques</h2>
      <p>Les francophones ont tendance à calquer les structures françaises sur l'anglais :</p>
      
      <h3>L'ordre des mots</h3>
      <p>❌ "I am since 10 years in this company"<br>
      ✅ "I have been in this company for 10 years"</p>

      <h3>Les prépositions</h3>
      <p>❌ "I am interested by this project"<br>
      ✅ "I am interested in this project"</p>

      <h2>Les erreurs de prononciation typiques</h2>
      <p>Certains sons n'existent pas en français :</p>
      <ul>
        <li>Le "th" : think, this, although</li>
        <li>Le "h" aspiré : house, hotel, hospital</li>
        <li>Les voyelles courtes vs longues : ship/sheep, bit/beat</li>
      </ul>

      <h2>Comment éviter ces erreurs ?</h2>
      <p>La clé est la pratique consciente et la correction systématique. Un formateur expérimenté peut identifier vos erreurs récurrentes et vous proposer des exercices ciblés pour les corriger durablement.</p>
    `,
    date: '2026-01-10',
    author: 'Antony Addy',
    category: 'Grammaire & Vocabulaire',
    readTime: '7 min',
    description: "Identifiez et corrigez les erreurs les plus communes des francophones en anglais avec les conseils d'un formateur expérimenté.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  },
  'oral-vs-ecrit': {
    title: 'Anglais oral vs écrit au travail',
    content: `
      <p>Dans le monde professionnel, votre anglais doit s'adapter au canal de communication. Un email, une présentation orale et un appel téléphonique requièrent des registres et des techniques différents.</p>

      <h2>L'anglais écrit professionnel</h2>
      
      <h3>Les emails</h3>
      <p>L'email reste le canal de communication le plus utilisé. Les règles d'or :</p>
      <ul>
        <li><strong>Objet clair</strong> : "Meeting request - Q1 budget review"</li>
        <li><strong>Formules de politesse</strong> : "I hope this email finds you well"</li>
        <li><strong>Structure logique</strong> : contexte, demande, action attendue</li>
        <li><strong>Signature professionnelle</strong> complète</li>
      </ul>

      <h3>Les rapports et documents</h3>
      <p>Plus formels, ils demandent :</p>
      <ul>
        <li>Un vocabulaire précis et technique</li>
        <li>Des phrases complexes bien structurées</li>
        <li>Une argumentation logique</li>
        <li>Des connecteurs logiques (however, furthermore, consequently)</li>
      </ul>

      <h2>L'anglais oral professionnel</h2>

      <h3>Les présentations</h3>
      <p>L'oral permet plus de flexibilité :</p>
      <ul>
        <li><strong>Phrases plus courtes</strong> pour maintenir l'attention</li>
        <li><strong>Interactions avec l'audience</strong> : "Any questions so far?"</li>
        <li><strong>Supports visuels</strong> : "As you can see on this slide..."</li>
        <li><strong>Récapitulatifs fréquents</strong> : "So, to summarize..."</li>
      </ul>

      <h3>Les appels téléphoniques</h3>
      <p>Le défi de l'absence de langage corporel :</p>
      <ul>
        <li><strong>Articulation claire</strong> et débit maîtrisé</li>
        <li><strong>Reformulation</strong> : "Let me rephrase that..."</li>
        <li><strong>Confirmation</strong> : "Did I understand correctly that...?"</li>
      </ul>

      <h2>Adapter son registre</h2>
      <p>Le niveau de formalité varie selon :</p>
      <ul>
        <li>Votre interlocuteur (hiérarchie, client, collègue)</li>
        <li>Le contexte (réunion formelle vs discussion informelle)</li>
        <li>L'objectif (information, persuasion, négociation)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Maîtriser ces différents registres demande de la pratique. L'idéal est de s'entraîner dans des situations réalistes avec un formateur qui peut corriger en temps réel.</p>
    `,
    date: '2026-01-05',
    author: 'Antony Addy',
    category: 'Communication',
    readTime: '6 min',
    description: "Apprenez à adapter votre style de communication en anglais selon le canal : emails, présentations orales, appels téléphoniques.",
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
  }
};
