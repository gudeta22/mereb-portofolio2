import React from "react";
import popular1 from "../assets/images/building1.jpg";
import popular2 from "../assets/images/building2.jpg";
import popular3 from "../assets/images/building3.jpg";
import popular4 from "../assets/images/building4.jpg";
function OurWork() {
  const projects = [
    {
      id: 1,
      src: popular1,
      title: "Downside Low House",
      place: `Bole,Addis Abeba`,
    },
    {
      id: 2,
      src: popular2,
      title: "Top Commercial Building",
      place: `Bole,Addis Abeba`,
    },
    {
      id: 3,
      src: popular3,
      title: "Big Building Concept",
      place: `Bole,Addis Abeba`,
    },
    {
      id: 4,
      src: popular4,
      title: "Downside Low House",
      place: `Bole,Addis Abeba`,
    },
  ];
  return (
    <div className=" p-4 mt-[73rem]  sm:flex justify-center md:mt-[45rem] lg:mt-[33rem]  sm:mt-[40rem] ">
      <div className=" sm:text-center ">
        <div className=" sm:m-auto sm:w-[500px]">
          <div className=" flex items-center sm:justify-center sm:text-center ">
            <div className=" w-16 h-[2px]  mr-3 bg-slate-950 rounded-lg "></div>
            <p className="font-semibold tracking-wider text-[#292c37]  text-xl uppercase  ">
              our recent work
            </p>
          </div>
          <div  className="w-auto h-auto">
             <h2 className="mb-3 text-left text-[27px]  mt-9 font-bold text-[#1d2434]  sm:text-center lg:text-5xl ">
                  OUR BEST RECENT <br /> WORK HERE
             </h2>
          </div>
         
        </div>

        <div className=" sm:m-auto sm:w-[510px] sm:grid grid-cols-2 gap-[29px] md:w-[690px] lg:w-full lg:my-14 md:my-14">
          {projects.map((project, id) => (
            <div key={id} className="group mb-8">
              <img src={project.src} alt="" className="w-full h-auto" />
              <div className="child relative  z-10 bg-white w-full transition-all group-hover:-translate-y-10 duration-500 ease-in-out ">
                <p className="text-left font-bold ">{project.title}</p>
                <p className="text-left font-thin">{project.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
