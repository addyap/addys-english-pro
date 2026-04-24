import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface AIToolLoadingSkeletonProps {
  /** Localized step labels (Step 1, 2, 3). Defaults to FR. */
  steps?: [string, string, string];
  /** Localized headline shown above the steps. */
  headline?: string;
  /** Interval (ms) between step transitions. */
  stepIntervalMs?: number;
}

/**
 * Reusable loading container for AI single-shot tools.
 * Displays an animated skeleton + progressive status steps so the user
 * never sees an empty screen while the model is processing.
 */
const AIToolLoadingSkeleton: React.FC<AIToolLoadingSkeletonProps> = ({
  steps = [
    "Listening...",
    "Analyzing grammar...",
    "Preparing feedback...",
  ],
  headline = "Analyzing your English...",
  stepIntervalMs = 1800,
}) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStepIndex((i) => (i + 1) % steps.length);
    }, stepIntervalMs);
    return () => window.clearInterval(id);
  }, [steps.length, stepIntervalMs]);

  return (
    <Card
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="border-primary/20"
    >
      <CardContent className="pt-6 space-y-5">
        <div className="flex items-center gap-3">
          <Loader2 className="w-5 h-5 animate-spin text-primary" aria-hidden="true" />
          <p className="font-medium text-foreground">{headline}</p>
        </div>

        {/* Skeleton placeholders */}
        <div className="space-y-3" aria-hidden="true">
          <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
          <div className="h-4 bg-muted rounded animate-pulse w-full" />
          <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
          <div className="h-24 bg-muted rounded animate-pulse w-full" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 bg-muted rounded animate-pulse" />
            <div className="h-16 bg-muted rounded animate-pulse" />
          </div>
        </div>

        {/* Progressive steps */}
        <div className="pt-2 border-t border-border">
          <div
            key={stepIndex}
            className="text-sm text-muted-foreground animate-in fade-in duration-500"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
            {steps[stepIndex]}
          </div>
        </div>

        <span className="sr-only">{headline}. {steps[stepIndex]}</span>
      </CardContent>
    </Card>
  );
};

export default AIToolLoadingSkeleton;
