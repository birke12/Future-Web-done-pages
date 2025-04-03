import React from "react";
import { HashLink } from "react-router-hash-link"; // ✅ Correct import
import styles from "./articleSection.module.css";

// Static data
const articles = [
  {
    "id": 1,
    "title": "AI-Drevet Webudvikling",
    "description": "Udforsk hvordan kunstig intelligens transformerer webudvikling ved at drive automatisering og forbedre brugeroplevelser.",
    "image": "./assets/images/aiPower1.jpg",
    "link": "./article#aidrevet"
  },
  {
    "id": 2,
    "title": "Optimering af Stemmesøgning",
    "description": "Lær om de nyeste fremskridt inden for optimering af stemmesøgning, der forbedrer søgepræcisionen og øger brugerengagement.",
    "image": "./assets/images/webVoice.jpg",
    "link": "/article#stemmesogning"
  },
  {
    "id": 3,
    "title": "Augmented Reality (AR) og Virtual Reality (VR)",
    "description": "Oplev hvordan AR og VR påvirker webudvikling og tilbyder immersive oplevelser, der engagerer brugere på nye måder.",
    "image": "./assets/images/arvr1.jpg",
    "link": "./article#arvr"
  },
  {
    "id": 4,
    "title": "Internet of Things (IoT) og Webudvikling",
    "description": "Udforsk hvordan Internet of Things (IoT) former fremtiden for webudvikling ved at forbinde enheder og forbedre funktionalitet.",
    "image": "./assets/images/iot.jpg",
    "link": "./article#iot"
  },
  {
    "id": 5,
    "title": "Sikkerhed og Blockchain i Webudvikling",
    "description": "Dyk ned i blockchain-teknologiens rolle i web-sikkerhed, som tilbyder decentrale løsninger til at beskytte data og transaktioner.",
    "image": "./assets/images/blockchain.jpg",
    "link": "./article#blockchain"
  },
  {
    "id": 6,
    "title": "Bæredygtighed i Webudvikling",
    "description": "Forstå hvordan bæredygtighed påvirker webudvikling med fokus på miljøvenlige løsninger og grøn teknologi.",
    "image": "./assets/images/websus.jpg",
    "link": "./article#bd"
  }
];

const ArticleSection = () => {
  return (
    <section className={styles.articleGridContainer}>
      {/* Article title section */}
      <div className={`${styles.titleWithLines} ${styles.articleTitle}`}>
        <span className={styles.line}></span>
        <h2>Mest læste artikler</h2>
        <span className={styles.line}></span>
      </div>

      {/* Article grid container */}
      <div className={styles.articleGrid} id="artikler">
        {articles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <HashLink to={article.link}>
              <div className={styles.imageWrapper}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.articleImage}
                />
              </div>
            </HashLink>
            <div className={styles.articleContent}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
