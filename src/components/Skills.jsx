import {React, useEffect} from 'react';
import { FaReact, FaNodeJs} from 'react-icons/fa';
import {SiTailwindcss, SiJava, SiMongodb, SiJavascript} from 'react-icons/si'
import Aos from "aos";
import 'aos/dist/aos.css'

function Skills() {

    useEffect(()=>{
        Aos.init({
          once: true,
        })
      })



  return (
  <div className="max-w-4xl mx-auto justify-center py-12" id="#tech">
      {/*  below the sm: indicates the break point that is after we switch from small devices text will be 4xl */}
      <p className="text-2xl text-black sm:text-4xl font-serif text-center">
          Tech Stack I use
      </p>

      <div className="flex flex-wrap justify-center  pt-2" >

          <div className="flex flex-col w-60 p-10 m-6 overflow-hidden   bg-white shadow-2xl rounded-xl" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
              <FaReact className="text-blue-600 font-bold mx-auto text-4xl"></FaReact>
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">React Js</p>
          </div>

          <div className="flex flex-col w-60 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              <SiJava className="text-brown-200 font-bold mx-auto text-4xl"></SiJava>
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">Java</p>
          </div>

          <div className="flex flex-col w-60 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
              <FaNodeJs className="text-green-700 font-bold mx-auto text-4xl"></FaNodeJs>
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">Node Js</p>
          </div>

          <div className="flex flex-col w-60 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              <SiTailwindcss className="text-blue-500 font-bold mx-auto text-4xl"></SiTailwindcss>
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">TailwindCSS</p>
          </div>

          <div className="flex flex-col w-60 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
              <SiMongodb className="text-green-600 font-bold mx-auto text-4xl"></SiMongodb>
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">MongoDB</p>
          </div>

          <div className="flex flex-col w-60 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              <SiJavascript className="text-yellow-600 font-bold mx-auto text-4xl"></SiJavascript>
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">JavaScript Js</p>
          </div>

      </div>
      
  </div>
  )
}

export default Skills;
