import { ADD_USER, SIGNOUT, MODEL, SIGNIN_USER } from '../constant'

const initialState = {
  users: [],
  modelOpen: false,
  loggedInUser: null
}

const userManagementReducer = (state = initialState, action) => {
  const { type, payload } = action
  let data
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload]
      }
    case SIGNIN_USER:
      data = state.users.filter((user) => payload.values.email == user.values.email)
      return {
        ...state,
        loggedInUser: data
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
    default:
      return state
  }
}

export default userManagementReducer
