import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link"; // ✅ Correct import
import styles from "./articleSection.module.css";

const ArticleSection = ({ jsonPath }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/data/webarticles.json") // Load JSON dynamically based on prop
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error loading articles:", error));
  }, [jsonPath]); // Re-fetch if the path changes

  return (
    <section className={styles.articleGridContainer}>
      {/* Article title section */}
      <div className={`${styles.titleWithLines} ${styles.articleTitle}`}>
        <span className={styles.line}></span>
        <h2>Mest læste artikler</h2>
        <span className={styles.line}></span>
      </div>
      {/* <div className={styles.articleTitle}>
        <h2>Bliv klogere på fremtiden inden for webudvikling</h2>
      </div> */}

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
