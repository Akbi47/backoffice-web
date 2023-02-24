import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'login',
  initialState: {
    auth: false
  },
  reducers: {
    loginChange: (state, action) => {
      state.auth = action.payload;
    },
  }
})