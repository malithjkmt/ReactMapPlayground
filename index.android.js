import Map from './Map';

import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  View
} from 'react-native';

class MyApp extends Component {

  render() {
    return (
      <Map />
    );
  }
}


AppRegistry.registerComponent('MyApp', () => MyApp);