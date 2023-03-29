import { createSlice } from "@reduxjs/toolkit";

const initState = {
  clinic_status: sessionStorage.getItem("clinic_status") || "",
  // department: sessionStorage.getItem("department") || [],
  department: [],
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
      state.clinic_status = value;
      sessionStorage.setItem("clinic_status", value);
    },
    onDepartment(state, action) {
      let value = action.payload;
      if (value === "reset") {
        state.department = [];
        return;
      }
      if (state.department.includes(value)) {
        state.department = state.department.filter((item) => item !== value);
      } else {
        state.department.push(value);
      }
      // sessionStorage.setItem("department", state.department);
    },
    onCity(state, action) {
      let value = action.payload;
      state.city = value;

      sessionStorage.setItem("city", value);
    },
    onDistrict(state, action) {
      let value = action.payload;
      state.district = value;

      sessionStorage.setItem("district", value);
    },
    onsearchText(state, action) {
      let value = action.payload;
      state.searchText = value;

      sessionStorage.setItem("searchText", value);
    },
    onPage(state, action) {
      let value = action.payload;
      state.page = value;

      sessionStorage.setItem("page", value);
    },
    onPermutations(state, action) {
      let value = action.payload;
      state.permutations = value;

      sessionStorage.setItem("permutations", value);
    },
    resetState() {
      sessionStorage.removeItem("clinic_status");
      sessionStorage.removeItem("department");
      sessionStorage.removeItem("city");
      sessionStorage.removeItem("district");
      sessionStorage.removeItem("searchText");
    },
  },
});

export const filterAction = filterSlice.actions;
export default filterSlice.reducer;
