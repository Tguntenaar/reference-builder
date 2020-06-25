import { Dimensions, Platform } from 'react-native';

export default () => {
  const window = Dimensions.get('window');
  const { height } = window;
  const { width } = window;
  const iphoneXLength = 812;
  const iphoneXSMaxLength = 896;
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (width === iphoneXLength ||
      height === iphoneXLength ||
      width === iphoneXSMaxLength ||
      height === iphoneXSMaxLength)
  );
};
