import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { HashLink } from "react-router-hash-link"; // Import for linking

const Slider = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/data/webarticles.json") // Load data dynamically
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error loading articles:", error));
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === articles.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [articles.length]);

  if (articles.length === 0) {
    return <p>Loading...</p>; // Avoids errors while data loads
  }

  return (
    <div className={styles.slider} id="slider">
      <div className={styles.slide}>
        <HashLink to={articles[currentIndex].link}>
          <img
            src={articles[currentIndex].image}
            alt={articles[currentIndex].title}
            className={styles.slideImage}
          />
        </HashLink>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{articles[currentIndex].title}</h2>
          <p className={styles.description}>
            {articles[currentIndex].description}
          </p>
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.prevButton} onClick={handlePrev}>
          ❮
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
