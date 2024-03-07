import { combineReducers } from '@reduxjs/toolkit'
import home from '../modules/home/slice/homeSlice'

const reducers = combineReducers({
  home
})

const rootReducers = (state, action) => {
  return reducers(state, action)
}
export default rootReducers
