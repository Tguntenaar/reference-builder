import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

function isIphoneX() {
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
}

export { isIphoneX, width, height };
