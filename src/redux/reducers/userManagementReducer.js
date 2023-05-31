import { ADD_USER, SIGNOUT, MODEL, SIGNIN_USER, CUSTOM_ERROR } from '../constant'

const initialState = {
  users: [],
  modelOpen: false,
  customError: null,
  loggedInUser: null
}

const userManagementReducer = (state = initialState, action) => {
  const { type, payload } = action
  let existingUser, user
  switch (type) {
    case ADD_USER:
      existingUser = state.users.find((user) => user.email === payload.email)
      if (existingUser) {
        return {
          ...state,
          customError: 'Email ID already exists'
        }
      } else {
        return {
          ...state,
          users: [...state.users, payload],
          customError: null
        }
      }
    case SIGNIN_USER:
      user = state.users.find(
        (user) => user.email === payload.email && user.password === payload.password
      )
      if (user) {
        return {
          ...state,
          loggedInUser: user,
          customError: null
        }
      } else {
        return {
          ...state,
          loggedInUser: null,
          customError: 'Invalid email or password'
        }
      }

    case SIGNOUT:
      return {
        ...state,
        loggedInUser: null
      }
    case MODEL:
      return {
        ...state,
        modelOpen: payload
      }
    case CUSTOM_ERROR:
      return {
        ...state,
        customError: payload
      }
    default:
      return state
  }
}

export default userManagementReducer
