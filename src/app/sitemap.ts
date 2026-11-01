import { MetadataRoute } from "next";
import { projectsWithDetail } from "@/data/projects";
import { languages, projectPath } from "@/i18n/dictionary";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ja7ca.github.io";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...projectsWithDetail.flatMap(({ slug }) =>
      languages.map((lang) => ({
        url: `${baseUrl}${projectPath(slug, lang)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
    ),
  ];
}
