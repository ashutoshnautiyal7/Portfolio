

import {  useRef, useState } from "react";
import contact from '../images/contact.jpg';
import emailjs from 'emailjs-com';



export default function Contact() {
  // creating email js 
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mjp0zpe",
        "template_eha9lgn",
        formRef.current,
        "user_WhhPVZTjGcpGCbMgkOGAN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
    
  };


  return (
    
    <div className="c ">
<div class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-purple-900">Lets talk about everything!</h2>
            <div class="text-gray-700 mt-8">
              Hate forms? Send us an <span class="underline">email</span> instead.
            </div>
          </div>

          <div class="mt-8 ">
            <img src={contact} alt="" className="rounded-md " />
          </div>

        </div>


        <form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" name="user_name" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Your-Email</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="user_email" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message"></textarea>
          </div>
          <div class="mt-8">
            <button class="uppercase text-sm font-bold tracking-wide bg-gradient-to-br from-purple-700 to-blue-700 text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
            {done && "thanks your mail was submitted"}
          </div>
        </form>

      </div>

    </div>
  );
}