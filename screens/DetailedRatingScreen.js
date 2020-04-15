import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';

function DetailedRatingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up RatingsDetailsScreen.js to start working on your app!</Text>
      <Button
        title="Go to Ratings"
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

export default DetailedRatingScreen
