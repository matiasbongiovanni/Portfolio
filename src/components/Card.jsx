import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
    <section className="bg-zinc-900 text-white p-4 rounded-lg max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-zinc-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <a href={project.Demo} target='_blank' className='cursor-pointer underline'><h4 className="text-xl font-semibold">{project.Title}</h4></a>
              {project.Repository && (
                <a href={project.Repository} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-sm text-[#ccc] mb-4">{project.Description}</p>
            <div className="flex flex-wrap gap-2">
              {project.Technologies.split(';').map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
