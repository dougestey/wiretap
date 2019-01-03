import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  MasterDetailsView,
  MasterDetailsViewItem,
  MasterDetailsViewItemMaster,
  MasterDetailsViewItemDetails,
  TitleBar
} from 'react-desktop/windows';

import AboutView from './views/About';
import AuthenticationView from './views/Authentication';
import JournalView from './views/Journal';

class App extends Component {
  static defaultProps = {
    color: '#FF6600',
    background: '#000000',
    theme: 'dark'
  };

  constructor(props) {
    super(props);
    this.state = { isMaximized: true };
  }

  close = () => console.log('close');
  minimize = () => console.log('minimize');
  toggleMaximize = () => this.setState({ isMaximized: !this.state.isMaximized });

  render() {
    return (
      <div className="App">
        <TitleBar
          title="Wiretap"
          controls
          isMaximized={this.state.isMaximized}
          theme={this.props.theme}
          background={this.props.background}
          onCloseClick={this.close}
          onMinimizeClick={this.minimize}
          onMaximizeClick={this.toggleMaximize}
          onRestoreDownClick={this.toggleMaximize}
        />

        <MasterDetailsView color={this.props.color} theme={this.props.theme}>
          {this.renderItem('Journal', JournalView)}
          {this.renderItem('Authentication', AuthenticationView)}
          {this.renderItem('About', AboutView)}
        </MasterDetailsView>
      </div>
    );
  }

  renderItem(master, ChildView) {
    return (
      <MasterDetailsViewItem theme={this.props.theme}>
        <MasterDetailsViewItemMaster push>
          {master}
        </MasterDetailsViewItemMaster>

        <MasterDetailsViewItemDetails background={this.props.background}>
          <ChildView />
        </MasterDetailsViewItemDetails>
      </MasterDetailsViewItem>
    );
  }
}

export default App;
