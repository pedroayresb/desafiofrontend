import { useState, useEffect } from 'react';

interface Props {
  pokeName: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

function SearchByNameForm({ pokeName, setName, setPage, setType }: Props) {
  const [innerName, setInnerName] = useState(pokeName);

  useEffect(() => {
    setInnerName(pokeName);
  }, [pokeName]);

  return (
    <div
      className="flex justify-center p-2"
    >
      <input
        type="text"
        placeholder="Search by name"
        data-testid="search-input"
        value={ innerName }
        onChange={ (event) => {
          setInnerName(event.target.value);
          if (event.target.value === '') {
            setName(event.target.value);
          }
        } }
      />
      <button
        type="button"
        data-testid="search-btn"
        className="bg-[#27394d] text-white rounded"
        onClick={ () => {
          setName(innerName.toLowerCase());
          setType('');
          setPage(1);
        } }
      >
        Search
      </button>
    </div>
  );
}

export default SearchByNameForm;
