import React from "react";
import footer from "../assets/images/bg-footer.png";
function NavComponent() {
  return (
    <div
      className=" w-full h-10 lg:h-[35rem] px-20 py-32 flex justify-center bg-fixed"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-auto flex justify-center items-center ">
        <div className="text-white text-3xl md:text-5xl font-bold font-roboto-slab  ">
          <div>About Us</div>
        </div>
      </div>
    </div>
  );
}

export default NavComponent;
