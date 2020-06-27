import { StyleSheet, Platform } from 'react-native';
import { width } from '../../constants/Utils';

export default StyleSheet.create({
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
