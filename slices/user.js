import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: true,
  },
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload
      state.loading = false
    },
    logout: (state) => {
      state.user = null
    }
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer