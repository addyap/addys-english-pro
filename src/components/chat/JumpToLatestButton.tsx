import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface JumpToLatestButtonProps {
  show: boolean;
  onClick: () => void;
  label?: string;
  className?: string;
}

/**
 * Floating "Jump to latest" pill shown when the user has scrolled away
 * from the bottom of a chat thread. Hidden when already near bottom.
 */
const JumpToLatestButton: React.FC<JumpToLatestButtonProps> = ({
  show,
  onClick,
  label = "Jump to latest",
  className,
}) => {
  if (!show) return null;
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-3 flex justify-center z-10",
        className
      )}
    >
      <Button
        type="button"
        size="sm"
        onClick={onClick}
        className="pointer-events-auto rounded-full shadow-lg gap-1.5 h-8 px-3 text-xs"
        aria-label={label}
      >
        <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </Button>
    </div>
  );
};

export default JumpToLatestButton;
