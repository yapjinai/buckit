const apiUrl = 'http://localhost:3000'

export const setCurrentUser = (userObj) => ({
  type: 'SET_CURRENT_USER',
  payload: userObj
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

export const authenticatingUser = () => ({
  type: 'AUTHENTICATING_USER'
})

export const authenticatedUser = () => ({
  type: 'AUTHENTICATED_USER'
})










// export const loginUser = (username, password) => {
//   console.log('hi')
//   return ({
//     type: 'SET_CURRENT_USER',
//     payload: username
//   })}

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
