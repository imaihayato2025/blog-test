import { ReactNode } from "react";
import styles from "../styles/post-body.module.css";

type Props = {
  children: ReactNode;
};

export default function PostBody({ children }: Props) {
  return <div className={styles.stack}>{children}</div>;
}
