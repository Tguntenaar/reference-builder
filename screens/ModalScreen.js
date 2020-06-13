import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ModalScreen = ({ navigation, visible }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  )
}



export default ModalScreen

const styles = StyleSheet.create({})
