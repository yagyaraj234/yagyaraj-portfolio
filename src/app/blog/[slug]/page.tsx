import { blogData } from "./data";
import { USER } from "@/data/user.data";
import { getPostMetadata } from "@/lib/mdx-utils";
import { Metadata } from "next";
import {
  PostTitle,
  PostDescription,
  PostUpdatedText,
} from "@/app/components/Post";
import { Callout } from "@/app/components/mdx/callout";
import { Aside } from "@/app/components/mdx/aside";
import { Annotation } from "@/app/components/mdx/annotation";
import { Columns, ColumnRight } from "@/app/components/mdx/columns";
import { Note, InlineNote } from "@/app/components/mdx/note";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postMetadata = getPostMetadata(slug);

  if (!postMetadata) {
    return {
      title: "Post not found",
    };
  }

  const {
    title,
    summary,
    author = "Yagyaraj",
    tags = [],
    ogImage = "",
  } = postMetadata;
  const ogImageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${USER.website}${ogImage}`
    : `${USER.website}/api/og/blog/${slug}`;

  const postMetadataFull = getPostMetadata(slug);
  const lastUpdated = postMetadataFull?.lastUpdated;

  return {
    title: `${title} | Yagyaraj`,
    description: summary || `${title} - Blog post by ${author}`,
    authors: [{ name: author }],
    keywords: tags,
    openGraph: {
      title: `${title} | Yagyaraj`,
      description: summary || `${title} - Blog post by ${author}`,
      url: `/blog/${slug}`,
      siteName: "Yagyaraj",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
      ...(postMetadata.date && { publishedTime: postMetadata.date }),
      ...(lastUpdated && { modifiedTime: lastUpdated }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Yagyaraj`,
      description: summary || `${title} - Blog post by ${author}`,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${USER.website}/blog/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  const postMetadata = getPostMetadata(slug);
  const publishDate = postMetadata?.date
    ? new Date(postMetadata.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date().toLocaleDateString();

  const lastUpdatedDate = postMetadata?.lastUpdated
    ? new Date(postMetadata.lastUpdated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // Article JSON-LD structured data for SEO & AEO
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: postMetadata?.title,
      description: postMetadata?.summary,
      author: {
        "@type": "Person",
        name: postMetadata?.author || "Yagyaraj Lodhi",
        url: USER.website,
      },
      publisher: {
        "@type": "Person",
        name: "Yagyaraj Lodhi",
        url: USER.website,
      },
      url: `${USER.website}/blog/${slug}`,
      ...(postMetadata?.date && { datePublished: postMetadata.date }),
      ...(postMetadata?.lastUpdated && {
        dateModified: postMetadata.lastUpdated,
      }),
      ...(postMetadata?.ogImage && { image: postMetadata.ogImage }),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${USER.website}/blog/${slug}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: USER.website,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${USER.website}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: postMetadata?.title,
        },
      ],
    },
  ];

  return (
    <div className="font-sans mt-8 ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PostTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 max-sm:text-4xl"
      >
        {postMetadata?.title}
      </PostTitle>

      <div className="flex flex-col text-sm font-normal text-zinc-400 mb-12">
        <PostUpdatedText>Published on {publishDate}</PostUpdatedText>
      </div>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <Post
          components={{
            Callout,
            Aside,
            Annotation,
            Columns,
            ColumnRight,
            Note,
            InlineNote,
          }}
        />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return blogData.map((slug) => ({ slug }));
}

export const dynamicParams = false;
