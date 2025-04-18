import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMoives: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addTrendingMoives: (state, action) => {
      state.trendingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMoives, addTrailer, addTrendingMoives } = movieSlice.actions;
export default movieSlice.reducer;
