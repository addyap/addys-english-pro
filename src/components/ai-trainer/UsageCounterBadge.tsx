import React, { useEffect, useState } from "react";
import { getUsageCounter } from "@/lib/session-memory";

interface UsageCounterBadgeProps {
  /** Re-read counter when this value changes (e.g. after a submit). */
  refreshKey?: number;
}

const UsageCounterBadge: React.FC<UsageCounterBadgeProps> = ({ refreshKey = 0 }) => {
  const [counter, setCounter] = useState<{ total: number; daily: number }>({ total: 0, daily: 0 });

  useEffect(() => {
    setCounter(getUsageCounter());
  }, [refreshKey]);

  if (counter.total === 0) return null;

  const message =
    counter.daily > 0
      ? `You've completed ${counter.daily} ${counter.daily === 1 ? "exercise" : "exercises"} today`
      : `${counter.total} total AI ${counter.total === 1 ? "practice" : "practices"}`;

  return (
    <p className="text-xs text-muted-foreground text-center" aria-live="polite">
      {message}
    </p>
  );
};

export default UsageCounterBadge;
