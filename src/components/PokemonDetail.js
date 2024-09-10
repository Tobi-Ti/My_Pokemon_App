import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Error from './Error';
import './PokemonDetail.css';

const typeColors = {
  fire: '#fba54c', water: '#6da6ff', grass: '#8bbd6e', electric: '#f5e76a', ice: '#99d4d8',
  fighting: '#c24b43', poison: '#a05c8c', ground: '#d4b83c', flying: '#a0a8d3', psychic: '#ea5e79',
  bug: '#a6b91a', rock: '#b7a036', ghost: '#735797', dragon: '#6c62a9', dark: '#6c6464',
  steel: '#9eb7b8', fairy: '#d2a6d2'
};

const PokemonDetail = () => {
  const { id } = useParams(); const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false); const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPokemonDetail = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }; fetchPokemonDetail();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (!pokemon) return null;
  const mainType = pokemon.types[0].type.name;
  return (
    <div className="pokemon-detail" style={{ backgroundColor: typeColors[mainType] || '#f0f0f0' }}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p> <p>Weight: {pokemon.weight}</p> <p>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
    </div>
  );
};
export default PokemonDetail;
