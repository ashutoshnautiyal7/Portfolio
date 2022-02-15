import React, { useEffect } from "react";
import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Aos from "aos";
import 'aos/dist/aos.css'

function App()
{
  useEffect(()=>{
    Aos.init({
      once: true,
    })
  })

  return (
    <div className="min-h-screen py-10 px-3 sm: px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="flip-up" data-aos-duration="800" data-aos-delay="400">
       <About />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
       <Skills />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
       <Projects />
      </div>
      <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
      <Contact />
      <Footer />
      </div>
      
      
      
    </div>

  );
}

export default App;
