import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPokemon } from '../utils/fetchPokemon';
import PokemonListContainer from '../components/PokemonListContainer';
import PokemonPagination from '../components/PokemonPagination';
import SearchByNameForm from '../components/SeachByNameForm';
import SearchByType from '../components/SearchByType';

const PAGE_SIZE = 12;
const START_PAGE = 1;
const STALE_TIME = 6000;

function HomePage() {
  const [page, setPage] = useState(START_PAGE);
  const [pokemonByPage, setPokemonByPage] = useState(PAGE_SIZE);
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const { data, isLoading, error }: {
    data: Awaited<ReturnType<typeof fetchPokemon>> | undefined;
    isLoading: boolean | undefined;
    error: Error | null;
  } = useQuery(
    ['pokemon', page, pokemonByPage, name, type],
    () => fetchPokemon({ pokemonByPage, page, name, type }),
    { staleTime: STALE_TIME },
  );

  return (
    <div
      className="flex flex-col items-center"
    >
      <h1
        id="pokemon-page-header"
        className="text-4xl p-2 text-[#f0ebce] w-screen text-center"
      >
        Pokedex
      </h1>
      <div
        className="flex flex-row items-center p-2"
      >
        <SearchByNameForm
          pokeName={ name }
          setName={ setName }
          setType={ setType }
          setPage={ setPage }
        />
        <SearchByType
          setName={ setName }
          setType={ setType }
          setPage={ setPage }
        />
      </div>
      { isLoading && <p>Loading...</p> }
      <PokemonListContainer
        data={ data as Awaited<ReturnType<typeof fetchPokemon>> }
      />
      <PokemonPagination
        page={ page }
        setPage={ setPage }
        data={ data as Awaited<ReturnType<typeof fetchPokemon>> }
      />
    </div>
  );
}

export default HomePage;
