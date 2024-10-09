import React from 'react'
import Nav from '../components/Nav'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Cv from '../assets/Cv.pdf'
import Arrow from '../components/Arrow'


const Home = () => {
  return (
    <>
    <Nav />
    <section className='h-[600px] text-[#ccc]'>
      <h1 className='text-5xl sm:text-6xl font-bold text-center pt-36'>Matias Bongiovanni.</h1>
      <p className='text-lg font-medium text-center pt-10 pb-10'>Front-End Developer</p>
      <button className='flex mx-auto bg-[#ccc] text-[#161616] font-bold p-2 rounded cursor-pointer'><a href={Cv}>Download CV</a></button>
      <div className="flex justify-center pt-10 pb-20 p-3 gap-5 text-2xl text-[#ccc]">
      <a href="https://www.linkedin.com/in/matiasbongiovanni/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
      <a href="https://www.github.com/matiasbongiovanni" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      <a href="mailto:matiasweschta@gmail.com" target='_blank' rel='noopener noreferrer'><MdEmail /></a>
      </div>
      <Arrow />
    </section>
    </>
  )
}

export default Home
