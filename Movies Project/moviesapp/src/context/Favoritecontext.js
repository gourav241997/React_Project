import React, { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
  const productexistinfavorites=favorites.some(element=>element===movie)
  if(!productexistinfavorites){
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
    toast.success('success \n Successfully added to favourites')
  }
   else{
    toast.error("error \n Already added in favourites")
   }
  };

  const removeFavorite = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.title !== movie.title)
    );
    toast.success('success \n Successfully removed to favourites')
  };

  const isFavorite = (movie) => {
    return favorites.some((fav) => fav.title === movie.title);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
