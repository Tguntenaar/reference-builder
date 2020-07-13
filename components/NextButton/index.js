import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './style';

const NextButton = ({ title, onPress, color, size, textSize, loading }) => {
  // TODO:
  const defaultColors = {
    backgroundColor: '#0009EE',
    textColor: '#fff',
    height: size,
    borderRadius: size / 2,
    width: size * 4,
  };
  color = Object.assign(defaultColors, color);

  const defaultText = {
    fontSize: textSize,
    height: Platform.OS === 'ios' ? textSize : textSize + 10,
  };
  textSize = Object.assign(defaultText, textSize);

  return (
    <TouchableOpacity style={[styles.button, defaultColors]} onPress={onPress} underlayColor="#fff">
      {loading ? (
        <Feather name="loader" color={color.textColor} style={styles.loadingIcon} />
      ) : (
        <Text style={[styles.text, { color: color.textColor }, textSize]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

NextButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
  size: PropTypes.number,
  textSize: PropTypes.object,
  loading: PropTypes.bool,
};

NextButton.defaultProps = {
  size: 50,
  // color: {
  //   backgroundColor: '#0009EE',
  //   textColor: '#fff',
  //   height: size,
  //   borderRadius: size / 2,
  //   width: size * 4,
  // },
  loading: false,
  textSize: 20,
};

export default NextButton;
