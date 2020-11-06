import React from 'react';

import SkillList from '../../components/SkillList/SkillList';
import './Skills.css';

type skillsObject = {
  languages: string[];
  backend: string[];
  frontend: string[];
  tools: string[];
};

const Skills = ({
  languages, backend, frontend, tools,
}: skillsObject) => (
  <div className="centered-wrapper">
    <h2>Skills and Technologies: </h2>
    <div className="skills-wrapper" id="skills">
      <SkillList title="Languages" list={languages} />
      <SkillList title="Backend" list={backend} />
      <SkillList title="Frontend" list={frontend} />
      <SkillList title="Tools" list={tools} />
    </div>

  </div>
);

export default Skills;
