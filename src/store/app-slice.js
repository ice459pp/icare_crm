import { createSlice } from "@reduxjs/toolkit"
const KEY_TOKEN = "user-token"

const appState = {
  isLogin: window.localStorage.getItem(KEY_TOKEN) !== null
}

const appSlice = createSlice({
  name: 'app-slice', 
  initialState: appState, 
  reducers: {
    login(state) {
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
    }
  }
})

export const appAction = appSlice.actions
export default appSlice.reducer