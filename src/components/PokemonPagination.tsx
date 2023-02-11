interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function PokemonPagination(props: Props) {
  const { page, setPage } = props;

  return (
    <div
      className="flex justify-center"
    >
      <button
        type="button"
        className="mr-2"
        onClick={ () => setPage(page - 1) }
        disabled={ page === 1 }
      >
        Previous
      </button>
      <button
        type="button"
        className="ml-2"
        onClick={ () => setPage(page + 1) }
      >
        Next
      </button>
    </div>
  );
}

export default PokemonPagination;
