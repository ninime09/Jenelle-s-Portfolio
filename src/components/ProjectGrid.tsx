import React from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectGrid() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50/50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
