import React from 'react'
import logo from '../assets/images/logo.png'
import footer from '../assets/images/bg-footer.png'
// import cloud from '../assets/images/hover.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
         <div
        className='relative w-full px-20 py-10'
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
            <div className="container mx-auto flex flex-col md:flex-row justify-between text-white">
                <div className="sr-only md:not-sr-only flex flex-col grow">
                    <div className="flex mb-5 items-end select-none">
                        <img src={logo} alt="" className="w-[130px]" />
                      
                    </div>
                    <p className="max-w-sm text-sm text-gray-50 font-body">
                        Misikr Zewdu Company is dedicated to providing high-quality architectural Designs and 
                        services to meet the needs of our clients. Our experienced and knowledgeable staff is here to answer
                        any questions and help you find the right Designs to fit your architectural needs needs.
                    </p>
                    <p className="my-4 text-gray-300/90">
                      Based in <span className="text-white">Addis Ababa, Ethiopia</span>
                    </p>
                    <div className="mt-1">
                       
                        <Link to="/privacy" className="font-heading font-semibold text-slate-100 hover:text-gray-400 transition-colors cursor-pointer text-center md:text-left w-full">Privacy Notice</Link>
                    </div>
                </div>
                <div className="flex flex-col grow items-center md:items-start font-light">
                    <h1 className="flex font-light font-heading mb-4 text-2xl">
                        <div className="relative w-1 mr-3 bg-red-600">
                            <div className="absolute -translate-y-1/2 bg-indigo-950/95 animate-bounce-big w-full h-2"></div>
                        </div>
                        Contacts us
                    </h1>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Phone: +251-911393207</span>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Email: mzarchitechts@gmail.com</span>
                   
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Addis Ababa</span>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Ethiopia </span>
                </div>
                <div className="flex flex-col grow items-center md:items-start font-light">
                    <h1 className="flex font-light font-heading mt-5 md:mt-0 mb-4 text-2xl">
                        <div className="relative w-1 mr-3 bg-red-600">
                            <div className="absolute -translate-y-1/2 bg-indigo-950/95 animate-bounce-big w-full h-2"></div>
                        </div>
                    Services
                    </h1>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Building Design</span>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Supervision Services</span>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Landscape Design</span>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Interior Design</span>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Permit preparation</span>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">3D modeling</span>
                    <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Remodel/Addition</span>
                     <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">As-Built</span>
                     <span className="my-1.5 font-body text-gray-50 transition-colors cursor-default text-center md:text-left w-full">Rendering</span>
                 
                </div>
               
                
                <div className="md:sr-only flex flex-col items-center grow-2">
                    <div className="my-6 select-none"> 
                        <img src={logo} alt="" className="w-52" />
                    </div>
                  
                </div>
            </div>
            {/* <img src={cloud} alt="" className="absolute h-full top-0 right-0 select-none" /> */}
        </div>
    )
}

export default Footer;
