import React, { Component } from 'react'
import { Text, StyleSheet, View, Slider, Dimensions } from 'react-native'

export default class EvaluationSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 60,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    const { value } = this.state;
    return (
      <View>
        <Text style={styles.skill}>{this.props.skill}</Text>
      
        <Text style={styles.grade}>{String((value/10).toFixed(1))}</Text>
        <Slider 
          maximumValue={100}
          minimumValue={10}
          // thumbTintColor="grey"
          // minimumTrackTintColor="black"
          value={value}
          style={styles.slider}
          onValueChange={this.change.bind(this)}
        />
      </View>
    )
  }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slider: {
    width: width * 0.8,
  },
  skill:{
    fontSize: 25,
  },
  grade: {
    fontSize: 40,
    alignSelf:'center',
  },
})
