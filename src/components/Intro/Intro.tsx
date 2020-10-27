import React from 'react';
import profile from '../../assets/profile.jpg';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <img src={profile} alt="me" className="image" />
      <p className="talk">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        provident et atque tempora natus distinctio iure cumque quia illo.
        Exercitationem aspernatur nemo dolorem aperiam deleniti. Culpa
        praesentium nihil repudiandae commodi?
      </p>
    </div>
  );
};

export default Intro;
