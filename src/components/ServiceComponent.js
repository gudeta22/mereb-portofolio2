import React from 'react';
import ICON from '../assets/images/88.png';

function ServiceComponent() {
  const services = [
    {
      id: 1,
      src: ICON,
      title: "ARCHITECTURE",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
    {
      id: 2,
      src: ICON,
      title: "ARCHITECTURE",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
    {
      id: 3,
      src: ICON,
      title: "ARCHITECTURE",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
  ];

  return (
    <div className="">
      <div className="bg-gray-900 text-white h-[30rem]">
        <span className="mx-44">OUR SERVICES</span>
        <h1>WE PROVIDE BEST INTERIOR SOLUTION FOR YOU</h1>
      </div>

      <div className="  m-5 w-[28rem] rounded-lg  absolute -my-72">
        {services.map((service,id) => (
          <div key={id} className='bg-gray-200 h-[22rem] rounded-lg'>
            <div className='w-[28rem] mx-0 my-5'>
            <img src={service.src} alt="" className="w-16 h-14  mx-48 my-5 " />
            <h3 className="my-20 mx-40 font-semibold">{service.title}</h3>
            <p className="m-10 mx-11  font-light">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceComponent;
