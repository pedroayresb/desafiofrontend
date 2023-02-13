import { fetchPokemonByName } from '../utils/fetchPokemon';

interface Props {
  shiny: boolean;
  array: Awaited<ReturnType<typeof fetchPokemonByName>>
}

function PokemonImage({ shiny, array }: Props) {
  const SHINY = (poke: Awaited<ReturnType<typeof fetchPokemonByName>>) => {
    const shinyArtwork = poke[0].sprites.other['official-artwork'].front_shiny;
    if (shinyArtwork) return shinyArtwork;
    return poke[0].sprites.front_shiny;
  };

  const NON_SHINY = (poke: Awaited<ReturnType<typeof fetchPokemonByName>>) => {
    const nonShiny = poke[0].sprites.other['official-artwork'].front_default;
    if (nonShiny) return nonShiny;
    return poke[0].sprites.front_default;
  };

  return (
    <div
      className="place-self-center border-8 border-white w-fit"
    >
      <img
        src={ shiny ? SHINY(array) : NON_SHINY(array) }
        alt={ array[0].name }
        className="w-64 bg-[#cccbc0]"
      />
    </div>
  );
}

export default PokemonImage;
