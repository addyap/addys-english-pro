import { Progress } from "@/components/ui/progress";

interface ScoreBarProps {
  label: string;
  score: number;
  max?: number;
  comment?: string;
}

const ScoreBar = ({ label, score, max = 10, comment }: ScoreBarProps) => (
  <div className="space-y-1.5">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <span className="text-sm font-bold text-primary">{score}/{max}</span>
    </div>
    <Progress value={(score / max) * 100} className="h-2" />
    {comment && <p className="text-xs text-muted-foreground">{comment}</p>}
  </div>
);

export default ScoreBar;
