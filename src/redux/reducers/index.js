import { combineReducers } from 'redux'

import userManagementReducer from './userManagementReducer'
import fetchDataReducer from './fetchDataReducer'

const rootReducers = combineReducers({
  userManagementReducer,
  fetchDataReducer
})

export default rootReducers
