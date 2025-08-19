
import React from 'react';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onFocus={(e) => e.currentTarget.classList.remove('sr-only')}
      onBlur={(e) => e.currentTarget.classList.add('sr-only')}
    >
      Aller au contenu principal
    </a>
  );
}
