// Utility for generating contextual internal links in blog posts

export interface RelatedContent {
  practiceSection: string;
  relatedTopics: Array<{ id: string; title: string }>;
  showCommercialCTA: boolean;
}

// Map categories to relevant exercise and reading content
const categoryToExerciseContext: Record<string, string> = {
  'Grammaire - Temps': 'les temps anglais',
  'Grammaire - Prépositions': 'les prépositions',
  'Grammaire - Adjectifs': 'les adjectifs comparatifs et superlatifs',
  'Grammaire - Noms': 'les noms et quantificateurs',
  'Grammaire - Déterminants': 'les déterminants et articles',
  'Grammaire - Structures': 'les structures grammaticales avancées',
  'Grammaire - Verbes': 'les verbes et leurs usages',
  'Grammaire - Pronoms': 'les pronoms anglais',
  'Grammaire - Quantificateurs': 'les quantificateurs',
  'Grammaire - Questions': 'les question tags',
  'Grammaire - Intensifieurs': 'les intensifieurs',
  'Grammaire & Vocabulaire': 'le vocabulaire et les expressions',
  'Conseils carrière': "l'anglais professionnel",
  'Communication': 'la communication professionnelle',
};

// Category groups for fallback related posts
const categoryPostMap: Record<string, string[]> = {
  'Grammaire - Temps': ['present-simple-vs-present-continuous', 'past-simple-vs-present-perfect', 'past-simple-vs-past-continuous', 'past-simple-vs-past-perfect', 'past-perfect-continuous', 'future-continuous', 'future-perfect-continuous', 'will-vs-going-to'],
  'Grammaire - Prépositions': ['prepositions-de-lieu', 'prepositions-de-temps'],
  'Grammaire - Adjectifs': ['comparatifs-en-anglais', 'superlatifs-en-anglais', 'adjective-order'],
  'Grammaire - Déterminants': ['articles-a-an-the', 'demonstratives-this-that-these-those', 'determiners'],
  'Grammaire - Noms': ['countable-uncountable-nouns'],
  'Grammaire - Quantificateurs': ['much-many-a-lot-of', 'some-and-any', 'few-vs-little', 'either-neither'],
  'Grammaire - Structures': ['conditionals-zero-first-second-third', 'passive-voice', 'reported-speech', 'relative-clauses', 'wish-and-if-only', 'although-despite-however', 'unless-as-long-as-provided'],
  'Grammaire - Verbes': ['modal-verbs', 'phrasal-verbs', 'gerunds-vs-infinitives', 'make-vs-do', 'say-vs-tell', 'causative-have-get', 'had-better-would-rather'],
  'Grammaire - Pronoms': ['subject-object-pronouns', 'reflexive-pronouns', 'possessive-adjectives', 'possessive-pronouns', 'possessive-adjectives-vs-pronouns'],
  'Grammaire - Questions': ['question-tags'],
  'Grammaire - Intensifieurs': ['so-and-such', 'too-and-enough'],
  'Grammaire & Vocabulaire': ['erreurs-francophones', 'since-vs-for', 'been-vs-gone', 'still-yet-already', 'adverbs-of-frequency'],
  'Conseils carrière': ['anglais-professionnel-2025'],
  'Communication': ['oral-vs-ecrit'],
};

// Cornerstone posts for ultimate fallback
const cornerstonePosts = ['erreurs-francophones', 'anglais-professionnel-2025', 'present-simple-vs-present-continuous', 'past-simple-vs-present-perfect'];

