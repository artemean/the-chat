import React from 'react';

function renderMessages(messages) {
  return messages.map((message, i) => {
    const text = typeof message === 'string' ? message : message.message;
    return <div className="chat-box__message" key={i}>{text}</div>
  })
}

function ChatBox(props) {
  return (
    <div className="chat-box">
      {/*<div className="chat-box__user-count">People in chat: {props.numUsers}</div>*/}
      <div className="chat-box__messages">
        {renderMessages(props.messages)}
      </div>
      <input
        type="text"
        onChange={props.onMessageChange}
        onKeyDown={props.onMessageKeyDown}
        value={props.currentMessage}
      />
    </div>
  )
}

export default ChatBox;
