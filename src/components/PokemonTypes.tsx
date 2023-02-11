interface PokemonTypesProps {
  type: {
    'name': string;
    url: string;
  };
}

interface ClassNameByType {
  [key: string]: string;
}

const classNameByType: ClassNameByType = {
  bug: 'text-center capitalize bg-green-400 text-white rounded-full w-20 p-2',
  dark: 'text-center capitalize bg-gray-800 text-white rounded-full w-20 p-2',
  dragon: 'text-center capitalize bg-purple-500 text-white rounded-full w-20 p-2',
  electric: 'text-center capitalize bg-yellow-400 text-white rounded-full w-20 p-2',
  fairy: 'text-center capitalize bg-pink-400 text-white rounded-full w-20 p-2',
  fighting: 'text-center capitalize bg-red-600 text-white rounded-full w-20 p-2',
  fire: 'text-center capitalize bg-red-400 text-white rounded-full w-20 p-2',
  flying: 'text-center capitalize bg-blue-400 text-white rounded-full w-20 p-2',
  ghost: 'text-center capitalize bg-purple-600 text-white rounded-full w-20 p-2',
  grass: 'text-center capitalize bg-green-500 text-white rounded-full w-20 p-2',
  ground: 'text-center capitalize bg-yellow-600 text-white rounded-full w-20 p-2',
  ice: 'text-center capitalize bg-blue-200 text-white rounded-full w-20 p-2',
  normal: 'text-center capitalize bg-gray-400 text-white rounded-full w-20 p-2',
  poison: 'text-center capitalize bg-purple-400 text-white rounded-full w-20 p-2',
  psychic: 'text-center capitalize bg-pink-500 text-white rounded-full w-20 p-2',
  rock: 'text-center capitalize bg-yellow-500 text-white rounded-full w-20 p-2',
  steel: 'text-center capitalize bg-gray-300 text-white rounded-full w-20 p-2',
  water: 'text-center capitalize bg-blue-500 text-white rounded-full w-20 p-2',
};

function PokemonTypes(props: PokemonTypesProps) {
  const { type } = props;
  return (
    <h1
      className={ classNameByType[type.name] }
    >
      { type.name }
    </h1>
  );
}

export default PokemonTypes;
