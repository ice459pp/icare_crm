import {configureStore } from "@reduxjs/toolkit";
// import { Value } from "sass";
import filterClinicList from "./filter-clinic-list-slice"
import log_writingSlice from "./log-writing-slice"
import appSlice from "./app-slice"

const store=configureStore({
    reducer:{
        // key:Value
        // list:listSlice,
        // article:articleSlice,
        // sort:sortSlice
        filterClinicList:filterClinicList,
        log_writingSlice:log_writingSlice,
        appSlice: appSlice
    }
})

export default store