import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export default function (props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    height: 30,
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1
  }
});