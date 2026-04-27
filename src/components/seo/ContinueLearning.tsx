import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export type ContinueLink = { to: string; label: string };

interface ContinueLearningProps {
  /** Heading text — defaults to French CTA */
  heading?: string;
  /** 2–3 internal next-step links */
  links: ContinueLink[];
  /** Strong CTA (Contact / AI trainer / Services) */
  cta?: { to: string; label: string };
}

/**
 * Reusable bottom-of-page internal-linking block.
 * Used to eliminate dead-end pages and improve SEO link equity flow.
 * Does not introduce new design tokens — uses existing semantic Tailwind classes.
 */
export default function ContinueLearning({
  heading = "Continuer votre apprentissage",
  links,
  cta,
}: ContinueLearningProps) {
  if (!links?.length) return null;

  return (
    <nav
      aria-label={heading}
      className="border-t border-border pt-8 mt-12 max-w-3xl mx-auto px-4"
    >
      <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
        {heading}
      </h2>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-6">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-primary hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      {cta && (
        <div className="flex justify-center">
          <Link
            to={cta.to}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </nav>
  );
}
