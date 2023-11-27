import { useState } from "react";
import Message from "./message";
// import addMessage from "../utils/addMessage.jsx"

function SendMessageButton({ handleClick }) {
  return (
    <div className="send-button">
      <button onClick={handleClick}>
        Envoyer <ion-icon name="send-outline"></ion-icon>{" "}
      </button>
    </div>
  );
}

export default SendMessageButton;
