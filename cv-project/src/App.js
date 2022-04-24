import './App.css';
import Educational from './components/Educational.js';
import General from './components/General.js';
import './components/Practical';
import './components/Header.js';
import './components/Footer.js';
import Header from './components/Header.js';
import React, { Component } from 'react'
import Practical from './components/Practical.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header/>
        <General/>
        <div className='lg:flex'>
          <Educational/>
          <Practical/>
        </div>
      </div>
    );
  }
}

export default App;
