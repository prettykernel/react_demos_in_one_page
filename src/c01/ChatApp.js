import React, { Component } from 'react'
import withTimer from "../c06/withTimer"
import PropTypes from "prop-types"


const MessageList = ({ messages }) => <ul>
  {messages.map((msg, i) => <li key={i}>{msg}</li>)}
</ul>


export class ChatApp extends Component {
  static propTypes = {
    time: PropTypes.object.isRequired,
  }

  state = {
    messages: [],
    inputMsg: "",
  }

  handleInput = event => {
    this.setState({ inputMsg: event.target.value })
  }

  handleSend = () => {
    const text = this.state.inputMsg
    if (text) {
      this.setState({
        messages: [...this.state.messages, text],
        inputMsg: "",
      })
    }
  }

  render() {
    return <>
        <MessageList messages={this.state.messages} />
        <input value={this.state.inputMsg} onChange={this.handleInput} />
        <button onClick={this.handleSend}>Send</button>
        <h2>{this.props.time.toLocaleString()}</h2>
    </>
  }
}

export default withTimer(ChatApp)

