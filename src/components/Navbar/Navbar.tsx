import React, { useEffect, useRef, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import NavbarLink from '../NavbarLink/NavbarLink';
import './Navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);
  const r = useRef<Icon>(null);
  const collapseOnScroll = () => {
    setExpanded(false);
  };
  const collapseOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id && target.id !== 'icon') toggleExpanded();
  };

  useEffect(() => {
    document.addEventListener('scroll', collapseOnScroll);
    document.addEventListener('click', collapseOnClick);
    return () => {
      document.removeEventListener('scroll', collapseOnScroll);
      document.removeEventListener('click', collapseOnClick);
    };
  }, []);
  return (
    <nav className={`navbar ${expanded ? 'expanded' : ''}`} id="navbar">
      <Icon name="bars" className="icon" onClick={toggleExpanded} size="big" ref={r} />
      <NavbarLink to="About" />
      <NavbarLink to="Experience" />
      <NavbarLink to="Skills" />
      <NavbarLink to="Projects" />
    </nav>
  );
};

export default Navbar;
