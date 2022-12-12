import React from "react";
import img1 from "../../../images/html.png";
import img2 from "../../../images/css.png";
import img3 from "../../../images/bootstrap.png";
import img4 from "../../../images/tailwind.png";
import img5 from "../../../images/javascript.png";
import img6 from "../../../images/react.png";
import img7 from "../../../images/nodejs.png";
import img8 from "../../../images/mongodb.jpg";

const Skills = () => {
  const data = [
    {
      img: img1,
      name: "Html",
    },
    {
      img: img2,
      name: "CSS",
    },
    {
      img: img3,
      name: "Bootstrap",
    },
    {
      img: img4,
      name: "Tailwind",
    },
    {
      img: img5,
      name: "JavaScript",
    },
    {
      img: img6,
      name: "React",
    },
    {
      img: img7,
      name: "Node.js",
    },
    {
      img: img8,
      name: "Mongodb",
    },
  ];
  return (
    <div className="my-24  ">
      <h3 className="text-center font-extrabold text-5xl mb-7 text-slate-700">My Skills</h3>
      <div className="flex justify-around flex-wrap">
        {data.map((item, i) => (
          <div key={i} className='p-5 rounded-xl  shadow-lg'>
            <img className="bg-white w-24 h-24 rounded-xl mx-auto" src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
