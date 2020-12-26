import { StyleSheet } from 'react-native';
import { width, height } from '../../constants/Utils';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height,
    width,
    backgroundColor: 'rgba(46, 49, 49, 0.5)',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    marginTop: 40,
    width: width / 2,
    backgroundColor: 'rgba(228, 233, 237, 1)',
    borderRadius: 2,
  },
  title: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rest: {
    // paddingTop: 20,
    margin: 10,
  },
  bottom: {
    alignItems: 'flex-end',
  },
  okButton: {
    margin: 5,
    backgroundColor: 'lightblue',
    width: 40,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ok: {
    color: '#fff',
  },
});

export default styles;
