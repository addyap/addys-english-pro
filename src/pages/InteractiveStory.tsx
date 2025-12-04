import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, RotateCcw, Languages, Map, Trophy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { interactiveStories } from '@/data/interactiveStories';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

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

const endingMessages = {
  good: { emoji: '🎉', title: 'Excellente fin !', titleFr: 'Excellente fin !' },
  neutral: { emoji: '😊', title: 'The End', titleFr: 'Fin' },
  bad: { emoji: '😅', title: 'Try Again?', titleFr: 'Réessayer ?' },
};

export default function InteractiveStory() {
  const { id } = useParams();
  const story = interactiveStories.find(s => s.id === Number(id));
  
  const [currentNodeId, setCurrentNodeId] = useState(story?.startNodeId || 'start');
  const [history, setHistory] = useState<string[]>([]);
  const [showFrench, setShowFrench] = useState(false);
  const [endingsFound, setEndingsFound] = useState<Set<string>>(new Set());

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Histoire non trouvée</h1>
          <Link to="/reading">
            <Button>Retour aux lectures</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentNode = story.nodes[currentNodeId];
  const progress = (history.length / Object.keys(story.nodes).length) * 100;

  const handleChoice = (nextId: string) => {
    setHistory([...history, currentNodeId]);
    setCurrentNodeId(nextId);
    
    const nextNode = story.nodes[nextId];
    if (nextNode?.isEnding) {
      setEndingsFound(prev => new Set([...prev, nextId]));
    }
  };

  const handleGoBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousNode = newHistory.pop()!;
      setHistory(newHistory);
      setCurrentNodeId(previousNode);
    }
  };

  const handleRestart = () => {
    setHistory([]);
    setCurrentNodeId(story.startNodeId);
  };

  return (
    <>
      <SEOHead
        title={`${story.title} | Histoire Interactive`}
        description={story.description}
        canonical={`/story/${story.id}`}
      />

      <div className="min-h-screen bg-background py-8">
        <div className="max-w-3xl mx-auto px-4">
          {/* Back Link */}
          <Link to="/reading" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Retour aux lectures
          </Link>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <Badge className={difficultyColors[story.difficulty]}>
                {difficultyLabels[story.difficulty]}
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Map className="h-3 w-3" />
                {showFrench ? story.themeFr : story.theme}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                ~{story.estimatedTime} min
              </span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-1 font-heading">
              {showFrench ? story.titleFr : story.title}
            </h1>
            <p className="text-muted-foreground">
              {showFrench ? story.descriptionFr : story.description}
            </p>
          </div>

          {/* Progress & Controls */}
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {endingsFound.size}/{story.totalEndings} fins découvertes
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="show-french" className="text-sm text-muted-foreground cursor-pointer">
                Français
              </Label>
              <Switch 
                id="show-french" 
                checked={showFrench} 
                onCheckedChange={setShowFrench}
              />
            </div>
          </div>

          {/* Story Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNodeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {currentNode?.isEnding ? (
                      <span className="flex items-center gap-2">
                        {endingMessages[currentNode.endingType || 'neutral'].emoji}
                        {showFrench 
                          ? endingMessages[currentNode.endingType || 'neutral'].titleFr 
                          : endingMessages[currentNode.endingType || 'neutral'].title
                        }
                      </span>
                    ) : (
                      'Votre aventure'
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none mb-6">
                    <p className="text-foreground leading-relaxed text-lg">
                      {showFrench ? currentNode?.textFr : currentNode?.text}
                    </p>
                    
                    {showFrench && (
                      <p className="text-muted-foreground leading-relaxed mt-4 italic border-l-2 border-primary/30 pl-4">
                        {currentNode?.text}
                      </p>
                    )}
                  </div>

                  {/* Choices */}
                  {currentNode?.choices && !currentNode.isEnding && (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-muted-foreground mb-3">
                        Que faites-vous ?
                      </p>
                      {currentNode.choices.map((choice, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleChoice(choice.nextId)}
                          className="w-full text-left p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-primary/50 transition-all group"
                        >
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <div>
                              <p className="font-medium text-foreground">
                                {showFrench ? choice.textFr : choice.text}
                              </p>
                              {showFrench && (
                                <p className="text-sm text-muted-foreground mt-1 italic">
                                  {choice.text}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Ending Actions */}
                  {currentNode?.isEnding && (
                    <div className="flex flex-col items-center gap-4 pt-4">
                      <Sparkles className="h-12 w-12 text-primary animate-pulse" />
                      <p className="text-center text-muted-foreground">
                        {endingsFound.size < story.totalEndings 
                          ? `Il y a encore ${story.totalEndings - endingsFound.size} fin(s) à découvrir !`
                          : 'Félicitations ! Vous avez trouvé toutes les fins !'
                        }
                      </p>
                      <Button onClick={handleRestart} className="gap-2">
                        <RotateCcw className="h-4 w-4" />
                        Recommencer l'aventure
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={handleGoBack} 
              disabled={history.length === 0}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Revenir en arrière
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={handleRestart}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Recommencer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
