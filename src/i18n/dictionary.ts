/** Languages of the project write-ups. The home page is English only. */
export const languages = ["en", "id"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "en";

/** Interface text on the write-up pages (the articles themselves are MDX files per language). */
export const dictionary = {
  en: {
    backToProjects: "Back to projects",
    visitLiveSite: "Visit live site",
    preview: "preview",
    language: "Language",
    locale: "en-US",
    ogLocale: "en_US",
  },
  id: {
    backToProjects: "Kembali ke proyek",
    visitLiveSite: "Kunjungi situs",
    preview: "pratinjau",
    language: "Bahasa",
    locale: "id-ID",
    ogLocale: "id_ID",
  },
} satisfies Record<Lang, Record<string, string>>;

/** English has no prefix: /projects/x, /id/projects/x. */
export function projectPath(slug: string, lang: Lang) {
  return lang === defaultLang ? `/projects/${slug}` : `/${lang}/projects/${slug}`;
}
