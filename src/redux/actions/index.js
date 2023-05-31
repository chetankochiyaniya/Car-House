import { ADD_USER, SIGNOUT, MODEL, SIGNIN_USER, CUSTOM_ERROR } from '../constant'

export const UserSignUp = (values) => {
  return {
    type: ADD_USER,
    payload: {
      values
    }
  }
}

export const UserSignIn = (values) => {
  return {
    type: SIGNIN_USER,
    payload: { values }
  }
}
export const UserSignOut = () => {
  return {
    type: SIGNOUT
  }
}

export const HandleModel = (values) => {
  return {
    type: MODEL,
    payload: values
  }
}

export const UpdateCustomError = (values) => {
  return {
    type: CUSTOM_ERROR,
    payload: values
  }
}
