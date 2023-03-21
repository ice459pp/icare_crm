import { createSlice } from "@reduxjs/toolkit"
const KEY_TOKEN = "user-token"

const appState = {
  isLogin: window.localStorage.getItem(KEY_TOKEN) !== null, 
  userToken: window.localStorage.getItem(KEY_TOKEN)
}

const appSlice = createSlice({
  name: 'app-slice', 
  initialState: appState, 
  reducers: {
    login(state, action) {
      if (action.payload) {
        window.localStorage.setItem(KEY_TOKEN, action.payload)
        state.userToken = action.payload
        state.isLogin = true
      }
    },
    logout(state) {
      window.localStorage.removeItem(KEY_TOKEN)
      state.userToken = ""
      state.isLogin = false
    }
  }
})

export const appAction = appSlice.actions
export default appSlice.reducer