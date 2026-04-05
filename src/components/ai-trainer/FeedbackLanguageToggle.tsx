import React from "react";
import { Languages } from "lucide-react";

export type FeedbackLang =
  | "en" | "fr" | "es" | "de" | "it" | "pt"
  | "ru" | "ar" | "pl" | "uk" | "zh" | "ja";

export const FEEDBACK_LANGUAGES: { code: FeedbackLang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
  { code: "pt", label: "PT" },
  { code: "ru", label: "RU" },
  { code: "ar", label: "AR" },
  { code: "pl", label: "PL" },
  { code: "uk", label: "UK" },
  { code: "zh", label: "ZH" },
  { code: "ja", label: "JA" },
];

interface Props {
  value: FeedbackLang;
  onChange: (lang: FeedbackLang) => void;
  className?: string;
}

const FeedbackLanguageToggle: React.FC<Props> = ({ value, onChange, className = "" }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <Languages className="w-4 h-4 text-muted-foreground shrink-0" />
    <div className="inline-flex flex-wrap rounded-lg border border-border overflow-hidden">
      {FEEDBACK_LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => onChange(lang.code)}
          className={`px-2 py-1 text-xs font-medium transition-colors ${
            value === lang.code
              ? "bg-primary text-primary-foreground"
              : "bg-background text-muted-foreground hover:bg-muted"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  </div>
);

export default FeedbackLanguageToggle;
