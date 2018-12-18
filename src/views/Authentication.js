import React from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-desktop/windows';

import Screen from '../components/Screen';

class AuthenticationView extends Screen {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <div className="AuthenticationView">
        <View
          padding={this.props.padding}
          layout="vertical"
        >
          <Text
            color={this.props.color}
            marginBottom="2rem"
          >
            Cipher is capable of uploading your saved journal entries to Inara as logbooks.<br />
            To enable this functionality, you must supply your Inara API key.
          </Text>

          <TextInput
            ref="input"
            label="Inara API Key"
            placeholder="Inara API Key"
            onChange={this.handleChange}
            width="15rem"
          />
        </View>
      </div>
    )
  }

}

export default AuthenticationView;
