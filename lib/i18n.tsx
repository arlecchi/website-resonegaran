"use client"

// Language system (English / Indonesian).
// You normally DON'T need to edit this file — translations live in the content/ folder.
// See TRANSLATING.md for how to add or change text.

import * as React from "react"

export type Lang = "en" | "id"
export const LANGS: Lang[] = ["en", "id"]
const DEFAULT_LANG: Lang = "en" // used before the visitor picks one (and on the server)
const STORAGE_KEY = "lang"

// --- Tiny store: remembers the choice in localStorage and tells React when it changes ---
const listeners = new Set<() => void>()

function readLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "en" || saved === "id") return saved
  } catch {}
  // No saved choice yet: follow the browser's language.
  return navigator.language?.toLowerCase().startsWith("id") ? "id" : DEFAULT_LANG
}

function writeLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {}
  listeners.forEach((fn) => fn())
}

function subscribe(fn: () => void) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

// --- React context ---
const LanguageContext = React.createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: DEFAULT_LANG,
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // The server always renders DEFAULT_LANG; the browser then switches to the saved language.
  const lang = React.useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG)

  // Keep <html lang="..."> correct for screen readers and Google.
  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang: writeLang }}>{children}</LanguageContext.Provider>
}

/** Current language + a function to change it. */
export function useLanguage() {
  return React.useContext(LanguageContext)
}

// --- Helpers for content files ---

/**
 * Wrap every content file's export in this.
 * TypeScript then shows an error if `id` is missing something that `en` has (or vice versa).
 */
export function defineContent<T>(content: { en: T; id: NoInfer<T> }) {
  return content
}

/** Pick the current language out of a content file: `const t = useContent(profile)` → `t.title` */
export function useContent<T>(content: { en: T; id: T }): T {
  return content[useLanguage().lang]
}

/**
 * Renders simple formatting inside translated strings:
 *   "\n"        → line break
 *   "*words*"   → italic accent (the coloured <em> used in headings)
 * Example: "Places to\n*slow down.*"
 */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {line.split(/\*([^*]+)\*/).map((part, j) => (j % 2 ? <em key={j}>{part}</em> : part))}
        </React.Fragment>
      ))}
    </>
  )
}
