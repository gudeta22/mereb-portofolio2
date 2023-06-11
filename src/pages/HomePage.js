import React from 'react'
import AboutComponent from '../components/AboutComponent'
import bgcolor from '../assets/images/backnew.jpg'
import Navbar from '../components/Navbar';
function Home() {
  return (
    <>
    <div className='bg-no-repeat  h-[35rem] bg-gray-900 ' >
            <div className='relative'>
              <div className='text-white absolute mx-5 mt-24 '>
               <span className='font-light '>#1 ARCHITECTURE IN UNITED STARE</span>

               <h1 className='text-2xl  my-10 font-extrabold '> <p className='my-1'>FOCUS ON</p>DESIGN QUALITY</h1>
                   <p className='font-light py-6 -my-4 relative '>We creating lasting impression through architecture design.</p>

               <button className='bg-red-600  h-14 my-14  w-52 font-light transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-10 hover:bg-red-700 duration-300  border-red-600 '>CONTACT US</button>
               </div>
            </div>
            
    </div>
      <AboutComponent />
    </>
  )
}

export default Home;