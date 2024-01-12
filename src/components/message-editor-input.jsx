import { useState } from "react";

function MessageEditorInput({getMessage} ) {
  // const [message, setMessage] = useState("");

  return (
    <div className="message-input">
      < input 
      // value={} 
      
      // onChange={(e) => {
      //   setMessage(e.target.value)
      // } } 

      onChange={getMessage} 
        
        type="text" name="message" placeholder="Message" />
    </div>
  );
}

export default MessageEditorInput ; 

