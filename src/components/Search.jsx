import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handdleSubmit = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <div className="search">
      <form onSubmit={handdleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          // id="search-navbar"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search recipies..."
          value={input}
        />
      </form>
    </div>
  );
}

export default Search;
