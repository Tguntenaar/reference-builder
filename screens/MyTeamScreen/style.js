import { StyleSheet } from 'react-native';
import { width } from '../../constants/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    width: width - 40,
    padding: 2,
    fontFamily: 'CooperHewitt-Medium',
  },
});
