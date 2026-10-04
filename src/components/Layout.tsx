import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Menu, X, ChevronDown, Globe, Sparkles, Code, ExternalLink, Mail, MapPin } from 'lucide-react';
import { FORMATIONS } from '@/data/formations';

const FORMATION_ICONS = { Globe, Sparkles, Code } as const;

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
  // IA and website-creation subdomains).
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
              {/* Neutral wordmark for the hub — the English "FORMATIONS" roundel
                  lived here but misrepresents a three-activity brand. */}
              <Link to="/" className="text-xl font-bold text-primary font-heading tracking-tight">
                Antony Addy
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
              <NavDropdown label="Anglais" active={formationsActive} width="w-72">
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

              {/* The other two activities, as a peer of "Anglais" — the three
                  activities read as equals in the primary nav, not one offer
                  plus a tucked-away switcher. */}
              <NavDropdown label="IA & Créations" width="w-72">
                {close => (
                  <>
                    <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Mes autres activités
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
                className="border border-primary/30 text-primary px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-primary/5 transition-colors text-sm font-body"
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

            {/* CTAs, separated from the nav proper: these start a conversation
                rather than moving around within the site. */}
            <div className="hidden lg:flex items-center gap-2 ms-4">
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
                className="border border-primary/30 text-primary px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-primary/5 transition-colors font-body"
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

                      {heading('Anglais')}
                      {FORMATION_LINKS.map(f => item(f.href, f.name))}
                      {AUDIENCE_LINKS.map(a => item(a.href, a.name))}

                      {heading('Ressources gratuites')}
                      {RESOURCE_LINKS.map(r => item(r.href, r.name))}

                      {heading('À propos')}
                      {item('/qui-je-suis', t('nav.about'))}
                      {item('/temoignages', t('nav.testimonials'))}
                      {item('/contact', t('nav.contact'))}

                      {heading('IA & Créations')}
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
      <footer className="site-footer px-4 py-12 text-sm text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-3">
            <div>
              <Link to="/" className="mb-4 inline-flex items-center gap-2">
                <SiteLogo height={32} className="brightness-0 invert" alt="Antony Addy" />
                <span className="text-lg font-bold">Antony Addy</span>
              </Link>
              <p className="max-w-sm leading-relaxed text-gray-300">{tRaw('footer.tagline', { lng: 'fr', years: EXPERIENCE_FLOOR })}</p>
              <p className="mt-4 flex items-start gap-2 text-gray-300"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />Var &amp; Alpes-Maritimes · À distance partout</p>
            </div>

            <nav aria-label="Explorer le site">
              <h3 className="mb-4 font-semibold text-white">Explorer</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-300">
                <li><Link to="/offres-de-formation" className="hover:text-white">Formations</Link></li>
                <li><Link to="/qui-je-suis" className="hover:text-white">Qui je suis</Link></li>
                <li><Link to="/test-de-positionnement" className="hover:text-white">Test de niveau</Link></li>
                <li><Link to="/temoignages" className="hover:text-white">Témoignages</Link></li>
                <li><Link to="/ressources-en-ligne" className="hover:text-white">Ressources</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4">
                {FORMATIONS.filter((f) => f.external).map((f) => (
                  <a key={f.key} href={f.href} target="_blank" rel="noopener" onClick={() => trackEvent('footer_formation_click', { formation: f.key, target: f.href })} className="inline-flex items-center gap-1 text-gray-300 hover:text-white">
                    {f.navLabel}<ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>

            <div>
              <h3 className="mb-4 font-semibold text-white">Parlons de votre projet</h3>
              <p className="mb-4 leading-relaxed text-gray-300">Premier échange gratuit · Réponse sous 24 h ouvrées</p>
              <Link to="/contact" className="mb-5 inline-flex rounded-lg bg-accent px-5 py-3 font-semibold text-white hover:bg-accent/90">Prendre contact</Link>
              <a href="mailto:formations@antonyaddy.com" className="flex items-center gap-2 text-gray-300 hover:text-white"><Mail className="h-4 w-4" aria-hidden="true" />formations@antonyaddy.com</a>
              <a href={whatsappLink || '#'} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick('footer-contact')} className="mt-3 flex items-center gap-2 text-gray-300 hover:text-white"><MessageSquare className="h-4 w-4" aria-hidden="true" />WhatsApp · +33 6 49 82 98 26</a>
              <a href="https://linkedin.com/in/antonyaddy" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-gray-300 hover:text-white">LinkedIn ↗</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-xs leading-relaxed text-gray-300 md:flex-row md:justify-between">
            <div>
              <p>© {year} Antony Addy · Déclaration d'activité n° 93830738883 auprès de la DREETS PACA. Cet enregistrement ne vaut pas agrément de l'État.</p>
              <p className="mt-2">Hébergeur : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis · <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">vercel.com</a></p>
            </div>
            <nav aria-label="Informations légales" className="flex shrink-0 flex-wrap gap-x-4 gap-y-2">
              <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
              <Link to="/politique-confidentialite" className="hover:text-white">Confidentialité</Link>
              <Link to="/cgv" className="hover:text-white">CGV</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
