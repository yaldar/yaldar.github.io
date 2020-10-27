import React, { useEffect } from 'react';
import scrollHandler from '../../utils';
import './Navbar.css';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  return (
    <nav className="navbar" id="navbar">
      <NavLink to="/about">about</NavLink>
      <NavLink to="https://github.com/yaldar/" target="blank">
        github
      </NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </nav>
  );
};

export default Navbar;
