import { createSlice } from "@reduxjs/toolkit";


const fetchMembersSlice = createSlice({
    name : "fetchMembersSlice",
    initialState : {
        membersData : []
    },
    reducers : {
        fetchMembers : async (state,action) =>{
            const apiData =await fetch(action.payload)
            const jsonData = await apiData.json()
            state.membersData = jsonData
        
            console.log(state.membersData)
        }
    }
})

export const {fetchMembers} = fetchMembersSlice.actions

export default fetchMembersSlice.reducer