import {configureStore } from "@reduxjs/toolkit";
// import { Value } from "sass";
import log_writingSlice from "./log-writing-slice"
import appSlice from "./app-slice"

const store=configureStore({
    reducer:{
        log_writingSlice:log_writingSlice,
        appSlice: appSlice
    }
})

export default store