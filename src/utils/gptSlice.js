import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            state.movieResults = action.payload;
        },
        addGptQuery: (state, action) => {
            state.gptQuery = action.payload;
        },
    },
})

export const { toggleGptSearchView, addGptMovieResult, addGptQuery } = gptSlice.actions;
export default gptSlice.reducer