import React, {Component} from 'react';
import {ListView, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class Images extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        require('../images/wonka.jpg'),
        require('../images/baby.jpg'),
        require('../images/brace.jpg'),
        require('../images/batman.jpg'),
        require('../images/one-does-not.jpg'),
        require('../images/dosequis.jpg'),
        require('../images/everywhere.jpg'),
        require('../images/evil-kid.jpg'),
        require('../images/morpheus.jpg'),
        require('../images/problems.jpg'),
        require('../images/waiting.jpg'),
        require('../images/yes.jpg'),
        require('../images/yoda.jpg')
      ])
    }
  }

  render() {
    return (
      <ListView style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={imageSource => <MemeImage source={imageSource}/>}
      />

    )
  }

}

const MemeImage = ({source}) =>
  <TouchableOpacity onPress={() => console.log('Pressed image', source)}>
    <Image source={source} style={styles.image}/>
  </TouchableOpacity>;

const styles = StyleSheet.create({
  image: {
    margin: 5,
  },
  list: {
    marginTop: 20,
    marginBottom: 20
  }
});