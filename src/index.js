import React from 'react';
import ReactDOM from 'react-dom';
import Socket from 'socket.io-client';

class App extends React.Component {
  state = {
    message: '',
    received: []
  }

  componentDidMount() {
    // this.socket = Socket();
    this.socket = io();

    this.socket.on('new message', (message) => {
      console.log(message);

      this.setState((prevState) => ({
        received: prevState.received.concat(message)
      }))
    })
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

        this.socket.emit('new message', prevState.message);
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
