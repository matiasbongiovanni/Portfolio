import React from 'react'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

const About = () => {
  return (
    <section className='sm:h-[400px] h-[650px] p-5' id='About-Me'>
         <h3 className='text-3xl text-center font-bold text-[#ccc] pt-5'>Studies</h3>
         <p className='text-[#ccc] text-center pt-2 opacity-65 pb-5'>My experience, skills, studies and certifications.</p>
          <Experience />
          <Skills />
    </section>
  )
}

export default About