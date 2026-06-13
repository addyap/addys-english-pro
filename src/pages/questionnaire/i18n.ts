// Translation dictionaries for the standalone /questionnaire page.
// Source of truth: French. Other languages derived from it.

export type LangCode = "fr" | "en" | "es" | "de" | "it" | "pt" | "zh" | "ar";

export const LANGS: { code: LangCode; flag: string; label: string; rtl?: boolean }[] = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "pt", flag: "🇵🇹", label: "Português" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
  { code: "ar", flag: "🇸🇦", label: "العربية", rtl: true },
];

type Dict = {
  meta: { title: string; subtitle: string; privacy: string };
  cta: { continue: string; back: string; submit: string };
  progress: { step: string }; // "Étape {n} sur {total}"
  errors: { required: string; email: string; submit: string };
  thanks: {
    title: string; // uses {name}
    subtitle: string;
    subtitleEmailFailed: string;
    summary: string;
    contactLabel: string;
  };
  step1: {
    title: string;
    firstName: string; lastName: string; email: string; phone: string;
    nativeLang: string; country: string; chooseOption: string;
    natives: { fr: string; de: string; es: string; it: string; pt: string; ar: string; zh: string; ja: string; ru: string; other: string };
    countries: { fr: string; be: string; ch: string; lu: string; de: string; es: string; it: string; uk: string; us: string; other: string };
  };
  step2: {
    title: string;
    cefr: string;
    cefrDesc: { A1: string; A2: string; B1: string; B2: string; C1: string; C2: string };
    weakAreas: string;
    weakAreasOpts: { speaking: string; listening: string; writing: string; reading: string; grammar: string; vocab: string; pronunciation: string; fluency: string };
    lastUse: string;
    lastUseOpts: { daily: string; lastMonth: string; m1to6: string; m6to12: string; y1to3: string; over3y: string; never: string };
  };
  step3: {
    title: string;
    context: string;
    contexts: {
      pro: { t: string; s: string };
      travel: { t: string; s: string };
      exam: { t: string; s: string };
      social: { t: string; s: string };
      academic: { t: string; s: string };
      other: { t: string; s: string };
    };
    goals: string;
    goalsOpts: { fluency: string; confidence: string; presentations: string; meetings: string; emails: string; negotiate: string; certification: string; pronunciation: string; other: string };
    deadline: string;
    deadlineOpts: { none: string; m1: string; m1to3: string; m3to6: string; m6to12: string; over12: string };
    notes: string;
  };
  step4: {
    title: string;
    format: string;
    formats: { online: string; inPerson: string; either: string };
    sessionType: string;
    sessionTypes: { individual: string; smallGroup: string; corporate: string; openToAny: string };
    hoursPerWeek: string; // {n}
    slots: string;
    slotsOpts: { weekdayMornings: string; weekdayLunches: string; weekdayAfternoons: string; weekdayEvenings: string; weekends: string; flexible: string };
    startDate: string;
    startDateOpts: { asap: string; w2: string; m1: string; m1to3: string; researching: string };
  };
  step5: {
    title: string;
    source: string;
    sourceOpts: { google: string; linkedin: string; word: string; employer: string; instagram: string; cpf: string; other: string };
    pastExperience: string;
    pastExperienceOpts: { firstTime: string; school: string; private: string };
    teachingStyle: string;
    teachingStyleOpts: { speaking: string; grammar: string; roleplay: string; written: string; listening: string; casual: string; structured: string };
    notes: string;
    privacy: string;
  };
};

