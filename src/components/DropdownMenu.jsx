import {React, useState} from 'react'
import Hamburger from 'hamburger-react'

const DropdownMenu = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <> 
    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex flex-end ml-52 items-center text-white font-bold px-2 py-2 rounded" type="button">
        <Hamburger toggled={isOpen} toggle={setOpen} />
    </button>

    <div id="dropdown" className="z-10 hidden bg-zinc-800 divide-gray-100 rounded shadow w-40 p-2">
        <ul className='flex flex-col gap-5 items-center justify-center opacity-100 sm:opacity-0'>
            <li>
                <a href="#Home">Home</a>
            </li>
            <li>
                <a href="#Projects">Projects</a>
            </li>
            <li>
                <a href="#About-Me">About</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </ul>
    </div>
    </>
  )
}

export default DropdownMenu