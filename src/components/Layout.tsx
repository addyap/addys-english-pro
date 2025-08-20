import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X, ExternalLink } from 'lucide-react';
import { ScrollProgressBar } from "@/components/Effects";
import SiteLogo from "@/components/SiteLogo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  const navigation = [
    { name: 'Accueil', href: '/', current: location.pathname === '/' },
    { name: 'Qui je suis', href: '/qui-je-suis', current: location.pathname === '/qui-je-suis' },
    { name: 'Offres de formation', href: '/offres-de-formation', current: location.pathname === '/offres-de-formation' },
    { name: 'Témoignages', href: '/temoignages', current: location.pathname === '/temoignages' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' },
    { name: 'Ressources en ligne', href: '/anglaisadistance', current: location.pathname === '/anglaisadistance' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <ScrollProgressBar />
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <SiteLogo height={40} className="mr-3" alt="Antony Addy" />
              <div className="flex flex-col">
                <Link to="/" className="text-lg font-bold text-primary font-heading">
                  Antony Addy
                </Link>
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
      <footer className="bg-slate-900 text-white text-sm py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/mentions-legales" className="hover:underline">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="space-y-1">
              <li>
                📧{" "}
                <a
                  href="mailto:formations@antonyaddy.com"
                  className="hover:underline"
                >
                  formations@antonyaddy.com
                </a>
              </li>
              <li>
                💬{" "}
                <a
                  href="https://wa.me/33649829826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +33 6 49 82 98 26 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Ressources</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://anglaisadistance.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  🎓 anglaisadistance.fr
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <p>© {year} Antony Addy. Tous droits réservés.</p>
            <p className="mt-1 text-gray-400">
              Site hébergé par Bluehost –{" "}
              <a
                href="https://www.bluehost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.bluehost.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
