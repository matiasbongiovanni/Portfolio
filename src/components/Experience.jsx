import React from 'react';

const Experience = () => {
  return (
    <section className='max-w-[1200px] mx-auto flex justify-center p-5'>
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-5">
        <li className="relative mb-6 sm:mb-0 bg-zinc-900 rounded-lg p-5 shadow-lg">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 bg-zinc-800 shrink-0">
              <svg className="w-4 h-4 text-[#ccc]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">  
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h4 className="text-lg font-semibold text-white">Bachelor's degree in computer science.</h4>
            <time className="block mb-2 text-sm font-normal leading-none text-[#ccc] opacity-50">March. 18 - December. 23</time>
            <p className="text-sm font-normal text-[#ccc]">During my Bachelor's, I gained a strong foundation in programming, web development, and software architecture, applying modern technologies in practical projects.</p>
          </div>
        </li>
        
        <li className="relative mb-6 sm:mb-0 bg-zinc-900 rounded-lg p-5 shadow-lg">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 bg-zinc-800 shrink-0">
              <svg className="w-4 h-4 text-[#ccc]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">  
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h4 className="text-lg font-semibold text-white">Technical degree in software development.</h4>
            <time className="block mb-2 text-sm font-normal leading-none text-[#ccc] opacity-50">August. 24 - In process.</time>
            <p className="text-sm font-normal text-[#ccc]">I am currently expanding my knowledge in software development with a focus on agile methodologies and best programming practices.</p>
          </div>
        </li>
      </ol>
    </section>
  )
}

export default Experience;