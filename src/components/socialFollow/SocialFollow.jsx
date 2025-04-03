import React from "react";
import styles from "./SocialFollow.module.css"; // Import CSS module
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialFollow = () => {
  return (
    <div className={styles.socialFollowContainer}>
      <h3 className={styles.socialTitle}>Follow us on our socials</h3>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className={styles.socialIcon} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.socialIcon} />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default SocialFollow;
