import React, { useEffect } from "react";
import "./Hero.css";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import heroImage from "../../image/heroImage.jpg";
import HeroCard from "./HeroCard";
import thumbUp from "../../image/thumbup.png";
import crown from "../../image/crown.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="hero"
      className="text-center md:text-start md:flex justify-between items-center md:relative"
    >
      <div className="right-section md:w-96">
        <h1 className="font-bold text-6xl mb-5">
          Hi There,
          <br /> <span className="text-main"> I Am Paul </span>
        </h1>
        <p className="mb-5">
          I am a creative Front-End Developer that helps designers, small
          agencies and businesses bring their ideas to life. I turn your
          requirements into outstanding, responsive and scalable websites - on
          time and on budget.
        </p>
        <button className="btn mb-20">Hier me</button>
        <div className="hidden md:flex justify-start items-center">
          <span className="heroIcon">
            <FaGithub />{" "}
          </span>
          <span className="heroIcon">
            <FaLinkedinIn />{" "}
          </span>
          <span className="heroIcon">
            <FaTwitter />{" "}
          </span>
        </div>
      </div>

      <div className="relative">
        <img
          src={heroImage}
          alt=""
          className="m-auto md:ml-10 w-96 h-96 mb-10"
        />
        <div
          className=" text-gray-700 font-mono font-bold absolute top-[-2rem] right-[-2rem] md:top-[-1rem] md:right-[-3]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {" "}
          <HeroCard image={crown} text1={"Web"} text2={"Developer"} />{" "}
        </div>
        <div
          className="absolute text-gray-700 font-mono font-bold bottom-[6rem] left-[1rem] md:left-0 md:bottom-5"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          {" "}
          <HeroCard image={thumbUp} text1={"Problem"} text2={"Solver"} />{" "}
        </div>

        <div className="md:hidden flex justify-start items-center text-center">
          <span className="heroIcon">
            <FaGithub />{" "}
          </span>
          <span className="heroIcon">
            <FaLinkedinIn />{" "}
          </span>
          <span className="heroIcon">
            <FaTwitter />{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
