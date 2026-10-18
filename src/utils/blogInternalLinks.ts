// Utility for generating contextual internal links in blog posts

export interface RelatedContent {
  practiceSection: string;
  relatedTopics: Array<{ id: string; title: string }>;
  showCommercialCTA: boolean;
}

// Map categories to relevant exercise and reading content
const categoryToExerciseContext: Record<string, string> = {
  'Grammaire & Vocabulaire': 'le vocabulaire et les expressions',
  'Conseils carrière': "l'anglais professionnel",
  'Communication': 'la communication professionnelle',
};

// Category groups for fallback related posts
const categoryPostMap: Record<string, string[]> = {
  'Grammaire & Vocabulaire': ['erreurs-francophones'],
  'Conseils carrière': ['anglais-professionnel-competence-cle'],
  'Communication': ['oral-vs-ecrit', 'email-professionnel-en-anglais', 'presentation-en-anglais', 'entretien-embauche-en-anglais', 'anglais-telephone-visio'],
};

// Cornerstone posts for ultimate fallback
const cornerstonePosts = ['erreurs-francophones', 'anglais-professionnel-competence-cle', 'oral-vs-ecrit'];

// Topic clusters for internal blog linking
const topicClusters: Record<string, string[]> = {
  'anglais-professionnel-competence-cle': ['erreurs-francophones', 'oral-vs-ecrit'],
  'erreurs-francophones': ['anglais-professionnel-competence-cle', 'oral-vs-ecrit'],
  'oral-vs-ecrit': ['anglais-professionnel-competence-cle', 'erreurs-francophones'],
};

// Blog post titles for linking
const blogTitles: Record<string, string> = {
  'email-professionnel-en-anglais': 'Email professionnel en anglais',
  'presentation-en-anglais': 'Présentation en anglais : le guide',
  'entretien-embauche-en-anglais': "Entretien d'embauche en anglais",
  'anglais-telephone-visio': 'Anglais au téléphone et en visio',
  'anglais-professionnel-competence-cle': "L'anglais professionnel au travail",
  'erreurs-francophones': 'Les erreurs fréquentes des francophones',
  'oral-vs-ecrit': 'Anglais oral vs écrit',
};

/**
 * Simple stable hash function for consistent CTA display
 */
function stableHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Get fallback related posts when topicClusters has no match
 */
function getFallbackRelated(postId: string, category: string): string[] {
  // First try: get posts from same category (excluding current)
  const categoryPosts = categoryPostMap[category] || [];
  const sameCategoryPosts = categoryPosts.filter(id => id !== postId && blogTitles[id]);
  
  if (sameCategoryPosts.length >= 2) {
    return sameCategoryPosts.slice(0, 2);
  }
  
  // Second try: fill remaining with cornerstone posts
  const remaining = 2 - sameCategoryPosts.length;
  const cornerstones = cornerstonePosts.filter(id => id !== postId && !sameCategoryPosts.includes(id) && blogTitles[id]);
  
  return [...sameCategoryPosts, ...cornerstones.slice(0, remaining)];
}

/**
 * Generate contextual practice content for a blog post
 */
