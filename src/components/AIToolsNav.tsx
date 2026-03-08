import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  MessageCircle, PenTool, Mic, BookOpen, Mail,
  Presentation, Handshake, Users
} from "lucide-react";

const AI_TOOLS = [
  { path: "/conversation-trainer", label: "Conversation", icon: MessageCircle },
  { path: "/writing-coach", label: "Writing Coach", icon: PenTool },
  { path: "/speaking-practice", label: "Speaking", icon: Mic },
  { path: "/grammar-explainer", label: "Grammar", icon: BookOpen },
  { path: "/email-trainer", label: "Email", icon: Mail },
  { path: "/presentation-trainer", label: "Presentation", icon: Presentation },
  { path: "/negotiation-trainer", label: "Negotiation", icon: Handshake },
  { path: "/interview-simulator", label: "Interview", icon: Users },
];

export default function AIToolsNav() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="AI Tools" className="w-full bg-muted/40 border-b border-border overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-1 py-2 min-w-max">
          {AI_TOOLS.map(({ path, label, icon: Icon }) => {
            const isActive = pathname === path;
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
    </nav>
  );
}
