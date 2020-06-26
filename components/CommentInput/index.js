import React from 'react';
import { TextInput, StyleSheet, View, Platform } from 'react-native'; // TODO: KeyboardAvoidingView
import PropTypes from 'prop-types';
import { width } from '../../constants/Utils';

const styles = StyleSheet.create({
  field: {
    backgroundColor: '#fff',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: width - 40,
    padding: 20,
    fontSize: 20,
    borderRadius: 2,
    paddingTop: 23,
  },
});

const CommentInput = ({ text, numberOfLines, onChangeText }) => {
  // TODO:
  // <KeyboardAvoidingView behavior={'postion' || 'height' || 'padding'}>
  // <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
  return (
    <View>
      <TextInput
        placeholder="Type here..."
        keyboardType="default"
        textAlignVertical="top"
        multiline
        onChangeText={onChangeText}
        value={text}
        style={styles.field}
        numberOfLines={Platform.OS === 'ios' ? null : numberOfLines}
        minHeight={Platform.OS === 'ios' && numberOfLines ? 20 * numberOfLines : null}
        maxHeight={Platform.OS === 'ios' && numberOfLines ? 20 * numberOfLines : null}
      />
    </View>
  );
};
// Type checking
CommentInput.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  numberOfLines: PropTypes.number,
};
// Default props
CommentInput.defaultProps = {
  numberOfLines: 7,
};

export default CommentInput;
