import React, { useEffect, useState } from 'react';
import {scrollHandler} from '../../utils';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <nav className="navbar" id="navbar" onClick={() => setExpanded(!expanded)}>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="/skills">skills</NavLink>
      <a href="https://github.com/yaldar/" target="blank">
        github ->
      </a>
      <NavLink to="/contact">contact</NavLink>
    </nav>
  );
};

export default Navbar;
