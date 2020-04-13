import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


function RatingsDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up RatingsDetailsScreen.js to start working on your app!</Text>
      <Button
        title="Go to Ratings"
        onPress={() => navigation.navigate('RatingsScreen')}
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


export default RatingsDetailsScreen