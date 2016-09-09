import React from 'react';
import {Navigator} from 'react-native';
import HomeScreen from './HomeScreen';
import MemeBuilder from './MemeBuilder';

export default function App() {
  return (
    <Navigator
      renderScene={renderScene}
      initialRoute={{}}
    />
  );
}

const renderScene = (route, navigator) => {
  switch (route.id) {
    case 'meme-builder':
      return <MemeBuilder imageSource={route.imageSource} />;
    default:
      return <HomeScreen openMemeBuilder={imageSource => navigator.push({id: 'meme-builder', imageSource})}/>;
  }
};