import React from 'react';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import { featuredTestimonials } from '@/data/testimonials';

/* No star row and no "vérifiés" claim: these are LinkedIn recommendations, which
   carry no rating, and art. L.111-7-2 C. conso. requires a stated verification
   method before calling any review "vérifié". See src/pages/Testimonials.tsx. */
const SocialProof: React.FC = () => (
  <section className="bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-border mb-12">
    <div className="flex items-center gap-2 mb-4">
      <Quote className="h-5 w-5 text-accent" aria-hidden="true" />
      <span className="text-sm font-semibold text-foreground">Recommandations LinkedIn</span>
    </div>

    <div className="grid sm:grid-cols-2 gap-6">
      {featuredTestimonials.slice(0, 2).map((t) => (
        <blockquote key={t.name} className="bg-muted rounded-lg p-4">
          <p className="text-muted-foreground italic leading-relaxed mb-3">
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer className="text-sm font-medium text-foreground">
            {t.name} — {t.role}
          </footer>
        </blockquote>
      ))}
    </div>

    <div className="mt-6 text-center">
      <Link to="/temoignages" className="text-accent hover:text-accent/80 font-medium transition-colors">
        Voir tous les avis →
      </Link>
    </div>
  </section>
);

export default SocialProof;
