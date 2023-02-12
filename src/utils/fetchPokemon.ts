interface Pokemon {
  'name': string;
  'url': string;
}

interface PokemonData {
  pokemonByPage: number;
  page: number;
  'name': string;
  type: string;
}

interface PokemonType {
  pokemon: Pokemon;
}

const OFFSET = 12;

const fetchPokemonList = async (limit: number, page: number) => {
  const offset = limit * (page - 1);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data = await response.json();

  return data.results;
};

const fetchPokemonData = async (pokemonArray: Pokemon[]) => {
  const pokemonData = await Promise.all(
    pokemonArray.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();

      return data;
    }),
  );
  return pokemonData;
};

const fetchPokemonByName = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  const array = [data];

  return array;
};

const fetchPokemonByType = async (type: string, pokemonByPage: number, page: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();

  const limit = pokemonByPage * page;
  const offset = limit - OFFSET;
  const pokemonList = data.pokemon.slice(offset, limit);
  const onlyPokemon = pokemonList.map((pokemon: PokemonType) => pokemon.pokemon);

  return onlyPokemon;
};

const fetchPokemon = async ({ pokemonByPage, page, name, type }: PokemonData) => {
  if (name.length > 0) {
    const pokemonData = await fetchPokemonByName(name);
    return pokemonData;
  }

  if (type.length > 0) {
    const pokemonList = await fetchPokemonByType(type, pokemonByPage, page);
    const pokemonData = await fetchPokemonData(pokemonList);

    return pokemonData;
  }

  const pokemonList = await fetchPokemonList(pokemonByPage, page);
  const pokemonData = await fetchPokemonData(pokemonList);

  return pokemonData;
};

const fetchPokemonCarrousel = async (pokemonByPage: number, id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonByPage}&offset=${id}`);
  const data = await response.json();
  const pokemonData = await fetchPokemonData(data.results);

  return pokemonData;
};

export { fetchPokemon, fetchPokemonByName, fetchPokemonByType, fetchPokemonCarrousel };
