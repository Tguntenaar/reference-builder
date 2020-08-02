import { StyleSheet } from 'react-native';
import { width, height } from '../../../constants/Utils';

const imageSize = 110;
const imageSizeTeam = 90;

export default StyleSheet.create({
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
    height: 0.3 * height,
    // backgroundColor: 'red',
    width: width - 40,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontFamily: 'CooperHewitt-Bold',
    padding: 2,
    color: 'rgb(10,29,255)',
  },
  topLeft: {
    width: 0.2 * width,
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
    height: 0.15 * height,
    // backgroundColor: 'blue',
    width: width - 40,
  },
  input: {
    // borderColor: 'gray',
    // borderWidth: 1,
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
    // backgroundColor: 'yellow',
  },
  teams: {
    fontFamily: 'CooperHewitt-Medium',
    fontSize: 20,
  },
  innerCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 40 - imageSizeTeam,
  },
  teamName: {
    fontFamily: 'CooperHewitt-Heavy',
    padding: 2,
    fontSize: 25,
  },
  imageContainer: {
    paddingLeft: 20,
    height: 130,
    justifyContent: 'center',
  },
  card: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    width: width - 40,
    backgroundColor: 'rgb(239,244,253)',
    borderRadius: 7,
    height: 130,
  },
  teamImage: {
    width: imageSizeTeam,
    height: imageSizeTeam,
    borderRadius: imageSizeTeam / 2,
    backgroundColor: 'lightgrey',
  },
});
