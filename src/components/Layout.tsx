import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Menu, X, ChevronDown, Globe, Sparkles, Settings, ExternalLink } from 'lucide-react';
import { FORMATIONS } from '@/data/formations';

const FORMATION_ICONS = { Globe, Sparkles, Settings } as const;

import { ScrollProgressBar } from "@/components/Effects";
import SiteLogo from "@/components/SiteLogo";
import Breadcrumbs from '@/components/Breadcrumbs';

import { trackEvent } from '@/lib/analytics';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import { EXPERIENCE_FLOOR } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbTitle?: string;
  breadcrumbSection?: { label: string; path: string };
}

const AUDIENCE_LINKS = [
  { name: 'Entreprises', href: '/anglais-entreprise' },
  { name: 'Cadres & dirigeants', href: '/anglais-cadres' },
  { name: 'Particuliers', href: '/anglais-particuliers' },
  { name: 'Étudiants', href: '/anglais-etudiants' },
];

// Free content, grouped so it stops competing with the commercial pages for
// space in the bar. The positioning test was previously reachable only from the
// hero and the footer despite being the main lead magnet.
const RESOURCE_LINKS = [
  { name: 'Test de positionnement', href: '/test-de-positionnement', desc: 'Évaluez votre niveau · A1 → C1' },
  { name: 'Fluentory — mes plateformes', href: '/ressources-en-ligne', desc: "Entraînement en accès libre" },
  { name: 'Blog', href: '/blog', desc: "Conseils et points de grammaire" },
];

const FORMATION_LINKS = [
  { name: 'Toutes les formations', href: '/offres-de-formation', desc: 'Programmes, modalités et tarifs' },
];

/**
 * Desktop nav dropdown.
 *
 * Click to toggle; closes on Escape, on outside click, and on selecting an item.
 *
 * Deliberately not hover-to-open. The previous menus did both, which cancel each
 * other out on a mouse: moving onto the button opened the menu, and the click
 * that followed toggled it straight back shut. Hover-open also fires menus by
 * accident as the pointer crosses the bar, and gives touch users no way to
 * dismiss. Click alone behaves identically for mouse, touch and keyboard.
 */
