import { Helmet } from 'react-helmet-async';
import { CLOEPracticeTest } from '@/components/CLOEPracticeTest';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CLOEPracticeTestPage() {
  return (
    <>
      <Helmet>
        <title>Test de Pratique CLOE - Simulation d'Examen | Antony Music</title>
        <meta 
          name="description" 
          content="Simulez l'examen CLOE avec notre test de pratique chronométré. Questions mixtes, tous niveaux, résultats détaillés. Préparez-vous efficacement à la certification." 
        />
        <meta name="keywords" content="CLOE examen, test pratique, simulation certification, anglais professionnel, préparation CLOE" />
        <link rel="canonical" href="https://antonymusic.fr/cloe-practice-test" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back navigation */}
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link to="/cloe-preparation" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Retour à la préparation CLOE
            </Link>
          </Button>

          <CLOEPracticeTest />
        </div>
      </div>
    </>
  );
}
