import { Badge } from "@/components/ui/badge";

interface RatingBadgeProps {
  label?: string;
  rating: string;
  comment?: string;
}

const RatingBadge = ({ label, rating, comment }: RatingBadgeProps) => {
  if (!rating && !comment) return null;

  const color =
    rating === "Excellent" || rating === "Appropriate"
      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
      : rating === "Good" || rating === "Acceptable"
        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
        : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        {label && <span className="font-medium text-sm text-foreground">{label}</span>}
        {rating && (
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${color}`}>
            {rating}
          </span>
        )}
      </div>
      {comment && <p className="text-sm text-muted-foreground">{comment}</p>}
    </div>
  );
};

export default RatingBadge;
