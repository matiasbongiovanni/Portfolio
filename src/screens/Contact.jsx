import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className='h-full bg-[#161616] text-[#ccc]' id='Contact'>
        <h3 className='text-3xl text-center font-bold text-[#ccc] pt-5'>Contact Me</h3>
        <p className='text-[#ccc] text-center pt-2 opacity-65'>Complete the form to contact you.</p>
        <form className='w-1/3 flex flex-col p-3 mx-auto' action='https://docs.google.com/forms/d/e/1FAIpQLSdQM98IyPsM3raL-ddBeU0jURVxDA2iZTmYaBC7wirVITV9eA/formResponse?submit=Submit&usp=pp_url'>
    <div className="p-2 w-full">
      <div className="relative">
        <label htmlFor="name" className="leading-7 py-4 text-lg text-[#ccc]">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="entry.965653584"
          required=""
          className=" w-full bg-zinc-800 rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-[#ccc] focus:text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
        />
      </div>
    </div>
    <div className="p-2 w-full">
      <div className="relative">
        <label htmlFor="email" className="leading-7 py-4 text-lg text-[#ccc]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="entry.25193857"
          required=""
          className=" w-full bg-zinc-800 rounded border border-gray-400 focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-[#ccc] focus:text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div className="p-2 w-full">
      <div className="relative">
        <label
          htmlFor="message"
          className="leading-7 py-4 text-lg text-[#ccc]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="entry.603436042"
          required=""
          className=" w-full bg-zinc-800 rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-[#ccc] focus:text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
    </div>
    <div className="p-2 w-full">
      <div>
        <button
          type="submit"
          className="flex mx-auto text-[#161616] bg-[#ccc] border-0 py-3 px-6 focus:outline-none rounded text-xl font-bold shadow-lg flex-col text-center"
        >
          Send
        </button>
      </div>
    </div>
  </form>
  <div className="flex justify-evenly p-3 gap-5 text-xl text-[#ccc]">
      <a href="https://www.linkedin.com/in/matiasbongiovanni/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
      <a href="https://www.github.com/matiasbongiovanni" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      <a href="mailto:matiasweschta@gmail.com" target='_blank' rel='noopener noreferrer'><MdEmail /></a>
      </div>
    </section>
  )
}

export default Contact
