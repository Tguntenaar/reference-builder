import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const index = ({ display = false }) => {
  return (
    <View style={[styles.container, { display }]}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text> Title </Text>
        </View>
        <View style={styles.rest}>
          <Text> Text </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.okButton} onPress={() => {}}>
            <Text style={styles.ok}> OK </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
