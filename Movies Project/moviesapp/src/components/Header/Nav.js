import React from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Nav = ({ onSelectCategory, selectedCategory, setSearchData }) => {
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <div className="navbar">
      <div className="navbar-list">
        <ul className="navbar-ul">
          <NavLink
            to="/"
            className={`navlink ${
              selectedCategory === "movies-in-theaters" && "selected"
            }`}
            onClick={() => onSelectCategory("movies-in-theaters")}
          >
            Movies in theaters
          </NavLink>
          <NavLink
            to="/"
            className={` navlink ${
              selectedCategory === "movies-coming" ? "selected" : ""
            }`}
            onClick={() => onSelectCategory("movies-coming")}
          >
            Coming soon
          </NavLink>
          <NavLink
            to="/"
            className={` navlink ${
              selectedCategory === "top-rated-india" ? "selected" : ""
            }`}
            onClick={() => onSelectCategory("top-rated-india")}
          >
            Top rated Indian
          </NavLink>
          <NavLink
            to="/"
            className={`navlink ${
              selectedCategory === "top-rated-movies" ? "selected" : ""
            }`}
            onClick={() => onSelectCategory("top-rated-movies")}
          >
            Top rated movies
          </NavLink>
          <NavLink
            to="/favorite"
            className={`navlink ${
              selectedCategory === "favourite" ? "selected" : ""
            }`}
            onClick={() => onSelectCategory("favourite")}
          >
            Favorites
          </NavLink>
        </ul>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search movie"
          onChange={(e) => handleChange(e)}
        />

        <button>
          <CiSearch size={18} />
        </button>
      </div>
    </div>
  );
};

export default Nav;