export function getRelatedContent(postId: string, category: string): RelatedContent {
  const exerciseContext = categoryToExerciseContext[category] || 'la grammaire anglaise';
  let relatedIds = topicClusters[postId] || [];
  
  // Fallback if no related topics found
  if (relatedIds.length === 0) {
    relatedIds = getFallbackRelated(postId, category);
  }
  
  // Build related topics array
  const relatedTopics = relatedIds
    .filter(id => blogTitles[id])
    .slice(0, 2)
    .map(id => ({
      id,
      title: blogTitles[id]
    }));

  // Build practice section text based on category
  let practiceSection = '';
  
  if (category.includes('Temps')) {
    practiceSection = `Pour maîtriser ${exerciseContext}, la pratique régulière est essentielle. Nos exercices interactifs vous permettent de tester vos connaissances avec un feedback immédiat. Vous pouvez également améliorer votre compréhension en contexte grâce à nos textes de lecture adaptés à votre niveau.`;
  } else if (category.includes('Prépositions')) {
    practiceSection = `Les prépositions sont souvent source de confusion pour les francophones. Entraînez-vous avec nos exercices de vocabulaire qui ciblent spécifiquement ces difficultés. La lecture de textes authentiques vous aidera également à voir ces prépositions utilisées en contexte.`;
  } else if (category.includes('Verbes')) {
    practiceSection = `Les verbes anglais présentent de nombreuses subtilités. Nos exercices interactifs vous aident à mémoriser les usages corrects grâce à la répétition espacée. Complétez votre apprentissage avec nos passages de compréhension écrite.`;
  } else if (category.includes('Structures')) {
    practiceSection = `Ces structures grammaticales demandent une pratique ciblée. Nos exercices vous proposent des situations variées pour ancrer ces règles. Les histoires interactives de notre section lecture vous permettent de les rencontrer en contexte narratif.`;
  } else if (category.includes('Pronoms')) {
    practiceSection = `Les pronoms anglais suivent des règles précises qu'il est important de maîtriser. Testez-vous avec nos exercices de grammaire pour renforcer vos acquis. Nos textes de compréhension illustrent ces usages dans des situations concrètes.`;
  } else if (category.includes('Quantificateurs') || category.includes('Noms')) {
    practiceSection = `Les quantificateurs et noms en anglais requièrent une attention particulière. Nos exercices ciblent ces points pour vous aider à automatiser les bonnes formes. Retrouvez également des exemples dans nos passages de lecture.`;
  } else if (category.includes('Déterminants')) {
    practiceSection = `Les déterminants et articles sont essentiels pour construire des phrases correctes. Entraînez-vous avec nos exercices interactifs pour ancrer ces règles. La lecture régulière renforce également votre intuition grammaticale.`;
  } else if (category === 'Conseils carrière' || category === 'Communication') {
    practiceSection = `Pour progresser en anglais professionnel, combinez théorie et pratique. Nos exercices couvrent le vocabulaire des affaires et les structures formelles. La lecture de textes professionnels renforce également votre compréhension du registre approprié.`;
  } else {
    practiceSection = `Pour consolider vos acquis sur ${exerciseContext}, passez à la pratique avec nos exercices interactifs. Chaque exercice propose 10 questions avec corrections détaillées. Nos textes de compréhension écrite vous permettent de voir ces points de grammaire en contexte.`;
  }

  // The blog is a top-of-funnel channel: every article routes readers to a
  // relevant service, so the commercial CTA now shows on all posts.
  const showCommercialCTA = true;

  return {
    practiceSection,
    relatedTopics,
    showCommercialCTA
  };
}

// Exercise link labels by category for anchor text variation.
// Each category points to the matching Grammatica section on this domain.
const exerciseLinkVariants: Record<string, { href: string; label: string }[]> = {
  'Grammaire - Temps': [
    { href: 'https://www.antonyaddy.com/grammatica/section/tenses', label: 'exercices de grammaire' },
    { href: 'https://www.antonyaddy.com/grammatica/section/tenses', label: 'exercices sur les temps' },
    { href: 'https://www.antonyaddy.com/grammatica/section/tenses', label: 'quiz interactifs de grammaire' },
  ],
  'Grammaire - Prépositions': [
    { href: 'https://www.antonyaddy.com/grammatica/section/prepositions', label: 'exercices de grammaire' },
    { href: 'https://www.antonyaddy.com/grammatica/section/prepositions', label: 'exercices sur les prépositions' },
    { href: 'https://www.antonyaddy.com/grammatica/section/prepositions', label: 'quiz interactifs' },
  ],
  'Grammaire - Verbes': [
    { href: 'https://www.antonyaddy.com/grammatica/section/verb-patterns', label: 'exercices sur les verbes' },
    { href: 'https://www.antonyaddy.com/grammatica/section/verb-patterns', label: 'exercices de grammaire' },
    { href: 'https://www.antonyaddy.com/grammatica/section/verb-patterns', label: 'quiz de grammaire' },
  ],
  'Grammaire - Structures': [
    { href: 'https://www.antonyaddy.com/grammatica/section/advanced-structures', label: 'exercices de grammaire' },
    { href: 'https://www.antonyaddy.com/grammatica/section/advanced-structures', label: 'exercices interactifs' },
    { href: 'https://www.antonyaddy.com/grammatica/section/advanced-structures', label: 'quiz sur les structures' },
  ],
  'Grammaire - Pronoms': [
    { href: 'https://www.antonyaddy.com/grammatica/section/pronouns-possessives', label: 'exercices sur les pronoms' },
    { href: 'https://www.antonyaddy.com/grammatica/section/pronouns-possessives', label: 'exercices de grammaire' },
    { href: 'https://www.antonyaddy.com/grammatica/section/pronouns-possessives', label: 'quiz interactifs' },
  ],
  'Grammaire - Quantificateurs': [
    { href: 'https://www.antonyaddy.com/grammatica/section/nouns-quantity', label: 'exercices sur les quantificateurs' },
    { href: 'https://www.antonyaddy.com/grammatica/section/nouns-quantity', label: 'exercices interactifs' },
  ],
  'Grammaire - Déterminants': [
    { href: 'https://www.antonyaddy.com/grammatica/section/articles-determiners', label: 'exercices sur les déterminants' },
    { href: 'https://www.antonyaddy.com/grammatica/section/articles-determiners', label: 'exercices de grammaire' },
  ],
  'default': [
    { href: 'https://www.antonyaddy.com/grammatica', label: 'exercices interactifs' },
    { href: 'https://www.antonyaddy.com/grammatica', label: 'exercices de grammaire' },
    { href: 'https://www.antonyaddy.com/grammatica', label: 'quiz d\'anglais' },
  ],
};

