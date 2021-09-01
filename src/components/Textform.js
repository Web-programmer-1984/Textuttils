import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    if(text !== '')
    {
      props.showAlert("Converted to uppercase succesfully", "Success")
      let newText = text.toUpperCase();
      setText(newText);
    }
  };
  const handleComas = () => {
    let newText = text.split(',').join('\n');
    setText(newText)
  }
  const handleExtraSpaces = () =>{
    props.showAlert("Extra spaces removed", "Success")
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleCopy = () =>
  {
    props.showAlert("copied to clipboard", "Success")
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().collapseToEnd()
  }
  const handleOnChange = (event) => {
    console.log("Enter text here");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    props.showAlert("Converted to lowercase succesfully", "Success")
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    props.showAlert("   cleared succesfully", "Success")
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <label className="form-label">{props.heading}</label>
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            rows="20"
            value={text}
            style={{backgroundColor: props.mode==='dark'?'#13466e':"white",color: props.mode==='dark'? 'white': '#042743'}}
          ></textarea>
          <br />
          <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
            Convert to upprcase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
            Convert to lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleComas}>
            Remove
          </button>
        </div>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark': 'light'} container my-3`}>
        <h2>Your text summary</h2>
        <p>
        {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
        <h2>preview</h2>
        <p>{text===''?'nothing to preview':text}</p>
      </div>
    </>
  );
}
