import React from 'react'
import OurWork from '../components/ourWork'
import Footer from '../components/Footer'
import NavComponent from '../components/NavComponent'

function ProjectPage() {
  return (
    <div>
      <NavComponent />
      <OurWork />
      <div className=' w-100% flex justify-center m-10 my-10 '>
        <div className=''>
          <a
                href="#"
                className="lg:mx-40 text-white font-normal uppercase hover:bg-red-900 transition-colors duration-500 ease-linear bg-red-700 w-[15rem] h-[4rem] flex  justify-center items-center"
              >
                <div className=" w-10 h-[1px] rounded-lg bg-white mr-3 "></div>{" "}
                <p className='font-light'>About Us</p>
              </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProjectPage