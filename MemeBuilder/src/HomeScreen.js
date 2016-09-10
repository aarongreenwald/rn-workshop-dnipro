
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  View
} from 'react-native';
import Images from './Images';
import theme from './theme';

export default function HomeScreen ({openMemeBuilder}) {
  return (
    <View style={styles.container}>
      <Images openMemeBuilder={openMemeBuilder}/>

      {
        Platform.OS === 'ios' && <Text>I see you're on iOS</Text>
      }

      {
        Platform.OS === 'android' && <Text>I see you're on Android</Text>
      }
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