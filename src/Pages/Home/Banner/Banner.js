import React from "react";
import background from "../../../images/background.webp";
import sweet from "../../../images/IMG_20220129_120336.png";
import "./Banner.css";
import resume from "../../../images/Resume.pdf";
import { Typewriter } from "react-simple-typewriter";
import Header from "../../Header/Header";

const Banner = () => {
  return (
      <div
        className=""
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
      <Header/>
        <div className="min-h-screen hero">
          <div className="hero-content text-center text-neutral-content">
            <div className="absolute  top-1/3 " style={{ zIndex: 3 }}>
              <h1 className="mb-5 text-7xl font-bold body">Sweet Palma</h1>
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
          </div>
        </div>
      </div>
  );
};

export default Banner;
