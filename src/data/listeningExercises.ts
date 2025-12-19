export interface GlossaryEntry {
  fr: string;
  es: string;
  it: string;
  de: string;
  uk: string;
}

export interface ListeningExercise {
  slug: string;
  title: string;
  level: string;
  accent: "UK" | "US";
  audioUrl: string;
  text: string;
  glossary: Record<string, GlossaryEntry>;
}

export type SupportedLanguage = "fr" | "es" | "it" | "de" | "uk";

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  fr: "Français",
  es: "Español",
  it: "Italiano",
  de: "Deutsch",
  uk: "Українська",
};

export const listeningExercises: ListeningExercise[] = [
  {
    slug: "customer-service-call",
    title: "Customer Service Call",
    level: "B1",
    accent: "UK",
    audioUrl: "/audio/listening/customer-service-call.mp3",
    text: "Good morning, thank you for calling TechSupport. My name is Sarah. How may I assist you today? I'm having trouble with my laptop. It keeps freezing whenever I open multiple applications. I understand how frustrating that must be. Let me help you troubleshoot the issue. First, could you tell me how much memory your device has? I believe it has eight gigabytes of RAM. That should be sufficient for most tasks. Have you tried restarting your computer recently? Yes, I restarted it this morning, but the problem persists. I see. Let's try clearing your cache and temporary files. This often resolves performance issues. Would you like me to guide you through the process step by step?",
    glossary: {
      "assist": {
        fr: "aider",
        es: "ayudar",
        it: "assistere",
        de: "helfen",
        uk: "допомогти"
      },
      "trouble": {
        fr: "problème",
        es: "problema",
        it: "problema",
        de: "Problem",
        uk: "проблема"
      },
      "freezing": {
        fr: "se figer",
        es: "congelándose",
        it: "bloccandosi",
        de: "einfrieren",
        uk: "зависає"
      },
      "applications": {
        fr: "applications",
        es: "aplicaciones",
        it: "applicazioni",
        de: "Anwendungen",
        uk: "програми"
      },
      "frustrating": {
        fr: "frustrant",
        es: "frustrante",
        it: "frustrante",
        de: "frustrierend",
        uk: "неприємно"
      },
      "troubleshoot": {
        fr: "résoudre",
        es: "solucionar",
        it: "risolvere",
        de: "beheben",
        uk: "усунути неполадки"
      },
      "memory": {
        fr: "mémoire",
        es: "memoria",
        it: "memoria",
        de: "Speicher",
        uk: "пам'ять"
      },
      "device": {
        fr: "appareil",
        es: "dispositivo",
        it: "dispositivo",
        de: "Gerät",
        uk: "пристрій"
      },
      "sufficient": {
        fr: "suffisant",
        es: "suficiente",
        it: "sufficiente",
        de: "ausreichend",
        uk: "достатньо"
      },
      "restarting": {
        fr: "redémarrer",
        es: "reiniciando",
        it: "riavviando",
        de: "Neustart",
        uk: "перезапуск"
      },
      "persists": {
        fr: "persiste",
        es: "persiste",
        it: "persiste",
        de: "bleibt bestehen",
        uk: "продовжується"
      },
      "cache": {
        fr: "cache",
        es: "caché",
        it: "cache",
        de: "Cache",
        uk: "кеш"
      },
      "temporary": {
        fr: "temporaire",
        es: "temporal",
        it: "temporaneo",
        de: "temporär",
        uk: "тимчасовий"
      },
      "resolves": {
        fr: "résout",
        es: "resuelve",
        it: "risolve",
        de: "löst",
        uk: "вирішує"
      },
      "performance": {
        fr: "performance",
        es: "rendimiento",
        it: "prestazioni",
        de: "Leistung",
        uk: "продуктивність"
      },
      "guide": {
        fr: "guider",
        es: "guiar",
        it: "guidare",
        de: "anleiten",
        uk: "провести"
      }
    }
  },
  {
    slug: "journalist-interview",
    title: "Journalist Interview with Author",
    level: "B2",
    accent: "US",
    audioUrl: "/audio/listening/journalist-interview.mp3",
    text: "Welcome to BookTalk. Today, we have the pleasure of interviewing renowned author James Mitchell about his latest novel. Thank you for having me. It's wonderful to be here. Your new book explores themes of identity and belonging. What inspired you to tackle these subjects? I've always been fascinated by how people construct their sense of self. Growing up as an immigrant myself, I experienced firsthand the challenges of navigating between cultures. This novel is partly autobiographical, though I've fictionalized many elements. The protagonist's journey resonates with many readers who feel caught between worlds. How do you approach the writing process? I'm quite disciplined. I write every morning for at least three hours. The first draft is always messy, but that's where the magic happens. Revision is where the real work begins.",
    glossary: {
      "pleasure": {
        fr: "plaisir",
        es: "placer",
        it: "piacere",
        de: "Vergnügen",
        uk: "задоволення"
      },
      "renowned": {
        fr: "renommé",
        es: "renombrado",
        it: "rinomato",
        de: "berühmt",
        uk: "відомий"
      },
      "explores": {
        fr: "explore",
        es: "explora",
        it: "esplora",
        de: "erforscht",
        uk: "досліджує"
      },
      "themes": {
        fr: "thèmes",
        es: "temas",
        it: "temi",
        de: "Themen",
        uk: "теми"
      },
      "identity": {
        fr: "identité",
        es: "identidad",
        it: "identità",
        de: "Identität",
        uk: "ідентичність"
      },
      "belonging": {
        fr: "appartenance",
        es: "pertenencia",
        it: "appartenenza",
        de: "Zugehörigkeit",
        uk: "приналежність"
      },
      "inspired": {
        fr: "inspiré",
        es: "inspirado",
        it: "ispirato",
        de: "inspiriert",
        uk: "надихнуло"
      },
      "tackle": {
        fr: "aborder",
        es: "abordar",
        it: "affrontare",
        de: "angehen",
        uk: "торкнутися"
      },
      "fascinated": {
        fr: "fasciné",
        es: "fascinado",
        it: "affascinato",
        de: "fasziniert",
        uk: "зачарований"
      },
      "construct": {
        fr: "construire",
        es: "construir",
        it: "costruire",
        de: "konstruieren",
        uk: "створювати"
      },
      "immigrant": {
        fr: "immigrant",
        es: "inmigrante",
        it: "immigrato",
        de: "Einwanderer",
        uk: "іммігрант"
      },
      "navigating": {
        fr: "naviguer",
        es: "navegando",
        it: "navigando",
        de: "navigieren",
        uk: "орієнтуватися"
      },
      "autobiographical": {
        fr: "autobiographique",
        es: "autobiográfico",
        it: "autobiografico",
        de: "autobiografisch",
        uk: "автобіографічний"
      },
      "fictionalized": {
        fr: "romancé",
        es: "ficcionado",
        it: "romanzato",
        de: "fiktionalisiert",
        uk: "вигаданий"
      },
      "protagonist": {
        fr: "protagoniste",
        es: "protagonista",
        it: "protagonista",
        de: "Protagonist",
        uk: "головний герой"
      },
      "resonates": {
        fr: "résonne",
        es: "resuena",
        it: "risuona",
        de: "anspricht",
        uk: "відгукується"
      },
      "disciplined": {
        fr: "discipliné",
        es: "disciplinado",
        it: "disciplinato",
        de: "diszipliniert",
        uk: "дисциплінований"
      },
      "draft": {
        fr: "brouillon",
        es: "borrador",
        it: "bozza",
        de: "Entwurf",
        uk: "чернетка"
      },
      "revision": {
        fr: "révision",
        es: "revisión",
        it: "revisione",
        de: "Überarbeitung",
        uk: "редагування"
      }
    }
  },
  {
    slug: "museum-reception",
    title: "Museum Reception Desk",
    level: "A2",
    accent: "UK",
    audioUrl: "/audio/listening/museum-reception.mp3",
    text: "Good afternoon and welcome to the National History Museum. How can I help you? Hello, we'd like to visit the museum. How much are the tickets? For adults, it's twelve pounds each. Children under twelve enter free of charge. We also offer a family ticket for thirty pounds, which includes two adults and up to three children. That sounds perfect. We'll take the family ticket, please. Excellent choice. Here are your tickets and a map of the museum. The Egyptian exhibition is particularly popular right now. It's on the second floor. Don't miss the mummy display. Are there any guided tours available? Yes, there's a guided tour starting in twenty minutes. It lasts approximately ninety minutes and covers the main highlights. It's included in your ticket price. Where does the tour begin? The tour meets at the main staircase in the entrance hall. Look for the guide holding a blue flag.",
    glossary: {
      "welcome": {
        fr: "bienvenue",
        es: "bienvenido",
        it: "benvenuto",
        de: "willkommen",
        uk: "ласкаво просимо"
      },
      "tickets": {
        fr: "billets",
        es: "entradas",
        it: "biglietti",
        de: "Eintrittskarten",
        uk: "квитки"
      },
      "adults": {
        fr: "adultes",
        es: "adultos",
        it: "adulti",
        de: "Erwachsene",
        uk: "дорослі"
      },
      "charge": {
        fr: "frais",
        es: "cargo",
        it: "costo",
        de: "Gebühr",
        uk: "плата"
      },
      "offer": {
        fr: "proposer",
        es: "ofrecer",
        it: "offrire",
        de: "anbieten",
        uk: "пропонуємо"
      },
      "includes": {
        fr: "comprend",
        es: "incluye",
        it: "include",
        de: "beinhaltet",
        uk: "включає"
      },
      "excellent": {
        fr: "excellent",
        es: "excelente",
        it: "eccellente",
        de: "ausgezeichnet",
        uk: "чудово"
      },
      "map": {
        fr: "carte",
        es: "mapa",
        it: "mappa",
        de: "Karte",
        uk: "карта"
      },
      "exhibition": {
        fr: "exposition",
        es: "exposición",
        it: "mostra",
        de: "Ausstellung",
        uk: "виставка"
      },
      "popular": {
        fr: "populaire",
        es: "popular",
        it: "popolare",
        de: "beliebt",
        uk: "популярний"
      },
      "display": {
        fr: "exposition",
        es: "exhibición",
        it: "esposizione",
        de: "Ausstellung",
        uk: "експозиція"
      },
      "guided": {
        fr: "guidée",
        es: "guiada",
        it: "guidata",
        de: "geführt",
        uk: "з гідом"
      },
      "approximately": {
        fr: "environ",
        es: "aproximadamente",
        it: "circa",
        de: "ungefähr",
        uk: "приблизно"
      },
      "highlights": {
        fr: "points forts",
        es: "puntos destacados",
        it: "punti salienti",
        de: "Höhepunkte",
        uk: "основні моменти"
      },
      "staircase": {
        fr: "escalier",
        es: "escalera",
        it: "scala",
        de: "Treppe",
        uk: "сходи"
      },
      "entrance": {
        fr: "entrée",
        es: "entrada",
        it: "ingresso",
        de: "Eingang",
        uk: "вхід"
      }
    }
  }
];

export const getListeningExerciseBySlug = (slug: string): ListeningExercise | undefined => {
  return listeningExercises.find(ex => ex.slug === slug);
};
