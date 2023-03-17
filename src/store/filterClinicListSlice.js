import { createSlice } from "@reduxjs/toolkit";
const initFilter = {
  clinic_status: "",
  city: "",
  district: "",
  pages: 1,
  clinicName: "",
  dateSort: "normal",
};
const filterClinicListSlice = createSlice({
  name: "filterClinic",
  initialState: initFilter,
  // 文章搜尋欄位
  reducers: {
    onClinicStatusChange(state, action) {
      let value = action.payload;
    //   console.log(value, "value in redux");
      state.clinic_status = value;
    },
    onClinicNameChange(state, action) {
      let value = action.payload;
      state.clinicName = value;
    },
    onPageChange(state, action) {
        let page=action.payload
        state.pages= page
    },

    onCityChange(state, action) {
        let value = action.payload;
        state.city = value;
    },

    onDistrictChange(state, action) {
        let value = action.payload;
        state.district = value;
    },
    onDateSortChange(state, action) {
        let value = action.payload;
        if (value) {
            state.dateSort = "normal";
        }else{
            state.dateSort = "reverse";
        }
        // console.log(state.dateSort,"date in redux")
    },
    resetFilter(state, action) {},
  },
});
export const {
  onPageChange,
  onClinicNameChange,
  onCityChange,
  onClinicStatusChange,
  onDistrictChange,
  onDateSortChange,
  resetFilter,
} = filterClinicListSlice.actions;

export default filterClinicListSlice.reducer;
