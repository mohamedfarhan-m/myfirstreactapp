import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase wwas clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case!","success")
    }
    const handleloClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case!","success")
    }
    const handleclClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Text has been Cleared!","success")
    }
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copird to Clipboard!","success")
    }
    
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    //set text is a function which can be used to write any logic
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}> 
        <h1 >{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}}
         id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclClick}>Cleartext</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copytext</button>
    </div>
    <div className="container my-3"style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length}Minutes  is the Average time a human takes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the Text to Preview"}</p>
        </div>
        </>
  )
}
