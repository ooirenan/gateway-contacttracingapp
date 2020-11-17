import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarTitle"><h3>Contact Tracing App</h3></div>
      <br/>
      <div><button className="button">Log In</button></div>
    </div>
  );
}

export default Navbar;