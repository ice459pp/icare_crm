import { createSlice } from "@reduxjs/toolkit"
const KEY_TOKEN = "user-token"

const appState = {
  isLogin: localStorage.getItem(KEY_TOKEN) !== ""
}

const appSlice = createSlice({
  name: 'app', 
  initialState: appState, 
  reducers: {
    login(state, action) {
      state.isLogin = true
      const storage = window.localStorage
      storage.setItem(KEY_TOKEN, action.payload)
    },
    logout(state) {
      state.isLogin = false
      const storage = window.localStorage
      storage.removeItem(KEY_TOKEN)
    }
  }
})

export const appAction = appSlice.actions
export default appSlice.reducer