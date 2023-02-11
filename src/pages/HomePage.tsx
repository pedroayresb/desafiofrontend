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
      <SearchByNameForm
        setName={ setName }
      />
      <SearchByType
        setType={ setType }
        setPage={ setPage }
      />
      { isLoading && <p>Loading...</p> }
      <PokemonListContainer
        data={ data as Awaited<ReturnType<typeof fetchPokemon>> }
      />
      <PokemonPagination
        page={ page }
        setPage={ setPage }
      />
    </div>
  );
}

export default HomePage;
