import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import MovieApi from '../../apis/MovieApi';
import { Apikey } from '../../apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';


const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const movieText = "Harry";
    const fetchMovies =async ()=>{
      const response = await MovieApi.get(`/?i=tt3896198&apikey=${Apikey}&s=${movieText}&type=movie`)
      .catch((error)=>{
        console.log("Error", error)
      })
      dispatch(addMovies(response.data));
    };
    fetchMovies()
  },[dispatch]);

  return (
    <>
    <div className='banner-image'>Home</div>
    <MovieListing />
    </>
  )
}

export default Home