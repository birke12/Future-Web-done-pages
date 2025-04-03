import ArticleSection from "../components/articleSection/ArticleSection.jsx";
/* import Introduktion from "../components/introduction/Introduction"; */
import PageHeader from "../components/pageHeader/PageHeader";
import HoloImage from "../../assets/images/Holo3.png";  // Import image

import Slider from "../components/slider/Slider.jsx";

import Introduction from "../components/introduction/Introduction.jsx";




function Home() {
  return (
    <>
      <PageHeader
        headerType="home"
        title="Fremtidens Web Udvikling"
        /* headerImg={headerImg} */
      />
      <HologramImage src={HoloImage} />  {/* Use the imported image */}
      <Introduction />
      <Slider />
      <ArticleSection />
    </>
  );
}

export default Home;
