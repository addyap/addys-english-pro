import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import AnimatedCard from '../components/AnimatedCard';
import { exercisesData, exercisesList } from '../data/exercisesData';

const Exercises = () => {
  useScrollTracking('exercises');
  useTimeTracking('exercises');

  const availableExercises = new Set(exercisesData.map(ex => ex.id));

  return (
    <>
      <SEOHead 
        title="100 Exercices d'anglais – Antony Addy"
        description="Accédez à 100 exercices d'anglais couvrant la grammaire, le vocabulaire et les pièges courants pour améliorer votre niveau."
        canonicalPath="/exercices"
        keywords={["Exercices d'anglais", "Grammaire anglaise", "Vocabulaire anglais", "Pièges en anglais", "Formation anglais", "Antony Addy"]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              100 Exercices d'Anglais
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-body">
              Maîtrisez les nuances de l'anglais avec des exercices ciblés sur les pièges courants
            </p>
          </div>
        </section>

        {/* Progress Notice */}
        <section className="py-8 bg-accent/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-primary">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading">
                {exercisesData.length} exercices disponibles sur 100
              </h2>
              <p className="text-muted-foreground font-body">
                De nouveaux exercices sont ajoutés régulièrement. Les exercices avec cadenas seront bientôt disponibles.
              </p>
            </div>
          </div>
        </section>

        {/* Exercises Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {exercisesList.map((exercise, index) => {
                const isAvailable = availableExercises.has(exercise.id);
                
                return isAvailable ? (
                  <AnimatedCard
                    key={exercise.id}
                    href={`/exercices/${exercise.id}`}
                    className="bg-card hover:bg-accent/5 border border-border p-4 hover:border-primary transition-colors"
                    delay={index * 0.02}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary font-heading">
                          {exercise.id}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-foreground leading-tight font-body">
                          {exercise.title}
                        </h3>
                      </div>
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    </div>
                  </AnimatedCard>
                ) : (
                  <AnimatedCard
                    key={exercise.id}
                    className="bg-card hover:bg-accent/5 border border-border p-4 cursor-not-allowed opacity-60"
                    delay={index * 0.02}
                    hoverScale={1}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary font-heading">
                          {exercise.id}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-foreground leading-tight font-body">
                          {exercise.title}
                        </h3>
                      </div>
                      <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-body">
              Ces exercices sont conçus pour compléter mes formations. Pour un apprentissage structuré et adapté à vos besoins, contactez-moi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body"
              >
                Me contacter
              </Link>
              <Link
                to="/offres-de-formation"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors font-body"
              >
                Voir les formations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Exercises;
