// src/lib/microcms.ts
import { createClient } from "microcms-js-sdk"; // SDK から直接読み込む

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.API_KEY!,
});

export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    const posts = await client.get({
      endpoint: "blogs",
      queries: { limit: 10 },
    });

    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostBySlug~~", err);
    console.log(err);
  }
}
