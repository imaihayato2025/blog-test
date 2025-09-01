import Image from "next/image";
import { getPostBySlug } from "../../lib/microcms";
import Container from "../../../../components/Container";
import PostHeader from "../../../../components/PostHeader";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../../../../components/TwoColumn";
import PostBody from "../../../../components/PostBody";
import ConvertBody from "../../../../components/ConvertBody";
import PostCategories from "../../../../components/PostCategories";

export default async function Schedule() {
  const slug = "schedule";
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  const categories = post.category
    ? [{ name: post.category.name, slug: post.category.id }]
    : [];

  // post から eyecatch を取り出す（なければデフォルト画像にする）
  const eyecatch = post.eyecatch ?? {
    url: "/images/default.jpg",
    width: 1920,
    height: 1080,
  };

  return (
    <Container>
      <article>
        <PostHeader
          title={post.title}
          subtitle="blog Article"
          publishDate={post.publishedAt} // ← publishedAtを渡す
        />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px,100vw"
            priority
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={post.content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <TwoColumnSidebar>
              {post.categories && <PostCategories categories={categories} />}
            </TwoColumnSidebar>
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
}
