import type { VocabUpgrade } from "@/types/ai-trainers";
import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface VocabUpgradesProps {
  items: VocabUpgrade[];
  variant?: "card" | "inline";
}

const VocabInner = ({ items }: { items: VocabUpgrade[] }) => (
  <div className="space-y-1.5">
    {items.map((v, i) => (
      <div key={i} className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">{v.basic}</span>
        <span className="text-muted-foreground">→</span>
        <span className="font-medium text-primary">{v.advanced}</span>
      </div>
    ))}
  </div>
);

const VocabUpgrades = ({ items, variant = "inline" }: VocabUpgradesProps) => {
  if (!items || items.length === 0) return null;

  if (variant === "card") {
    return (
      <Card>
        <CardContent className="p-5 space-y-3">
          <h2 className="font-bold text-lg text-foreground">Vocabulary Upgrades</h2>
          <VocabInner items={items} />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-2 pt-3 border-t">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-primary" />
        <h3 className="font-semibold text-sm text-foreground">Vocabulary Upgrades</h3>
      </div>
      <VocabInner items={items} />
    </div>
  );
};

export default VocabUpgrades;