// Reading link variants for anchor text variation.
// The posts cover workplace English (email, phone, meetings, interviews), so they
// point to ListenUp's Professional English dialogues on this domain.
const readingLinkVariants = [
  { href: 'https://www.antonyaddy.com/listening/category/professional', label: 'Dialogues professionnels' },
  { href: 'https://www.antonyaddy.com/listening/category/professional', label: 'Compréhension en contexte' },
  { href: 'https://www.antonyaddy.com/listening/category/professional', label: 'Conversations en anglais' },
];

/**
 * Get exercise link based on category with deterministic variation
 */
export function getExerciseLink(category: string, postId?: string): { href: string; label: string } {
  const variants = exerciseLinkVariants[category] || exerciseLinkVariants['default'];
  const index = postId ? stableHash(postId) % variants.length : 0;
  return variants[index];
}

/**
 * Get reading link with deterministic variation
 */
export function getReadingLink(postId?: string): { href: string; label: string } {
  const index = postId ? stableHash(postId + '-reading') % readingLinkVariants.length : 0;
  return readingLinkVariants[index];
}

/**
 * Audit function: check coverage for all posts
 * Accepts real post objects with id and category
 */
export interface AuditResult {
  postsWithNoCluster: string[];
  postsUsingFallback: string[];
  postsWithNoRelatedAfterFallback: string[];
  totalPosts: number;
  clusteredCount: number;
  fallbackCount: number;
  failedCount: number;
}

export function auditRelatedLinksCoverage(allPosts: Array<{ id: string; category: string }>): AuditResult {
  const postsWithNoCluster: string[] = [];
  const postsUsingFallback: string[] = [];
  const postsWithNoRelatedAfterFallback: string[] = [];
  
  for (const post of allPosts) {
    const clusterTopics = topicClusters[post.id];
    const hasCluster = clusterTopics && clusterTopics.length > 0 && clusterTopics.some(id => blogTitles[id]);
    
    if (!hasCluster) {
      postsWithNoCluster.push(post.id);
      // Check if fallback produces valid results with titles
      const fallback = getFallbackRelated(post.id, post.category);
      const validFallback = fallback.filter(id => blogTitles[id]);
      
      if (validFallback.length > 0) {
        postsUsingFallback.push(post.id);
      } else {
        postsWithNoRelatedAfterFallback.push(post.id);
      }
    }
  }
  
  return {
    postsWithNoCluster,
    postsUsingFallback,
    postsWithNoRelatedAfterFallback,
    totalPosts: allPosts.length,
    clusteredCount: allPosts.length - postsWithNoCluster.length,
    fallbackCount: postsUsingFallback.length,
    failedCount: postsWithNoRelatedAfterFallback.length
  };
}

/**
 * Run audit in dev mode and log summary
 */
export function runDevAudit(allPosts: Array<{ id: string; category: string }>): void {
  if (import.meta.env.PROD) return;
  
  const result = auditRelatedLinksCoverage(allPosts);
  
  console.group('[Blog Internal Links Audit]');
  console.log(`Total posts: ${result.totalPosts}`);
  console.log(`With explicit cluster: ${result.clusteredCount}`);
  console.log(`Using fallback: ${result.fallbackCount}`);
  console.log(`Failed (no related): ${result.failedCount}`);
  
  if (result.postsWithNoRelatedAfterFallback.length > 0) {
    console.warn('Posts with NO related links:', result.postsWithNoRelatedAfterFallback);
  } else {
    console.log('✓ All posts have related links');
  }
  console.groupEnd();
}
