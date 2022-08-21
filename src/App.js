import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Initial from './Components/Initial';
import { PokemonStorage } from './GlobalContext';
import PokemonDetails from './Components/PokemonDetails/PokemonDetails';
// import PokemonDetails from './Components/PokemonDetails/PokemonDetails'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <PokemonStorage>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Initial />} />
              <Route path="/pokemon" element={<PokemonDetails />} />
            </Routes>
          </main>
        </PokemonStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
