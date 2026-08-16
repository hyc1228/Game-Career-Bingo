import React, { createContext, useContext, useState, useCallback } from 'react';
import { Language, LocalizedText } from '../types';
import { getString, StringKey } from './strings';

const STORAGE_KEY = 'design-bingo-lang';

const detectInitialLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'zh') return saved;
  } catch {
    // localStorage unavailable (e.g. private mode) — fall through to detection
  }
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
};

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: StringKey) => string;
  /** Resolve a LocalizedText field to the current language. */
  tx: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(detectInitialLanguage);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persistence is best-effort
    }
  }, []);

  const t = useCallback((key: StringKey) => getString(key, lang), [lang]);
  const tx = useCallback((text: LocalizedText) => text[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
