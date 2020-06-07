// https://medium.com/react-native-training/redux-4-ways-95a130da0cdc
import { createStore } from 'redux';
import reducers from './reducers';

const configureStore = () => {
  let store = createStore(reducers)
  return store
}

export default configureStore
