import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Platform} from 'react-native';
import {Icon, Header, Overlay} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SuperText from './src/widgets/superText';
import Anim_one from './src/anim_one';
import Anim_two from './src/anime_two';

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const checkSupport = () => {
    if (Platform.OS === 'ios') {
      if (Platform.Version < 14) {
        return false;
      }
    } else {
      if (Platform.Version < 29) {
        return false;
      }
    }
    return true;
  };

  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name="menu"
            color="#ffffff"
            type="entypo"
            onPress={() => alert('open sidedrawer')}
          />
        }
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <Text>Hello</Text>
      <Icon name="rowing" />

      <Button title="open overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from overlay</Text>
      </Overlay>
      <FontAwesome5 name={'comments'} />
      <SuperText style={{backgroundColor: 'orange'}}>
        Hello this is my reusable component
      </SuperText>

      {/* {checkSupport() ? (
        <Overlay isVisible={true}>
          <Text>
            {Platform.OS === 'ios'
              ? 'Welcome to your ios'
              : 'Welcome to android'}
          </Text>
        </Overlay>
      ) : (
        <Overlay isVisible={true}>
          <Text>Sorry your app is not supported</Text>
        </Overlay>
      )} */}

      {/* <Anim_one/> */}
      <Anim_two/>
    </View>
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

export default App;
