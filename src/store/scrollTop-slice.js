import { createSlice } from "@reduxjs/toolkit";

const initState = {
  scrollTop:0,
  control:false
};

const scrollTopSlice = createSlice({
  name: "scrollTop-slice",
  initialState: initState,
  reducers: {
    scrollTopHandler(state,action){
        state.scrollTop=action.payload
    },
    scrollControl(state,action){
        state.control=action.payload
    },
    reset(state,action){
      state.scrollTop=0
      state.control=false
    }
  },
});

export const scrollTopAction = scrollTopSlice.actions;
export default scrollTopSlice.reducer;
