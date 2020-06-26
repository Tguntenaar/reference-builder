import * as React from 'react';
import { Text, StyleSheet, View, Image, Dimensions, Platform } from 'react-native';
import NextButton from './NextButton';
// Constants
import { imageEsther } from '../constants/Images';

export default function EvaluationRequest({ name, jobTitle, navigation }) {
  const due = '21-08-2019';
  const status = undefined || 'Awaiting your response';
  return (
    <View style={styles.Box}>
      <View style={styles.circleBox}>
        <Image style={styles.image} source={imageEsther} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{jobTitle}</Text>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.due}>Due date: {due}</Text>
        <NextButton
          size={40}
          textSize={15}
          title="Evaluate"
          onPress={() => navigation.navigate('EvaluateScreen')}
        />
      </View>
    </View>
  );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  Box: {
    width: width - 40,
    height: 171,
    backgroundColor: 'rgb(239, 244, 253)',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 20,
  },
  circleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
  textBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 205,
  },
  title: {
    fontFamily: 'CooperHewitt-Heavy',
    height: Platform.OS === 'ios' ? 20 : 30,
    fontSize: 20,
    padding: 1,
    color: '#2c2c2c',
  },
  description: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    color: 'rgb(44,44,44)',
  },
  status: {
    fontFamily: 'SourceSansPro-It',
    color: 'rgb(44,44,44)',
  },
  due: {
    fontFamily: 'SourceSansPro-Regular',
    color: 'rgb(255,16,10)',
  },
});
