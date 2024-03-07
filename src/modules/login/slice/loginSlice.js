import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
  }
})

export default loginSlice.reducer
