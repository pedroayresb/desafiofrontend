import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPokemon } from '../utils/fetchPokemon';

const PAGE_SIZE = 10;
const START_PAGE = 1;
const STALE_TIME = 6000;

function HomePage() {
  const [page, setPage] = useState(START_PAGE);
  const [pokemonByPage, setPokemonByPage] = useState(PAGE_SIZE);
  const { data, isLoading, error } = useQuery(
    ['pokemon', page, pokemonByPage],
    () => fetchPokemon(pokemonByPage, page),
    { staleTime: STALE_TIME },
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      { data?.map((pokemon) => (
        <div key={ pokemon.name }>
          <h3>{ pokemon.name }</h3>
          <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
