// src/lib/microcms.ts
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.API_KEY!,
});

// 特定 slug の記事を取得
export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });

    if (!post.contents[0]) return null;

    const result = post.contents[0];

    // categories を整形（id を slug に変換）
    const categories =
      result.categories?.map((cat: any) => ({
        name: cat.name,
        slug: cat.id,
      })) || [];

    return {
      ...result,
      categories,
    };
  } catch (err) {
    console.error("~~ getPostBySlug error ~~", err);
    return null;
  }
}

// すべての記事 slug を取得
export async function getAllSlugs(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug", // 必要なフィールドだけ
        orders: "-publishDate", // 公開日の降順
        limit,
      },
    });

    return posts.contents.map((post: any) => ({
      title: post.title,
      slug: post.slug,
    }));
  } catch (err) {
    console.error("~~ getAllSlugs error ~~", err);
    return [];
  }
}
