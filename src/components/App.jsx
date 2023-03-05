import { Component } from 'react';

import Serchbar from './Searchbar/Serchbar';
import ImageGllery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    text: '',
  };
  hadleFormsubmit = text => {
    this.setState({ text });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',

          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Serchbar onSubmit={this.hadleFormsubmit} />
        <ImageGllery text={this.state.text} />
      </div>
    );
  }
}
