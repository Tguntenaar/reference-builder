import { StyleSheet } from 'react-native';
import { width, height, isIphoneX } from '../../../constants/Utils';

const imageSize = 88;

const styles = StyleSheet.create({
  safe: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  top: {
    height: 0.2 * height,
    marginTop: isIphoneX() ? 30 : 0,
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
    width: width - 40,
  },
  managerCard: {
    backgroundColor: 'rgb(212,214,255)',
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
  row: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerCard: {
    alignItems: 'center',
    width: width - imageSize - 70,
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
  teamIcon: {
    fontSize: 22,
    position: 'absolute',
    right: 1,
    top: 1,
  },
  trashIcon: {
    fontSize: 22,
    position: 'absolute',
    right: 15,
    top: 1,
  },
  userInfo: {
    marginTop: 5,
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
    backgroundColor: 'grey',
    width,
    alignItems: 'center',
  },
  skillsContainer: {
    width,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  skill: {
    borderWidth: 1,
    borderColor: 'rgb(34,34,34)',
    borderRadius: 20,
    height: 40,
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
    height: 16,
  },
  skillName: {
    padding: 2,
    fontFamily: 'CooperHewitt-Medium',
    fontSize: 14,
  },
  xIcon: {
    paddingLeft: 2,
    fontSize: 18,
    height: 16,
  },
});

export default styles;
