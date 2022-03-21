import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SuperText = props => {
  return (
    <Text {...props} style={[styles.superText, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  superText: {
    backgroundColor: 'blue',
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    padding: 10,
    width: '100%',
  },
});

export default SuperText;
