import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function Summary({text}) {

  const [showPreview, setShowPreview] = useState(false);

  const checkboxChangeHandler = () => {
    setShowPreview(!showPreview);
  }
  return <div>

   {text.length > 0 && (<h5 style={{backgroundColor:"rgb(13, 110, 253)",color:"white",padding:"6px",width:text.length > 0 && text.length < 100 ? "26%" : text.length >= 100 && text.length <= 9999 ? "30%" : text.length > 9999 && text.length <= 99999 ? "34%" : "40%"}}>Words: {text.split(" ").length} Chracters: {text.length}</h5>)}

   <h3>Preview {showPreview ? <FaEye /> : <FaEyeSlash />  } <input type="checkbox" checked={showPreview} onChange={checkboxChangeHandler}/></h3>

    {showPreview && text.length > 0 ? <p style={{border:"1px solid silver",padding:"20px",marginTop:"20px",overflowWrap:"break-word"}}>{text}</p> : !showPreview ? null : <p><em>Nothing to preview</em></p>} 
  </div>
}
export default Summary;