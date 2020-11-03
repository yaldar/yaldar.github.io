import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../../utils';
import { resType } from '../../types/index';
import { Card, Icon, Image } from 'semantic-ui-react';
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
          <Card href={project.html_url} target='blank'>
            <Card.Content>
              <Card.Header>{project.name}</Card.Header>
              <Card.Meta>
                <span className="date">created at {project.created_at}</span>
              </Card.Meta>
              <Card.Description>{project.description}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
