import React, { useState, useMemo } from 'react';
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

  // Update parent component when filters change
  React.useEffect(() => {
    onFilterChange(filteredArticles);
  }, [filteredArticles, onFilterChange]);

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            aria-label="Rechercher dans les articles"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Effacer la recherche"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div>

        {/* Results Count & Clear */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} trouvé{filteredArticles.length !== 1 ? 's' : ''}
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={clearSearch}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
