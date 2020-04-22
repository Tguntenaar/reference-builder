import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { LineChart } from 'expo-chart-kit'

export default class Chart extends Component {
  render() {
    return (
      <LineChart
        data={{
          labels: ['2017', '', '', '', '', '2018'],
          datasets: [{
            data: [
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10
            ]
          }]
        }}
        width={Dimensions.get('window').width - 50} // from react-native
        height={200}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: 'black', // TODO: for visiblity purpose
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(10, 19, 255, ${opacity})`,
          style: {
          }
        }}
       
        bezier
        style={{
          // marginVertiscal: 8,
          borderRadius: 16,
        }}
        // yAxis:{
          //   drawGridLines: false,
          //   gridDashedLine: {spaceLength:0}
          // },
      />
    )
  }
}

const styles = StyleSheet.create({})