const fr: Dict = {
  meta: {
    title: "Votre profil de formation en anglais",
    subtitle: "Quelques questions pour concevoir le programme de formation idéal pour vous. Cela prend environ 3 minutes.",
    privacy: "🔒 Vos informations sont utilisées uniquement pour personnaliser votre proposition de formation. Je vous recontacte sous 48 heures.",
  },
  cta: { continue: "Continuer", back: "Retour", submit: "Envoyer mon profil →" },
  progress: { step: "Étape {n} sur {total}" },
  errors: { required: "Ce champ est obligatoire", email: "Veuillez entrer une adresse email valide", submit: "Une erreur est survenue. Réessayez ou écrivez à formations@antonyaddy.com." },
  thanks: {
    title: "Merci, {name} !",
    subtitle: "J'ai bien reçu vos réponses et je reviens vers vous sous 48 heures.",
    subtitleEmailFailed: "Vos réponses ont bien été enregistrées, mais l'envoi de la notification a échoué. Pour une réponse rapide, contactez-moi directement sur WhatsApp.",
    summary: "Récapitulatif de vos réponses",
    contactLabel: "Email de contact",
  },
  step1: {
    title: "À propos de vous",
    firstName: "Prénom", lastName: "Nom", email: "Adresse email", phone: "Téléphone (optionnel)",
    nativeLang: "Langue maternelle", country: "Pays de résidence", chooseOption: "— Choisir —",
    natives: { fr: "Français", de: "Allemand", es: "Espagnol", it: "Italien", pt: "Portugais", ar: "Arabe", zh: "Mandarin", ja: "Japonais", ru: "Russe", other: "Autre" },
    countries: { fr: "France", be: "Belgique", ch: "Suisse", lu: "Luxembourg", de: "Allemagne", es: "Espagne", it: "Italie", uk: "Royaume-Uni", us: "États-Unis", other: "Autre" },
  },
  step2: {
    title: "Niveau actuel",
    cefr: "Votre niveau CEFR",
    cefrDesc: { A1: "Débutant", A2: "Élémentaire", B1: "Intermédiaire", B2: "Intermédiaire supérieur", C1: "Avancé", C2: "Maîtrise" },
    weakAreas: "Compétences les plus faibles",
    weakAreasOpts: { speaking: "Expression orale", listening: "Compréhension orale", writing: "Expression écrite", reading: "Compréhension écrite", grammar: "Grammaire", vocab: "Vocabulaire", pronunciation: "Prononciation", fluency: "Confiance / fluidité" },
    lastUse: "Dernière utilisation régulière de l'anglais",
    lastUseOpts: { daily: "Quotidien", lastMonth: "Dans le dernier mois", m1to6: "Il y a 1–6 mois", m6to12: "Il y a 6–12 mois", y1to3: "Il y a 1–3 ans", over3y: "Il y a plus de 3 ans", never: "Je ne l'ai jamais vraiment étudié" },
  },
  step3: {
    title: "Objectifs et besoins",
    context: "Contexte principal d'utilisation",
    contexts: {
      pro: { t: "Professionnel / Business", s: "Réunions, emails, négociations" },
      travel: { t: "Voyages & Vie quotidienne", s: "Tourisme, expatriation, usage quotidien" },
      exam: { t: "Préparation d'examen", s: "TOEIC, IELTS, TOEFL, etc." },
      social: { t: "Social / Culturel", s: "Amis, médias, voyages" },
      academic: { t: "Académique", s: "Études, recherche, publications" },
      other: { t: "Autre", s: "Précisez ci-dessous" },
    },
    goals: "Objectifs principaux",
    goalsOpts: { fluency: "Parler plus couramment", confidence: "Gagner en confiance", presentations: "Faire des présentations", meetings: "Animer/participer aux réunions", emails: "Rédiger emails & rapports", negotiate: "Négocier & convaincre", certification: "Passer une certification", pronunciation: "Améliorer ma prononciation", other: "Autre" },
    deadline: "Échéance",
    deadlineOpts: { none: "Pas d'échéance", m1: "Sous 1 mois", m1to3: "1–3 mois", m3to6: "3–6 mois", m6to12: "6–12 mois", over12: "Plus de 12 mois" },
    notes: "Souhaitez-vous ajouter quelque chose sur votre objectif ou votre situation ?",
  },
  step4: {
    title: "Format et disponibilités",
    format: "Format de séance préféré",
    formats: { online: "En ligne (visio)", inPerson: "En présentiel", either: "Indifférent" },
    sessionType: "Type de séance",
    sessionTypes: { individual: "Individuel (en tête-à-tête)", smallGroup: "Petit groupe (2–4 personnes)", corporate: "Entreprise / formation d'équipe", openToAny: "Ouvert à tout" },
    hoursPerWeek: "{n} h / semaine",
    slots: "Créneaux préférés",
    slotsOpts: { weekdayMornings: "Matins en semaine", weekdayLunches: "Pauses déjeuner en semaine", weekdayAfternoons: "Après-midis en semaine", weekdayEvenings: "Soirs en semaine", weekends: "Week-ends", flexible: "Flexible" },
    startDate: "Date de démarrage idéale",
    startDateOpts: { asap: "Dès que possible", w2: "Sous 2 semaines", m1: "Sous 1 mois", m1to3: "Dans 1–3 mois", researching: "Je me renseigne encore" },
  },
  step5: {
    title: "Derniers détails",
    source: "Comment avez-vous entendu parler de mes services ?",
    sourceOpts: { google: "Google / moteur de recherche", linkedin: "LinkedIn", word: "Bouche-à-oreille / recommandation", employer: "Mon employeur / service RH", instagram: "Instagram / réseaux sociaux", cpf: "Une autre plateforme de formation", other: "Autre" },
    pastExperience: "Avez-vous déjà suivi une formation d'anglais ?",
    pastExperienceOpts: { firstTime: "Non, ce serait ma première fois", school: "Uniquement à l'école / université", private: "Oui, du coaching privé" },
    teachingStyle: "Quel style d'enseignement vous convient le mieux ?",
    teachingStyleOpts: { speaking: "Beaucoup de pratique orale", grammar: "Explications de grammaire structurées", roleplay: "Jeux de rôle et mises en situation", written: "Exercices écrits", listening: "Écoute et travail audio", casual: "Style décontracté et informel", structured: "Méthode structurée et rigoureuse" },
    notes: "Y a-t-il autre chose que vous aimeriez me faire savoir ?",
    privacy: "Vos données restent confidentielles. Je vous réponds personnellement sous 48 heures.",
  },
};

const en: Dict = {
  meta: {
    title: "Your English training profile",
    subtitle: "A few questions to design the ideal training programme for you. It takes about 3 minutes.",
    privacy: "🔒 Your information is used only to tailor your training proposal. I'll get back to you within 48 hours.",
  },
  cta: { continue: "Continue", back: "Back", submit: "Send my profile →" },
  progress: { step: "Step {n} of {total}" },
  errors: { required: "This field is required", email: "Please enter a valid email address", submit: "Something went wrong. Try again or email formations@antonyaddy.com." },
  thanks: { title: "Thank you, {name}!", subtitle: "I've received your answers and will get back to you within 48 hours.", subtitleEmailFailed: "Your answers have been saved, but the notification email failed to send. For a quick response, contact me directly on WhatsApp.", summary: "Summary of your answers", contactLabel: "Contact email" },
  step1: {
    title: "About you",
    firstName: "First name", lastName: "Last name", email: "Email address", phone: "Phone (optional)",
    nativeLang: "Native language", country: "Country of residence", chooseOption: "— Choose —",
    natives: { fr: "French", de: "German", es: "Spanish", it: "Italian", pt: "Portuguese", ar: "Arabic", zh: "Mandarin", ja: "Japanese", ru: "Russian", other: "Other" },
    countries: { fr: "France", be: "Belgium", ch: "Switzerland", lu: "Luxembourg", de: "Germany", es: "Spain", it: "Italy", uk: "United Kingdom", us: "United States", other: "Other" },
  },
  step2: {
    title: "Current level",
    cefr: "Your CEFR level",
    cefrDesc: { A1: "Beginner", A2: "Elementary", B1: "Intermediate", B2: "Upper-intermediate", C1: "Advanced", C2: "Proficient" },
    weakAreas: "Weakest skills",
    weakAreasOpts: { speaking: "Speaking", listening: "Listening", writing: "Writing", reading: "Reading", grammar: "Grammar", vocab: "Vocabulary", pronunciation: "Pronunciation", fluency: "Confidence / fluency" },
    lastUse: "Last regular use of English",
    lastUseOpts: { daily: "Daily", lastMonth: "Within the last month", m1to6: "1–6 months ago", m6to12: "6–12 months ago", y1to3: "1–3 years ago", over3y: "Over 3 years ago", never: "I've never really studied it" },
  },
  step3: {
    title: "Goals & needs",
    context: "Main usage context",
    contexts: {
      pro: { t: "Professional / Business", s: "Meetings, emails, negotiations" },
      travel: { t: "Travel & Daily life", s: "Tourism, expat life, daily use" },
      exam: { t: "Exam preparation", s: "TOEIC, IELTS, TOEFL, etc." },
      social: { t: "Social / Cultural", s: "Friends, media, travel" },
      academic: { t: "Academic", s: "Studies, research, publications" },
      other: { t: "Other", s: "Specify below" },
    },
    goals: "Main goals",
    goalsOpts: { fluency: "Speak more fluently", confidence: "Build confidence", presentations: "Give presentations", meetings: "Lead/join meetings", emails: "Write emails & reports", negotiate: "Negotiate & persuade", certification: "Pass a certification", pronunciation: "Improve pronunciation", other: "Other" },
    deadline: "Deadline",
    deadlineOpts: { none: "No deadline", m1: "Within 1 month", m1to3: "1–3 months", m3to6: "3–6 months", m6to12: "6–12 months", over12: "Over 12 months" },
    notes: "Anything you'd like to add about your goal or situation?",
  },
  step4: {
    title: "Format & availability",
    format: "Preferred session format",
    formats: { online: "Online (video)", inPerson: "In person", either: "Either" },
    sessionType: "Session type",
    sessionTypes: { individual: "One-to-one", smallGroup: "Small group (2–4)", corporate: "Corporate / team training", openToAny: "Open to anything" },
    hoursPerWeek: "{n} h / week",
    slots: "Preferred time slots",
    slotsOpts: { weekdayMornings: "Weekday mornings", weekdayLunches: "Weekday lunch breaks", weekdayAfternoons: "Weekday afternoons", weekdayEvenings: "Weekday evenings", weekends: "Weekends", flexible: "Flexible" },
    startDate: "Ideal start date",
    startDateOpts: { asap: "As soon as possible", w2: "Within 2 weeks", m1: "Within 1 month", m1to3: "In 1–3 months", researching: "Still researching" },
  },
  step5: {
    title: "Final details",
    source: "How did you hear about my services?",
    sourceOpts: { google: "Google / search engine", linkedin: "LinkedIn", word: "Word of mouth / referral", employer: "My employer / HR", instagram: "Instagram / social media", cpf: "Another training platform", other: "Other" },
    pastExperience: "Have you taken English training before?",
    pastExperienceOpts: { firstTime: "No, this would be my first time", school: "Only at school / university", private: "Yes, private coaching" },
    teachingStyle: "Which teaching style suits you best?",
    teachingStyleOpts: { speaking: "Lots of speaking practice", grammar: "Structured grammar explanations", roleplay: "Role-plays and scenarios", written: "Written exercises", listening: "Listening & audio work", casual: "Casual and informal", structured: "Structured and rigorous" },
    notes: "Anything else you'd like me to know?",
    privacy: "Your data stays confidential. I'll personally reply within 48 hours.",
  },
};

