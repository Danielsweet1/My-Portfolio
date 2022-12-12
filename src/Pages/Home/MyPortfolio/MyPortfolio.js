import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {

  const [projects, setProjects] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/projects')
    .then(res=>res.json())
    .then(data=>setProjects(data))
  },[])

  return (
    <div className="text-center my-20">
      <p className="text-red-500">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
      <h2 className="text-5xl font-extrabold text-slate-700">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 max-w-screen-xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="w-96 shadow-lg  rounded-xl">
            <img className="w-80 h-60 mx-auto rounded-xl" src={project.image} alt="" />
            <div className="flex justify-around mt-4 text-blue-400">
              <a href={project.livesite} >Livesite</a>
              <a href={project.github}>Github</a>
            </div>
            <h2 className="font-bold text-2xl my-4">{project.name}</h2>
            <Link to={`/details/${project._id}`}><button className="btn mb-3 btn-outline btn-primary">Details</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;
