import { configureStore } from '@reduxjs/toolkit'
import allRecipesReducer from './features/allListsSlice'
import currentListReducer from './features/currentListSlice'

export default configureStore({
    reducer: {
        allLists: allRecipesReducer,
        currentList: currentListReducer
    }
})