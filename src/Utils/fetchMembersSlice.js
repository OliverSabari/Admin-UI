import { createSlice } from "@reduxjs/toolkit";


const fetchMembersSlice = createSlice({
    name : "fetchMembersSlice",
    initialState : [],
    reducers : {
        fetchMembers : async (state,action) =>{
            
            const apiData =await fetch(action.payload)
            const jsonData = await apiData.json()
            state = jsonData
          console.log(state)
        }
    }
})

export const {fetchMembers} = fetchMembersSlice.actions

export default fetchMembersSlice.reducer