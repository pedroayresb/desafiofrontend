import { useNavigate } from 'react-router-dom';
import { fetchPokemon } from '../utils/fetchPokemon';
import PokemonTypes from './PokemonTypes';

interface props {
  data: Awaited<ReturnType<typeof fetchPokemon>>;
}

interface PokemonTypesProps {
  slot: number;
  type: {
    'name': string;
    url: string;
  };
}

function PokemonListContainer(props: props) {
  const { data } = props;

  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div
      className={ `grid grid-cols-3 gap-4 justify-center content-center p-2 w-[85%]
      md:grid-cols-4` }
    >
      { !data && <p>Loading...</p>}
      { data?.map((pokemon: any) => (
        <button
          type="button"
          key={ pokemon.name }
          onClick={ () => handleClick(pokemon.name) }
          className={ `border border-black rounded-xl capitalize flex flex-col 
          items-center p-2 bg-white shadow-lg hover:shadow-xl 
          transition duration-300 ease-in-out transform hover:scale-105` }
        >
          <div
            className="flex flex-col justify-center md:flex-row"
          >
            { pokemon.types.map((type: PokemonTypesProps) => (
              <PokemonTypes
                key={ type.slot }
                type={ type.type }
              />
            )) }
          </div>
          <img
            src={ pokemon.sprites.front_default }
            alt={ pokemon.name }
            className="grow p-2"
          />
          <h1>
            #
            { pokemon.id }
            {' '}
            { pokemon.name }
          </h1>
        </button>
      )) }
    </div>
  );
}

export default PokemonListContainer;