// Topic clusters for internal blog linking
const topicClusters: Record<string, string[]> = {
  // Tenses cluster
  'present-simple-vs-present-continuous': ['past-simple-vs-present-perfect', 'future-continuous', 'gerunds-vs-infinitives'],
  'past-simple-vs-present-perfect': ['present-simple-vs-present-continuous', 'since-vs-for', 'been-vs-gone'],
  'past-simple-vs-past-continuous': ['past-simple-vs-past-perfect', 'past-perfect-continuous', 'reported-speech'],
  'past-simple-vs-past-perfect': ['past-simple-vs-past-continuous', 'past-perfect-continuous', 'conditionals-zero-first-second-third'],
  'past-perfect-continuous': ['past-simple-vs-past-perfect', 'future-perfect-continuous', 'since-vs-for'],
  'future-continuous': ['future-perfect-continuous', 'will-vs-going-to', 'present-simple-vs-present-continuous'],
  'future-perfect-continuous': ['future-continuous', 'past-perfect-continuous', 'will-vs-going-to'],
  'will-vs-going-to': ['future-continuous', 'present-simple-vs-present-continuous', 'conditionals-zero-first-second-third'],
  
  // Prepositions cluster
  'prepositions-de-lieu': ['prepositions-de-temps', 'phrasal-verbs'],
  'prepositions-de-temps': ['prepositions-de-lieu', 'since-vs-for', 'still-yet-already'],
  
  // Comparatives cluster
  'comparatifs-en-anglais': ['superlatifs-en-anglais', 'too-and-enough', 'so-and-such'],
  'superlatifs-en-anglais': ['comparatifs-en-anglais', 'adjective-order', 'determiners'],
  
  // Quantifiers cluster
  'countable-uncountable-nouns': ['much-many-a-lot-of', 'some-and-any', 'few-vs-little', 'articles-a-an-the'],
  'much-many-a-lot-of': ['countable-uncountable-nouns', 'few-vs-little', 'some-and-any'],
  'few-vs-little': ['much-many-a-lot-of', 'countable-uncountable-nouns', 'some-and-any'],
  'some-and-any': ['countable-uncountable-nouns', 'much-many-a-lot-of', 'either-neither'],
  
  // Structure cluster
  'conditionals-zero-first-second-third': ['wish-and-if-only', 'unless-as-long-as-provided', 'reported-speech'],
  'passive-voice': ['reported-speech', 'causative-have-get', 'relative-clauses'],
  'reported-speech': ['passive-voice', 'past-simple-vs-past-perfect', 'say-vs-tell'],
  'relative-clauses': ['passive-voice', 'question-tags', 'demonstratives-this-that-these-those'],
  
  // Verbs cluster
  'phrasal-verbs': ['prepositions-de-lieu', 'gerunds-vs-infinitives', 'make-vs-do'],
  'gerunds-vs-infinitives': ['phrasal-verbs', 'modal-verbs', 'causative-have-get'],
  'modal-verbs': ['gerunds-vs-infinitives', 'had-better-would-rather', 'conditionals-zero-first-second-third'],
  
  // Pronouns cluster
  'subject-object-pronouns': ['reflexive-pronouns', 'possessive-adjectives', 'possessive-pronouns'],
  'reflexive-pronouns': ['subject-object-pronouns', 'possessive-pronouns', 'each-other-one-another'],
  'possessive-adjectives': ['possessive-pronouns', 'possessive-adjectives-vs-pronouns', 'subject-object-pronouns'],
  'possessive-pronouns': ['possessive-adjectives', 'possessive-adjectives-vs-pronouns', 'reflexive-pronouns'],
  'possessive-adjectives-vs-pronouns': ['possessive-adjectives', 'possessive-pronouns', 'subject-object-pronouns'],
  
  // Time expressions cluster
  'since-vs-for': ['past-simple-vs-present-perfect', 'been-vs-gone', 'still-yet-already'],
  'been-vs-gone': ['since-vs-for', 'past-simple-vs-present-perfect', 'phrasal-verbs'],
  'still-yet-already': ['since-vs-for', 'prepositions-de-temps', 'adverbs-of-frequency'],
  
  // Misc grammar cluster
  'articles-a-an-the': ['countable-uncountable-nouns', 'determiners', 'demonstratives-this-that-these-those'],
  'determiners': ['articles-a-an-the', 'demonstratives-this-that-these-those', 'some-and-any'],
  'question-tags': ['relative-clauses', 'modal-verbs', 'so-and-such'],
  'so-and-such': ['too-and-enough', 'comparatifs-en-anglais', 'question-tags'],
  'too-and-enough': ['so-and-such', 'comparatifs-en-anglais', 'much-many-a-lot-of'],
  'either-neither': ['some-and-any', 'both-all-none', 'countable-uncountable-nouns'],
  'make-vs-do': ['say-vs-tell', 'phrasal-verbs', 'gerunds-vs-infinitives'],
  'say-vs-tell': ['make-vs-do', 'reported-speech', 'phrasal-verbs'],
  'wish-and-if-only': ['conditionals-zero-first-second-third', 'had-better-would-rather', 'modal-verbs'],
  'had-better-would-rather': ['modal-verbs', 'wish-and-if-only', 'conditionals-zero-first-second-third'],
  'although-despite-however': ['unless-as-long-as-provided', 'conditionals-zero-first-second-third', 'so-and-such'],
  'unless-as-long-as-provided': ['conditionals-zero-first-second-third', 'although-despite-however', 'wish-and-if-only'],
  'causative-have-get': ['passive-voice', 'gerunds-vs-infinitives', 'modal-verbs'],
  'adjective-order': ['superlatifs-en-anglais', 'comparatifs-en-anglais', 'determiners'],
  'adverbs-of-frequency': ['prepositions-de-temps', 'present-simple-vs-present-continuous', 'still-yet-already'],
  'demonstratives-this-that-these-those': ['articles-a-an-the', 'determiners', 'relative-clauses'],
  
  // Base articles
  'anglais-professionnel-2025': ['erreurs-francophones', 'oral-vs-ecrit'],
  'erreurs-francophones': ['anglais-professionnel-2025', 'phrasal-verbs', 'prepositions-de-temps'],
  'oral-vs-ecrit': ['anglais-professionnel-2025', 'erreurs-francophones', 'reported-speech'],
};

