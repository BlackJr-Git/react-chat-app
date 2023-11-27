import Message from "./message";
import { useState } from "react";
import SendMessageButton from "./send-message-button";

function MessageView({ components }) {
  return <div className="message-view">{components}</div>;
}

export default MessageView;
