import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id='contact' className="text-center md:text-start md:flex justify-between items-start gap-14 mb-10 p-10">
      <div>
        <h2 className="mb-20">
          Let's get in touch. <br /> <span className="text-main">Send me a Message</span>
        </h2>
      </div>

      <div className="text-black">
        <form className="lg:mr-40 flex flex-col items-center">
          <div>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <textarea placeholder="Message"></textarea>
          </div>
          <button className="btn my-4">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
