import React from "react";
import background from "../../../images/background.webp";
import sweet from "../../../images/IMG_20220129_120336.png";
import "./Banner.css";
import resume from "../../../images/Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen  relative mb-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="absolute  top-1/3 " style={{ zIndex: 3 }}>
          <h1 className="mb-5 text-7xl font-bold body gradient-to-r hover:to-blue-500 from-green-500">Sweet Palma</h1>
          <p className="mb-5 text-3xl">
            I am a{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Front-end Web Developer",
                  "MERN Stack Developer",
                  "React.js Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>

          <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
            <a href={resume} download="Resume.pdf">
              Download Resume
            </a>
          </button>
        </div>

        <div
          className="absolute bottom-0 right-12 hidden lg:block"
          style={{ zIndex: 1 }}
        >
          <img className="w-[600px]" src={sweet} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
