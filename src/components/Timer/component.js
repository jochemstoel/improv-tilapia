import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { KeepAwake } from 'expo';
import { Button } from 'react-native-paper';

class Timer extends Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState((state) => ({ seconds: state.seconds + 1 }));
  }

  render() {
    return (
      <View className={styles.timeContainer}>
        <KeepAwake />
        <Text className={styles.time}>{this.state.seconds}</Text>
        <Button mode="contained">Test</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {},
});

export default Timer;
