import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Beautiful Mess</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/Products/">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/User/">User</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
};
export default MyNavbar;
