
import React ,{useState} from 'react'

 //state


export default function Textform(props) {
  let [text,setText]=useState("")
    const handleup=()=>{
        console.log("this is new number!");
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const add=(event)=>{
        console.log("here another!");
        setText(event.target.value);
    }
    const clear=()=>{
        setText("");
        props.showalert("  The text has been cleared","success");
    }
    const lower=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
  
  return (
    <>
  <div className="container">
   <h3  style={{color:props.mode==='dark'?'white':'black'}}>Enter text here</h3>
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'white':'light'}} rows="7" value={text} onChange={add}></textarea>
    <button className="btn btn-primary m-1" onClick={handleup}>Upper-Text</button>
  <button className="btn btn-primary m-3" onClick={clear}>Clear</button>
  <button className="btn btn-primary m-3" onClick={lower}>Lower Case</button>

  <h5 style={{color:props.mode==='dark'?'white':'black'}}>Character:{text.length}</h5>
  <h5 style={{color:props.mode==='dark'?'white':'black'}}>Words: {text.split(" ").length-1}</h5>
  <h5 style={{color:props.mode==='dark'?'white':'black'}}>Can be Read in {0.008 * text.split(" ").length} seconds</h5><br /><br />
   <h3 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h3>
    <p>{text}</p>
  </div>
 
  </>
  )
}
