import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, title }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => setAudioError(true));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (audioError) {
    return (
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-muted-foreground text-sm">
          Audio file not available. The transcript is provided below for reading practice.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 space-y-4">
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="none"
        crossOrigin="anonymous"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={() => setAudioError(true)}
        aria-label={`Audio for ${title}`}
      />
      
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleRestart}
          aria-label="Restart"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>

        <div className="flex-1">
          <Slider
            value={[currentTime]}
            min={0}
            max={duration || 100}
            step={0.1}
            onValueChange={handleSeek}
            aria-label="Audio progress"
          />
        </div>

        <span className="text-sm text-muted-foreground min-w-[80px] text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default AudioPlayer;
