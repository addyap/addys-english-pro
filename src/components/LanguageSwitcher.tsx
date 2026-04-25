import React from "react";
import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { SUPPORTED_LANGS, type SupportedLangCode, getLangMeta } from "@/i18n";

interface Props {
  className?: string;
  /** Compact mode for mobile menu — full-width trigger */
  fullWidth?: boolean;
}

const LanguageSwitcher: React.FC<Props> = ({ className = "", fullWidth = false }) => {
  const { t } = useTranslation();
  const { interfaceLang, feedbackLang, setInterfaceLang, setFeedbackLang } = useLanguage();
  const meta = getLangMeta(interfaceLang);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`${fullWidth ? "w-full justify-start gap-2" : ""} ${className}`}
          aria-label={t("settings.title", "Settings")}
          title={t("settings.title", "Settings")}
        >
          <Settings className="h-5 w-5" aria-hidden="true" />
          {fullWidth && (
            <span className="text-sm font-medium">
              {t("settings.title", "Settings")} · {meta.flag} {meta.code.toUpperCase()}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 z-[60]" align="end">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm mb-3">{t("settings.title")}</h3>
          </div>
          <div className="space-y-2">
            <Label htmlFor="interface-lang" className="text-xs">
              {t("settings.interfaceLanguage")}
            </Label>
            <Select
              value={interfaceLang}
              onValueChange={(v) => setInterfaceLang(v as SupportedLangCode)}
            >
              <SelectTrigger id="interface-lang" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="z-[70]">
                {SUPPORTED_LANGS.map((l) => (
                  <SelectItem key={l.code} value={l.code}>
                    <span className="mr-2">{l.flag}</span>
                    {l.nativeName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-[11px] text-muted-foreground">{t("settings.interfaceHelp")}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback-lang" className="text-xs">
              {t("settings.feedbackLanguage")}
            </Label>
            <Select
              value={feedbackLang}
              onValueChange={(v) => setFeedbackLang(v as SupportedLangCode)}
            >
              <SelectTrigger id="feedback-lang" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="z-[70]">
                {SUPPORTED_LANGS.map((l) => (
                  <SelectItem key={l.code} value={l.code}>
                    <span className="mr-2">{l.flag}</span>
                    {l.nativeName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-[11px] text-muted-foreground">{t("settings.feedbackHelp")}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;
