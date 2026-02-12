import React from 'react';
import '../css/Favorites.css';
import { useMovieContext } from '../context/movieContext';
import Moviecard from '../Components/Moviecard';

function Favorite() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className='favorites'>
                <h1>My Favorite Movies</h1>
        <div className='movies-grid'>
            {favorites.map((movie) =>  (
                <Moviecard movie={movie} key={movie.id}/>
            ))}
        </div>
        </div>
        )
    }
  return (
    <div className='favorites-empty'>
        <h2>No favorite movies yet</h2>
        <p>Add your favorite movies</p>
    </div>
  )
}

export default Favorite