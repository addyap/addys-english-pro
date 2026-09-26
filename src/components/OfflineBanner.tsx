import React from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

const OfflineBanner: React.FC = () => {
  // Defer mounting until after client hydration so the offline string
  // never appears in the prerendered HTML (and so SSR/CSR markup matches).
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isOnline = useOnlineStatus();
  const [wasOffline, setWasOffline] = React.useState(false);
  const [showReconnected, setShowReconnected] = React.useState(false);

  React.useEffect(() => {
    if (!mounted) return;
    if (!isOnline) {
      setWasOffline(true);
    } else if (wasOffline) {
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
        setWasOffline(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline, mounted]);

  if (!mounted) return null;

  if (!isOnline) {
    return (
      <div
        className="banner-in fixed top-0 left-0 right-0 z-50 bg-destructive text-destructive-foreground px-4 py-3 shadow-lg"
        role="alert"
        aria-live="assertive"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <WifiOff className="h-5 w-5" aria-hidden="true" />
          <p className="font-medium">Pas de connexion Internet</p>
        </div>
      </div>
    );
  }

  if (showReconnected) {
    return (
      <div
        className="banner-in fixed top-0 left-0 right-0 z-50 bg-green-600 text-white px-4 py-3 shadow-lg"
        role="status"
        aria-live="polite"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <Wifi className="h-5 w-5" aria-hidden="true" />
          <p className="font-medium">Connexion rétablie</p>
        </div>
      </div>
    );
  }

  return null;
};

export default OfflineBanner;
