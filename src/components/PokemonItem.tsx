import { Link } from 'react-router-dom';
import PokemonTypes from './PokemonTypes';

interface PokemonTypesProps {
  slot: number;
  type: {
    'name': string;
    url: string;
  };
}

interface Props {
  pokemon: {
    'name': string;
    types: PokemonTypesProps[];
    sprites: {
      'front_default': string;
    };
    id: number;
  };
}

function PokemonItem(prop: Props) {
  const { pokemon } = prop;

  const { name, types, sprites, id } = pokemon;

  return (
    <Link
      to={ `/pokemon/${name}` }
      key={ name }
      data-testid={ `${id}-pokemon-item` }
      className={ `border border-black rounded-xl capitalize flex flex-col 
      items-center p-2 bg-white shadow-lg hover:shadow-xl 
      transition duration-300 ease-in-out transform hover:scale-105` }
    >
      <div
        className="flex flex-col justify-center md:flex-row"
      >
        { types.map((type: PokemonTypesProps) => (
          <PokemonTypes
            key={ type.slot }
            type={ type.type }
          />
        )) }
      </div>
      <img
        src={ sprites.front_default }
        alt={ name }
        className="grow p-2"
      />
      <h1>
        #
        { id }
        {' '}
        { name }
      </h1>
    </Link>
  );
}

export default PokemonItem;
