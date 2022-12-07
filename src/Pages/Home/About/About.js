import React from "react";
import about from "../../../images/about.png";

const About = () => {
  return (
    <div className="hero  my-20 ">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="rounded-xl p-10 shadow-2xl">
          <img
            src={about}
            className="w-full rounded-xl  h-full  "
            alt=""
          />
        </div>
        <div>
            <p className="text-red-500">VISIT MY PORTFOLIO & HIRE ME</p>
          <h1 className="text-6xl font-bold text-slate-700">About Me</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
