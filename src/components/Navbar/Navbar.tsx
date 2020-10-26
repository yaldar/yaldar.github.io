import React, { useEffect } from 'react';
import scrollHandler from '../../utils';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  return (
    <nav className="navbar" id="navbar">
      <a href="">about</a>
      <a href="">github</a>
      <a href="">projects</a>
      <a href="">contact</a>
    </nav>
  );
};

export default Navbar;
