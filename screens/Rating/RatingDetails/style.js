import { StyleSheet } from 'react-native';
import { width } from '../../../constants/Utils';

const ImageSize = 100;
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  top: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: ImageSize,
    width: ImageSize,
    borderRadius: ImageSize / 2,
  },
  name: {
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 20,
    padding: 1,
    marginTop: 5,
  },
  jobTitle: {
    fontFamily: 'CooperHewitt-BookItalic',
    color: 'rgba(44,44,44,0.75)',
    fontSize: 14,
  },
  skill: {
    fontFamily: 'CooperHewitt-Heavy',
    color: 'rgb(10,19,255)',
    fontSize: 24,
    padding: 2,
    marginTop: 5,
  },
  skillDescription: {
    color: 'rgb(118,118,118)',
    fontSize: 16,
    height: 4 * 16,
    width: width - 2 * 56,
    padding: 1,
    textAlign: 'center',
  },
  middle: {
    flex: 0.5,
    alignItems: 'center',
  },
  box: {
    marginBottom: 34,
    flexDirection: 'row',
  },
  left: {
    width: width * 0.85,
    paddingLeft: 20,
  },
  right: {
    width: width * 0.15,
    alignItems: 'flex-start',
  },
  skillPart: {
    fontFamily: 'CooperHewitt-Medium',
    fontSize: 20,
    padding: 2,
  },
  grade: {
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 30,
    padding: 2,
  },
  description: {
    fontFamily: 'SourceSansPro-It',
  },
  scroll: {
    flexGrow: 1,
  },
  bottom: {
    flex: 0.1,
    alignItems: 'center',
  },
});

export default styles;
