
import MessageEditorInput from "./message-editor-input";
import SendMessageButton from "./send-message-button";

function MessageEditor({handleClick}) {
    return (
        <form className="message-editor">
            <MessageEditorInput />
            <SendMessageButton handleClick={handleClick} />
        </form>
    )
}

export default MessageEditor ;