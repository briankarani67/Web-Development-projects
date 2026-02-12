import React from 'react';
import Moviecard from '../Components/Moviecard';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';

import '../css/home.css';

function Home() {

    const [search, setsearch] = useState("");
    const [movies, setmovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopularMovies();
                setmovies(popularMovies)
            }catch (err){
                console.log(err)
                setError('Failed to load movies..')
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    // const movies = [
    //     {id:1, title:"black mirror", release_date:"25/05/2017"},
    //     {id:2, title:"Before Angels", release_date:"25/05/2017"},
    //     {id:3, title:"The Matrix", release_date:"25/05/2013"},
    // ]



    // function handlesearch = async (e) => {
        async function handlesearch(e) {
        e.preventDefault();
        if (!search.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(search);
            setmovies(searchResults);
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movies")
        }finally{
            setLoading(false)
        }
        setsearch("");
    }
  return (
    <div className='home'>
        <form className='search-form' onSubmit={handlesearch}>
            <input value={search} onChange={(e) => setsearch(e.target.value)} type='text' placeholder='search movie...' className='search-input'/>
            <button type='submit' className='search-button'>Search</button>
        </form>

        {error && <div className='error'>{error}</div>}
        {loading? (
            <div className='loading'>Loading....</div>
        ): (
            <div className='movies-grid'>
            {movies.map((movie) => movie.title.toLocaleLowerCase().startsWith(search) && (
                <Moviecard movie={movie} key={movie.id}/>
            ))}
        </div>
        )}
        
    </div>
  )
}

export default Home