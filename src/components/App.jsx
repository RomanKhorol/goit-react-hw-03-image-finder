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
      <div>
        <div
          style={{
            display: 'flex',
            borderRadius: '4px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            backgroundColor: 'blue',
            gap: '10px',
            alignItems: 'center',
            height: '65px',
            fontSize: 40,
            color: '#010101',
          }}
        >
          <Serchbar onSubmit={this.hadleFormsubmit} />
        </div>
        <div>
          <ImageGllery text={this.state.text} />
        </div>
      </div>
    );
  }
}
