import { createSlice } from "@reduxjs/toolkit";


const allCheckSlice = createSlice({

    name : "allCheckSlice" , 

    initialState : {},

    reducers : {

        addCheck : (state,action) => {
    
            state = Object.assign(state,action.payload)
            return state
        }
        ,
        removeCheck : (state) => {
                state = {}
                return state 
        }
    }
})

export const {addCheck , removeCheck} = allCheckSlice.actions

export default allCheckSlice.reducer
