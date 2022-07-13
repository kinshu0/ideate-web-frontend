import { createSlice } from "@reduxjs/toolkit"



export const currentListSlice = createSlice({
    name: "currentList",
    initialState: {testing: 123},
    reducers: {
        setCurrentList: (state, action) => {
            // state = action.payload
            return action.payload
        },
        editListTitle: (state, action) => {
            
        },
        addListItem: (state, action) => {

        },
        editListItem: (state, action) => {

        },
        deleteListItem: (state, action) => {

        },
    }
})

export const { setCurrentList, editListTitle, addListItem, editListItem, deleteListItem } = currentListSlice.actions

export const selectCurrentList = (state) => state.currentList

export default currentListSlice.reducer