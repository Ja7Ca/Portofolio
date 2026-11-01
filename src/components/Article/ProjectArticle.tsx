import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TechBadges from "@/components/TechBadges";
import FooterComponent from "@/components/Footer";
import { getProject, projectsWithDetail } from "@/data/projects";
import {
  defaultLang,
  dictionary,
  languages,
  projectPath,
  type Lang,
} from "@/i18n/dictionary";

/** For generateStaticParams in each language's route. */
export function projectSlugs() {
  return projectsWithDetail.map(({ slug }) => ({ slug }));
}

export function projectMetadata(slug: string, lang: Lang): Metadata {
  const project = getProject(slug, lang);
  if (!project) return {};

  const url = projectPath(slug, lang);
  // Link previews can't show SVG, so placeholders fall back to the profile photo.
  const image = project.image.endsWith(".svg") ? "/profile.png" : project.image;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(languages.map((l) => [l, projectPath(slug, l)])),
        "x-default": projectPath(slug, defaultLang),
      },
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      type: "article",
      siteName: "Jarot Setiawan Portfolio",
      locale: dictionary[lang].ogLocale,
      alternateLocale: languages
        .filter((l) => l !== lang)
        .map((l) => dictionary[l].ogLocale),
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [image],
      creator: "@jarotstwn",
    },
  };
}

function formatDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(dictionary[lang].locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}-01T00:00:00Z`));
}

interface ProjectArticleProps {
  slug: string;
  lang: Lang;
}

export default async function ProjectArticle({ slug, lang }: ProjectArticleProps) {
  const project = getProject(slug, lang);
  if (!project) notFound();

  const t = dictionary[lang];
  const { default: Article } = await import(
    `@/content/projects/${slug}/${lang}.mdx`
  );

  return (
    // The root layout's <html lang> is "en"; this marks the Indonesian pages.
    <div lang={lang} className="overflow-x-hidden min-h-screen">
      <header className="border-b border-[#4D4D4D] mx-5">
        <div className="container flex items-center justify-between gap-4 py-5 md:py-10">
          <Link
            href="/#project"
            className="font-semibold text-[#D1D1D1] hover:text-white transition-colors"
          >
            <span aria-hidden="true">←</span> {t.backToProjects}
          </Link>
          <div className="flex items-center gap-4">
            <nav
              aria-label={t.language}
              className="flex bg-[#323443] p-1 rounded-lg text-xs font-semibold"
            >
              {languages.map((l) => (
                <Link
                  key={l}
                  href={projectPath(slug, l)}
                  hrefLang={l}
                  aria-current={l === lang ? "page" : undefined}
                  className={`px-2.5 py-1.5 rounded-md uppercase transition-colors ${
                    l === lang
                      ? "bg-[#3BF686] text-[#272727]"
                      : "text-[#D6D6D6] hover:text-white"
                  }`}
                >
                  {l}
                </Link>
              ))}
            </nav>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/ghost-logo.jpg"
                alt="Jarotstwn Logo"
                width={80}
                height={80}
                className="w-9 h-9 rounded-full object-cover border border-[#3BF686]/60 shadow-sm"
              />
              <span className="hidden sm:inline text-xl font-semibold text-white">
                Jarotstwn
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container px-5">
        <article className="max-w-3xl mx-auto py-12 md:py-16">
          <p className="font-bold text-lg text-[#3BF686] mb-2">{project.tag}</p>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-5">
            {project.title}
          </h1>
          <p className="text-[#D4D4D4] text-lg md:text-xl leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {project.date && (
              <span className="text-sm text-[#A0A0A0]">
                {formatDate(project.date, lang)}
              </span>
            )}
            {project.status && (
              <span className="px-3 py-1 bg-[#323443] text-[#3BF686] text-xs font-semibold rounded-full border border-[#3BF686]/20">
                {project.status}
              </span>
            )}
          </div>

          <TechBadges icon={project.icon ?? []} className="mb-8" />

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#3BF686] text-[#272727] hover:opacity-90 transition-opacity"
            >
              {t.visitLiveSite} <span aria-hidden="true">↗</span>
            </Link>
          )}

          <div className="bg-[#323443] rounded-xl px-5 md:px-12 pt-8 md:pt-10 mt-10 mb-12 overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} ${t.preview}`}
              width={902}
              height={594}
              priority
              className="rounded-t-lg w-full h-auto"
            />
          </div>

          <div className="prose prose-invert md:prose-lg max-w-none prose-headings:scroll-mt-8 prose-h2:mt-14">
            <Article />
          </div>
        </article>
      </main>

      <FooterComponent />
    </div>
  );
}
