import React from "react";
import about from "../../../images/about.png";
import resume from '../../../images/Resume.pdf'

const About = () => {
  return (
    <div className="hero bg-slate-50 px-6 my-20 ">
      <div className="hero-content max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full md:w-[500px] mx-auto p-10 shadow-2xl">
          <img
            src={about}
            className="w-full  h-full rounded-xl bg-slate-300   "
            alt=""
          />
        </div>
        <div>
          <p className="text-red-500">VISIT MY PORTFOLIO & HIRE ME</p>
          <h1 className="text-6xl font-bold text-slate-700">About Me</h1>
          <p className="py-6 ">
            Hi, This is Sweet Palma.I have learned Front-end web
            delevopment.Though I am from a different field, I have passion on
            web development That's why I Have learned front-end web development,
            I can build user interface by html and css also can add
            functionality using javaScript, I have Knowledge on Css frameworks
            like Bootstrap and tailwind. Beside these I know React and Have a
            little bit knowledge of Backend.I know express, node.js and able to
            create sever and can do CRUD operation and also integrate database
            with server. 
            I believe that I can add value for any company.
          </p>
          <button className="btn border-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
            <a
              href={resume}
              download="Resume.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
