import { useState } from "react";

function MessageEditorInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="message-input">
      <input type="text" name="message" placeholder="Message" />
    </div>
  );
}

export default MessageEditorInput;
