import { useParams, useNavigate } from 'react-router-dom';
import PokemonTypes from './PokemonTypes';

interface PokemonTypesProps {
  slot: number;
  type: {
    'name': string;
    url: string;
  };
}

function PokemonCarrouselItem(props: any) {
  const { pokemon } = props;
  const { name, id, sprites } = pokemon;
  const navigate = useNavigate();
  const { pokemonName } = useParams<string>();

  const handleClick = (pokeName: string) => {
    navigate(`/pokemon/${pokeName}`);
  };

  const classNameIfSelected = pokemonName === name
    ? 'border border-yellow-500' : 'border border-black';

  return (
    <button
      type="button"
      key={ name }
      onClick={ () => handleClick(name) }
      className={ `${classNameIfSelected} rounded-xl capitalize flex flex-col
      items-center shadow-lg hover:shadow-xl
      transition duration-300 ease-in-out transform hover:scale-105` }
    >
      <img
        className="grow"
        src={ sprites.front_default }
        alt={ name }
      />
      <h1>
        #
        { id }
      </h1>
    </button>
  );
}

export default PokemonCarrouselItem;
