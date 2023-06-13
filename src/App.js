import './App.css';
import {Route , Routes} from 'react-router-dom'
import Home from '../src/pages/HomePage'
import Contact from '../src/pages/Contact'
import AboutPage from '../src/pages/AboutPage'
import Projects from '../src/pages/ProjectPage'
import Service from '../src/pages/ServicePage'
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
   <Navbar />
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<Service />} />
      <Route path='/projects' element={<Projects />} />
      <Route path = '/contact' element={<Contact />} />
    </Routes>
     
    </> 
  );
}

export default App;
