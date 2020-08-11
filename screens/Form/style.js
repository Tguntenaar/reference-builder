import { StyleSheet } from 'react-native';
import { height, width, isIphoneX } from '../../constants/Utils';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: isIphoneX() ? 30 : 0,
  },
  top: {
    height: 0.15 * height,
    width,
    alignItems: 'center',
    paddingTop: 40,
  },
  back: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  pageTitle: {
    color: 'rgb(10,19,255)',
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 20,
    padding: 2,
  },
  middle: {
    // height: 0.45 * height,
    // backgroundColor: 'red',
  },
  input: {
    width: width - 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 30,
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    fontFamily: 'CooperHewitt-Medium',
  },
  bottom: {
    // height: 0.3 * height,
    // backgroundColor: 'yellow',
    marginTop: 50,
    width,
    alignItems: 'center',
    // marginBottom: 100,
  },
  inActive: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgb(34,34,34)',
    borderRadius: 20,
    height: 40,
    // width: 114,
    paddingLeft: 10,
    marginRight: 10,
    paddingRight: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default style;
