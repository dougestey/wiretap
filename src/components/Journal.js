import React, { Component } from 'react';
import {
  Text,
} from 'react-desktop/windows';

import db from '../db';
import Message from './Message';

class Journal extends Component {
  // constructor(props) {
  //   super(props);

  //   this.refWebSocket = undefined;
  // }

  componentDidMount() {
    db.table('messages')
      .toArray()
      .then((messages) => {
        this.setState({ messages });
    });

    this.connection = new WebSocket('ws://localhost:31337');
    this.connection.onmessage = this.onMessage.bind(this);
    this.connection.onopen = this.onOpen.bind(this);
  }

  onOpen() {
    const type = 'subscribe';
    const payload = ['ReceiveText', 'SendText'];

    this.connection.send(JSON.stringify({ type, payload }));
  }

  onMessage(payload) {
    let result = JSON.parse(payload.data);
    
    let { payload: entry } = result;

    if ((entry.Channel && entry.Channel !== 'npc') && entry.Message) {
      db.table('messages')
        .add(entry)
        .then((id) => {
          const newList = [...this.state.messages, Object.assign({}, entry, { id })];

          this.setState({ messages: newList });
        });
    }

    this.setState(result);
  }

  render() {
    if (this.state) {
      let { commander, messages } = this.state;
      let entries = [];

      if (messages) {  
        messages.map((message) => {
          entries.push(
            <Message data={message} />
          )
        });
      }

      return (
        <div>
          <Text color="white">
            Connected: CMDR {commander}
          </Text>

          {entries}
        </div>
      )
    } else {
      return (
        <div>
          <Text color="white">
            No connection.
          </Text>
        </div>
      )
    }
  }
}

export default Journal;
