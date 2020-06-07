// https://medium.com/react-native-training/redux-4-ways-95a130da0cdc
/**
 * Actions are payloads of information that send data from your application to your store. 
 * They are the only source of information for the store. You send them to the store using store.dispatch().
 */
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {}