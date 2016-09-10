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
].reduce((acc, item) => {
  if (!acc.length) {
    acc[0] = [item];
  }
  else if (acc[acc.length - 1].length === 1) {
    acc[acc.length - 1].push(item);
  }
  else {
    acc.push([item]);
  }
  return acc;
}, []);

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
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <MemeImage source={row[0]} openMemeBuilder={this.props.openMemeBuilder}/>
        <MemeImage source={row[1]} openMemeBuilder={this.props.openMemeBuilder}/>
      </View>
    );
  }


  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <ListView style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const MemeImage = ({source, openMemeBuilder}) =>
  <TouchableOpacity onPress={() =>openMemeBuilder(source)}>
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