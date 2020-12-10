import { Platform, StyleSheet } from 'react-native';
import { height, width } from '../../../constants/Utils';

const styles = StyleSheet.create({
  safeTop: {
    backgroundColor: 'rgb(10,185,255)',
    flex: 0,
  },
  safe: {
    flex: 0,
    backgroundColor: 'rgb(10,19,255)',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'rgb(10,19,255)',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height / 2,
  },
  container: {
    // flex: 1,
    // width:width,
    justifyContent: 'space-between',
  },
  top: {
    flex: 0.2,
    // flexDirection: 'row',
    width,
  },
  middle: {
    flex: 0.6,
    // alignItems: 'center'
    alignSelf: 'center',
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    // alignSelf: 'center'
  },
  error: {
    color: 'white',
    fontSize: 20,
  },
  bottom: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    padding: 2,
    // alignSelf: 'center',
    fontFamily: 'CooperHewitt-Book',
  },
  grade: {
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 60,
    height: Platform.OS === 'ios' ? 60 : 65,
  },
  question: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    marginBottom: 20,
  },
  header: {
    alignSelf: 'center',
  },
});

export default styles;
