import { ADD_USER, SIGNOUT, MODEL, SIGNIN_USER } from '../constant'

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
