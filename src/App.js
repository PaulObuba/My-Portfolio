import { useState } from "react";
import "./App.css";
import About from "./components/aboutSection/About";
import Contact from "./components/contactSection/Contact";
import Footer from "./components/footerSection/Footer";
import Hero from "./components/heroSection/Hero";
import Navbar from "./components/navbarSection/Navbar";
import Service from "./components/servicesSection/Service";
import Testimoy from "./components/testimonySection/Testimoy";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={theme && " bg-slate-900 text-white"}>
      <div className="App relative">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Service />
        <About />
        <Testimoy />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
