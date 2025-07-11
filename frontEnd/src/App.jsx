import { useState } from 'react'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/Navbar';

function App() {
   
  const movieNumber = 1;

  return (
    <div>
      <NavBar />
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </div>
    
  )
}

export default App
