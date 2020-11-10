import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { formateDate } from '../../utils';
import projectsArray from '../../data/projectsArray';
import { ProjectObject } from '../../types/index';
import './Projects.css';
const Projects = () => {
  return (
    <div className="projects-wrapper" id="projects">
      <h2>My projects:</h2>

      <div className="projects-list">
        {projectsArray.map((project) => (
          <Card color="yellow" fluid className="card" href={project.html_url} target="blank">
            <Image src={project.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{project.name}</Card.Header>
              <Card.Meta>{formateDate(project.created_at)}</Card.Meta>
              <Card.Description>{project.description}</Card.Description>
            </Card.Content>
            {project.readme && (
              <Card.Content extra>
                <p>{project.readme}</p>
              </Card.Content>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};



export default Projects;
