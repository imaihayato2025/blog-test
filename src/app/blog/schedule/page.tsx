import { getPostBySlug } from "../../lib/microcms";
import Container from "../../../../components/Container";

export default async function Schedule() {
  // slug 固定で記事を取得
  const slug = "schedule";
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <Container>
      <h1>{post.title}</h1>
      <p>公開日: {post.publishDate}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      {/* eyecatch や categories が必要ならここで表示 */}
    </Container>
  );
}
