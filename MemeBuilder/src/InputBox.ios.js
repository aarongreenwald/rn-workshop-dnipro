import React from 'react';
import {
  TextInput
} from 'react-native';

export default function (props) {
  return (
    <TextInput style={{flexDirection: 'row', height: 30, margin: 10, backgroundColor: '#fff', borderWidth: 1}}
               {...props}
    />  );
}