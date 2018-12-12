import React from 'react';

export default function Form(props){
return <form onSubmit={(name) => {name.preventDefault(); props.onSubmit(name)}}> 
    <input type='text' placeholder='Your name here' onChange={(e)=>props.uservalue(e.target.value)}/>
    <input type='text' placeholder='Your comment here' onChange={(e)=>props.usercomment(e.target.value)}/>
    <button type='submit'>Submit</button>
</form>    
}