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
    text: "Good morning, thank you for calling TechSupport. My name is Sarah. How may I assist you today?\nI'm having trouble with my laptop. It keeps freezing whenever I open multiple applications.\nI understand how frustrating that must be. Let me help you troubleshoot the issue. First, could you tell me how much memory your device has?\nI believe it has eight gigabytes of RAM.\nThat should be sufficient for most tasks. Have you tried restarting your computer recently?\nYes, I restarted it this morning, but the problem persists.\nI see. Let's try clearing your cache and temporary files. This often resolves performance issues. Would you like me to guide you through the process step by step?",
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
    text: "Welcome to BookTalk. Today, we have the pleasure of interviewing renowned author James Mitchell about his latest novel.\nThank you for having me. It's wonderful to be here.\nYour new book explores themes of identity and belonging. What inspired you to tackle these subjects?\nI've always been fascinated by how people construct their sense of self. Growing up as an immigrant myself, I experienced firsthand the challenges of navigating between cultures. This novel is partly autobiographical, though I've fictionalized many elements.\nThe protagonist's journey resonates with many readers who feel caught between worlds. How do you approach the writing process?\nI'm quite disciplined. I write every morning for at least three hours. The first draft is always messy, but that's where the magic happens. Revision is where the real work begins.",
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
    text: "Good afternoon and welcome to the National History Museum. How can I help you?\nHello, we'd like to visit the museum. How much are the tickets?\nFor adults, it's twelve pounds each. Children under twelve enter free of charge. We also offer a family ticket for thirty pounds, which includes two adults and up to three children.\nThat sounds perfect. We'll take the family ticket, please.\nExcellent choice. Here are your tickets and a map of the museum. The Egyptian exhibition is particularly popular right now. It's on the second floor. Don't miss the mummy display.\nAre there any guided tours available?\nYes, there's a guided tour starting in twenty minutes. It lasts approximately ninety minutes and covers the main highlights. It's included in your ticket price.\nWhere does the tour begin?\nThe tour meets at the main staircase in the entrance hall. Look for the guide holding a blue flag.",
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
  },
  {
    slug: "job-interview",
    title: "Job Interview",
    level: "B1",
    accent: "US",
    audioUrl: "/audio/listening/job-interview.mp3",
    text: "Good morning, please have a seat. Thank you for coming in today. I've reviewed your resume and I'm impressed by your experience. Can you tell me a bit about yourself?\nOf course. I recently graduated with a degree in marketing and I've spent the past two years working at a digital agency. I specialized in social media campaigns and content creation.\nThat sounds relevant to our position. What made you apply for this role?\nI've always admired your company's innovative approach to branding. I believe my creative skills and analytical mindset would be a great fit for your team.\nWhere do you see yourself in five years?\nI hope to grow into a leadership position where I can mentor others while continuing to develop cutting-edge marketing strategies.",
    glossary: {
      "resume": { fr: "CV", es: "currículum", it: "curriculum", de: "Lebenslauf", uk: "резюме" },
      "impressed": { fr: "impressionné", es: "impresionado", it: "impressionato", de: "beeindruckt", uk: "вражений" },
      "graduated": { fr: "diplômé", es: "graduado", it: "laureato", de: "abgeschlossen", uk: "закінчив" },
      "specialized": { fr: "spécialisé", es: "especializado", it: "specializzato", de: "spezialisiert", uk: "спеціалізувався" },
      "campaigns": { fr: "campagnes", es: "campañas", it: "campagne", de: "Kampagnen", uk: "кампанії" },
      "relevant": { fr: "pertinent", es: "relevante", it: "pertinente", de: "relevant", uk: "релевантний" },
      "innovative": { fr: "innovant", es: "innovador", it: "innovativo", de: "innovativ", uk: "інноваційний" },
      "branding": { fr: "image de marque", es: "marca", it: "branding", de: "Markenbildung", uk: "брендинг" },
      "analytical": { fr: "analytique", es: "analítico", it: "analitico", de: "analytisch", uk: "аналітичний" },
      "mindset": { fr: "état d'esprit", es: "mentalidad", it: "mentalità", de: "Denkweise", uk: "спосіб мислення" },
      "leadership": { fr: "leadership", es: "liderazgo", it: "leadership", de: "Führung", uk: "лідерство" },
      "mentor": { fr: "encadrer", es: "orientar", it: "fare da mentore", de: "betreuen", uk: "наставляти" },
      "cutting-edge": { fr: "de pointe", es: "vanguardista", it: "all'avanguardia", de: "bahnbrechend", uk: "передовий" }
    }
  },
  {
    slug: "restaurant-reservation",
    title: "Restaurant Reservation",
    level: "A2",
    accent: "UK",
    audioUrl: "/audio/listening/restaurant-reservation.mp3",
    text: "Good evening, The Golden Fork, how may I help you?\nHello, I'd like to make a reservation for Saturday evening, please.\nCertainly. How many people will be dining?\nThere will be four of us.\nAnd what time would you prefer?\nAround seven thirty if possible.\nLet me check our availability. Yes, we have a table available at seven thirty. May I have a name for the reservation?\nIt's under Johnson.\nPerfect, Mr Johnson. Would you like a table inside or on our terrace?\nThe terrace would be lovely if the weather is nice.\nOf course. Do any of your guests have dietary requirements?\nYes, one person is vegetarian.\nNo problem, we have excellent vegetarian options. Your reservation is confirmed for Saturday at seven thirty for four people.",
    glossary: {
      "reservation": { fr: "réservation", es: "reserva", it: "prenotazione", de: "Reservierung", uk: "бронювання" },
      "dining": { fr: "dîner", es: "cenar", it: "cenare", de: "speisen", uk: "обідати" },
      "prefer": { fr: "préférer", es: "preferir", it: "preferire", de: "bevorzugen", uk: "віддавати перевагу" },
      "availability": { fr: "disponibilité", es: "disponibilidad", it: "disponibilità", de: "Verfügbarkeit", uk: "наявність" },
      "terrace": { fr: "terrasse", es: "terraza", it: "terrazza", de: "Terrasse", uk: "тераса" },
      "weather": { fr: "temps", es: "tiempo", it: "tempo", de: "Wetter", uk: "погода" },
      "dietary": { fr: "alimentaire", es: "dietético", it: "dietetico", de: "diätetisch", uk: "дієтичний" },
      "requirements": { fr: "exigences", es: "requisitos", it: "requisiti", de: "Anforderungen", uk: "вимоги" },
      "vegetarian": { fr: "végétarien", es: "vegetariano", it: "vegetariano", de: "vegetarisch", uk: "вегетаріанець" },
      "confirmed": { fr: "confirmé", es: "confirmado", it: "confermato", de: "bestätigt", uk: "підтверджено" }
    }
  },
  {
    slug: "airport-announcement",
    title: "Airport Announcement",
    level: "B1",
    accent: "UK",
    audioUrl: "/audio/listening/airport-announcement.mp3",
    text: "Attention all passengers. This is a final boarding call for Flight BA two four seven to New York JFK.\nAll remaining passengers should proceed immediately to Gate fifteen. The gate will close in ten minutes.\nPassengers Smith and Williams, please make your way to the gate immediately or your luggage will be offloaded.\nWe would also like to inform passengers that Flight LH five six two to Frankfurt has been delayed by approximately forty five minutes due to air traffic control restrictions.\nPassengers on this flight should remain in the departure lounge. We apologize for any inconvenience caused.\nLight refreshments will be provided. Please listen for further announcements regarding your new boarding time.",
    glossary: {
      "passengers": { fr: "passagers", es: "pasajeros", it: "passeggeri", de: "Passagiere", uk: "пасажири" },
      "boarding": { fr: "embarquement", es: "embarque", it: "imbarco", de: "Boarding", uk: "посадка" },
      "proceed": { fr: "se rendre", es: "dirigirse", it: "procedere", de: "begeben", uk: "прямувати" },
      "immediately": { fr: "immédiatement", es: "inmediatamente", it: "immediatamente", de: "sofort", uk: "негайно" },
      "luggage": { fr: "bagages", es: "equipaje", it: "bagagli", de: "Gepäck", uk: "багаж" },
      "offloaded": { fr: "déchargé", es: "descargado", it: "scaricato", de: "ausgeladen", uk: "вивантажений" },
      "delayed": { fr: "retardé", es: "retrasado", it: "ritardato", de: "verspätet", uk: "затриманий" },
      "approximately": { fr: "environ", es: "aproximadamente", it: "circa", de: "ungefähr", uk: "приблизно" },
      "restrictions": { fr: "restrictions", es: "restricciones", it: "restrizioni", de: "Einschränkungen", uk: "обмеження" },
      "departure": { fr: "départ", es: "salida", it: "partenza", de: "Abflug", uk: "виліт" },
      "lounge": { fr: "salon", es: "sala", it: "sala", de: "Lounge", uk: "зал очікування" },
      "inconvenience": { fr: "désagrément", es: "inconveniente", it: "inconveniente", de: "Unannehmlichkeit", uk: "незручність" },
      "refreshments": { fr: "rafraîchissements", es: "refrigerios", it: "rinfreschi", de: "Erfrischungen", uk: "закуски" }
    }
  },
  {
    slug: "doctor-appointment",
    title: "Doctor's Appointment",
    level: "B2",
    accent: "US",
    audioUrl: "/audio/listening/doctor-appointment.mp3",
    text: "Good afternoon. What seems to be the problem today?\nI've been experiencing persistent headaches for about two weeks now. They're particularly bad in the morning.\nI see. Can you describe the pain? Is it sharp or dull?\nIt's more of a dull, throbbing sensation, usually concentrated around my temples and forehead.\nHave you noticed any other symptoms? Perhaps changes in your vision or sensitivity to light?\nNow that you mention it, I have been more sensitive to bright lights lately. And I've been feeling quite fatigued.\nHave you been under any unusual stress recently?\nActually yes, I've been working overtime on a major project. I've barely been sleeping.\nThat could certainly be a contributing factor. I'd like to rule out anything more serious, so I'm going to recommend some blood tests and possibly a scan.",
    glossary: {
      "experiencing": { fr: "éprouver", es: "experimentando", it: "provando", de: "erleben", uk: "відчуваю" },
      "persistent": { fr: "persistant", es: "persistente", it: "persistente", de: "anhaltend", uk: "постійний" },
      "headaches": { fr: "maux de tête", es: "dolores de cabeza", it: "mal di testa", de: "Kopfschmerzen", uk: "головний біль" },
      "particularly": { fr: "particulièrement", es: "particularmente", it: "particolarmente", de: "besonders", uk: "особливо" },
      "throbbing": { fr: "lancinant", es: "palpitante", it: "pulsante", de: "pochend", uk: "пульсуючий" },
      "sensation": { fr: "sensation", es: "sensación", it: "sensazione", de: "Gefühl", uk: "відчуття" },
      "concentrated": { fr: "concentré", es: "concentrado", it: "concentrato", de: "konzentriert", uk: "зосереджений" },
      "temples": { fr: "tempes", es: "sienes", it: "tempie", de: "Schläfen", uk: "скроні" },
      "symptoms": { fr: "symptômes", es: "síntomas", it: "sintomi", de: "Symptome", uk: "симптоми" },
      "sensitivity": { fr: "sensibilité", es: "sensibilidad", it: "sensibilità", de: "Empfindlichkeit", uk: "чутливість" },
      "fatigued": { fr: "fatigué", es: "fatigado", it: "affaticato", de: "erschöpft", uk: "втомлений" },
      "contributing": { fr: "contribuant", es: "contribuyente", it: "contribuente", de: "beitragend", uk: "сприяючий" },
      "recommend": { fr: "recommander", es: "recomendar", it: "raccomandare", de: "empfehlen", uk: "рекомендувати" }
    }
  }
];

export const getListeningExerciseBySlug = (slug: string): ListeningExercise | undefined => {
  return listeningExercises.find(ex => ex.slug === slug);
};
