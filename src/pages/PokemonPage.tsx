import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchPokemonByName } from '../utils/fetchPokemon';
import PokemonPageHeader from '../components/PokemonPageHeader';
import PokemonImage from '../components/PokemonImage';
import AbilitiesContainer from '../components/AbilitiesContainer';
import MiscelaneousInfo from '../components/MiscelaneousInfo';
import StatsContainer from '../components/StatsContainer';

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div
      className={ `grid grid-cols-1 gap-2 w-[90%] md:w-[80%] 
        lg:w-[70%] xl:w-[60%] 2xl:w-[50%] place-items-center border-[#27394d]
        border-t-[15px] border-r-[20px] border-b-[10px] rounded-lg shadow-md p-2` }
    >
      <PokemonPageHeader
        id={ data![0].id }
        name={ data![0].name }
        type={ data![0].types }
        shiny={ shiny }
        setShiny={ setShiny }
      />
      <div
        className={ `flex flex-col items-center justify-around lg:flex-row
        w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]` }
      >
        <PokemonImage
          shiny={ shiny }
          array={ data! }
        />
        <div
          className="flex flex-col items-center justify-around p-2"
        >
          <AbilitiesContainer
            abilities={ data![0].abilities }
          />
          <MiscelaneousInfo
            weight={ data![0].weight }
            height={ data![0].height }
          />
        </div>
      </div>
      <StatsContainer
        stats={ data![0].stats }
      />
    </div>
  );
}

export default PokemonPage;
