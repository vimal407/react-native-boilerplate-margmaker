import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUser } from './homeActions'

const initialState = {
  isLoading: false,
  userList: [],
  deviceFCMToken: '',
  FinishIntro: true,
  validBiometric: false,
  isLanguage: '',
  isLangIntro: false,
  isLogin: false,
  userName: '',
  isActivateBIO: false
}

export const getUser = createAsyncThunk('USERS_LIST', async requestObject => {
  const { status, data } = await fetchUser(requestObject)
  return { status, data }
})

export const storeDeviceFCMToken = createAction('REGISTERED_PUSH_NOTIFICATIONS')
export const finishIntro = createAction('FINISH_INTRO')
export const enabledBiometric = createAction('ENABLED_BIOMETRIC')
export const language = createAction('SET_LANGUAGE')
export const LangIntro = createAction('LANGUAGE_INTRO')
export const setLogin = createAction('SET_LOGIN')
export const logout = createAction('LOGOUT')
export const biometricActivate = createAction('ACTIVATE_BIOMETRIC')

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.userList = payload.data
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false
      })

      .addCase(storeDeviceFCMToken, (state, { payload }) => {
        state.deviceFCMToken = payload
      })
      .addCase(finishIntro, state => {
        state.FinishIntro = !state.FinishIntro
      })
      .addCase(enabledBiometric, state => {
        state.validBiometric = !state.validBiometric
      })

      .addCase(language, (state, { payload }) => {
        state.isLanguage = payload
      })
      .addCase(LangIntro, state => {
        state.isLangIntro = !state.isLangIntro
      })
      .addCase(setLogin, (state, { payload }) => {
        state.isLogin = !state.isLogin
        state.userName = payload
        state.validBiometric = payload ? true : false
      })
      .addCase(biometricActivate, state => {
        state.isActivateBIO = !state.isActivateBIO
      })
      .addCase(logout, state => {
        return {
          ...initialState,
          isLangIntro: true,
          isActivateBIO: state.isActivateBIO
        }
      })
  }
})

export default homeSlice.reducer
