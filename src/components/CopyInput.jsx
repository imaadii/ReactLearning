import { useState, useEffect } from 'react';
import Popup from './Popup';




const CopyInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);


    const handleCopy = () => {
      navigator.clipboard.writeText(inputValue).then(() => {
        console.log("Before", copied)
        setCopied(true);
        console.log("After", copied)
        
        setTimeout(() => {
            setCopied(false)
            console.log("After Timeout", copied)
        }, 5000);
      })
    };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      <button onClick={handleCopy}>Copy</button>

      <Popup copied={copied} />
    </div>
  );
};

export default CopyInput;