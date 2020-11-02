import React from 'react';
import './Experience.css';
import pastExp from '../../data/pastExp';

const Experience = () => {
  console.log(pastExp);
  return (
    <ul className="exp-wrapper">
      <h4>Past experience:</h4>
      {pastExp.map((el, i) => (
        <li key={i}>
          <h5>{el.title}</h5>
          <p>{el.timeRange}</p>
          <p>{el.desc}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
