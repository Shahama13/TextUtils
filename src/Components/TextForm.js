import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("up was clicked"+text)
        let newTxt = text.toUpperCase();
        setText(newTxt)
        props.showAlert("Converted to upperCase", "success")
    }
    const handleLowClick = () => {
        let newTxt = text.toLowerCase();
        setText(newTxt)
        props.showAlert("Converted to lowerCase", "success")
    }
    const handleClear = () => {
        let newTxt = "";
        setText(newTxt)
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleSpaces = () => {
        // learn regex
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "))
        props.showAlert("Remove extra spaces", "success")
    }
    const handleOnChange = (event) => {
        // console.log("change was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    let a = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length;
    let b = 0.008 * a;
    // text = "wrong way to set text"
    // setText("right way");
    return (
        <>
            <div className='container'>
                <h4>{props.heading} </h4>
                <div className="mb-3">
                    <textarea onChange={handleOnChange} value={text} style={{
                        backgroundColor: props.mode === "light" ? "white" : "#252c58",
                        color: props.mode === "light" ? "black" : "white",
                    }} className="form-control" id="myBox" rows="7" ></textarea>
                </div>
                <button disabled={text.length === 0} onClick={handleUpClick} className="btn btn-primary my-1" > Convert To UpperCase</button>
                <button disabled={text.length === 0} onClick={handleLowClick} className="btn btn-primary my-1 mx-2" > Convert To LowerCase</button>
                <button disabled={text.length === 0} onClick={handleClear} className="btn btn-primary my-1" > Clear Text </button>
                <button disabled={text.length === 0} onClick={handleCopy} className="btn btn-primary my-1 mx-2" > Copy Text </button>
                <button disabled={text.length === 0} onClick={handleSpaces} className="btn btn-primary my-1" > Remove Extra Spaces </button>
            </div>
            <div className="container my-3">
                <h1 className='my-3'>your text summary</h1>
                <p>{a === 0 ? "0 word" : `${a} ${a === 1 ? "word" : "words"}`}, {text.length === 0 ? "0 character" : `${text.length} ${text.length === 1 ? "character" : "characters"}`}</p>
                <p>Estd. time to read {b === 0 ? "0 minute" : `${b} ${b < 2 ? "minute" : "minutes"}`} </p>
                <h3>Preview</h3>
                <p>{text.length === 0 ? "Nothing to Preview" : text}</p>
            </div>
        </>
    )
}
