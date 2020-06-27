import { StyleSheet } from 'react-native';
import { height, width } from '../../constants/Utils';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(51,51,51,0.8)',
    color: '#fff',
    textDecorationColor: '#fff',
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 288,
    width: width - 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontFamily: 'CooperHewitt-Heavy',
    color: 'rgb(44,44,44)',
    fontSize: 24,
  },
  subText: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular', // TODO: SUPER LIGHT
  },
});
