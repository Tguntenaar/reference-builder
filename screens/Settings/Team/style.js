import { StyleSheet } from 'react-native';
import { width, height } from '../../../constants/Utils';

const imageSize = 88;

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
  headerTitles: {
    fontFamily: 'CooperHewitt-Medium',
    fontSize: 20,
    color: 'rgb(34,34,34)',
    padding: 2,
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
    height: 0.75 * height,
    // backgroundColor: 'yellow',
    width: width - 40,
  },
  card: {
    backgroundColor: 'lightblue',
    marginTop: 10,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    width: width - 40,
    borderRadius: 7,
  },
  input: {
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  plusIcon: {
    fontSize: 14,
  },
  pageTitle: {
    padding: 2,
    fontSize: 24,
    height: 40,
    color: 'rgb(10,29,255)',
    fontFamily: 'CooperHewitt-Bold',
  },
  bottom: {
    height: 0.15 * height,
    backgroundColor: 'grey',
    width,
    alignItems: 'center',
  },
  skill: {
    flexDirection: 'row',
    // marginLeft: 10,
    borderWidth: 1,
    borderColor: 'rgb(34,34,34)',
    borderRadius: 20,
    height: 40,
    width: 114,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default styles;
