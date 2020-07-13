import { StyleSheet } from 'react-native';
import { width, height } from '../../../constants/Utils';

const imageSize = 40;

const styles = StyleSheet.create({
  safe: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height: 0.2 * height,
    // backgroundColor: 'red',
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: 'lightgrey',
  },
  edit: {
    color: 'blue',
    fontSize: 20,
  },
  middle: {
    // paddingTop: 50,
    height: 0.6 * height,
    // backgroundColor: 'blue',
    width: width - 40,
  },
  input: {
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  bottom: {
    height: 0.15 * height,
    // backgroundColor: 'grey',
  },
});

export default styles;
