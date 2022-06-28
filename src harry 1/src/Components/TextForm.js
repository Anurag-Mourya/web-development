//Export in App2.js..

import React from "react";

//to use state in function 
import { useState } from "react";

export default function TextForm(props) {
    // text = variable which is updated by setText Method. And inside the useState the value is default...
    const[text, setText] = useState('Enter the text here');


    const handalOnChange = (event) =>{
        // console.log('Tex is changed');

        //this method is given to power manipulate the text area content to type or delete something...
        setText(event.target.value);
    }

    const handalUpclick = () =>{
        // console.log('btn is clik and tex is here..' + text);
        let toUpperCase = text.toUpperCase();
        setText(toUpperCase);
    }

    const handalLoclick = () =>{
        let toLoweCase = text.toLowerCase();
        setText(toLoweCase);
    }
   
    const handalClearclick = () =>{
        setText('');
    }

    const handalCopyText = () =>{
        
        let text = document.getElementById('myBox');//Highliting the textarea..
        text.select();//Highliting the textarea..

        navigator.clipboard.writeText(text);
    }

    const handalRemoveSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
    }

    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">  <h1>{props.heading}</h1></label>

                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handalOnChange}></textarea>
                </div>

                <div className="btn btn-outline-primary btn-block mx-3" onClick={handalUpclick}>Convert to UpperCase</div>

                <div className="btn btn-outline-primary btn-block mx-3" onClick={handalLoclick}>Convert to LowerCase</div>

                <div className="btn btn-outline-primary btn-block mx-3" onClick={handalClearclick}>Clear Text</div>

                <div className="btn btn-outline-primary btn-block mx-3" onClick={handalCopyText}>Copy Text</div>

                <div className="btn btn-outline-primary btn-large mx-3" onClick={handalRemoveSpace}>Remove Extra Spaces</div>

            </div>
            <div className="container my-3">
                <h2>Your text summay</h2>
                <p>{ text.split(' ').length } words and {text.length} characters.</p>

                {/* 125 words to read in 1 minute so 0.008m to read a word  */}
                <p> { 0.008 * text.split(' ').length } Minutes to read</p>
                <h1>Preview</h1>
                 <p> {text}  </p> 
            </div>
        </div>
    )
}