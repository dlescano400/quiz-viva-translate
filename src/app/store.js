import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/test'
import loginReducer from '../features/login/loginSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
})