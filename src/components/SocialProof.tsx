import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const SocialProof: React.FC = () => (
  <section className="bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-border mb-12">
    <div className="flex items-center gap-2 mb-4">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
        ))}
      </div>
      <span className="text-sm font-semibold text-foreground">Avis clients vérifiés</span>
    </div>

    <div className="grid sm:grid-cols-2 gap-6">
      {testimonials.slice(0, 2).map((t) => (
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
