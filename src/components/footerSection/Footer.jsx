import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <a href="https://github.com/paulobuba" target="__blank" className="mt-16 mb-5 text-white ">
        {" "}
        paulobuba26@gmail.com
      </a>

      <div className="flex justify-center items-center">
          <span className="footerIcon">
          <a href="https://github.com/paulobuba" target='__black'> <FaGithub />{" "} </a>
          </span>


          <span className="footerIcon">
          <a href="https://linkedin.com/in/paul-obuba" target='__black'> <FaLinkedinIn />{" "} </a>
          </span>


          <span className="footerIcon">
           <a href="https://twitter.com/obubapaul" target='__black'> <FaTwitter />{" "} </a> 
          </span>

      </div>
    </section>
  );
};

export default Footer;
