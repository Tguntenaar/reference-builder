import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    paddingTop: 30,
    flex: 0.2,
    // backgroundColor: 'grey',
  },
  middle: {
    flex: 0.6,
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.1,
    // backgroundColor:'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
  },
  headerTitle: {
    fontSize: 28,
    alignSelf: 'center',
    fontFamily: 'CooperHewitt-Bold',
    color: 'rgb(10,19,255)',
    padding: 2,
  },
  headerDescription: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: 260,
    fontFamily: 'SourceSansPro-Regular',
    color: 'rgb(118,118,118)',
  },
  next: {},
  back: {
    // marginLeft: 20,
  },
});
