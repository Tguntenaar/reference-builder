import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');


const getMonthYear = () => {
  const today = new Date();
  const monthIndex = today.getMonth();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const yyyy = today.getFullYear();
  return `${monthNames[monthIndex]} ${yyyy}`;
};
/**
 * In developerMode you are able to delete
 * -EvaluationRequests
 * -TeamMembers
 * -Teams
 */
const developerMode = true;
const debugMode = true;

const showMessage = (navigation, title, message) => {
  navigation.navigate("ModalScreen", {
    initialState: {
      title,
      text: message,
    }
  });
}

export { width, height, developerMode, debugMode, getMonthYear, showMessage };
