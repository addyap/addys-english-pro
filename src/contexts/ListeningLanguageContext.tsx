import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { SupportedLanguage } from '@/data/listeningExercises';

interface ListeningLanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

const ListeningLanguageContext = createContext<ListeningLanguageContextType | undefined>(undefined);

export const ListeningLanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('fr');

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
  }, []);

  return (
    <ListeningLanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </ListeningLanguageContext.Provider>
  );
};

export const useListeningLanguage = (): ListeningLanguageContextType => {
  const context = useContext(ListeningLanguageContext);
  if (!context) {
    throw new Error('useListeningLanguage must be used within a ListeningLanguageProvider');
  }
  return context;
};
