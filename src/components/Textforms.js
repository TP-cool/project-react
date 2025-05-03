import React, {useState} from 'react'



export default function Forms(props) {
    const handleUpClick = (event) => {
        event.preventDefault();
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);  
        props.showAlert("converted to uppercase", "success");  
    }
    const handleOnChange = (event) => {
         console.log("ON CHANGE");
         setText(event.target.value);
        }

        const handle = (event) => {
          event.preventDefault();
            let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
            setText(newText);
            props.showAlert("capitalized", "success");
       }
     const [text, setText]= useState("");
     
  return (<>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
      <form>
    <div className="mb-3">
        <h3>{props.heading}</h3>
      <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(17, 21, 31)':'white', color:props.mode==='dark'?'white':'black'} }  value={text} id="exampleInputEmail1" rows="6"/>
    </div>
    <button className="btn btn-primary mx-1"  onClick={handleUpClick} >convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handle}>click to capitalize</button>
  </form></div>


  <div className="container" style={{color:props.mode==='dark'?'white':'black'}} > 
    <h3>your text summery</h3>
    <p>{text.split(/\s+/).filter((element)=>{return element.length != 0}).length}  words, {text.length} Characters</p>
    <p>{0.002*text.split(" ").filter((element)=>{return element.length != 0}).length}minutes read</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"enter something in the box above to preview something"}</p>
   </div></>

  )
}

  


