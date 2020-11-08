import React from 'react';
import './Intro.css';
import { useSpring, animated } from 'react-spring';

import profile from '../../assets/profile.jpg';

const Intro = () => {
  const props = useSpring({
    margin: '0',
    from: { margin: '300px' },
    config: { duration: 550 },
  });

  return (
    <animated.div style={props}>
      <div className="intro">
        <h1>Yaldar Hapak, fullstack developer</h1>

        <img src={profile} alt="me" className="profile-pic" />
      </div>
    </animated.div>
  );
};

export default Intro;
