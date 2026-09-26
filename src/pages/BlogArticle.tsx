
import React, { useRef } from 'react';
import DOMPurify from 'dompurify';

// DOMPurify in Node SSG mode (no window) exports a factory function instead
// of an object with .sanitize. Article content is trusted (authored in the
// repo, no user input), so during SSG we pass it through unchanged; the
// browser still re-sanitises after hydration.
const dpAny = DOMPurify as unknown as { sanitize?: (html: string) => string };
const sanitize: (html: string) => string =
  typeof window !== 'undefined' && typeof dpAny.sanitize === 'function'
    ? (html) => dpAny.sanitize!(html)
    : (html) => html;
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, BookOpen, GraduationCap, ArrowRight, MessageSquare } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import { trackEvent } from '@/lib/analytics';
import ReadingProgress from '../components/ReadingProgress';
import { Reveal } from '@/components/motion/Reveal';
import SocialShare from '../components/SocialShare';
import { ArticleSchema } from '@/lib/seo/structuredData';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { grammarBlogPosts } from '@/data/grammarBlogPosts';
import { legacyBlogPosts, type ArticleData } from '@/data/legacyBlogPosts';
import { getRelatedContent, getExerciseLink, getReadingLink } from '@/utils/blogInternalLinks';

const BlogArticle = () => {
  const { id } = useParams();
  const articleRef = useRef<HTMLDivElement>(null);
  const whatsappLink = useWhatsAppLink();
  useScrollTracking(`/blog/${id}`);

  // Convert grammar blog posts to the expected format
  const grammarArticlesMap = grammarBlogPosts.reduce((acc, post) => {
    acc[post.id] = {
      title: post.title,
      content: post.content,
      date: post.date,
      author: post.author,
      category: post.category,
      readTime: post.readTime,
      description: post.description,
      ogImage: post.ogImage
    };
    return acc;
  }, {} as Record<string, ArticleData>);


  // Merge base articles with grammar articles
  const articles: Record<string, ArticleData> = { ...legacyBlogPosts, ...grammarArticlesMap };

  const article = id ? articles[id] : null;

  // Get related posts (excluding current article)
  const getRelatedPosts = () => {
    const allArticles = Object.entries(articles).filter(([key]) => key !== id);
    return allArticles.slice(0, 3);
  };

  const relatedPosts = getRelatedPosts();

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  // Generate SEO metadata for this article. Fall back to a sensible default
  // description so we never emit an empty <meta name="description">.
  const fallbackDescription = `${article.title} — article du blog d'Antony Addy, formateur d'anglais professionnel.`;
  const articleSEO = {
    title: `${article.title} - Blog Antony Addy`,
    description: (article.description && article.description.trim()) || fallbackDescription,
    canonicalUrl: `https://www.antonyaddy.com/blog/${id}`,
    image: article.ogImage,
    type: "article" as const,
    datePublished: article.date,
    section: article.category,
    keywords: [
      "article anglais",
      "anglais professionnel",
      "anglais des affaires",
      "formation continue",
      "trucs et astuces anglais",
      "anglais pour entreprises",
      "anglais pour adultes",
      "formateur d'anglais",
      "Antony Addy",
      article.category.toLowerCase()
    ]
  };

  return (
    <>
      <SEOHead {...articleSEO} />
      <ArticleSchema
        headline={article.title}
        description={article.description}
        image={article.ogImage}
        datePublished={article.date}
        author={{ name: article.author, url: 'https://www.antonyaddy.com/qui-je-suis' }}
        publisher={{ name: 'Antony Addy', logo: 'https://www.antonyaddy.com/assets/logo.svg' }}
      />
      <ReadingProgress />
      
      <div ref={articleRef} className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blog
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
            
            <header>
              <Reveal>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  {article.title}
                </h1>
              </Reveal>
              
              <div className="flex items-center space-x-6 text-gray-500 text-sm border-b border-gray-200 pb-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {article.author}
                </div>
                <span>{article.readTime} de lecture</span>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: sanitize(article.content) }}
            />

            {/* Practice Section - Internal Linking */}
            {(() => {
              const { practiceSection, relatedTopics, showCommercialCTA } = getRelatedContent(id || '', article.category);
              const exerciseLink = getExerciseLink(article.category, id);
              const readingLink = getReadingLink(id);
              
              return (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    Pratiquer ce sujet
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {practiceSection}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href={exerciseLink.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-medium"
                    >
                      <GraduationCap className="h-4 w-4" />
                      Accéder aux {exerciseLink.label} ↗
                    </a>
                    <a
                      href={readingLink.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors font-medium"
                    >
                      <BookOpen className="h-4 w-4" />
                      {readingLink.label} ↗
                    </a>
                  </div>
                  
                  
                  {/* Related Blog Posts */}
                  {relatedTopics.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Articles connexes sur ce thème :</p>
                      <ul className="space-y-1">
                        {relatedTopics.map(topic => (
                          <li key={topic.id}>
                            <Link 
                              to={`/blog/${topic.id}`}
                              className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                            >
                              <ArrowRight className="h-3 w-3" />
                              {topic.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Soft Commercial CTA */}
                  {showCommercialCTA && (
                    <p className="text-sm text-gray-600 mt-4 italic">
                      Vous utilisez l'anglais au travail ? Je propose des{' '}
                      <Link to="/offres-de-formation" className="text-blue-600 hover:underline">
                        formations d'anglais professionnel sur-mesure
                      </Link>
                      {' '}pour entreprises, cadres et particuliers.
                    </p>
                  )}
                </div>
              );
            })()}

            {/* Social Share */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-3">Partager cet article :</p>
              <SocialShare 
                title={article.title}
                description={article.description}
                hashtags={['anglais', 'formation', 'BusinessEnglish']}
              />
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles connexes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(([key, relatedArticle]) => (
                  <Link
                    key={key}
                    to={`/blog/${key}`}
                    className="group block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="mb-2">
                      <span className="text-xs text-blue-600 font-medium">
                        {relatedArticle.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(relatedArticle.date).toLocaleDateString('fr-FR', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author CTA */}
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Passez à l'anglais professionnel
              </h3>
              <p className="text-gray-600 mb-6">
                Antony Addy, formateur natif britannique certifié FPA, conçoit des formations
                d'anglais sur-mesure autour de vos situations réelles — réunions, présentations,
                emails, entretiens. En visio ou en présentiel dans le Var et les Alpes-Maritimes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href={whatsappLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!whatsappLink) { e.preventDefault(); return; }
                    trackEvent('whatsapp_cta_click', { page: 'BlogArticle', target: whatsappLink, location: 'article-footer', prefilled: true });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  Échanger sur WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Me contacter
                </Link>
              </div>
              <p className="text-sm text-gray-600">
                Vous êtes :{' '}
                <Link to="/anglais-entreprise" className="text-blue-600 hover:underline font-medium">une entreprise</Link>
                {' · '}
                <Link to="/anglais-cadres" className="text-blue-600 hover:underline font-medium">un cadre ou dirigeant</Link>
                {' · '}
                <Link to="/anglais-particuliers" className="text-blue-600 hover:underline font-medium">un particulier</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
