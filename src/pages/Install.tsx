import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Download, Check, Wifi, Zap, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import { motion } from 'framer-motion';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    setIsInstalling(true);
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    
    setIsInstalling(false);
    setDeferredPrompt(null);
  };

  const features = [
    {
      icon: Wifi,
      title: 'Works Offline',
      description: 'Access exercises and content even without internet connection'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant loading and smooth navigation on your device'
    },
    {
      icon: HardDrive,
      title: 'Saves Data',
      description: 'Uses less data with intelligent caching'
    },
    {
      icon: Smartphone,
      title: 'Home Screen Access',
      description: 'Quick access right from your phone\'s home screen'
    }
  ];

  const steps = [
    { step: 1, text: 'Click the "Install App" button below' },
    { step: 2, text: 'Confirm the installation in the popup' },
    { step: 3, text: 'Find the app icon on your home screen' },
    { step: 4, text: 'Start learning English offline!' }
  ];

  return (
    <>
      <SEOHead
        title="Installer l'application – Apprendre l'anglais hors ligne | Antony Addy"
        description="Installez l'application Antony Addy sur votre appareil pour un accès instantané aux exercices d'anglais, même sans connexion internet."
        keywords={["installer application", "PWA", "application mobile anglais", "apprendre hors ligne", "exercices anglais"]}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Smartphone className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Installer l'application
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accédez instantanément aux exercices d'anglais sur votre appareil. Aucun app store requis !
            </p>
          </motion.div>

          {/* Install Button */}
          {!isInstalled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <Card className="p-8 text-center">
                {deferredPrompt ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Prêt à installer</h2>
                    <p className="text-muted-foreground mb-6">
                      Installez notre application pour une meilleure expérience d'apprentissage
                    </p>
                    <Button
                      onClick={handleInstall}
                      size="lg"
                      className="gap-2"
                      disabled={isInstalling}
                    >
                      <Download className="h-5 w-5" />
                      {isInstalling ? 'Installation...' : 'Installer maintenant'}
                    </Button>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Instructions d'installation</h2>
                    <p className="text-muted-foreground mb-4">
                      Pour installer cette application sur votre appareil :
                    </p>
                    <div className="text-left space-y-3 max-w-md mx-auto">
                      <p className="text-sm">
                        <strong>Sur iPhone/iPad :</strong> Appuyez sur le bouton Partager dans Safari, puis "Sur l'écran d'accueil"
                      </p>
                      <p className="text-sm">
                        <strong>Sur Android :</strong> Appuyez sur le menu dans Chrome, puis "Ajouter à l'écran d'accueil"
                      </p>
                    </div>
                  </>
                )}
              </Card>
            </motion.div>
          )}

          {isInstalled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-16"
            >
              <Card className="p-8 text-center bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
                <Check className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Application installée !</h2>
                <p className="text-muted-foreground">
                  Vous pouvez maintenant accéder à Antony Addy depuis votre écran d'accueil
                </p>
              </Card>
            </motion.div>
          )}

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Pourquoi installer ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Installation Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Comment installer</h2>
            <Card className="p-8">
              <div className="space-y-6">
                {steps.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <p className="text-lg pt-0.5">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Internal Links */}
          <div className="text-center border-t border-border pt-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Découvrez nos ressources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/exercices" className="text-primary hover:underline">
                Exercices d'anglais
              </Link>
              <Link to="/reading" className="text-primary hover:underline">
                Compréhension écrite
              </Link>
              <Link to="/blog" className="text-primary hover:underline">
                Blog
              </Link>
              <Link to="/offres-de-formation" className="text-primary hover:underline">
                Formations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Install;