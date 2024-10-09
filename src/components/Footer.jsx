import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='h-20 flex justify-between text-[#ccc] text-center font-bold p-3'>
      <p>Matias Bongiovanni.</p>
      <div className="flex justify-evenly p-3 gap-5 text-xl text-[#ccc]">
      <a href="https://www.linkedin.com/in/matiasbongiovanni/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
      <a href="https://www.github.com/matiasbongiovanni" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      <a href="mailto:matiasweschta@gmail.com" target='_blank' rel='noopener noreferrer'><MdEmail /></a>
      </div>
    </footer>
  )
}

export default Footer