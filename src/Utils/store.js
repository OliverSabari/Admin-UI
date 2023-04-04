import { configureStore } from "@reduxjs/toolkit";
import fetchMembersSlice from "./fetchMembersSlice";



const store = configureStore({
    reducer :{
        fetchMembersSlice : fetchMembersSlice
    }
})

export default store