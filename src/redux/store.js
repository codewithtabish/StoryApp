import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducer/appSlice";

export const store=configureStore({
    reducer:{
        app:appSlice
    }
})