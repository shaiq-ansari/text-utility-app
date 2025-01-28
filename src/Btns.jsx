import { LuCaseUpper } from "react-icons/lu";
import { LuCaseLower } from "react-icons/lu";
import { TbClearAll } from "react-icons/tb";
import { MdCleaningServices } from "react-icons/md";
import { MdOutlineTextDecrease } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { MdOutlineTextIncrease } from "react-icons/md";

function Btns({handleUC, handleLC,handleTrim,handleCapitalize, handleTextEnlarge, handleTextShrink, handleClear, alertMethod,text}) {
  return <div>
    <button onClick={() => {handleUC(); if(text.length > 0) { alertMethod("Text Changed to Upper Case","success"); 
    }
    }} className="btn btn-primary mx-1 my-4">Upper Case <LuCaseUpper color="black" size={20} />
    </button>


    <button onClick={() => {handleLC(); if(text.length > 0) {alertMethod("Text Changed to Lower Case","success");
    }
    }}className="btn btn-primary mx-1 my-4">Lower Case <LuCaseLower color="black" size={20}/></button>
    
    
    <button onClick={() => {handleTrim(); if (text.length > 0) {alertMethod("Text Trimmed","success")
    }
    }} className="btn btn-primary mx-1 my-4">Remove Spaces <MdCleaningServices color="black"/>
    </button>
    <button onClick={() => {handleCapitalize(); if(text.length > 0) {alertMethod("Text Capitalized","success")
    }
    }} className="btn btn-primary mx-1 my-4">Capitalize Words <RxLetterCaseCapitalize color="black" />
    </button>
    <button onClick={() => {handleTextEnlarge(); if(text.length > 0) {alertMethod("Text Enlarged","success")
    }
    }} className="btn btn-primary mx-1 my-4">Text Enlarge <MdOutlineTextIncrease color="black"/>
    </button>
    <button onClick={() => {handleTextShrink(); if(text.length > 0) {alertMethod("Text Shrunk","success")
    }
    }} className="btn btn-primary mx-1 my-4">Text Shrink <MdOutlineTextDecrease color="black"/>
    </button>
    <button onClick={() => {handleClear(); if(text.length > 0) {alertMethod("Text Cleared","danger")
    }
    }} className="btn btn-primary mx-1 my-4s">Clear Text <TbClearAll color="black"/>
    </button>
  </div>
}

export default Btns;