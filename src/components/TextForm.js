import React, { useState } from 'react';


export default function TextForm(props) {
  const handleupclick = ()=>{
    // console.log("uppercase was clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleloclick = ()=>{
    // console.log("uppercase was clicked"+text);
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  function handleOnChange  (event) {
    // console.log("on change");
    setText(event.target.value);
  }
  const [text,setText]=useState('enter text here ');
  return (
    <>
    <div className='="container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1"onClick={handleupclick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2"onClick={handleloclick}>convert to lowercase</button>
    
    </div>
    <div className="container my-2 ">
      <h2>your text summary </h2>
      <p> {text.split(" ").length} words and  {text.length} characterrs</p>
      <p> {0.008 * text.split(" ").length}minutes read</p>
      <h2>Preview</h2>
      <p>{text} </p>
    </div>
    </>
  );
}