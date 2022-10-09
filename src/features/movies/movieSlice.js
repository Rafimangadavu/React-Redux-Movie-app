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
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id)=>{

    const response = await MovieApi.get(`/?apikey=${Apikey}&i=${id}&Plot=full`
      )
      return response.data;
})

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
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
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, selectMovieOrShow: payload}
        },

    },

})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getASelectMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;