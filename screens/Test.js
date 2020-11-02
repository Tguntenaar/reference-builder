import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

const Test = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>
        <View
          style={{
            flex: 1,
            top: 0,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Test;

const styles = StyleSheet.create({});
