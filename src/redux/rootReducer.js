import { combineReducers } from 'redux'

import aboutUsReducer from './about_us/reducers'

const rootReducer = combineReducers({
  aboutUs: aboutUsReducer,
})

export default rootReducer