const es: Dict = {
  meta: {
    title: "Tu perfil de formación en inglés",
    subtitle: "Unas preguntas para diseñar el programa ideal para ti. Tarda unos 3 minutos.",
    privacy: "🔒 Tus datos solo se usan para personalizar tu propuesta. Te respondo en menos de 48 horas.",
  },
  cta: { continue: "Continuar", back: "Atrás", submit: "Enviar mi perfil →" },
  progress: { step: "Paso {n} de {total}" },
  errors: { required: "Este campo es obligatorio", email: "Introduce un correo válido", submit: "Algo salió mal. Inténtalo de nuevo o escribe a formations@antonyaddy.com." },
  thanks: { title: "¡Gracias, {name}!", subtitle: "He recibido tus respuestas y te contactaré en menos de 48 horas.", subtitleEmailFailed: "Tus respuestas se han guardado, pero el envío de la notificación ha fallado. Para una respuesta rápida, contáctame directamente por WhatsApp.", summary: "Resumen de tus respuestas", contactLabel: "Correo de contacto" },
  step1: {
    title: "Sobre ti",
    firstName: "Nombre", lastName: "Apellido", email: "Correo electrónico", phone: "Teléfono (opcional)",
    nativeLang: "Lengua materna", country: "País de residencia", chooseOption: "— Elegir —",
    natives: { fr: "Francés", de: "Alemán", es: "Español", it: "Italiano", pt: "Portugués", ar: "Árabe", zh: "Mandarín", ja: "Japonés", ru: "Ruso", other: "Otra" },
    countries: { fr: "Francia", be: "Bélgica", ch: "Suiza", lu: "Luxemburgo", de: "Alemania", es: "España", it: "Italia", uk: "Reino Unido", us: "Estados Unidos", other: "Otro" },
  },
  step2: {
    title: "Nivel actual",
    cefr: "Tu nivel MCER",
    cefrDesc: { A1: "Principiante", A2: "Elemental", B1: "Intermedio", B2: "Intermedio alto", C1: "Avanzado", C2: "Maestría" },
    weakAreas: "Habilidades más débiles",
    weakAreasOpts: { speaking: "Expresión oral", listening: "Comprensión oral", writing: "Expresión escrita", reading: "Comprensión escrita", grammar: "Gramática", vocab: "Vocabulario", pronunciation: "Pronunciación", fluency: "Confianza / fluidez" },
    lastUse: "Último uso regular del inglés",
    lastUseOpts: { daily: "A diario", lastMonth: "El último mes", m1to6: "Hace 1–6 meses", m6to12: "Hace 6–12 meses", y1to3: "Hace 1–3 años", over3y: "Hace más de 3 años", never: "Nunca lo he estudiado realmente" },
  },
  step3: {
    title: "Objetivos y necesidades",
    context: "Contexto principal de uso",
    contexts: {
      pro: { t: "Profesional / Negocios", s: "Reuniones, correos, negociaciones" },
      travel: { t: "Viajes y vida diaria", s: "Turismo, expatriación, uso diario" },
      exam: { t: "Preparación de examen", s: "TOEIC, IELTS, TOEFL, etc." },
      social: { t: "Social / Cultural", s: "Amigos, medios, viajes" },
      academic: { t: "Académico", s: "Estudios, investigación, publicaciones" },
      other: { t: "Otro", s: "Especifica abajo" },
    },
    goals: "Objetivos principales",
    goalsOpts: { fluency: "Hablar con más fluidez", confidence: "Ganar confianza", presentations: "Hacer presentaciones", meetings: "Liderar/participar en reuniones", emails: "Escribir correos e informes", negotiate: "Negociar y convencer", certification: "Obtener una certificación", pronunciation: "Mejorar la pronunciación", other: "Otro" },
    deadline: "Plazo",
    deadlineOpts: { none: "Sin plazo", m1: "En 1 mes", m1to3: "1–3 meses", m3to6: "3–6 meses", m6to12: "6–12 meses", over12: "Más de 12 meses" },
    notes: "¿Algo más sobre tu objetivo o situación?",
  },
  step4: {
    title: "Formato y disponibilidad",
    format: "Formato de sesión preferido",
    formats: { online: "En línea (video)", inPerson: "Presencial", either: "Indiferente" },
    sessionType: "Tipo de sesión",
    sessionTypes: { individual: "Individual", smallGroup: "Grupo reducido (2–4)", corporate: "Empresa / equipo", openToAny: "Abierto a todo" },
    hoursPerWeek: "{n} h / semana",
    slots: "Franjas preferidas",
    slotsOpts: { weekdayMornings: "Mañanas entre semana", weekdayLunches: "Almuerzos entre semana", weekdayAfternoons: "Tardes entre semana", weekdayEvenings: "Noches entre semana", weekends: "Fines de semana", flexible: "Flexible" },
    startDate: "Fecha ideal de inicio",
    startDateOpts: { asap: "Lo antes posible", w2: "En 2 semanas", m1: "En 1 mes", m1to3: "En 1–3 meses", researching: "Aún investigando" },
  },
  step5: {
    title: "Últimos detalles",
    source: "¿Cómo conociste mis servicios?",
    sourceOpts: { google: "Google / buscador", linkedin: "LinkedIn", word: "Boca a boca / recomendación", employer: "Mi empleador / RR. HH.", instagram: "Instagram / redes", cpf: "Otra plataforma de formación", other: "Otro" },
    pastExperience: "¿Has hecho formación de inglés antes?",
    pastExperienceOpts: { firstTime: "No, sería la primera vez", school: "Solo en la escuela / universidad", private: "Sí, coaching privado" },
    teachingStyle: "¿Qué estilo de enseñanza te conviene más?",
    teachingStyleOpts: { speaking: "Mucha práctica oral", grammar: "Explicaciones de gramática estructuradas", roleplay: "Juegos de rol y casos", written: "Ejercicios escritos", listening: "Audio y escucha", casual: "Estilo informal y relajado", structured: "Método estructurado y riguroso" },
    notes: "¿Algo más que quieras contarme?",
    privacy: "Tus datos son confidenciales. Te respondo personalmente en menos de 48 horas.",
  },
};

