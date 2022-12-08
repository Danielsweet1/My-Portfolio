import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer p-10 py-16 bg-slate-900 text-slate-400">
      <div>
        <p>
          Sweet Palma Portfolio
          <br />
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <p>
          <a href="https://www.facebook.com/Sweetpalma1"><FaFacebook className="text-2xl text-blue-600 hover:cursor-pointer"/></a>
          </p>
          <p>
           <a href="https://github.com/Danielsweet1"><FaGithub className="text-2xl text-gray-700 hover:cursor-pointer"/></a>
          </p>
          <p>
           <a href="https://www.linkedin.com/in/sweet-palma/"><FaLinkedin className="text-2xl text-blue-900 hover:cursor-pointer"/></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
