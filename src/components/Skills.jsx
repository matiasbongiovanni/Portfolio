import React from 'react'
import ReactJS from '../assets/react.svg'
import Css from '../assets/css.svg'
import TailwindCSS from '../assets/tailwind.svg'
import Git from '../assets/git.svg'
import Github from '../assets/github.svg'
import JavaScript from '../assets/javascript.svg'

const Skills = () => {
  return (
    <section className='bg-[#161616]'>
        <div className="flex mx-auto justify-around gap-5 pt-5">
            <img src={Css} alt="" className='h-10 w-10'/>
            <img src={TailwindCSS} alt="" className='h-10 w-10'/>
            <img src={ReactJS} alt="" className='h-10 w-10'/>
            <img src={JavaScript} alt="" className='h-10 w-10'/>
            <img src={Git} alt="" className='h-10 w-10'/>
            <img src={Github} alt="" className='h-10 w-10'/>
        </div>
    </section>
  )
}

export default Skills