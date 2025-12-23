
import React, { useState, useEffect } from 'react';
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
  
  const baseArticles = [
    {
      id: 'anglais-professionnel-2025',
      title: 'Pourquoi l\'anglais professionnel est une compétence essentielle en 2025',
      excerpt: 'Dans un monde professionnel de plus en plus globalisé, maîtriser l\'anglais n\'est plus un atout mais une nécessité. Découvrez pourquoi et comment développer cette compétence clé.',
      date: '2025-01-15',
      author: 'Antony Addy',
      category: 'Conseils carrière',
      readTime: '5 min'
    },
    {
      id: 'erreurs-francophones',
      title: 'Les erreurs fréquentes chez les francophones – et comment les éviter',
      excerpt: 'Faux-amis, structures grammaticales françaises traduites littéralement... Identifiez et corrigez les erreurs les plus communes des francophones en anglais.',
      date: '2025-01-10',
      author: 'Antony Addy',
      category: 'Grammaire & Vocabulaire',
      readTime: '7 min'
    },
    {
      id: 'oral-vs-ecrit',
      title: 'Anglais oral vs écrit – adapter sa communication professionnelle',
      excerpt: 'L\'anglais professionnel diffère selon le canal de communication. Apprenez à adapter votre style entre emails, présentations orales et conversations téléphoniques.',
      date: '2025-01-05',
      author: 'Antony Addy',
      category: 'Communication',
      readTime: '6 min'
    }
  ];

  // Combine base articles with grammar articles
  const articles = [...baseArticles, ...grammarArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Run internal links audit in dev mode only (once)
  useEffect(() => {
    const allPosts = articles.map(a => ({ id: a.id, category: a.category }));
    runDevAudit(allPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filteredArticles, setFilteredArticles] = useState<typeof articles>(articles);

  return (
    <>
      <SEOHead
        title="Blog Anglais Professionnel – Conseils & Astuces | Antony Addy"
        description="Découvrez les meilleurs conseils pour apprendre l'anglais professionnel : grammaire, vocabulaire, erreurs courantes et astuces de formation par un formateur certifié."
        canonicalUrl="https://www.antonyaddy.com/blog"
        datePublished="2025-01-15T10:00:00+01:00"
        dateModified="2025-01-15T10:00:00+01:00"
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Blog anglais professionnel par Antony Addy formateur certifié"
        enableOrgJsonLd
        enableWebSiteJsonLd
        keywords={[
          "blog anglais professionnel",
          "astuces apprendre anglais",
          "grammaire anglaise expliquée",
          "vocabulaire business english",
          "erreurs francophones anglais",
          "conseils formation anglais",
          "anglais pour adultes",
          "communication professionnelle anglais",
          "Antony Addy blog",
          "CPF anglais",
          "améliorer son anglais",
          "formateur anglais natif"
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
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conseils et ressources pour progresser en anglais professionnel
            </p>
          </div>

          {/* Search and Filter */}
          <BlogSearch articles={articles} onFilterChange={setFilteredArticles} />

          {/* Featured Article */}
          {filteredArticles.length > 0 && (
          <AnimatedCard className="bg-white shadow-lg mb-12 overflow-hidden" hoverScale={1.01}>
            <div className="p-8">
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                  Article mis en avant
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {filteredArticles[0].title}
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                {filteredArticles[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(filteredArticles[0].date).toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {filteredArticles[0].author}
                  </div>
                  <span>{filteredArticles[0].readTime} de lecture</span>
                </div>
                
                <Link
                  to={`/blog/${filteredArticles[0].id}`}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
                >
                  Lire l'article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </AnimatedCard>
          )}

          {/* Articles Grid */}
          {filteredArticles.length > 1 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredArticles.slice(1).map((article, index) => (
              <AnimatedCard key={article.id} className="bg-white shadow-md" delay={index * 0.1}>
                <article className="overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(article.date).toLocaleDateString('fr-FR', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <Link
                      to={`/blog/${article.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      Lire plus
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
              </AnimatedCard>
            ))}
          </div>
          )}

          {/* No Results Message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-xl text-gray-600 mb-4">
                Aucun article ne correspond à vos critères de recherche
              </p>
              <p className="text-gray-500">
                Essayez de modifier votre recherche ou vos filtres
              </p>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Restez informé des derniers conseils
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Recevez mes meilleurs conseils pour progresser en anglais professionnel 
              directement dans votre boîte email
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
