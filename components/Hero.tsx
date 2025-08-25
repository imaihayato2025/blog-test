import styles from "../styles/hero.module.css";
import Image from "next/image";
import cube from "../images/cube.jpg";

type HeroProps = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

export default function Hero({ title, subtitle, imageOn = false }: HeroProps) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-height: 1152px) 576px,(min-height :768px) 50vw,100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
