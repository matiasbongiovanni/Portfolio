import React from 'react'
import DropdownMenu from './DropdownMenu'

const Nav = () => {

  return (
    <>
      <header>
        <nav className='bg-[#121212F0] h-20 text-[#F5F5F5] flex justify-between items-center p-3'>
          <span className='text-left font-bold'>Matias Bongiovanni</span>

          <div className='sm:hidden'>
            <DropdownMenu />
          </div>

          <ul className='hidden sm:flex gap-5 items-center justify-center'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#About-Me">About</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav
