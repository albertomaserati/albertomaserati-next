import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GradientBackground from '@/components/GradientBackground';
import GalleryLightbox from '@/components/GalleryLightbox';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { getProjectBySlug, projects, type Locale } from '@/data/projects';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {};
  }

  const typedLocale = locale as Locale;
  const title = project.title[typedLocale] ?? project.title.en;
  const description = project.description[typedLocale] ?? project.description.en;

  return {
    title: `${title} | Alberto Maserati`,
    description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const t = await getTranslations('ProjectPage');
  const title = project.title[typedLocale] ?? project.title.en;
  const description = project.description[typedLocale] ?? project.description.en;
  const longDescription =
    project.longDescription?.[typedLocale] ??
    project.longDescription?.en ??
    description;
  const techStack = project.techStack ?? [];
  const gallery = project.gallery ?? [];

  return (
    <div className="min-h-screen">
      <GradientBackground />
      <Header />

      <main className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#portfolio"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              {t('backToProjects')}
            </Link>
          </div>

          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                {t('caseStudyLabel')}
              </p>
              <h1 className="text-3xl md:text-5xl font-josefin font-bold text-foreground">
                {title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {longDescription}
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={title}
                  fill
                  className={project.imageFill ? 'object-cover' : 'object-contain p-6'}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary opacity-80 flex items-center justify-center">
                  <span className="text-white font-josefin text-2xl font-semibold text-center px-6">
                    {title}
                  </span>
                </div>
              )}
            </div>
          </section>

          {techStack.length > 0 && (
            <section className="flex flex-wrap items-center gap-3">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                {t('techStack')}:
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {gallery.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-josefin font-semibold text-foreground">
                {t('gallery')}
              </h2>
              <GalleryLightbox images={gallery} title={title} />
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
