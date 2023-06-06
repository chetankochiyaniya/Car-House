import { UPDATE_LIKE } from '../constant'
import cardetails from '../../data/carDetails.json'
const initialState = {
  data: cardetails,
  isLoading: false,
  error: null
}

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIKE:
      if (state.data === null) {
        console.log('data is null')
        return false
      } else {
        console.log('enter in elese')
        return {
          ...state,
          data: state.data?.map((car) => {
            console.log('reducer', car.car_id === action.payload, car.car_id, action.payload)
            if (car.car_id === action.payload) {
              return {
                ...car,
                like: !car.like
              }
            }
            return car
          })
        }
      }

    default:
      return state
  }
}

export default fetchDataReducer
