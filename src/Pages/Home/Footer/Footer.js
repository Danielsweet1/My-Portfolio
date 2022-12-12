import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" flex justify-center p-10 py-16 bg-slate-900 text-slate-400">
      <div className="text-center">
        <p className="font-semibold text-white mb-3">Social</p>
        <div className="flex justify-center">
          <p>
          <a href="https://www.facebook.com/Sweetpalma1"><FaFacebook className="text-2xl mx-3 text-blue-600 hover:cursor-pointer"/></a>
          </p>
          <p>
           <a href="https://github.com/Danielsweet1"><FaGithub className="text-2xl mx-3 text-gray-700 hover:cursor-pointer"/></a>
          </p>
          <p>
           <a href="https://www.linkedin.com/in/sweet-palma/"><FaLinkedin className="text-2xl mx-3 text-blue-900 hover:cursor-pointer"/></a>
          </p>
        </div>
        <p className="my-2 text-sm">Copyright Sweet Palma 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
