import { useState } from "react";
import { Settings2, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBrowserTTS } from "@/hooks/useBrowserTTS";

interface VoiceSettingsProps {
  lang?: string;
  className?: string;
}

/**
 * Compact voice settings popover. Uses browser speechSynthesis only — 100% free.
 * Lets the user pick a voice, adjust speed, and test playback.
 */
export default function VoiceSettings({ lang = "en", className }: VoiceSettingsProps) {
  const { supported, languageVoices, selectedVoiceURI, setVoice, rate, setRate, speak, stop, state } = useBrowserTTS(lang);
  const [open, setOpen] = useState(false);

  if (!supported || languageVoices.length === 0) return null;

  const testPhrase =
    lang.startsWith("fr") ? "Bonjour, ceci est un test de la voix sélectionnée."
    : "Hello, this is a quick test of the selected voice.";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className={className}
          aria-label="Voice settings"
        >
          <Settings2 className="h-4 w-4 mr-1.5" aria-hidden="true" />
          <span className="text-xs">Voice</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[280px] space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="tts-voice" className="text-xs">Voice</Label>
          <Select
            value={selectedVoiceURI ?? "auto"}
            onValueChange={(v) => setVoice(v === "auto" ? null : v)}
          >
            <SelectTrigger id="tts-voice" className="h-9 text-sm">
              <SelectValue placeholder="Auto (best available)" />
            </SelectTrigger>
            <SelectContent className="max-h-[260px]">
              <SelectItem value="auto">Auto (best available)</SelectItem>
              {languageVoices.map(v => (
                <SelectItem key={v.voiceURI} value={v.voiceURI}>
                  {v.name} <span className="text-muted-foreground">({v.lang})</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="tts-rate" className="text-xs">Speed</Label>
            <span className="text-xs text-muted-foreground tabular-nums">{rate.toFixed(2)}x</span>
          </div>
          <Slider
            id="tts-rate"
            min={0.7}
            max={1.2}
            step={0.05}
            value={[rate]}
            onValueChange={([v]) => setRate(v)}
          />
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => (state === "speaking" ? stop() : speak(testPhrase))}
        >
          <Volume2 className="h-4 w-4 mr-1.5" aria-hidden="true" />
          {state === "speaking" ? "Stop" : "Test voice"}
        </Button>
      </PopoverContent>
    </Popover>
  );
}
