import { useState } from "react";
import "./App.css";
import About from "./components/aboutSection/About";
import Contact from "./components/contactSection/Contact";
import Footer from "./components/footerSection/Footer";
import Hero from "./components/heroSection/Hero";
import Navbar from "./components/navbarSection/Navbar";
import Project from "./components/projectsSection/Project";
import Service from "./components/servicesSection/Service";


function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={theme && " bg-slate-900 text-white"}>
      <div className="App relative">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Service />
        <About />
        <Project />
        {/* <Testimoy /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
