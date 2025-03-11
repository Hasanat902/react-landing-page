import "./App.css";
import About from "./components/About";
import CompanyLogo from "./components/CompanyLogo";
import CustomerSection from "./components/CustomerSection";
import DesignSection from "./components/DesignSection";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TryNow from "./components/TryNow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <Features />
      <DesignSection />
      <CustomerSection />
      <About />
      <TryNow />
    </>
  );
}

export default App;
