import React from "react";
import "../index.css";
function Aboutwork() {
  return (
    <div className="">
      <div className=" underworkcom lg:h-[60rem] -mt-44 pt-[355px]">
        <div class="  bg-[rgba(4,21,28,0.902)]  w-full  z-0 md:w-[85%] lg:w-1/2  ">
          <div className="container px-[16px] lg:mt-[6.4rem]  flex flex-col items-end sm:w-4/5 md:[100%] md:px-0 sm:px-3    ">
            <div className=" relative pt-28  pb-24 flex flex-col lg:h-2/3  gap-10">
              <h1 className="  text-4xl font-medium text-white lg:mx-40 ">
                Our best recent popular work here
              </h1>
              <p className=" text-white  lg:mx-40">
                Brook presents your services with flexible, convenient and cdpoe
                layouts. You can select your favorite layouts & elements for
                cular ts with unlimited ustomization possibility.{" "}
              </p>
              <a
                href="#"
                className="lg:mx-40 text-white font-normal uppercase hover:bg-red-900 transition-colors duration-500 ease-linear bg-red-700 w-[15rem] h-[4rem] flex  justify-center items-center"
              >
                <div className=" w-10 h-[2px] rounded-lg bg-white mr-3"></div>{" "}
                <p>About Us</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutwork;
