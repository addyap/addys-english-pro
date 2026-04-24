/**
 * Centralized UI strings for AI trainers.
 * Supports all 7 platform languages: en, fr, it, ro, ar, ru, uk.
 * NOTE: Practice text remains in English; only meta-UI is translated.
 */

export type UILang = "en" | "fr" | "it" | "ro" | "ar" | "ru" | "uk";

const SUPPORTED: readonly UILang[] = ["en", "fr", "it", "ro", "ar", "ru", "uk"];

type StringEntry = Partial<Record<UILang, string | ((...args: never[]) => string)>> & {
  en: string | ((...args: never[]) => string);
};

const strings = {
  // ── Common ──
  "sessions.remaining": {
    en: (n: number, max: number) => `${n}/${max} sessions remaining`,
    fr: (n: number, max: number) => `${n}/${max} sessions restantes`,
    it: (n: number, max: number) => `${n}/${max} sessioni rimanenti`,
    ro: (n: number, max: number) => `${n}/${max} sesiuni rămase`,
    ar: (n: number, max: number) => `${n}/${max} جلسات متبقية`,
    ru: (n: number, max: number) => `${n}/${max} сессий осталось`,
    uk: (n: number, max: number) => `${n}/${max} сесій залишилось`,
  },
  "daily.limit.reached": {
    en: (max: number) => `Daily limit reached (${max} sessions per 24h). Please come back tomorrow!`,
    fr: (max: number) => `Limite quotidienne atteinte (${max} sessions / 24h). Revenez demain !`,
    it: (max: number) => `Limite giornaliero raggiunto (${max} sessioni / 24h). Torna domani!`,
    ro: (max: number) => `Limită zilnică atinsă (${max} sesiuni / 24h). Revino mâine!`,
    ar: (max: number) => `تم الوصول إلى الحد اليومي (${max} جلسات / 24 ساعة). يرجى العودة غداً!`,
    ru: (max: number) => `Дневной лимит исчерпан (${max} сессий / 24ч). Возвращайтесь завтра!`,
    uk: (max: number) => `Денний ліміт вичерпано (${max} сесій / 24 год). Поверніться завтра!`,
  },
  "error.rate_limit": {
    en: "Too many requests. Please wait a moment and try again.",
    fr: "Trop de requêtes. Réessayez dans un instant.",
    it: "Troppe richieste. Attendi e riprova.",
    ro: "Prea multe cereri. Așteaptă și încearcă din nou.",
    ar: "طلبات كثيرة جدًا. يرجى الانتظار والمحاولة مرة أخرى.",
    ru: "Слишком много запросов. Подождите и попробуйте снова.",
    uk: "Забагато запитів. Зачекайте та спробуйте знову.",
  },
  "error.credits_exhausted": {
    en: "AI credits exhausted. Please try again later.",
    fr: "Crédits IA épuisés.",
    it: "Crediti AI esauriti. Riprova più tardi.",
    ro: "Credite AI epuizate. Încearcă mai târziu.",
    ar: "نفدت أرصدة الذكاء الاصطناعي. حاول لاحقًا.",
    ru: "AI-кредиты исчерпаны. Попробуйте позже.",
    uk: "AI-кредити вичерпано. Спробуйте пізніше.",
  },
  "error.connection": {
    en: "Connection error. Please try again.",
    fr: "Erreur de connexion. Réessayez.",
    it: "Errore di connessione. Riprova.",
    ro: "Eroare de conexiune. Încearcă din nou.",
    ar: "خطأ في الاتصال. حاول مرة أخرى.",
    ru: "Ошибка соединения. Попробуйте снова.",
    uk: "Помилка з’єднання. Спробуйте знову.",
  },
  "error.feedback": {
    en: "Could not generate feedback. Please try again.",
    fr: "Erreur lors de la génération du feedback.",
    it: "Impossibile generare il feedback. Riprova.",
    ro: "Nu s-a putut genera feedbackul. Încearcă din nou.",
    ar: "تعذر إنشاء التعليقات. حاول مرة أخرى.",
    ru: "Не удалось создать отзыв. Попробуйте снова.",
    uk: "Не вдалося створити відгук. Спробуйте знову.",
  },
  "error.min_messages": {
    en: (n: number) => `Send at least ${n} messages before requesting feedback.`,
    fr: (n: number) => `Envoyez au moins ${n} messages avant de demander le feedback.`,
    it: (n: number) => `Invia almeno ${n} messaggi prima di richiedere il feedback.`,
    ro: (n: number) => `Trimite cel puțin ${n} mesaje înainte de a cere feedback.`,
    ar: (n: number) => `أرسل ${n} رسائل على الأقل قبل طلب التعليقات.`,
    ru: (n: number) => `Отправьте минимум ${n} сообщений перед запросом отзыва.`,
    uk: (n: number) => `Надішліть щонайменше ${n} повідомлень перед запитом відгуку.`,
  },
  "error.min_chars": {
    en: (n: number) => `Write at least ${n} characters.`,
    fr: (n: number) => `Écrivez au moins ${n} caractères.`,
    it: (n: number) => `Scrivi almeno ${n} caratteri.`,
    ro: (n: number) => `Scrie cel puțin ${n} caractere.`,
    ar: (n: number) => `اكتب ${n} حرفًا على الأقل.`,
    ru: (n: number) => `Напишите минимум ${n} символов.`,
    uk: (n: number) => `Напишіть щонайменше ${n} символів.`,
  },

  // ── Chat UI ──
  "chat.placeholder.typing": {
    en: "Type your reply in English…",
    fr: "Écrivez votre réponse en anglais…",
    it: "Scrivi la tua risposta in inglese…",
    ro: "Scrie răspunsul în engleză…",
    ar: "اكتب ردك بالإنجليزية…",
    ru: "Напишите ответ на английском…",
    uk: "Напишіть відповідь англійською…",
  },
  "chat.placeholder.listening": {
    en: "Listening…",
    fr: "Écoute en cours…",
    it: "In ascolto…",
    ro: "Ascult…",
    ar: "جارٍ الاستماع…",
    ru: "Слушаю…",
    uk: "Слухаю…",
  },
  "chat.placeholder.disabled": {
    en: "Please wait…",
    fr: "Veuillez patienter…",
    it: "Attendi…",
    ro: "Așteaptă…",
    ar: "يرجى الانتظار…",
    ru: "Пожалуйста, подождите…",
    uk: "Будь ласка, зачекайте…",
  },
  "chat.mic.active": {
    en: "🎙️ Microphone active — speak in English…",
    fr: "🎙️ Microphone actif — parlez en anglais…",
    it: "🎙️ Microfono attivo — parla in inglese…",
    ro: "🎙️ Microfon activ — vorbește în engleză…",
    ar: "🎙️ الميكروفون يعمل — تحدث بالإنجليزية…",
    ru: "🎙️ Микрофон включён — говорите по-английски…",
    uk: "🎙️ Мікрофон увімкнено — говоріть англійською…",
  },

  // ── Buttons ──
  "btn.back": { en: "Back", fr: "Retour", it: "Indietro", ro: "Înapoi", ar: "رجوع", ru: "Назад", uk: "Назад" },
  "btn.feedback": { en: "Feedback", fr: "Feedback", it: "Feedback", ro: "Feedback", ar: "تعليقات", ru: "Отзыв", uk: "Відгук" },
  "btn.new_session": { en: "New session", fr: "Nouvelle session", it: "Nuova sessione", ro: "Sesiune nouă", ar: "جلسة جديدة", ru: "Новая сессия", uk: "Нова сесія" },
  "btn.retry": { en: "Retry", fr: "Réessayer", it: "Riprova", ro: "Reîncearcă", ar: "أعد المحاولة", ru: "Повторить", uk: "Повторити" },
  "btn.retry_scenario": { en: "Retry Scenario", fr: "Réessayer ce scénario", it: "Riprova scenario", ro: "Reîncearcă scenariul", ar: "أعد السيناريو", ru: "Повторить сценарий", uk: "Повторити сценарій" },
  "btn.new_scenario": { en: "New Scenario", fr: "Nouveau scénario", it: "Nuovo scenario", ro: "Scenariu nou", ar: "سيناريو جديد", ru: "Новый сценарий", uk: "Новий сценарій" },
  "btn.change_mode": { en: "Change Mode", fr: "Changer de mode", it: "Cambia modalità", ro: "Schimbă modul", ar: "تغيير الوضع", ru: "Сменить режим", uk: "Змінити режим" },
  "btn.end_feedback": { en: "End & Get Feedback", fr: "Terminer et obtenir le feedback", it: "Termina e ricevi feedback", ro: "Termină și primește feedback", ar: "إنهاء والحصول على التعليقات", ru: "Завершить и получить отзыв", uk: "Завершити та отримати відгук" },
  "btn.listen": { en: "Listen", fr: "Écouter", it: "Ascolta", ro: "Ascultă", ar: "استمع", ru: "Слушать", uk: "Слухати" },
  "btn.submit": { en: "Submit", fr: "Soumettre", it: "Invia", ro: "Trimite", ar: "إرسال", ru: "Отправить", uk: "Надіслати" },
  "btn.analyse": { en: "Analyse my text", fr: "Analyser mon texte", it: "Analizza il mio testo", ro: "Analizează textul meu", ar: "حلّل نصي", ru: "Проанализировать мой текст", uk: "Проаналізувати мій текст" },
  "btn.analysing": { en: "Analysing…", fr: "Analyse en cours…", it: "Analisi in corso…", ro: "Se analizează…", ar: "جارٍ التحليل…", ru: "Анализ…", uk: "Аналіз…" },

  // ── Feedback labels ──
  "feedback.title": { en: "Your Feedback", fr: "Votre feedback", it: "Il tuo feedback", ro: "Feedbackul tău", ar: "تعليقاتك", ru: "Ваш отзыв", uk: "Ваш відгук" },
  "feedback.overall": { en: "Overall", fr: "Résumé global", it: "Valutazione generale", ro: "General", ar: "ملخص عام", ru: "Итог", uk: "Підсумок" },
  "feedback.strengths": { en: "Strengths", fr: "Points forts", it: "Punti di forza", ro: "Puncte forte", ar: "نقاط القوة", ru: "Сильные стороны", uk: "Сильні сторони" },
  "feedback.improvements": { en: "Needs Improvement", fr: "À améliorer", it: "Da migliorare", ro: "De îmbunătățit", ar: "بحاجة إلى تحسين", ru: "Требует улучшения", uk: "Потребує покращення" },
  "feedback.corrections": { en: "Corrections", fr: "Corrections", it: "Correzioni", ro: "Corecturi", ar: "تصحيحات", ru: "Исправления", uk: "Виправлення" },
  "feedback.suggestions": { en: "Suggestions", fr: "Suggestions", it: "Suggerimenti", ro: "Sugestii", ar: "اقتراحات", ru: "Рекомендации", uk: "Поради" },
  "feedback.vocab_upgrades": { en: "Vocabulary Upgrades", fr: "Améliorations de vocabulaire", it: "Miglioramenti del vocabolario", ro: "Îmbunătățiri de vocabular", ar: "تحسينات المفردات", ru: "Улучшения словаря", uk: "Покращення лексики" },
  "feedback.generating": { en: "Generating feedback…", fr: "Génération du feedback…", it: "Generazione del feedback…", ro: "Se generează feedbackul…", ar: "جارٍ إنشاء التعليقات…", ru: "Создание отзыва…", uk: "Створення відгуку…" },
  "feedback.improved_version": { en: "Improved Version", fr: "Version améliorée", it: "Versione migliorata", ro: "Versiune îmbunătățită", ar: "النسخة المحسّنة", ru: "Улучшенная версия", uk: "Покращена версія" },

  // ── Modes ──
  "mode.practice": { en: "Practice", fr: "Pratique", it: "Pratica", ro: "Practică", ar: "تدريب", ru: "Практика", uk: "Практика" },
  "mode.challenge": { en: "Challenge", fr: "Défi", it: "Sfida", ro: "Provocare", ar: "تحدٍّ", ru: "Вызов", uk: "Виклик" },
  "mode.exam": { en: "Exam", fr: "Examen", it: "Esame", ro: "Examen", ar: "امتحان", ru: "Экзамен", uk: "Іспит" },

  // ── Exam ──
  "exam.question_progress": {
    en: (n: number, max: number) => `Question ${n}/${max}`,
    fr: (n: number, max: number) => `Question ${n}/${max}`,
    it: (n: number, max: number) => `Domanda ${n}/${max}`,
    ro: (n: number, max: number) => `Întrebarea ${n}/${max}`,
    ar: (n: number, max: number) => `سؤال ${n}/${max}`,
    ru: (n: number, max: number) => `Вопрос ${n}/${max}`,
    uk: (n: number, max: number) => `Питання ${n}/${max}`,
  },
  "exam.complete": { en: "Exam complete.", fr: "Examen terminé.", it: "Esame completato.", ro: "Examen finalizat.", ar: "اكتمل الامتحان.", ru: "Экзамен завершён.", uk: "Іспит завершено." },
  "exam.assessing": { en: "Assessing your answers…", fr: "Évaluation de vos réponses…", it: "Valutazione delle risposte…", ro: "Se evaluează răspunsurile…", ar: "جارٍ تقييم إجاباتك…", ru: "Оценка ответов…", uk: "Оцінювання відповідей…" },

  // ── Steps ──
  "step.choose_scenario": { en: "Choose a scenario", fr: "Choisissez un scénario", it: "Scegli uno scenario", ro: "Alege un scenariu", ar: "اختر سيناريو", ru: "Выберите сценарий", uk: "Виберіть сценарій" },
  "step.choose_mode": { en: "Choose Your Mode", fr: "Choisissez votre mode", it: "Scegli la modalità", ro: "Alege modul", ar: "اختر وضعك", ru: "Выберите режим", uk: "Виберіть режим" },

  // ── Turns ──
  "turns.hint": {
    en: (n: number) => `Continue the conversation (${n} more turn${n !== 1 ? "s" : ""} needed for feedback)`,
    fr: (n: number) => `Continuez la conversation (${n} tour${n !== 1 ? "s" : ""} de plus pour le feedback)`,
    it: (n: number) => `Continua la conversazione (${n} turn${n !== 1 ? "i" : "o"} ancora per il feedback)`,
    ro: (n: number) => `Continuă conversația (încă ${n} tur${n !== 1 ? "uri" : ""} pentru feedback)`,
    ar: (n: number) => `تابع المحادثة (${n} دور إضافي للتعليقات)`,
    ru: (n: number) => `Продолжите беседу (ещё ${n} реплик для отзыва)`,
    uk: (n: number) => `Продовжіть розмову (ще ${n} реплік для відгуку)`,
  },
  "turns.count": {
    en: (n: number) => `${n} turn${n !== 1 ? "s" : ""}`,
    fr: (n: number) => `${n} tour${n !== 1 ? "s" : ""}`,
    it: (n: number) => `${n} turn${n !== 1 ? "i" : "o"}`,
    ro: (n: number) => `${n} tur${n !== 1 ? "uri" : ""}`,
    ar: (n: number) => `${n} دور`,
    ru: (n: number) => `${n} реплик`,
    uk: (n: number) => `${n} реплік`,
  },

  // ── Writing types ──
  "writing.type_label": { en: "Text type", fr: "Type de texte", it: "Tipo di testo", ro: "Tipul textului", ar: "نوع النص", ru: "Тип текста", uk: "Тип тексту" },
  "writing.input_label": { en: "Your text in English", fr: "Votre texte en anglais", it: "Il tuo testo in inglese", ro: "Textul tău în engleză", ar: "نصك بالإنجليزية", ru: "Ваш текст на английском", uk: "Ваш текст англійською" },

  // ── Speaking ──
  "speaking.title": { en: "AI Speaking Practice", fr: "AI Speaking Practice", it: "AI Speaking Practice", ro: "AI Speaking Practice", ar: "AI Speaking Practice", ru: "AI Speaking Practice", uk: "AI Speaking Practice" },
  "speaking.desc": {
    en: "Speak English with an AI partner. Use your microphone to practise speaking and get feedback on pronunciation, fluency and vocabulary.",
    fr: "Parlez en anglais avec un partenaire IA. Utilisez votre micro pour pratiquer l'oral et recevez un feedback sur la prononciation, la fluidité et le vocabulaire.",
    it: "Parla inglese con un partner IA. Usa il microfono per esercitarti a parlare e ricevi feedback su pronuncia, fluidità e vocabolario.",
    ro: "Vorbește engleză cu un partener AI. Folosește microfonul pentru a exersa și primește feedback despre pronunție, fluență și vocabular.",
    ar: "تحدث الإنجليزية مع شريك ذكاء اصطناعي. استخدم الميكروفون للتدرب واحصل على تعليقات حول النطق والطلاقة والمفردات.",
    ru: "Говорите по-английски с AI-партнёром. Используйте микрофон для практики и получайте отзывы о произношении, беглости и лексике.",
    uk: "Говоріть англійською з AI-партнером. Використовуйте мікрофон для практики та отримуйте відгуки про вимову, плавність і лексику.",
  },
} as const satisfies Record<string, StringEntry>;

type StringKey = keyof typeof strings;

/**
 * Get a localized string. If the value is a function, pass args.
 * Falls back to English if a translation is missing for the requested language.
 */
export function t(key: StringKey, lang: UILang, ...args: unknown[]): string {
  const entry = strings[key] as StringEntry | undefined;
  if (!entry) return key;
  const safeLang: UILang = SUPPORTED.includes(lang) ? lang : "en";
  const val = entry[safeLang] ?? entry["en"];
  if (typeof val === "function") {
    return (val as (...a: unknown[]) => string)(...args);
  }
  return val as string;
}
