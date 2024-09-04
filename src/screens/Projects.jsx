import React from 'react'
import Card from '../components/Card'

const Projects = () => {
  return (
    <section className='bg-[#161616] h-[500px] p-5' id='Projects'>
        <h3 className='text-3xl text-center font-bold text-[#ccc] pt-5'>Projects</h3>
        <p className='text-[#ccc] text-center pt-2 opacity-65 pb-5'>Featured Projects, see all projects in my <span><a href="https://github.com/matiasbongiovanni" target="_blank" rel="noreferrer noopener" className='underline'>Github</a></span></p>
        <Card />
    </section>
  )
}

export default Projects