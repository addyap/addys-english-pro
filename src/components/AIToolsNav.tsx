import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  MessageCircle, PenTool, Mic, BookOpen, Mail,
  Presentation, Handshake, Users
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const AI_TOOLS = [
  { path: "/conversation-trainer", labelKey: "aiTools.conversation", fallback: "Conversation", icon: MessageCircle },
  { path: "/writing-coach", labelKey: "aiTools.writingCoach", fallback: "Writing Coach", icon: PenTool },
  { path: "/speaking-practice", labelKey: "aiTools.speaking", fallback: "Speaking", icon: Mic },
  { path: "/grammar-explainer", labelKey: "aiTools.grammar", fallback: "Grammar", icon: BookOpen },
  { path: "/email-trainer", labelKey: "aiTools.email", fallback: "Email", icon: Mail },
  { path: "/presentation-trainer", labelKey: "aiTools.presentation", fallback: "Presentation", icon: Presentation },
  { path: "/negotiation-trainer", labelKey: "aiTools.negotiation", fallback: "Negotiation", icon: Handshake },
  { path: "/interview-simulator", labelKey: "aiTools.interview", fallback: "Interview", icon: Users },
];

export default function AIToolsNav() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <nav aria-label={t("aiTools.navLabel", "AI Tools")} className="w-full bg-muted/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
        <div className="flex-1 overflow-x-auto">
          <ul className="flex items-center gap-1 py-2 min-w-max">
            {AI_TOOLS.map(({ path, labelKey, fallback, icon: Icon }) => {
              const isActive = pathname === path;
              const label = t(labelKey, fallback);
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="hidden sm:inline">{label}</span>
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
