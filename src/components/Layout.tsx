
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
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png"
                alt="Formations Logo"
                className="h-12 w-12 sm:h-16 sm:w-16 mr-4"
              />
              <div className="flex flex-col">
                <Link to="/" className="text-xl sm:text-2xl font-bold text-primary-foreground">
                  Antony Addy
                </Link>
                <a
                  href="https://anglaisadistance.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:text-accent/80 flex items-center gap-1 mt-1"
                >
                  🎓 Ressources gratuites sur anglaisadistance.fr
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    item.current
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'bg-accent/80 text-accent-foreground hover:bg-accent hover:shadow-sm'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <a
                href="https://wa.me/33649829826"
                className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-primary-foreground hover:text-primary-foreground/80 p-2"
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
              className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-lg items-center gap-2 hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-primary-foreground/20 py-4">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.current
                        ? 'bg-accent text-accent-foreground shadow-md'
                        : 'bg-accent/80 text-accent-foreground hover:bg-accent'
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
      <footer className="bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <img
                  src="/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png"
                  alt="Formations Logo"
                  className="h-16 w-16 mr-4"
                />
                <h3 className="text-lg font-semibold">Antony Addy</h3>
              </div>
              <p className="text-secondary-foreground/80">
                Formateur Professionnel d'Adultes certifié<br />
                Formations d'anglais professionnel
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-secondary-foreground/80 mb-2">hello@antonyaddy.com</p>
              <a
                href="https://wa.me/33649829826"
                className="text-green-400 hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Ressources</h4>
              <a
                href="https://anglaisadistance.fr"
                className="text-accent hover:text-accent/80 block mb-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                anglaisadistance.fr
              </a>
              <a
                href="https://linkedin.com/in/antonyaddy"
                className="text-accent hover:text-accent/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-secondary-foreground/80">
              <Link to="/mentions-legales" className="hover:text-secondary-foreground">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-secondary-foreground">
                Politique de confidentialité
              </Link>
            </div>
            <p className="text-sm text-secondary-foreground/80 mt-4 md:mt-0">
              © 2025 Antony Addy. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
