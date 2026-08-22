import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, toRenderPost, contentToHtml } from "@/lib/api";

const SITE_DOMAIN = "chicoscissorsharpener.com";

export const revalidate = 60;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(SITE_DOMAIN, slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt || undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const apiPost = await getPost(SITE_DOMAIN, slug);
  if (!apiPost) notFound();
  const post = toRenderPost(apiPost);

  return (
    <article className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-teal-brand text-sm font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>
        <p className="text-xs text-teal-brand uppercase tracking-wider mt-6 mb-2">
          {post.category}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl mb-3">{post.title}</h1>
        <p className="text-sm text-neutral-500 mb-8">{post.date}</p>
        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-xl mb-8 object-cover max-h-96"
          />
        )}
        <div
          className="prose prose-neutral max-w-none [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1"
          dangerouslySetInnerHTML={{ __html: contentToHtml(post.content) }}
        />
        <div className="mt-12 bg-ink text-white rounded-xl p-8 text-center">
          <h2 className="font-serif text-2xl mb-3">
            Ready for Sharper Tools?
          </h2>
          <p className="text-neutral-300 mb-6">
            Book your sharpening appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-mint hover:bg-mint-dark text-ink font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Schedule Now
            </Link>
            <a
              href="tel:+15304441534"
              className="border border-white hover:bg-white hover:text-ink font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Call (530) 444-1534
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
