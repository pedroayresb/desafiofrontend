import { useState } from 'react';

interface Props {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

function SearchByNameForm({ setName }: Props) {
  const [innerName, setInnerName] = useState('');

  return (
    <div
      className="flex justify-center"
    >
      <input
        type="text"
        placeholder="Search by name"
        onChange={ (event) => {
          setInnerName(event.target.value);
          if (event.target.value === '') {
            setName(event.target.value);
          }
        } }
      />
      <button
        type="button"
        onClick={ () => setName(innerName.toLowerCase()) }
      >
        Search
      </button>
    </div>
  );
}

export default SearchByNameForm;
