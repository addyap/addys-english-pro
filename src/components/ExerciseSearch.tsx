import React, { useState, useMemo } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ExerciseSearchProps {
  exercises: Array<{ id: number; title: string }>;
  onFilteredChange: (filtered: Array<{ id: number; title: string }>) => void;
  categories?: string[];
}

const ExerciseSearch: React.FC<ExerciseSearchProps> = ({
  exercises,
  onFilteredChange,
  categories = ['all', '1-50', '51-100', '101-150'],
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredExercises = useMemo(() => {
    let filtered = exercises;

    // Filter by category (range)
    if (selectedCategory !== 'all') {
      const [start, end] = selectedCategory.split('-').map(Number);
      filtered = filtered.filter(ex => ex.id >= start && ex.id <= end);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(ex =>
        ex.title.toLowerCase().includes(query) ||
        ex.id.toString().includes(query)
      );
    }

    return filtered;
  }, [exercises, searchQuery, selectedCategory]);

  React.useEffect(() => {
    onFilteredChange(filteredExercises);
  }, [filteredExercises, onFilteredChange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const hasActiveFilters = searchQuery.trim() || selectedCategory !== 'all';

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher un exercice..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les exercices</SelectItem>
            <SelectItem value="1-50">Erreurs courantes (1-50)</SelectItem>
            <SelectItem value="51-100">Pièges avancés (51-100)</SelectItem>
            <SelectItem value="101-150">Mots confus (101-150)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results Count & Clear */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            {filteredExercises.length} exercice{filteredExercises.length !== 1 ? 's' : ''}
          </Badge>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs h-7"
            >
              <X className="h-3 w-3 mr-1" />
              Effacer filtres
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseSearch;
