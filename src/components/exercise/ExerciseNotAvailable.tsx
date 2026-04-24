import { Link } from "react-router-dom";
import { BookOpen, Bot, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

/**
 * Standard soft-404 recovery block for missing/unavailable exercises.
 * Keeps users in-flow with helpful next steps instead of dead-ends.
 */
export default function ExerciseNotAvailable() {
  const handleClick = (target: string, label: string) =>
    trackEvent("404_cta_click", { source: "exercise_not_available", target, label });

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Exercice non disponible
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            Cet exercice n'est pas encore disponible ou a été déplacé. Voici
            quelques pistes utiles :
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="default">
              <Link
                to="/ressources-gratuites"
                onClick={() => handleClick("/ressources-gratuites", "Ressources gratuites")}
                className="gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Ressources gratuites
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                to="/conversation-trainer"
                onClick={() => handleClick("/conversation-trainer", "Try the AI Trainer")}
                className="gap-2"
              >
                <Bot className="w-4 h-4" />
                Try the AI Trainer
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                to="/contact"
                onClick={() => handleClick("/contact", "Contact Antony")}
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Antony
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
