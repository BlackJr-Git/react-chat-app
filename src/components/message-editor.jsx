
import MessageEditorInput from "./message-editor-input";
import SendMessageButton from "./send-message-button";

function MessageEditor({handleClick}) {
    return (
        <div className="message-editor">
            <MessageEditorInput />
            <SendMessageButton handleClick={handleClick} />
        </div>
    )
}

export default MessageEditor ;