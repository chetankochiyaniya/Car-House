import { CAR_DETAILS } from '../constant'

const initialState = {
  carDetails: null
}

const carManagementReducer = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case CAR_DETAILS:
      return

    default:
      return state
  }
}

export default carManagementReducer
