"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Support 3 languages as per app.md: VI (default), EN, CN
type Language = "vi" | "en" | "cn";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  languages: { code: Language; name: string; nativeName: string }[];
}

const languages = [
  { code: "vi" as Language, name: "Vietnamese", nativeName: "Tiếng Việt" },
  { code: "en" as Language, name: "English", nativeName: "English" },
  { code: "cn" as Language, name: "Chinese", nativeName: "中文" },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLang] = useState<Language>("vi");

  // Optional: Persist language preference
  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "vi" || saved === "en" || saved === "cn") {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleLang = () => {
    // Cycle through: vi -> en -> cn -> vi
    const langs: Language[] = ["vi", "en", "cn"];
    const currentIndex = langs.indexOf(lang);
    const newLang = langs[(currentIndex + 1) % langs.length];
    handleSetLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
