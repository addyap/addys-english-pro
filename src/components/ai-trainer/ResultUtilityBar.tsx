import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Download, Share2 } from "lucide-react";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";

interface ResultUtilityBarProps {
  /** The improved/result text to copy, share, or export. */
  text: string;
  /** Tool key, used in analytics events. */
  tool: string;
  /** Page identifier, used in analytics events. */
  page: string;
  /** Optional file name (without extension) for the download. */
  fileName?: string;
  /** Copy button label. */
  copyLabel?: string;
}

const ResultUtilityBar: React.FC<ResultUtilityBarProps> = ({
  text,
  tool,
  page,
  fileName = "ai-result",
  copyLabel = "Copy Improved Text",
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!text || !text.trim()) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("no clipboard");
      }
      setCopied(true);
      toast.success("Copied!");
      trackEvent("ai_copy_click", { tool, page });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Unable to copy, please select text manually");
    }
  };

  const handleDownload = () => {
    try {
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("Downloaded");
    } catch {
      toast.error("Unable to download");
    }
  };

  const handleShare = async () => {
    const shareData = { title: "AI feedback", text };
    try {
      if (typeof navigator.share === "function") {
        await navigator.share(shareData);
        return;
      }
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard");
        return;
      }
      toast.error("Sharing not supported");
    } catch (err) {
      // User cancelled share — silent
      if ((err as Error)?.name !== "AbortError") {
        toast.error("Unable to share");
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button type="button" variant="outline" size="sm" onClick={handleCopy} className="flex-1 sm:flex-none">
        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
        {copied ? "Copied!" : copyLabel}
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={handleDownload} className="flex-1 sm:flex-none">
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={handleShare} className="flex-1 sm:flex-none">
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
    </div>
  );
};

export default ResultUtilityBar;
