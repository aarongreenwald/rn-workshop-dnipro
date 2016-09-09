
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  View
} from 'react-native';
import InputBox from './InputBox';
import theme from './theme';

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <Image source={require('../images/wonka.jpg')}/>

      {
        Platform.OS === 'ios' && <Text>I see you're on iOS</Text>
      }

      {
        Platform.OS === 'android' && <Text>I see you're on Android</Text>
      }

      <InputBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor,
  }
});