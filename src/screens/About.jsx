import React from 'react'
import Experience from '../components/Experience'

const About = () => {
  return (
    <section className='bg-[#161616] h-[600px] p-5' id='About-Me'>
         <h3 className='text-3xl text-center font-bold text-[#ccc] pt-5'>About Me</h3>
         <p className='text-[#ccc] text-center pt-2 opacity-65 pb-5'>My experience, studies and certifications.</p>
          <Experience />
    </section>
  )
}

export default About