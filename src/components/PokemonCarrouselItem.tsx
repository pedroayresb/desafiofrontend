import { useParams, Link } from 'react-router-dom';
import PokemonTypes from './PokemonTypes';

interface PokemonTypesProps {
  slot: number;
  type: {
    'name': string;
    url: string;
  };
}

function PokemonCarrouselItem(props: any) {
  const { pokemon, selected } = props;
  const { name, id, sprites } = pokemon;
  const { pokemonName } = useParams<string>();

  const classNameIfSelected = selected
    ? 'border border-yellow-500' : 'border border-black';

  return (
    <Link
      to={ `/pokemon/${name}` }
      type="button"
      key={ name }
      className={ `${classNameIfSelected} rounded-xl capitalize flex flex-col
      items-center shadow-lg hover:shadow-xl
      transition duration-300 ease-in-out transform hover:scale-105` }
      data-testid={ `pokemon-carrousel-item-${id}` }
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
    </Link>
  );
}

export default PokemonCarrouselItem;
