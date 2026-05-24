/**
 * Authority External Links - SEO E-E-A-T Signals
 * These links boost credibility by referencing official, authoritative sources
 */

export const AUTHORITY_LINKS = {
  
  // CEFR Framework (Council of Europe)
  cefr: {
    official: "https://www.coe.int/en/web/common-european-framework-reference-languages/home",
    levels: "https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions",
  },
  
  // English Learning Resources
  english: {
    cambridge: "https://dictionary.cambridge.org/",
    cambridgeGrammar: "https://dictionary.cambridge.org/grammar/british-grammar/",
    britishCouncil: "https://learnenglish.britishcouncil.org/",
    oxfordLearners: "https://www.oxfordlearnersdictionaries.com/",
  },
  
  // Professional Standards
  professional: {
    fpa: "https://www.afpa.fr/formation/titre-professionnel-formateur-professionnel-adultes",
    rncp: "https://www.francecompetences.fr/",
  },
  
  // Author Social Proof
  author: {
    linkedin: "https://www.linkedin.com/in/antonyaddy/",
  },
};

/**
 * Helper to create an external authority link with proper attributes
 */
export const createAuthorityLinkProps = (url: string, label: string) => ({
  href: url,
  target: "_blank",
  rel: "noopener noreferrer",
  "aria-label": `${label} (s'ouvre dans un nouvel onglet)`,
});
