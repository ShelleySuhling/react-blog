import React, { Component } from 'react';
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          <Navigation/>
      </div>
    );
  }
}

export default App;