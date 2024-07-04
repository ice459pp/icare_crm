import { createSlice } from "@reduxjs/toolkit";

const initState = {
    searchText:"",
    category:""
};

const qaFilterSlice = createSlice ({
    name: "qafilter-slice",
    initialState: initState,
    reducers: {
        onSearchText(state, action){
            let value = action.payload;
            state.searchText = value;
        },
        onCategory(state, action){
            let value = action.payload;
            state.category = value;
        },
        resetState(state, action) {
            state.searchText = "";
        } 
    }
});

export const qaFilterAction = qaFilterSlice.actions;
export default qaFilterSlice.reducer;