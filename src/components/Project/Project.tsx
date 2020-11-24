import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { formateDate } from '../../utils';

const Project = ({ project }: { project: any }) => {
  return (
    <Card color="yellow" fluid className="card" href={project.html_url} target="blank">
      <Image src={project.image} wrapped className="project-image" />
      <Card.Content className="content">
        <Card.Header>{project.name} </Card.Header>
        <Card.Description>{project.description}</Card.Description>
        <Card.Meta>{formateDate(project.created_at)}</Card.Meta>
      </Card.Content>
      {project.readme && (
        <Card.Content extra>
          <p>{project.readme}</p>
        </Card.Content>
      )}
    </Card>
  );
};

export default Project;
