import React from 'react';
import SkillList from '../../components/SkillList/SkillList';
import './Skills.css'
type skillsType = {
  languages: string[];
  backend: string[];
  frontend: string[];
  tools: string[];
};

const Skills = ({ languages, backend, frontend, tools }: skillsType) => {
  return (
    <div className="skills-wrapper">
      <SkillList title="languages" list={languages}/>
      <SkillList title="backend" list={backend} />
      <SkillList title="frontend" list={frontend} />
      <SkillList title="tools" list={tools} />
    </div>
  );
};

export default Skills;
