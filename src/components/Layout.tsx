import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Menu, X } from 'lucide-react';
import { ScrollProgressBar } from "@/components/Effects";
import SiteLogo from "@/components/SiteLogo";
import Breadcrumbs from '@/components/Breadcrumbs';
import { usePageTracking } from '@/hooks/usePageTracking';

import { trackEvent } from '@/lib/analytics';
import { WHATSAPP_PREFILLED_URL } from '@/lib/whatsapp';

const WHATSAPP_URL = WHATSAPP_PREFILLED_URL;
const trackWA = (location: string) => trackEvent('whatsapp_cta_click', { page: 'Layout', target: WHATSAPP_URL, location, prefilled: true });

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbTitle?: string;
  breadcrumbSection?: { label: string; path: string };
}

const Layout = ({ children, breadcrumbTitle, breadcrumbSection }: LayoutProps) => {
  const location = useLocation();
  const { t: tRaw } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  // Public marketing site is always French.
  const t = (key: string, fallback?: string) =>
    tRaw(key, { lng: 'fr', defaultValue: fallback }) as string;

  usePageTracking();

  const navigation = [
    { name: t('nav.home'), href: '/', current: location.pathname === '/' },
    { name: t('nav.about'), href: '/qui-je-suis', current: location.pathname === '/qui-je-suis' },
    { name: t('nav.training'), href: '/offres-de-formation', current: location.pathname === '/offres-de-formation' },
    { name: t('nav.testimonials'), href: '/temoignages', current: location.pathname === '/temoignages' },
    { name: t('nav.contact'), href: '/contact', current: location.pathname === '/contact' },
    { name: t('nav.blog'), href: '/blog', current: location.pathname === '/blog' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen bg-background font-body">
      <ScrollProgressBar />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <SiteLogo height={40} className="me-3" alt="Antony Addy" />
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
                  key={item.href}
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

            {/* Mobile menu button + WhatsApp */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={WHATSAPP_URL}
                className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600 transition-colors text-sm font-body"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA('header-mobile')}
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                className="text-primary hover:text-primary/80 p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg active:scale-[0.95] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>

            {/* Desktop CTA + WhatsApp */}
            <div className="hidden lg:flex items-center gap-2 ms-4">
              <Link
                to="/questionnaire"
                className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors font-body text-sm"
              >
                Évaluer mes besoins
              </Link>
              <a
                href={WHATSAPP_URL}
                className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors font-body"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA('header-desktop')}
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div id="mobile-navigation" className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center min-h-[44px] px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 font-body border active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      item.current
                        ? 'text-accent-foreground bg-accent border-accent'
                        : 'text-primary hover:text-accent-foreground hover:bg-accent border-transparent hover:border-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/questionnaire"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center min-h-[44px] px-4 py-3 rounded-lg text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-body"
                >
                  Évaluer mes besoins
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <Breadcrumbs customTitle={breadcrumbTitle} customSection={breadcrumbSection} />

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-sm py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <SiteLogo height={32} className="brightness-0 invert" alt="Antony Addy" />
                <span className="font-bold text-lg">Antony Addy</span>
              </Link>
              <p className="text-gray-400 mb-4 leading-relaxed">{t('footer.tagline')}</p>
              <div className="flex gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  aria-label="WhatsApp"
                  onClick={() => trackWA('footer-social')}
                >
                  💬 WhatsApp
                </a>
                <a
                  href="https://linkedin.com/in/antonyaddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <nav aria-label={t('footer.navigation')}>
              <h3 className="font-semibold mb-3 text-white">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</Link></li>
                <li><Link to="/qui-je-suis" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/offres-de-formation" className="text-gray-400 hover:text-white transition-colors">{t('nav.training')}</Link></li>
                <li><Link to="/temoignages" className="text-gray-400 hover:text-white transition-colors">{t('nav.testimonials')}</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">{t('nav.blog')}</Link></li>
                <li><Link to="/questionnaire" className="text-gray-400 hover:text-white transition-colors">Questionnaire de profil</Link></li>
              </ul>
            </nav>

            <div>
              <h3 className="font-semibold mb-3 text-white">{t('footer.contact')}</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <a href="mailto:formations@antonyaddy.com" className="text-gray-400 hover:text-white transition-colors">
                    📧 formations@antonyaddy.com
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={() => trackWA('footer-contact')}
                  >
                    💬 +33 6 49 82 98 26
                  </a>
                </li>
                <li className="text-gray-400">📍 {t('footer.location')}</li>
              </ul>

              <h4 className="font-semibold mb-2 text-white text-xs uppercase tracking-wider">{t('footer.legal')}</h4>
              <ul className="space-y-1">
                <li><Link to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-xs">{t('footer.legalNotices')}</Link></li>
                <li><Link to="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors text-xs">{t('footer.privacy')}</Link></li>
                <li><Link to="/cgv" className="text-gray-400 hover:text-white transition-colors text-xs">CGV</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {year} Antony Addy. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gray-600 text-xs">
                {t('footer.hostedBy')}{" "}
                <a href="https://www.bluehost.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                  Bluehost
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
