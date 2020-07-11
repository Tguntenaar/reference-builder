import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const NextButton = ({ title, onPress, color, size, textSize, loading }) => {
  // TODO: dit moet handig
  size = size || 50;
  textSize = textSize || 20;
  loading = loading || false;

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

NextButton.PropTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
  size: PropTypes.number,
  textSize: PropTypes.number,
  loading: PropTypes.bool,
};

NextButton.defaultProps = {
  loading: false,
  size: 50,
  textSize: 20,
};

const styles = StyleSheet.create({
  loadingIcon: {
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'CooperHewitt-Heavy',
    padding: 1,
  },
});

export default NextButton;
