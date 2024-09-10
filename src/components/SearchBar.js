// src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const typeColorMap = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

function SearchBar({ setPokemon, setOffset }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      setPokemon([{
        name: response.data.name,
        color: typeColorMap[response.data.types[0]?.type.name] || '#fff',
        imageUrl: response.data.sprites.front_default,
      }]);
      setOffset(0); // Reset offset to prevent loading more irrelevant data
    } catch (err) {
      console.error(err.message);
      setPokemon([]);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pokémon..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
