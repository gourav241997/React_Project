import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Nav";
import { useFavorites } from "../../context/Favoritecontext";

const FavoriteList = ({
    favorites,
  searchData,
  setSelectedCategory,
  selectedCategory,
  setSearchData,
}) => {
  const filteredMovies = favorites.filter((element) =>
    element.title.toLowerCase().includes(searchData.toLowerCase())
  );

  const navigate = useNavigate();
  const { addFavorite, removeFavorite,isFavorite } = useFavorites();

  return (
    <div>
      <Nav
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        setSearchData={setSearchData}
      />
      <h3 className="movies-heading"> Favourites</h3>
      {
            filteredMovies.length>0?
            <div>
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
                  {isFavorite(movie) ? (
                      <span onClick={() => removeFavorite(movie)}>Remove from Favourites &#9746; </span>
                    ) : (
                      <span onClick={() => addFavorite(movie)}>Add to Favourites ❤️</span>
                    )}
                  </p>
                </div>
              ))}
            </ul>
            </div>:<div className="datanotfound">No data found</div>
      }
     
      
    </div>
  );
};

export default FavoriteList;
