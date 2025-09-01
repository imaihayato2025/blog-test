// src/lib/microcms.ts
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.API_KEY!,
});

export async function getPostBySlug(slug: string) {
  try {
    // slug に一致する記事を1件取得
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });

    if (!post.contents[0]) return null;

    const result = post.contents[0];

    // categories を整形（id を slug に）
    const categories =
      result.categories?.map((cat: any) => ({
        name: cat.name,
        slug: cat.id,
      })) || [];

    // 整形した categories を記事データに追加
    return {
      ...result,
      categories,
    };
  } catch (err) {
    console.error("~~ getPostBySlug error ~~", err);
  }
}
