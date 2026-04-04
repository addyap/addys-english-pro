import { AlertCircle } from "lucide-react";
import type { MicError, MicState } from "@/hooks/useSpeechRecognition";

interface MicErrorBannerProps {
  micError: MicError | null;
  clearError: () => void;
  startListening: () => void;
}

const MicErrorBanner = ({ micError, clearError, startListening }: MicErrorBannerProps) => {
  if (!micError || !micError.message) return null;

  const canRetry = micError.state === "error" || micError.state === "idle";

  return (
    <div className="px-3 pt-2 pb-1 flex items-start gap-2 text-xs text-destructive">
      <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
      <div className="flex-1 space-y-0.5">
        <p>{micError.message}</p>
        {micError.hint && <p className="text-muted-foreground">{micError.hint}</p>}
      </div>
      <div className="flex gap-1.5 shrink-0">
        {canRetry && (
          <button
            onClick={() => { clearError(); startListening(); }}
            className="underline text-primary text-xs"
          >
            Retry
          </button>
        )}
        <button onClick={clearError} className="underline text-muted-foreground text-xs">
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default MicErrorBanner;
