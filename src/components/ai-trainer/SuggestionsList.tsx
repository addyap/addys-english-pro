import { Lightbulb, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SuggestionsListProps {
  suggestions: string[];
  variant?: "card" | "inline";
}

const SuggestionsInner = ({ suggestions, variant }: SuggestionsListProps) => (
  <ul className="space-y-1.5">
    {suggestions.map((s, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
        {variant === "card" ? (
          <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        ) : (
          <span className="text-amber-500 shrink-0">•</span>
        )}
        {s}
      </li>
    ))}
  </ul>
);

const SuggestionsList = ({ suggestions, variant = "inline" }: SuggestionsListProps) => {
  if (!suggestions || suggestions.length === 0) return null;

  if (variant === "card") {
    return (
      <Card>
        <CardContent className="p-5 space-y-3">
          <h2 className="font-bold text-lg text-foreground">Suggestions</h2>
          <SuggestionsInner suggestions={suggestions} variant={variant} />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-2 pt-3 border-t">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-amber-600" />
        <h3 className="font-semibold text-sm text-foreground">Suggestions</h3>
      </div>
      <SuggestionsInner suggestions={suggestions} variant={variant} />
    </div>
  );
};

export default SuggestionsList;
