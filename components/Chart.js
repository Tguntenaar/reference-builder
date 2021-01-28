import React from 'react';
import { Dimensions } from 'react-native';
import LineChart from './LineChart';

function Chart({ chartData: { data, labels } }) {
  const randomData = [
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
  ];

  const label = ['1.10.2017', '', '', '', '', '1.10.2018'];
  return (
    <LineChart
      data={{
        labels,
        datasets: [
          {
            data,
          },
        ],
      }}
      width={Dimensions.get('window').width - 50} // from react-native
      height={200}
      chartConfig={{
        strokeWidth: 5,
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff', // for visiblity purpose
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 0) => `rgb(10, 19, 255)`,
        style: {
          color: '#fff',
        },
      }}
      bezier
      style={{
        borderRadius: 16,
        width: Dimensions.get('window').width - 40,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 15,
      }}
    />
  );
}

export default Chart;
