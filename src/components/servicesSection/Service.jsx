import React from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import glassemoji from "../../image/glassesimoji.png";
import heartemoji from "../../image/heartemoji.png";
import humblemoji from "../../image/humble.png";

const Service = () => {
  return (
    <section id='service' className="lg:flex justify-between items-start text-center md:text-start lg:mb-80 px-10">
      <div className="right-section md:w-96 pl-10">
        <h2>
          {" "}
          My Awesome <br /> <span className="text-main"> Services </span>{" "}
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit
          ea corrupti autem sunt excepturi tenetur officia iusto exercitationem
          ad.
        </p>
        <button className="btn">Download CV</button>
      </div>

      <div className="relative lg:flex block">
        <div className="lg:absolute top-[4rem] right-[25rem]">
          <ServiceCard
            emoji={heartemoji}
            title={"Developer"}
            skill={["HTML, CSS, JavaScript, React"]}
            button={"Learn more"}
            className="serviceCard"
          />
        </div>

        <div className="lg:absolute top-[16rem] right-[5rem]">
          <ServiceCard
            emoji={humblemoji}
            title={"Developer"}
            skill={["Figma, Sketch, Adobe, Adobe xd"]}
            button={"Learn more"}
            className="serviceCard"
          />
        </div>

        <div className="lg:absolute top-[-5rem] right-[-2rem]">
          <ServiceCard
            emoji={glassemoji}
            title={"Developer"}
            skill={["HTML, CSS, JavaScript, React"]}
            button={"Learn more"}
            className="serviceCard"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
