import {configureStore } from "@reduxjs/toolkit";
// import { Value } from "sass";
import filterClinicList from "./filterClinicListSlice"
import log_writingSlice from "./log_writingSlice"
import appSlice from "./appSlice"

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