function Message({ text, time, user }) {
  if (user === true) {
    return (
      <div className="message">
        <p className="message-texte"> {text} </p>
        <p className="message-time"> {time} </p>
      </div>
    );
  } else {
    return (
      <div className="answer-message">
        <p className="message-texte"> {text} </p>
        <p className="message-time"> {time} </p>
      </div>
    );
  }
}

export default Message;
