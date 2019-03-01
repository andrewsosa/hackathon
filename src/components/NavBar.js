import React from 'react';
import Container from '../layouts/Container';
// import './NavBar.scss';

const navLinks = [
  ['MAKE/BUILD', '#'],
  ['Details', '#details'],
  ['Schedule', '#schedule'],
  ['Sponsors', '#sponsors'],
  ['FAQ', '#faq'],
];

const NavBar = () => (
  <Container>
    <nav className="columns is-mobile is-multiline">
      {navLinks.map(([name, href]) => (
        <a key={name} className="column has-text-centered" href={href}>
          <h4>{name}</h4>
        </a>
      ))}
    </nav>
  </Container>
);

export default NavBar;
