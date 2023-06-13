import React from 'react'
import ServiceComponent from './ServiceComponent'
// import office from '../assets/images/office/office-2.jpg'

function AboutCompany() {
    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8">
                    
                    <p className="text-black font-bold text-lg md:text-xl font-heading font my-10">ABOUT US</p>
                    <h1 className="text-black font-bold font-heading text-2xl md:text-3xl mt-3 mb-3 md:max-w-2xl capitalize">52 YEARS OF EXPERIENCE IN THIS AREA</h1>
                    <p className="text-black  max-w-2xl mx-auto mt-4 font-body">
                     Our commitment to quality and service is evident in our expertise in architectural design and construction. We strive to provide the best architectural solutions and services to our clients
                    </p>
                    <p className="text-black max-w-2xl mx-auto mt-4 font-body">
                    Our expertise in the field of architecture allows us to offer a wide range of products and services, including design consultations, construction management, and project planning. With a commitment to quality and innovation, we work tirelessly to ensure that all of our architectural designs meet the highest standards and are functional and aesthetically pleasing.
                    </p>
                    <p className="text-black  max-w-2xl mx-auto mt-4">
                   We aim to provide the best architectural solutions and deliver exceptional results for our customers, ensuring their satisfaction. By continuously improving and expanding our knowledge in the field, we aim to be a trusted partner in creating remarkable spaces and structures
                    </p>
                </div>
                <div className="relative group w-full md:w-2/5">
                    <div className="invisible md:visible transition-transform duration-300 group-hover:-translate-x-1.5 group-hover:-translate-y-2.5 absolute -top-8 -left-8 bg-pink-600 w-3/5 h-28 rounded"></div>
                    <div className="invisible md:visible transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-2.5 absolute -bottom-8 -right-8 bg-indigo-950 w-3/5 h-28  md:h-16 rounded"></div>
                    <img src="https://preview.colorlib.com/theme/archi/assets/img/gallery/about1.png" alt="" className="relative w-full md:w-[35rem] md:h-[40rem] " />
                </div>
            </div>
            {/* <ServiceComponent /> */}
        </div>
    )
}

export default AboutCompany
