import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X, ExternalLink, User, LogOut } from 'lucide-react';
import { ScrollProgressBar } from "@/components/Effects";
import SiteLogo from "@/components/SiteLogo";
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Breadcrumbs from '@/components/Breadcrumbs';
import { usePageTracking } from '@/hooks/usePageTracking';
interface LayoutProps {
  children: React.ReactNode;
  breadcrumbTitle?: string;
  breadcrumbSection?: { label: string; path: string };
}

const Layout = ({ children, breadcrumbTitle, breadcrumbSection }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const year = new Date().getFullYear();
  const { user, signOut, loading } = useAuth();
  
  // Server-side page tracking (works even with ad blockers)
  usePageTracking();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Erreur lors de la déconnexion');
    } else {
      toast.success('Déconnexion réussie');
    }
  };

  const navigation = [
    { name: 'Accueil', href: '/', current: location.pathname === '/' },
    { name: 'Qui je suis', href: '/qui-je-suis', current: location.pathname === '/qui-je-suis' },
    { name: 'Offres de formation', href: '/offres-de-formation', current: location.pathname === '/offres-de-formation' },
    { name: 'Témoignages', href: '/temoignages', current: location.pathname === '/temoignages' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' },
    { name: 'Exercices', href: '/exercices', current: location.pathname === '/exercices' },
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

            {/* Auth buttons - Desktop */}
            {!loading && (
              <div className="hidden lg:flex items-center ml-2">
                {user ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSignOut}
                    className="text-primary hover:text-accent"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Déconnexion
                  </Button>
                ) : (
                  <Link to="/auth">
                    <Button variant="outline" size="sm">
                      <User className="h-4 w-4 mr-1" />
                      Connexion
                    </Button>
                  </Link>
                )}
              </div>
            )}
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
                
                {/* Auth link - Mobile */}
                {!loading && (
                  user ? (
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-4 py-3 rounded-lg text-sm font-medium text-primary hover:text-accent-foreground hover:bg-accent border border-transparent hover:border-accent flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Déconnexion
                    </button>
                  ) : (
                    <Link
                      to="/auth"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-lg text-sm font-medium text-primary hover:text-accent-foreground hover:bg-accent border border-transparent hover:border-accent flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Connexion
                    </Link>
                  )
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Breadcrumbs */}
      <Breadcrumbs customTitle={breadcrumbTitle} customSection={breadcrumbSection} />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer - Comprehensive Internal Linking */}
      <footer className="bg-slate-900 text-white text-sm py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Brand & About */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <SiteLogo height={32} className="brightness-0 invert" alt="Antony Addy" />
                <span className="font-bold text-lg">Antony Addy</span>
              </Link>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Formateur d'anglais professionnel certifié FPA. Plus de 20 ans d'expérience 
                dans la formation d'anglais pour adultes, entreprises et institutions.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/33649829826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  aria-label="Contactez-nous sur WhatsApp"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="https://linkedin.com/in/antonyaddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  aria-label="Suivez-nous sur LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Navigation */}
            <nav aria-label="Navigation principale">
              <h3 className="font-semibold mb-3 text-white">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/qui-je-suis" className="text-gray-400 hover:text-white transition-colors">
                    Qui je suis
                  </Link>
                </li>
                <li>
                  <Link to="/offres-de-formation" className="text-gray-400 hover:text-white transition-colors">
                    Offres de formation
                  </Link>
                </li>
                <li>
                  <Link to="/temoignages" className="text-gray-400 hover:text-white transition-colors">
                    Témoignages
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Ressources Gratuites */}
            <nav aria-label="Ressources gratuites">
              <h3 className="font-semibold mb-3 text-white">Ressources Gratuites</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/exercices" className="text-gray-400 hover:text-white transition-colors">
                    Exercices d'anglais
                  </Link>
                </li>
                <li>
                  <Link to="/exercices/listening" className="text-gray-400 hover:text-white transition-colors">
                    Écoute & Compréhension
                  </Link>
                </li>
                <li>
                  <Link to="/reading" className="text-gray-400 hover:text-white transition-colors">
                    Compréhension écrite
                  </Link>
                </li>
                <li>
                  <Link to="/story/1" className="text-gray-400 hover:text-white transition-colors">
                    Histoires interactives
                  </Link>
                </li>
                <li>
                  <Link to="/anglaisadistance" className="text-gray-400 hover:text-white transition-colors">
                    Ressources en ligne
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                    Mon tableau de bord
                  </Link>
                </li>
                <li>
                  <a
                    href="https://anglaisadistance.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    anglaisadistance.fr
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact & Legal */}
            <div>
              <h3 className="font-semibold mb-3 text-white">Contact</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <a
                    href="mailto:formations@antonyaddy.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    📧 formations@antonyaddy.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/33649829826"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    💬 +33 6 49 82 98 26
                  </a>
                </li>
                <li className="text-gray-400">
                  📍 Alpes-Maritimes, France
                </li>
              </ul>
              
              <h4 className="font-semibold mb-2 text-white text-xs uppercase tracking-wider">Informations légales</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap-page" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Plan du site
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {year} Antony Addy. Tous droits réservés. Formateur Professionnel d'Adultes certifié.
            </p>
            <p className="text-gray-600 text-xs">
              Site hébergé par{" "}
              <a
                href="https://www.bluehost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                Bluehost
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
