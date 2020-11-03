// @ts-nocheck
import React from 'react';
import { SkillListType } from '../../types';
import './SkillList.css';
import { Icon } from 'semantic-ui-react';

const SkillList = ({ title, list }: SkillListType) => {
  return (
    <ul className={`${title} skill-list`}>
      <h2>{title}</h2>
      {list.map((el, i) => {

        return (
          <li key={i}>
            <Icon name={el} />
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillList;
