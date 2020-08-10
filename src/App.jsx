import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

const message = 'Say hello to ReactJS';

function BodyComponent() {
  return (
    <div>
      <h1>{message}</h1>
      <p>You will learn a Frontend Framework from scratch to become a Ninja Developer.</p>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <header className="App-header">
            <nav>
              <img src="./images/ironhack-logo.svg" className="App-logo" alt="ironhack.logo" />
              <img src="./images/menu-top.svg" className="nav" alt="dropdown-bar" />
            </nav>
            <BodyComponent />
          </header>

          <footer>
            <div>
              <img src="./images/icon1.png" alt="icon" />
              <img src="./images/icon2.png" alt="icon" />
              <img src="./images/icon3.png" alt="icon" />
              <img src="./images/icon4.png" alt="icon" />
              <img src="./images/icon5.png" alt="icon" />
            </div>
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
