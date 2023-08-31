import React from 'react';
import { Link } from 'react-router-dom';
import AboutComponent from '../components/AboutComponent';
import bgcolor from '../assets/images/backnew.png';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceComponent from '../components/ServiceComponent';
import OurWork from '../components/ourWork';
import Experties from '../components/Experties';
import Aboutwork from '../components/Aboutwork';

function Home() {
  return (
    
    <>
      <div
        className='bg-no-repeat h-[37rem] bg-gray-600 lg:h-[60rem] w-[100%]'
        style={{
          backgroundImage: `url(${bgcolor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
        <div className=' relative sm:mx-14  '>
          <div className='text-white absolute mx-5 mt-24 lg:mx-[22rem] lg:mt-44  '>
            <span className='font-light underline underline-offset-[20px] font-roboto-slab '>
              #1 ARCHITECTURE IN UNITED STATES
            </span>

            <h1 className='text-2xl my-10 font-extrabold sm:text-5xl md:text-5xl lg:text-7xl font-roboto-slab'>
              <p className='my-1 font-roboto-slab'>FOCUS ON</p>DESIGN QUALITY
            </h1>
            <p className=' py-6 -my-4 relative font-roboto-slab font-thin'>
              We create lasting impressions through architectural design.
            </p>
            <Link to='/contact'>
             
            <button className='bg-red-700 h-14 my-14 w-52 flex   hover:bg-red-900 transition-colors duration-500 font-light  ease-in-out delay-100    border-red-600'>
                <div className=" w-10 h-[2px] rounded-lg bg-white mx-2 mt-6 "></div>{" "}
              <h2 className='my-3 font-medium'>CONTACT US</h2>
            </button>
            </Link>
          </div>
        </div>
      </div>
      <AboutComponent />
      <ServiceComponent />
      <OurWork />
      <Aboutwork />
      <Experties />
      <Footer/>
    </>
  );
}

export default Home;
