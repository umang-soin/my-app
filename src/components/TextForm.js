import React, {useSate, useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper Case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","primary")
    }

    const handleLoClick = () => {
      // console.log("Upper Case was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText);
  }

//   const handleCapEachWordClick = () => {
//     let newTextArr = text.split(" ");
    
//    for(let i = 0; i<newTextArr.length; i++){
//     let firstChar = newTextArr[i][0];
//     let firstCharCap = firstChar.toUpperCase();
//     newTextArr[i][0] = firstCharCap;
//    }

//     setText(newTextArr.join(" "));
// }

const handleCopyClick = () => {     
  console.log("Copying Text");
  let text  = document.getElementById('myBox');
  text.select();
  // text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);  
}

const handleExtraSpacesClick = () => {     
  let textArr = text.split(/[ ]+/);
  let newText = textArr.join(" ");
  setText(newText);
}

  const handleClearClick = () => {     
      let newText = '';
      setText(newText);
  }

    const handleOnChange = (event) => {
        // console.log("On Change was clicked");
        setText(event.target.value);
       
    }

    const [text, setText] = useState("");

    // text = "Updated text";  // Wrong way to change text
    // setText("new text");

  return (  
    <>
    <div className="container">  
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='light'?'grey':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary m-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary m-2" onClick={handleCapEachWordClick}>Capitalize Each Word</button> */}
        <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
        </div>
    </div>
    <div className="container">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} charachters</p>
      <p> Reading time {0.008*text.split(" ").length}</p>
      <h2>Preview</h2>
     <p>{text.length > 0 ? text : 'Enter your text in textbox to Preview'}</p> 
    </div>
    </>
  )
}
