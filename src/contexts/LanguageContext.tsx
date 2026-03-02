"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLang] = useState<Language>("vi");

  // Optional: Persist language preference
  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "vi") {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleLang = () => {
    const newLang = lang === "vi" ? "en" : "vi";
    handleSetLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang }}>
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
