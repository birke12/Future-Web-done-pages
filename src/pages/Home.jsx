import ArticleSection from "../components/articleSection/ArticleSection.jsx";
import PageHeader from "../components/pageHeader/PageHeader";
import HologramImage from "../components/hologram/Hologram.jsx";


// Import image from the src folder
import HoloImage from "../assets/images/Holo3.png";

import Slider from "../components/slider/Slider.jsx";
import Introduction from "../components/introduction/Introduction.jsx";

function Home() {
  return (
    <>
      <PageHeader
        headerType="home"
        title="Fremtidens Web Udvikling"
      />
      {/* Use the imported image */}
      <HologramImage src={HoloImage} />
      <Introduction />
      <Slider />
      <ArticleSection />
    </>
  );
}

export default Home;
