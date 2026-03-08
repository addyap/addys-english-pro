import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StrengthsBlockProps {
  strengths?: string;
  needsImprovement?: string;
  overall?: string;
  variant?: "card" | "inline";
}

const StrengthsInner = ({ strengths, needsImprovement, overall }: StrengthsBlockProps) => (
  <div className="space-y-2">
    {strengths && (
      <div className="flex gap-2 text-sm">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p className="text-foreground">
          <span className="font-medium">Strengths:</span> {strengths}
        </p>
      </div>
    )}
    {needsImprovement && (
      <div className="flex gap-2 text-sm">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-foreground">
          <span className="font-medium">Needs improvement:</span> {needsImprovement}
        </p>
      </div>
    )}
    {overall && (
      <div className="pt-2">
        <p className="text-sm text-foreground italic">{overall}</p>
      </div>
    )}
  </div>
);

const StrengthsBlock = ({ strengths, needsImprovement, overall, variant = "inline" }: StrengthsBlockProps) => {
  if (!strengths && !needsImprovement && !overall) return null;

  if (variant === "card") {
    return (
      <Card>
        <CardContent className="p-5 space-y-4">
          {strengths && (
            <div>
              <h3 className="font-semibold text-foreground mb-1">💪 Strengths</h3>
              <p className="text-sm text-muted-foreground">{strengths}</p>
            </div>
          )}
          {needsImprovement && (
            <div>
              <h3 className="font-semibold text-foreground mb-1">🎯 Needs Improvement</h3>
              <p className="text-sm text-muted-foreground">{needsImprovement}</p>
            </div>
          )}
          {overall && (
            <div>
              <h3 className="font-semibold text-foreground mb-1">📊 Overall</h3>
              <p className="text-sm text-muted-foreground">{overall}</p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-2 pt-3 border-t">
      <StrengthsInner strengths={strengths} needsImprovement={needsImprovement} overall={overall} />
    </div>
  );
};

export default StrengthsBlock;
