import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export interface RelatedExerciseItem {
  id: number | string;
  title: string;
  description?: string;
  level?: string;
  category?: string;
  path: string;
}

interface RelatedExercisesProps {
  /** Full pool to pick from (already filtered to the same type/source). */
  pool: RelatedExerciseItem[];
  /** Current exercise id, excluded from suggestions. */
  currentId: number | string;
  /** Optional category of the current exercise to bias selection. */
  currentCategory?: string;
  /** Optional level of the current exercise to bias selection. */
  currentLevel?: string;
  /** Number of items to show (default 4). */
  limit?: number;
  /** Heading text. */
  title?: string;
}

const levelBadgeColor: Record<string, string> = {
  easy: "bg-green-500/10 text-green-700 border-green-500/30 dark:text-green-300",
  medium: "bg-yellow-500/10 text-yellow-700 border-yellow-500/30 dark:text-yellow-300",
  hard: "bg-red-500/10 text-red-700 border-red-500/30 dark:text-red-300",
  A1: "bg-green-500/10 text-green-700 border-green-500/30 dark:text-green-300",
  A2: "bg-lime-500/10 text-lime-700 border-lime-500/30 dark:text-lime-300",
  B1: "bg-yellow-500/10 text-yellow-700 border-yellow-500/30 dark:text-yellow-300",
  B2: "bg-orange-500/10 text-orange-700 border-orange-500/30 dark:text-orange-300",
  C1: "bg-red-500/10 text-red-700 border-red-500/30 dark:text-red-300",
  C2: "bg-purple-500/10 text-purple-700 border-purple-500/30 dark:text-purple-300",
};

/**
 * Selects related exercises with a 3-tier fallback:
 *   1. Same category AND same level
 *   2. Same category only
 *   3. Random from the remaining pool (same type)
 */
export function selectRelatedExercises(
  pool: RelatedExerciseItem[],
  currentId: number | string,
  opts: { category?: string; level?: string; limit?: number } = {}
): RelatedExerciseItem[] {
  const { category, level, limit = 4 } = opts;
  const others = pool.filter((ex) => ex.id !== currentId);
  const seen = new Set<string | number>();
  const picks: RelatedExerciseItem[] = [];
  const push = (item: RelatedExerciseItem) => {
    if (seen.has(item.id) || picks.length >= limit) return;
    seen.add(item.id);
    picks.push(item);
  };

  if (category && level) {
    others
      .filter((ex) => ex.category === category && ex.level === level)
      .forEach(push);
  }
  if (category) {
    others.filter((ex) => ex.category === category).forEach(push);
  }
  others.forEach(push);
  return picks.slice(0, limit);
}

const RelatedExercises: React.FC<RelatedExercisesProps> = ({
  pool,
  currentId,
  currentCategory,
  currentLevel,
  limit = 4,
  title = "Related exercises",
}) => {
  const items = selectRelatedExercises(pool, currentId, {
    category: currentCategory,
    level: currentLevel,
    limit,
  });
  if (!items.length) return null;

  return (
    <Card className="mt-12">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((ex) => (
            <li key={ex.id}>
              <Link
                to={ex.path}
                className="flex items-start justify-between gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/40 transition-colors group h-full"
                aria-label={`Open related exercise: ${ex.title}`}
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                    {ex.title}
                  </h3>
                  {ex.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {ex.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {ex.level && (
                    <Badge
                      variant="outline"
                      className={`text-[10px] ${levelBadgeColor[ex.level] || ""}`}
                    >
                      {ex.level}
                    </Badge>
                  )}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RelatedExercises;
