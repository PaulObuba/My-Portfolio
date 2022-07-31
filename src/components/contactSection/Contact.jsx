import React, {useEffect} from "react";
import "./Contact.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id='contact' className="text-center md:text-start md:flex justify-between items-start gap-14">
      <div>
        <h2 className="mb-20">
          Let's get in touch. <br /> <span className="text-main">Send me a Message</span>
        </h2>
      </div>

      <div className="text-black mx-auto">
        <form className="flex flex-col items-center m-auto w-60 md:w-80">
          <div>
            <input type="text" name="name" id="name" placeholder="Name" data-aos="zoom-out-up" data-aos-duration="1000" />
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="Email" data-aos="zoom-out-up" data-aos-duration="1000" />
          </div>
          <div>
            <textarea placeholder="Message" className="" data-aos="zoom-out-up" data-aos-duration="1000"></textarea>
          </div>
          <button className="btn my-4" data-aos="zoom-out-up" data-aos-duration="1000">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
