import React from 'react';
import Container from '../layouts/Container';
import Button from './Button';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero-body has-text-centered">
        <Container>
          <img
            className="logo"
            src="../assets/svg/006-planet-earth.svg"
            alt="make/build logo"
          />
          <h2>HackFSU presents:</h2>
          <h1>MAKE/BUILD</h1>
          <h3>
            A Hackathon Event
            <br />
            April 12th 2019
          </h3>
          <div className="buttons is-centered">
            <Button text="Register" />
            <Button text="Contact" />
            {/* <a className="button">Register</a> */}
            {/* <a className="button is-outlined">Contact</a> */}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
