import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const persistConfig = {
  key: 'persist',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Apply redux-thunk middleware
const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
export default store
