import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    props.showAlert("Converted to uppercase succesfully", "Success")
    let newText = text.toUpperCase();
    setText(newText);
  };
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
          ></textarea>
          <br />
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to upprcase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark': 'light'} container my-3`}>
        <h2>Your text summary</h2>
        <p>
          {text===''? '0':text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>preview</h2>
        <p>{text===''?'Enter your text to preview':text}</p>
      </div>
    </>
  );
}
