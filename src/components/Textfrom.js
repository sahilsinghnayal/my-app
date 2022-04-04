// import React from "react";
import React, { useState } from 'react';


export default function Textfrom(props) {
  const uppercasebtn=()=>{
    // console.log("i am presses"+text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  const lowercasebtn=()=>{
    // console.log("i am presses"+text);
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleonchange=(event)=>{
    // console.log("on change");
    setText(event.target.value);  //onchange use kiya h jb humchange krein tb hoga
    //event.target.value use kiya changes krene krke liye .  jo user anter krega vo setText use update krdega 
  }
  const [text, setText] = useState(`enter text here`);
  return (<> 
  
  <div>    
   <h2>{props.head}</h2>
<div className="mb-3">
  <textarea className="form-control" id="mybox"  value={text} onChange={handleonchange} rows="12"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={uppercasebtn}  >Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={lowercasebtn}  >Convert to Lowercase</button>
</div>
 <div className="container my-4">
   <h2>Your Text Summary</h2>
   <p>{text.split(" ").length} words and {text.length} character</p>
   <h2>Preview</h2>
   <p>{text}</p>
 </div>
</>
  )
}
