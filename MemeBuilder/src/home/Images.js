import React, {Component} from 'react';
import {ListView, TouchableOpacity, View, Image, StyleSheet} from 'react-native';

const imageSources = [
  require('../../images/wonka.jpg'),
  require('../../images/baby.jpg'),
  require('../../images/brace.jpg'),
  require('../../images/batman.jpg'),
  require('../../images/one-does-not.jpg'),
  require('../../images/dosequis.jpg'),
  require('../../images/everywhere.jpg'),
  require('../../images/evil-kid.jpg'),
  require('../../images/morpheus.jpg'),
  require('../../images/problems.jpg'),
  require('../../images/waiting.jpg'),
  require('../../images/yes.jpg'),
  require('../../images/yoda.jpg')
];

export default class Images extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(imageSources)
    }
  }

  renderRow(row) {
    return (
      <MemeImage source={row} openMemeBuilder={this.props.openMemeBuilder}/>
    );
  }


  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <ListView contentContainerStyle={styles.list}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

const MemeImage = ({source, openMemeBuilder}) =>
  <TouchableOpacity onPress={() => openMemeBuilder(source)} style={styles.image}>
    <Image source={source} style={styles.image}/>
  </TouchableOpacity>;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 5
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom: 20
  }
});