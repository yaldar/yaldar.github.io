import React from 'react';
import './NavbarLink.css';

const NavbarLink = ({ to }: { to: string }) => {
  const handleClick = () => {
    const element = document.getElementById(to.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a onClick={handleClick} className="link" role="button" tabIndex={0}>
      {to}
    </a>
  );
};

export default NavbarLink;
