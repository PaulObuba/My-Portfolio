import React, {useEffect} from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import glassemoji from "../../image/glassesimoji.png";
import heartemoji from "../../image/heartemoji.png";
import humblemoji from "../../image/humble.png";
import Resume from '../../image/PAUL-CV.pdf';

import AOS from "aos";
import "aos/dist/aos.css";


const Service = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id='service' className="lg:flex justify-between items-start text-center md:text-start lg:mb-80 px-10">
      <div className="right-section md:w-96 pl-10">
        <h2 className="md:text-5xl text-4xl lg:mb-5">
          {" "}
          My Awesome <br /> <span className="text-main text"> Services </span>{" "}
        </h2>
        <p className="mb-10 lg:mb-20 md:text-2xl">
        I like to code things from scratch, and enjoy bringing ideas to life in the browser. I speak languages and use framework like:
        </p>
        <a href={Resume} download className="btn">Download CV</a>
      </div>

      <div className="relative lg:flex block">
        <div className="lg:absolute top-[4rem] right-[25rem]" data-aos="fade-right" data-aos-duration="1000">
          <ServiceCard
            emoji={heartemoji}
            title={"Developer"}
            skill={"HTML, CSS,Tailwind CSS, JavaScript, React, Next Js, Rest API"}
            button={"Learn more"}
            className="serviceCard"
          />
        </div>

        <div className="lg:absolute top-[16rem] right-[6rem]" data-aos="fade-up" data-aos-duration="1000">
        <ServiceCard
            emoji={glassemoji}
            title={"Soft Skills"}
            skill={"Problem solver, Team Player, Growth Mindset, Work Ethic"}
            button={"Learn more"}
            className="serviceCard"
          />
        </div>

        <div className="lg:absolute top-[-5rem] right-0" data-aos="fade-down" data-aos-duration="1000">
        <ServiceCard
            emoji={humblemoji}
            title={"UI/UX"}
            skill={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
            button={"Learn more"}
            className="serviceCard"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
