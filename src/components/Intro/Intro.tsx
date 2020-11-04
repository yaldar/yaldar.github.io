import React from 'react';
import './Intro.css';
import profile from '../../assets/profile.jpg';

const Intro = () => (
  <div className="intro">
    <h1>Hi! My name is Yaldar</h1>
    <img src={profile} alt="me" className="profile-pic" />
  </div>
);

export default Intro;
