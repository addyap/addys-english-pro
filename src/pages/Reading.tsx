import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ChevronRight, Filter, BarChart3, Gamepad2, Map, Trophy } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { readingPassages, ReadingPassage } from '@/data/readingPassages';
import { interactiveStories } from '@/data/interactiveStories';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
        title="Lecture Anglais | Textes & Histoires Interactives"
        description="Améliorez votre compréhension écrite avec 12 textes et histoires interactives en anglais. Niveaux A2 à C1."
        canonicalUrl="https://www.antonyaddy.com/reading"
        keywords={["compréhension écrite anglais", "reading comprehension", "textes anglais", "lecture anglais"]}
        enableOrgJsonLd
        enableWebSiteJsonLd
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Comment améliorer sa compréhension écrite en anglais",
          description: "Guide pratique pour progresser en lecture anglaise avec des textes interactifs",
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Lire le texte une première fois",
              text: "Lisez le texte en entier sans vous arrêter sur les mots inconnus pour comprendre le sens général"
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Répondre aux questions",
              text: "Testez votre compréhension avec les questions interactives sous chaque texte"
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Consulter la traduction",
              text: "Utilisez la traduction française pour vérifier votre compréhension des passages difficiles"
            }
          ],
          totalTime: "PT10M"
        }}
      />

      <div className="min-h-screen bg-background py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
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

          {/* Intro Section */}
          <div className="bg-card border border-border rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3 font-heading">
              Pourquoi travailler la compréhension écrite ?
            </h2>
            <div className="text-muted-foreground space-y-3 font-body">
              <p>
                La lecture en anglais est une compétence essentielle pour progresser. Que vous prépariez le <strong className="text-primary">TOEIC</strong>, travailliez dans un contexte international, ou souhaitiez simplement lire des articles et documents en anglais, ces exercices vous aideront à développer votre <strong className="text-primary">vocabulaire</strong>, votre <strong className="text-primary">compréhension contextuelle</strong> et votre <strong className="text-primary">vitesse de lecture</strong>.
              </p>
              <p>
                Chaque texte propose des questions de compréhension pour vérifier que vous avez saisi les points essentiels. Les <Link to="/story/1" className="text-accent hover:underline font-medium">histoires interactives</Link> ajoutent une dimension ludique : vous faites des choix qui influencent la suite de l'histoire, comme dans un livre dont vous êtes le héros.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <span className="bg-green-500/10 text-green-700 px-3 py-1 rounded-full">Traduction FR/EN disponible</span>
              <span className="bg-blue-500/10 text-blue-700 px-3 py-1 rounded-full">Créé par un formateur FPA certifié</span>
              <span className="bg-amber-500/10 text-amber-700 px-3 py-1 rounded-full">Niveaux A2 à C1</span>
            </div>
          </div>

          <Tabs defaultValue="passages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="passages" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Textes ({readingPassages.length})
              </TabsTrigger>
              <TabsTrigger value="stories" className="gap-2">
                <Gamepad2 className="h-4 w-4" />
                Histoires interactives ({interactiveStories.length})
              </TabsTrigger>
            </TabsList>

            {/* Reading Passages Tab */}
            <TabsContent value="passages">
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
            </TabsContent>

            {/* Interactive Stories Tab */}
            <TabsContent value="stories">
              <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Livre dont vous êtes le héros</h3>
                    <p className="text-muted-foreground">
                      Vivez des aventures interactives en anglais ! Faites des choix qui influencent l'histoire et découvrez plusieurs fins possibles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {interactiveStories.map((story) => (
                  <Card key={story.id} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/30">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-1">{story.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{story.titleFr}</p>
                        </div>
                        <Badge className={difficultyColors[story.difficulty]}>
                          {difficultyLabels[story.difficulty]}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          ~{story.estimatedTime} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Map className="h-4 w-4" />
                          {story.themeFr}
                        </span>
                        <span className="flex items-center gap-1">
                          <Trophy className="h-4 w-4" />
                          {story.totalEndings} fins
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {story.descriptionFr}
                      </p>
                      <Link to={`/story/${story.id}`}>
                        <Button className="w-full gap-2" variant="default">
                          <Gamepad2 className="h-4 w-4" />
                          Commencer l'aventure
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {interactiveStories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Aucune histoire disponible pour le moment.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Soft CTA Section with Internal Links */}
          <div className="mt-12 border-t border-border pt-10 text-center">
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Ces ressources gratuites vous permettent de vous entraîner en autonomie. Pour un parcours structuré adapté à vos objectifs professionnels, je propose des formations individuelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/exercices" className="text-accent hover:text-accent/80 font-medium transition-colors">
                Voir les exercices de grammaire →
              </Link>
              <Link to="/offres-de-formation" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Découvrir les formations
              </Link>
            </div>
            
            {/* Related Resources */}
            <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground">
              <Link to="/exercices/listening" className="text-accent hover:underline">Exercices d'écoute</Link>
              <span>•</span>
              <Link to="/exercices/cloe-preparation" className="text-accent hover:underline">Préparation CLOE</Link>
              <span>•</span>
              <Link to="/blog" className="text-accent hover:underline">Articles & conseils</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
