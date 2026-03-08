
import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ReadingProgress from '../components/ReadingProgress';
import SocialShare from '../components/SocialShare';
import { ArticleSchema } from '@/lib/seo/structuredData';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { grammarBlogPosts } from '@/data/grammarBlogPosts';
import { getRelatedContent, getExerciseLink, getReadingLink } from '@/utils/blogInternalLinks';

interface ArticleData {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  description: string;
  ogImage: string;
}

const BlogArticle = () => {
  const { id } = useParams();
  const articleRef = useRef<HTMLDivElement>(null);
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
  }, {} as Record<string, any>);

  const baseArticles: Record<string, ArticleData> = {
    'anglais-professionnel-2025': {
      title: "Pourquoi l'anglais professionnel est une compétence essentielle en 2025",
      content: `
        <p>Dans un monde professionnel de plus en plus globalisé, maîtriser l'anglais n'est plus un simple atout sur le CV : c'est devenu une nécessité absolue pour évoluer dans sa carrière et rester compétitif sur le marché du travail.</p>

        <h2>L'anglais : langue universelle des affaires</h2>
        <p>Aujourd'hui, l'anglais s'impose comme la lingua franca des échanges commerciaux internationaux. Que ce soit pour communiquer avec des clients étrangers, participer à des réunions virtuelles avec des équipes dispersées géographiquement, ou simplement comprendre la documentation technique de votre secteur, l'anglais est omniprésent.</p>

        <h2>Les secteurs les plus demandeurs</h2>
        <p>Certains domaines d'activité sont particulièrement exigeants en matière d'anglais professionnel :</p>
        <ul>
          <li><strong>Le commerce international</strong> : négociation, relation client, présentation de produits</li>
          <li><strong>Les technologies</strong> : documentation, collaboration avec des équipes internationales</li>
          <li><strong>Le tourisme et l'hôtellerie</strong> : accueil de la clientèle internationale</li>
          <li><strong>La finance</strong> : rapports, analyses, échanges avec les marchés mondiaux</li>
        </ul>

        <h2>Comment développer son anglais professionnel ?</h2>
        <p>L'anglais professionnel diffère de l'anglais général par sa spécificité sectorielle et sa formalité. Il est essentiel de :</p>
        <ul>
          <li>Identifier le vocabulaire spécifique à votre domaine</li>
          <li>Maîtriser les codes de communication écrite (emails, rapports)</li>
          <li>Développer l'aisance orale pour les réunions et présentations</li>
          <li>Comprendre les nuances culturelles dans la communication</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Investir dans sa formation en anglais professionnel, c'est investir dans son avenir professionnel. Les opportunités s'ouvrent à ceux qui maîtrisent cette compétence devenue incontournable.</p>
      `,
      date: '2025-01-15',
      author: 'Antony Addy',
      category: 'Conseils carrière',
      readTime: '5 min',
      description: "Découvrez pourquoi l'anglais professionnel est devenu une compétence indispensable en 2025 et comment la développer efficacement.",
      ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
    },
    'erreurs-francophones': {
      title: 'Les erreurs fréquentes chez les francophones – et comment les éviter',
      content: `
        <p>En tant que formateur d'anglais pour francophones depuis plus de 20 ans, j'ai identifié les erreurs les plus récurrentes. Bonne nouvelle : elles sont prévisibles et donc évitables !</p>

        <h2>Les faux-amis : ces mots qui nous trompent</h2>
        <p>Les faux-amis sont probablement le piège le plus courant. Voici quelques exemples classiques :</p>
        <ul>
          <li><strong>"Actually"</strong> ne signifie pas "actuellement" mais "en réalité"</li>
          <li><strong>"Eventually"</strong> ne veut pas dire "éventuellement" mais "finalement"</li>
          <li><strong>"Sensible"</strong> ne signifie pas "sensible" mais "sensé, raisonnable"</li>
        </ul>

        <h2>Les structures grammaticales problématiques</h2>
        <p>Les francophones ont tendance à calquer les structures françaises sur l'anglais :</p>
        
        <h3>L'ordre des mots</h3>
        <p>❌ "I am since 10 years in this company"<br>
        ✅ "I have been in this company for 10 years"</p>

        <h3>Les prépositions</h3>
        <p>❌ "I am interested by this project"<br>
        ✅ "I am interested in this project"</p>

        <h2>Les erreurs de prononciation typiques</h2>
        <p>Certains sons n'existent pas en français :</p>
        <ul>
          <li>Le "th" : think, this, although</li>
          <li>Le "h" aspiré : house, hotel, hospital</li>
          <li>Les voyelles courtes vs longues : ship/sheep, bit/beat</li>
        </ul>

        <h2>Comment éviter ces erreurs ?</h2>
        <p>La clé est la pratique consciente et la correction systématique. Un formateur expérimenté peut identifier vos erreurs récurrentes et vous proposer des exercices ciblés pour les corriger durablement.</p>
      `,
      date: '2025-01-10',
      author: 'Antony Addy',
      category: 'Grammaire & Vocabulaire',
      readTime: '7 min',
      description: "Identifiez et corrigez les erreurs les plus communes des francophones en anglais avec les conseils d'un formateur expérimenté.",
      ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
    },
    'oral-vs-ecrit': {
      title: 'Anglais oral vs écrit – adapter sa communication professionnelle',
      content: `
        <p>Dans le monde professionnel, votre anglais doit s'adapter au canal de communication. Un email, une présentation orale et un appel téléphonique requièrent des registres et des techniques différents.</p>

        <h2>L'anglais écrit professionnel</h2>
        
        <h3>Les emails</h3>
        <p>L'email reste le canal de communication le plus utilisé. Les règles d'or :</p>
        <ul>
          <li><strong>Objet clair</strong> : "Meeting request - Q1 budget review"</li>
          <li><strong>Formules de politesse</strong> : "I hope this email finds you well"</li>
          <li><strong>Structure logique</strong> : contexte, demande, action attendue</li>
          <li><strong>Signature professionnelle</strong> complète</li>
        </ul>

        <h3>Les rapports et documents</h3>
        <p>Plus formels, ils demandent :</p>
        <ul>
          <li>Un vocabulaire précis et technique</li>
          <li>Des phrases complexes bien structurées</li>
          <li>Une argumentation logique</li>
          <li>Des connecteurs logiques (however, furthermore, consequently)</li>
        </ul>

        <h2>L'anglais oral professionnel</h2>

        <h3>Les présentations</h3>
        <p>L'oral permet plus de flexibilité :</p>
        <ul>
          <li><strong>Phrases plus courtes</strong> pour maintenir l'attention</li>
          <li><strong>Interactions avec l'audience</strong> : "Any questions so far?"</li>
          <li><strong>Supports visuels</strong> : "As you can see on this slide..."</li>
          <li><strong>Récapitulatifs fréquents</strong> : "So, to summarize..."</li>
        </ul>

        <h3>Les appels téléphoniques</h3>
        <p>Le défi de l'absence de langage corporel :</p>
        <ul>
          <li><strong>Articulation claire</strong> et débit maîtrisé</li>
          <li><strong>Reformulation</strong> : "Let me rephrase that..."</li>
          <li><strong>Confirmation</strong> : "Did I understand correctly that...?"</li>
        </ul>

        <h2>Adapter son registre</h2>
        <p>Le niveau de formalité varie selon :</p>
        <ul>
          <li>Votre interlocuteur (hiérarchie, client, collègue)</li>
          <li>Le contexte (réunion formelle vs discussion informelle)</li>
          <li>L'objectif (information, persuasion, négociation)</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Maîtriser ces différents registres demande de la pratique. L'idéal est de s'entraîner dans des situations réalistes avec un formateur qui peut corriger en temps réel.</p>
      `,
      date: '2025-01-05',
      author: 'Antony Addy',
      category: 'Communication',
      readTime: '6 min',
      description: "Apprenez à adapter votre style de communication en anglais selon le canal : emails, présentations orales, appels téléphoniques.",
      ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png'
    }
  };

  // Merge base articles with grammar articles
  const articles: Record<string, ArticleData> = { ...baseArticles, ...grammarArticlesMap };

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

  // Generate SEO metadata for this article
  const articleSEO = {
    title: `${article.title} - Blog Antony Addy`,
    description: article.description,
    canonicalUrl: `https://www.antonyaddy.com/blog/${id}`,
    ogImage: article.ogImage,
    keywords: [
      "article anglais",
      "anglais professionnel",
      "formation CPF",
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
        author={{ name: article.author, url: 'https://antonyaddy.com/qui-je-suis' }}
        publisher={{ name: 'Antony Addy', logo: 'https://antonyaddy.com/assets/logo.svg' }}
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>
              
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
              dangerouslySetInnerHTML={{ __html: article.content }}
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
                    <Link 
                      to={exerciseLink.href}
                      className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-medium"
                    >
                      <GraduationCap className="h-4 w-4" />
                      Accéder aux {exerciseLink.label}
                    </Link>
                    <Link 
                      to={readingLink.href}
                      className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors font-medium"
                    >
                      <BookOpen className="h-4 w-4" />
                      {readingLink.label}
                    </Link>
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
                      Besoin d'un accompagnement personnalisé ? Découvrez mes{' '}
                      <Link to="/offres-de-formation" className="text-blue-600 hover:underline">
                        formations d'anglais professionnel
                      </Link>
                      {' '}adaptées à votre niveau et vos objectifs.
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
                hashtags={['anglais', 'formation', 'CPF']}
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
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Besoin d'aide pour progresser en anglais ?
              </h3>
              <p className="text-gray-600 mb-6">
                Antony Addy propose des formations personnalisées en anglais professionnel, 
                adaptées à votre secteur et à vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Me contacter
                </Link>
                <Link
                  to="/offres-de-formation"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Voir les formations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
