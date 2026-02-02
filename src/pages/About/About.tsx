/* eslint-disable max-len */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import Intro from '../../components/Intro/Intro';
import './About.css';

const About = () => (
  <div className="about" id="about">
    <Intro />
    <p className="about-text">
      I’m an ambitious, 27 year-old
      {' '}
      {'<'}
      /salt
      {'>'}
      {' '}
      graduate with a passion for programming currently living in Stockholm. Learning new technologies and
      concepts and helping others develop is something I really enjoy, as well making tools and building amazing
      software that makes life easier for others. I used to work as a personal technician but now want to get involved
      more with software as it is my true passion.
    </p>

    <hr className="line" />
    <div className="about-links">
      <a href="https://github.com/yaldar" target="blank">
        <Icon name="github" size="huge" />
      </a>

      <a href="https://www.linkedin.com/in/yaldar/" target="blank">
        <Icon name="linkedin" size="huge" />
      </a>
      <a href="mailto:yaldar.hapak@gmail.com" target="blank">
        <Icon name="mail" size="huge" />
      </a>
    </div>
  </div>
);

export default About;
