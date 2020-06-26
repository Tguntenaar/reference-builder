import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const BackButton = ({ onPress, color, size }) => {
  const { backgroundColor, iconColor } = color;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor, height: size, width: size, borderRadius: size / 2 },
      ]}
      onPress={onPress}
      underlayColor="#fff"
    >
      <Ionicons
        name="md-arrow-back"
        color="#fff"
        onPress={onPress}
        style={{ color: iconColor, fontSize: size / 2 }}
      />
    </TouchableOpacity>
  );
};
// Type checking
BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.shape({
    backgroundColor: PropTypes.string,
    iconColor: PropTypes.string,
  }),
  size: PropTypes.number,
};
// Default props
BackButton.defaultProps = {
  color: { backgroundColor: '#0009EE', iconColor: '#fff' },
  size: 50,
};

export default BackButton;
