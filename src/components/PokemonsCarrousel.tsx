import { useQuery } from 'react-query';
import { fetchPokemonCarrousel } from '../utils/fetchPokemon';
import PokemonCarrouselItem from './PokemonCarrouselItem';

interface Props {
  id: number;
}

const LIMIT = 5;
const MINUS = 3;

function PokemonsCarrousel(props: Props) {
  const { id } = props;
  const pokemonMinus = id - MINUS < 0 ? 0 : id - MINUS;
  const { data, isLoading, error }: {
    data: Awaited<ReturnType<typeof fetchPokemonCarrousel>> | undefined;
    isLoading: boolean | undefined;
    error: Error | null;
  } = useQuery(
    ['pokemon', id],
    () => fetchPokemonCarrousel(LIMIT, pokemonMinus),
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div
      className="grid grid-cols-5 gap-4 justify-center content-center p-2"
    >
      { data?.map((pokemon: any) => (
        <PokemonCarrouselItem
          key={ pokemon.name }
          pokemon={ pokemon }
          selected={ pokemon.id === id }
        />
      )) }
    </div>
  );
}

export default PokemonsCarrousel;
