import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movieListing",
    initialState,
    reducers: {
        adddMovie: (state, action) => {
            state.movies = action.payload
            console.log(current(state))
        }
    }
})

export const {adddMovie} = movieSlice.actions
export default movieSlice.reducer