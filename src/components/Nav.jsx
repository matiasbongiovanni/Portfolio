import React from 'react'

const Nav = () => {
  return (
    <>
    <header>
        <nav className='bg-[#121212F0] h-20 text-[#F5F5F5F5] flex justify-between items-center p-3'>
            <span className='text-left font-bold'>Matias Bongiovanni</span>
            <ul className='flex gap-5 items-center justify-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#About-Me">About</a></li>
            <li><a href="#Contact">Contact</a></li>
            </ul>
            {/*agregar menu dropdown con eleccion de idioma esp-eng*/}
        </nav>
    </header>
    </>
  )
}

export default Nav