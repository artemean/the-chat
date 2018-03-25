import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import Socket from 'socket.io-client';

import LoginBox from './components/LoginBox'
import ChatBox from './components/ChatBox'

const socket = Socket();

class App extends React.Component {
  state = {
    username: '',
    currentMessage: '',
    connected: false,
    messages: [],
    numUsers: 0
  }

  componentDidMount() {
    socket.on('new message', (message) => {
      this.setState((prevState) => ({
        messages: prevState.messages.concat(message)
      }))
    });

    socket.on('user joined', (data) => {
      this.addMessage(`${data.username} joined!`);
      this.addParticipantsMessage(data);
    });

    socket.on('login', (data) => {
      this.setState({
        connected: true
      });
      // Display the welcome message
      let message = "Welcome to THE Chat – ";
      this.addMessage(message)
      this.addParticipantsMessage(data);
    });
  }

  onLoginChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onLoginKeyDown = (event) => {
    if ((event.key === 'Enter') && (event.target.value !== '')) {
      socket.emit('add user', this.state.username);
    }
  }

  onClearLogin = (event) => {
    this.setState({username: ''});
  }

  onMessageChange = (event) => {
    this.setState({
      currentMessage: event.target.value
    })
  }

  onMessageKeyDown = (event) => {
    if ((event.key === 'Enter') && (event.target.value !== '')) {
      this.setState(prevState => {
        socket.emit('new message', prevState.currentMessage);
        return {
          messages: prevState.messages.concat(prevState.currentMessage),
          currentMessage: ''
        }
      })
    }
  }

  addMessage(message) {
    this.setState((prevState) => ({
      messages: prevState.messages.concat(message)
    }))
  }

  addParticipantsMessage(data) {
    let message = '';
    if (data.numUsers === 1) {
      message += "there's 1 participant";
    } else {
      message += "there are " + data.numUsers + " participants";
    }
    this.addMessage(message);
  }

  render() {
    return (
      <Container className="the-chat">
        {this.state.connected ?
          <ChatBox
            messages={this.state.messages}
            onMessageChange={this.onMessageChange}
            onMessageKeyDown={this.onMessageKeyDown}
            currentMessage={this.state.currentMessage}
            numUsers={this.state.numUsers}
          /> :
          <LoginBox
            onChange={this.onLoginChange}
            onKeyDown={this.onLoginKeyDown}
            clearable
            onClearLogin={this.onClearLogin}
            value={this.state.username}
          />}
      </Container>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
