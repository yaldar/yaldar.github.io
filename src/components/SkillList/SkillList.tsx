/* eslint-disable react/no-array-index-key */
// @ts-nocheck
import React from 'react';
import { SkillListType } from '../../types';
import './SkillList.css';

const SkillList = ({ title, list }: SkillListType) => (
  <ul className={`${title} skill-list`}>
    <h3>{title}</h3>
    {list.map((el, i) => (
      <li key={i}>{el}</li>
    ))}
  </ul>
);

export default SkillList;
