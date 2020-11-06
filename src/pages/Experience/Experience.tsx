import React from 'react';
import './Experience.css';
import { Card } from 'semantic-ui-react';
import pastExp from '../../data/pastExp';

const Experience = () => (
  <div className="exp-wrapper" id="experience">
    <h3>My past experience and education:</h3>
    <div className="exp-list">
      {pastExp.map((el, i) => (
        <Card fluid>
          <Card.Content>
            <Card.Header>{el.title}</Card.Header>
            <Card.Meta>
              <span className="date">{el.timeRange}</span>
            </Card.Meta>
            <Card.Description>{el.desc}</Card.Description>
          </Card.Content>

        </Card>
      ))}
    </div>
  </div>
);

export default Experience;

/*

  <a>
    <Icon name='user' />
    22 Friends
  </a>
*/
