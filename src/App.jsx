import "./App.css";
import CompanyLogo from "./components/CompanyLogo";
import DesignSection from "./components/DesignSection";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <Features />
      <DesignSection />
    </>
  );
}

export default App;
