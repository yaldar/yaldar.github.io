import React from 'react';
import projectsArray from '../../data/projectsArray';
import './Projects.css';
import Project from '../../components/Project/Project';

import Timeline from '@material-ui/lab/Timeline';

const Projects = () => {
  return (
    <div className="projects-wrapper" id="projects">
       <h2>My projects:</h2>
      <Timeline align="alternate" className="projects-list">
        {projectsArray.map((project) => (
          <Project project={project} />
        ))}
      </Timeline>
    </div>
  );
};

export default Projects;
