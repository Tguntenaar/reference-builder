import { StyleSheet, Platform } from 'react-native';
import { width } from '../../constants/Utils';

const styles = StyleSheet.create({
  Box: {
    width: width - 40,
    height: 0.4 * (width - 40),
    backgroundColor: 'rgb(239, 244, 253)',
    borderRadius: 7,
    flexDirection: 'row',
    marginBottom: 20,
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
  },
  title: {
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 20,
    height: Platform.OS === 'ios' ? 20 : 30,
    padding: 1,
    fontStyle: 'normal',
    color: '#2c2c2c',
  },
  description: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    color: 'rgb(44,44,44)',
  },
  circleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
  },
  circle: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
});

export default styles;
