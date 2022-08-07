import React, {useEffect, useRef, useState} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';


import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handlename = (e) => {
     setName(e.target.value)
  }
  const handleemail = (e) => {
    setEmail(e.target.value)
  }
  const handletext = (e) => {
    setText(e.target.value)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o9d6f7c', 'template_xzv8hpu', form.current, 'OFPtYNu8BxMQ5PBrM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


     setName('');
     setEmail('');
     setText('');
  };  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id='contact' className="text-center md:text-start md:flex justify-between items-start gap-14 md:px-24">
      <div>
        <h2 className="mb-10 md:text-5xl text-4xl">
          Get in touch. <br /> <span className="text-main">Contact me</span>
        </h2>
      </div>

      <div className="text-black mx-auto">
        <form id='form' name="contact" ref={form} onSubmit={sendEmail} className="flex flex-col items-center m-auto w-60 md:w-80">
          <div>
            <input type="text" name="user_name" className="w-80" placeholder="Name" required data-aos="zoom-out-up" data-aos-duration="1000" onChange={handlename} value={name} />
          </div>
          <div>
            <input type="email" name="user_email" className="w-80" placeholder="Email" required data-aos="zoom-out-up" data-aos-duration="1000" onChange={handleemail} value={email} />
          </div>
          <div>
            <textarea name="message" className="w-80" placeholder="Message" required data-aos="zoom-out-up" data-aos-duration="1000" onChange={handletext} value={text} ></textarea>
          </div>
          <button type='submit' className="btn my-4" data-aos="zoom-out-up" required data-aos-duration="1000">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
