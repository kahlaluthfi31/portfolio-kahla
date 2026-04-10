"use client";

import { useEffect, useState } from "react";

const LANGUAGE_KEY = "language";

const normalizeLanguage = (value) => (value === "EN" ? "EN" : "ID");

const getStoredLanguage = () => {
  if (typeof window === "undefined") return "ID";
  return normalizeLanguage(localStorage.getItem(LANGUAGE_KEY));
};

const applyDocumentLanguage = (language) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = language === "EN" ? "en" : "id";
};

export const setAppLanguage = (language) => {
  if (typeof window === "undefined") return;
  const normalized = normalizeLanguage(language);
  localStorage.setItem(LANGUAGE_KEY, normalized);
  applyDocumentLanguage(normalized);
  window.dispatchEvent(
    new CustomEvent("app-language-change", { detail: normalized })
  );
};

export function useLanguage() {
  const [language, setLanguage] = useState(getStoredLanguage);

  useEffect(() => {
    const handleLanguageEvent = (event) => {
      setLanguage(normalizeLanguage(event.detail));
    };

    const handleStorage = (event) => {
      if (event.key === LANGUAGE_KEY) {
        setLanguage(normalizeLanguage(event.newValue));
      }
    };

    window.addEventListener("app-language-change", handleLanguageEvent);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("app-language-change", handleLanguageEvent);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  const toggleLanguage = () => {
    setAppLanguage(language === "ID" ? "EN" : "ID");
  };

  return { language, toggleLanguage };
}
