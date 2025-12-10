import React from 'react';
import projectsArray from '../../data/projectsArray';
import './Projects.css';
import Project from '../../components/Project/Project';

import { Timeline } from '@mui/lab';

const Projects = () => {
  return (
    <div className="projects-wrapper" id="projects">
       <h2>My projects:</h2>
      <Timeline className="projects-list" position="alternate">
        {projectsArray.map((project) => (
          <Project project={project} />
        ))}
      </Timeline>
    </div>
  );
};

export default Projects;
