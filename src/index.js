import React from 'react';
import ReactDOM from 'react-dom';
import Socket from 'socket.io-client';

const socket = io();

class App extends React.Component {
  state = {
    message: '',
    received: []
  }

  componentDidMount() {
    // this.socket = Socket();

    socket.on('new message', (message) => {
      console.log(message);

      this.setState((prevState) => ({
        received: prevState.received.concat(message)
      }))
    });

    socket.emit('new message', 'hihihiHIHI11');
  }

  onChange = (e) => {
    this.setState({
      message: e.target.value
    })
  };

  renderMessages(messages) {
    return messages.length > 0 ? messages.map((message, i) => <div key={i}>{message.message}</div>) : null
  }

  onKeyDown = (e) => {
    if ((e.key === 'Enter') && (e.target.value !== '')) {
      this.setState((prevState) => {
        console.log(prevState.message);
        socket.emit('new message', prevState.message);
        return {
          message: ''
        }
      })
    }
  }

  render() {
    return (
      <div>
        Chat {this.renderMessages(this.state.received)}
        <div>
          <input type="text" onChange={this.onChange} onKeyDown={this.onKeyDown} value={this.state.message}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
