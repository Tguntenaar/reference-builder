import { StyleSheet } from 'react-native';
import { width } from '../../constants/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  picker: {
    width: width - 50,
    // backgroundColor: 'blue',
    marginTop: 20,
    // height: 100,
  },
  pickerItem: {
    fontFamily: 'CooperHewitt-Medium',
    height: 66,
  },
  scroll: {
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 50,
    paddingBottom: 50,
  },
  text: {
    fontSize: 20,
    width: width - 40,
    padding: 2,
    fontFamily: 'CooperHewitt-Medium',
  },
});
