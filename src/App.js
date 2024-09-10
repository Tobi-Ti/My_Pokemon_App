

// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader'; 

const PokemonList = React.lazy(() => import('./components/PokemonList'));
const PokemonDetail = React.lazy(() => import('./components/PokemonDetail'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
