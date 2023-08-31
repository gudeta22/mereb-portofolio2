import React from "react";
import Archi from "../assets/images/city.png";
import Interior from '../assets/images/interior-design.png'
import Urban from '../assets/images/modern-house.png'
import "../index.css";
function ServiceComponent() {
  const services = [
    {
      id: 1,
      src: Archi,
      title: "ARCHITECTURE",
      description: `Architecture involves the creative and technical processes of designing spaces that fulfill the needs and desires of individuals and communities.`,
    },
    {
      id: 2,
      src: Interior,
      title: "INTERIOR DESIGN",
      description: `Interior design is the art and science of enhancing the interior spaces of buildings to create functional, aesthetically pleasing, and harmonious environments.`,
    },
    {
      id: 3,
      src: Urban,
      title: "URBAN DESIGN",
      description: `Urban design is the art of shaping cities, towns, and urban areas to create functional and visually appealing spaces.`,
    },
  ];

  return (
    <div className="bg-cover">
      <div className="p-4 service bg-gray-900 pt-28  h-[500px] md:text-center md:h-[35rem]  text-white  ">
        <div className=" md:m-auto md:flex flex-col justify-center md:w-[620px]   ">
          <div className="  flex items-center md:justify-center">
            <div className="  w-16 mb-5 h-[2px] -mt-4 mr-2  rounded-md bg-red-500 -left-16 "></div>
            <span className=" text-lg  mb-9  md:text-xlg font-bold uppercase md:text-center inline-block relative tracking-wider font-roboto-slab">
              Our services
            </span>
          </div>
          <h1 className=" text-xl md:text-4xl uppercase font-bold font-roboto-slab ">
            WE PROVIDE BEST INTERIOR SOLUTION FOR YOU
          </h1>
        </div>
      </div>

      <div className="p-3  rounded-lg absolute md:-mt-44 -mt-72 md:flex justify-center w-full  md:gap-7 sm:grid sm:grid-cols-2 sm:m-auto sm:gap-4 sm:-mt-44  ">
        {services.map((service, id) => (
          <div
            key={id}
            className="bg-[#f8f8f8]   sm:justify-center  h-[25rem] lg:h-[28rem] rounded-lg"
          >
            <div className="  mx-0 lg:w-[25rem] p-[50px] flex justify-center items-center flex-col pt-16   gap-6  my-7">
              <img src={service.src} alt="" className="w-16 h-14    " />
              <h3 className="  font-semibold my-10">{service.title}</h3>
              <p className=" text-[#717081]   text-justify font-light">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceComponent;
