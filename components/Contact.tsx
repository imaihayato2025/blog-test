import Social from "../components/Social";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address>cube@web.mail/addres</address>
    </div>
  );
}