const NavDropdown: React.FC<{
  label: string;
  active?: boolean;
  align?: 'left' | 'right';
  width?: string;
  children: (close: () => void) => React.ReactNode;
}> = ({ label, active = false, align = 'left', width = 'w-64', children }) => {
  const [open, setOpen] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const close = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors font-body inline-flex items-center gap-1 ${
          active ? 'bg-accent text-accent-foreground' : 'text-primary hover:bg-muted'
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full mt-1 ${width} bg-white border border-border rounded-lg shadow-lg py-2 z-50`}>
          {children(close)}
        </div>
      )}
    </div>
  );
};

const CITY_LINKS = [
  { name: 'Fréjus', href: '/cours-anglais-frejus' },
  { name: 'Nice', href: '/cours-anglais-nice' },
  { name: 'Cannes', href: '/cours-anglais-cannes' },
  { name: 'Antibes', href: '/cours-anglais-antibes' },
  { name: 'Sophia Antipolis', href: '/cours-anglais-sophia-antipolis' },
];

const Layout = ({ children, breadcrumbTitle, breadcrumbSection }: LayoutProps) => {
  const location = useLocation();
  const { t: tRaw } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const year = new Date().getFullYear();
  const whatsappLink = useWhatsAppLink();
  const trackWA = (loc: string) => trackEvent('whatsapp_cta_click', { page: 'Layout', target: whatsappLink, location: loc, prefilled: true });
  const handleWhatsAppClick = (loc: string) => (e: React.MouseEvent) => {
    if (!whatsappLink) { e.preventDefault(); return; }
    trackWA(loc);
  };

  // Public marketing site is always French.
  const t = (key: string, fallback?: string) =>
    tRaw(key, { lng: 'fr', defaultValue: fallback }) as string;

  // Two dropdown groups, two plain links, then the CTAs. The bar previously
  // carried nine top-level items, two of which — "Offres de formation" and
  // "Mes formations" — sat next to each other with near-identical labels and
  // entirely different destinations (this site's offer vs. a switcher to the
  // IA and SAP subdomains).
  const isOn = (href: string) => location.pathname === href;
  const formationsActive =
    isOn('/offres-de-formation') || AUDIENCE_LINKS.some(a => isOn(a.href));
  const resourcesActive = RESOURCE_LINKS.some(r => location.pathname.startsWith(r.href));

  // Only the other two domains. On the English site, a menu row reading
  // "Anglais — Ce site" is noise; the homepage hub section still presents all
  // three for anyone arriving cold.
  const otherDomains = FORMATIONS.filter(f => f.external);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);


  return (
    <div className="min-h-screen bg-background font-body">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Aller au contenu principal
      </a>
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
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
              <NavDropdown label="Formations" active={formationsActive} width="w-72">
                {close => (
                  <>
                    {FORMATION_LINKS.map(f => (
                      <Link
                        key={f.href}
                        to={f.href}
                        onClick={close}
                        className={`block px-4 py-2.5 transition-colors ${isOn(f.href) ? 'bg-accent/10' : 'hover:bg-muted'}`}
                      >
                        <span className="block text-sm font-medium text-primary">{f.name}</span>
                        <span className="block text-xs text-muted-foreground">{f.desc}</span>
                      </Link>
                    ))}
                    <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-t border-border mt-2">
                      Pour qui
                    </p>
                    {AUDIENCE_LINKS.map(a => (
                      <Link
                        key={a.href}
                        to={a.href}
                        onClick={close}
                        className={`block px-4 py-2 text-sm font-body transition-colors ${
                          isOn(a.href) ? 'bg-accent text-accent-foreground' : 'text-primary hover:bg-muted'
                        }`}
                      >
                        {a.name}
                      </Link>
                    ))}
                  </>
                )}
              </NavDropdown>

              <NavDropdown label="Ressources" active={resourcesActive} width="w-72">
                {close => (
                  <>
                    <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Gratuit, sans inscription
                    </p>
                    {RESOURCE_LINKS.map(r => (
                      <Link
                        key={r.href}
                        to={r.href}
                        onClick={close}
                        className={`block px-4 py-2.5 transition-colors ${
                          location.pathname.startsWith(r.href) ? 'bg-accent/10' : 'hover:bg-muted'
                        }`}
                      >
                        <span className="block text-sm font-medium text-primary">{r.name}</span>
                        <span className="block text-xs text-muted-foreground">{r.desc}</span>
                      </Link>
                    ))}
                  </>
                )}
              </NavDropdown>

              <Link
                to="/qui-je-suis"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors font-body ${
                  isOn('/qui-je-suis') ? 'bg-accent text-accent-foreground' : 'text-primary hover:bg-muted'
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/temoignages"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors font-body ${
                  isOn('/temoignages') ? 'bg-accent text-accent-foreground' : 'text-primary hover:bg-muted'
                }`}
              >
                {t('nav.testimonials')}
              </Link>
            </nav>

            {/* Mobile menu button + WhatsApp */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={whatsappLink || "#"}
                className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600 transition-colors text-sm font-body"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick('header-mobile')}
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">WhatsApp</span>
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

            {/* Cross-domain switcher + CTAs, separated from the nav proper: these
                leave the English site or start a conversation, rather than moving
                around within it. */}
            <div className="hidden lg:flex items-center gap-2 ms-4">
              <NavDropdown label="IA & SAP" align="right" width="w-72">
                {close => (
                  <>
                    <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Mes autres domaines
                    </p>
                    {otherDomains.map(f => {
                      const Icon = FORMATION_ICONS[f.icon];
                      return (
                        <a
                          key={f.key}
                          href={f.href}
                          target="_blank"
                          rel="noopener"
                          onClick={() => { close(); trackEvent('nav_formation_switch', { formation: f.key, target: f.href }); }}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors"
                        >
                          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary shrink-0">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                              {f.navLabel}
                              <ExternalLink className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
                            </span>
                            <span className="text-xs text-muted-foreground">{f.href.replace('https://', '')}</span>
                          </span>
                        </a>
                      );
                    })}
                  </>
                )}
              </NavDropdown>

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors font-body border ${
                  isOn('/contact')
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'text-primary border-primary/30 hover:bg-primary/5 hover:border-primary'
                }`}
              >
                {t('nav.contact')}
              </Link>
              <a
                href={whatsappLink || "#"}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-green-700 transition-colors font-body"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick('header-desktop')}
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu — same grouping as desktop, as a flat
              accordion-free list so nothing is hidden behind a second tap. */}
          {isMobileMenuOpen && (
            <div id="mobile-navigation" className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col" aria-label="Navigation principale">
                {(() => {
                  const item = (href: string, name: string, key?: string) => (
                    <Link
                      key={key ?? href}
                      to={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center min-h-[44px] px-4 py-3 rounded-lg text-base font-medium transition-colors font-body active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isOn(href) ? 'text-accent-foreground bg-accent' : 'text-primary hover:bg-muted'
                      }`}
                    >
                      {name}
                    </Link>
                  );
                  const heading = (label: string) => (
                    <p className="px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                  );
                  return (
                    <>
                      {item('/', t('nav.home'))}

                      {heading('Formations')}
                      {FORMATION_LINKS.map(f => item(f.href, f.name))}
                      {AUDIENCE_LINKS.map(a => item(a.href, a.name))}

                      {heading('Ressources gratuites')}
                      {RESOURCE_LINKS.map(r => item(r.href, r.name))}

                      {heading('À propos')}
                      {item('/qui-je-suis', t('nav.about'))}
                      {item('/temoignages', t('nav.testimonials'))}
                      {item('/contact', t('nav.contact'))}

                      {heading('Mes autres domaines')}
                      {otherDomains.map(f => {
                        const Icon = FORMATION_ICONS[f.icon];
                        return (
                          <a
                            key={f.key}
                            href={f.href}
                            target="_blank"
                            rel="noopener"
                            onClick={() => { setIsMobileMenuOpen(false); trackEvent('nav_formation_switch', { formation: f.key, target: f.href }); }}
                            className="flex items-center gap-3 min-h-[44px] px-4 py-3 rounded-lg text-base font-medium transition-colors font-body text-primary hover:bg-muted"
                          >
                            <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                            <span className="inline-flex items-center gap-1">
                              {f.navLabel}
                              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                            </span>
                          </a>
                        );
                      })}
                    </>
                  );
                })()}
              </nav>
            </div>
          )}
        </div>
      </header>

      <Breadcrumbs customTitle={breadcrumbTitle} customSection={breadcrumbSection} />

      <main id="main-content">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-sm py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <SiteLogo height={32} className="brightness-0 invert" alt="Antony Addy" />
                <span className="font-bold text-lg">Antony Addy</span>
              </Link>
              <p className="text-gray-400 mb-4 leading-relaxed">{tRaw('footer.tagline', { lng: 'fr', years: EXPERIENCE_FLOOR })}</p>
              <div className="flex gap-3">
                <a
                  href={whatsappLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  aria-label="WhatsApp"
                  onClick={handleWhatsAppClick('footer-social')}
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
              <p className="mt-4 text-xs italic text-gray-400 leading-relaxed">
                Vous préférez apprendre en autonomie ? Découvrez ma plateforme
                d'exercices d'anglais en ligne :{" "}
                <a
                  href="https://anglaisadistance.fr"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-200 hover:text-white underline underline-offset-2"
                >
                  anglaisadistance.fr ↗
                </a>
              </p>
              <div className="mt-5">
                <h3 className="font-semibold mb-2 text-white text-xs uppercase tracking-wider">Mes formations</h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {FORMATIONS.map(f => (
                    <li key={f.key}>
                      {f.external ? (
                        <a
                          href={f.href}
                          target="_blank"
                          rel="noopener"
                          onClick={() => trackEvent('footer_formation_click', { formation: f.key, target: f.href })}
                          className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                        >
                          {f.navLabel}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      ) : (
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">{f.navLabel}</Link>
                      )}
                    </li>
                  ))}
                </ul>
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
                <li><Link to="/test-de-positionnement" className="text-gray-400 hover:text-white transition-colors">Test de positionnement</Link></li>
                <li><Link to="/ressources-en-ligne" className="text-gray-400 hover:text-white transition-colors">Ressources en ligne</Link></li>
              </ul>

              <h4 className="font-semibold mt-6 mb-2 text-white text-xs uppercase tracking-wider">Pour qui</h4>
              <ul className="space-y-1">
                {AUDIENCE_LINKS.map(a => (
                  <li key={a.href}>
                    <Link to={a.href} className="text-gray-400 hover:text-white transition-colors text-xs">{a.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="font-semibold mb-3 text-white">Zones d'intervention</h3>
              <ul className="space-y-2">
                {CITY_LINKS.map(c => (
                  <li key={c.href}>
                    <Link to={c.href} className="text-gray-400 hover:text-white transition-colors">{c.name}</Link>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Présentiel dans le Var et les Alpes-Maritimes, ou à distance partout en France et dans le monde.
              </p>
            </div>


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
                    href={whatsappLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={handleWhatsAppClick('footer-contact')}
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

          <div className="border-t border-gray-800 pt-6 flex flex-col gap-3">
            <p className="text-gray-500 text-xs text-center md:text-left">
              Déclaration d'activité enregistrée sous le numéro 93830738883 auprès de la DREETS Provence-Alpes-Côte d'Azur. Cet enregistrement ne vaut pas agrément de l'État.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs">
                © {year} Antony Addy. {t('footer.rights')}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-gray-600 text-xs">
                  Hébergeur : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Site web :{" "}
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 transition-colors">
                    https://vercel.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
