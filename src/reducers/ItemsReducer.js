const defaultState = {
  items: []
}

const itemsReducer = (state=defaultState, action) => {
  switch (action.type) {

    case 'SET_ALL_ITEMS':
      return {
        // ...state,
        items: action.payload
      }

    default:
      return state
  }
}

export default itemsReducer
