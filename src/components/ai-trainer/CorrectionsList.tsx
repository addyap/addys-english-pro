import type { Correction } from "@/types/ai-trainers";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CorrectionsListProps {
  corrections: Correction[];
  /** "card" renders as standalone Card, "inline" renders inside parent */
  variant?: "card" | "inline";
}

const CorrectionsInner = ({ corrections }: { corrections: Correction[] }) => (
  <div className="space-y-2.5">
    {corrections.map((c, i) => (
      <div key={i} className="bg-background rounded-lg p-3 space-y-1 text-sm">
        {c.wrong && <p className="text-destructive line-through">"{c.wrong}"</p>}
        {c.correct && (
          <p className="text-emerald-700 dark:text-emerald-400 font-medium">→ "{c.correct}"</p>
        )}
        {c.explanation && <p className="text-xs text-muted-foreground">{c.explanation}</p>}
      </div>
    ))}
  </div>
);

const CorrectionsList = ({ corrections, variant = "inline" }: CorrectionsListProps) => {
  if (!corrections || corrections.length === 0) return null;

  if (variant === "card") {
    return (
      <Card>
        <CardContent className="p-5 space-y-4">
          <h2 className="font-bold text-lg text-foreground">Corrections</h2>
          <CorrectionsInner corrections={corrections} />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3 pt-3 border-t">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <h3 className="font-semibold text-sm text-foreground">Corrections</h3>
      </div>
      <CorrectionsInner corrections={corrections} />
    </div>
  );
};

export default CorrectionsList;
