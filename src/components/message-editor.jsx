import MessageEditorInput from "./message-editor-input";
import SendMessageButton from "./send-message-button";

function  MessageEditor({ handleClick , getMessage  }) {
  return (
    <form className="message-editor">
      <MessageEditorInput getMessage={getMessage} />
      <SendMessageButton handleClick={handleClick} />
    </form>
  );
}

export default MessageEditor ;

