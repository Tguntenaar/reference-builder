import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/**
 * In developerMode you are able to delete
 * -EvaluationRequests
 * -TeamMembers
 * -Teams
 */
const developerMode = false;

export { width, height, developerMode };
