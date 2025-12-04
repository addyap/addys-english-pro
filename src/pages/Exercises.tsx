import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock, CheckCircle, GraduationCap, ChevronRight, Sparkles, Star, Zap, Lightbulb } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import AnimatedCard from '../components/AnimatedCard';
import { allExercisesData as exercisesData, allExercisesList as exercisesList } from '../data/allExercises';
import { grammarCategories } from '../data/grammarExercises';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GrammarExplanation from '../components/GrammarExplanation';
import GrammarExercise from '../components/GrammarExercise';

// Exercise Card Component
const ExerciseCard = ({ exercise, isAvailable, index }: { 
  exercise: { id: number; title: string }; 
  isAvailable: boolean; 
  index: number;
}) => {
  if (isAvailable) {
    return (
      <AnimatedCard
        href={`/exercices/${exercise.id}`}
        className="bg-card hover:bg-accent/5 border border-border p-3 hover:border-primary hover:shadow-md transition-all group"
        delay={index * 0.01}
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-xs font-bold text-primary font-heading">
              {exercise.id}
            </span>
          </div>
          <h3 className="text-sm font-medium text-foreground leading-tight font-body flex-1 truncate">
            {exercise.title}
          </h3>
          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        </div>
      </AnimatedCard>
    );
  }

  return (
    <div className="bg-muted/50 border border-border/50 p-3 rounded-lg opacity-50 cursor-not-allowed">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
          <span className="text-xs font-bold text-muted-foreground font-heading">
            {exercise.id}
          </span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground leading-tight font-body flex-1 truncate">
          {exercise.title}
        </h3>
        <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      </div>
    </div>
  );
};

// Define grammar category groups by priority
const HIGH_PRIORITY_IDS = [
  'will-vs-going-to',
  'much-many-lot', 
  'since-for',
  'been-gone',
  'few-little'
];

const MEDIUM_PRIORITY_IDS = [
  'past-perfect-continuous',
  'possessives',
  'adverbs-frequency',
  'causative-have-get',
  'adjective-order',
  'determiners'
];

const LOWER_PRIORITY_IDS = [
  'had-better-would-rather',
  'although-despite-however',
  'still-yet-already',
  'unless-as-long-as'
];

