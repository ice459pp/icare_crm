import { createSlice } from "@reduxjs/toolkit";

const initState = {
  clinic_status: sessionStorage.getItem("clinic_status") || "",
  department: sessionStorage.getItem("department") || [],
  city: sessionStorage.getItem("city") || "",
  district: sessionStorage.getItem("district") || "",
  searchText: sessionStorage.getItem("searchText") || "",
  page: sessionStorage.getItem("page") || 1,
  permutations: sessionStorage.getItem("permutations") || "Dnew",
};

const filterSlice = createSlice({
  name: "filter-slice",
  initialState: initState,
  reducers: {
    onClinicStatus(state, action) {
      let value = action.payload;
      sessionStorage.setItem("clinic_status", value);
    },
    onDepartment(state, action) {
      let value = action.payload;
      sessionStorage.setItem("department", value);
    },
    onCity(state, action) {
      let value = action.payload;
      sessionStorage.setItem("city", value);
    },
    onDistrict(state, action) {
      let value = action.payload;
      sessionStorage.setItem("district", value);
    },
    onsearchText(state, action) {
      let value = action.payload;
      sessionStorage.setItem("searchText", value);
    },
    onPage(state, action) {
      let value = action.payload;
      sessionStorage.setItem("page", value);
    },
    onPermutations(state, action) {
      let value = action.payload;
      sessionStorage.setItem("permutations", value);
    },
    resetState() {
      sessionStorage.clear();
    },
  },
});

export const filterAction = filterSlice.actions;
export default filterSlice.reducer;
