import { searchItems } from '../network/items';
import { toast } from 'react-toastify';
import React, { useState } from 'react';

const SearchItem = () => {
  const [searchParams, setSearchParams] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (searchParams: string | undefined) => {
    if (!searchParams) {
      return;
    }
      searchItems(searchParams)
      .then(data => setResults(data))
      .catch(err => toast(err.message, { type: 'error' }));
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSearch} className="mb-4">
        <label className="block mb-2">
          Search Items:
          <input
            type="text"
            value={searchParams}
            onChange={(e) => {
            setSearchParams(e.target.value)
            handleSearch(e.target.value)
            }}
            className="border p-2 w-full"
          />
        </label>
      </form>
      <ul className="list-disc pl-5 mt-2">
        {results?.length > 0 && results.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItem;
