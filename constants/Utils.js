import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/**
 * In developerMode you are able to delete
 * -EvaluationRequests
 * -TeamMembers
 * -Teams
 */
const developerMode = true;

export { width, height, developerMode };
