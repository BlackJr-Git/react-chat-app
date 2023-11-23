
function Message({text,time}) {
    return (
        <div className="message">
            <p className="message-texte"> {text} </p>
            <p className="message-time"> {time} </p>
        </div>
    )
}

export default Message ;