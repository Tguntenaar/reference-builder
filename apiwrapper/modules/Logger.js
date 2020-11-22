import { developerMode } from '../../constants/Utils';

export default (string) => {
  if (developerMode) {
    console.log(string);
  }
};
