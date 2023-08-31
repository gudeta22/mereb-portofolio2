import React from 'react'
import About1 from '../assets/images/about1.png'
import About2 from '../assets/images/about2.png'
function AboutComponent() {
  return (
    <div className="container">
  <div className=' px-4 mi:flex gap-6 py-24 lg:py-[10rem]'>
  <div className='mi:w-1/2 py-7 flex flex-col justify-center gap-8'>
<span className='flex items-center  font-bold'><div className='w-7 rounded-md mx-2 h-[2px] bg-red-600'></div><p className='text-xl font-medium font-roboto-slab'>About Us</p></span>
<h2 className=' font-bold text-4xl font-roboto-slab '>4 YEARS OF EXPERIENCE IN THIS AREA
</h2>
<p className=' font-light'>A suprisingly ambitious architectural design firm with energetic 
  architecture and designers merged their experience to found Mz-architects in the capital city of ethiopia. We have the passion for creating designs that tell their story.</p>
   <button className='bg-red-600  h-14  w-52 font-light transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-10 hover:bg-red-700 duration-300 text-white border-red-600 '>ABOUT US</button>
    </div>

    <div className='flex md:w-1/2 relative'>
      <div className=' z-10  absolute  mi:w-[80%] mi:left-6 lg:w-full'>
     <img src={About1} className=' ' alt="" />
      </div>
      <div className=' relative md:-right-[109px] md:top-4 mi:top-7 mi:right-0 lg:top-7 lg:-right-[109px] '>
      <img src={About2} alt="" />
      </div>

    </div>
  </div>

    </div>
  );
}

export default AboutComponent;