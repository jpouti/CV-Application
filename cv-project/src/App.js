import './App.css';
import Educational from './components/Educational.js';
import General from './components/General.js';
import './components/Practical';
import './components/Header.js';
import './components/Footer.js';
import Header from './components/Header.js';
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Header/>
      <General/>
      <Educational/>
      </div>
    );
  }
}

export default App;
