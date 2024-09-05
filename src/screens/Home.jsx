import React from 'react'
import Nav from '../components/Nav'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Home = () => {
  return (
    <>
    <Nav />
    <main className='h-[600px] bg-[#161616] text-[#ccc]'>
      <h1 className='text-6xl font-bold text-center pt-32'>Matias Bongiovanni.</h1>
      <p className='text-lg font-medium text-center pt-2 pb-5'>Front-End Developer</p>
      <button className='flex mx-auto bg-[#ccc] text-[#161616] font-bold p-2 rounded cursor-pointer'>Download Cv</button>
      <div className="flex justify-evenly pt-40 p-3 gap-5 text-2xl text-[#ccc]">
      <a href="https://www.linkedin.com/in/matiasbongiovanni/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
      <a href="https://www.github.com/matiasbongiovanni" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      <a href="mailto:matiasweschta@gmail.com" target='_blank' rel='noopener noreferrer'><MdEmail /></a>
      </div>
    </main>
    </>
  )
}

export default Home