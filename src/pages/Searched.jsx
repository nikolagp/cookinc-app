import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleRecipe from '../components/SingleRecipe';
import { motion } from 'framer-motion';

function Searched() {
  const [searched, setSearched] = useState([]);
  const params = useParams();

  const pageTitle = (query) => {
    const title = query.charAt(0).toUpperCase() + query.slice(1);
    return title;
  };

  const getSearched = async (search) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=c08996dda62a49faad226b9f993c779d&query=${search}&number=9`
    );
    const data = await api.json();
    setSearched(data.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <motion.div
      className="mx-auto"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="">{pageTitle(params.search)}</h2>
      <div className="grid gap-4 mx-auto rounded-md grid-col-1 place-content-center md:grid-cols-2 lg:grid-cols-3">
        {searched.map((pop) => (
          <SingleRecipe key={pop.id} pop={pop} />
        ))}
      </div>
    </motion.div>
  );
}

export default Searched;
