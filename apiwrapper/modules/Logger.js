import { debugMode } from '../../constants/Utils';

export default (string) => {
  if (debugMode) {
    console.log(string);
  }
};
