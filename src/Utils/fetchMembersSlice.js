import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchMembers = createAsyncThunk('fetchMembersSlice', (memberApi) => {
    const apiData = fetch(memberApi).then(data => data.json())
    
    return apiData
})

const fetchMembersSlice = createSlice({
    name : "fetchMembersSlice",
    initialState : {
        loading : false,
        membersData : [],
        error : ""
    },
       extraReducers : builder => {
        builder.addCase(fetchMembers.pending,(state) => {
            console.log("loading true")
            state.loading = true
        })
        builder.addCase(fetchMembers.fulfilled,(state,action) => {
            console.log("loading true")
            state.loading = false
            state.membersData = action.payload 
            state.error = ""
        })
        builder.addCase(fetchMembers.rejected,(state,action) => {
            console.log("loading true")
           state.loading = false
            state.membersData = [] 
            state.error = action.error.message
        })
       }
    }
)


export default fetchMembersSlice.reducer