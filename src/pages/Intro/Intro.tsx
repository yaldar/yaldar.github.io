import React from 'react';
import './Intro.css';
import profile from '../../assets/profile.jpg';

const Intro = () => {
  return (
    <div className="intro">
      <h1>hi it's yaldar</h1>
      <img src={profile} alt="me" className="profile-pic" />
    </div>
  );
};

export default Intro;
