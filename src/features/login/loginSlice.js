import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: localStorage.getItem('user') || '',
    isLogin: false
  },
  reducers: {
    loginSuccessful: (state, action) => {
      localStorage.setItem('user', action.payload)
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = ''
      localStorage.removeItem('user');
    },
    isLoginSuccessful: (state, action) => {
      state.isLogin = action.payload === state.user
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccessful, logoutUser, isLoginSuccessful } = loginSlice.actions

export default loginSlice.reducer