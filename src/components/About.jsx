
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import scrollIntoView from 'scroll-into-view';

function About() {
  return(
    <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black md:text-4xl font-bold text-center">
            Hey!👋
        </p>

        <p className="text-base text-black md:text-xl text-center text-gray-600  leading-relaxed mt-4  ">
           I'm Ashutosh, first year undergrad at G.B Pant Institute of Engineering and Technology, pursuing B.Tech in Computer Science and Engineering. 
           I am a FullStack Web Developer and a Freelancer. A dedicated IT professional possessing a passion for programming and seeking a software engineering position where I can utilize my development and coding skills to efficiently fulfill the requirements of clients.
           Feel free to contact me from the contact form below.
        </p>

        {/* to make a scroll button we downloaded - npm scroll-inot-view  */}

        <scrollIntoView Selector="#tech">
            <div className="mx-auto p-20">
            <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-700" />
            </div>
        </scrollIntoView>


    </div>
  )
}

export default About;
