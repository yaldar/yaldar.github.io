import React from 'react';
import { SkillListType } from '../../types';
import './SkillList.css';

const SkillList = ({ title, list }: SkillListType) => {
  return (
    <ul className={`${title} skill-list`}>
      <h2>{title}</h2>
      {list.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  );
};
export default SkillList;
