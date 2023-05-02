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
        console.log(action.payload,"aaadoklsosakfods")
        state.scrollTop=action.payload
    },
    scrollControl(state,action){
        state.control=action.payload
    }
  },
});

export const scrollTopAction = scrollTopSlice.actions;
export default scrollTopSlice.reducer;
