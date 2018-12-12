import React, { Component } from 'react';
import './App.css';
import Image from './image';
import Button from './button';

class App extends Component {
  render() {
    return (
      <div className="App">
        Here's an image: 
       
      <Image />
      <div>
      <Button which={'prev'}/>
      <Button which={'next'}/>
      </div>
      </div>
    );
  }
}

export default App;
