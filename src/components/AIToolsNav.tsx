import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  MessageCircle, PenTool, Mic, BookOpen, Mail,
  Presentation, Handshake, Users
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const AI_TOOLS = [
  { path: "/conversation-trainer", labelKey: "aiTools.conversation", fallback: "Conversation Trainer", icon: MessageCircle },
  { path: "/speaking-practice", labelKey: "aiTools.speaking", fallback: "Speaking Practice", icon: Mic },
  { path: "/writing-coach", labelKey: "aiTools.writingCoach", fallback: "Writing Coach", icon: PenTool },
  { path: "/grammar-explainer", labelKey: "aiTools.grammar", fallback: "Grammar Explainer", icon: BookOpen },
  { path: "/email-trainer", labelKey: "aiTools.email", fallback: "Email Trainer", icon: Mail },
  { path: "/presentation-trainer", labelKey: "aiTools.presentation", fallback: "Presentation Trainer", icon: Presentation },
  { path: "/negotiation-trainer", labelKey: "aiTools.negotiation", fallback: "Negotiation Trainer", icon: Handshake },
  { path: "/interview-simulator", labelKey: "aiTools.interview", fallback: "Interview Simulator", icon: Users },
];

export default function AIToolsNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const activePath = AI_TOOLS.find(t => t.path === pathname)?.path ?? "";

  return (
    <nav aria-label={t("aiTools.navLabel", "AI Tools")} className="w-full bg-muted/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
        {/* Mobile: dropdown selector */}
        <div className="flex-1 py-2 md:hidden">
          <Select
            value={activePath}
            onValueChange={(value) => { if (value) navigate(value); }}
          >
            <SelectTrigger
              aria-label={t("aiTools.chooseTrainer", "Choose an AI trainer")}
              className="h-11 w-full text-sm"
            >
              <SelectValue placeholder={t("aiTools.chooseTrainer", "Choose an AI trainer")} />
            </SelectTrigger>
            <SelectContent>
              {AI_TOOLS.map(({ path, labelKey, fallback, icon: Icon }) => (
                <SelectItem key={path} value={path}>
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{t(labelKey, fallback)}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tablet/Desktop: existing horizontal nav */}
        <div className="hidden md:flex flex-1 overflow-x-auto">
          <ul className="flex items-center gap-1 py-2 min-w-max">
            {AI_TOOLS.map(({ path, labelKey, fallback, icon: Icon }) => {
              const isActive = pathname === path;
              const label = t(labelKey, fallback);
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                    aria-label={label}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex-shrink-0 py-1">
          <LanguageSwitcher fullWidth />
        </div>
      </div>
    </nav>
  );
}
