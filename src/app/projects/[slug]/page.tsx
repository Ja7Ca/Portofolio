import ProjectArticle, {
  projectMetadata,
  projectSlugs,
} from "@/components/Article/ProjectArticle";

interface ProjectPageProps {
  params: { slug: string };
}

// Only the write-ups listed in src/data/projects.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs();
}

export function generateMetadata({ params }: ProjectPageProps) {
  return projectMetadata(params.slug, "en");
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectArticle slug={params.slug} lang="en" />;
}
