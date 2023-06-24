// wishlistReducer.js

import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constant'

const initialState = {}

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const { userId, carId } = action.payload || {} // Check if action.payload is defined
      if (!userId || !carId) {
        return state
      }
      const userWishlist = state[userId] || []
      return {
        ...state,
        [userId]: [...userWishlist, carId]
      }
    }
    case REMOVE_FROM_WISHLIST: {
      const { userId, carId } = action.payload || {} // Check if action.payload is defined
      if (!userId || !carId) {
        return state
      }
      const userWishlist = state[userId] || []
      const updatedWishlist = userWishlist.filter((id) => id !== carId)
      return {
        ...state,
        [userId]: updatedWishlist
      }
    }
    default:
      return state
  }
}

export default wishlistReducer
