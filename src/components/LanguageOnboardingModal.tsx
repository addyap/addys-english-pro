import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { SUPPORTED_LANGS, type SupportedLangCode } from "@/i18n";

const INTERFACE_KEY = "interfaceLanguage";
const FEEDBACK_KEY = "feedbackLanguage";
const ONBOARDED_KEY = "languageOnboarded";

function alreadyOnboarded(): boolean {
  try {
    if (localStorage.getItem(ONBOARDED_KEY) === "1") return true;
    // Backwards-compat: if both keys already set from prior sessions, treat as onboarded
    const i = localStorage.getItem(INTERFACE_KEY);
    const f = localStorage.getItem(FEEDBACK_KEY);
    return Boolean(i && f);
  } catch {
    return true; // fail-closed: don't nag if storage is unavailable
  }
}

export function LanguageOnboardingModal() {
  const { t } = useTranslation();
  const { interfaceLang, feedbackLang, setInterfaceLang, setFeedbackLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [uiChoice, setUiChoice] = useState<SupportedLangCode>(interfaceLang);
  const [fbChoice, setFbChoice] = useState<SupportedLangCode>(feedbackLang);

  useEffect(() => {
    if (!alreadyOnboarded()) {
      setUiChoice(interfaceLang);
      setFbChoice(feedbackLang);
      // Defer one tick so context + i18n are mounted
      const id = window.setTimeout(() => setOpen(true), 200);
      return () => window.clearTimeout(id);
    }
  }, [interfaceLang, feedbackLang]);

  const handleContinue = () => {
    setInterfaceLang(uiChoice); // applies i18n + RTL via LanguageContext effect
    setFeedbackLang(fbChoice);
    try { localStorage.setItem(ONBOARDED_KEY, "1"); } catch {}
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleContinue(); }}>
      <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)]">
        <DialogHeader>
          <DialogTitle>{t("onboarding.title", "Choose your languages")}</DialogTitle>
          <DialogDescription>
            {t("onboarding.subtitle", "Pick your interface language and your AI feedback language. You can change these anytime.")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="ob-interface">{t("settings.interfaceLanguage", "Interface language")}</Label>
            <Select value={uiChoice} onValueChange={(v) => setUiChoice(v as SupportedLangCode)}>
              <SelectTrigger id="ob-interface" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SUPPORTED_LANGS.map((l) => (
                  <SelectItem key={l.code} value={l.code}>
                    <span className="mr-2">{l.flag}</span>
                    {l.nativeName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-[11px] text-muted-foreground">
              {t("settings.interfaceHelp", "Controls menus, buttons and forms.")}
            </p>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ob-feedback">{t("settings.feedbackLanguage", "AI feedback language")}</Label>
            <Select value={fbChoice} onValueChange={(v) => setFbChoice(v as SupportedLangCode)}>
              <SelectTrigger id="ob-feedback" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SUPPORTED_LANGS.map((l) => (
                  <SelectItem key={l.code} value={l.code}>
                    <span className="mr-2">{l.flag}</span>
                    {l.nativeName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-[11px] text-muted-foreground">
              {t("settings.feedbackHelp", "Controls AI corrections and explanations. The AI conversation stays in English.")}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" onClick={handleContinue} className="w-full sm:w-auto">
            {t("onboarding.continue", "Continue")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LanguageOnboardingModal;
