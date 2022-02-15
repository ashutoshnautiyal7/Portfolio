
import React from 'react';
import profile from '../images/pic2.jpeg'

//importing icons
import { FaGithub, FaEnvelope,FaLinkedinIn, FaInstagram} from 'react-icons/fa';

function Card()
{
  return(
    <div className="w-full ">
        <div className="flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 ">
            <div className="">
                <img src={profile} alt="" className="w-32 mx-auto rounded-full drop-shadow-md  " />
            </div>

            <div className="text-center mt-5 ">
                <h2 className="text-xl sm:text-2xl text-gray-900 font-bold ">Ashutosh Nautiyal</h2>
               

                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 ">FullStack Developer/ Freelancer</p>

            </div>
            
            <div className="flex align-center justify-center mt-4 ">
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
            

        </div>
    
    </div>
  )
}

export default Card;
