import React from 'react';
import { Link } from 'react-scroll';
import './NavbarLink.css';

const NavbarLink = ({ to }: { to: string }) => (
  <Link to={to.toLocaleLowerCase()} activeClass="active" spy smooth offset={-70} duration={500} className="link">
    {to}
  </Link>
);

export default NavbarLink;
