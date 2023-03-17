import { createSlice } from "@reduxjs/toolkit";
const initLogContent = {
    log_id:"",
    clinic_id:"",
    salesName:"",
    sales_id:"",
    visit_category:"初訪",
    visit_dateTime:"",
    content:"",
    clinic_status:"可回訪",
    action:"new",
    now_dateTime:""
};
const log_writingSlice = createSlice({
  name: "log",
  initialState: initLogContent,
  // 文章搜尋欄位
  reducers: {
    onClinicStatusChange(state, action) {
        let value=action.payload
        state.clinic_status=value
    },
    onContentChange(state, action) {
        let value=action.payload
        state.content=value
        // console.log(value,"valueeeee")
    },
    onVisitDateTimeChange(state, action) {
        let value=action.payload
        state.clinic_status=value
    },
    onVisitCategoryChange(state, action) {
        let value=action.payload
        state.visit_category=value
    },
    resetState(state, action) {},
  },
});
export const {
    onClinicStatusChange,
    onContentChange,
    onVisitCategoryChange,
    resetState
} = log_writingSlice.actions;

export default log_writingSlice.reducer;
