import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../../utils';
import { resType } from '../../types/index';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState<resType[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <div className="projects-wrapper">
      <h2>My projects:</h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id}>
            <h5>{project.name}</h5>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
