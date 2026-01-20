import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { GraduationCap, ChevronLeft, ChevronRight, BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { grammarCategories, GrammarCategory } from '../data/grammarExercises';
import GrammarExplanation from '../components/GrammarExplanation';
import GrammarExercise from '../components/GrammarExercise';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BreadcrumbItem } from '@/components/SEOHead';

// Generate slug from category ID (already URL-friendly)
const getCategoryBySlug = (slug: string): GrammarCategory | undefined => {
  return grammarCategories.find(cat => cat.id === slug);
};

// Get adjacent categories for navigation
const getAdjacentCategories = (currentSlug: string) => {
  const currentIndex = grammarCategories.findIndex(cat => cat.id === currentSlug);
  return {
    prev: currentIndex > 0 ? grammarCategories[currentIndex - 1] : null,
    next: currentIndex < grammarCategories.length - 1 ? grammarCategories[currentIndex + 1] : null
  };
};

const GrammarLessonDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/exercices" replace />;
  }
  
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    return <Navigate to="/exercices" replace />;
  }
  
  const { prev, next } = getAdjacentCategories(slug);
  const totalQuestions = category.exercises.reduce((sum, ex) => sum + ex.questions.length, 0);
  
  // Generate SEO metadata
  const pageTitle = `${category.titleEn} - Leçon de Grammaire Anglaise | Antony Addy`;
  const pageDescription = `Apprenez ${category.titleFr.toLowerCase()} en anglais avec des explications claires, des exemples et ${totalQuestions} exercices interactifs. Cours gratuit pour francophones.`;
  const canonicalUrl = `https://www.antonyaddy.com/exercices/grammar/${slug}`;
  
  // Breadcrumbs for SEO
  const breadcrumbItems = [
    { name: 'Accueil', item: 'https://www.antonyaddy.com' },
    { name: 'Exercices', item: 'https://www.antonyaddy.com/exercices' },
    { name: 'Grammaire', item: 'https://www.antonyaddy.com/exercices' },
    { name: category.titleEn, item: canonicalUrl }
  ];
  
  // Find related blog post if exists
  const relatedBlogSlug = slug.replace(/-/g, '-');
  
  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        type="article"
        keywords={[
          category.titleEn.toLowerCase(),
          category.titleFr.toLowerCase(),
          'grammaire anglaise',
          'english grammar',
          'exercices anglais',
          'apprendre anglais',
          'cours anglais gratuit'
        ]}
        breadcrumbItems={breadcrumbItems}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": category.titleEn,
          "description": pageDescription,
          "provider": {
            "@type": "Person",
            "name": "Antony Addy",
            "url": "https://www.antonyaddy.com"
          },
          "educationalLevel": "Beginner to Intermediate",
          "inLanguage": ["en", "fr"],
          "isAccessibleForFree": true,
          "teaches": category.titleEn,
          "numberOfCredits": totalQuestions,
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": `PT${Math.ceil(totalQuestions * 2)}M`
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="mt-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground font-heading mb-2">
                    {category.titleEn}
                  </h1>
                  <p className="text-xl text-muted-foreground font-body">
                    {category.titleFr}
                  </p>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  <Target className="h-4 w-4 mr-1.5" />
                  {category.exercises.length} exercice{category.exercises.length > 1 ? 's' : ''}
                </Badge>
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  <BookOpen className="h-4 w-4 mr-1.5" />
                  {totalQuestions} questions
                </Badge>
                <Badge variant="outline" className="text-sm py-1.5 px-3">
                  <Lightbulb className="h-4 w-4 mr-1.5" />
                  {category.examples.length} exemples
                </Badge>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-10">
              
              {/* Grammar Explanation */}
              <Card className="overflow-hidden">
                <CardContent className="p-6 lg:p-8">
                  <GrammarExplanation
                    titleEn={category.titleEn}
                    titleFr={category.titleFr}
                    explanationEn={category.explanationEn}
                    explanationFr={category.explanationFr}
                    examples={category.examples}
                  />
                </CardContent>
              </Card>
              
              {/* Interactive Exercises */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded-full" />
                  <h2 className="text-2xl font-bold text-foreground font-heading">
                    Exercices Interactifs
                  </h2>
                </div>
                
                {category.exercises.map((exercise) => (
                  <GrammarExercise key={exercise.id} exercise={exercise} />
                ))}
              </div>
              
              <Separator className="my-8" />
              
              {/* Navigation Between Lessons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                {prev ? (
                  <Link to={`/exercices/grammar/${prev.id}`} className="flex-1">
                    <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                      <ChevronLeft className="h-4 w-4" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">Leçon précédente</div>
                        <div className="font-medium truncate">{prev.titleEn}</div>
                      </div>
                    </Button>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                
                {next ? (
                  <Link to={`/exercices/grammar/${next.id}`} className="flex-1">
                    <Button variant="outline" className="w-full justify-end gap-2 h-auto py-3">
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Leçon suivante</div>
                        <div className="font-medium truncate">{next.titleEn}</div>
                      </div>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
              
              {/* Related Resources */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 font-heading">
                    Ressources Complémentaires
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/exercices">
                      <Button variant="secondary" size="sm" className="gap-2">
                        <BookOpen className="h-4 w-4" />
                        Tous les exercices
                      </Button>
                    </Link>
                    <Link to="/blog">
                      <Button variant="secondary" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Articles de blog
                      </Button>
                    </Link>
                    <Link to="/offres-de-formation">
                      <Button variant="outline" size="sm" className="gap-2">
                        Formation personnalisée
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GrammarLessonDetail;
