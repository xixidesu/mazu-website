"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "zh";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, zh: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("lang");
    return saved === "zh" || saved === "en" ? saved : "en";
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
