import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import theme from '../theme';
import InputBox from './InputBox';

export default class MemeBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: ''
    };
  }

  render() {
    const {imageSource} = this.props;
    return (
      <View style={styles.container}>
        <InputBox
          placeholder={'Top text...'}
          onChangeText={value => this.setState({topText: value})}
          value={this.state.topText}/>
        <InputBox placeholder={'Bottom text...'}
                  onChangeText={value => this.setState({bottomText: value})}
                  value={this.state.bottomText}/>
        <Image source={imageSource} style={styles.image}>
          <Text style={[styles.text, styles.topText]}>{this.state.topText}</Text>
          <Text style={[styles.text, styles.bottomText]}>{this.state.bottomText}</Text>
        </Image>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: theme.backgroundColor,
  },
  image: {
    width: 320,
    height: 320
  },
  topText: {
    position: 'absolute',
    top: 0
  },
  bottomText: {
    position: 'absolute',
    bottom: 0
  },
  text: {
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(10, 10, 10, .5)',
    color: '#fff',
    fontSize: 26
  }
});