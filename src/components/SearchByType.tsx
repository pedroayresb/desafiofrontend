interface Props {
  setType: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const pokemonTypes = [
  'normal',
  'fire',
  'fighting',
  'water',
  'flying',
  'grass',
  'poison',
  'electric',
  'ground',
  'psychic',
  'rock',
  'ice',
  'bug',
  'dragon',
  'ghost',
  'dark',
  'steel',
  'fairy',
];

function SearchByType({ setType, setPage }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    setPage(1);
  };

  return (
    <div className="flex justify-center">
      <select
        onChange={ (event) => handleChange(event) }
      >
        <option value="">All</option>
        { pokemonTypes.map((type) => (
          <option
            value={ type }
            key={ type }
            className="capitalize"
          >
            { type }
          </option>
        )) }
      </select>
    </div>
  );
}

export default SearchByType;
