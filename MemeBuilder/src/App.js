import React from 'react';
import {Navigator, Text, TouchableOpacity, StyleSheet} from 'react-native';
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
          style={styles.navigationBar}
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
    <TouchableOpacity onPress={navigator.pop} style={styles.backButton}>
      <Text>Back</Text>
    </TouchableOpacity> :
  null;

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 10
  },
  navigationBar: {
    height: 50
  }
});