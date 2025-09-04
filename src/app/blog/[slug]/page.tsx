import Image from "next/image";
import { getPostBySlug, getAllSlugs } from "../../lib/microcms";
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

type Props = {
  params: { slug: string };
};

export default async function BlogPage({ params }: Props) {
  const { slug } = params; // URLのslugを取得
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  const categories = post.category
    ? [{ name: post.category.name, slug: post.category.id }]
    : [];

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
          publishDate={post.publishedAt}
        />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            width={500} // 表示したい横幅に調整
            height={200} // 縦幅も調整
            style={{ width: "100%", height: "auto" }}
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
            {post.category && <PostCategories categories={categories} />}
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
}
