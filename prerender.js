/**
 * Pre-render script for Static Site Generation (SSG)
 * 
 * This script generates static HTML for key routes at build time,
 * ensuring that crawlers see real content, H1 tags, meta tags, and internal links.
 * 
 * Run after standard Vite build: node prerender.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

// Priority routes to prerender (high-value pages for SEO)
const PRIORITY_ROUTES = [
  '/',
  '/qui-je-suis',
  '/offres-de-formation',
  '/temoignages',
  '/contact',
  '/blog',
  '/exercices',
  '/reading',
  '/exercices/listening',
  '/mentions-legales',
  '/politique-confidentialite',
];

// Site configuration
const SITE_URL = 'https://www.antonyaddy.com';
const SITE_NAME = 'Antony Addy - Formateur d\'anglais';

/**
 * Generate static HTML content for a route
 * Uses a lightweight approach that injects SEO-critical content into the HTML
 */
async function prerenderRoute(route, templateHtml) {
  const routePath = route === '/' ? '' : route;
  const canonicalUrl = `${SITE_URL}${route === '/' ? '' : route}`;
  
  // Get page-specific SEO data
  const seoData = getRouteSEOData(route);
  
  // Create the prerendered HTML by injecting content
  let html = templateHtml;
  
  // Inject canonical link
  const canonicalLink = `<link rel="canonical" href="${canonicalUrl}" />`;
  html = html.replace('</head>', `  ${canonicalLink}\n  </head>`);
  
  // Update title if we have route-specific title
  if (seoData.title) {
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${seoData.title}</title>`
    );
  }
  
  // Update meta description
  if (seoData.description) {
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${seoData.description}" />`
    );
    // Also update OG description
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${seoData.description}" />`
    );
  }
  
  // Inject pre-rendered content shell with H1 and internal links
  // This ensures crawlers see real content even before JS hydration
  const prerenderContent = generatePrerenderContent(route, seoData);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${prerenderContent}</div>`
  );
  
  return html;
}

/**
 * Get SEO data for each route
 */
function getRouteSEOData(route) {
  const seoMap = {
    '/': {
      title: 'Formateur d\'anglais pour adultes – Antony Addy',
      description: 'Formations d\'anglais professionnel à distance ou en présentiel dans les Alpes-Maritimes. CPF via centres certifiés Qualiopi. Formateur natif britannique certifié FPA.',
      h1: 'Formateur d\'anglais pour adultes',
    },
    '/qui-je-suis': {
      title: 'Qui je suis - Antony Addy, Formateur d\'anglais',
      description: 'Découvrez Antony Addy, formateur d\'anglais britannique certifié FPA avec plus de 20 ans d\'expérience. Spécialiste de l\'anglais professionnel pour adultes.',
      h1: 'Qui je suis',
    },
    '/offres-de-formation': {
      title: 'Offres de Formation - Antony Addy',
      description: 'Découvrez nos formations d\'anglais professionnel : cours en entreprise, formations individuelles, préparation certifications. CPF via centres Qualiopi.',
      h1: 'Offres de Formation',
    },
    '/temoignages': {
      title: 'Témoignages Clients - Antony Addy',
      description: 'Découvrez les avis et témoignages de nos apprenants. Plus de 100 professionnels formés en anglais avec succès.',
      h1: 'Témoignages',
    },
    '/contact': {
      title: 'Contact - Antony Addy',
      description: 'Contactez Antony Addy pour vos besoins en formation d\'anglais professionnel. Devis gratuit sous 24h.',
      h1: 'Contactez-nous',
    },
    '/blog': {
      title: 'Blog Grammaire Anglaise - Antony Addy',
      description: 'Articles et leçons de grammaire anglaise pour francophones. Explications claires avec exemples pratiques.',
      h1: 'Blog Grammaire Anglaise',
    },
    '/exercices': {
      title: 'Exercices d\'Anglais Interactifs - Antony Addy',
      description: 'Plus de 200 exercices d\'anglais interactifs : grammaire, vocabulaire, compréhension orale et écrite. Progressez à votre rythme.',
      h1: 'Exercices d\'Anglais Interactifs',
    },
    '/lecture': {
      title: 'Exercices de Lecture - Antony Addy',
      description: 'Améliorez votre compréhension écrite avec nos textes et exercices de lecture en anglais. Tous niveaux.',
      h1: 'Exercices de Lecture',
    },
    '/listening': {
      title: 'Exercices de Compréhension Orale - Antony Addy',
      description: 'Améliorez votre compréhension orale avec nos exercices d\'écoute en anglais. Tous niveaux.',
      h1: 'Exercices de Compréhension Orale',
    },
    '/anglais-a-distance': {
      title: 'Anglais à Distance - Antony Addy',
      description: 'Formations d\'anglais à distance partout en France. Cours en visioconférence avec un formateur natif britannique.',
      h1: 'Anglais à Distance',
    },
    '/mentions-legales': {
      title: 'Mentions Légales - Antony Addy',
      description: 'Mentions légales du site antonyaddy.com. Informations sur l\'éditeur et l\'hébergement.',
      h1: 'Mentions Légales',
    },
    '/politique-de-confidentialite': {
      title: 'Politique de Confidentialité - Antony Addy',
      description: 'Notre politique de confidentialité et de protection des données personnelles conformément au RGPD.',
      h1: 'Politique de Confidentialité',
    },
  };
  
  return seoMap[route] || {
    title: `${SITE_NAME}`,
    description: 'Formations d\'anglais professionnel avec Antony Addy, formateur britannique certifié FPA.',
    h1: 'Antony Addy - Formateur d\'anglais',
  };
}

/**
 * Generate pre-render content with H1, navigation, and text
 * This is the critical content crawlers need to see
 */
function generatePrerenderContent(route, seoData) {
  // Navigation links (internal links for crawlers)
  const navLinks = `
    <nav aria-label="Navigation principale">
      <a href="/">Accueil</a>
      <a href="/qui-je-suis">Qui je suis</a>
      <a href="/offres-de-formation">Formations</a>
      <a href="/exercices">Exercices</a>
      <a href="/blog">Blog</a>
      <a href="/temoignages">Témoignages</a>
      <a href="/contact">Contact</a>
    </nav>
  `;
  
  // Page-specific content
  const pageContent = getPageContent(route);
  
  return `
    <header>
      ${navLinks}
    </header>
    <main>
      <h1>${seoData.h1}</h1>
      ${pageContent}
    </main>
    <footer>
      <nav aria-label="Liens du pied de page">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/politique-confidentialite">Politique de confidentialité</a>
        <a href="/exercices">Exercices gratuits</a>
        <a href="/contact">Contact</a>
      </nav>
    </footer>
  `;
}

/**
 * Get page-specific content for each route
 */
function getPageContent(route) {
  const contentMap = {
    '/': `
      <section>
        <h2>Formations d'anglais professionnel</h2>
        <p>Antony Addy est un formateur d'anglais britannique certifié FPA, spécialisé dans l'enseignement de l'anglais professionnel aux adultes. Avec plus de 20 ans d'expérience, il propose des formations personnalisées en présentiel dans les Alpes-Maritimes et à distance partout en France.</p>
        <h3>Pourquoi choisir mes formations ?</h3>
        <ul>
          <li>Anglais authentique avec un formateur britannique natif</li>
          <li>Cours adaptés aux besoins concrets des adultes</li>
          <li>Formateur Professionnel d'Adultes certifié</li>
          <li>Approche humaine et motivante</li>
          <li>Expérience avec écoles, entreprises, et centres de formation</li>
          <li>Disponible en présentiel (PACA) ou à distance (France entière)</li>
        </ul>
        <h3>Types de formations proposées</h3>
        <ul>
          <li><a href="/offres-de-formation">Formations en entreprise</a></li>
          <li><a href="/offres-de-formation">Formations individuelles</a></li>
          <li><a href="/offres-de-formation">Actions de formation conventionnées</a></li>
          <li><a href="/anglaisadistance">Cours d'anglais à distance</a></li>
        </ul>
        <h3>Exercices d'anglais gratuits</h3>
        <p>Découvrez plus de 200 exercices d'anglais interactifs pour améliorer votre grammaire, vocabulaire et compréhension. Parfait pour compléter votre formation ou réviser en autonomie.</p>
        <a href="/exercices">Accéder aux exercices</a>
        <a href="/contact">Demander un devis gratuit</a>
      </section>
    `,
    '/qui-je-suis': `
      <section>
        <h2>Antony Addy - Formateur d'anglais britannique</h2>
        <p>Formateur Professionnel d'Adultes depuis 2017 avec plus de 20 ans d'expérience dans l'enseignement de l'anglais. Mon approche combine humour, adaptabilité et clarté pour un apprentissage efficace et motivant.</p>
        <h3>Mon parcours</h3>
        <p>Britannique natif installé dans les Alpes-Maritimes, j'ai formé des centaines de professionnels issus de tous secteurs : commerce, industrie, tourisme, services. Je travaille avec des écoles de commerce, des entreprises, des centres de formation et des particuliers.</p>
        <a href="/contact">Me contacter</a>
        <a href="/offres-de-formation">Voir mes formations</a>
      </section>
    `,
    '/offres-de-formation': `
      <section>
        <h2>Nos formations d'anglais professionnel</h2>
        <p>Des formations adaptées à vos besoins, éligibles au CPF via des centres de formation certifiés Qualiopi.</p>
        <h3>Formations en entreprise</h3>
        <p>Sessions personnalisées pour renforcer les compétences linguistiques de vos équipes : anglais professionnel, technique ou sectoriel.</p>
        <h3>Formations individuelles</h3>
        <p>Parcours personnalisés adaptés à vos objectifs et votre rythme d'apprentissage.</p>
        <h3>Formations à distance</h3>
        <p>Cours en visioconférence avec un formateur natif, disponibles partout en France.</p>
        <a href="/contact">Demander un devis</a>
        <a href="/anglaisadistance">En savoir plus sur les cours à distance</a>
      </section>
    `,
    '/exercices': `
      <section>
        <h2>Exercices d'anglais interactifs gratuits</h2>
        <p>Plus de 200 exercices pour améliorer votre anglais : grammaire, vocabulaire, compréhension orale et écrite.</p>
        <h3>Types d'exercices disponibles</h3>
        <ul>
          <li>51 leçons de grammaire</li>
          <li>150 exercices de vocabulaire</li>
          <li>Exercices de compréhension écrite</li>
          <li>Exercices de compréhension orale</li>
          <li>Exercices de drag and drop</li>
          <li>Exercices d'écriture</li>
        </ul>
        <a href="/blog">Lire nos articles de grammaire</a>
        <a href="/lecture">Exercices de lecture</a>
        <a href="/listening">Exercices d'écoute</a>
      </section>
    `,
    '/lecture': `
      <section>
        <h2>Exercices de Lecture en Anglais</h2>
        <p>Améliorez votre compréhension écrite avec nos textes et exercices de lecture en anglais. Contenus adaptés à tous les niveaux.</p>
        <h3>Thèmes disponibles</h3>
        <ul>
          <li>L'importance de la lecture</li>
          <li>Solutions au changement climatique</li>
          <li>La révolution numérique</li>
          <li>Mode de vie durable</li>
          <li>L'art de la communication</li>
        </ul>
        <a href="/exercices">Autres exercices</a>
        <a href="/listening">Exercices d'écoute</a>
      </section>
    `,
    '/listening': `
      <section>
        <h2>Exercices de Compréhension Orale</h2>
        <p>Améliorez votre compréhension orale avec nos exercices d'écoute en anglais. Audio de qualité avec transcriptions.</p>
        <h3>Thèmes disponibles</h3>
        <ul>
          <li>Réunions professionnelles</li>
          <li>Conversations de voyage</li>
          <li>Actualités</li>
          <li>Cours académiques</li>
          <li>Vie quotidienne</li>
        </ul>
        <a href="/exercices">Autres exercices</a>
        <a href="/lecture">Exercices de lecture</a>
      </section>
    `,
    '/blog': `
      <section>
        <h2>Articles de grammaire anglaise</h2>
        <p>Des explications claires et des exemples pratiques pour maîtriser la grammaire anglaise. Idéal pour les francophones qui veulent progresser.</p>
        <h3>Sujets populaires</h3>
        <ul>
          <li>Present Simple vs Present Continuous</li>
          <li>Past Simple vs Present Perfect</li>
          <li>Les conditionnels en anglais</li>
          <li>Les prépositions de lieu et de temps</li>
          <li>Les phrasal verbs essentiels</li>
        </ul>
        <a href="/exercices">Pratiquer avec des exercices</a>
      </section>
    `,
    '/temoignages': `
      <section>
        <h2>Avis de nos apprenants</h2>
        <p>Découvrez ce que nos apprenants disent de nos formations d'anglais. Plus de 100 professionnels formés avec succès.</p>
        <a href="/contact">Rejoignez-les</a>
        <a href="/offres-de-formation">Voir nos formations</a>
      </section>
    `,
    '/contact': `
      <section>
        <h2>Contactez-nous</h2>
        <p>Vous souhaitez améliorer votre anglais professionnel ? Contactez Antony Addy pour discuter de vos besoins et obtenir un devis personnalisé gratuit.</p>
        <h3>Zones d'intervention</h3>
        <ul>
          <li>En présentiel : Alpes-Maritimes (Cannes, Antibes, Nice, Monaco)</li>
          <li>À distance : France entière</li>
        </ul>
        <a href="/offres-de-formation">Découvrir nos formations</a>
      </section>
    `,
    '/anglais-a-distance': `
      <section>
        <h2>Formations d'anglais à distance</h2>
        <p>Apprenez l'anglais depuis chez vous avec un formateur britannique natif. Cours en visioconférence personnalisés, disponibles partout en France.</p>
        <h3>Avantages des cours à distance</h3>
        <ul>
          <li>Flexibilité horaire</li>
          <li>Pas de déplacement</li>
          <li>Même qualité qu'en présentiel</li>
          <li>Enregistrement des sessions possible</li>
        </ul>
        <a href="/contact">Réserver une séance d'essai</a>
        <a href="/offres-de-formation">Autres formats de formation</a>
      </section>
    `,
  };
  
  return contentMap[route] || `
    <section>
      <p>Bienvenue sur antonyaddy.com. Découvrez nos formations d'anglais professionnel et nos exercices interactifs gratuits.</p>
      <a href="/">Retour à l'accueil</a>
    </section>
  `;
}

/**
 * Write prerendered HTML to file
 */
function writePrerenderedFile(route, html) {
  let filePath;
  if (route === '/') {
    filePath = path.join(distDir, 'index.html');
  } else {
    const routeDir = path.join(distDir, route.slice(1));
    fs.mkdirSync(routeDir, { recursive: true });
    filePath = path.join(routeDir, 'index.html');
  }
  
  fs.writeFileSync(filePath, html, 'utf-8');
  return filePath;
}

/**
 * Main prerender function
 */
async function prerender() {
  console.log('🚀 Starting pre-render process...\n');
  
  // Check if dist exists
  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  // Read the template HTML
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  
  // Prerender each route
  for (const route of PRIORITY_ROUTES) {
    try {
      const html = await prerenderRoute(route, templateHtml);
      const filePath = writePrerenderedFile(route, html);
      console.log(`✅ Pre-rendered: ${route} -> ${filePath}`);
    } catch (error) {
      console.error(`❌ Failed to pre-render ${route}:`, error.message);
    }
  }
  
  console.log('\n✨ Pre-render complete!');
  console.log('\n📋 Verification checklist:');
  console.log('   1. Check dist/index.html contains real H1 and content');
  console.log('   2. Verify canonical links are present');
  console.log('   3. Confirm internal navigation links exist');
  console.log('   4. Test with: npx serve dist');
}

// Run prerender
prerender().catch(console.error);
