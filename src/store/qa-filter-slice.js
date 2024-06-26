import { createSlice } from "@reduxjs/toolkit";
import { resetState } from "./log-writing-slice";

const initState = {
    searchText:""
};

const qaFilterSlice = createSlice ({
    name: "qafilter-slice",
    initialState: initState,
    reducers: {
        onSearchText(state, action){
            let value = action.payload;
            state.searchText = value;
        },
        resetState(state, action) {
            state.searchText = "";
        } 
    }
});

export const qaFilterAction = qaFilterSlice.actions;
export default qaFilterSlice.reducer;