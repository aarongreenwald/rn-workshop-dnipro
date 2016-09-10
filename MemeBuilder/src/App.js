import React from 'react';
import {Navigator, Text, TouchableOpacity} from 'react-native';
import HomeScreen from './home/HomeScreen';
import MemeBuilder from './meme-builder/MemeBuilder';

export default function App() {
  return (
    <Navigator
      renderScene={renderScene}
      initialRoute={{}}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator) => <BackButton route={route} navigator={navigator} />,
            RightButton: () => {},
            Title: () => {}
          }}
          style={{height: 50}}
        />
      }
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

const BackButton = ({route, navigator}) =>
  route.id === 'meme-builder' ?
    <TouchableOpacity onPress={() => navigator.pop()} style={{paddingLeft: 10}}>
      <Text>Back</Text>
    </TouchableOpacity> :
  null;