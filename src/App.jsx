import { Navbar } from './components/navbar/NavBar';

import HeroSection from './components/heroSection/HeroSection';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Curriculum from './components/Curriculum/Curriculum';
import ScrollToTop from './components/ArrowScroll/Arrow';
import Archiver from './components/Archvier/Archiver';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <>
    <Router>


    <Navbar/>
    <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/Curriculum" element={<Curriculum/>}/>
      <Route path="/achiver" element={<Archiver/>}/>

      
    </Routes>
    

    <Footer/>
    <div className='fixed bottom-0 left-[90%]'>

    {/* <ScrollToTop/> */}
    </div>
    </Router>

    </>
  )
}

export default App