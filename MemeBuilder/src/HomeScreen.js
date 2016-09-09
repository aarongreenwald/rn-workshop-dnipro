
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <Image source={require('../images/wonka.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});