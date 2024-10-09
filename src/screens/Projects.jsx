import React from 'react'
import Card from '../components/Card'

const Projects = () => {
  return (
    <section className='h-[500px]sm:h-[800px] p-5' id='Projects'>
        <h3 className='text-3xl text-center font-bold text-[#ccc] pt-5'>Projects</h3>
        <p className='text-[#ccc] text-center pt-2 pb-2 opacity-65'>Featured Projects, see all projects in my <span><a href="https://github.com/matiasbongiovanni" target="_blank" rel="noreferrer noopener" className='underline'>Github</a></span></p>
        <Card />        
    </section>
  )
}

export default Projects