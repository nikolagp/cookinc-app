import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleRecipe from '../components/SingleRecipe';

function Searched() {
  const [searched, setSearched] = useState([]);
  const params = useParams();

  const pageTitle = (query) => {
    const title = query.charAt(0).toUpperCase() + query.slice(1);
    return title;
  };

  const getSearched = async (search) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&query=${search}&number=9`
    );
    const data = await api.json();
    setSearched(data.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="mx-auto">
      <h2 className="">{pageTitle(params.search)}</h2>
      <div className="grid gap-4 mx-auto rounded-md grid-col-1 place-content-center md:grid-cols-2 lg:grid-cols-3">
        {searched.map((pop) => (
          <SingleRecipe key={pop.id} pop={pop} />
        ))}
      </div>
    </div>
  );
}

export default Searched;
