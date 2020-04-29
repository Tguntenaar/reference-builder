import React, { Component } from 'react'
import { TextInput, StyleSheet, Dimensions, KeyboardAvoidingView, View} from 'react-native'

export default class CommentInput extends Component {
    constructor(props) {
    super(props);
    this.state = {
      text: 'testing field value',
    };
    this.numberOfLines = '7';
  }

  change(value) {
    this.setState(() => {
      return {
        text: value,
      };
    });
  }
  // <KeyboardAvoidingView behavior={'postion' || 'height' || 'padding'}>
  // <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
  
  render() {
    return (
      <View>
        <TextInput
            keyboardType={"default"}
            textAlignVertical={"top"}
            multiline={true}
            onChangeText={this.change.bind(this)}
            value={this.state.text} 
            style={styles.field}
            numberOfLines={Platform.OS === 'ios' ? null : this.numberOfLines}
            minHeight={(Platform.OS === 'ios' && this.numberOfLines) ? (20 * this.numberOfLines) : null}
            maxHeight={(Platform.OS === 'ios' && this.numberOfLines) ? (20 * this.numberOfLines) : null}
        />
      </View>
    )
  }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  field: {
    backgroundColor: "#fff",
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: width * 0.8,
    padding: 10,
    fontSize: 20,
    borderRadius: 2,
  },
})
