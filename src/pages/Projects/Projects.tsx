import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { fetchProjects, formateDate } from '../../utils';
import { resType } from '../../types/index';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState<resType[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <div className="projects-wrapper" id="projects">
      <h2>My projects:</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <Card
            fluid
            color="yellow"
            className="card"
            href={project.html_url}
            target="blank"
            header={project.name}
            meta={formateDate(project.created_at)}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
