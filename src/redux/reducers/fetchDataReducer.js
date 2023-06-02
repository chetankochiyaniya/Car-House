import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from '../constant'

const initialState = {
  data: null,
  isLoading: false,
  error: null
}

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload
      }
    default:
      return state
  }
}

export default fetchDataReducer
