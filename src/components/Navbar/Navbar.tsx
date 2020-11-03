import React, { useEffect, useRef, useState } from 'react';
import NavbarLink from '../NavbarLink/NavbarLink';
import { scrollHandler } from '../../utils';
import './Navbar.css';
import { Icon } from 'semantic-ui-react';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <nav className={`navbar ${collapsed ? 'collapsed' : ''}`} id="navbar">
      <Icon
        name="bars"
        className="icon"
        onClick={toggleCollapsed}
        size="big"
      />
      <NavbarLink to="About" />
      <NavbarLink to="Experience" />
      <NavbarLink to="Skills" />
      <NavbarLink to="Projects" />
    </nav>
  );
};

export default Navbar;
