import Button from "../button/Button";
import styles from "./pageHeader.module.css";
import { ReactTyped } from "react-typed";
import web1Video from "../../assets/video/web1.mp4";
import web3Video from "../../assets/video/web3.mp4";



const PageHeader = ({ title, subTitle, headerType }) => {
  return (
    <header
      className={
        headerType === "home"
          ? `${styles.homePageHeader}`
          : headerType === "article"
          ? `${styles.homePageHeader}`
          : ""
      }
    >
      {/* Video Background for Home Header */}
      {headerType === "home" && (
        <>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source src={web1Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text container with title and animated text */}
          <div className={styles.textContainer}>
            <div className={styles.animatedTyping}>
              <ReactTyped
                strings={["Fremtiden for Webudvikling"]}
                typeSpeed={120}
                backSpeed={150}
                backDelay={4100}
                loop
              />
            </div>
          </div>

          {/* Fixed button positioned below */}
          <div className={styles.buttonContainer}>
            <Button />
          </div>
        </>
      )}
      {headerType === "article" && (
        <>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source src={web3Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text container with title and animated text */}
          <div className={styles.textContainer}>
            <div className={styles.animatedTyping}>
              <ReactTyped
                strings={["Velkommen til Fremtiden"]}
                typeSpeed={120}
                backSpeed={150}
                backDelay={4100}
                loop
              />
            </div>
          </div>

          {/* Fixed button positioned below */}
          
        </>
      )}

      {/* For other header types */}
      {headerType !== "home" && (
        <div className={styles.headerMainContainer}>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subTitle}>{subTitle}</h3>
          </div>
        </div>
      )}
      {headerType !== "article" && (
        <div className={styles.headerMainContainer}>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subTitle}>{subTitle}</h3>
          </div>
        </div>
      )}
    </header>
  );
};

export default PageHeader;
