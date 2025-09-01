import styles from "../styles/post-categories.module.css";
import Link from "next/link";

type Category = {
  name: string;
  slug: string;
};

type PostCategoriesProps = {
  categories: Category[];
};

export default function PostCategories({ categories }: PostCategoriesProps) {
  return (
    <ul className={styles.list}>
      {categories.map(({ name, slug }) => (
        <li key={slug}>
          <Link href={`/blog/category/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
