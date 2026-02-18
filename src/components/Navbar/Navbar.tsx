import React, { useEffect, useRef, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import NavbarLink from '../NavbarLink/NavbarLink';
import './Navbar.css';

interface NavbarProps {
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Navbar = ({ themeMode, onToggleTheme }: NavbarProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);
  const r = useRef<Icon>(null);
  const collapseOnScroll = () => {
    setExpanded(false);
  };
  const collapseOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id && target.id !== 'icon') setExpanded(false);
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
      <label className="theme-switch" htmlFor="theme-switch" aria-label="Toggle dark mode">
        <input
          id="theme-switch"
          type="checkbox"
          className="theme-switch-input"
          checked={themeMode === 'dark'}
          onChange={onToggleTheme}
        />
        <span className="theme-switch-slider" aria-hidden="true" />
      </label>
    </nav>
  );
};

export default Navbar;
