import React from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export type FeedbackLang = "fr" | "en";

interface Props {
  value: FeedbackLang;
  onChange: (lang: FeedbackLang) => void;
  className?: string;
}

const FeedbackLanguageToggle: React.FC<Props> = ({ value, onChange, className = "" }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <Languages className="w-4 h-4 text-muted-foreground" />
    <div className="inline-flex rounded-lg border border-border overflow-hidden">
      <button
        type="button"
        onClick={() => onChange("fr")}
        className={`px-2.5 py-1 text-xs font-medium transition-colors ${
          value === "fr"
            ? "bg-primary text-primary-foreground"
            : "bg-background text-muted-foreground hover:bg-muted"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`px-2.5 py-1 text-xs font-medium transition-colors ${
          value === "en"
            ? "bg-primary text-primary-foreground"
            : "bg-background text-muted-foreground hover:bg-muted"
        }`}
      >
        EN
      </button>
    </div>
  </div>
);

export default FeedbackLanguageToggle;
