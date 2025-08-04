
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/', current: location.pathname === '/' },
    { name: 'Qui je suis', href: '/qui-je-suis', current: location.pathname === '/qui-je-suis' },
    { name: 'Offres de formation', href: '/offres-de-formation', current: location.pathname === '/offres-de-formation' },
    { name: 'Témoignages', href: '/temoignages', current: location.pathname === '/temoignages' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png"
                alt="Formations Logo"
                className="h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 mr-6"
              />
              <Link to="/" className="text-2xl font-bold text-slate-800">
                Antony Addy
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  } pb-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <a
              href="https://wa.me/33649829826"
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <img
                  src="/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png"
                  alt="Formations Logo"
                  className="h-20 w-20 mr-4"
                />
                <h3 className="text-lg font-semibold">Antony Addy</h3>
              </div>
              <p className="text-gray-300">
                Formateur Professionnel d'Adultes certifié<br />
                Formations d'anglais professionnel
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300 mb-2">hello@antonyaddy.com</p>
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
                className="text-blue-400 hover:text-blue-300 block mb-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                anglaisadistance.fr
              </a>
              <a
                href="https://linkedin.com/in/antonyaddy"
                className="text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-300">
              <Link to="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </div>
            <p className="text-sm text-gray-300 mt-4 md:mt-0">
              © 2025 Antony Addy. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
