// const apiUrl = 'http://localhost:3000'

// UsersReducer

export const setCurrentUser = (userObj) => ({
  type: 'SET_CURRENT_USER',
  payload: userObj
})

export const logOut = () => ({
  type: 'LOG_OUT'
})

export const authenticatingUser = () => ({
  type: 'AUTHENTICATING_USER'
})

export const authenticatedUser = () => ({
  type: 'AUTHENTICATED_USER'
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

////////////////////

export const addTodo = (itemObj) => ({
  type: 'ADD_TODO',
  payload: itemObj
})

export const removeTodo = (itemObj) => ({
  type: 'REMOVE_TODO',
  payload: itemObj
})

////////////////////

// ItemsReducer

export const setAllItems = (items) => ({
  type: 'SET_ALL_ITEMS',
  payload: items
})
