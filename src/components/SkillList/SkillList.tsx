import React from 'react';
import './SkillList.css';

type SkillListType = {
  title: string;
  list: string[];
};
const SkillList = ({ title, list }: SkillListType) => {
  return (
    <ul className={`${title} skill-list`}>
      {list.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
};
export default SkillList;
