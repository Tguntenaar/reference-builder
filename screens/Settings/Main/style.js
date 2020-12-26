import { StyleSheet } from 'react-native';
import { width, height } from '../../../constants/Utils';

const imageSize = 110;
const imageSizeTeam = 110;

export default StyleSheet.create({
  safe: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height: 0.3 * height,
    // backgroundColor: 'red',
    width,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    top: 5,
    left: 0,
  },
  pageTitle: {
    fontSize: 24,
    fontFamily: 'CooperHewitt-Bold',
    padding: 2,
    color: 'rgb(10,29,255)',
  },
  topLeft: {
    width: 0.25 * width,
    marginTop: 40,
    // height: 0.3 * height,
  },
  topRight: {
    width: 0.5 * width,
    alignItems: 'center',
    // backgroundColor: 'yellow',
    // height: 0.3 * height,
    justifyContent: 'center',
  },
  names: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: 'lightgrey',
  },
  edit: {
    marginTop: 10,
    padding: 2,
    color: 'blue',
    fontSize: 14,
    fontFamily: 'CooperHewitt-Medium',
  },
  middle: {
    // paddingTop: 50,
    height: 0.18 * height,
    // flex: 0.5,
    // backgroundColor: 'blue',
    width: width - 40,
  },
  input: {
    // borderColor: 'gray',
    // borderWidth: 1,
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
  },
  inputName: {
    height: 36,
    fontSize: 24,
    fontFamily: 'CooperHewitt-Heavy',
  },
  inputJobTitle: {
    height: 25,
    fontSize: 16,
    fontFamily: 'CooperHewitt-BookItalic',
  },
  bottom: {
    height: 0.5 * height,
    // flex: 4,
    // backgroundColor: 'yellow',
  },
  plusIcon: {
    fontSize: 14,
  },
  signOut: {
    fontSize: 18,
    position: 'absolute',
    top: 20,
    right: 10,
  },
  teamIcon: {
    fontSize: 22,
    position: 'absolute',
    // color: 'gray',
    top: 10,
    right: 20,
  },
  teams: {
    fontFamily: 'CooperHewitt-Medium',
    fontSize: 20,
  },
  innerCard: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 40 - imageSizeTeam,
  },
  teamName: {
    marginTop: 20,
    fontFamily: 'CooperHewitt-Heavy',
    padding: 2,
    fontSize: 25,
  },
  imageContainer: {
    paddingLeft: 30,
    // height: 130,
    justifyContent: 'center',
  },
  card: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    width: width - 40,
    backgroundColor: 'rgb(239,244,253)',
    borderRadius: 7,
    minHeight: 150,
    // height: 130,
  },
  teamImage: {
    width: imageSizeTeam,
    height: imageSizeTeam,
    borderRadius: imageSizeTeam / 2,
    backgroundColor: 'lightgrey',
  },
  removeTouch: {
    marginTop: 10,
    marginBottom: 20,
  },
  remove: {
    color: 'rgb(255,16,10)',
  },
});
