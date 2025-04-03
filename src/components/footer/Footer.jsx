import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCommentDots,
} from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Sektion 1: Kort Info */}
      <div className={styles.footerSection}>
        <h2 className={styles.sectionHeader}>Fremtidens Web</h2>
        <p className={styles.sectionText}>
          Velkommen til Fremtidens Web – din kilde til indsigt i webudviklingens
          nyeste trends og teknologier. Vi deler inspiration, guides og analyser
          af den digitale verden, så du altid er et skridt foran. Uanset om du
          er nybegynder eller erfaren udvikler, er Fremtidens Web stedet, hvor
          vi sammen udforsker, hvordan nettet udvikler sig.
        </p>
      </div>

      {/* Sektion 2: Copyright & Juridisk Information */}
      <div className={styles.footerSection}>
        <p className={styles.sectionText}>
          © 2025 Fremtidens Web. Alle rettigheder forbeholdes. Registreret i
          Danmark, Undallslund, Skivevej 23 <br></br>CVR: 12345678
        </p>
      </div>

      {/* Sektion 3: Sociale Medier & Chat */}
      <div className={styles.footerSection}>
        {/* Følg Os Sektion */}
        <h3 className={styles.followUsHeader}>Følg os</h3>

        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={styles.icon} />
          </a>
        </div>

        <div className={styles.chatSection}>
          <p className={styles.sectionText}>Chat med os</p>
          <FaCommentDots className={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
