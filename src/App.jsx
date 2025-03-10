import "./App.css";
import CompanyLogo from "./components/CompanyLogo";
import CustomerSection from "./components/CustomerSection";
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
      <CustomerSection />
    </>
  );
}

export default App;
