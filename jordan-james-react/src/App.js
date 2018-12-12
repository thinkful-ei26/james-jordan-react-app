import React, { Component } from 'react';
import './App.css';
import image from './image-data';
 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Here's an image: 
        </header>
        <img src={image}/>
      </div>
    );
  }
}

export default App;
