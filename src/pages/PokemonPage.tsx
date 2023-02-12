import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchPokemonByName } from '../utils/fetchPokemon';
import PokemonPageHeader from '../components/PokemonPageHeader';
import PokemonImage from '../components/PokemonImage';

function PokemonPage() {
  const { pokemonName } = useParams<string>();
  const [shiny, setShiny] = useState(false);

  const { data, isLoading, error }: {
    data: Awaited<ReturnType<typeof fetchPokemonByName>> | undefined;
    isLoading: boolean | undefined;
    error: Error | null;
  } = useQuery(
    [pokemonName],
    () => fetchPokemonByName(pokemonName as string),
  );

  return (
    <div>
      { isLoading && <p>Loading...</p> }
      { error && <p>{ error.message }</p> }
      { data && (
        <div>
          <PokemonPageHeader
            id={ data[0].id }
            name={ data[0].name }
            type={ data[0].types }
            shiny={ shiny }
            setShiny={ setShiny }
          />
          <PokemonImage
            shiny={ shiny }
            array={ data }
          />
        </div>
      ) }
    </div>
  );
}

export default PokemonPage;
