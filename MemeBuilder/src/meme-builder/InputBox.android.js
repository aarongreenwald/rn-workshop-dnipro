import React from 'react';
import {
  TextInput, View
} from 'react-native';

export default function (props) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput style={{flex: 1, height: 30, margin: 10, backgroundColor: '#fff', borderWidth: 1}}
               {...props}
      />
    </View>
  );
}