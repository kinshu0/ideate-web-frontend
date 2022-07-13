import { API_ENDPOINT } from "../api";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const loadLists = createAsyncThunk(
    "allLists/getAllLists",
    async () => {
        const data = await fetch(`${API_ENDPOINT}/lists`)
        const json = await data.json()
        return json
    }
)


export const allListsSlice = createSlice({
    name: "allLists",
    initialState: {
        lists: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: {
        [loadLists.pending]: (state, action) => {
          state.status = 'loading';
        },
        [loadLists.fulfilled]: (state, action) => {
          state.lists = action.payload;
          state.status = 'succeess';
        },
        [loadLists.rejected]: (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
    }
})

export const selectAllLists = (state) => state.allLists.lists

export default allListsSlice.reducer