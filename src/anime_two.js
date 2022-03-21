import React, {useEffect, useRef} from 'react';
import {Button, StyleSheet, Text, View, Animated, Easing} from 'react-native';
import {interpolate} from 'react-native-reanimated';

const Anim_two = () => {
  const redS = useRef(new Animated.ValueXY()).current;
  const blueS = useRef(new Animated.Value(1)).current;

  const runAnim = () => {
    Animated.parallel([
      Animated.spring(redS, {
        toValue: {x: 200, y: 300},
      }),
      Animated.timing(blueS, {
        toValue: 0,
      }),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <Button title="Trigger ANimation" onPress={runAnim} />
      <Animated.View style={redS.getLayout()}>
        <View style={styles.square}>
          <Text>Anime One</Text>
        </View>
      </Animated.View>
      <Animated.View style={{opacity: blueS}}>
        <View style={styles.square_two}>
          <Text>Square 2</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  square_two: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Anim_two;
