import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export default function (props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} multiline={true} numberOfLines={1}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    height: 50,
    margin: 10,
    padding: 5,
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});