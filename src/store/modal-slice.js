import { createSlice } from "@reduxjs/toolkit";

const modalState = {
  modalIsShow: false,
};

const modalSlice = createSlice({
  name: "modal-slice",
  initialState: modalState,
  reducers: {
    showModal(state,action){
        state.modalIsShow=true
    },
    closeModal(state,action){
        state.modalIsShow=false
    }
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
