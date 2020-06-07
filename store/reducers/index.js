// https://medium.com/react-native-training/redux-4-ways-95a130da0cdc
import { combineReducers } from 'redux'
import appData from './dataReducer'

const rootReducer = combineReducers({
    appData
})

export default rootReducer