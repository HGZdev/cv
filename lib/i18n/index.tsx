import React, { createContext, useContext, useState } from 'react';

export type I18nLang = 'en' | 'pl';
export type I18nKey = string;
export type I18nLangText = string;

export type TranslationKey = keyof Translations;

export type Translation = {
  [lang in I18nLang]: I18nLangText;
};

export type Translations = {
  [key in I18nKey]: Translation;
};

type LangContextType = {
  lang: I18nLang;
  setLang: (lang: I18nLang) => void;
  getText: (key: I18nKey, forceLang?: I18nLang) => I18nLangText;
  langs: I18nLang[];
};

const I18nContext = createContext<LangContextType | undefined>(undefined);

export interface I18nProviderProps {
  translations: Translations;
  langs: I18nLang[];
  defaultLang: I18nLang;
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  translations,
  defaultLang,
  langs,
}) => {
  if (!langs.length) {
    throw new Error('langs cannot be empty.');
  }

  const [lang, setLang] = useState<I18nLang>(defaultLang || langs[0]);

  const getText = (key: I18nKey, forceLang?: I18nLang): I18nLangText => {
    const translationObj = translations[key];
    const selectedLang = forceLang ?? lang;
    const text = translationObj?.[selectedLang];

    if (!text) {
      console.warn(`Missing translation in "${lang}" for key: ${key}`);
      return `[${key}]`;
    }
    return text;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, getText, langs }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useLang = (): LangContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useLang must be used within an I18nProvider');
  }
  return context;
};