// Blog post titles for linking
const blogTitles: Record<string, string> = {
  'present-simple-vs-present-continuous': 'Present Simple vs Present Continuous',
  'past-simple-vs-present-perfect': 'Past Simple vs Present Perfect',
  'past-simple-vs-past-continuous': 'Past Simple vs Past Continuous',
  'past-simple-vs-past-perfect': 'Past Simple vs Past Perfect',
  'past-perfect-continuous': 'Le Past Perfect Continuous',
  'future-continuous': 'Le Future Continuous',
  'future-perfect-continuous': 'Le Future Perfect Continuous',
  'prepositions-de-lieu': 'Les prépositions de lieu',
  'prepositions-de-temps': 'Les prépositions de temps',
  'comparatifs-en-anglais': 'Les comparatifs en anglais',
  'superlatifs-en-anglais': 'Les superlatifs en anglais',
  'countable-uncountable-nouns': 'Countable vs Uncountable Nouns',
  'demonstratives-this-that-these-those': 'This, That, These, Those',
  'conditionals-zero-first-second-third': 'Les conditionnels anglais',
  'passive-voice': 'La voix passive',
  'phrasal-verbs': 'Les phrasal verbs',
  'articles-a-an-the': 'Les articles A, An, The',
  'modal-verbs': 'Les verbes modaux',
  'reported-speech': 'Le discours indirect',
  'relative-clauses': 'Les propositions relatives',
  'gerunds-vs-infinitives': 'Gerunds vs Infinitives',
  'question-tags': 'Les question tags',
  'so-and-such': 'So et Such',
  'too-and-enough': 'Too et Enough',
  'some-and-any': 'Some et Any',
  'wish-and-if-only': 'Wish et If only',
  'make-vs-do': 'Make vs Do',
  'say-vs-tell': 'Say vs Tell',
  'reflexive-pronouns': 'Les pronoms réfléchis',
  'subject-object-pronouns': 'Subject vs Object Pronouns',
  'possessive-adjectives': 'Les adjectifs possessifs',
  'possessive-pronouns': 'Les pronoms possessifs',
  'either-neither': 'Either et Neither',
  'will-vs-going-to': 'Will vs Going to',
  'much-many-a-lot-of': 'Much, Many, A lot of',
  'since-vs-for': 'Since vs For',
  'been-vs-gone': 'Been vs Gone',
  'few-vs-little': 'Few, A few, Little, A little',
  'possessive-adjectives-vs-pronouns': 'Possessive Adjectives vs Pronouns',
  'adverbs-of-frequency': 'Les adverbes de fréquence',
  'causative-have-get': 'Causative Have/Get',
  'adjective-order': "L'ordre des adjectifs",
  'determiners': 'Les déterminants',
  'had-better-would-rather': 'Had better / Would rather',
  'although-despite-however': 'Although, Despite, However',
  'still-yet-already': 'Still, Yet, Already',
  'unless-as-long-as-provided': 'Unless, As long as, Provided',
  'anglais-professionnel-2025': "L'anglais professionnel en 2025",
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

  // Stable CTA logic: always for career/communication categories, ~30% for others via hash
  const alwaysShowCTACategories = ['Conseils carrière', 'Communication'];
  const showCommercialCTA = alwaysShowCTACategories.includes(category) || (stableHash(postId) % 100 < 30);

  return {
    practiceSection,
    relatedTopics,
    showCommercialCTA
  };
}

