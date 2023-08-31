import React from 'react'
import Footer from '../components/Footer'
import AboutComponent from '../components/AboutComponent'
import Experties from '../components/Experties'
import NavComponent from '../components/NavComponent'

function AboutPage() {
  return (
    <div className=''>
       <NavComponent />
      
       <AboutComponent />
       <Experties />
       <Footer  />
    </div>
  )
}

export default AboutPage