import { StyleSheet, Platform } from 'react-native';
import { isIphoneX, height, width } from '../../../constants/Utils';

const circleSize = 70;
const mediumRingSize = circleSize + 12;
const bigRingSize = circleSize + 20;

const styles = StyleSheet.create({
  safe: {
    flex: 0,
    backgroundColor: 'rgb(10,185,255)',
  },
  safe2: {
    flex: 1,
    backgroundColor: '#fff', // '#fff',
    // paddingTop: 0,
    top: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width,
  },
  top: {
    flex: 0.25,
    backgroundColor: 'rgb(10,19,255)',
    // backgroundColor: 'red',
  },
  header: {
    flex: 1,
  },
  middle: {
    width,
    flex: 0.25,
    top: -0.04 * height,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  chart: {
    alignSelf: 'center',
  },
  date: {
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    fontFamily: 'SourceSansPro-Regular',
    color: 'rgb(10,19,255)',
    marginLeft: 10,
  },
  bottom: {
    flex: 0.5,
    // backgroundColor: 'red',
  },
  scroll: {
    alignItems: 'center',
    // justifyContent: 'center',
    flexGrow: 1,
  },
  bigRing: {
    backgroundColor: '#fff',
    height: bigRingSize,
    width: bigRingSize,
    borderRadius: bigRingSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumRing: {
    backgroundColor: 'white',
    height: mediumRingSize,
    width: mediumRingSize,
    borderRadius: mediumRingSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallRing: {
    backgroundColor: '#fff',
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grade: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'CooperHewitt-Heavy',
    paddingTop: 2,
    height: Platform.OS === 'ios' ? 25 : 30,
  },
  skill: {
    color: '#fff',
    fontSize: 24,
    height: Platform.OS === 'ios' ? 24 : 34,

    fontFamily: 'CooperHewitt-Heavy',
    padding: 2,
  },
  skillDescription: {
    color: '#fff',
    fontSize: 16,
    padding: 2,
    fontFamily: 'SourceSansPro-It',
  },
  topNavigation: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  middleNavigation: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 21,
    paddingTop: 10,
  },
  middleNavigationInner: {
    marginLeft: 20,
    marginTop: 20,
  },
  settingsIcon: {
    fontSize: 25,
    marginTop: 10,
    marginRight: 15,
  },
});

export default styles;
