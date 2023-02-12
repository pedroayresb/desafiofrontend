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
  bug: `text-center
    capitalize bg-green-400 text-white rounded-full w-16 text-sm`,
  dark: `text-center
    capitalize bg-gray-800 text-white rounded-full w-16 text-sm`,
  dragon: `text-center
    capitalize bg-purple-500 text-white rounded-full w-16 text-sm`,
  electric: `text-center
    capitalize bg-yellow-400 text-white rounded-full w-16 text-sm`,
  fairy: `text-center
    capitalize bg-pink-400 text-white rounded-full w-16 text-sm`,
  fighting: `text-center
    capitalize bg-red-600 text-white rounded-full w-16 text-sm`,
  fire: `text-center
    capitalize bg-red-400 text-white rounded-full w-16 text-sm`,
  flying: `text-center
    capitalize bg-blue-400 text-white rounded-full w-16 text-sm`,
  ghost: `text-center
    capitalize bg-purple-600 text-white rounded-full w-16 text-sm`,
  grass: `text-center
    capitalize bg-green-500 text-white rounded-full w-16 text-sm`,
  ground: `text-center
    capitalize bg-yellow-600 text-white rounded-full w-16 text-sm`,
  ice: `text-center
    capitalize bg-blue-160 text-white rounded-full w-16 text-sm`,
  normal: `text-center
    capitalize bg-gray-400 text-white rounded-full w-16 text-sm`,
  poison: `text-center
    capitalize bg-purple-400 text-white rounded-full w-16 text-sm`,
  psychic: `text-center
    capitalize bg-pink-500 text-white rounded-full w-16 text-sm`,
  rock: `text-center
    capitalize bg-yellow-500 text-white rounded-full w-16 text-sm`,
  steel: `text-center
    capitalize bg-gray-300 text-white rounded-full w-16 text-sm`,
  water: `text-center
    capitalize bg-blue-500 text-white rounded-full w-16 text-sm`,
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
