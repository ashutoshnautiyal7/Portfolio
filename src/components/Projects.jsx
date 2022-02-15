import React from 'react';
import port from '../images/port.jpg';
import crud from '../images/crud.jpg';
import moti from '../images/moti3.jpg';
import micro from '../images/micro.jpg';
import ecom from '../images/ecom.jpg';
import chat from '../images/logo.jpg';

function Projects() {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Here are some of the projects.</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Click on the projects images to know about them or checkout on my gitHub account from the link below.</p>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base"><a class="lg:w-2/3 mx-auto leading-relaxed text-base" target="_blank" href="https://github.com/ashutoshnautiyal7">( <em><strong> CLICK HERE</strong> for my gitHub Profile. </em> )</a> </p>
    </div>
    <div class="flex flex-wrap -m-4 " >
      <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" >
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-md shadow-lg" src={port}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">LIVE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Fine Portfolio</h1>
            <p class="leading-relaxed">This is the minimalist portfolio website designed in React. It's embedded with various animations and emailJs in the contact form .</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4"  data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-md shadow-lg" src={moti} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><a href="https://ashutoshnautiyal7.github.io/Quotes_App/" target="_blank">LINK</a></h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Quotes App</h1>
            <p class="leading-relaxed">This is random quote generator app where you can find motivational quotes with new background every time you refresh.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="600">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-md shadow-lg" src={crud}   />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><a href="https://devcom-crud.herokuapp.com/"  target="_blank">LINK</a></h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">CRUD App</h1>
            <p class="leading-relaxed">CRUD app made using React.js Express.js and Node.js . Database used is json so you won't find this working on hosted site </p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="800">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-md shadow-lg" src={micro}  />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><a href="https://ashutoshnautiyal7.github.io/Microsoft_LandingPage/" target="_blank">LINK</a></h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Microsoft</h1>
            <p class="leading-relaxed">This is frontend only project, completely responsive clone of microsoft landing page made with tailwindCSS. NOTE: Project Still in progress</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="1000">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-md shadow-lg" src={ecom} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><a href="https://ashutoshnautiyal7.github.io/E-commerce-LandingPage/" target="_blank">LINK</a></h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">e-commerce</h1>
            <p class="leading-relaxed">This is the frontend only project, completely responsive e-commercial website. Designing is done with TailwindCSS</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1200">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-md shadow-lg" src={chat} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><a >LINK</a></h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Chit-Chat</h1>
            <p class="leading-relaxed">This is the realtime chat Application made using express.js node.js and socket.io. Note: Project Still in progress so link not available</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Projects
