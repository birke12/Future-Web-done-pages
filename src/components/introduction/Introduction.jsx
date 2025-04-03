import Button from "../button/Button";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <article className={styles.introductionContainer}>
      <div className={styles.innerContainer}>
        {/* Main Title */}
        <h1 className={styles.heading}>Fremtiden for Webudvikling</h1>
        {/* First section */}
        <h2 className={styles.introSubHeader}>AI-Drevet Webudvikling</h2>
        <p className={styles.text}>
          Velkommen til fremtiden for webudvikling, hvor det digitale landskab
          konstant udvikler sig og formes af nye teknologier og innovative
          tilgange. Som udviklere skaber vi ikke kun websites; vi bygger
          oplevelser, der transcenderer skærmen og giver brugerne sømløse,
          intuitive miljøer. Fremtiden er dynamisk, sammenkoblet og drevet af
          fremskridt, der vil omforme, hvordan vi interagerer med nettet.
        </p>
        {/* Second section */}
        <h2 className={styles.introSubHeader}>Optimering af Stemmesøgning</h2>
        <p className={styles.text}>
          Den næste æra af webudvikling er drevet af kunstig intelligens,
          maskinlæring og automatisering. Websites vil blive klogere og i stand
          til at forstå brugeradfærd og levere personlig indhold i realtid. Når
          AI bliver integreret i udviklingsarbejdsgange, vil vi se hurtigere
          projektgennemløb og mere intelligente brugergrænseflader, der
          tilpasser sig og udvikler sig i takt med brugernes behov.
        </p>
        {/* Third section */}
        <h2 className={styles.introSubHeader}>Augmented Reality (AR) og Virtual Reality (VR)</h2>
        <p className={styles.text}>
          Responsivt design vil fortsat være en grundpille i webudvikling, men
          vi vil se fremkomsten af endnu mere avancerede brugergrænseflader som
          augmented reality (AR) og virtual reality (VR) oplevelser. Forestil
          dig at browse en online butik, hvor du kan prøve tøj i et virtuelt
          prøverum, eller tage på en virtuel rundvisning af et rejsemål, før du
          beslutter dig for at besøge det. Mulighederne for immersive
          weboplevelser er uendelige, og vi er kun lige begyndt at udforske dem.
        </p>
        {/* Fourth section */}
        <h2 className={styles.introSubHeader}>Internet of Things (IoT) og Webudvikling</h2>
        <p className={styles.text}>
          Efterhånden som nettet bliver mere sammenkoblet, vil Internet of
          Things (IoT) spille en central rolle i, hvordan vi interagerer med
          digitalt indhold. Webudvikling vil ikke længere være begrænset til
          traditionelle enheder som stationære computere, tablets og telefoner;
          vi vil kunne interagere med nettet gennem smarte apparater, bærbare
          enheder og endda biler. Denne udvikling vil kræve, at udviklere tænker
          ud af boksen og designer websites, der sømløst forbinder sig med alle
          aspekter af vores digitale liv.
        </p>
        {/* Fifth section */}
        <h2 className={styles.introSubHeader}>Sikkerhed og Blockchain i Webudvikling</h2>
        <p className={styles.text}>
          Websikkerhed vil være vigtigere end nogensinde, efterhånden som vi
          bevæger os mod en mere sammenkoblet verden. Med stigende bekymringer
          omkring databeskyttelse og cybersikkerhed, vil fremtidens webudvikling
          fokusere på at skabe mere sikre, gennemsigtige og robuste digitale
          økosystemer. Blockchain-teknologi og decentrale applikationer vil
          blive mere mainstream og tilbyde nye måder at sikre data på og give
          brugere mere kontrol over deres digitale identiteter.
        </p>
       
        {/* Sixth section */}
        <h2 className={styles.introSubHeader}>Bæredygtighed i Webudvikling</h2>
        <p className={styles.text}>
          Bæredygtighed vil også være et nøglefokus i fremtiden for
          webudvikling. Efterhånden som verden bevæger sig mod mere miljøvenlige
          praksisser, vil udviklere blive udfordret på at skabe websites, der
          ikke kun er energieffektive, men også designet med minimal
          miljøpåvirkning. Grøn webhosting, optimerede kodningspraksisser og
          reduktion af websites' CO2-aftryk vil være essentielle elementer i
          fremtidens udviklingsstrategier.
        </p>
        {/* Seventh section */}
        <h2 className={styles.introSubHeader}>Fremtidens Weboplevelse</h2>
        <p className={styles.text}>
          Fremtiden for webudvikling er lys, fyldt med innovation, kreativitet
          og nye muligheder. Når vi bevæger os fremad, vil grænserne mellem den
          fysiske og digitale verden fortsætte med at udviskes, og udviklere vil
          spille en central rolle i at forme næste generation af online
          oplevelser. Uanset om det er gennem AI-drevne brugergrænseflader,
          immersive VR/AR-oplevelser eller bæredygtige webpraksisser, er
          fremtiden for nettet spændende, transformerende og fyldt med uendelige
          potentialer.
        </p>
        <div className={styles.buttonContainer}>
          <Button />
        </div>
      </div>
    </article>
  );
};

export default Introduction;
