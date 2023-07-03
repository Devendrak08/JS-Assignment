// import React from 'react';
// import logo from './logo.svg';


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './pages/Page';
import HomePage from './home/HomePage';
import Character from './character/Character';
import MoviesList from './components/moviesList';
import MovieQuote from './MovieQuote/MovieQuote';


function App() {
  return (
    <>
      {/* <Page /> */}
      <br />
      {/* <MoviesList />  */}
      <br />
      {/* <Character /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviesList />} />
        <Route path="/Character" element={<Character />} />
        <Route path="/book" element={<Page />} />
        <Route path="/movie/:id/quote" element={<MovieQuote />} />
      </Routes>

    </>
  );
}

export default App;