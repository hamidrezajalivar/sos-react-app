import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import postReducer from './postSlice'

const store = configureStore({
  reducer: {
    posts: postReducer,
    filter: filterReducer=> getDefaultMiddleware(),  
  }
})

export default store
