import { configureStore } from "@reduxjs/toolkit";
import fetchMembersSlice from "./fetchMembersSlice";
import allCheckSlice from "./allCheckSlice";



const store = configureStore({
    reducer :{
        fetchMembersSlice : fetchMembersSlice ,
        allCheckSlice : allCheckSlice
    }
})

export default store