import "./App.css";
import CompanyLogo from "./components/CompanyLogo";
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
    </>
  );
}

export default App;
