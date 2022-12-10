import React, { useRef } from "react";
import img from '../../../images/Front-End-Web-Development.webp';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmo43ph', 'template_9njlu1j', form.current, 'yJ7YNuaPMfGB6Bt9v')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className=" grid grid-cols-1 md:grid-cols-2 rounded-xl">
        <div className="bg-violet-800 p-10 rounded-lg">
          <h2 className="text-center font-bold text-4xl mb-5 text-white">
            Contact Me
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full mb-4"
              name="user_name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full mb-4"
              name="user_email"
            />
            <textarea
              type="text"
              name="message"
              className="textarea textarea-bordered w-full h-32"
              placeholder="Your Message"
            ></textarea>
            <div className="text-center mt-3">
              <input type="submit" value="Submit" className="btn btn-error text-white w-60 " />
            </div>
          </form>
        </div>
        <div className="rounded-lg">
            <img src={img} className="w-full h-full rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
