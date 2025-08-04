
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/', current: location.pathname === '/' },
    { name: 'Qui je suis', href: '/qui-je-suis', current: location.pathname === '/qui-je-suis' },
    { name: 'Offres de formation', href: '/offres-de-formation', current: location.pathname === '/offres-de-formation' },
    { name: 'Témoignages', href: '/temoignages', current: location.pathname === '/temoignages' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' },
    { name: 'Ressources', href: '/anglaisadistance', current: location.pathname === '/anglaisadistance' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png"
                alt="Formations Logo"
                className="h-10 w-10 mr-3"
              />
              <div className="flex flex-col">
                <Link to="/" className="text-lg font-bold text-primary font-heading">
                  Antony Addy
                </Link>
                <a
                  href="https://anglaisadistance.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 mt-1 transition-colors"
                >
                  🎓 Ressources gratuites sur anglaisadistance.fr
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-body border ${
                    item.current
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'text-primary hover:text-accent-foreground hover:bg-accent border-transparent hover:border-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="https://wa.me/33649829826"
                className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600 transition-colors text-sm font-body"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-primary hover:text-primary/80 p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop WhatsApp button */}
            <a
              href="https://wa.me/33649829826"
              className="hidden lg:flex bg-green-500 text-white px-4 py-2 rounded-lg items-center gap-2 hover:bg-green-600 transition-colors font-body ml-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 font-body border ${
                      item.current
                        ? 'text-accent-foreground bg-accent border-accent'
                        : 'text-primary hover:text-accent-foreground hover:bg-accent border-transparent hover:border-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <img
                  src="/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png"
                  alt="Formations Logo"
                  className="h-12 w-12 mr-4"
                />
                <h3 className="text-lg font-semibold font-heading text-white">Antony Addy</h3>
              </div>
              <p className="text-gray-200 font-body">
                Formateur Professionnel d'Adultes certifié<br />
                Formations d'anglais professionnel
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-heading text-white">Contact</h4>
              <p className="text-gray-200 mb-2 font-body">formations@antonyaddy.com</p>
              <a
                href="https://wa.me/33649829826"
                className="text-green-300 hover:text-green-200 block mb-2 font-body transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/antonyaddy"
                className="text-blue-300 hover:text-blue-200 font-body transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-heading text-white">Ressources</h4>
              <a
                href="https://anglaisadistance.fr"
                className="text-blue-300 hover:text-blue-200 block mb-2 font-body transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                anglaisadistance.fr
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-200 font-body">
              <Link to="/mentions-legales" className="hover:text-yellow-200 transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-yellow-200 transition-colors">
                Politique de confidentialité
              </Link>
            </div>
            <p className="text-sm text-gray-200 mt-4 md:mt-0 font-body">
              © 2025 Antony Addy. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
