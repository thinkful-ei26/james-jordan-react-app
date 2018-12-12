import React from 'react';

export default function Form(props){
return <form> 
    <input type='text' placeholder='Your name here'/>
    <input type='text' placeholder='Your comment here'/>
    <button type='submit' onClick={(name) => {name.preventDefault(); props.onSubmit(name)}}>Submit</button>
</form>    
}