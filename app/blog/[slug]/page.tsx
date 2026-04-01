import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
import { sourceSans } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/common/Footer";
import BlogHero from "@/fragments/blog/BlogHero";

export const revalidate = 3600;

interface StaticParam {
  slug: string;
}

interface Post {
  slug: string;
}
export async function generateStaticParams() {
  if (!process.env.WORDPRESS_GRAPHQL_URL) return [];
  const posts = await getAllPosts();
  return posts.map((post: Post): StaticParam => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post.seo?.title ?? post.title,
    description: post.seo?.metaDesc ?? "",
    openGraph: {
      title: post.seo?.opengraphTitle ?? post.title,
      description: post.seo?.opengraphDescription ?? post.seo?.metaDesc ?? "",
      images: post.featuredImage?.node?.sourceUrl
        ? [post.featuredImage.node.sourceUrl]
        : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-[#FBF7F4] min-h-screen">
      <BlogHero>
        <p>Blog</p>
      </BlogHero>
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className={`${sourceSans.className} inline-flex items-center gap-1.5 text-sm text-[#262A6F] hover:text-[#262A6F]/80 mb-8 transition-colors`}
        >
          <ChevronLeft className="w-4 h-4" />
          Back to News & Insights
        </Link>

        {/* Featured image */}
        {post.featuredImage?.node && (
          <div className="relative h-64 lg:h-96 w-full rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText ?? post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Date */}
        <p className={`${sourceSans.className} text-sm text-[#6A7282] mb-3`}>
          {post.date.slice(0, 10)}
        </p>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-10 leading-tight">
          {post.title}
        </h1>

        {/* Content from WordPress */}
        <div
          className={`${sourceSans.className} prose prose-lg max-w-none text-[#4A5565]
            prose-headings:text-[#101828] prose-headings:font-bold
            prose-a:text-[#262A6F] prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-2xl
          `}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Schema from Rank Math */}
        {post.seo?.schema?.raw && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: post.seo.schema.raw }}
          />
        )}
      </article>

      <Footer />
    </div>
  );
}
