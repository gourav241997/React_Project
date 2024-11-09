import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Nav";
import { useFavorites } from "../../context/Favoritecontext";

const MovieList = ({
  movies,
  searchData,
  setSelectedCategory,
  selectedCategory,
  setSearchData,
}) => {
  const filteredMovies = movies.filter((element) =>
    element.title.toLowerCase().includes(searchData.toLowerCase())
  );

  const navigate = useNavigate();
  const { addFavorite, isFavorite } = useFavorites();

  return (
    <div>
      <Nav
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        setSearchData={setSearchData}
      />
      <h3 className="movies-heading"> Movies</h3>
      <ul className="cardcontainer">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="card">
            <img
              src={movie.posterurl}
              alt="movieimages"
              onClick={() => navigate(`/${movie.title}`)}
            />

            <h4>{movie.title}</h4>
            <p>
              <span onClick={() => addFavorite(movie)}>
                Add to Favourites ❤️
              </span>
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
