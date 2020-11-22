import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Meeting from './Meeting';
import Popup from './components/popup'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showPopup: false
    };
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  render(){
    return (
      <div className="App">
        <Navbar toggle={this.togglePopup.bind(this)}/>
        <Meeting />
        {this.state.showPopup ? (
        <Popup text="Close" closePopup={this.togglePopup.bind(this)} />
        ) : null}

      <h3>Hackbridge Gateway - Contact Tracing App</h3>


    </div>
  );
}
}

export default App;
