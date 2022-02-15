import React from 'react';
import { FaGithub, FaEnvelope,FaLinkedinIn, FaInstagram} from 'react-icons/fa';


function Footer() {
  return(
    <div className="py-5 border-t-3">
        <div className="flex justify-center mt-4 ">

        <a href="https://github.com/ashutoshnautiyal7" target="_blank" className="text-xl text-gray-800  hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-500  mr-2">
                <FaGithub />
                <span class="sr-only">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/ashutosh-nautiyal-67bba4222/" target="_blank" className="text-xl text-blue-600  hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-500 mr-2">
                <FaLinkedinIn />
                <span class="sr-only">GitHub</span>
              </a>

              <a href="https:/ashutoshnautiyal94@gmail.com" target="_blank" className="text-xl text-gray-800  hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-500 mr-2">
                <FaEnvelope />
                <span class="sr-only">GitHub</span>
              </a>

              <a className="text-xl text-gray-50  bg-gradient-to-tr from-yellow-600 to-purple-600 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-500">
                <FaInstagram />
                <span class="sr-only">GitHub</span>
              </a>

        </div>
        <div className="flex justify-center mt-4 ">
            <p className=" border-black border-t-2 ">
              Thanks for visiting. 
            </p>
        </div>
    </div>
  ) 
}

export default Footer;
