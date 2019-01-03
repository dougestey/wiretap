import React from 'react';
import {
  Text,
  View
} from 'react-desktop/windows';

import Journal from '../components/Journal';
import Screen from '../components/Screen';

class JournalView extends Screen {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <div className="JournalView">
        <View
          padding={this.props.padding}
          layout="vertical"
        >
          <Text
            color={this.props.color}
          >
            Journal Entries
          </Text>

          <Journal />
        </View>
      </div>
    )
  }

}

export default JournalView;