// Exercise link labels by category for anchor text variation
const exerciseLinkVariants: Record<string, { href: string; label: string }[]> = {
  'Grammaire - Temps': [
    { href: '/exercices', label: 'exercices de grammaire' },
    { href: '/exercices', label: 'exercices sur les temps' },
    { href: '/exercices', label: 'quiz interactifs de grammaire' },
  ],
  'Grammaire - Prépositions': [
    { href: '/exercices', label: 'exercices de vocabulaire' },
    { href: '/exercices', label: 'exercices sur les prépositions' },
    { href: '/exercices', label: 'quiz interactifs' },
  ],
  'Grammaire - Verbes': [
    { href: '/exercices', label: 'exercices sur les verbes' },
    { href: '/exercices', label: 'exercices de vocabulaire' },
    { href: '/exercices', label: 'quiz de grammaire' },
  ],
  'Grammaire - Structures': [
    { href: '/exercices', label: 'exercices de grammaire' },
    { href: '/exercices', label: 'exercices interactifs' },
    { href: '/exercices', label: 'quiz sur les structures' },
  ],
  'Grammaire - Pronoms': [
    { href: '/exercices', label: 'exercices sur les pronoms' },
    { href: '/exercices', label: 'exercices de grammaire' },
    { href: '/exercices', label: 'quiz interactifs' },
  ],
  'Grammaire - Quantificateurs': [
    { href: '/exercices', label: 'exercices sur les quantificateurs' },
    { href: '/exercices', label: 'exercices interactifs' },
  ],
  'Grammaire - Déterminants': [
    { href: '/exercices', label: 'exercices sur les déterminants' },
    { href: '/exercices', label: 'exercices de grammaire' },
  ],
  'default': [
    { href: '/exercices', label: 'exercices interactifs' },
    { href: '/exercices', label: 'exercices de grammaire' },
    { href: '/exercices', label: 'quiz d\'anglais' },
  ],
};

// Reading link variants for anchor text variation
const readingLinkVariants = [
  { href: '/reading', label: 'Textes de compréhension' },
  { href: '/reading', label: 'Passages de lecture' },
  { href: '/reading', label: 'Compréhension écrite' },
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
 * Returns posts with no related topics (before fallback)
 */
export function auditRelatedLinksCoverage(allPostIds: string[]): {
  postsWithNoCluster: string[];
  postsWithFallback: string[];
  allPostsHaveRelated: boolean;
} {
  const postsWithNoCluster: string[] = [];
  const postsWithFallback: string[] = [];
  
  for (const postId of allPostIds) {
    const clusterTopics = topicClusters[postId];
    if (!clusterTopics || clusterTopics.length === 0) {
      postsWithNoCluster.push(postId);
      // Check if fallback produces results
      const fallback = getFallbackRelated(postId, '');
      if (fallback.length > 0) {
        postsWithFallback.push(postId);
      }
    }
  }
  
  return {
    postsWithNoCluster,
    postsWithFallback,
    allPostsHaveRelated: postsWithNoCluster.length === 0 || postsWithFallback.length === postsWithNoCluster.length
  };
}
