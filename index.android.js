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
      <View style = {styles.container}>
      <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('MyApp', () => MyApp);