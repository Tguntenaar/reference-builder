import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Circle = ({ color, size }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: -size / 3,
        right: -size / 3,
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor: color,
        zIndex: -3,
      }}
    />
  );
};

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Circle.defaultProps = {
  color: 'rgba(239, 244, 253, 0.2)',
  size: 300,
};

export default Circle;
