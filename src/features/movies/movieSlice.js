import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MovieApi from '../../apis/MovieApi';
import { Apikey } from '../../apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async()=>{
    const movieText = "Harry";

    const response = await MovieApi.get(`/?i=tt3896198&apikey=${Apikey}&s=${movieText}&type=movie`)
      .catch((error)=>{
        console.log("Error", error)
      })
      return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async()=>{
    const seriesText = "Friends";

    const response = await MovieApi.get(`/?i=tt3896198&apikey=${Apikey}&s=${seriesText}&type=series`)
      .catch((error)=>{
        console.log("Error", error)
      })
      return response.data;
})

const initialState = {
    movies:{},
    shows:{}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        addMovies: (state, {payload}) =>{
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
            
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, shows: payload}
        },

    },

})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;