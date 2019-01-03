import React, { Component } from 'react';
import {
  Text,
} from 'react-desktop/windows';

import '../styles/Message.css';

class Message extends Component {
  render() {
    let content = this.props.data;
    
    if (!content)
      return;

    return (
      <div className="Message">
        {content.timestamp} &nbsp;

        {content.Message ? content.Message : ''}
      </div>
    )
  }
}

export default Message;
