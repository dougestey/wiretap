import React from 'react';
import {
  Text,
  View
} from 'react-desktop/windows';

import Screen from '../components/Screen';

class AboutView extends Screen {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <div className="AboutView">
        <View
          padding={this.props.padding}
          layout="vertical"
        >
          <Text
            color={this.props.color}
          >
            Cipher v1.0.0<br />
            Created by CMDR Chad VanGaalen
          </Text>
        </View>
      </div>
    )
  }

}

export default AboutView;
