import React, { Component } from 'react';
import './App.css';
import Image from './image';
import Button from './button';
import data from './image-data';
import Header from './header';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      number: 0
    };
  }

  handleButtonClick(){
    console.log('hello i have been clicked!!!')
  }

  render() {
    return (
      <div className="App">
      
    {/* state will be:
      number of image selected
  */}

  {/* create a method for onClick to add or minus 1 (from image number) */}
      <Header />
      <Image image={data[this.state.number]}/>

      <div>
      <Button which={'prev'} onClick={() => this.handleButtonClick()}/>
      <Button which={'next'} onClick={() => this.handleButtonClick()}/>
      </div>
      </div>
    );
  }
}

export default App;
