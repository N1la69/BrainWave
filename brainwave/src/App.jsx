import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Collab from "./components/Collab";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
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
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
