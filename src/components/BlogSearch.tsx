import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

interface BlogSearchProps {
  articles: Article[];
  onFilterChange: (filtered: Article[]) => void;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ articles, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Store callback ref to avoid dependency issues
  const onFilterChangeRef = useRef(onFilterChange);
  onFilterChangeRef.current = onFilterChange;

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(articles.map(a => a.category));
    return ['all', ...Array.from(cats)];
  }, [articles]);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        a =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [articles, searchQuery, selectedCategory]);

  // Update parent component when filters change - use ref to avoid callback dependency
  useEffect(() => {
    onFilterChangeRef.current(filteredArticles);
  }, [filteredArticles]);

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="bg-card rounded-lg shadow-md p-6 mb-8">
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            aria-label="Rechercher dans les articles"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Effacer la recherche"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div>

        {/* Results Count & Clear */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span aria-live="polite">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} trouvé{filteredArticles.length !== 1 ? 's' : ''}
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={clearSearch}
              type="button"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
