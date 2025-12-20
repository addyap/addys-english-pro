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
  },
  {
    slug: "hotel-check-in",
    title: "Hotel Check-In",
    level: "A2",
    accent: "UK",
    audioUrl: "/audio/listening/hotel-check-in.mp3",
    text: "Good evening, welcome to The Grand Hotel. How may I help you?\nHello, I have a reservation under the name Thompson.\nLet me check that for you. Yes, here it is. A double room for three nights, is that correct?\nYes, that's right.\nPerfect. Could I see your passport or ID card, please?\nOf course, here you go.\nThank you. Your room is on the fourth floor, room four twelve. Here is your key card.\nWhat time is breakfast served?\nBreakfast is served in the restaurant on the ground floor from seven until ten thirty.\nIs there free wifi in the room?\nYes, the wifi code is on the card with your key. Is there anything else you need?\nNo, that's everything. Thank you very much.\nEnjoy your stay. The lift is just around the corner on your left.",
    glossary: {
      "reservation": { fr: "réservation", es: "reserva", it: "prenotazione", de: "Reservierung", uk: "бронювання" },
      "double": { fr: "double", es: "doble", it: "doppia", de: "Doppel", uk: "двомісний" },
      "passport": { fr: "passeport", es: "pasaporte", it: "passaporto", de: "Reisepass", uk: "паспорт" },
      "floor": { fr: "étage", es: "piso", it: "piano", de: "Stock", uk: "поверх" },
      "key card": { fr: "carte-clé", es: "tarjeta llave", it: "chiave elettronica", de: "Schlüsselkarte", uk: "картка-ключ" },
      "breakfast": { fr: "petit-déjeuner", es: "desayuno", it: "colazione", de: "Frühstück", uk: "сніданок" },
      "served": { fr: "servi", es: "servido", it: "servito", de: "serviert", uk: "подається" },
      "ground floor": { fr: "rez-de-chaussée", es: "planta baja", it: "piano terra", de: "Erdgeschoss", uk: "перший поверх" },
      "wifi": { fr: "wifi", es: "wifi", it: "wifi", de: "WLAN", uk: "wifi" },
      "lift": { fr: "ascenseur", es: "ascensor", it: "ascensore", de: "Aufzug", uk: "ліфт" }
    }
  },
  {
    slug: "weather-forecast",
    title: "Weather Forecast",
    level: "A2",
    accent: "UK",
    audioUrl: "/audio/listening/weather-forecast.mp3",
    text: "Good morning, here is your weather forecast for the week ahead.\nToday will start cloudy with temperatures around twelve degrees. Expect some light showers in the afternoon, so don't forget your umbrella.\nTomorrow looks much brighter with sunny spells throughout the day. Temperatures will reach a pleasant eighteen degrees.\nMidweek will see a return of unsettled weather. Wednesday and Thursday will be windy with occasional heavy rain.\nThe weekend is looking more promising. Saturday will be mostly dry with some sunshine. Sunday could see temperatures climb to twenty degrees, making it perfect for outdoor activities.\nThat's your weather update. Stay tuned for traffic news coming up next.",
    glossary: {
      "forecast": { fr: "prévisions", es: "pronóstico", it: "previsioni", de: "Vorhersage", uk: "прогноз" },
      "cloudy": { fr: "nuageux", es: "nublado", it: "nuvoloso", de: "bewölkt", uk: "хмарно" },
      "temperatures": { fr: "températures", es: "temperaturas", it: "temperature", de: "Temperaturen", uk: "температури" },
      "showers": { fr: "averses", es: "chubascos", it: "acquazzoni", de: "Schauer", uk: "дощі" },
      "umbrella": { fr: "parapluie", es: "paraguas", it: "ombrello", de: "Regenschirm", uk: "парасолька" },
      "brighter": { fr: "plus ensoleillé", es: "más brillante", it: "più luminoso", de: "heller", uk: "яскравіше" },
      "sunny spells": { fr: "éclaircies", es: "intervalos soleados", it: "schiarite", de: "sonnige Abschnitte", uk: "сонячні проміжки" },
      "unsettled": { fr: "instable", es: "inestable", it: "instabile", de: "unbeständig", uk: "нестабільна" },
      "windy": { fr: "venteux", es: "ventoso", it: "ventoso", de: "windig", uk: "вітряно" },
      "promising": { fr: "prometteur", es: "prometedor", it: "promettente", de: "vielversprechend", uk: "обнадійливий" },
      "outdoor": { fr: "en plein air", es: "al aire libre", it: "all'aperto", de: "im Freien", uk: "на відкритому повітрі" }
    }
  },
  {
    slug: "train-announcement",
    title: "Train Station Announcement",
    level: "A2",
    accent: "UK",
    audioUrl: "/audio/listening/train-announcement.mp3",
    text: "Attention please. The train now approaching platform three is the eleven forty-five service to Edinburgh.\nThis train will call at York, Durham, and Newcastle before arriving at Edinburgh Waverley at fourteen thirty.\nPassengers for Leeds should take the train on platform seven departing at eleven fifty-two.\nWe regret to announce that the twelve fifteen service to Manchester has been cancelled due to a signalling problem.\nPassengers holding tickets for this service may travel on the next available train at twelve forty-five.\nPlease keep your belongings with you at all times and report any unattended luggage to a member of staff.\nThank you for travelling with us today.",
    glossary: {
      "approaching": { fr: "approchant", es: "acercándose", it: "in arrivo", de: "ankommend", uk: "наближається" },
      "platform": { fr: "quai", es: "andén", it: "binario", de: "Bahnsteig", uk: "платформа" },
      "service": { fr: "service", es: "servicio", it: "servizio", de: "Verbindung", uk: "рейс" },
      "departing": { fr: "partant", es: "saliendo", it: "in partenza", de: "abfahrend", uk: "відправлення" },
      "regret": { fr: "regrettons", es: "lamentamos", it: "ci scusiamo", de: "bedauern", uk: "на жаль" },
      "cancelled": { fr: "annulé", es: "cancelado", it: "cancellato", de: "ausgefallen", uk: "скасовано" },
      "signalling": { fr: "signalisation", es: "señalización", it: "segnaletica", de: "Signaltechnik", uk: "сигналізація" },
      "belongings": { fr: "affaires", es: "pertenencias", it: "effetti personali", de: "Gepäck", uk: "речі" },
      "unattended": { fr: "sans surveillance", es: "desatendido", it: "incustodito", de: "unbeaufsichtigt", uk: "без нагляду" },
      "staff": { fr: "personnel", es: "personal", it: "personale", de: "Personal", uk: "персонал" }
    }
  },
  {
    slug: "shopping-clothes",
    title: "Shopping for Clothes",
    level: "A2",
    accent: "US",
    audioUrl: "/audio/listening/shopping-clothes.mp3",
    text: "Hi there, can I help you find anything today?\nYes, I'm looking for a jacket for the winter.\nGreat! What size are you?\nI'm usually a medium.\nWe have some lovely options over here. Are you looking for something casual or more formal?\nSomething casual that I can wear every day.\nHow about this one? It's very popular this season and it's waterproof.\nOh, that's nice. Can I try it on?\nOf course! The fitting rooms are just behind you on the right.\nIt fits perfectly! How much is it?\nIt's on sale right now. It was ninety-nine dollars, but it's now seventy-nine.\nThat's a good deal. I'll take it.\nWould you like to pay by cash or card?\nCard, please.",
    glossary: {
      "jacket": { fr: "veste", es: "chaqueta", it: "giacca", de: "Jacke", uk: "куртка" },
      "size": { fr: "taille", es: "talla", it: "taglia", de: "Größe", uk: "розмір" },
      "medium": { fr: "moyen", es: "mediana", it: "media", de: "mittel", uk: "середній" },
      "casual": { fr: "décontracté", es: "informal", it: "casual", de: "lässig", uk: "повсякденний" },
      "formal": { fr: "formel", es: "formal", it: "formale", de: "formell", uk: "офіційний" },
      "waterproof": { fr: "imperméable", es: "impermeable", it: "impermeabile", de: "wasserdicht", uk: "водонепроникний" },
      "try on": { fr: "essayer", es: "probarse", it: "provare", de: "anprobieren", uk: "приміряти" },
      "fitting rooms": { fr: "cabines d'essayage", es: "probadores", it: "camerini", de: "Umkleidekabinen", uk: "примірочні" },
      "sale": { fr: "soldes", es: "rebajas", it: "saldi", de: "Angebot", uk: "розпродаж" },
      "deal": { fr: "affaire", es: "oferta", it: "affare", de: "Angebot", uk: "вигідна пропозиція" }
    }
  },
  {
    slug: "university-lecture",
    title: "University Lecture Introduction",
    level: "B2",
    accent: "UK",
    audioUrl: "/audio/listening/university-lecture.mp3",
    text: "Good morning everyone, and welcome to this semester's introductory course on environmental science.\nBefore we dive into the material, let me outline what we'll be covering over the next twelve weeks.\nThe course is divided into three main sections. First, we'll examine the fundamental principles of ecology and ecosystems.\nIn the second part, we'll focus on climate change, its causes, and its global impact.\nFinally, we'll explore sustainable solutions and the role of policy in environmental protection.\nAssessment will consist of two written assignments worth thirty percent each, and a final exam worth forty percent.\nI encourage you to participate actively in seminars and don't hesitate to visit during my office hours if you have questions.\nThe reading list is available on the course website. I recommend starting with chapters one through three of the main textbook this week.",
    glossary: {
      "semester": { fr: "semestre", es: "semestre", it: "semestre", de: "Semester", uk: "семестр" },
      "introductory": { fr: "introduction", es: "introductorio", it: "introduttivo", de: "Einführung", uk: "вступний" },
      "outline": { fr: "présenter", es: "describir", it: "delineare", de: "umreißen", uk: "окреслити" },
      "fundamental": { fr: "fondamental", es: "fundamental", it: "fondamentale", de: "grundlegend", uk: "фундаментальний" },
      "ecology": { fr: "écologie", es: "ecología", it: "ecologia", de: "Ökologie", uk: "екологія" },
      "ecosystems": { fr: "écosystèmes", es: "ecosistemas", it: "ecosistemi", de: "Ökosysteme", uk: "екосистеми" },
      "sustainable": { fr: "durable", es: "sostenible", it: "sostenibile", de: "nachhaltig", uk: "сталий" },
      "assessment": { fr: "évaluation", es: "evaluación", it: "valutazione", de: "Bewertung", uk: "оцінювання" },
      "assignments": { fr: "devoirs", es: "trabajos", it: "compiti", de: "Aufgaben", uk: "завдання" },
      "seminars": { fr: "séminaires", es: "seminarios", it: "seminari", de: "Seminare", uk: "семінари" },
      "textbook": { fr: "manuel", es: "libro de texto", it: "manuale", de: "Lehrbuch", uk: "підручник" }
    }
  },
  {
    slug: "business-meeting",
    title: "Business Meeting",
    level: "B2",
    accent: "US",
    audioUrl: "/audio/listening/business-meeting.mp3",
    text: "Alright everyone, let's get started. Thanks for joining today's meeting on such short notice.\nThe main item on the agenda is the upcoming product launch scheduled for next quarter.\nSarah, could you give us an update on the marketing campaign?\nSure. We've finalized the social media strategy and the print materials are currently being designed. We should have everything ready two weeks before launch.\nExcellent. What about the budget? Are we still on track?\nWe're slightly over budget due to unexpected production costs, but we've identified some areas where we can cut back.\nI see. Let's discuss that in more detail after this meeting. Tom, how's the development team progressing?\nWe're on schedule. The final testing phase begins next week, and we're confident we'll meet the deadline.\nGreat work everyone. Let's schedule a follow-up meeting for next Wednesday to review progress. Any questions before we wrap up?",
    glossary: {
      "agenda": { fr: "ordre du jour", es: "agenda", it: "ordine del giorno", de: "Tagesordnung", uk: "порядок денний" },
      "launch": { fr: "lancement", es: "lanzamiento", it: "lancio", de: "Markteinführung", uk: "запуск" },
      "quarter": { fr: "trimestre", es: "trimestre", it: "trimestre", de: "Quartal", uk: "квартал" },
      "campaign": { fr: "campagne", es: "campaña", it: "campagna", de: "Kampagne", uk: "кампанія" },
      "finalized": { fr: "finalisé", es: "finalizado", it: "finalizzato", de: "fertiggestellt", uk: "завершено" },
      "budget": { fr: "budget", es: "presupuesto", it: "budget", de: "Budget", uk: "бюджет" },
      "unexpected": { fr: "inattendu", es: "inesperado", it: "imprevisto", de: "unerwartet", uk: "несподіваний" },
      "production": { fr: "production", es: "producción", it: "produzione", de: "Produktion", uk: "виробництво" },
      "schedule": { fr: "calendrier", es: "cronograma", it: "programma", de: "Zeitplan", uk: "графік" },
      "deadline": { fr: "échéance", es: "plazo", it: "scadenza", de: "Frist", uk: "дедлайн" },
      "follow-up": { fr: "suivi", es: "seguimiento", it: "follow-up", de: "Nachbesprechung", uk: "подальша зустріч" }
    }
  },
  {
    slug: "bank-account",
    title: "Opening a Bank Account",
    level: "B1",
    accent: "UK",
    audioUrl: "/audio/listening/bank-account.mp3",
    text: "Good morning, how can I help you today?\nHi, I'd like to open a new bank account, please.\nCertainly. Are you looking for a current account or a savings account?\nA current account for my everyday expenses.\nNo problem. Do you have any identification with you? We'll need a passport or driving licence.\nYes, I have my passport here.\nPerfect. And do you have proof of address? A utility bill or bank statement from another account?\nI have a recent electricity bill.\nExcellent. We offer several types of current accounts. Our standard account has no monthly fee, while our premium account offers additional benefits like travel insurance for twelve pounds a month.\nThe standard account sounds fine for now.\nGreat choice. I'll just need you to fill in this application form. Would you like to set up online banking as well?\nYes, please. That would be very convenient.",
    glossary: {
      "current account": { fr: "compte courant", es: "cuenta corriente", it: "conto corrente", de: "Girokonto", uk: "поточний рахунок" },
      "savings": { fr: "épargne", es: "ahorro", it: "risparmio", de: "Spar-", uk: "заощадження" },
      "identification": { fr: "pièce d'identité", es: "identificación", it: "documento", de: "Ausweis", uk: "посвідчення" },
      "driving licence": { fr: "permis de conduire", es: "carnet de conducir", it: "patente", de: "Führerschein", uk: "водійські права" },
      "proof": { fr: "preuve", es: "prueba", it: "prova", de: "Nachweis", uk: "підтвердження" },
      "utility bill": { fr: "facture", es: "factura de servicios", it: "bolletta", de: "Rechnung", uk: "рахунок за комунальні" },
      "premium": { fr: "premium", es: "premium", it: "premium", de: "Premium", uk: "преміум" },
      "benefits": { fr: "avantages", es: "beneficios", it: "vantaggi", de: "Vorteile", uk: "переваги" },
      "application form": { fr: "formulaire", es: "formulario", it: "modulo", de: "Antragsformular", uk: "заява" },
      "online banking": { fr: "banque en ligne", es: "banca online", it: "home banking", de: "Online-Banking", uk: "онлайн-банкінг" }
    }
  },
  {
    slug: "gym-membership",
    title: "Joining a Gym",
    level: "A2",
    accent: "US",
    audioUrl: "/audio/listening/gym-membership.mp3",
    text: "Welcome to FitLife Gym! Are you interested in becoming a member?\nYes, I'd like to know about your membership options.\nOf course! We have three plans. The basic plan is twenty-nine dollars a month and gives you access to all gym equipment.\nWhat about classes?\nFor classes, you'd need our standard plan at forty-five dollars. That includes unlimited group classes like yoga, spinning, and aerobics.\nThat sounds good. What's included in the premium plan?\nThe premium plan is sixty-five dollars and includes personal training sessions, access to the spa, and towel service.\nI think the standard plan would work for me. Can I try the gym first?\nAbsolutely! We offer a free one-day trial. Would you like to try it today?\nYes, please!\nGreat. Just fill out this form and I'll give you a tour of the facilities.",
    glossary: {
      "membership": { fr: "adhésion", es: "membresía", it: "abbonamento", de: "Mitgliedschaft", uk: "членство" },
      "equipment": { fr: "équipement", es: "equipo", it: "attrezzatura", de: "Geräte", uk: "обладнання" },
      "unlimited": { fr: "illimité", es: "ilimitado", it: "illimitato", de: "unbegrenzt", uk: "необмежений" },
      "spinning": { fr: "spinning", es: "spinning", it: "spinning", de: "Spinning", uk: "спінінг" },
      "aerobics": { fr: "aérobic", es: "aeróbic", it: "aerobica", de: "Aerobic", uk: "аеробіка" },
      "personal training": { fr: "coaching personnel", es: "entrenamiento personal", it: "personal training", de: "Personal Training", uk: "персональні тренування" },
      "spa": { fr: "spa", es: "spa", it: "spa", de: "Spa", uk: "спа" },
      "trial": { fr: "essai", es: "prueba", it: "prova", de: "Probetraining", uk: "пробний" },
      "facilities": { fr: "installations", es: "instalaciones", it: "strutture", de: "Einrichtungen", uk: "приміщення" }
    }
  },
  {
    slug: "cinema-booking",
    title: "Booking Cinema Tickets",
    level: "A2",
    accent: "UK",
    audioUrl: "/audio/listening/cinema-booking.mp3",
    text: "Good evening, welcome to Starlight Cinema. How can I help?\nHi, I'd like two tickets for the seven thirty showing of The Last Adventure, please.\nCertainly. Would you prefer standard seats or premium seats with extra legroom?\nWhat's the price difference?\nStandard seats are nine pounds fifty each, and premium seats are twelve pounds fifty.\nWe'll take two standard seats, please.\nNo problem. Would you like seats near the front, middle, or back of the cinema?\nThe middle would be perfect.\nI have two seats available in row H. Does that work for you?\nYes, that's great.\nWould you like any snacks or drinks? We have a special offer on large popcorn and drinks today.\nYes, one large popcorn and two medium drinks, please.\nExcellent. Your total comes to twenty-eight pounds. Cash or card?\nCard, please.",
    glossary: {
      "showing": { fr: "séance", es: "función", it: "spettacolo", de: "Vorstellung", uk: "сеанс" },
      "standard": { fr: "standard", es: "estándar", it: "standard", de: "Standard", uk: "стандартний" },
      "legroom": { fr: "espace pour les jambes", es: "espacio para piernas", it: "spazio gambe", de: "Beinfreiheit", uk: "місце для ніг" },
      "row": { fr: "rangée", es: "fila", it: "fila", de: "Reihe", uk: "ряд" },
      "snacks": { fr: "snacks", es: "aperitivos", it: "snack", de: "Snacks", uk: "закуски" },
      "popcorn": { fr: "popcorn", es: "palomitas", it: "popcorn", de: "Popcorn", uk: "попкорн" },
      "offer": { fr: "offre", es: "oferta", it: "offerta", de: "Angebot", uk: "пропозиція" },
      "total": { fr: "total", es: "total", it: "totale", de: "Gesamtsumme", uk: "загалом" }
    }
  },
  {
    slug: "pharmacy-visit",
    title: "At the Pharmacy",
    level: "B1",
    accent: "UK",
    audioUrl: "/audio/listening/pharmacy-visit.mp3",
    text: "Good afternoon. How can I help you today?\nHello, I've had a terrible cold for the past few days. I need something for my symptoms.\nI'm sorry to hear that. What symptoms are you experiencing?\nI have a blocked nose, a sore throat, and I've been coughing a lot.\nI see. Are you taking any other medications at the moment?\nJust some vitamins, nothing else.\nAnd do you have any allergies we should know about?\nNo, no allergies.\nRight. I'd recommend this cold and flu remedy. It should help with all your symptoms. Take two tablets every four to six hours.\nShould I take them with food?\nIt's not necessary, but it can help if you have a sensitive stomach. Also, make sure you drink plenty of fluids and get some rest.\nThank you. How much is that?\nThat's seven pounds forty-nine. I hope you feel better soon.",
    glossary: {
      "symptoms": { fr: "symptômes", es: "síntomas", it: "sintomi", de: "Symptome", uk: "симптоми" },
      "blocked nose": { fr: "nez bouché", es: "nariz congestionada", it: "naso chiuso", de: "verstopfte Nase", uk: "закладений ніс" },
      "sore throat": { fr: "mal de gorge", es: "dolor de garganta", it: "mal di gola", de: "Halsschmerzen", uk: "біль у горлі" },
      "coughing": { fr: "tousser", es: "tosiendo", it: "tossendo", de: "Husten", uk: "кашель" },
      "medications": { fr: "médicaments", es: "medicamentos", it: "farmaci", de: "Medikamente", uk: "ліки" },
      "allergies": { fr: "allergies", es: "alergias", it: "allergie", de: "Allergien", uk: "алергії" },
      "remedy": { fr: "remède", es: "remedio", it: "rimedio", de: "Heilmittel", uk: "засіб" },
      "tablets": { fr: "comprimés", es: "pastillas", it: "compresse", de: "Tabletten", uk: "таблетки" },
      "fluids": { fr: "liquides", es: "líquidos", it: "liquidi", de: "Flüssigkeiten", uk: "рідина" }
    }
  },
  {
    slug: "car-rental",
    title: "Renting a Car",
    level: "B1",
    accent: "US",
    audioUrl: "/audio/listening/car-rental.mp3",
    text: "Good morning, welcome to QuickDrive Car Rental. How can I assist you?\nHi, I have a reservation for a compact car. The name is Martinez.\nLet me check that for you. Yes, here it is. A compact car for five days, picking up today and returning Friday.\nThat's correct.\nMay I see your driver's license and a credit card for the deposit?\nSure, here they are.\nThank you. Now, would you like to add any insurance coverage? We offer collision damage waiver and personal accident insurance.\nWhat does the collision damage waiver cover?\nIt covers any damage to the vehicle in case of an accident. Without it, you'd be responsible for the full repair costs.\nI'll take the collision coverage then. How much extra is that?\nIt's fifteen dollars per day. Would you also like a GPS navigation system?\nYes, that would be helpful since I don't know the area.\nPerfect. Your total comes to two hundred eighty-five dollars. The car is in parking space B twelve.",
    glossary: {
      "reservation": { fr: "réservation", es: "reserva", it: "prenotazione", de: "Reservierung", uk: "бронювання" },
      "compact": { fr: "compacte", es: "compacto", it: "compatta", de: "Kompakt", uk: "компактний" },
      "deposit": { fr: "caution", es: "depósito", it: "deposito", de: "Kaution", uk: "застава" },
      "insurance": { fr: "assurance", es: "seguro", it: "assicurazione", de: "Versicherung", uk: "страхування" },
      "collision": { fr: "collision", es: "colisión", it: "collisione", de: "Kollision", uk: "зіткнення" },
      "waiver": { fr: "renonciation", es: "exención", it: "esonero", de: "Verzicht", uk: "відмова" },
      "damage": { fr: "dommages", es: "daños", it: "danni", de: "Schäden", uk: "пошкодження" },
      "repair": { fr: "réparation", es: "reparación", it: "riparazione", de: "Reparatur", uk: "ремонт" },
      "GPS": { fr: "GPS", es: "GPS", it: "GPS", de: "GPS", uk: "GPS" },
      "navigation": { fr: "navigation", es: "navegación", it: "navigazione", de: "Navigation", uk: "навігація" }
    }
  },
  {
    slug: "apartment-viewing",
    title: "Viewing an Apartment",
    level: "B2",
    accent: "UK",
    audioUrl: "/audio/listening/apartment-viewing.mp3",
    text: "Hello, you must be here for the viewing. Please, come in.\nThank you. This looks lovely from the outside.\nAs you can see, this is the open-plan living area. It gets plenty of natural light from these large windows.\nIt's very spacious. How many square metres is the flat?\nThe total floor space is seventy-five square metres. There are two bedrooms through here.\nThe master bedroom is quite generous. Is that a built-in wardrobe?\nYes, both bedrooms have built-in storage. The bathroom was renovated last year and has underfloor heating.\nThat's a nice touch. What are the utility bills like?\nThe previous tenants paid around one hundred twenty pounds a month for gas and electricity. The property has double glazing which helps with insulation.\nAnd what about the lease terms?\nIt's a minimum twelve-month contract. The rent is one thousand four hundred pounds per month, plus a six-week deposit.\nWhen would it be available to move in?\nThe first of next month.",
    glossary: {
      "viewing": { fr: "visite", es: "visita", it: "visita", de: "Besichtigung", uk: "перегляд" },
      "open-plan": { fr: "décloisonné", es: "de planta abierta", it: "open space", de: "offen gestaltet", uk: "відкрите планування" },
      "spacious": { fr: "spacieux", es: "espacioso", it: "spazioso", de: "geräumig", uk: "просторий" },
      "square metres": { fr: "mètres carrés", es: "metros cuadrados", it: "metri quadrati", de: "Quadratmeter", uk: "квадратних метрів" },
      "built-in": { fr: "intégré", es: "empotrado", it: "incorporato", de: "eingebaut", uk: "вбудований" },
      "renovated": { fr: "rénové", es: "renovado", it: "ristrutturato", de: "renoviert", uk: "відремонтований" },
      "underfloor heating": { fr: "chauffage au sol", es: "suelo radiante", it: "riscaldamento a pavimento", de: "Fußbodenheizung", uk: "тепла підлога" },
      "utility bills": { fr: "charges", es: "facturas", it: "bollette", de: "Nebenkosten", uk: "комунальні платежі" },
      "double glazing": { fr: "double vitrage", es: "doble acristalamiento", it: "doppi vetri", de: "Doppelverglasung", uk: "склопакети" },
      "lease": { fr: "bail", es: "contrato", it: "contratto", de: "Mietvertrag", uk: "оренда" },
      "deposit": { fr: "caution", es: "depósito", it: "caparra", de: "Kaution", uk: "застава" }
    }
  },
  {
    slug: "podcast-technology",
    title: "Technology Podcast",
    level: "B2",
    accent: "US",
    audioUrl: "/audio/listening/podcast-technology.mp3",
    text: "Welcome back to Tech Today, the podcast where we explore the latest innovations shaping our world.\nToday we're discussing artificial intelligence and its impact on everyday life.\nOver the past decade, AI has evolved from a niche technology to something we interact with daily, often without even realizing it.\nFrom the recommendations you get on streaming platforms to the voice assistants in your smartphones, AI is everywhere.\nBut what does this mean for the future of work? Many experts predict significant changes in the job market.\nWhile some roles may become automated, new opportunities are emerging in fields like machine learning engineering and data science.\nThe key is adaptability. Workers who continuously update their skills will thrive in this new landscape.\nOf course, there are ethical considerations too. Questions about privacy, bias in algorithms, and the environmental cost of training large models are increasingly important.\nNext week, we'll be joined by a leading researcher to discuss these challenges in depth.\nUntil then, stay curious and keep exploring.",
    glossary: {
      "innovations": { fr: "innovations", es: "innovaciones", it: "innovazioni", de: "Innovationen", uk: "інновації" },
      "artificial intelligence": { fr: "intelligence artificielle", es: "inteligencia artificial", it: "intelligenza artificiale", de: "künstliche Intelligenz", uk: "штучний інтелект" },
      "evolved": { fr: "évolué", es: "evolucionado", it: "evoluto", de: "entwickelt", uk: "еволюціонував" },
      "niche": { fr: "niche", es: "nicho", it: "nicchia", de: "Nische", uk: "ніша" },
      "streaming": { fr: "streaming", es: "streaming", it: "streaming", de: "Streaming", uk: "стрімінг" },
      "automated": { fr: "automatisé", es: "automatizado", it: "automatizzato", de: "automatisiert", uk: "автоматизований" },
      "machine learning": { fr: "apprentissage automatique", es: "aprendizaje automático", it: "machine learning", de: "maschinelles Lernen", uk: "машинне навчання" },
      "adaptability": { fr: "adaptabilité", es: "adaptabilidad", it: "adattabilità", de: "Anpassungsfähigkeit", uk: "адаптивність" },
      "ethical": { fr: "éthique", es: "ético", it: "etico", de: "ethisch", uk: "етичний" },
      "algorithms": { fr: "algorithmes", es: "algoritmos", it: "algoritmi", de: "Algorithmen", uk: "алгоритми" },
      "bias": { fr: "biais", es: "sesgo", it: "pregiudizio", de: "Voreingenommenheit", uk: "упередженість" }
    }
  }
];

export const getListeningExerciseBySlug = (slug: string): ListeningExercise | undefined => {
  return listeningExercises.find(ex => ex.slug === slug);
};
