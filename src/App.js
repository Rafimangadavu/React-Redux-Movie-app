import React from "react";
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFount from "./components/PageNotFount/PageNotFount";
import Footer from "./components/Footer/Footer";
import'../src/styles/App.css';

function App() {

  return (
    <Router> 
    <div className="App">
      <Header></Header>
      <div className="container">
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:imdbID" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFount/>} />
        </Routes>
        </div>
      <Footer />

    </div>
    </Router>
   
  )
}

export default App;
