import React, { Component } from 'react';
import './App.css';
import Image from './image';
import Button from './button';
import data from './image-data';
import Header from './header';
import Subheader from './subheader';
import Form from './form';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      number: 0,
      min: 0,
      max: data.length,
      name: ''
    };
  }

  handleFormSubmit(name) {
    console.log(name)
    
  }

  handleButtonClick(increment){
      //1 test if min has been reached
       if((this.state.number === this.state.min) && increment=== -1){
        this.setState({
          number: this.state.max -1
        })
       }

      //2 test if it's reached max and then go back to the min && vice versa
      else if((this.state.number === this.state.max -1) && increment === 1){
        this.setState({
          number: 0
        })
      }

      //3 otherwise set new state
      else {
        this.setState({number : this.state.number + increment});
      }
  }

  render() {
    return (
      <div className="App">
      
    {/* state will be:
      number of image selected
  */}

  {/* create a method for onClick to add or minus 1 (from image number) */}
      <Header />
      <Image image={data[this.state.number].url}/>
      <Subheader caption={data[this.state.number].caption}/>
      <Subheader current={this.state.number} total={data.length}/>
      <div>
      <Button which={'prev'} value={-1} onClick={(e) => this.handleButtonClick(e)}/>
      <Button which={'next'} value={1} onClick={(e) => this.handleButtonClick(e)}/>
      </div>
      <Form onSubmit={(e) => this.handleFormSubmit(e)}/>
      </div>
    );
  }
}

export default App;
