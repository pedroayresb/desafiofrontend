import { fetchPokemon } from '../utils/fetchPokemon';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: Awaited<ReturnType<typeof fetchPokemon>>;
}

const MAX_PAGE = 12;

function PokemonPagination(props: Props) {
  const { page, setPage, data } = props;

  return (
    <div
      className="flex justify-center"
    >
      { page > 1 && (
        <button
          type="button"
          className="mr-2"
          data-testid="prev-btn"
          onClick={ () => setPage(page - 1) }
        >
          -
        </button>
      ) }
      <p>
        Page
        {' '}
        { page }
      </p>
      { data?.length === MAX_PAGE && (
        <button
          type="button"
          className="ml-2"
          data-testid="next-btn"
          onClick={ () => setPage(page + 1) }
        >
          +
        </button>
      ) }
    </div>
  );
}

export default PokemonPagination;
