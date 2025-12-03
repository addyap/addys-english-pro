import React, { useState } from 'react';
import { Globe, BookOpen } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GrammarExplanationProps {
  titleEn: string;
  titleFr: string;
  explanationEn: string;
  explanationFr: string;
  examples: { en: string; fr: string }[];
}

const GrammarExplanation: React.FC<GrammarExplanationProps> = ({
  titleEn,
  titleFr,
  explanationEn,
  explanationFr,
  examples
}) => {
  const [showFrench, setShowFrench] = useState(false);

  const title = showFrench ? titleFr : titleEn;
  const explanation = showFrench ? explanationFr : explanationEn;

  return (
    <Card className="mb-6 border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-xl font-heading text-primary">{title}</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <Label htmlFor="language-toggle" className="text-sm text-muted-foreground">
              EN
            </Label>
            <Switch
              id="language-toggle"
              checked={showFrench}
              onCheckedChange={setShowFrench}
            />
            <Label htmlFor="language-toggle" className="text-sm text-muted-foreground">
              FR
            </Label>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="prose prose-sm max-w-none text-foreground">
          <div className="whitespace-pre-wrap font-body text-sm leading-relaxed">
            {explanation.split('\n').map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return <h4 key={i} className="font-semibold text-primary mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
              }
              if (line.startsWith('- ')) {
                return <p key={i} className="ml-4 my-1">• {line.slice(2)}</p>;
              }
              return line ? <p key={i} className="my-1">{line}</p> : <br key={i} />;
            })}
          </div>
        </div>

        <div className="mt-4 p-4 bg-accent/20 rounded-lg">
          <h4 className="font-semibold text-primary mb-3 font-heading">
            {showFrench ? 'Exemples' : 'Examples'}
          </h4>
          <div className="space-y-2">
            {examples.map((example, index) => (
              <div key={index} className="text-sm font-body">
                <span dangerouslySetInnerHTML={{ 
                  __html: (showFrench ? example.fr : example.en)
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
                }} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GrammarExplanation;
