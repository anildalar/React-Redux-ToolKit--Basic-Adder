import { configureStore } from "@reduxjs/toolkit";
import addSubReducer from "../features/addsub/addSubSlice";


export const store = configureStore({
    //1 p:V
    reducer:{
        //1. P:V

        //2. Method
        addSub:addSubReducer
    }
})