interface Pokemon {
  'name': string;
  'url': string;
}

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

const fetchPokemon = async (limit: number, page: number) => {
  const pokemonList = await fetchPokemonList(limit, page);
  const pokemonData = await fetchPokemonData(pokemonList);

  return pokemonData;
};

const fetchPokemonByName = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return data;
};

const fetchPokemonByType = async (type: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();

  return data;
};

export { fetchPokemon, fetchPokemonByName, fetchPokemonByType };
