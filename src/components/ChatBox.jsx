import React from 'react';
import PropTypes from 'prop-types';

function ChatBox(props) {
  function renderMessages(messages) {
    return messages.map((message, i) => {
      console.log(message);
      const text = typeof message === 'string' ? message : message.message;
      return <div className="chat-box__message" key={i}>{text}</div>;
    });
  }

  return (
    <div className="chat-box">
      {/* <div className="chat-box__user-count">People in chat: {props.numUsers}</div> */}
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
  );
}

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
  onMessageChange: PropTypes.func,
  onMessageKeyDown: PropTypes.func,
  currentMessage: PropTypes.func,
};

ChatBox.defaultProps = {
  messages: [],
  onMessageChange: () => {},
  onMessageKeyDown: () => {},
  currentMessage: '',
};

export default ChatBox;
