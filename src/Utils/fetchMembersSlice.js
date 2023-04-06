import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchMembers = createAsyncThunk('fetchMembersSlice', (memberApi) => {
    const apiData = fetch(memberApi).then(data => data.json())

    return apiData
})

const fetchMembersSlice = createSlice({
    name: "fetchMembersSlice",
    initialState: {
        loading: false,
        membersData: [],
        error: ""
    },
    reducers: {
        addNewMembersData: (state, action) => {
            const newMembersState = state.membersData?.map(item => {

                if (item.id === action.payload.id) {
                    console.log(action.payload)
                    return action.payload
                }
                else {
                    return item
                }
            })

            state = { ...state, membersData: newMembersState }

            return state

        },
        deleteMemberData: (state, action) => {


            const handleDeletionFilter = (membersData) => {
                return membersData.id !== action.payload.id
            }

            const nonDeletedState = state.membersData?.filter(handleDeletionFilter)

            state = { ...state, membersData: nonDeletedState }

            return state
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchMembers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchMembers.fulfilled, (state, action) => {
            state.loading = false
            state.membersData = action.payload
            state.error = ""
        })
        builder.addCase(fetchMembers.rejected, (state, action) => {
            state.loading = false
            state.membersData = []
            state.error = action.error.message
        })
    }
}
)

export const { addNewMembersData, deleteMemberData } = fetchMembersSlice.actions

export default fetchMembersSlice.reducer