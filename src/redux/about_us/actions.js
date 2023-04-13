import axios from 'axios'
import { ABOUT_US } from './types'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: ABOUT_US.request
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: ABOUT_US.add,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: ABOUT_US.error,
    payload: error
  }
}