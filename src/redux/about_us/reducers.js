  import { ABOUT_US } from "./types"
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  export const aboutUsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ABOUT_US.request:
        return {
          ...state,
          loading: true
        }
      case ABOUT_US.add:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case ABOUT_US.error:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  