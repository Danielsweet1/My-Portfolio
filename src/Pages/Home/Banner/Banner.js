import React from "react";
import background from "../../../images/background.webp";
import sweet from '../../../images/IMG_20220129_120336.png'
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen gradient relative mb-20"
      style={{ backgroundImage: `url(${background})`,zIndex:'1' }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="absolute  top-1/3 " style={{zIndex: '3'}}>
          <h1 className="mb-5 text-7xl font-bold body">Sweet Palma</h1>
          <p className="mb-5 text-3xl">Front-end Web Developer</p>
          <button className="btn bg-white hover:bg-white shadow-xl border-none text-red-500 " >Download Resume</button>
        </div>
        <div className="absolute bottom-0 right-12" style={{zIndex: '2'}}>
            <img className="w-[600px]" src={sweet} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
