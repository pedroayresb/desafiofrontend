import { fetchPokemon } from "../utils/fetchPokemon";

interface Context {
  page: number;
  setPage: (page: number) => void;
  pokemonByPage: number;
  setPokemonByPage: (pokemonByPage: number) => void;
  pokemon: Awaited<ReturnType<typeof fetchPokemon>> | null;
  setPokemon: (pokemon: Awaited<ReturnType<typeof fetchPokemon>>) => void;
}

export default Context;
