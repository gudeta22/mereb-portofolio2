import React from 'react'
import ServiceComponent from '../components/ServiceComponent'
function AboutPage() {
  return (
    <div className=''>
        <div className='m-7 my-14'>
            <span className='mx-32 font-bold '>ABOUT US</span>
            
            <p className='my-16 font-light'>A suprisingly ambitious architectural design firm with energetic 
              architecture and designers merged their experience to found Mz-architects in the capital city of ethiopia. We have the passion for creating designs that tell their story.</p>

              
               <button className='bg-red-600  h-14  w-52 font-light transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-10 hover:bg-red-700 duration-300 text-white border-red-600 '>ABOUT US</button>
               
        </div>

        <div className='m-5'>
            <img src='https://preview.colorlib.com/theme/archi/assets/img/gallery/about1.png' />
        </div>

        <ServiceComponent />
    </div>
  )
}

export default AboutPage;