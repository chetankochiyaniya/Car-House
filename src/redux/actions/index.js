import {
  ADD_USER,
  SIGNOUT,
  MODEL,
  SIGNIN_USER,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  DELETE_USER,
  EDIT_CAR_MODEL,
  ADD_CAR,
  UPDATE_CAR,
  DELETE_CAR
} from '../constant'
import carDetailsData from '../../data/carDetails.json'

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

export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST'
})

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data
})

export const fetchDataError = (error) => ({
  type: 'FETCH_DATA_ERROR',
  payload: error
})

export const getCarDetails = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest())
    try {
      dispatch(fetchDataSuccess(carDetailsData))
    } catch (error) {
      dispatch(fetchDataError(error.message))
    }
  }
}

export const addToWishlist = (userId, carId) => ({
  type: ADD_TO_WISHLIST,
  payload: {
    userId,
    carId
  }
})

export const removeFromWishlist = (userId, carId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: {
    userId,
    carId
  }
})

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId
})

export const handleCarEditModel = (value) => ({
  type: EDIT_CAR_MODEL,
  payload: value
})

export const addCar = (value) => ({
  type: ADD_CAR,
  payload: value
})

export const updateCar = (carId, updatedData) => {
  return {
    type: UPDATE_CAR,
    carId,
    updatedData
  }
}

export const deleteCar = (carId) => {
  return {
    type: DELETE_CAR,
    carId
  }
}