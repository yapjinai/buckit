const apiUrl = 'http://localhost:3000'

export const loginUser = (username, password) => {
  console.log('hi')
  return ({
    type: 'SET_CURRENT_USER',
    payload: username
  })}

// export const loginUser = (username, password) => {
//   return (dispatch) => {
//     dispatch({ type: 'AUTHENTICATING_USER' })
//     fetch(`${apiUrl}/api/v1/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify({
//         user: {
//           username: username,
//           password: password
//         }
//       })
//     })
//       .then(response => {
//         console.log(response)
//         if (response.ok) {
//           return response.json()
//         } else {
//           throw response
//         }
//       })
//       .then(JSONResponse => {
//         console.log('%c INSIDE YE OLDE .THEN', 'color: navy', JSONResponse)
//         localStorage.setItem('jwt', JSONResponse.jwt)
//         dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
//
//       })
//       .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
//
//
//
//
//   }
// }

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    dispatch(authenticatingUser()) //tells the app we are fetching
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
  }
}

export const setCurrentUser = (userObj) => ({
  type: 'SET_CURRENT_USER',
  payload: userObj
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({
  type: 'AUTHENTICATING_USER'
})
