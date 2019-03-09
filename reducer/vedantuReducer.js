
import { LOADING, SUCCESS, FAILURE } from '../action/constant'
const initialState = {
  resultData: [],
  isService:false,
  error: false
}

export default function vedantuReducer (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        resultData: [],
        isService:false

      }
    case SUCCESS:
      return {
        ...state,
        isService:true,
        resultData: action.data
      }
    case FAILURE:
      return {
        ...state,
        error: true,
        resultData: (action.error.errors? action.error.errors: '')
      }
    default:
      return state
  }
}