import React, { Component } from 'react';
import './App.css';
import Image from './image';
import Button from './button';
import data from './image-data';
import Header from './header';
import Subheader from './subheader';
import Form from './form';
import FormRender from './form-render';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      number: 0,
      min: 0,
      max: data.length,
      name: '',
      comments: '',
      submittedName: [ {name: ''}, {name: ''},{name: ''},{name: ''},{name: ''},{name: ''}],
      submittedComment: [{comment: ''},{comment: ''},{comment: ''},{comment: ''},{comment: ''},{comment: ''} ]
    };
  }

  handleFormSubmit() {
    this.setState({}, ()=>{ this.state.submittedName[this.state.number].name = this.state.name });
    this.setState(()=>{ this.submittedComment[this.state.number].comment = this.state.comments });
  }
   //submittedName[this.state.number] : this.state.name
   //submittedComment: this.state.comments
  handleNameInput(username){
    this.setState({name: username})
  }

  handleCommentInput(comments){
    this.setState({comments: comments})
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
      
      {/* the component for form-render */}
      <FormRender name={this.state.submittedName[this.state.number].name} comment={this.state.submittedComment[this.state.number].comment}/>

      <div>
      <Button which={'prev'} value={-1} onClick={(e) => this.handleButtonClick(e)}/>
      <Button which={'next'} value={1} onClick={(e) => this.handleButtonClick(e)}/>
      </div>
      <Form onSubmit={(e) => this.handleFormSubmit(e)} uservalue={(e)=>this.handleNameInput(e)} usercomment={(e)=>this.handleCommentInput(e)}/>
      </div>
    );
  }
}

export default App;
