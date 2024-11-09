// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import movieData from "./Database/Moviedata.json";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { useFavorites } from "./context/Favoritecontext"
import FavoriteList from "./components/Favorites/Favorite";

import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("movies-in-theaters");
  const [searchData, setSearchData] = useState("");

  const getMoviesByCategory = () => {
    return movieData[selectedCategory] || [];
  };

  const {favorites}=useFavorites();

  return (
    <div>
      
      <Routes>
        <Route
          path="/"
          element={
            <MovieList movies={getMoviesByCategory()} searchData={searchData} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}
            setSearchData={setSearchData} />
          }
        />
        <Route path='/favorite' element={<FavoriteList favorites={favorites} movies={getMoviesByCategory()} searchData={searchData} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}
            setSearchData={setSearchData}/>}/>
         <Route
          path="/:productId"
          element={
            <MovieDetail movies={getMoviesByCategory()} searchData={searchData} selectedCategory={selectedCategory} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
