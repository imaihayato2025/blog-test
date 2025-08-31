import Image from "next/image";
import { getPostBySlug } from "../../lib/microcms";
import Container from "../../../../components/Container";
import PostHeader from "../../../../components/PostHeader";

export default async function Schedule() {
  const slug = "schedule";
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

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
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Container>
  );
}
