import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, ArrowLeft, ChevronRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import AnimatedCard from '@/components/AnimatedCard';
import { listeningExercises } from '@/data/listeningExercises';
import { Badge } from '@/components/ui/badge';

const ListeningLibrary: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Listening Lab – Exercices Écoute Anglais | Antony Addy"
        description="Améliorez votre compréhension orale avec des exercices d'écoute interactifs. Transcriptions avec traductions instantanées."
        canonicalUrl="https://www.antonyaddy.com/exercices/listening"
        keywords={["compréhension orale anglais", "listening anglais", "exercices écoute", "audio anglais"]}
        enableOrgJsonLd
        enableWebSiteJsonLd
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Link
              to="/exercices"
              className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux exercices
            </Link>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <Headphones className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Listening Lab
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-body">
              Améliorez votre compréhension orale avec des exercices interactifs
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm flex-wrap">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {listeningExercises.length} exercices
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Traductions instantanées
              </span>
            </div>
          </div>
        </section>

        {/* Exercises Grid */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {listeningExercises.map((exercise, index) => (
                <AnimatedCard
                  key={exercise.slug}
                  href={`/exercices/listening/${exercise.slug}`}
                  className="bg-card hover:bg-accent/5 border border-border p-6 hover:border-primary hover:shadow-md transition-all group"
                  delay={index * 0.05}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Headphones className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {exercise.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {exercise.accent}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 font-heading group-hover:text-primary transition-colors">
                      {exercise.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 font-body flex-1">
                      {Object.keys(exercise.glossary).length} mots avec traductions
                    </p>
                    <div className="flex items-center justify-end text-primary">
                      <span className="text-sm font-medium mr-1">Écouter</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">
              Comment utiliser le Listening Lab
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="text-3xl mb-3">🎧</div>
                <h3 className="font-semibold mb-2">Écoutez</h3>
                <p className="text-sm text-muted-foreground">
                  Écoutez l'audio autant de fois que nécessaire
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="font-semibold mb-2">Lisez</h3>
                <p className="text-sm text-muted-foreground">
                  Suivez la transcription en temps réel
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-semibold mb-2">Traduisez</h3>
                <p className="text-sm text-muted-foreground">
                  Survolez les mots soulignés pour voir leur traduction
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ListeningLibrary;
