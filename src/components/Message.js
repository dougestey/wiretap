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

    // let content = message.Content,
    //     preview;

    // preview = content.truncate(255);

    return (
      <div className="Message">
        <span className="Message-timestamp">
          {content.timestamp}
        </span>

        <span className="Message-content">
          {content.Message ? content.Message : ''}
        </span>
      </div>
    )
  }
}

export default Message;
