import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(0)
    };

    Animated.timing(
      this.state.larAnimada,
      {
        toValue: 100,
        duration: 7000
      }
    ).start();
  }

  render() {

    let porcentagem = this.state.larAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    });

    return (
      <View style={styles.container}>

        <Animated.View style={{
          backgroundColor: 'blue',
          width: porcentagem,
          height: 25
        }}>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});