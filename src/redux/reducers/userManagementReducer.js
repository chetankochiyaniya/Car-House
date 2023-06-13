import { ADD_USER, SIGNOUT, MODEL, SIGNIN_USER, DELETE_USER } from '../constant'

const initialState = {
  users: [{ values: { id: 999999, name: 'admin', email: 'admin@gmail.com', password: 'admin' } }],
  modelOpen: false,
  loggedInUser: null,
  adminName: 'admin',
  adminUser: 'admin@gmail.com',
  adminPassword: 'admin',
  adminRole: false
}

const userManagementReducer = (state = initialState, action) => {
  const { type, payload } = action
  let data
  const uid = action.payload
  const updatedUsers = state.users.filter((user) => user.values.id !== uid)
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
        loggedInUser: [payload]
      }
    case SIGNIN_USER:
      data = state.users.filter((user) => payload.values.email == user.values.email)
      if (
        payload.values.email === state.adminUser &&
        payload.values.password === state.adminPassword
      ) {
        return {
          ...state,
          loggedInUser: data,
          adminRole: true
        }
      } else {
        return {
          ...state,
          loggedInUser: data,
          adminRole: false
        }
      }

    case SIGNOUT:
      return {
        ...state,
        loggedInUser: null,
        adminRole: false
      }
    case MODEL:
      return {
        ...state,
        modelOpen: payload
      }
    case DELETE_USER:
      return {
        ...state,
        users: updatedUsers
      }
    default:
      return state
  }
}

export default userManagementReducer
