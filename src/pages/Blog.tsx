
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';
import BlogSearch from '../components/BlogSearch';
import AnimatedCard from '../components/AnimatedCard';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { grammarArticles } from '@/data/grammarBlogPosts';
import { runDevAudit } from '@/utils/blogInternalLinks';

const Blog = () => {
  useScrollTracking('blog');
  useTimeTracking('blog');
  
  const baseArticles = useMemo(() => [
    {
      id: 'anglais-professionnel-2025',
      title: 'Pourquoi l\'anglais professionnel est une compétence essentielle en 2025',
      excerpt: 'Dans un monde professionnel de plus en plus globalisé, maîtriser l\'anglais n\'est plus un atout mais une nécessité. Découvrez pourquoi et comment développer cette compétence clé.',
      date: '2026-01-15',
      author: 'Antony Addy',
      category: 'Conseils carrière',
      readTime: '5 min'
    },
    {
      id: 'erreurs-francophones',
      title: 'Les erreurs fréquentes chez les francophones – et comment les éviter',
      excerpt: 'Faux-amis, structures grammaticales françaises traduites littéralement... Identifiez et corrigez les erreurs les plus communes des francophones en anglais.',
      date: '2026-01-10',
      author: 'Antony Addy',
      category: 'Grammaire & Vocabulaire',
      readTime: '7 min'
    },
    {
      id: 'oral-vs-ecrit',
      title: 'Anglais oral vs écrit – adapter sa communication professionnelle',
      excerpt: 'L\'anglais professionnel diffère selon le canal de communication. Apprenez à adapter votre style entre emails, présentations orales et conversations téléphoniques.',
      date: '2026-01-05',
      author: 'Antony Addy',
      category: 'Communication',
      readTime: '6 min'
    }
  ], []);

  // Combine base articles with grammar articles - memoized
  const articles = useMemo(() => 
    [...baseArticles, ...grammarArticles].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ), [baseArticles]);

  // Run internal links audit in dev mode only (once)
  useEffect(() => {
    const allPosts = articles.map(a => ({ id: a.id, category: a.category }));
    runDevAudit(allPosts);
  }, [articles]);

  const [filteredArticles, setFilteredArticles] = useState<typeof articles>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize filtered articles on mount to avoid hydration mismatch
  useEffect(() => {
    if (!isInitialized) {
      setFilteredArticles(articles);
      setIsInitialized(true);
    }
  }, [articles, isInitialized]);

  // Stable callback for filter changes
  const handleFilterChange = useCallback((filtered: typeof articles) => {
    setFilteredArticles(filtered);
  }, []);

  // Use articles as initial display before filters are applied
  const displayArticles = isInitialized ? filteredArticles : articles;

  return (
    <>
      <SEOHead
        title="Blog Anglais | Grammaire, Vocabulaire & Conseils"
        description="Conseils d'expert pour progresser en anglais : grammaire, vocabulaire, erreurs courantes. Articles par un formateur FPA certifié."
        canonicalUrl="https://www.antonyaddy.com/blog"
        datePublished="2026-01-15T10:00:00+01:00"
        dateModified="2026-01-17T10:00:00+01:00"
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Blog anglais professionnel par Antony Addy"
        enableOrgJsonLd
        enableWebSiteJsonLd
        keywords={[
          "blog anglais",
          "conseils anglais",
          "grammaire anglaise",
          "vocabulaire professionnel"
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Anglais Professionnel - Antony Addy",
            description: "Conseils d'expert, astuces pratiques et ressources pour progresser en anglais professionnel. Articles rédigés par un formateur britannique natif certifié FPA.",
            url: "https://www.antonyaddy.com/blog",
            author: {
              "@type": "Person",
              name: "Antony Addy",
              url: "https://www.antonyaddy.com",
              jobTitle: "Formateur Professionnel d'Adultes certifié"
            },
            inLanguage: "fr",
            publisher: {
              "@type": "Person",
              name: "Antony Addy"
            }
          }
        ]}
      />
      
      <div className="min-h-screen bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conseils et ressources pour progresser en anglais professionnel
            </p>
          </div>

          {/* Search and Filter */}
          <BlogSearch articles={articles} onFilterChange={handleFilterChange} />

          {/* Featured Article */}
          {displayArticles.length > 0 && (
          <AnimatedCard className="bg-card shadow-lg mb-12 overflow-hidden" hoverScale={1.01}>
            <div className="p-8">
              <div className="flex items-center mb-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  Article mis en avant
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-card-foreground mb-4">
                {displayArticles[0].title}
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                {displayArticles[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(displayArticles[0].date).toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {displayArticles[0].author}
                  </div>
                  <span>{displayArticles[0].readTime} de lecture</span>
                </div>
                
                <Link
                  to={`/blog/${displayArticles[0].id}`}
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                >
                  Lire l'article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </AnimatedCard>
          )}

          {/* Articles Grid */}
          {displayArticles.length > 1 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayArticles.slice(1).map((article, index) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
                aria-label={`Lire l'article : ${article.title}`}
              >
                <AnimatedCard className="bg-card shadow-md h-full" delay={index * 0.1}>
                  <article className="overflow-hidden h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-card-foreground mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(article.date).toLocaleDateString('fr-FR', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>

                        <span className="text-primary font-medium flex items-center">
                          Lire plus
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </AnimatedCard>
              </Link>
            ))}
          </div>
          )}

          {/* No Results Message */}
          {displayArticles.length === 0 && isInitialized && (
            <div className="text-center py-12 bg-card rounded-lg shadow-md">
              <p className="text-xl text-muted-foreground mb-4">
                Aucun article ne correspond à vos critères de recherche
              </p>
              <p className="text-muted-foreground/70">
                Essayez de modifier votre recherche ou vos filtres
              </p>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Restez informé des derniers conseils
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Recevez mes meilleurs conseils pour progresser en anglais professionnel 
              directement dans votre boîte email
            </p>
            <Link
              to="/contact"
              className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              Me contacter pour plus d'informations
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
