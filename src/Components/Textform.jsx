import React, { useState } from 'react'

export default function Textform(props) {
  const convertUppercase = () => {
    // console.log('button clicked' + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    // console.log('edit')
    // console.log(text) 
    
  }
  const convertLowercase = () => {
    // console.log('button clicked' + text);
    let newtext = text.toLowerCase();
    setText(newtext)
    // console.log('edit')
    // console.log(text)
    
  }
  const onChangehandle = (event) => {
    setText(event.target.value)
    console.log('hyyyyy')
  }
  const [text, setText] = useState('');
  // setText('yuaglfreuilgraieulg');
  return (
    <>
      {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<div style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3 container" >
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={onChangehandle}  style={{backgroundColor: props.mode==='light'?'white':'#a3a3a3',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="5 "></textarea>
        <button className="  my-4" onClick={convertUppercase}> convert to uppercase</button>
        <button className="  my-4 m-2" onClick={convertLowercase}> convert to lowercase</button>
      </div>
      <div className='container'>
        <h1>your text summary</h1>
        <p>{text.split(`/|s+/`).filter((element)=>{return element.length!==0}).length}word and {text.length} character</p>
        <p>{text.length > 0?0.008 * text.split(" ").length:0} minutes to read</p>
        <h2>preview</h2>
        <p>{text.length > 0?text:'entre the text to preview'}</p>
      </div>
      </div>
    </>
  )
}
