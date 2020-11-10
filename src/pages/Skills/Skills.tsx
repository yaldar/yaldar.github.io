import React from 'react';

import SkillList from '../../components/SkillList/SkillList';
import { skillsArray } from '../../data/skillsData';

import './Skills.css';

const Skills = () => {
  const { languages, backend, frontend, tools } = skillsArray;

  return (
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
};

export default Skills;
