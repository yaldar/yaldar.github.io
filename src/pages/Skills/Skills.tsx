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
    <div className="skills-wrapper" id="skills">
      <SkillList title="languages" list={languages} />
      <SkillList title="backend" list={backend} />
      <SkillList title="frontend" list={frontend} />
      <SkillList title="tools" list={tools} />

    </div>
  </div>
);

export default Skills;
