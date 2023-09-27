import { createSlice } from "@reduxjs/toolkit";

const initState = {
  clinic_status: "",
  // department: sessionStorage.getItem("department") || [],
  department: [],
  city: "",
  district: "",
  searchText: "",
  page: 1,
  permutations: "Dnew",
  visitor: "",
};

let departmentArr = [
  "不分科",
  "內科",
  "兒科",
  "骨科",
  "耳鼻喉科",
  "皮膚科",
  "精神科",
  "整形外科",
  "家醫科",
  "外科",
  "婦產科",
  "泌尿科",
  "兒童牙科",
  "眼科",
  "神經科",
  "復健科",
  "牙科",
  "中醫一般科"
];

const filterSlice = createSlice({
  name: "filter-slice",
  initialState: initState,
  reducers: {
    onClinicStatus(state, action) {
      let value = action.payload;
      state.clinic_status = value;
      // sessionStorage.setItem("clinic_status", value);
    },
    onVisitor(state, action) {
      let value = action.payload;
      state.visitor = value
    },
    onDepartment(state, action) {

      let value = action.payload;
      if (value === "reset") {
        state.department = [];
        return;
      }
      if (value === 'all') {
        state.department = departmentArr
        return
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

      // sessionStorage.setItem("city", value);
    },
    onDistrict(state, action) {
      let value = action.payload;
      state.district = value;

      // sessionStorage.setItem("district", value);
    },
    onsearchText(state, action) {
      let value = action.payload;
      state.searchText = value;

      // sessionStorage.setItem("searchText", value);
    },
    onPage(state, action) {
      let value = action.payload;
      state.page = value;

      // sessionStorage.setItem("page", value);
    },
    onPermutations(state, action) {
      let value = action.payload;
      state.permutations = value;

      // sessionStorage.setItem("permutations", value);
    },
    resetState(state, action) {
      state.searchText = "";
      // state=initState
      // sessionStorage.removeItem("clinic_status");
      // sessionStorage.removeItem("department");
      // sessionStorage.removeItem("city");
      // sessionStorage.removeItem("district");
      // sessionStorage.removeItem("searchText");
    },
  },
});

export const filterAction = filterSlice.actions;
export default filterSlice.reducer;
