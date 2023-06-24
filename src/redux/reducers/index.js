import { combineReducers } from 'redux'

import userManagementReducer from './userManagementReducer'
import fetchDataReducer from './fetchDataReducer'
import wishlistReducer from './wishlistReducer'

const rootReducers = combineReducers({
  userManagementReducer,
  fetchDataReducer,
  wishlistReducer
})

export default rootReducers
