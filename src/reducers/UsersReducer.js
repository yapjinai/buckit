const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

const usersReducer = (state=defaultState, action) => {
  switch (action.type) {

    case 'SET_CURRENT_USER':
      return {
        ...state,
        user: action.payload, // user object
        loggedIn: true,
        // authenticatingUser: false
      }

    case 'LOG_OUT':
      return {
        ...state,
        user: null, // user object
        loggedIn: false,
        // authenticatingUser: false
      }

    case 'AUTHENTICATING_USER': //tells the app we're fetching
      return { ...state, authenticatingUser: true }

    case 'AUTHENTICATED_USER':
      return { ...state, authenticatingUser: false }

    //////////////////////////

    case 'ADD_TODO':
      let newItemAdded = [...state.user.items]
      newItemAdded.push(action.payload)
      return {
        ...state,
        user: {
          ...state.user,
          items: newItemAdded
        }
      }

    case 'REMOVE_TODO':
      let newItemRemoved = [...state.user.items]
      newItemRemoved = newItemRemoved.filter(i => i.id !== action.payload.id)
      return {
        ...state,
        user: {
          ...state.user,
          items: newItemRemoved
        }
      }


    default:
      return state
  }
}

export default usersReducer
