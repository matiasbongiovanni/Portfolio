import React from 'react'

const Contact = () => {
  return (
    <section className='h-full bg-[#161616] text-[#ccc]'>
        <h3 className='text-3xl text-center font-bold text-[#ccc] pt-5'>Contact Me</h3>
        <p className='text-[#ccc] text-center pt-2 opacity-65'> <span><a href="https://github.com/matiasbongiovanni" target="_blank" rel="noreferrer noopener" className='underline'>Github</a></span></p>
        <form action="" method="post">
          <label>Name</label>
          <input type="text" name='' placeholder='Name and surname'/>
          <label>Email Address</label>
          <input type="email" name='' placeholder='Email address'/>
          <label></label>
          <input type="textarea" name='' placeholder='Leave us message'/>
          <button type="submit">Send</button>
        </form>
    </section>
  )
}

export default Contact