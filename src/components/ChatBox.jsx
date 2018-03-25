import React from 'react';
import PropTypes from 'prop-types';
import { List, Input } from 'semantic-ui-react';

function ChatBox(props) {
  function getMessage(messages) {
    return messages.map(message => (typeof message === 'string' ? message : message.message));
  }

  return (
    <div className="chat-box">
      {/* <div className="chat-box__user-count">People in chat: {props.numUsers}</div> */}
      <div className="chat-box__messages">
        <List items={getMessage(props.messages)} celled />
      </div>
      <Input
        onChange={props.onMessageChange}
        onKeyDown={props.onMessageKeyDown}
        value={props.currentMessage}
      />
    </div>
  );
}

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])),
  onMessageChange: PropTypes.func,
  onMessageKeyDown: PropTypes.func,
  currentMessage: PropTypes.string,
};

ChatBox.defaultProps = {
  messages: [],
  onMessageChange: () => {},
  onMessageKeyDown: () => {},
  currentMessage: '',
};

export default ChatBox;
