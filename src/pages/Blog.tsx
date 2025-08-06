
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const Blog = () => {
  const articles = [
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

  return (
    <>
      <SEOHead
        title="Blog – Conseils pour apprendre l'anglais"
        description="Le blog d'Antony Addy : astuces, grammaire et vocabulaire pour progresser en anglais professionnel."
        canonicalUrl="https://antonyaddy.com/blog"
        keywords={[
          "blog anglais",
          "astuces anglais",
          "grammaire anglaise",
          "vocabulaire anglais",
          "anglais professionnel",
          "apprendre l'anglais",
          "formateur d'anglais",
          "conseils langue anglaise",
          "formation linguistique",
          "Antony Addy",
          "CPF",
          "anglais pour adultes"
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

          {/* Featured Article */}
          <div className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                  Article mis en avant
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {articles[0].title}
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                {articles[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(articles[0].date).toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {articles[0].author}
                  </div>
                  <span>{articles[0].readTime} de lecture</span>
                </div>
                
                <Link
                  to={`/blog/${articles[0].id}`}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Lire l'article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.slice(1).map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
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
            ))}
          </div>

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
