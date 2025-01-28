import Btns from "./Btns";
import Summary from "./Summary";
import { useState, useRef } from "react";
import styles from "./TextArea.module.css";
function TextArea({alertMethod}) {
  const defaultFontSize = 16;
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(defaultFontSize);
 

  const onClickEnlarge = () => {
    setFontSize(fontSize > 30 ? fontSize : fontSize + 1);
  }

  const onClickShrink = () => {
    setFontSize(fontSize < 10 ? fontSize : fontSize - 1);
  }

  const onChangeHandler = (event) => {
    setText(event.target.value);
  }

  const onClickUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  const onClickLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  }

  const onClickTrim = () => {
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  }

  const onClickCapitalize = () => {
    const newText = text.replace(/\b\w/g, char => char.toUpperCase());
    setText(newText);
  }

  const onClickClear = () => {
    setText("");
  }

  const [btnText, setBtnText] = useState("Copy ⧉");
  const [timeoutId, setTimeoutId] = useState(null);


  const textareaRef = useRef(null);

  const onClickCopyBtn = () => {
    // Clear any previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Access the textarea using the ref and select its content
    textareaRef.current.select(); // Select the text in the textarea
    navigator.clipboard.writeText(textareaRef.current.value) // Get the value of the textarea and copy it to clipboard
    .then(() => {
      // After successful copy, change the button text
      const newTimeoutId = setTimeout(() => {
        setBtnText("Copied ✅");
        alertMethod("Copied to Clipboard","success");

        // Reset the button text back to "Copy" after another 1000ms
        const resetTimeoutId = setTimeout(() => {
          setBtnText("Copy ⧉");
        }, 2000);

        setTimeoutId(resetTimeoutId);
      }, 200);

      setTimeoutId(newTimeoutId);
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
};
  return <>
  <div className={styles.customForm}>
  <h2>Enter Text to Use Text Utilities </h2>
<div className="form-floating">
  <textarea ref={textareaRef} style={{height: "250px", fontSize:`${fontSize}px`}} className="form-control" value={text} onChange={onChangeHandler}></textarea>
  
  {text.length > 0 && <button className={styles.btn} onClick={onClickCopyBtn}>{btnText}</button>}
  <label htmlFor="floatingTextarea2">Your Text Here</label>
  
  <Btns text={text} handleUC={onClickUpperCase} handleLC={onClickLowerCase} handleTrim={onClickTrim} handleCapitalize={onClickCapitalize} handleTextEnlarge={onClickEnlarge} handleTextShrink={onClickShrink} handleClear={onClickClear} alertMethod={alertMethod}></Btns>

  
  <Summary text={text}></Summary>
</div>
</div>
  </>
}

export default TextArea;