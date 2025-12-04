import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ChevronRight, Filter, BarChart3 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { readingPassages, ReadingPassage } from '@/data/readingPassages';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const difficultyColors = {
  easy: 'bg-green-500/10 text-green-600 border-green-500/20',
  medium: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  hard: 'bg-red-500/10 text-red-600 border-red-500/20',
};

const difficultyLabels = {
  easy: 'Facile',
  medium: 'Intermédiaire',
  hard: 'Avancé',
};

export default function Reading() {
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const filteredPassages = difficultyFilter === 'all' 
    ? readingPassages 
    : readingPassages.filter(p => p.difficulty === difficultyFilter);

  const stats = {
    easy: readingPassages.filter(p => p.difficulty === 'easy').length,
    medium: readingPassages.filter(p => p.difficulty === 'medium').length,
    hard: readingPassages.filter(p => p.difficulty === 'hard').length,
  };

  return (
    <>
      <SEOHead
        title="Compréhension Écrite | Reading Comprehension"
        description="Améliorez votre compréhension de l'anglais avec des textes et questions interactifs. Exercices de lecture pour tous les niveaux."
        canonical="/reading"
      />

      <div className="min-h-screen bg-background py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 font-heading">
              Compréhension Écrite
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Lisez des textes en anglais et testez votre compréhension avec des questions interactives
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-green-600">{stats.easy}</p>
                <p className="text-sm text-muted-foreground">Facile</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-yellow-600">{stats.medium}</p>
                <p className="text-sm text-muted-foreground">Intermédiaire</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-red-600">{stats.hard}</p>
                <p className="text-sm text-muted-foreground">Avancé</p>
              </CardContent>
            </Card>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-4 mb-8">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrer par niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="easy">Facile</SelectItem>
                <SelectItem value="medium">Intermédiaire</SelectItem>
                <SelectItem value="hard">Avancé</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="secondary">{filteredPassages.length} textes</Badge>
          </div>

          {/* Passages Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPassages.map((passage) => (
              <Card key={passage.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{passage.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{passage.titleFr}</p>
                    </div>
                    <Badge className={difficultyColors[passage.difficulty]}>
                      {difficultyLabels[passage.difficulty]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {passage.readingTime} min
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart3 className="h-4 w-4" />
                      {passage.questions.length} questions
                    </span>
                  </div>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {passage.content.substring(0, 150)}...
                  </p>
                  <Link to={`/reading/${passage.id}`}>
                    <Button className="w-full gap-2">
                      Lire et pratiquer
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPassages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun texte trouvé pour ce niveau.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
