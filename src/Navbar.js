import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="NavbarTitle"><h3>Contact Tracing App</h3></div>
        <br/>
        <div><button className="button" onClick={this.props.toggle}>Log In</button></div>
      </div>
    );
  }
}

export default Navbar;