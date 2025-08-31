import styles from "../styles/social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <ul className={styles.list}>
      <li className={styles.list}>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">twitter</span>
        </a>
      </li>
      <li className={styles.list}>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">facebook</span>
        </a>
      </li>
      <li className={styles.list}>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">github</span>
        </a>
      </li>
    </ul>
  );
}
