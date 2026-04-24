import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, Trash2 } from "lucide-react";
import { formatRelativeTime, type SessionHistoryItem } from "@/hooks/useSessionHistory";

interface RecentPracticeProps {
  items: SessionHistoryItem[];
  onRestore: (item: SessionHistoryItem) => void;
  onClear: () => void;
  title?: string;
}

const RecentPractice: React.FC<RecentPracticeProps> = ({
  items,
  onRestore,
  onClear,
  title = "Your recent practice",
}) => {
  if (!items.length) return null;
  return (
    <Card className="border-muted">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
          <History className="w-4 h-4" /> {title}
        </CardTitle>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
          aria-label="Clear history"
        >
          <Trash2 className="w-3 h-3" />
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="divide-y divide-border">
          {items.map((it) => (
            <li key={it.id}>
              <button
                type="button"
                onClick={() => onRestore(it)}
                className="w-full text-left py-2 px-1 hover:bg-muted/40 rounded transition-colors group"
              >
                <p className="text-sm text-foreground line-clamp-1 group-hover:text-primary">
                  {it.input || "(empty)"}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {formatRelativeTime(it.timestamp)}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentPractice;
