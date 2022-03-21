import React, {useEffect, useRef} from 'react';
import {Button, StyleSheet, Text, View, Animated, Easing} from 'react-native';
import {interpolate} from 'react-native-reanimated';

const Anim_one = () => {
  const MovEL = useRef(new Animated.ValueXY()).current;
  const movELTwo = useRef(new Animated.Value(1)).current;

  const runAnim = () => {
    Animated.timing(MovEL, {
      toValue: {x: 100, y: 300},
      duration: 2000,
      delay: 1000,
      easing: Easing.elastic(1),
    }).start();
  };

  const runTimingAnim = () => {
    Animated.timing(movELTwo, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Trigger ANimation" onPress={runTimingAnim} />
      <Animated.View
        style={{
          // opacity:movELTwo,
          transform: [
            {
              rotateX: movELTwo.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '180deg', '0deg'],
              }),
            },
          ],
          // left: movELTwo.interpolate({
          //   inputRange:[0,1],
          //   outputRange:[300,0]
          // })
        }}>
        {/* {left: MovEL.x, top: MovEL.y} */}
        <View style={styles.square}>
          <Animated.Text
            style={{
              fontSize: movELTwo.interpolate({
                inputRange: [0, 0.5, 0.8, 1],
                outputRange: [25, 5, 10, 30],
              }),
              color: movELTwo.interpolate({
                inputRange: [0, 1],
                outputRange: ['green', 'blue'],
              }),
            }}>
            <Text>Anime One</Text>
          </Animated.Text>
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
});

export default Anim_one;
