import React from 'react';
import { Link } from 'react-scroll';

const NavbarLink = ({ to }: { to: string }) => {

  return (
    <Link
      to={to.toLocaleLowerCase()}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {to}
    </Link>
  );
};

export default NavbarLink;
