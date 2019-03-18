import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { KeepAwake } from 'expo';
import { FAB } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import theme from '../App/paperTheme';

const FabIcon = ({ name }) => (
  <Ionicons style={styles.icon} name={name} size={28} color="white" />
);
const PlayIcon = () => <FabIcon name="md-play" />;
const PauseIcon = () => <FabIcon name="md-pause" />;

class Timer extends Component {
  state = {
    seconds: 0,
    isRunning: false,
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    // TODO: Save actual milliseconds instead of this short-term hack.
    this.setState(({ seconds, isRunning }) => ({
      seconds: seconds + (isRunning ? 1 : 0),
    }));
  }

  handleToggleTimer = () => {
    const { isRunning } = this.state;
    this.setState({ isRunning: !isRunning });
  };

  render() {
    const { isRunning } = this.state;

    return (
      <View style={styles.timeContainer}>
        <KeepAwake />
        <Text style={styles.time}>{this.state.seconds}</Text>
        <FAB
          key={`playPause_${isRunning}`}
          style={styles.button}
          icon={isRunning ? PauseIcon : PlayIcon}
          onPress={this.handleToggleTimer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {},
  button: {
    backgroundColor: theme.colors.primary,
  },
  icon: {
    // TODO: Figure out why the icon isn't centering.
    marginLeft: 4,
  },
});

export default Timer;
