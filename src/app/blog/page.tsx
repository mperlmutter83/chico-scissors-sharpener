import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, toRenderPost } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips and guides on scissor and shear care, sharpening, and tool maintenance from Chico Scissor Sharpener.",
};

export const revalidate = 60;

const SITE_DOMAIN = "chicoscissorsharpener.com";

export default async function BlogPage() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  const posts = apiPosts.map(toRenderPost);

  return (
    <>
      <section className="bg-ink text-white py-16 px-6 text-center">
        <h1 className="font-serif text-3xl md:text-5xl mb-4">Blog</h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Scissor care tips, sharpening know-how, and tool maintenance guides
          for barbers and salon professionals.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-serif text-2xl mb-3">No Results Found</h2>
              <p className="text-neutral-600 max-w-md mx-auto">
                The page you requested could not be found. Try refining your
                search, or call us at{" "}
                <a
                  href="tel:+15304441534"
                  className="text-teal-brand font-semibold"
                >
                  (530) 444-1534
                </a>{" "}
                with any questions.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-200"
                >
                  {post.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <p className="text-xs text-teal-brand uppercase tracking-wider mb-2">
                      {post.category}
                    </p>
                    <h2 className="font-serif text-xl mb-2">{post.title}</h2>
                    <p className="text-sm text-neutral-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-neutral-400 mt-4">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
