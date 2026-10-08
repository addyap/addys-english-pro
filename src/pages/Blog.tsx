
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { EXPERIENCE_FLOOR } from '@/lib/utils';
import BlogSearch from '../components/BlogSearch';
import AnimatedCard from '../components/AnimatedCard';
import { Reveal } from '@/components/motion/Reveal';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { grammarArticles } from '@/data/grammarBlogPosts';
import { legacyBlogPosts } from '@/data/legacyBlogPosts';
import { runDevAudit } from '@/utils/blogInternalLinks';

const Blog = () => {
  useScrollTracking('blog');
  useTimeTracking('blog');
  
  // Derived from legacyBlogPosts, not retyped. These three were hardcoded here
  // with titles that did not match the articles themselves — the index offered
  // "Pourquoi l'anglais professionnel est une compétence essentielle en 2025"
  // and the page it opened was headed "L'anglais pro : compétence clé en 2025".
  // All three diverged. One source now feeds both.
  const baseArticles = useMemo(
    () =>
      Object.entries(legacyBlogPosts).map(([id, post]) => ({
        id,
        title: post.title,
        excerpt: post.description,
        date: post.date,
        author: post.author,
        category: post.category,
        readTime: post.readTime,
      })),
    [],
  );

  // Combine base articles with grammar articles - memoized
  const articles = useMemo(() => 
    [...baseArticles, ...grammarArticles].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ), [baseArticles]);

  // Derived from the newest post rather than hardcoded. The literal that used to
  // sit in dateModified said 2026-01-17 while the most recent article was dated
  // 2026-07-13 — six months of publishing that the index told Google to ignore.
  const lastPublished = useMemo(
    () => (articles[0]?.date ? `${articles[0].date}T10:00:00+01:00` : undefined),
    [articles],
  );

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
        datePublished="2024-12-19T10:00:00+01:00"
        dateModified={lastPublished}
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
      
      <div className="inner-page inner-page--blog min-h-screen bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <Reveal className="inner-intro text-center mb-12">
            <span className="inner-kicker">Notes de terrain · Anglais professionnel</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
              Blog Anglais Professionnel
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conseils d'expert, astuces pratiques et ressources pour progresser en anglais. Articles rédigés par un formateur britannique certifié FPA, avec plus de {EXPERIENCE_FLOOR} ans d'expérience.
            </p>
            <span className="heading-rule" aria-hidden="true" />
          </Reveal>

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
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded text-sm font-medium">
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
