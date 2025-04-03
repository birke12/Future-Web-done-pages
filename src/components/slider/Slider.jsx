import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { HashLink } from "react-router-hash-link"; // Import for linking

// Static articles data
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

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  }, []);

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
