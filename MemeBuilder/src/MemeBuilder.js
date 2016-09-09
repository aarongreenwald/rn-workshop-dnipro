import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import theme from './theme';

export default function MemeBuilder({imageSource}) {
  return (
    <View style={styles.container}>
      <Image source={imageSource}/>
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