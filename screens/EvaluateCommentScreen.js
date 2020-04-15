import React from 'react'
import { Text, View, Button, StyleSheet} from 'react-native';

function EvaluateCommentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up EvaluateCommentScreen.js to start working on your app!</Text>
      <Button
        title="Go back to tabs"
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default EvaluateCommentScreen