const de: Dict = {
  meta: {
    title: "Ihr Englisch-Trainingsprofil",
    subtitle: "Ein paar Fragen, um das ideale Programm für Sie zu gestalten. Dauert ca. 3 Minuten.",
    privacy: "🔒 Ihre Angaben dienen nur der individuellen Angebotserstellung. Ich melde mich innerhalb von 48 Stunden.",
  },
  cta: { continue: "Weiter", back: "Zurück", submit: "Profil senden →" },
  progress: { step: "Schritt {n} von {total}" },
  errors: { required: "Pflichtfeld", email: "Bitte gültige E-Mail eingeben", submit: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder an formations@antonyaddy.com schreiben." },
  thanks: { title: "Danke, {name}!", subtitle: "Ich habe Ihre Antworten erhalten und melde mich innerhalb von 48 Stunden.", subtitleEmailFailed: "Ihre Antworten wurden gespeichert, aber die Benachrichtigung konnte nicht gesendet werden. Für eine schnelle Antwort kontaktieren Sie mich direkt über WhatsApp.", summary: "Zusammenfassung Ihrer Antworten", contactLabel: "Kontakt-E-Mail" },
  step1: {
    title: "Über Sie",
    firstName: "Vorname", lastName: "Nachname", email: "E-Mail", phone: "Telefon (optional)",
    nativeLang: "Muttersprache", country: "Wohnsitzland", chooseOption: "— Auswählen —",
    natives: { fr: "Französisch", de: "Deutsch", es: "Spanisch", it: "Italienisch", pt: "Portugiesisch", ar: "Arabisch", zh: "Mandarin", ja: "Japanisch", ru: "Russisch", other: "Andere" },
    countries: { fr: "Frankreich", be: "Belgien", ch: "Schweiz", lu: "Luxemburg", de: "Deutschland", es: "Spanien", it: "Italien", uk: "Vereinigtes Königreich", us: "USA", other: "Andere" },
  },
  step2: {
    title: "Aktuelles Niveau",
    cefr: "Ihr GER-Niveau",
    cefrDesc: { A1: "Anfänger", A2: "Grundlegend", B1: "Mittelstufe", B2: "Obere Mittelstufe", C1: "Fortgeschritten", C2: "Beherrschung" },
    weakAreas: "Schwächste Fertigkeiten",
    weakAreasOpts: { speaking: "Sprechen", listening: "Hören", writing: "Schreiben", reading: "Lesen", grammar: "Grammatik", vocab: "Wortschatz", pronunciation: "Aussprache", fluency: "Selbstvertrauen / Flüssigkeit" },
    lastUse: "Letzte regelmäßige Nutzung",
    lastUseOpts: { daily: "Täglich", lastMonth: "Im letzten Monat", m1to6: "Vor 1–6 Monaten", m6to12: "Vor 6–12 Monaten", y1to3: "Vor 1–3 Jahren", over3y: "Vor mehr als 3 Jahren", never: "Habe es nie wirklich gelernt" },
  },
  step3: {
    title: "Ziele & Bedürfnisse",
    context: "Hauptverwendungskontext",
    contexts: {
      pro: { t: "Beruf / Business", s: "Meetings, E-Mails, Verhandlungen" },
      travel: { t: "Reisen & Alltag", s: "Tourismus, Auslandsleben, Alltag" },
      exam: { t: "Prüfungsvorbereitung", s: "TOEIC, IELTS, TOEFL usw." },
      social: { t: "Sozial / Kulturell", s: "Freunde, Medien, Reisen" },
      academic: { t: "Akademisch", s: "Studium, Forschung, Publikationen" },
      other: { t: "Andere", s: "Unten angeben" },
    },
    goals: "Hauptziele",
    goalsOpts: { fluency: "Flüssiger sprechen", confidence: "Selbstvertrauen aufbauen", presentations: "Präsentationen halten", meetings: "Meetings leiten/teilnehmen", emails: "E-Mails & Berichte schreiben", negotiate: "Verhandeln & überzeugen", certification: "Zertifizierung bestehen", pronunciation: "Aussprache verbessern", other: "Andere" },
    deadline: "Frist",
    deadlineOpts: { none: "Keine Frist", m1: "Innerhalb 1 Monat", m1to3: "1–3 Monate", m3to6: "3–6 Monate", m6to12: "6–12 Monate", over12: "Über 12 Monate" },
    notes: "Möchten Sie etwas zu Ihrem Ziel ergänzen?",
  },
  step4: {
    title: "Format & Verfügbarkeit",
    format: "Bevorzugtes Format",
    formats: { online: "Online (Video)", inPerson: "Vor Ort", either: "Egal" },
    sessionType: "Art der Sitzung",
    sessionTypes: { individual: "Einzeln", smallGroup: "Kleingruppe (2–4)", corporate: "Firma / Team-Training", openToAny: "Offen für alles" },
    hoursPerWeek: "{n} Std. / Woche",
    slots: "Bevorzugte Zeiten",
    slotsOpts: { weekdayMornings: "Wochentags vormittags", weekdayLunches: "Wochentags mittags", weekdayAfternoons: "Wochentags nachmittags", weekdayEvenings: "Wochentags abends", weekends: "Wochenenden", flexible: "Flexibel" },
    startDate: "Idealer Starttermin",
    startDateOpts: { asap: "So bald wie möglich", w2: "Innerhalb 2 Wochen", m1: "Innerhalb 1 Monat", m1to3: "In 1–3 Monaten", researching: "Noch in Recherche" },
  },
  step5: {
    title: "Letzte Details",
    source: "Wie haben Sie von mir erfahren?",
    sourceOpts: { google: "Google / Suchmaschine", linkedin: "LinkedIn", word: "Empfehlung", employer: "Arbeitgeber / HR", instagram: "Instagram / Social Media", cpf: "Eine andere Trainingsplattform", other: "Andere" },
    pastExperience: "Hatten Sie schon einmal Englischtraining?",
    pastExperienceOpts: { firstTime: "Nein, das wäre das erste Mal", school: "Nur in der Schule / Uni", private: "Ja, Privat-Coaching" },
    teachingStyle: "Welcher Stil passt am besten?",
    teachingStyleOpts: { speaking: "Viel Sprechpraxis", grammar: "Strukturierte Grammatik", roleplay: "Rollenspiele & Szenarien", written: "Schriftliche Übungen", listening: "Hören & Audio", casual: "Locker & informell", structured: "Strukturiert & gründlich" },
    notes: "Möchten Sie mir noch etwas mitteilen?",
    privacy: "Ihre Daten bleiben vertraulich. Antwort innerhalb 48 Stunden.",
  },
};

const it: Dict = {
  meta: {
    title: "Il tuo profilo di formazione in inglese",
    subtitle: "Alcune domande per progettare il programma ideale per te. Bastano circa 3 minuti.",
    privacy: "🔒 I tuoi dati servono solo a personalizzare la proposta. Ti ricontatto entro 48 ore.",
  },
  cta: { continue: "Continua", back: "Indietro", submit: "Invia il mio profilo →" },
  progress: { step: "Passo {n} di {total}" },
  errors: { required: "Campo obbligatorio", email: "Inserisci un'email valida", submit: "Si è verificato un errore. Riprova o scrivi a formations@antonyaddy.com." },
  thanks: { title: "Grazie, {name}!", subtitle: "Ho ricevuto le tue risposte e ti ricontatto entro 48 ore.", subtitleEmailFailed: "Le tue risposte sono state salvate, ma l'invio della notifica è fallito. Per una risposta rapida, contattami direttamente su WhatsApp.", summary: "Riepilogo delle tue risposte", contactLabel: "Email di contatto" },
  step1: {
    title: "Su di te",
    firstName: "Nome", lastName: "Cognome", email: "Email", phone: "Telefono (facoltativo)",
    nativeLang: "Lingua madre", country: "Paese di residenza", chooseOption: "— Scegli —",
    natives: { fr: "Francese", de: "Tedesco", es: "Spagnolo", it: "Italiano", pt: "Portoghese", ar: "Arabo", zh: "Cinese", ja: "Giapponese", ru: "Russo", other: "Altra" },
    countries: { fr: "Francia", be: "Belgio", ch: "Svizzera", lu: "Lussemburgo", de: "Germania", es: "Spagna", it: "Italia", uk: "Regno Unito", us: "Stati Uniti", other: "Altro" },
  },
  step2: {
    title: "Livello attuale",
    cefr: "Il tuo livello QCER",
    cefrDesc: { A1: "Principiante", A2: "Elementare", B1: "Intermedio", B2: "Intermedio alto", C1: "Avanzato", C2: "Padronanza" },
    weakAreas: "Competenze più deboli",
    weakAreasOpts: { speaking: "Parlato", listening: "Ascolto", writing: "Scrittura", reading: "Lettura", grammar: "Grammatica", vocab: "Vocabolario", pronunciation: "Pronuncia", fluency: "Fiducia / fluidità" },
    lastUse: "Ultimo uso regolare dell'inglese",
    lastUseOpts: { daily: "Ogni giorno", lastMonth: "Nell'ultimo mese", m1to6: "1–6 mesi fa", m6to12: "6–12 mesi fa", y1to3: "1–3 anni fa", over3y: "Oltre 3 anni fa", never: "Non l'ho mai studiato davvero" },
  },
  step3: {
    title: "Obiettivi & esigenze",
    context: "Contesto principale d'uso",
    contexts: {
      pro: { t: "Professionale / Business", s: "Riunioni, email, negoziazioni" },
      travel: { t: "Viaggi & vita quotidiana", s: "Turismo, espatrio, uso quotidiano" },
      exam: { t: "Preparazione esame", s: "TOEIC, IELTS, TOEFL, ecc." },
      social: { t: "Sociale / Culturale", s: "Amici, media, viaggi" },
      academic: { t: "Accademico", s: "Studi, ricerca, pubblicazioni" },
      other: { t: "Altro", s: "Specifica sotto" },
    },
    goals: "Obiettivi principali",
    goalsOpts: { fluency: "Parlare più fluentemente", confidence: "Acquisire sicurezza", presentations: "Fare presentazioni", meetings: "Condurre/partecipare a riunioni", emails: "Scrivere email & report", negotiate: "Negoziare & convincere", certification: "Ottenere una certificazione", pronunciation: "Migliorare la pronuncia", other: "Altro" },
    deadline: "Scadenza",
    deadlineOpts: { none: "Nessuna scadenza", m1: "Entro 1 mese", m1to3: "1–3 mesi", m3to6: "3–6 mesi", m6to12: "6–12 mesi", over12: "Oltre 12 mesi" },
    notes: "Vuoi aggiungere qualcosa sul tuo obiettivo o sulla tua situazione?",
  },
  step4: {
    title: "Formato & disponibilità",
    format: "Formato preferito",
    formats: { online: "Online (video)", inPerson: "In presenza", either: "Indifferente" },
    sessionType: "Tipo di sessione",
    sessionTypes: { individual: "Individuale", smallGroup: "Piccolo gruppo (2–4)", corporate: "Aziendale / team", openToAny: "Aperto a tutto" },
    hoursPerWeek: "{n} h / settimana",
    slots: "Fasce preferite",
    slotsOpts: { weekdayMornings: "Mattine feriali", weekdayLunches: "Pause pranzo feriali", weekdayAfternoons: "Pomeriggi feriali", weekdayEvenings: "Sere feriali", weekends: "Weekend", flexible: "Flessibile" },
    startDate: "Data ideale di inizio",
    startDateOpts: { asap: "Il prima possibile", w2: "Entro 2 settimane", m1: "Entro 1 mese", m1to3: "Tra 1–3 mesi", researching: "Mi sto ancora informando" },
  },
  step5: {
    title: "Ultimi dettagli",
    source: "Come hai conosciuto i miei servizi?",
    sourceOpts: { google: "Google / motore di ricerca", linkedin: "LinkedIn", word: "Passaparola / referral", employer: "Datore di lavoro / HR", instagram: "Instagram / social", cpf: "Un'altra piattaforma di formazione", other: "Altro" },
    pastExperience: "Hai già seguito una formazione di inglese?",
    pastExperienceOpts: { firstTime: "No, sarebbe la prima volta", school: "Solo a scuola / università", private: "Sì, coaching privato" },
    teachingStyle: "Quale stile didattico ti si addice?",
    teachingStyleOpts: { speaking: "Molta pratica orale", grammar: "Spiegazioni di grammatica strutturate", roleplay: "Giochi di ruolo e situazioni", written: "Esercizi scritti", listening: "Ascolto e audio", casual: "Stile informale", structured: "Metodo strutturato e rigoroso" },
    notes: "C'è altro che vorresti farmi sapere?",
    privacy: "I tuoi dati sono riservati. Risposta personale entro 48 ore.",
  },
};

const pt: Dict = {
  meta: {
    title: "O seu perfil de formação em inglês",
    subtitle: "Algumas perguntas para desenhar o programa ideal para si. Demora cerca de 3 minutos.",
    privacy: "🔒 Os seus dados servem apenas para personalizar a proposta. Respondo em 48 horas.",
  },
  cta: { continue: "Continuar", back: "Voltar", submit: "Enviar o meu perfil →" },
  progress: { step: "Passo {n} de {total}" },
  errors: { required: "Campo obrigatório", email: "Introduza um email válido", submit: "Algo correu mal. Tente novamente ou escreva para formations@antonyaddy.com." },
  thanks: { title: "Obrigado, {name}!", subtitle: "Recebi as suas respostas e responder-lhe-ei em 48 horas.", subtitleEmailFailed: "As suas respostas foram guardadas, mas o envio da notificação falhou. Para uma resposta rápida, contacte-me diretamente pelo WhatsApp.", summary: "Resumo das suas respostas", contactLabel: "Email de contacto" },
  step1: {
    title: "Sobre si",
    firstName: "Nome próprio", lastName: "Apelido", email: "Email", phone: "Telefone (opcional)",
    nativeLang: "Língua materna", country: "País de residência", chooseOption: "— Escolher —",
    natives: { fr: "Francês", de: "Alemão", es: "Espanhol", it: "Italiano", pt: "Português", ar: "Árabe", zh: "Mandarim", ja: "Japonês", ru: "Russo", other: "Outra" },
    countries: { fr: "França", be: "Bélgica", ch: "Suíça", lu: "Luxemburgo", de: "Alemanha", es: "Espanha", it: "Itália", uk: "Reino Unido", us: "Estados Unidos", other: "Outro" },
  },
  step2: {
    title: "Nível atual",
    cefr: "O seu nível QECR",
    cefrDesc: { A1: "Iniciante", A2: "Elementar", B1: "Intermédio", B2: "Intermédio alto", C1: "Avançado", C2: "Domínio" },
    weakAreas: "Competências mais fracas",
    weakAreasOpts: { speaking: "Expressão oral", listening: "Compreensão oral", writing: "Expressão escrita", reading: "Compreensão escrita", grammar: "Gramática", vocab: "Vocabulário", pronunciation: "Pronúncia", fluency: "Confiança / fluência" },
    lastUse: "Última utilização regular do inglês",
    lastUseOpts: { daily: "Diariamente", lastMonth: "No último mês", m1to6: "Há 1–6 meses", m6to12: "Há 6–12 meses", y1to3: "Há 1–3 anos", over3y: "Há mais de 3 anos", never: "Nunca o estudei realmente" },
  },
  step3: {
    title: "Objetivos & necessidades",
    context: "Contexto principal de uso",
    contexts: {
      pro: { t: "Profissional / Negócios", s: "Reuniões, emails, negociações" },
      travel: { t: "Viagens & vida diária", s: "Turismo, expatriação, uso diário" },
      exam: { t: "Preparação de exame", s: "TOEIC, IELTS, TOEFL, etc." },
      social: { t: "Social / Cultural", s: "Amigos, media, viagens" },
      academic: { t: "Académico", s: "Estudos, investigação, publicações" },
      other: { t: "Outro", s: "Especifique abaixo" },
    },
    goals: "Objetivos principais",
    goalsOpts: { fluency: "Falar com mais fluência", confidence: "Ganhar confiança", presentations: "Fazer apresentações", meetings: "Liderar/participar em reuniões", emails: "Escrever emails & relatórios", negotiate: "Negociar & convencer", certification: "Obter uma certificação", pronunciation: "Melhorar a pronúncia", other: "Outro" },
    deadline: "Prazo",
    deadlineOpts: { none: "Sem prazo", m1: "Em 1 mês", m1to3: "1–3 meses", m3to6: "3–6 meses", m6to12: "6–12 meses", over12: "Mais de 12 meses" },
    notes: "Quer adicionar algo sobre o seu objetivo ou situação?",
  },
  step4: {
    title: "Formato & disponibilidade",
    format: "Formato de sessão preferido",
    formats: { online: "Online (vídeo)", inPerson: "Presencial", either: "Indiferente" },
    sessionType: "Tipo de sessão",
    sessionTypes: { individual: "Individual", smallGroup: "Pequeno grupo (2–4)", corporate: "Empresa / equipa", openToAny: "Aberto a tudo" },
    hoursPerWeek: "{n} h / semana",
    slots: "Horários preferidos",
    slotsOpts: { weekdayMornings: "Manhãs em dias úteis", weekdayLunches: "Almoços em dias úteis", weekdayAfternoons: "Tardes em dias úteis", weekdayEvenings: "Noites em dias úteis", weekends: "Fins de semana", flexible: "Flexível" },
    startDate: "Data ideal de início",
    startDateOpts: { asap: "O mais rapidamente possível", w2: "Em 2 semanas", m1: "Em 1 mês", m1to3: "Em 1–3 meses", researching: "Ainda a pesquisar" },
  },
  step5: {
    title: "Últimos detalhes",
    source: "Como soube dos meus serviços?",
    sourceOpts: { google: "Google / motor de busca", linkedin: "LinkedIn", word: "Passa-palavra / recomendação", employer: "Empregador / RH", instagram: "Instagram / redes sociais", cpf: "Outra plataforma de formação", other: "Outro" },
    pastExperience: "Já fez formação de inglês antes?",
    pastExperienceOpts: { firstTime: "Não, seria a primeira vez", school: "Apenas na escola / universidade", private: "Sim, coaching privado" },
    teachingStyle: "Que estilo de ensino lhe convém mais?",
    teachingStyleOpts: { speaking: "Muita prática oral", grammar: "Gramática estruturada", roleplay: "Role-plays e cenários", written: "Exercícios escritos", listening: "Áudio e escuta", casual: "Estilo informal", structured: "Método estruturado e rigoroso" },
    notes: "Há algo mais que queira partilhar?",
    privacy: "Os seus dados são confidenciais. Resposta pessoal em 48 horas.",
  },
};

const zh: Dict = {
  meta: {
    title: "您的英语培训档案",
    subtitle: "几个问题，为您量身设计理想的培训方案。约需 3 分钟。",
    privacy: "🔒 您的信息仅用于定制培训方案。我会在 48 小时内回复您。",
  },
  cta: { continue: "继续", back: "返回", submit: "提交我的档案 →" },
  progress: { step: "第 {n} 步，共 {total} 步" },
  errors: { required: "此项为必填", email: "请输入有效的邮箱地址", submit: "出错了，请重试或写信至 formations@antonyaddy.com。" },
  thanks: { title: "谢谢您，{name}！", subtitle: "我已收到您的回答，将在 48 小时内回复。", subtitleEmailFailed: "您的回答已保存，但通知邮件发送失败。如需快速回复，请直接通过 WhatsApp 联系我。", summary: "您的回答摘要", contactLabel: "联系邮箱" },
  step1: {
    title: "关于您",
    firstName: "名", lastName: "姓", email: "邮箱", phone: "电话（可选）",
    nativeLang: "母语", country: "居住国家", chooseOption: "— 请选择 —",
    natives: { fr: "法语", de: "德语", es: "西班牙语", it: "意大利语", pt: "葡萄牙语", ar: "阿拉伯语", zh: "汉语", ja: "日语", ru: "俄语", other: "其他" },
    countries: { fr: "法国", be: "比利时", ch: "瑞士", lu: "卢森堡", de: "德国", es: "西班牙", it: "意大利", uk: "英国", us: "美国", other: "其他" },
  },
  step2: {
    title: "当前水平",
    cefr: "您的 CEFR 等级",
    cefrDesc: { A1: "入门", A2: "基础", B1: "中级", B2: "中高级", C1: "高级", C2: "精通" },
    weakAreas: "最薄弱的技能",
    weakAreasOpts: { speaking: "口语", listening: "听力", writing: "写作", reading: "阅读", grammar: "语法", vocab: "词汇", pronunciation: "发音", fluency: "信心 / 流利度" },
    lastUse: "上次定期使用英语",
    lastUseOpts: { daily: "每天", lastMonth: "上个月内", m1to6: "1–6 个月前", m6to12: "6–12 个月前", y1to3: "1–3 年前", over3y: "3 年以上", never: "几乎没真正学过" },
  },
  step3: {
    title: "目标与需求",
    context: "主要使用场景",
    contexts: {
      pro: { t: "职业 / 商务", s: "会议、邮件、谈判" },
      travel: { t: "旅行与日常", s: "旅游、外派、日常使用" },
      exam: { t: "考试准备", s: "TOEIC、IELTS、TOEFL 等" },
      social: { t: "社交 / 文化", s: "朋友、媒体、旅行" },
      academic: { t: "学术", s: "学习、研究、发表" },
      other: { t: "其他", s: "请在下方说明" },
    },
    goals: "主要目标",
    goalsOpts: { fluency: "更流利地说英语", confidence: "增强信心", presentations: "做演讲", meetings: "主持/参与会议", emails: "撰写邮件与报告", negotiate: "谈判与说服", certification: "通过认证", pronunciation: "改善发音", other: "其他" },
    deadline: "期限",
    deadlineOpts: { none: "没有期限", m1: "1 个月内", m1to3: "1–3 个月", m3to6: "3–6 个月", m6to12: "6–12 个月", over12: "12 个月以上" },
    notes: "想补充关于目标或处境的内容吗？",
  },
  step4: {
    title: "形式与可用时间",
    format: "首选课程形式",
    formats: { online: "在线（视频）", inPerson: "面对面", either: "都可以" },
    sessionType: "课程类型",
    sessionTypes: { individual: "一对一", smallGroup: "小组（2–4 人）", corporate: "企业 / 团队培训", openToAny: "都可以" },
    hoursPerWeek: "每周 {n} 小时",
    slots: "首选时段",
    slotsOpts: { weekdayMornings: "工作日上午", weekdayLunches: "工作日午休", weekdayAfternoons: "工作日下午", weekdayEvenings: "工作日晚上", weekends: "周末", flexible: "灵活" },
    startDate: "理想开始日期",
    startDateOpts: { asap: "尽快", w2: "2 周内", m1: "1 个月内", m1to3: "1–3 个月内", researching: "还在了解中" },
  },
  step5: {
    title: "最后细节",
    source: "您是怎么了解到我的服务的？",
    sourceOpts: { google: "Google / 搜索引擎", linkedin: "LinkedIn", word: "口碑 / 推荐", employer: "雇主 / 人力资源", instagram: "Instagram / 社交媒体", cpf: "其他培训平台", other: "其他" },
    pastExperience: "您之前学过英语培训吗？",
    pastExperienceOpts: { firstTime: "没有，这将是第一次", school: "只在学校 / 大学", private: "有，私教辅导" },
    teachingStyle: "哪种教学风格最适合您？",
    teachingStyleOpts: { speaking: "大量口语练习", grammar: "结构化语法讲解", roleplay: "角色扮演与情景", written: "书面练习", listening: "听力与音频", casual: "轻松随意", structured: "结构严谨" },
    notes: "还有其他想告诉我的吗？",
    privacy: "您的数据严格保密。我会在 48 小时内亲自回复。",
  },
};

const ar: Dict = {
  meta: {
    title: "ملف تدريبك في اللغة الإنجليزية",
    subtitle: "بضعة أسئلة لتصميم البرنامج التدريبي المثالي لك. يستغرق حوالي 3 دقائق.",
    privacy: "🔒 تُستخدم معلوماتك فقط لتخصيص عرض التدريب. سأرد عليك خلال 48 ساعة.",
  },
  cta: { continue: "متابعة", back: "رجوع", submit: "إرسال ملفي ←" },
  progress: { step: "الخطوة {n} من {total}" },
  errors: { required: "هذا الحقل مطلوب", email: "يرجى إدخال بريد إلكتروني صالح", submit: "حدث خطأ. حاول مرة أخرى أو راسل formations@antonyaddy.com." },
  thanks: { title: "شكراً لك، {name}!", subtitle: "تم استلام إجاباتك وسأرد خلال 48 ساعة.", subtitleEmailFailed: "تم حفظ إجاباتك، لكن فشل إرسال الإشعار. للحصول على رد سريع، تواصل معي مباشرة عبر واتساب.", summary: "ملخص إجاباتك", contactLabel: "بريد التواصل" },
  step1: {
    title: "عنك",
    firstName: "الاسم", lastName: "اللقب", email: "البريد الإلكتروني", phone: "الهاتف (اختياري)",
    nativeLang: "اللغة الأم", country: "بلد الإقامة", chooseOption: "— اختر —",
    natives: { fr: "الفرنسية", de: "الألمانية", es: "الإسبانية", it: "الإيطالية", pt: "البرتغالية", ar: "العربية", zh: "الصينية", ja: "اليابانية", ru: "الروسية", other: "أخرى" },
    countries: { fr: "فرنسا", be: "بلجيكا", ch: "سويسرا", lu: "لوكسمبورغ", de: "ألمانيا", es: "إسبانيا", it: "إيطاليا", uk: "المملكة المتحدة", us: "الولايات المتحدة", other: "أخرى" },
  },
  step2: {
    title: "المستوى الحالي",
    cefr: "مستوى CEFR الخاص بك",
    cefrDesc: { A1: "مبتدئ", A2: "أساسي", B1: "متوسط", B2: "فوق المتوسط", C1: "متقدم", C2: "إتقان" },
    weakAreas: "أضعف المهارات",
    weakAreasOpts: { speaking: "التحدث", listening: "الاستماع", writing: "الكتابة", reading: "القراءة", grammar: "القواعد", vocab: "المفردات", pronunciation: "النطق", fluency: "الثقة / الطلاقة" },
    lastUse: "آخر استخدام منتظم للإنجليزية",
    lastUseOpts: { daily: "يومياً", lastMonth: "خلال الشهر الماضي", m1to6: "قبل 1–6 أشهر", m6to12: "قبل 6–12 شهراً", y1to3: "قبل 1–3 سنوات", over3y: "أكثر من 3 سنوات", never: "لم أدرسها فعلاً" },
  },
  step3: {
    title: "الأهداف والاحتياجات",
    context: "السياق الرئيسي للاستخدام",
    contexts: {
      pro: { t: "مهني / أعمال", s: "اجتماعات، بريد إلكتروني، مفاوضات" },
      travel: { t: "السفر والحياة اليومية", s: "السياحة، الإقامة بالخارج، الاستخدام اليومي" },
      exam: { t: "تحضير للامتحان", s: "TOEIC، IELTS، TOEFL إلخ" },
      social: { t: "اجتماعي / ثقافي", s: "أصدقاء، إعلام، سفر" },
      academic: { t: "أكاديمي", s: "دراسة، بحث، نشر" },
      other: { t: "أخرى", s: "حدد أدناه" },
    },
    goals: "الأهداف الرئيسية",
    goalsOpts: { fluency: "التحدث بطلاقة أكبر", confidence: "اكتساب الثقة", presentations: "إلقاء العروض", meetings: "قيادة/المشاركة في الاجتماعات", emails: "كتابة البريد والتقارير", negotiate: "التفاوض والإقناع", certification: "اجتياز شهادة", pronunciation: "تحسين النطق", other: "أخرى" },
    deadline: "الموعد النهائي",
    deadlineOpts: { none: "بدون موعد", m1: "خلال شهر", m1to3: "1–3 أشهر", m3to6: "3–6 أشهر", m6to12: "6–12 شهراً", over12: "أكثر من 12 شهراً" },
    notes: "هل تود إضافة شيء عن هدفك أو وضعك؟",
  },
  step4: {
    title: "الشكل والتوفر",
    format: "شكل الجلسة المفضل",
    formats: { online: "عبر الإنترنت (فيديو)", inPerson: "حضورياً", either: "كلاهما" },
    sessionType: "نوع الجلسة",
    sessionTypes: { individual: "فردي", smallGroup: "مجموعة صغيرة (2–4)", corporate: "شركة / فريق", openToAny: "منفتح لأي شيء" },
    hoursPerWeek: "{n} ساعة / أسبوع",
    slots: "الأوقات المفضلة",
    slotsOpts: { weekdayMornings: "صباح أيام العمل", weekdayLunches: "غداء أيام العمل", weekdayAfternoons: "بعد ظهر أيام العمل", weekdayEvenings: "مساء أيام العمل", weekends: "عطلة نهاية الأسبوع", flexible: "مرن" },
    startDate: "تاريخ البدء المثالي",
    startDateOpts: { asap: "في أقرب وقت", w2: "خلال أسبوعين", m1: "خلال شهر", m1to3: "خلال 1–3 أشهر", researching: "ما زلت أبحث" },
  },
  step5: {
    title: "تفاصيل أخيرة",
    source: "كيف عرفت بخدماتي؟",
    sourceOpts: { google: "Google / محرك بحث", linkedin: "LinkedIn", word: "توصية / تزكية", employer: "صاحب العمل / الموارد البشرية", instagram: "Instagram / وسائل التواصل", cpf: "منصة تدريب أخرى", other: "أخرى" },
    pastExperience: "هل سبق وحضرت تدريباً للغة الإنجليزية؟",
    pastExperienceOpts: { firstTime: "لا، ستكون المرة الأولى", school: "فقط في المدرسة / الجامعة", private: "نعم، تدريب خاص" },
    teachingStyle: "أي أسلوب تدريس يناسبك أكثر؟",
    teachingStyleOpts: { speaking: "كثير من ممارسة المحادثة", grammar: "شرح قواعد منظم", roleplay: "تمثيل أدوار وسيناريوهات", written: "تمارين كتابية", listening: "استماع وعمل صوتي", casual: "أسلوب غير رسمي", structured: "منهجية صارمة ومنظمة" },
    notes: "هل هناك أي شيء آخر تود إخباري به؟",
    privacy: "بياناتك سرية. سأرد عليك شخصياً خلال 48 ساعة.",
  },
};

export const DICT: Record<LangCode, Dict> = { fr, en, es, de, it, pt, zh, ar };
export type { Dict };
