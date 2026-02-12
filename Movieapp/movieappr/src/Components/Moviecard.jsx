import React from 'react';
import '../css/MovieCard.css';
import { useMovieContext } from '../context/movieContext';


function Moviecard({movie}) {
    const {isFavorite, addToFavorite, removeFromFavorite} =  useMovieContext();
    const favorite = isFavorite(movie.id)

    function handlelike(e){
        e.preventDefault();
        if (favorite) removeFromFavorite(movie.id)
            else addToFavorite(movie)
    }
  return (
    <div className='card'>
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className='movie-overlay'>
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handlelike}>👍</button>
            </div>
        </div>
        <div className='movie-info'>
            <h2>{movie.title} </h2>
            <p>{movie.release_date}</p>
        </div>
    </div>
    </div>
  )
}

export default Moviecard