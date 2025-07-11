import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
   
  const movieNumber = 1;

  return (
     <div>
      {
        movieNumber === 1 ? (
          <MovieCard movie={{title: "Royal movie", release_date: "2025"}} />
        ) : (
          <MovieCard movie={{title: "Nesher movie", release_date: "2024"}} />
        )
      }

      
     </div>
  )
}

export default App
