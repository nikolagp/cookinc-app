import { React, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import SingleRecipe from '../components/SingleRecipe';

function Meal() {
  const [meal, setMeal] = useState([]);
  const params = useParams();

  const pageTitle = (query) => {
    const title = query.charAt(0).toUpperCase() + query.slice(1);
    return title;
  };

  const getMeal = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=c395478ec467453aacc21e9ad5c2a3c8&query=${name}&number=9`
    );
    const data = await api.json();
    setMeal(data.results);
  };

  useEffect(() => {
    getMeal(params.type);
  }, [params.type]);

  return (
    <motion.div
      className="mx-auto"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="">{pageTitle(params.type)}</h2>
      <div className="grid gap-4 mx-auto rounded-md grid-col-1 place-content-center md:grid-cols-2 lg:grid-cols-3">
        {meal.map((pop) => (
          <SingleRecipe key={pop.id} pop={pop} />
        ))}
      </div>
    </motion.div>
  );
}

export default Meal;
