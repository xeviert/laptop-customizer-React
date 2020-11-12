import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import FeatureList from './Feature/FeatureList'
import Cart from './Checkout/Cart';
import FEATURES from './StoreFEATURES';


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <Header />
        <main>
          <FeatureList
          features = {FEATURES}
          selected = {selected}
          updateFeature = {(feature, newValue) =>
            this.updateFeature(feature, newValue)
          }
          />
          <Cart selected = {selected} />
        </main>
      </div>
    );
  }
}

export default App;
