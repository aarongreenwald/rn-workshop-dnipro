import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Slider, Animated} from 'react-native';
import theme from '../theme';
import InputBox from './InputBox';

export default class MemeBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      size: new Animated.Value(320)
    };
  }

  setSize(size) {
    Animated.spring(this.state.size, {
      friction: 2,
      toValue: size
    }).start();
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
        <Animated.Image source={imageSource} style={{width: this.state.size, height: this.state.size}}>
          <Text style={[styles.text, styles.topText]}>{this.state.topText}</Text>
          <Text style={[styles.text, styles.bottomText]}>{this.state.bottomText}</Text>
        </Animated.Image>
        <View style={styles.sliderContainer}>
          <Slider onSlidingComplete={this.setSize.bind(this)}
                  value={320}
                  minimumValue={100}
                  maximumValue={500}
                  step={2}
                  style={styles.slider}/>
        </View>
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
  },
  sliderContainer: {
    flexDirection: 'row',
    padding: 20,
    position: 'absolute',
    bottom: 0
  },
  slider: {
    flex: 1
  }
});