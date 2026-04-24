import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface ExerciseConversionCTAProps {
  /** Heading. Defaults to "Want personalized feedback?". */
  title?: string;
  /** Optional supporting line. */
  description?: string;
  /** Path to the most relevant AI tool for this exercise type. */
  aiToolPath?: string;
  /** Label for the AI tool button. */
  aiToolLabel?: string;
}

const ExerciseConversionCTA: React.FC<ExerciseConversionCTAProps> = ({
  title = "Want personalized feedback?",
  description = "Practice with an AI trainer or get a real human review from Antony.",
  aiToolPath = "/writing-coach",
  aiToolLabel = "Continue your English practice →",
}) => {
  return (
    <Card className="mt-8 border-primary/20 bg-primary/5">
      <CardContent className="py-6 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-1">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground mb-5 max-w-lg mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link
              to={aiToolPath}
              onClick={() =>
                trackEvent("exercise_cta_click", {
                  target: aiToolPath,
                  label: aiToolLabel,
                })
              }
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {aiToolLabel}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              to="/contact"
              onClick={() =>
                trackEvent("exercise_cta_click", {
                  target: "/contact",
                  label: "Contact Antony",
                })
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Antony
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseConversionCTA;
