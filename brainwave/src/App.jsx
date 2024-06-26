import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Collab from "./components/Collab";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Collab />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
