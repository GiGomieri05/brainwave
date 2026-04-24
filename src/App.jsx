import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import ComoFunciona from "./components/ComoFunciona";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Solucao from "./components/Solucao";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Problema />
        <Solucao />
        <ComoFunciona />
        <Benefits />
        <CTAFinal />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
