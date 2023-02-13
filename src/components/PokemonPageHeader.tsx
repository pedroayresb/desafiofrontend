import PokemonTypes from './PokemonTypes';
import '../styles/PokemonPageHeader.css';

interface Props {
  id: number;
  'name': string;
  type: {
    slot: number;
    type: {
      'name': string;
      url: string;
    };
  }[];
  shiny: boolean;
  setShiny: React.Dispatch<React.SetStateAction<boolean>>;
}

function PokemonPageHeader({ id, name, type, shiny, setShiny }: Props) {
  return (
    <div
      id="pokemon-page-header"
      className="grid grid-flow-col gap-2 items-center p-2 text-[#fafadf] text-lg w-full"
    >
      <p
        className="ml-6 text-center"
      >
        #
        {' '}
        { id }
      </p>
      <div
        className="flex flex-col items-center justify-center"
      >
        <h1 className="capitalize text-2xl">
          { name }
        </h1>
      </div>
      <div
        className="flex flex-col items-center justify-center md:flex-row"
      >
        { type.map((types, index) => (
          <PokemonTypes
            key={ index }
            type={ types.type }
          />
        )) }
      </div>
      <div
        className="flex flex-row items-center justify-center"
      >
        <input
          type="checkbox"
          id="shiny"
          name="shiny"
          data-testid="shiny-checkbox"
          checked={ shiny }
          onChange={ () => setShiny(!shiny) }
        />
      </div>
    </div>
  );
}

export default PokemonPageHeader;