const Exercises = () => {
  useScrollTracking('exercises');
  useTimeTracking('exercises');

  const availableExercises = new Set(exercisesData.map(ex => ex.id));
  
  // Group grammar categories
  const highPriorityCategories = grammarCategories.filter(c => HIGH_PRIORITY_IDS.includes(c.id));
  const mediumPriorityCategories = grammarCategories.filter(c => MEDIUM_PRIORITY_IDS.includes(c.id));
  const lowerPriorityCategories = grammarCategories.filter(c => LOWER_PRIORITY_IDS.includes(c.id));
  const coreCategories = grammarCategories.filter(
    c => !HIGH_PRIORITY_IDS.includes(c.id) && 
         !MEDIUM_PRIORITY_IDS.includes(c.id) && 
         !LOWER_PRIORITY_IDS.includes(c.id)
  );

  const renderGrammarSection = (
    categories: typeof grammarCategories, 
    title: string, 
    subtitle: string,
    icon: React.ReactNode,
    borderColor: string,
    badgeColor: string
  ) => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-2 border-b border-border">
        <div className={`h-10 w-1 ${borderColor} rounded-full`} />
        <div className="flex items-center gap-2">
          {icon}
          <div>
            <h3 className="text-lg font-semibold text-foreground font-heading">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <span className={`text-xs ${badgeColor} px-2 py-1 rounded-full ml-auto`}>
          {categories.length} leçons
        </span>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {categories.map((category) => (
          <AccordionItem 
            key={category.id} 
            value={category.id}
            className="border rounded-lg px-4 bg-card"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-heading">{category.titleEn}</h3>
                  <p className="text-sm text-muted-foreground font-body">{category.titleFr}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <GrammarExplanation
                titleEn={category.titleEn}
                titleFr={category.titleFr}
                explanationEn={category.explanationEn}
                explanationFr={category.explanationFr}
                examples={category.examples}
              />
              
              {category.exercises.map((exercise) => (
                <GrammarExercise key={exercise.id} exercise={exercise} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <>
      <SEOHead 
        title="150 Exercices d'anglais gratuits – Grammaire & Vocabulaire | Antony Addy"
        description="Accédez à 150 exercices d'anglais gratuits créés par un formateur professionnel. Grammaire, vocabulaire, pièges courants et faux-amis. Idéal pour progresser rapidement."
        canonicalPath="/exercices"
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Exercices d'anglais interactifs par Antony Addy"
        keywords={["Exercices d'anglais gratuits", "Grammaire anglaise exercices", "Vocabulaire anglais pratique", "Pièges en anglais", "Faux-amis anglais", "Quiz anglais", "Exercices anglais en ligne", "Antony Addy", "Apprendre l'anglais", "Entraînement anglais"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: "150 Exercices d'Anglais",
          description: "Collection de 150 exercices d'anglais couvrant la grammaire, le vocabulaire et les pièges courants",
          author: {
            "@type": "Person",
            name: "Antony Addy",
            jobTitle: "Formateur Professionnel d'Adultes"
          },
          educationalLevel: "Beginner to Advanced",
          inLanguage: "fr",
          learningResourceType: "Exercise",
          isAccessibleForFree: true
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Exercices d'Anglais
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-body">
              Maîtrisez la grammaire anglaise avec des explications claires et des exercices pratiques
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">{grammarCategories.length} Grammar Lessons</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">{exercisesData.length} Vocabulary Exercises</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Tabs defaultValue="grammar" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="grammar" className="gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Grammar Lessons
                </TabsTrigger>
                <TabsTrigger value="vocabulary" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Vocabulary
                </TabsTrigger>
              </TabsList>

              {/* Grammar Tab */}
              <TabsContent value="grammar" className="space-y-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                    English Tenses & Grammar
                  </h2>
                  <p className="text-muted-foreground font-body">
                    {grammarCategories.length} lessons with clear explanations and toggle for French translation
                  </p>
                </div>

                {/* High Priority - New */}
                {highPriorityCategories.length > 0 && renderGrammarSection(
                  highPriorityCategories,
                  "High Priority",
                  "Most common mistakes for French speakers",
                  <Star className="h-5 w-5 text-amber-500" />,
                  "bg-amber-500",
                  "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                )}

                {/* Medium Priority - New */}
                {mediumPriorityCategories.length > 0 && renderGrammarSection(
                  mediumPriorityCategories,
                  "Medium Priority", 
                  "Important grammar points",
                  <Zap className="h-5 w-5 text-blue-500" />,
                  "bg-blue-500",
                  "bg-blue-500/10 text-blue-700 dark:text-blue-400"
                )}

                {/* Lower Priority */}
                {lowerPriorityCategories.length > 0 && renderGrammarSection(
                  lowerPriorityCategories,
                  "Additional Topics", 
                  "Useful expressions and connectors",
                  <Lightbulb className="h-5 w-5 text-green-500" />,
                  "bg-green-500",
                  "bg-green-500/10 text-green-700 dark:text-green-400"
                )}

                {/* Core Grammar */}
                {renderGrammarSection(
                  coreCategories,
                  "Core Grammar",
                  "Essential tenses and structures",
                  <GraduationCap className="h-5 w-5 text-primary" />,
                  "bg-primary",
                  "bg-primary/10 text-primary"
                )}
              </TabsContent>

              {/* Vocabulary Tab */}
              <TabsContent value="vocabulary" className="space-y-6">
                {/* Progress Notice */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center border border-primary/20">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span className="text-3xl font-bold text-primary font-heading">{exercisesData.length}</span>
                    <span className="text-lg text-muted-foreground font-body">exercices disponibles</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    De nouveaux exercices sont ajoutés régulièrement
                  </p>
                </div>

                {/* Category Sections */}
                <div className="space-y-8">
                  {/* Section 1-50: Common Mistakes */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-1 bg-primary rounded-full" />
                      <h3 className="text-lg font-semibold text-foreground font-heading">Erreurs courantes (1-50)</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">50 exercices</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {exercisesList.slice(0, 50).map((exercise, index) => {
                        const isAvailable = availableExercises.has(exercise.id);
                        return (
                          <ExerciseCard 
                            key={exercise.id} 
                            exercise={exercise} 
                            isAvailable={isAvailable} 
                            index={index}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 51-100: Advanced Mistakes */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-1 bg-accent rounded-full" />
                      <h3 className="text-lg font-semibold text-foreground font-heading">Pièges avancés (51-100)</h3>
                      <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">50 exercices</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {exercisesList.slice(50, 100).map((exercise, index) => {
                        const isAvailable = availableExercises.has(exercise.id);
                        return (
                          <ExerciseCard 
                            key={exercise.id} 
                            exercise={exercise} 
                            isAvailable={isAvailable} 
                            index={index}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 101-150: Confusing Word Pairs */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-1 bg-green-500 rounded-full" />
                      <h3 className="text-lg font-semibold text-foreground font-heading">Mots confus (101-150)</h3>
                      <span className="text-xs bg-green-500/10 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">50 exercices</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {exercisesList.slice(100, 150).map((exercise, index) => {
                        const isAvailable = availableExercises.has(exercise.id);
                        return (
                          <ExerciseCard 
                            key={exercise.id} 
                            exercise={exercise} 
                            isAvailable={isAvailable} 
                            index={index}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
