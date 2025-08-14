
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead 
        title="Page non trouvée - 404 | Antony Addy"
        description="La page que vous cherchez n'existe pas. Retournez à l'accueil du site d'Antony Addy, formateur d'anglais professionnel."
        noindex={true}
        canonicalPath={location.pathname}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page non trouvée</h2>
          <p className="text-lg text-gray-600 mb-8">
            Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
