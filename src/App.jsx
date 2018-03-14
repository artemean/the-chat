import React from 'react';
import Socket from 'socket.io-client';

class App extends React.Component {
  state = {
    message: '',
    received: []
  }
  componentDidMount() {
    this.socket = Socket('http://localhost:3030')

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
  }

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
          <input type="text" onChange={this.onChange} onKeyDown={this.onKeyDown} value={this.state.message} />
        </div>
      </div>
    )
  }
}

export default App;