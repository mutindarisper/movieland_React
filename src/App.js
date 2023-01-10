
import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'




//f4574f78
const API_URL = 'http://www.omdbapi.com?apikey=f4574f78'

const movie1 = {
  "Title": "Me Before You",
  "Year": "2016",
  "imdbID": "tt2674426",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SX300.jpg"
}

const App = () => {
  const [movies, setMovies] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  //function to fetch data

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)

  }

  useEffect(() => {
    searchMovies('The Mask')
    
  }, [])
  
  return (
  <div className='app'>
    <h1>MovieLand</h1>
    <div className='search'>
      <input 
      placeholder='Seach for movies'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value) 

      }
      />
      <img 
      src={SearchIcon}  
      alt="search"
      onClick={() => searchMovies(searchTerm)}/>
    </div>

    {
      movies?.length > 0 ?
      (
        <div className='container'> 
          {/* <MovieCard movie1={movie1} /> */}
          {
            movies.map((movie) => (
              <MovieCard movie={movie} />
            ) )
          }

        </div>

      ) :
      (
         <div className='empty'>
          <h2>No movies found</h2>

         </div>
      )

    }


    

  </div>
  )
}

export default App