"use client";

import { useEffect, useSyncExternalStore } from "react";

const LANGUAGE_KEY = "language";

const normalizeLanguage = (value) => (value === "EN" ? "EN" : "ID");

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

const subscribeLanguage = (callback) => {
  if (typeof window === "undefined") return () => {};

  const handleLanguageEvent = () => callback();
  const handleStorage = (event) => {
    if (event.key === LANGUAGE_KEY) callback();
  };

  window.addEventListener("app-language-change", handleLanguageEvent);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("app-language-change", handleLanguageEvent);
    window.removeEventListener("storage", handleStorage);
  };
};

const getLanguageSnapshot = () => {
  if (typeof window === "undefined") return "ID";
  return normalizeLanguage(localStorage.getItem(LANGUAGE_KEY));
};

const getLanguageServerSnapshot = () => "ID";

export function useLanguage() {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getLanguageSnapshot,
    getLanguageServerSnapshot
  );

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  const toggleLanguage = () => {
    setAppLanguage(language === "ID" ? "EN" : "ID");
  };

  return { language, toggleLanguage };
}
