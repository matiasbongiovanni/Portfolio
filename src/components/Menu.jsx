import React, { useState } from 'react';

const LanguageDropdown = () => {
  // Estado para controlar la visibilidad del menú
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        id="dropdownLanguageButton"
        onClick={toggleDropdown}
        className="flex items-center text-white font-bold px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
        type="button"
      >
        Languages
      </button>

      {/* El menú dropdown */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 mt-2 bg-zinc-800 divide-gray-100 rounded shadow w-40 p-2 absolute"
        >
          <ul className="flex flex-col gap-2 items-start justify-center">
            <li>
              <button onClick={() => console.log('English')} className="text-white w-full text-left">
                English
              </button>
            </li>
            <li>
              <button onClick={() => console.log('Español')} className="text-white w-full text-left">
                Español
              </button>
            </li>
            <li>
              <button onClick={() => console.log('Français')} className="text-white w-full text-left">
                Français
              </button>
            </li>
            <li>
              <button onClick={() => console.log('Deutsch')} className="text-white w-full text-left">
                Deutsch
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default LanguageDropdown;
