import './App.css';
import Educational from './components/Educational.js';
import General from './components/General.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import React, { Component } from 'react'
import Practical from './components/Practical.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForms: "block",
      submitCv: "hidden",
      cv: false,
    }

    this.handleSubmitCv = this.handleSubmitCv.bind(this);
  }

  handleSubmitCv = (e) => {
    e.preventDefault();
    this.setState({
      displayForms: "hidden",
      submitCv: "block",
      cv: true,
    })
  }
  render() {
    if (this.state.cv === false) {
      return (
        <div>
          <Header/>
          <div>
            <General cv={this.state.cv}/>
            <div className='xl:flex'>
              <Educational cv={this.state.cv}/>
              <Practical cv={this.state.cv}/>
            </div>
            <div className="flex justify-center text-sky-800 p-8">
              <button type='button' onClick={this.handleSubmitCv} className="font-bold">Display CV</button>
            </div>
          </div>
          <Footer/>
        </div>
      );
    } else {
      return (
          <div>
            <Header/>
            <div className="bg-slate-200">
              <General cv={this.state.cv}/>
              <div>
                <Educational cv={this.state.cv}/>
                <Practical cv={this.state.cv}/>
              </div>
            </div>
            <Footer/>
          </div>
        );
    }
  }
}

export default App;
