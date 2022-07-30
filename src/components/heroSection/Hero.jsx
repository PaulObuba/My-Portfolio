import React from "react";
import "./Hero.css";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import heroImage from "../../image/heroImage.jpg";
import HeroCard from "./HeroCard";
import thumbUp from "../../image/thumbup.png";
import crown from "../../image/crown.png";

const Hero = () => {
  return (
    <section id="hero" className="text-center md:text-start md:flex justify-between items-center md:relative">
      <div className="right-section md:w-96">
        <h1 className="font-bold text-6xl mb-5">
          Hi There,
          <br /> <span className="text-main"> I Am Smallest </span>
        </h1>
        <p className="mb-5">
          My interests are in Front End Engineering, and I love to create
          beautiful and performant products with delightful user experiences.
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
        <img src={heroImage} alt="" className="m-auto md:ml-10 w-96 h-96 mb-10" />
        <div className=" text-gray-700 font-mono font-bold absolute top-[-2rem] right-[-2rem] md:top-[-1rem] md:right-[-3]">
          {" "}
          <HeroCard image={crown} text1={"Web"} text2={"Developer"} />{" "}
        </div>
        <div className="absolute text-gray-700 font-mono font-bold bottom-[6rem] left-[1rem] md:left-0 md:bottom-5">
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
