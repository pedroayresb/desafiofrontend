import { fetchPokemon } from '../utils/fetchPokemon';
import PokemonItem from './PokemonItem';

interface props {
  data: Awaited<ReturnType<typeof fetchPokemon>>;
}

function PokemonListContainer(props: props) {
  const { data } = props;

  return (
    <div
      className={ `grid grid-cols-3 gap-4 justify-center content-center p-2
      md:grid-cols-4` }
    >
      { !data && <p>Loading...</p>}
      { data?.map((pokemon: any) => (
        <PokemonItem
          key={ pokemon.name }
          pokemon={ pokemon }
        />
      )) }
    </div>
  );
}

export default PokemonListContainer;
