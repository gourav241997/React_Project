import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  return (
    <div className="details">
      <NavLink to="/" className="bth">
      &#8592; Back to home
      </NavLink>

      {movies
        .filter((movies) => movies.title === productId)
        .map((movie) => (
          <div className="detailcard">
            <img src={movie.posterurl} alt="detailimage" />
            <div className='detailcontent'>
            <h2>{movie.title}</h2>
              <ul>
            
                <li className="lidetail">
                  <div className='list-content-heading'>imdb rating</div>
                  <div className='list-content-detail'>{movie.imdbRating}</div>
                </li>
                <li className="lidetail">
                  <div className='list-content-heading'>Content Rating</div>
                  <div className='list-content-detail'>{movie.contentRating}</div>
                </li>
                <li className="lidetail">
                  <div className='list-content-heading'>Average Rating</div>
                  <div className='list-content-detail'>{movie.averageRating}</div>
                </li>
                <li className="lidetail">
                  <div className='list-content-heading'>Genres</div>
                  <div className='list-content-detail'>{movie.genres.map(genre=>genre)}</div>
                </li>
                <li className="lidetail">
                  <div className='list-content-heading'>Actors</div>
                  <div className='list-content-detail'>{movie.actors.map(actor=>actor)}</div>
                </li>
                <li className="lidetail">
                  <div className='list-content-heading'>Release Date</div>
                  <span className='list-content-detail'>{movie.releaseDate}</span>
                </li>
                <li className="lidetail">
                  <div className='list-content-heading'>Story line</div>
                  <span className='list-content-detail'>'{movie.storyline}</span>
                </li>
              </ul>
    
            
            </div>
           
          </div>
        
        ))}
       
       <hr/>
    </div>
  );
};

export default MovieDetail;
