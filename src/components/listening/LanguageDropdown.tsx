import React from 'react';
import { useListeningLanguage } from '@/contexts/ListeningLanguageContext';
import { LANGUAGE_LABELS, SupportedLanguage } from '@/data/listeningExercises';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

const LanguageDropdown: React.FC = () => {
  const { language, setLanguage } = useListeningLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Select value={language} onValueChange={(value) => setLanguage(value as SupportedLanguage)}>
        <SelectTrigger className="w-[160px] bg-background">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="bg-background border border-border z-dropdown">
          {(Object.entries(LANGUAGE_LABELS) as [SupportedLanguage, string][]).map(([code, label]) => (
            <SelectItem key={code} value={code}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageDropdown;
