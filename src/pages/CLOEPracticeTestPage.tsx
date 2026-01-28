import { Helmet } from 'react-helmet-async';
import { CLOEPracticeTest } from '@/components/CLOEPracticeTest';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CLOEPracticeTestPage() {
  return (
    <>
      <Helmet>
        <title>Test CLOE Gratuit | Simulation Examen Chronométré</title>
        <meta 
          name="description" 
          content="Simulez l'examen CLOE avec notre test chronométré gratuit. Questions mixtes, tous niveaux A1-C1, résultats détaillés instantanés." 
        />
        <meta name="keywords" content="CLOE examen, test pratique, simulation certification, anglais professionnel, préparation CLOE" />
        <link rel="canonical" href="https://www.antonyaddy.com/exercices/cloe-preparation/practice-test" />
        <meta property="og:image" content="https://www.antonyaddy.com/og/og-cloe.png" />
        <meta name="twitter:image" content="https://www.antonyaddy.com/og/og-cloe.png" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back navigation */}
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link to="/exercices/cloe-preparation" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Retour à la préparation CLOE
            </Link>
          </Button>

          <CLOEPracticeTest />

          {/* Related Resources Section */}
          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Complétez votre préparation avec d'autres exercices gratuits créés par un formateur FPA certifié.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/exercices" className="text-primary hover:underline">
                Exercices de grammaire
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/reading" className="text-primary hover:underline">
                Compréhension écrite
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/exercices/listening" className="text-primary hover:underline">
                Listening Lab
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/offres-de-formation" className="text-primary hover:underline">
                Formations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
