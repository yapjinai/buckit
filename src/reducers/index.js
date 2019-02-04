import { combineReducers } from 'redux'

import usersReducer from './UsersReducer'
import itemsReducer from './ItemsReducer'

export const rootReducer = combineReducers({
  usersReducer,
  itemsReducer
})
