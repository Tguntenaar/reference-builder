import { StyleSheet } from 'react-native';
import { width, height, isIphoneX } from '../../../constants/Utils';

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
    marginTop: isIphoneX() ? 30 : 0,
    // backgroundColor: 'red',
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    top: 5,
    left: 5,
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
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  edit: {
    color: 'blue',
    fontSize: 20,
  },
  middle: {
    // paddingTop: 50,
    // height: 0.75 * height,
    // backgroundColor: 'yellow',
    width: width - 40,
  },
  card: {
    backgroundColor: 'rgb(239,244,253)',
    marginTop: 10,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    width: width - 40,
    borderRadius: 7,
    height: 155,
  },
  innerCard: {
    alignItems: 'center',
    width: width - imageSize - 70,
    // backgroundColor: 'yellow',
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
  userInfo: {
    width: width - imageSize - 70,
  },
  name: {
    padding: 2,
    fontSize: 20,
    fontFamily: 'CooperHewitt-Heavy',
  },
  jobTitle: {
    fontSize: 14,

    fontFamily: 'SourceSansPro-Regular',
  },
  remove: {
    marginTop: 7,
    color: 'red',
    padding: 2,
    fontFamily: 'CooperHewitt-Medium',
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
    // height: 0.15 * height,
    backgroundColor: 'grey',
    width,
    alignItems: 'center',
  },
  skillsContainer: {
    // backgroundColor: 'blue',
    width,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  skill: {
    // marginLeft: 10,
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
  innerSkill: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    height: 16,
  },
  skillName: {
    padding: 2,
    fontFamily: 'CooperHewitt-Medium',
    fontSize: 14,
  },
  xIcon: {
    // paddingTop: 3,
    paddingLeft: 2,
    fontSize: 18,
    height: 16,
    // paddingBottom: 4,
    // paddingTop: 4,
    // paddingBottom: 6,
  },
});

export default styles;
