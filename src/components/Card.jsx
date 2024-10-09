import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Card() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('https://docs.google.com/spreadsheets/d/1EgG9S6ei5w4719cC-pMuBu2qg1uIXugfElkWlKXxMHs/pub?gid=772508176&single=true&output=csv');
        const csv = await res.text();

        const projectsArray = csv
          .split('\n')
          .slice(1)
          .map((row) => {
            const [Title, Description, Technologies, Repository, Demo] = row.split(',');
            return { Title, Description, Technologies, Repository, Demo };
          });

        setProjects(projectsArray);
      } catch (error) {
        console.error('Error al cargar los proyectos:', error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className='max-w-[1200px] mx-auto flex justify-center pt-0 p-5'>
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-5">
        {projects.map((project, index) => (
          <li key={index} className="relative mb-6 sm:mb-0 bg-zinc-900 rounded-lg p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-white">{project.Title}</h4>
            <div className="flex gap-3">
              <a href={project.Demo} target='_blank' className='cursor-pointer hover:opacity-50'>
                <FaArrowUpRightFromSquare className="w-5 h-5 text-[#ccc] hover:opacity-50" />  
              </a>
              {project.Repository && (
                <a href={project.Repository} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-5 h-5 text-[#ccc] hover:opacity-50" />
                </a>
              )}
            </div>
            </div>
            <div className="mt-3 sm:pe-8">
              <p className="block mb-3 mt-3 text-sm leading-none text-[#ccc] opacity-50">{project.Description}</p>
              <div className="flex flex-wrap gap-2">
                {project.Technologies.split(';').map((tech, index) => (
                  <span key={index} className="px-2 py-1 text-[#ccc] bg-zinc-800 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
