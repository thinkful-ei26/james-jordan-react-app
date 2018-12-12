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
      number: 0,
      min: 0,
      max: data.length
    };
  }

  handleButtonClick(increment){
    this.setState(()=>{
      //1 test if min or max have been reached
       if(((this.state.number === this.state.min) && increment=== -1) || ((this.state.number === this.state.max -1)&& increment === 1)){
        console.log("boundary reached");
       }
      //2 otherwise set new state
      else {
        this.setState({number : this.state.number + increment});
      }
    })
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
      <Button which={'prev'} value={-1} onClick={(e) => this.handleButtonClick(e)}/>
      <Button which={'next'} value={1} onClick={(e) => this.handleButtonClick(e)}/>
      </div>
      </div>
    );
  }
}

export default App;
