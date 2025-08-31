import ConvertDate from "./ConvertDate";
import styles from "../styles/post-header.module.css";

type PostHeaderProps = {
  title: string;
  subtitle: string;
  publishDate: string; // 省略可
};

export default function PostHeader({
  title,
  subtitle,
  publishDate = "",
}: PostHeaderProps) {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publishDate && (
        <div className={styles.publishedAt}>
          <ConvertDate dateISO={publishDate} />
        </div>
      )}
    </div>
  );
}
